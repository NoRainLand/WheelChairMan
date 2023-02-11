/*
 * @Author: NoRain 
 * @Date: 2023-02-06 19:49:07 
 * @Last Modified by: NoRain
 * @Last Modified time: 2023-02-11 15:07:21
 */
import SoundManager = Laya.SoundManager;

/**声音管理类 */
export default class SoundMgr {

    /**音乐路径 */
    private static readonly $musicBaseUrl: string = "";
    /**音乐后缀 */
    private static readonly $musicUrlStuff: string = ".mp3"


    /**声音路径 */
    private static readonly $soundBaseUrl: string = "";
    /**声音后缀 */
    private static readonly $soundUrlStuff: string = ".mp3"









    /**修改音乐音量 */
    static changeMusicVolume(value: number) {
        SoundManager.musicVolume = value;
    }
    /**修改音效音量 */
    static changeSoundVolume(value: number) {
        SoundManager.soundVolume = value;
    }




    /**播放音效 */
    static playSound(soundEnum: string, loopTimes?: number) {
        SoundManager.playSound(this.$soundBaseUrl + soundEnum + this.$soundUrlStuff, loopTimes);
    }





}