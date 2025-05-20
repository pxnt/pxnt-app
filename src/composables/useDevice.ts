import { computed } from 'vue';
import useRootStore from '~/stores/root';
import { ScreenSize } from '~/config/device';

export default function useDevice() {
  const rootStore = useRootStore();

  const isMobile = computed(() => rootStore.deviceType === ScreenSize.MOBILE);
  const isTablet = computed(() => rootStore.deviceType === ScreenSize.TABLET);
  const isDesktop = computed(() => rootStore.deviceType === ScreenSize.DESKTOP);

  return {
    isMobile,
    isTablet,
    isDesktop,
  }
}
