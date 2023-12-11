<template>
  <div class="layout">
    <div class="layout__main">
      <div class="layout__sidebar">
        <SideBar />
      </div>
      <div class="layout__content">
        <SongList />
      </div>
    </div>
    <div class="layout__footer">
      <PlayerBar />
    </div>
  </div>
</template>

<script setup lang="ts">
import SideBar from "./components/SideBar.vue";
import PlayerBar from "./components/PlayerBar.vue";
import SongList from "./components/SongList.vue";
</script>

<style lang="scss">
@import "./styles/variables.scss";

.layout {
  height: 100vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  &__main {
    flex: 1;
    display: flex;
    align-items: stretch;
    background-color: $color-secondary-1;
    overflow: hidden;
  }
  &__sidebar {
    // width: 256px;
    width: 0;
  }
  &__content {
    flex: 1;
    background-color: $color-secondary-2;
    overflow-x: hidden;
    overflow-y: auto;
  }
  &__footer {
    height: 96px;
    background-color: $color-secondary-1;
    border-top: solid 1px $color-secondary-3;
  }
}
</style>
