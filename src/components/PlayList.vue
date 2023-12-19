<template>
  <div
    class="play-list"
    v-show="controllerStore.getControllerVisible('playList')"
  >
    <div class="play-list__title">
      <div>播放列表</div>
    </div>
    <div class="play-list__list">
      <div v-for="item in playListStore.playList" class="play-list__item">
        <img class="poster" :src="item.poster" />
        <div class="info">
          <div class="title">{{ item.title }}</div>
          <div class="artist">{{ item.artist }}</div>
        </div>
        <div class="action">
          <Icon :size="16" name="play-action" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import Icon from "./Icon.vue";
import { usePlayerStore } from "../stores/player";
import { useControllerStore } from "../stores/controller";
import { usePlayListStore } from "../stores/play-list";

const playerStore = usePlayerStore();
const controllerStore = useControllerStore();
const playListStore = usePlayListStore();
</script>

<style lang="scss">
@import "../styles/variables.scss";
.play-list {
  position: fixed;
  bottom: 96px;
  left: 0;
  background-color: $color-secondary-1;
  width: 242px;
  height: 400px;
  display: flex;
  flex-direction: column;
  z-index: 10;

  &__title {
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: bold;
  }

  &__list {
    padding: 0 8px;
    flex: 1;
    overflow-y: auto;
  }

  &__item {
    padding: 8px;
    border-radius: 4px;
    display: flex;
    align-items: center;
    .poster {
      width: 36px;
      height: 36px;
      border-radius: 50%;
      flex-shrink: 0;
    }
    .info {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      padding-left: 8px;
      flex: 1;
      .title {
        font-size: 14px;
        margin-bottom: 8px;
        font-weight: bold;
        color: #fff;
      }
      .artist {
        font-size: 12px;
        color: $color-neutral-1;
      }
    }
    .action {
      opacity: 0;
      cursor: pointer;
    }
    &:hover {
      background: rgba(255, 255, 255, 0.1);
      .action {
        opacity: 1;
      }
    }
  }
}
</style>
