/*
 * @Author: NoRain 
 * @Date: 2023-02-06 16:58:40 
 * @Last Modified by: NoRain
 * @Last Modified time: 2023-02-06 18:32:39
 */

import LocalMgr from "./Mgr/LocalMgr";

/**游戏入口类 */
export default class GameEntry {


    private static _localMgr: LocalMgr;
    /**持久化管理类 */
    static get LocalMgr(): LocalMgr {
        return this._localMgr;
    }

    






















    /**初始化所有变量 */
    static __init__() {
        this._localMgr = new LocalMgr();

    }


}
