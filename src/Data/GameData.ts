/*
 * @Author: NoRain 
 * @Date: 2023-02-06 17:30:20 
 * @Last Modified by: NoRain
 * @Last Modified time: 2023-02-18 10:26:33
 */

import { LocalStorageEnum } from "../Enum/LocalStorageEnum";
import LocalStorageMgr from "../Mgr/LocalMgr";

/**游戏数据 */
export default class GameData {




    private static $userHead: string = "";
    /**用户头像 */
    static get userHead(): string {
        if (!this.$userHead) {
            this.$userHead = LocalStorageMgr.getItem(LocalStorageEnum.USERHEAD)
        }
        return this.$userHead;
    }


    private static $UID: string = "";
    /**用户唯一ID */
    static get UID(): string {
        if (!this.$UID) {
            let uid = LocalStorageMgr.getItem(LocalStorageEnum.UID);
            if (uid) {
                this.$UID = uid;
            } else {
                this.$UID = (Math.random() * 100000000).toFixed();//临时随机生成一个
                LocalStorageMgr.setItem(LocalStorageEnum.UID, this.$UID);
            }
        }
        return this.$UID;
    }



    private static $userName: string = "";
    /**用户名字 */
    static get userName(): string {
        if (!this.$userName) {
            this.$userName = LocalStorageMgr.getItem(LocalStorageEnum.USERNAME)
            if (!this.$userName) {
                this.$userName = "userName";
                LocalStorageMgr.setItem(LocalStorageEnum.USERNAME, this.$userName);
            }
        }
        return this.$userName;
    }







    private static $gold: number = -1;
    /**金币 */
    static get gold(): number {
        if (this.$gold == -1) {
            let gold = Number(LocalStorageMgr.getItem(LocalStorageEnum.GOLD));
            if (isNaN(gold)) {
                this.$gold = 0;
                LocalStorageMgr.setItem(LocalStorageEnum.GOLD, this.$gold);
            } else {
                this.$gold = gold;
            }
        }
        return this.$gold;
    }
    static set gold(value: number) {
        if (!isNaN(value) && value >= 0) {
            this.$gold = value;
            LocalStorageMgr.setItem(LocalStorageEnum.GOLD, this.$gold);
        }
    }

    private static $diamond: number = -1;
    /**钻石 */
    static get diamond(): number {
        if (this.$diamond == -1) {
            let diamond = Number(LocalStorageMgr.getItem(LocalStorageEnum.DIAMOND));
            if (isNaN(diamond)) {
                this.$diamond = 0;
                LocalStorageMgr.setItem(LocalStorageEnum.DIAMOND, this.$diamond);
            } else {
                this.$diamond = diamond;
            }
        }
        return this.$diamond;
    }
    static set diamond(value: number) {
        if (!isNaN(value) && value >= 0) {
            this.$diamond = value;
            LocalStorageMgr.setItem(LocalStorageEnum.DIAMOND, this.$diamond);
        }
    }


    private static $experience: number = -1;
    /**经验 */
    static get experience(): number {
        if (this.$experience == -1) {
            let experience = Number(LocalStorageMgr.getItem(LocalStorageEnum.EXPERIENCE));
            if (isNaN(experience)) {
                this.$experience = 0;
                LocalStorageMgr.setItem(LocalStorageEnum.EXPERIENCE, this.$experience);
            } else {
                this.$experience = experience;
            }
        }
        return this.$experience;
    }
    static set experience(value: number) {
        if (!isNaN(value) && value >= 0) {
            this.$experience = value;
            LocalStorageMgr.setItem(LocalStorageEnum.EXPERIENCE, this.$experience);
        }
    }


    private static $key: number = -1;
    /**金币 */
    static get key(): number {
        if (this.$key == -1) {
            let key = Number(LocalStorageMgr.getItem(LocalStorageEnum.KEY));
            console.log(key);
            if (isNaN(key)) {
                this.$key = 0;
                LocalStorageMgr.setItem(LocalStorageEnum.KEY, this.$key);
            } else {
                this.$key = key;
            }
        }
        return this.$key;
    }
    static set key(value: number) {
        if (!isNaN(value) && value >= 0) {
            this.$key = value;
            LocalStorageMgr.setItem(LocalStorageEnum.KEY, this.$key);
        }
    }



    /**单局游戏时长 */
    static gameTime: number = 180;

}