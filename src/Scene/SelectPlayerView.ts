import PlayerMgr from "../Game/Player/PlayerMgr";
import LocalizationMgr from "../Localization/LocalizationMgr";
import UIBase from "../UIBase/UIBase";
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
 * @Date: 2023-02-24 20:04:35 
 * @Last Modified by: NoRain
 * @Last Modified time: 2023-02-25 16:41:57
 */
const { regClass, property } = Laya;
/**选择玩家界面 */
@regClass()
export default class SelectPlayerView extends UIBase {
    @property()
    imgBack: Image;
    @property()
    imgNext: Image;
    @property()
    imgPrev: Image;
    @property()
    imgLock: Image;
    @property()
    imgSelect: Image;
    @property()
    labelName: Label;
    @property()
    labelDic: Label;

    private $viewIndex: number = 0;


    private $playerData: any;

    constructor() { super() }

    onOpened(param?: any): void {
        this.$viewIndex = 0;
        this.$playerData = PlayerMgr.instance.getSelectedPlayerData();
        this.changeData();
    }

    addEvent(): void {
        this.regClick(this.imgBack, this.goBack);
        this.regClick(this.imgNext, this.nextItem);
        this.regClick(this.imgPrev, this.prevItem);
        this.regClick(this.imgSelect, this.selectPlayer);
        // this.regEvent(EventEnum.LANGUAGECHANGE)
    }

    changeData() {
        console.log(this.$playerData);
        this.labelName.text = LocalizationMgr.getLocalizationByEnum(this.$playerData.localizationKey);
        this.labelDic.text = LocalizationMgr.getLocalizationByEnum(this.$playerData.descriptionKey);
    }

    goBack() {

    }

    nextItem() {

    }

    prevItem() {

    }
    selectPlayer() {
        console.log()
    }

}