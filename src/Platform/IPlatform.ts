/**
 * 平台实例接口
 */
export default interface IPlatform {
    /**短震动 */
    vibrateShort();
    /**长震动 */
    vibrateLong();

    /**播放激励视频 */
    showVideo(caller: any, callback: Function);
}