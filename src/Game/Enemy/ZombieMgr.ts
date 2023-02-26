/*
* @Author: NoRain
* @Date: 2022-05-12 10:55:17 
 * @Last Modified by: NoRain
 * @Last Modified time: 2023-02-25 19:25:09
*/
/**丧尸管理类 */
export default class ZombieMgr {
    private static _instance: ZombieMgr;
    public static get instance(): ZombieMgr {
        return this._instance ? this._instance : this._instance = new ZombieMgr();
    }
    init() {

    }
}