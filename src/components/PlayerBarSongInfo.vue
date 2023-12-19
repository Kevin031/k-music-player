<template>
  <div class="song-info">
    <img
      class="song-info__poster"
      :src="playerStore.songInfo.poster"
      v-if="playerStore.songInfo.poster"
    />
    <div v-else class="song-info__poster" />
    <div class="song-info__content">
      <div class="song-info__name">
        {{ playerStore.songInfo.title || "暂无歌曲" }}
      </div>
      <div class="song-info__desc">
        {{ playerStore.songInfo.artist || "未知歌手" }}
      </div>
    </div>
    <div class="song-info__actions">
      <div class="action">
        <Icon :size="16" name="fill-like" />
      </div>
      <div class="action">
        <Icon :size="16" name="add" />
      </div>
      <div
        class="action"
        @click="
          controllerStore.setControllerVisible(
            'playList',
            !controllerStore.getControllerVisible('playList')
          )
        "
      >
        <Icon :size="16" name="list" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { usePlayerStore } from "../stores/player";
import { useControllerStore } from "../stores/controller";
import Icon from "./Icon.vue";

const playerStore = usePlayerStore();
const controllerStore = useControllerStore();
</script>

<style lang="scss">
@import "../styles/variables.scss";
// 歌曲信息
.song-info {
  display: flex;
  align-items: center;
  width: 242px;
  &__poster {
    width: 48px;
    height: 48px;
    background-color: #ccc;
  }
  &__content {
    padding-left: 8px;
  }
  &__name {
    font-size: 14px;
    margin-bottom: 6px;
  }
  &__desc {
    font-size: 12px;
    color: $color-neutral-1;
  }
  &__actions {
    display: flex;
    margin-left: 4px;
    .action img {
      width: 16px;
      height: 16px;
      margin-left: 8px;
      display: block;
    }
  }
}
</style>
