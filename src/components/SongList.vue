<template>
  <div class="song-list-wrapper">
    <div class="song-list-controller">
      <div class="controller-l">
        <div class="action" @click="playAllList">
          <Icon :size="54" name="play-action" />
        </div>
      </div>
      <div class="controller-r">
        <div class="search-input">
          <Icon class="search-icon" :size="16" name="Search" />
          <input placeholder="输入关键词搜索" />
        </div>
      </div>
    </div>
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
        <div class="play-btn" @click="handlePlay(item)">
          <Icon :size="16" name="play-action" />
        </div>
        <div class="song-info">
          <img class="poster" :src="item.poster" />
          <div class="content">
            <div class="name">
              {{ item.title }}
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
import { usePlayerStore } from "../stores/player";
import { usePlayListStore } from "../stores/play-list";
import { ISong } from "../types/song";

const playerStore = usePlayerStore();
const playListStore = usePlayListStore();

const songList = ref([
  {
    title: "摩天动物园",
    album: "摩天动物园",
    artist: "G.E.M.邓紫棋",
    time: 200,
    src: "/public/local-music/摩天动物园.mp3",
    poster: "/public/local-music/poster.jpeg",
  },
  {
    title: "句号",
    album: "摩天动物园",
    artist: "G.E.M.邓紫棋",
    time: 200,
    src: "/public/local-music/句号.mp3",
    poster: "/public/local-music/poster.jpeg",
  },
]);

const playAllList = () => {
  for (let i = songList.value.length - 1; i >= 0; i--) {
    let song = songList.value[i];
    playListStore.addToList(song);
  }
  handlePlay(playListStore.playList[0]);
};

const handlePlay = (song: ISong) => {
  // 添加到播放列表
  playListStore.addToList(song);
  playerStore.updateSongInfo({
    title: song.title,
    poster: song.poster,
    artist: song.artist,
    album: song.album,
    src: song.src,
  });
};
</script>

<style lang="scss">
@import "../styles/variables.scss";

.song-list-wrapper {
  padding: 22px 48px;
}
.song-list-controller {
  padding-left: 32px;
  margin-bottom: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .action {
    cursor: pointer;
    &:hover {
      opacity: 0.8;
    }
  }
  .search-input {
    background: rgba(255, 255, 255, 0.4);
    border-radius: 16px;
    overflow: hidden;
    box-sizing: border-box;
    position: relative;
    .search-icon {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      left: 16px;
    }
    input {
      background: transparent;
      border: none;
      height: 32px;
      padding: 0 16px 0 48px;
      width: 200px;
      font-size: 10px;
      color: #fff;
      &:focus {
        outline: none;
      }
      &::-webkit-input-placeholder {
        color: $color-neutral-1;
      }
    }
  }
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
      box-sizing: border-box;
      padding: 0 8px;
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
