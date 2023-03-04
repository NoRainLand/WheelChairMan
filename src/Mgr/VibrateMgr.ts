/*
 * @Author: NoRain 
 * @Date: 2023-02-11 14:59:35 
 * @Last Modified by: NoRain
 * @Last Modified time: 2023-03-04 16:57:09
 */

import { LocalStorageEnum } from "../Enum/LocalStorageEnum";
import PlatformMgr from "../Platform/PlatformMgr";
import LocalStorageMgr from "./LocalMgr";

/**震动管理 */
export default class VibrateMgr {

    private static $sign: string = 'isVibrate';



    /**震动 */
    private static $isVibrate: number = -1;


    /**是否震动 */
    static get isVibrate(): boolean {
        if (this.$isVibrate == -1) {
            let str = LocalStorageMgr.getItem(LocalStorageEnum.ISVIBRATE);
            if (str) {
                this.$isVibrate = Number(str);
            } else {
                this.$isVibrate = 1;
                LocalStorageMgr.setItem(LocalStorageEnum.ISVIBRATE, "1");
            }
        }
        return !!this.$isVibrate;
    }
    static set isVibrate(value: boolean) {
        if (value) {
            this.$isVibrate = 1;
        } else {
            this.$isVibrate = 0;
        }
        LocalStorageMgr.setItem(LocalStorageEnum.ISVIBRATE, this.$isVibrate.toString());
    }


    /**自定义震动时间
       * 默认间隔15ms
       */
    public static vibrateShort(time: number = 15) {
        if (PlatformMgr.instance.isMiniGame && this.isVibrate) {
            let count = Math.ceil(time / 15);
            let index = 0;
            let obj = { count: count, index: index };
            Laya.timer.loop(16, obj, () => {
                if (this.isVibrate) {
                    PlatformMgr.instance.miniGame && PlatformMgr.instance.miniGame.vibrateShort();
                } else {
                    Laya.timer.clearAll(obj);
                }
                index++;
                if (index > count) {
                    Laya.timer.clearAll(obj);
                }
            });
        }
    }


    /**长震动 */
    public static vibrateLong() {
        if (PlatformMgr.instance.isMiniGame && this.isVibrate) {
            PlatformMgr.instance.miniGame && PlatformMgr.instance.miniGame.vibrateLong();
        }
    }







}