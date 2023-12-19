<template>
  <div class="playing-progress">
    <div class="time">{{ currentTimeStr }}</div>
    <div ref="trackRef" class="track" @click="handleClickTrack">
      <div class="current" :style="`width: ${progress}%;`">
        <div class="drag-point"></div>
      </div>
    </div>
    <div class="time">{{ remainTimeStr }}</div>
  </div>
</template>

<script setup lang="ts">
import { computed, effect, ref } from "vue";
import { usePlayerStore } from "../stores/player";

const playerStore = usePlayerStore();

const trackRef = ref();
let trackLeft;
let trackWidth;
effect(() => {
  if (trackRef.value) {
    playerStore.playing;
    const { offsetLeft, offsetWidth } = trackRef.value;
    trackLeft = offsetLeft;
    trackWidth = offsetWidth;
  }
});
const handleClickTrack = (evt) => {
  const { clientX } = evt;
  let progress = (clientX - trackLeft) / trackWidth;
  let newTime = Math.floor(playerStore.songInfo.time * progress);
  playerStore.audioRef.currentTime = newTime;
  playerStore.updateCurrentTime(newTime);
};

const progress = computed(() => {
  let result = playerStore.songInfo.time
    ? (playerStore.currentTime / playerStore.songInfo.time) * 100
    : 0;
  if (result > 99) {
    result = 100;
  }
  return result;
});

const formatTimeStr = (value) => {
  let min: any = Math.floor(value / 60);
  let sec: any = value % 60;
  min = Math.max(min, 0);
  sec = Math.max(sec, 0);
  if (sec < 10) {
    sec = "0" + sec;
  }
  return `${min}:${sec}`;
};

const currentTimeStr = computed(() => {
  return formatTimeStr(playerStore.currentTime);
});

const remainTimeStr = computed(() => {
  return formatTimeStr(playerStore.songInfo.time - playerStore.currentTime - 1);
});
</script>

<style lang="scss">
@import "../styles/variables.scss";

.playing-progress {
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  .track {
    flex: 1;
    max-width: 504px;
    height: 4px;
    background-color: $color-neutral-3;
    border-radius: 2px;
    overflow: hidden;
    margin: 0 8px;
    cursor: pointer;
    .current {
      border-radius: 2px;
      height: 4px;
      width: 50%;
      background-color: #fff;
      position: relative;
    }
    .drag-point {
      width: 4px;
      height: 4px;
      border-radius: 50%;
      // background-color: red;
      position: absolute;
      top: 0;
      right: 0;
      cursor: grab;
    }
  }
  .time {
    min-width: 30px;
    text-align: center;
    font-size: 12px;
    color: $color-neutral-2;
  }
}
</style>
