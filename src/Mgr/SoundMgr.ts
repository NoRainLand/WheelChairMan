/*
 * @Author: NoRain 
 * @Date: 2023-02-06 19:49:07 
 * @Last Modified by: NoRain
 * @Last Modified time: 2023-03-08 16:00:52
 */
import { LocalStorageEnum } from "../Enum/LocalStorageEnum";
import { MusicEnum } from "../Enum/MusicEnum";
import { SoundEnum } from "../Enum/SoundEnum";
import ObjUtil from "../Util/ObjUtil";
import ResLoader from "../Util/ResLoader";
import LocalStorageMgr from "./LocalMgr";
import SoundManager = Laya.SoundManager;
import SoundChannel = Laya.SoundChannel;
import Handler = Laya.Handler;

/**声音管理类 */
export default class SoundMgr {

    private static _instance: SoundMgr;
    public static get instance(): SoundMgr {
        return this._instance ? this._instance : this._instance = new SoundMgr();
    }






    private $MusicVolume = -1;
    /**背景音乐音量 */
    get MusicVolume(): number {
        if (this.$MusicVolume == -1) {
            let str = LocalStorageMgr.getItem(LocalStorageEnum.MUSICVOLUME);
            if (str === null) {
                this.$MusicVolume = 0.7;
                LocalStorageMgr.setItem(LocalStorageEnum.MUSICVOLUME, this.$MusicVolume.toString());
            } else {
                this.$MusicVolume = Number(str);
            }
        }
        return this.$MusicVolume;
    }
    set MusicVolume(value: number) {
        if (!isNaN(value)) {
            this.$MusicVolume = value;
            SoundManager.musicVolume = value;
            this.musicChannel && (this.musicChannel.volume = value);
            LocalStorageMgr.setItem(LocalStorageEnum.MUSICVOLUME, this.$MusicVolume.toString());
        }
    }

    private $SoundVolume = -1;
    /**背景音乐音量 */
    get SoundVolume(): number {
        if (this.$SoundVolume == -1) {
            let str = LocalStorageMgr.getItem(LocalStorageEnum.SOUNDVOLUME);
            if (str === null) {
                this.$SoundVolume = 0.7;
                LocalStorageMgr.setItem(LocalStorageEnum.SOUNDVOLUME, this.$SoundVolume.toString());
            } else {
                this.$SoundVolume = Number(str);
            }
        }
        return this.$SoundVolume;
    }
    set SoundVolume(value: number) {
        if (!isNaN(value)) {
            this.$SoundVolume = value;
            SoundManager.soundVolume = value;
            LocalStorageMgr.setItem(LocalStorageEnum.SOUNDVOLUME, this.$SoundVolume.toString());
        }
    }





    private musicChannel: SoundChannel;


    /**播放音乐 */
    playMusic(musicEnum: MusicEnum, complete: Handler, loopTimes: number = 0) {
        let url = ResLoader.instance.getUrlById(musicEnum);
        if (url) {
            this.musicChannel = SoundManager.playMusic(url, loopTimes, complete);
            if (this.musicChannel) {
                this.musicChannel.volume = SoundManager.musicVolume;
            }
        }
    }


    /**暂停音乐 */
    pauseMusic() {
        if (this.musicChannel) {
            this.musicChannel.pause();
        }
    }

    /**继续音乐 */
    resumeMusic() {
        if (this.musicChannel) {
            this.musicChannel.resume();
        }
    }


    /**播放音效 */
    playSound(soundEnum: SoundEnum, loopTimes: number = 1) {
        let url = ResLoader.instance.getUrlById(soundEnum);
        if (url) {
            SoundManager.playSound(url, loopTimes);
        }
    }




    //---------------------




    musicList: Array<number>;


    playBgm(index: number = 0) {
        if (!this.musicList) {
            this.musicList = [];
            for (let value in MusicEnum) {
                if (!isNaN(Number(value))) {
                    this.musicList.push(Number(value));
                }
            }
            ObjUtil.shuffle(this.musicList);
        }
        this.playMusic(this.musicList[index], Handler.create(this, () => {
            index++;
            if (index > this.musicList.length) {
                index = 0;
            }
            this.playBgm(index);
        }), 1);

    }







}