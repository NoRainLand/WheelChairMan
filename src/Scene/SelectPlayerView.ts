import { EventEnum } from "../Enum/EventEnum";
import { LocalizationEnum } from "../Enum/LocalizationEnum";
import { PlayerEnum } from "../Enum/PlayerEnum";
import { SceneEnum } from "../Enum/SceneEnum";
import MainGame from "../Game/MainGame";
import PlayerMgr from "../Game/Player/PlayerMgr";
import LocalizationMgr from "../Localization/LocalizationMgr";
import CurrencyMgr from "../Mgr/CurrencyMgr";
import EventMgr from "../Mgr/EventMgr";
import UIBase from "../UIBase/UIBase";
import UIBaseMgr from "../UIBase/UIBaseMgr";
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

    @property()
    imgUnlock: Image;
    @property()
    labelUnlock: Label;
    @property()
    imgCurrency: Image;



    private $viewIndex: number = 0;

    private $selectIndex: number = 0;

    private $playerData: any;

    private $playerList: Array<number>;



    constructor() { super() }

    onOpened(param?: any): void {
        this.$viewIndex = 0;
        this.$selectIndex = 0;

        if (!this.$playerList) {
            this.$playerList = [];
            for (let item in PlayerEnum) {
                if (!isNaN(Number(item))) {
                    this.$playerList.push(Number(item));
                }
            }
        }

        this.changeNexPrev();
        this.showPlayer();

    }

    addEvent(): void {
        this.regClick(this.imgBack, this.goBack);
        this.regClick(this.imgNext, this.nextItem);
        this.regClick(this.imgPrev, this.prevItem);
        this.regClick(this.imgSelect, this.selectPlayer);
        // this.regEvent(EventEnum.LANGUAGECHANGE)
    }

    changeData() {
        this.$playerData = PlayerMgr.instance.getSelectedPlayerData(this.$playerList[this.$selectIndex]);
        this.labelName.text = LocalizationMgr.getLocalizationByEnum(this.$playerData.localizationKey);
        this.labelDic.text = LocalizationMgr.getLocalizationByEnum(this.$playerData.descriptionKey);

        if (PlayerMgr.instance.isUnlock(this.$playerList[this.$selectIndex])) {
            this.imgLock.visible = false;
            this.imgSelect.visible = true;
            this.imgUnlock.visible = false;
        } else {
            this.imgLock.visible = true;
            this.imgSelect.visible = false;
            this.imgUnlock.visible = true;

            this.labelUnlock.text = LocalizationMgr.getLocalizationByEnum(LocalizationEnum.UNLOCK, this.$playerData.unlockPrice);

            this.imgCurrency.skin = CurrencyMgr.getImgUrlById(this.$playerData['currency']);
        }
    }


    changeNexPrev() {
        if (this.$selectIndex <= 0) {
            this.imgPrev.visible = false;
        } else if (this.$selectIndex >= this.$playerList.length - 1) {
            this.imgNext.visible = false;
        } else {
            this.imgPrev.visible = true;
            this.imgNext.visible = true;
        }
        this.changeData();
    }
    goBack() {
        this.close();
        UIBaseMgr.instance.open(SceneEnum.MainView);
        MainGame.instance.goToMain();
    }


    showPlayer() {
        EventMgr.event(EventEnum.SHOWPLAYER, this.$playerList[this.$selectIndex]);
    }

    nextItem() {
        this.$selectIndex++;
        this.changeNexPrev();
        this.showPlayer();
    }

    prevItem() {
        this.$selectIndex--;
        this.changeNexPrev();
        this.showPlayer();
    }
    selectPlayer() {

    }

}