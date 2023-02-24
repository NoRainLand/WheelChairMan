/*
 * @Author: NoRain 
 * @Date: 2023-02-24 23:15:16 
 * @Last Modified by: NoRain
 * @Last Modified time: 2023-02-24 23:51:08
 */

import { DataTableEnum } from "../Enum/DataTableEnum";
import { Scene3dEnum } from "../Enum/Scene3dEnum";
import ResLoader from "../Util/ResLoader";

/**3d场景管理类 */
export default class Scene3dMgr {
    private static _instance: Scene3dMgr;
    public static get instance(): Scene3dMgr {
        return this._instance ? this._instance : this._instance = new Scene3dMgr();
    }

    private $scene3dMap: Map<number, Object>;
    init() {
        this.$scene3dMap = ResLoader.instance.getDataTableById(DataTableEnum.Scene3d);
    }
    /**打开某个场景 */
    open(sceneId: Scene3dEnum, param?: any) {
        let url = this.$scene3dMap.get(sceneId)?.["path"];
        if (url) {
            Laya.Scene.open(ResLoader.instance.getUrlById(url), false);
        }
    }
    /**关闭某个场景 */
    close(sceneId: Scene3dEnum) {
        let url = this.$scene3dMap.get(sceneId)?.["path"];
        if (url) {
            Laya.Scene.close(ResLoader.instance.getUrlById(url));
        }
    }
}