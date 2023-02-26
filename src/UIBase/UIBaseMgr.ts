/*
 * @Author: NoRain 
 * @Date: 2023-02-08 10:25:16 
 * @Last Modified by: NoRain
 * @Last Modified time: 2023-02-25 15:46:01
 */
import { SceneEnum } from "../Enum/SceneEnum";
import EventMgr from "../Mgr/EventMgr";
import SceneUrl from "../Url/SceneUrl";
import ResLoader from "../Util/ResLoader";
import UIBase from "./UIBase";

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

    private static _instance: UIBaseMgr;
    public static get instance(): UIBaseMgr {
        return this._instance ? this._instance : this._instance = new UIBaseMgr();
    }


    /**层级根节点 */
    private $UIBase: Box;
    /**调试界面 */
    private $DebugUI: Box;
    /**提示界面 */
    private $TipsUI: Box;
    /**主界面 */
    private $MainUI: Box;
    /*3DUI界面 */
    $3DUI: Box;

    /**是否已经调用过openLoadView */
    private $isOpenLoadView: boolean = false;




    /**页面预制件池子 */
    private $scenePool: Map<number, PrefabImpl>;
    /**页面脚本池子 */
    private $sceneScriptPool: Map<number, UIBase[]>;


    /**对象池标记 */
    private readonly $sign: string = "View_"

    /**初始化 */
    init(UIBase: Box) {
        this.$UIBase = UIBase;
        this.$DebugUI = this.$UIBase.getChildByName("DebugUI") as Box;
        this.$TipsUI = this.$UIBase.getChildByName("TipsUI") as Box;
        this.$MainUI = this.$UIBase.getChildByName("MainUI") as Box;
        this.$3DUI = this.$UIBase.getChildByName("3DUI") as Box;

        this.$sceneScriptPool = new Map();
        this.$scenePool = new Map();
    }

    /**加载load界面 */
    openLoadView() {
        if (!this.$isOpenLoadView) {
            this.$isOpenLoadView = true;
            ResLoader.instance.load(SceneUrl.LoadView, Handler.create(this, () => {
                this.initScene(ResLoader.instance.getResCloneByUrl(SceneUrl.LoadView), SceneEnum.LoadView);
            }))
        }
    }


    /**
     * 打开一个场景
     * @param sceneId 场景名称
     * @param param 传递参数
     * @param caller 作用域
     * @param callback 回调
     */
    open(sceneId: SceneEnum, param?: any, caller?: any, callback?: Function) {
        let scripts = this.$sceneScriptPool.get(sceneId);
        if (scripts && scripts[0] && scripts[0].isSingleton) {
            console.log("这个页面已经存在并且不允许重复打开");
        } else {
            let scene = Pool.getItem(this.$sign + sceneId) as Scene;
            if (scene) {
                this.initScene(scene, sceneId, param, caller, callback);
            } else {
                let scenePrefab = this.$scenePool.get(sceneId);
                if (scenePrefab) {
                    scene = scenePrefab.create() as Scene;
                    this.initScene(scene, sceneId, param, caller, callback);
                } else {
                    this.loadScene(sceneId, param, caller, callback);
                }
            }
        }
    }

    /**初始化界面 */
    private initScene(scene: Scene, sceneName: SceneEnum, param?: any, caller?: any, callback?: Function) {
        let base: UIBase = scene.getComponent(UIBase);
        if (base) {
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

            base.aniFinish = false;
            base.openAni();
            base.onOpened(param);
            base.addEvent();
            if (caller && callback) {
                callback.call(caller);
            }


            let arr = this.$sceneScriptPool.get(sceneName);
            if (arr) {
                arr.push(base);
                this.$sceneScriptPool.set(sceneName, arr);
            } else {
                this.$sceneScriptPool.set(sceneName, [base]);
            }


        } else {
            console.log("UIData或者UIBase缺失")
        }
    }


    /**关闭页面 */
    close(sceneName: SceneEnum, id: number) {
        let scripts = this.$sceneScriptPool.get(sceneName);
        if (scripts && scripts.length > 0) {
            let arr = [];
            for (let i = 0; i < scripts.length; i++) {
                let script = scripts[i];
                if (script.id == id) {
                    script.isOpen = false;
                    script.owner.removeSelf();
                    script.onClosed();
                    let events = script.$event;
                    for (let name in events) {
                        EventMgr.off(name, script, events.get(name));
                    }
                    script.$event = null;
                    script.$param = null;
                    Pool.recover(this.$sign + sceneName, script.owner);
                } else {
                    arr.push(script);
                }
            }
            this.$sceneScriptPool.set(sceneName, arr);
        }
    }

    /**是否打开某个界面 */
    isOpen(sceneName: SceneEnum): boolean {
        let arr = this.$sceneScriptPool.get(sceneName);
        if (arr && arr.length > 0) {
            return true;
        }
        return false;
    }

    /**加载场景 */
    private loadScene(sceneName: SceneEnum, param?: any, caller?: any, callback?: Function) {
        this.$scenePool.set(sceneName, ResLoader.instance.getResById(sceneName));
        if (this.$scenePool.get(sceneName)) {
            this.open(sceneName, param, caller, callback);
        }
    }

    initDebugScene() {
        this.open(SceneEnum.DebugView);
    }

    /**打开一个调试界面 */
    showDebug() {
        this.open(SceneEnum.DebugView);
    }

    /**
     * 打开一个提示面板
     * @param msg 信息
     */
    showTips(msg: string) {
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
    showSureDialog(title: string, msg: string, caller: any, sureCallback: Function, cancelCallBack?: Function) {
        let data = { title: title, msg: msg, caller: caller, sureCallback: sureCallback, cancelCallBack: cancelCallBack };
        this.open(SceneEnum.SureView, data);
    }

}