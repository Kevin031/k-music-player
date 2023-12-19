import { defineStore } from "pinia";
import { ref } from "vue";

export const usePlayerStore = defineStore("player", () => {
  const currentTime = ref(0);
  const audioRef = ref();

  const songInfo = ref({
    title: "",
    artist: "",
    album: "",
    poster: "",
    src: "",
    time: 0,
  });

  const updateSongInfo = (data) => {
    currentTime.value = 0;
    songInfo.value = {
      ...songInfo.value,
      ...data,
    };
  };

  const updateCurrentTime = (value) => {
    currentTime.value = Math.floor(value);
  };

  const playing = ref(false);

  const setPlayOrPause = (bool) => {
    playing.value = bool;
  };

  const setAudioRef = (audio) => {
    audioRef.value = audio;
  };

  return {
    songInfo,
    currentTime,
    playing,
    updateCurrentTime,
    updateSongInfo,
    setPlayOrPause,
    setAudioRef,
    audioRef,
  };
});
