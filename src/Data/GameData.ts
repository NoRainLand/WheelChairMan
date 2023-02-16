/*
 * @Author: NoRain 
 * @Date: 2023-02-06 17:30:20 
 * @Last Modified by: NoRain
 * @Last Modified time: 2023-02-16 16:54:31
 */

import { LocalEnum } from "../Enum/LocalEnum";
import LocalMgr from "../Mgr/LocalMgr";

/**游戏数据 */
export default class GameData {




    private static $userHead: string = "";
    /**用户头像 */
    static get userHead(): string {
        if (!this.$userHead) {
            this.$userHead = LocalMgr.getItem(LocalEnum.USERHEAD)
        }
        return this.$userHead;
    }


    private static $UID: string = "";
    /**用户唯一ID */
    static get UID(): string {
        if (!this.$UID) {
            let uid = LocalMgr.getItem(LocalEnum.UID);
            if (uid) {
                this.$UID = uid;
            } else {
                this.$UID = (Math.random() * 100000000).toFixed();//临时随机生成一个
                LocalMgr.setItem(LocalEnum.UID, this.$UID);
            }
        }
        return this.$UID;
    }



    private static $userName: string = "";
    /**用户名字 */
    static get userName(): string {
        if (!this.$userName) {
            this.$userName = LocalMgr.getItem(LocalEnum.USERNAME)
        }
        return this.$userName;
    }







    private static $gold: number = -1;
    /**金币 */
    static get gold(): number {
        if (this.$gold == -1) {
            let gold = Number(LocalMgr.getItem(LocalEnum.GOLD));
            console.log(gold);
            if (isNaN(gold)) {
                this.$gold = 0;
                LocalMgr.setItem(LocalEnum.GOLD, this.$gold);
            } else {
                this.$gold = gold;
            }
        }
        return this.$gold;
    }
    static set gold(value: number) {
        if (!isNaN(value) && value >= 0) {
            this.$gold = value;
            LocalMgr.setItem(LocalEnum.GOLD, this.$gold);
        }
    }

    private static $diamond: number = -1;
    /**钻石 */
    static get diamond(): number {
        if (this.$diamond == -1) {
            let diamond = Number(LocalMgr.getItem(LocalEnum.DIAMOND));
            if (isNaN(diamond)) {
                this.$diamond = 0;
                LocalMgr.setItem(LocalEnum.DIAMOND, this.$diamond);
            } else {
                this.$diamond = diamond;
            }
        }
        return this.$diamond;
    }
    static set diamond(value: number) {
        if (!isNaN(value) && value >= 0) {
            this.$diamond = value;
            LocalMgr.setItem(LocalEnum.DIAMOND, this.$diamond);
        }
    }


    private static $experience: number = -1;
    /**经验 */
    static get experience(): number {
        if (this.$experience == -1) {
            let experience = Number(LocalMgr.getItem(LocalEnum.EXPERIENCE));
            if (isNaN(experience)) {
                this.$experience = 0;
                LocalMgr.setItem(LocalEnum.EXPERIENCE, this.$experience);
            } else {
                this.$experience = experience;
            }
        }
        return this.$experience;
    }
    static set experience(value: number) {
        if (!isNaN(value) && value >= 0) {
            this.$experience = value;
            LocalMgr.setItem(LocalEnum.EXPERIENCE, this.$experience);
        }
    }

}