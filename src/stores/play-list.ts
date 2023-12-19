import { defineStore } from "pinia";
import { ref } from "vue";
import { ISong } from "../types/song";

export const usePlayListStore = defineStore("playList", () => {
  const playList = ref<ISong[]>([]);

  /**
   * 添加至播放列表
   * @param song
   */
  const addToList = (song: ISong) => {
    // 清空已有列表
    removeFromList(song);
    playList.value.unshift(song);
  };

  /**
   * 从列表中移除歌曲
   * @param song
   */
  const removeFromList = (song: ISong) => {
    // 清空已有列表
    for (let i = 0; i < playList.value.length; i++) {
      let cur = playList.value[i];
      if (cur.title === song.title) {
        playList.value.splice(i, 1);
      }
    }
  };

  return {
    playList,
    addToList,
    removeFromList,
  };
});
