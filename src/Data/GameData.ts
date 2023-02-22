/*
 * @Author: NoRain 
 * @Date: 2023-02-06 17:30:20 
 * @Last Modified by: NoRain
 * @Last Modified time: 2023-02-18 10:26:33
 */

import { LocalStorage } from "../Enum/LocalStorageEnum";
import LocalMgr from "../Mgr/LocalMgr";

/**游戏数据 */
export default class GameData {




    private static $userHead: string = "";
    /**用户头像 */
    static get userHead(): string {
        if (!this.$userHead) {
            this.$userHead = LocalMgr.getItem(LocalStorage.USERHEAD)
        }
        return this.$userHead;
    }


    private static $UID: string = "";
    /**用户唯一ID */
    static get UID(): string {
        if (!this.$UID) {
            let uid = LocalMgr.getItem(LocalStorage.UID);
            if (uid) {
                this.$UID = uid;
            } else {
                this.$UID = (Math.random() * 100000000).toFixed();//临时随机生成一个
                LocalMgr.setItem(LocalStorage.UID, this.$UID);
            }
        }
        return this.$UID;
    }



    private static $userName: string = "";
    /**用户名字 */
    static get userName(): string {
        if (!this.$userName) {
            this.$userName = LocalMgr.getItem(LocalStorage.USERNAME)
            if (!this.$userName) {
                this.$userName = "userName";
                LocalMgr.setItem(LocalStorage.USERNAME, this.$userName);
            }
        }
        return this.$userName;
    }







    private static $gold: number = -1;
    /**金币 */
    static get gold(): number {
        if (this.$gold == -1) {
            let gold = Number(LocalMgr.getItem(LocalStorage.GOLD));
            if (isNaN(gold)) {
                this.$gold = 0;
                LocalMgr.setItem(LocalStorage.GOLD, this.$gold);
            } else {
                this.$gold = gold;
            }
        }
        return this.$gold;
    }
    static set gold(value: number) {
        if (!isNaN(value) && value >= 0) {
            this.$gold = value;
            LocalMgr.setItem(LocalStorage.GOLD, this.$gold);
        }
    }

    private static $diamond: number = -1;
    /**钻石 */
    static get diamond(): number {
        if (this.$diamond == -1) {
            let diamond = Number(LocalMgr.getItem(LocalStorage.DIAMOND));
            if (isNaN(diamond)) {
                this.$diamond = 0;
                LocalMgr.setItem(LocalStorage.DIAMOND, this.$diamond);
            } else {
                this.$diamond = diamond;
            }
        }
        return this.$diamond;
    }
    static set diamond(value: number) {
        if (!isNaN(value) && value >= 0) {
            this.$diamond = value;
            LocalMgr.setItem(LocalStorage.DIAMOND, this.$diamond);
        }
    }


    private static $experience: number = -1;
    /**经验 */
    static get experience(): number {
        if (this.$experience == -1) {
            let experience = Number(LocalMgr.getItem(LocalStorage.EXPERIENCE));
            if (isNaN(experience)) {
                this.$experience = 0;
                LocalMgr.setItem(LocalStorage.EXPERIENCE, this.$experience);
            } else {
                this.$experience = experience;
            }
        }
        return this.$experience;
    }
    static set experience(value: number) {
        if (!isNaN(value) && value >= 0) {
            this.$experience = value;
            LocalMgr.setItem(LocalStorage.EXPERIENCE, this.$experience);
        }
    }


    private static $key: number = -1;
    /**金币 */
    static get key(): number {
        if (this.$key == -1) {
            let key = Number(LocalMgr.getItem(LocalStorage.KEY));
            console.log(key);
            if (isNaN(key)) {
                this.$key = 0;
                LocalMgr.setItem(LocalStorage.KEY, this.$key);
            } else {
                this.$key = key;
            }
        }
        return this.$key;
    }
    static set key(value: number) {
        if (!isNaN(value) && value >= 0) {
            this.$key = value;
            LocalMgr.setItem(LocalStorage.KEY, this.$key);
        }
    }

}