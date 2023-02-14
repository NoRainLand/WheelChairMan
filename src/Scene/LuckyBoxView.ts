import { DataTableEnum } from "../Enum/DataTableEnum";
import LocalizationMgr from "../Localization/LocalizationMgr";
import UIBase from "../UIBase/UIBase";
import ResLoader from "../Util/ResLoader";
import PrefabImpl = Laya.PrefabImpl;
import Text = Laya.Text;
import Box = Laya.Box;
import Scene = Laya.Scene;
import Label = Laya.Label;
import Image = Laya.Image;
import TextInput = Laya.TextInput;
import Sprite = Laya.Sprite;
import List = Laya.List;
import Handler = Laya.Handler;
/*
 * @Author: NoRain 
 * @Date: 2023-02-13 10:40:07 
 * @Last Modified by: NoRain
 * @Last Modified time: 2023-02-14 14:38:53
 */
const { regClass, property } = Laya;
/**幸运宝箱界面 */
@regClass()
export default class LuckyBoxView extends UIBase {

    @property()
    imgLight: Image;
    @property()
    imgBox: Image;
    @property()
    imgClose: Image;
    @property()
    imgOpen: Image;
    @property()
    txtMsg: Text;

    luckyboxList = [
        "LUCKYBOXBRONZE",
        "LUCKYBOXSILVER",
        "LUCKYBOXGOLD",
        "LUCKYBOXDIAMOND",
        "LUCKYBOXPLATINUM"
    ]


    constructor() { super() }




    onOpened(param?: any): void {
        this.regClick(this.imgClose, this.close);
        this.regClick(this.imgOpen, this.openLuckBox);
        this.initLuckBox();

        let data = ResLoader.getResById(DataTableEnum.LuckyBox);
        console.log(data);

    }

    initLuckBox() {
        if (this.$param == void 0) {
            this.$param = 0;
        }
        this.txtMsg.text = LocalizationMgr.getLocalizationByKey(this.luckyboxList[this.$param]);

        // this.imgBox.skin = ResUrl.LuckyBox[this.$param];
    }


    openLuckBox() {
        switch (this.$param) {
            case 0:

                break;
        }
    }





}