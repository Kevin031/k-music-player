import { defineStore } from "pinia";
import { ref } from "vue";

export const useControllerStore = defineStore("controller", () => {
  const controllerVisible = ref({
    playList: false,
    fullScreenLyric: false,
  });

  /**
   * 设置控件可见性
   * @param {string} name 控件名称
   * @param {boolean} visible 控件可见性
   */
  const setControllerVisible = (name: string, visible: boolean) => {
    controllerVisible.value[name] = visible;
  };

  const getControllerVisible = (name) => {
    return controllerVisible.value[name];
  };

  return {
    controllerVisible,
    setControllerVisible,
    getControllerVisible,
  };
});
