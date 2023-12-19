<template>
  <div class="playbar">
    <PlayerBarSongInfo />
    <div class="center-tools">
      <PlayerController />
      <PlayingProgress />
    </div>
    <div class="right-tools">
      <div class="action">
        <Icon :size="16" name="listen-on" />
      </div>
      <div class="volumn">
        <div class="volumn__track">
          <div class="volumn__progress"></div>
        </div>
      </div>
      <div class="action">
        <Icon :size="16" name="full-screen" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Icon from "./Icon.vue";
import PlayerBarSongInfo from "./PlayerBarSongInfo.vue";
import PlayerController from "./PlayerController.vue";
import PlayingProgress from "./PlayingProgress.vue";
import { usePlayerStore } from "../stores/player";

const playerStore = usePlayerStore();
</script>

<style lang="scss">
@import "../styles/variables.scss";

.playbar {
  color: $color-secondary-4;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;

  .action {
    &:hover {
      opacity: 0.8;
      cursor: pointer;
    }
  }

  // 中间工具栏
  .center-tools {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  // 右侧工具栏
  .right-tools {
    display: flex;
    align-items: center;

    .volumn {
      margin-left: 10px;
      margin-right: 10px;
      &__track {
        height: 4px;
        width: 72px;
        border-radius: 2px;
        background-color: #777;
        display: flex;
        overflow: hidden;
      }
      &__progress {
        background-color: #b3b3b3;
        height: 100%;
        width: 50%;
        border-radius: 2px;
      }
    }
  }
}
</style>
