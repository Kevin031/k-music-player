<template>
  <div class="song-list-wrapper">
    <div class="song-list-table">
      <div class="list-head">
        <div>TITLE</div>
        <div>ALBUM</div>
        <div>ARTIST</div>
        <div class="col-time">
          <Icon :size="16" name="time" />
        </div>
      </div>
      <div class="list-item" v-for="(item, idx) in songList">
        <div class="num">
          {{ idx + 1 }}
        </div>
        <div class="play-btn">
          <Icon :size="16" name="play-action" />
        </div>
        <div class="song-info">
          <img class="poster" />
          <div class="content">
            <div class="name">
              {{ item.name }}
            </div>
            <div class="artist">
              {{ item.artist }}
            </div>
          </div>
        </div>
        <div class="secondary">{{ item.album }}</div>
        <div class="secondary">{{ item.artist }}</div>
        <div class="secondary col-time">{{ item.time }}</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import Icon from "./Icon.vue";

const songList = ref(
  Array(100).fill({
    name: "歌曲名称",
    album: "专辑",
    artist: "演唱者",
    time: "3:29",
  })
);
</script>

<style lang="scss">
@import "../styles/variables.scss";

.song-list-wrapper {
  padding: 22px 48px;
}
.song-list-table {
  width: 100%;
  padding-left: 32px;
  box-sizing: border-box;

  .list-head {
    display: flex;
    border-bottom: solid 1px $color-neutral-1;
    padding-bottom: 4px;
    margin-bottom: 16px;
    > div {
      flex: 1;
      font-weight: bold;
      text-align: left;
      font-size: 10px;
      color: $color-neutral-1;
      line-height: 16px;
    }
  }

  .list-item {
    display: flex;
    align-items: center;
    position: relative;
    margin-bottom: 16px;
    width: calc(100% + 32px);
    transform: translateX(-32px);
    border-radius: 4px;

    .play-btn {
      position: absolute;
      left: 1px;
      cursor: pointer;
      display: none;
    }

    &:hover {
      background: rgba(255, 255, 255, 0.1);
      .play-btn {
        display: block;
      }
      .num {
        opacity: 0;
      }
    }

    > div {
      flex: 1;
      padding: 0 8px;
      box-sizing: border-box;
    }

    .num {
      text-align: center;
      width: 32px;
      text-align: center;
      font-size: 12px;
      color: $color-neutral-1;
      flex: auto;
      flex-grow: 0;
    }

    .song-info {
      display: flex;
      align-items: center;
      .poster {
        width: 48px;
        height: 48px;
        background-color: #ccc;
        margin-right: 8px;
      }
      .name {
        font-size: 14px;
        font-weight: bold;
        margin-bottom: 4px;
      }
      .artist {
        font-size: 12px;
        color: $color-neutral-1;
      }
    }

    .secondary {
      font-size: 12px;
      color: $color-neutral-1;
    }
  }

  div.col-time {
    max-width: 100px;
    flex: auto;
    text-align: right;
    display: flex;
    justify-content: flex-end;
  }
}
</style>
