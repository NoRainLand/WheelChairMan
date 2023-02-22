import { SceneEnum } from "../Enum/SceneEnum";
import MainGame from "../Game/MainGame";
import LocalizationMgr from "../Localization/LocalizationMgr";
import CurrencyMgr from "../Mgr/CurrencyMgr";
import LevelMgr from "../Mgr/LevelMgr";
import UIBase from "../UIBase/UIBase";
import UIBaseMgr from "../UIBase/UIBaseMgr";
import ResLoader from "../Util/ResLoader";
import StringUtil from "../Util/StringUtil";
import Image = Laya.Image;
import Label = Laya.Label;
import Handler = Laya.Handler;
/*
 * @Author: NoRain 
 * @Date: 2023-02-07 18:06:44 
 * @Last Modified by: NoRain
 * @Last Modified time: 2023-02-21 11:08:31
 */
const { regClass, property } = Laya;

/**加载界面 */
@regClass()
export default class LoadView extends UIBase {

    @property()
    imgLoad: Image;
    @property()
    labelLoad: Label;

    @property()
    testLabel: Label;

    imgMask: Image;

    constructor() { super() }

    onOpened(param: any): void {
        this.imgMask = this.imgLoad.mask as Image;


        this.checkVersion();
    }


    /**请求版本 */
    checkVersion() {


        this.startPreLoad();
    }


    /**开始预加载全局资源 */
    startPreLoad() {
        ResLoader.preloadRes(Handler.create(this, this.onCompleted), Handler.create(this, this._onProgress));
    }

    /**刷新进度条 */
    _onProgress(value: number) {
        this.imgMask.width = this.imgLoad.width * value;
        this.labelLoad.text = "Loading…" + StringUtil.num2percentage(value);
    }

    /**加载完成可以进入主界面 */
    onCompleted() {
        console.log("load_conCompleted");
        this.initData();
        this.openScene();
    }



    /**初始化数据 */
    initData() {
        LocalizationMgr.init();
        LevelMgr.init();
        CurrencyMgr.init();
        MainGame.instance.init();
    }

    /**打开页面 */
    openScene() {
        UIBaseMgr.showDebug();
        UIBaseMgr.open(SceneEnum.MainView);
        this.close();
    }


}