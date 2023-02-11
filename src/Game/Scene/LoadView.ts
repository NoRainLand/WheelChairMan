import LocalizationMgr from "../../Localization/LocalizationMgr";
import UIBase from "../../UIBase/UIBase";
import UIBaseMgr from "../../UIBase/UIBaseMgr";
import SceneUrl from "../../Url/SceneUrl";
import StringUtil from "../../Util/StringUtil";
import Timer from "../../Util/Timer";
import Image = Laya.Image;
import Label = Laya.Label;
import Handler = Laya.Handler;
/*
 * @Author: NoRain 
 * @Date: 2023-02-07 18:06:44 
 * @Last Modified by: NoRain
 * @Last Modified time: 2023-02-11 14:30:28
 */
const { regClass, property } = Laya;

/**加载界面 */
@regClass()
export default class LoadView extends UIBase {

    @property()
    imgLoad: Image;
    @property()
    labelLoad: Label;

    imgMask: Image;

    constructor() { super() }

    onOpened(param: any): void {
        this.imgMask = this.imgLoad.mask as Image;


        this.loadLocalization();
    }



    /**加载本地化资源 */
    loadLocalization() {
        LocalizationMgr.init(Handler.create(this, this.changeMask), Handler.create(this, this.loadLocalizationFinish));
    }
    /**本地化资源加载完成 */
    loadLocalizationFinish() {
        this.changeMask(1);
        console.log("本地化资源加载完成");
        this.loadRes3D();
    }

    /**加载3D资源 */
    loadRes3D() {
        console.log("loadRes3D");



        Timer.get(300, this, () => {
            UIBaseMgr.open(SceneUrl.SettingView);
            // UIBaseMgr.showSureDialog("测试", "盛大范德萨分啊手动阀手动阀士大夫撒旦u尽快了解", this, this.sure, this.no);
            // UIBaseMgr.showTips("恭喜获得3000金币");

        }).once().start();
    }

    sure() {
        console.log("sure");

    }
    no() {
        console.log("no");
    }

    /**刷新进度条 */
    changeMask(value: number) {
        this.imgMask.width = this.imgLoad.width * value;
        this.labelLoad.text = "Loading…" + StringUtil.num2percentage(value);
    }


}