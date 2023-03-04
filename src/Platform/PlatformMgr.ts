/*
 * @Author: NoRain 
 * @Date: 2023-03-04 16:46:01 
 * @Last Modified by: NoRain
 * @Last Modified time: 2023-03-04 16:57:53
 */

import IPlatform from "./IPlatform";

/**小游戏环境 */
export default class PlatformMgr {
    private static _instance: PlatformMgr;
    public static get instance(): PlatformMgr {
        return this._instance ? this._instance : this._instance = new PlatformMgr();
    }
    /**小游戏平台 */
    miniGame: IPlatform;

    private $isMiniGame: boolean = false;
    /**是否为小游戏 */
    get isMiniGame(): boolean {
        return this.$isMiniGame;
    }

    init() {
        this.iniMiniGame();
    }

    private iniMiniGame() {
        this.$isMiniGame = true;
        if (Laya.Browser.onMiniGame) {
            this.miniGame = Laya.Browser.window.wx;
        } else if (Laya.Browser.onQQMiniGame) {
            this.miniGame = Laya.Browser.window.qq;
        } else if (Laya.Browser.onTTMiniGame) {
            this.miniGame = Laya.Browser.window.tt;
        } else if (Laya.Browser.onQGMiniGame) {
            this.miniGame = Laya.Browser.window.qg;
        } else if (Laya.Browser.onVVMiniGame) {
            this.miniGame = Laya.Browser.window.qg;
        } else {
            this.$isMiniGame = false;
            this.miniGame = null;
        }
    }

    getPlatformType() {

    }

}

