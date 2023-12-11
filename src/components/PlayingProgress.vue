<template>
  <div class="playing-progress">
    <div class="time">1:42</div>
    <div class="track">
      <div class="current"></div>
    </div>
    <div class="time">4:00</div>
  </div>
</template>

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
    .current {
      border-radius: 2px;
      height: 4px;
      width: 50%;
      background-color: #fff;
    }
  }
  .time {
    font-size: 12px;
    color: $color-neutral-2;
  }
}
</style>
