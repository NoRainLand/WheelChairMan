/*
 * @Author: NoRain 
 * @Date: 2023-02-24 23:15:16 
 * @Last Modified by: NoRain
 * @Last Modified time: 2023-02-25 15:45:26
 */

import { DataTableEnum } from "../Enum/DataTableEnum";
import { Scene3dEnum } from "../Enum/Scene3dEnum";
import { SkyBoxEnum } from "../Enum/SkyBoxEnum";
import EventMgr from "../Mgr/EventMgr";
import ResLoader from "../Util/ResLoader";
import Timer from "../Util/Timer";
import Scene3d from "./Scene3d";
import Scene3D = Laya.Scene3D;

/**3d场景管理类 */
export default class Scene3dMgr {
    private static _instance: Scene3dMgr;
    public static get instance(): Scene3dMgr {
        return this._instance ? this._instance : this._instance = new Scene3dMgr();
    }

    private $scene3dMap: Map<number, Object>;

    private $scene3d: Scene3D;

    private $scene3dPool: Map<number, Scene3d>

    init() {
        this.$scene3dMap = ResLoader.instance.getDataTableById(DataTableEnum.Scene3d);
        this.$scene3dPool = new Map();
        this.initScene3D();
    }


    private initScene3D() {
        this.$scene3d = new Scene3D;
        this.$scene3d.name = "baseScene3d";
        Laya.stage.addChild(this.$scene3d);
        Laya.stage.setChildIndex(this.$scene3d, 0);
        this.$scene3d.enableFog = true;
        this.$scene3d.fogStart = 200;
        this.$scene3d.fogRange = 200;
        this.$scene3d.fogColor = new Laya.Color(0.34, 0.34, 0.34);

        this.$scene3d.sceneReflectionProb.ambientIntensity = 1;
        this.$scene3d.sceneReflectionProb.ambientMode = 0;
        this.$scene3d.sceneReflectionProb.ambientColor = new Laya.Color(1, 1, 1);


        this.$scene3d.skyRenderer.material = ResLoader.instance.getResCloneById(SkyBoxEnum.SkyBox3);

        this.rotSkyBox();

    }

    private rotSkyBox() {
        let mat = this.$scene3d.skyRenderer.material as Laya.SkyBoxMaterial;
        mat && Timer.get(1, this, () => {
            mat._shaderValues.setNumber(Laya.SkyBoxMaterial.ROTATION, mat._shaderValues.getNumber(Laya.SkyBoxMaterial.ROTATION) + 0.01);
        }).frameLoop().start();
    }




    /**打开某个场景 */
    open(sceneId: Scene3dEnum, param?: any) {
        let sceneScript: Scene3d;
        sceneScript = this.$scene3dPool.get(sceneId);
        if (sceneScript) {
            this.initScene(sceneScript, param);
        } else {
            let id = this.$scene3dMap.get(sceneId)?.["path"];
            if (id) {
                let scene = ResLoader.instance.getResCloneById(id);
                scene && this.$scene3d.addChild(scene);
                sceneScript = scene.getComponent(Scene3d);
                if (sceneScript) {
                    this.$scene3dPool.set(sceneId, sceneScript);
                    sceneScript.sceneId = sceneId;
                    this.initScene(sceneScript, param);
                } else {
                    console.log("sceneScript is undefined");
                }
            }
        }

    }

    /**初始化一下 */
    private initScene(sceneScript: Scene3d, param?: any) {
        this.$scene3d.addChild(sceneScript.owner);
        sceneScript.owner.name = this.$scene3dMap.get(sceneScript.sceneId)?.["key"];
        sceneScript.$param = param;
        sceneScript.onOpened(param);
        sceneScript.addEvent();
    }




    /**关闭某个场景 */
    close(sceneId: Scene3dEnum, isDestroy?: boolean) {
        let sceneScript = this.$scene3dPool.get(sceneId);
        if (sceneScript) {
            sceneScript.onClosed();
            sceneScript.owner.removeSelf();
            let events = sceneScript.$event;
            for (let name in events) {
                EventMgr.off(name, sceneScript, events.get(name));
            }
            sceneScript.$event = null;
            sceneScript.$param = null;
            if (isDestroy) {
                sceneScript.owner.destroy();
                this.$scene3dPool.delete(sceneId);
            }
        }
    }
}