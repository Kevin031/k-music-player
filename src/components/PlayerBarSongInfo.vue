<template>
  <div class="song-info">
    <img class="song-info__poster" />
    <div class="song-info__content">
      <div class="song-info__name">No one knows</div>
      <div class="song-info__desc">Queens of the Stone Age</div>
    </div>
    <div class="song-info__actions">
      <div class="action">
        <Icon :size="16" name="fill-like" />
      </div>
      <div class="action">
        <Icon :size="16" name="add" />
      </div>
      <div class="action">
        <Icon :size="16" name="list" />
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import "../styles/variables.scss";
// 歌曲信息
.song-info {
  display: flex;
  align-items: center;
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
