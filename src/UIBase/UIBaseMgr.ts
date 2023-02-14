/*
 * @Author: NoRain 
 * @Date: 2023-02-08 10:25:16 
 * @Last Modified by: NoRain
 * @Last Modified time: 2023-02-14 10:13:04
 */
import { SceneEnum } from "../Enum/SceneEnum";
import SceneUrl from "../Url/SceneUrl";
import ResLoader from "../Util/ResLoader";
import UIBase from "./UIBase";
import UIBaseData from "./UIBaseData";

import PrefabImpl = Laya.PrefabImpl;
import Text = Laya.Text;
import Box = Laya.Box;
import Scene = Laya.Scene;
import Label = Laya.Label;
import Image = Laya.Image;
import TextInput = Laya.TextInput;
import Sprite = Laya.Sprite;
import Pool = Laya.Pool;
import Handler = Laya.Handler;


/**页面管理 */
export default class UIBaseMgr {
    /**页面预制件池子 */
    private static $scenes: Map<number, PrefabImpl> = new Map();


    /**层级根节点 */
    private static $UIBase: Box;
    /**调试界面 */
    private static $DebugUI: Box;
    /**提示界面 */
    private static $TipsUI: Box;
    /**主界面 */
    private static $MainUI: Box;
    /*3DUI界面 */
    static $3DUI: Box;

    /**是否已经调用过openLoadView */
    private static $isOpenLoadView: boolean = false;

    /**页面脚本池子 */
    private static $sceneScriptPool: Map<number, UIBase | Map<string, UIBase>> = new Map();


    /**对象池标记 */
    private static readonly $sign: string = "View"

    /**初始化 */
    static init(UIBase: Box) {
        this.$UIBase = UIBase;
        this.$DebugUI = this.$UIBase.getChildByName("DebugUI") as Box;
        this.$TipsUI = this.$UIBase.getChildByName("TipsUI") as Box;
        this.$MainUI = this.$UIBase.getChildByName("MainUI") as Box;
        this.$3DUI = this.$UIBase.getChildByName("3DUI") as Box;
    }

    /**加载load界面 */
    static openLoadView() {
        if (!this.$isOpenLoadView) {
            this.$isOpenLoadView = true;
            ResLoader.load(SceneUrl.LoadView, Handler.create(this, () => {
                this.initScene(ResLoader.getResClose(SceneUrl.LoadView), SceneEnum.LoadView);
            }))
        }
    }


    /**
     * 打开一个场景
     * @param sceneName 场景名称
     * @param param 传递参数
     * @param caller 作用域
     * @param callback 回调
     */
    static open(sceneName: SceneEnum, param?: any, caller?: any, callback?: Function) {
        let script = this.$sceneScriptPool.get(sceneName);
        if (!script || script instanceof UIBase) {
            let scene = Pool.getItem(this.$sign + sceneName) as Scene;
            if (scene) {
                this.initScene(scene, sceneName, param, caller, callback);
            } else {
                let scenePrefab = this.$scenes.get(sceneName);
                if (scenePrefab) {
                    let scene = scenePrefab.create() as Scene;
                    this.initScene(scene, sceneName, param, caller, callback);
                } else {
                    this.loadScene(sceneName, param, caller, callback);
                }
            }
        }
    }

    /**初始化界面 */
    private static initScene(scene: Scene, sceneName: SceneEnum, param?: any, caller?: any, callback?: Function) {
        let base: UIBase = scene.getComponent(UIBase);
        let data: UIBaseData = scene.getComponent(UIBaseData);
        Object.assign(base, data);
        switch (base.depth) {
            default:
                this.$MainUI.addChild(scene);
                break;
            case 0:
                this.$DebugUI.addChild(scene);
                break;
            case 1:
                this.$TipsUI.addChild(scene);
                break;
            case 2:
                this.$MainUI.addChild(scene);
                break;
            case 3:
                this.$3DUI.addChild(scene);
                break;
        }
        base.$param = param;
        base.$assetsId = sceneName;
        base.isOpen = true;



        base.onOpened(param);
        if (caller && callback) {
            callback.call(caller);
        }

        if (base.isSingleton) {
            this.$sceneScriptPool.set(sceneName, base);
        } else {
            let map = this.$sceneScriptPool.get(sceneName);
            if (map && map instanceof Map) {
                map.set(base.id.toString(), base);
                this.$sceneScriptPool.set(sceneName, map);
            } else {
                map = new Map();
                map.set(base.id.toString(), base);
                this.$sceneScriptPool.set(sceneName, map);
            }
        }
    }


    /**关闭页面 */
    static close(sceneName: SceneEnum, id?: number) {
        let scriptOrMap = this.$sceneScriptPool.get(sceneName);
        if (scriptOrMap && scriptOrMap instanceof UIBase) {
            scriptOrMap.isOpen = false;
            scriptOrMap.owner.removeSelf();
            scriptOrMap.onClosed();
            this.$sceneScriptPool.set(sceneName, void 0);
            Pool.recover(this.$sign + sceneName, scriptOrMap.owner);
        } else if (scriptOrMap && scriptOrMap instanceof Map) {
            if (id) {
                let base = scriptOrMap.get(id.toString()) as UIBase;
                if (base) {
                    base.isOpen = false;
                    base.owner.removeSelf();
                    base.onClosed();
                    scriptOrMap.set(id.toString(), void 0);
                    Pool.recover(this.$sign + sceneName, base.owner);
                    this.$sceneScriptPool.set(sceneName, scriptOrMap);
                }
            }
        }
    }

    /**是否打开某个界面 */
    static isOpen(sceneName: SceneEnum, id?: number): boolean {
        let scriptOrMap = this.$sceneScriptPool.get(sceneName);
        if (scriptOrMap && scriptOrMap instanceof UIBase) {
            return scriptOrMap.isOpen;
        } else if (scriptOrMap && scriptOrMap instanceof Map) {
            let base = scriptOrMap.get(id.toString()) as UIBase;
            return base.isOpen;
        } else {
            return false;
        }
    }

    /**加载场景 */
    private static loadScene(sceneName: SceneEnum, param?: any, caller?: any, callback?: Function) {
        this.$scenes.set(sceneName, ResLoader.getResById(sceneName));
        if (this.$scenes.get(sceneName)) {
            this.open(sceneName, param, caller, callback);
        }
    }

    static initDebugScene() {
        this.open(SceneEnum.DebugView);
    }

    /**打开一个调试界面 */
    static showDebug() {
        this.open(SceneEnum.DebugView);
    }

    /**
     * 打开一个提示面板
     * @param msg 信息
     */
    static showTips(msg: string) {
        this.open(SceneEnum.TipsView, msg);
    }
    /**
     * 打开一个确认取消面板
     * @param title 标题
     * @param msg 信息
     * @param caller 作用域
     * @param sureCallback 确认回调
     * @param cancelCallBack 取消回调
     */
    static showSureDialog(title: string, msg: string, caller: any, sureCallback: Function, cancelCallBack?: Function) {
        let data = { title: title, msg: msg, caller: caller, sureCallback: sureCallback, cancelCallBack: cancelCallBack };
        this.open(SceneEnum.SureView, data);
    }

}