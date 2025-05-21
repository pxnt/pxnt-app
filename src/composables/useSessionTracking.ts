import type { SessionTracking } from '~/types/session_tracking';


export default function useSessionTracking() {

  function checkIfNeedToTrack() {
    // for self tracking
    const isDisabled = localStorage.getItem('disable_session_tracking');

    if (isDisabled) {
      return false;
    }

    return true;
  }

  async function getFingerprint() {
    // @ts-ignore
    const FingerprintJS = await import('https://openfpcdn.io/fingerprintjs/v4');
    const fp = await FingerprintJS.load();
    const result = await fp.get();

    return result;
  }

  async function pushSessionTracking(payload: SessionTracking) {
    try {
      await fetch('/.netlify/functions/sessionTracking', {
        method: 'POST',
        body: JSON.stringify(payload),
      });
    } catch (error) {
      console.error(error);
    }
  }

  async function addSessionTracking() {
    if (!checkIfNeedToTrack()) {
      return;
    }

    const data = await getFingerprint();

    const payload: SessionTracking = {
      fingerprint: data.visitorId as string,
      confidence_score: data.confidence.score as number,
    }

    if (data?.components?.screenResolution?.value && data.components.screenResolution.value.length) {
      payload.screen_resolution = `${data.components.screenResolution.value[0]}x${data.components.screenResolution.value[1]}`;
    }

    if (data?.components?.platform?.value) {
      payload.platform = data.components.platform.value as string;
    }

    if (data?.components?.timezone?.value) {
      payload.timezone = data.components.timezone.value as string;
    }

    await pushSessionTracking(payload);

  }

  return {
    addSessionTracking,
  }
}