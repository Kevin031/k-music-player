/**
 * 歌曲接口
 */
export interface ISong {
  /**
   * 歌曲名称
   */
  title: string;
  /**
   * 歌手名称
   */
  artist: string;
  /**
   * 歌曲封面
   */
  poster: string;
  /**
   * 歌曲时长，单位s
   */
  time: number;
  /**
   * 专辑名称
   */
  album: string;
  /**
   * 资源路径
   */
  src: string;
}
