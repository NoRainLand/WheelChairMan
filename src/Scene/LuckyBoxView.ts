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
 * @Last Modified time: 2023-02-14 19:09:28
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



    constructor() { super() }

    $luckyboxDataTable: Map<number, Object> = new Map();


    onOpened(param?: any): void {
        this.regClick(this.imgClose, this.close);
        this.regClick(this.imgOpen, this.openLuckBox);
        this.$luckyboxDataTable = ResLoader.strParser(ResLoader.getResById(DataTableEnum.LuckyBox).data);
        console.log(this.$param);
        this.initLuckBox();
    }

    initLuckBox() {
        if (this.$param == void 0) {
            this.$param = 0;
        }
        this.txtMsg.text = LocalizationMgr.getLocalizationByKey(this.$luckyboxDataTable.get(this.$param)["localizationKey"]);

        this.imgBox.skin = ResLoader.getUrlById(this.$luckyboxDataTable.get(this.$param)["imgPath"]);
    }


    openLuckBox() {
        switch (this.$param) {
            case 0:
            
                break;
        }
    }





}