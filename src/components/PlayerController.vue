<template>
  <div class="controller">
    <audio ref="audioRef" />
    <div class="action">
      <Icon :size="16" name="Shuffle" />
    </div>
    <div class="action">
      <Icon :size="16" name="Back" />
    </div>
    <div class="action" @click="handleTogglePlaying">
      <Icon :size="28" :name="playerStore.playing ? 'Pause' : 'Play'" />
    </div>
    <div class="action">
      <Icon :size="16" name="Forward" />
    </div>
    <div class="action">
      <Icon :size="16" name="Repeat" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { watch, ref, effect } from "vue";
import Icon from "./Icon.vue";
import { usePlayerStore } from "../stores/player";
import { usePlayListStore } from "../stores/play-list";
import { ISong } from "../types/song";

const audioRef = ref();
const playerStore = usePlayerStore();
const playListStore = usePlayListStore();

effect(() => {
  const audio = audioRef.value;
  playerStore.setAudioRef(audio);
  if (audio) {
    audio.onloadedmetadata = () => {
      playerStore.updateSongInfo({
        time: Math.round(audio.duration),
      });
    };
    audio.onplay = () => {
      // console.log("开始播放", evt);
    };
    audio.onended = () => {
      playerStore.updateCurrentTime(0);
      playerStore.setPlayOrPause(false);
    };
    audio.ontimeupdate = (evt) => {
      const currentTime = evt.target.currentTime;
      playerStore.updateCurrentTime(currentTime);
    };
  }
});

/**
 * 开始播放
 * @param song
 */
const playAudio = (song: ISong) => {
  if (!song.src) {
    alert("暂无可播放的歌曲");
    playerStore.setPlayOrPause(false);
    return;
  }
  const audio = audioRef.value;
  audio.src = song.src;
  audio.currentTime = playerStore.currentTime;
  playerStore.setPlayOrPause(true);
  audio.play();
};

const pauseAudio = () => {
  const audio = audioRef.value;
  audio.pause();
};

const handleTogglePlaying = () => {
  playerStore.setPlayOrPause(!playerStore.playing);
};

const handleStartToPlay = () => {
  playerStore.updateCurrentTime(0);
  let song = playerStore.songInfo;
  playAudio(song);
  // 添加到播放列表
  playListStore.addToList(song);
};

watch(
  () => playerStore.songInfo.src,
  () => {
    handleStartToPlay();
  }
);

watch(
  () => playerStore.playing,
  () => {
    playerStore.playing ? playAudio(playerStore.songInfo) : pauseAudio();
  }
);
</script>

<style lang="scss">
@import "../styles/variables.scss";

.controller {
  display: flex;
  align-items: center;
  overflow: hidden;
  margin-bottom: 8px;
  .action {
    margin: 0 6px;
  }
}
</style>
