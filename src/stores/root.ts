import { defineStore } from 'pinia';
import { ref } from 'vue';
import { ScreenSize } from '~/config/device';

const useRootStore = defineStore('root', () => {
  const deviceType = ref<ScreenSize>(ScreenSize.DESKTOP);

  function addDeviceListener() {
    window.addEventListener('resize', () => {
      if (window.innerWidth < ScreenSize.MOBILE) {
        deviceType.value = ScreenSize.MOBILE;
      } else if (window.innerWidth < ScreenSize.TABLET) {
        deviceType.value = ScreenSize.TABLET;
      } else {
        deviceType.value = ScreenSize.DESKTOP;
      }
    })
  }
  
  function init() {
    addDeviceListener();
  }

  return {
    deviceType,

    init,
  }
});

export default useRootStore;