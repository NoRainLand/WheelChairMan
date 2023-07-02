import { EventEnum } from "../Enum/EventEnum";
import { LocalizationEnum } from "../Enum/LocalizationEnum";
import { PlayerEnum } from "../Enum/PlayerEnum";
import { ViewEnum } from "../Enum/ViewEnum";
import MainGame from "../Game/MainGame";
import PlayerMgr from "../Game/Player/PlayerMgr";
import LocalizationMgr from "../Localization/LocalizationMgr";
import CurrencyMgr from "../Mgr/CurrencyMgr";
import EventMgr from "../Mgr/EventMgr";
import UIBase from "../UIBase/UIBase";
import UIBaseMgr from "../UIBase/UIBaseMgr";
import Timer from "../Util/Timer";
import Tween from "../Util/Tween";
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
 * @Last Modified time: 2023-03-08 19:44:04
 */
const { regClass, property } = Laya;
/**选择玩家界面 */
@regClass()
export default class SelectPlayerView extends UIBase {
    @property({ type: Image})
    imgBack: Image;
    @property({ type: Image})
    imgNext: Image;
    @property({ type: Image})
    imgPrev: Image;
    @property({ type: Image})
    imgLock: Image;
    @property({ type: Image})
    imgSelect: Image;
    @property({ type: Image})
    labelName: Label;
    @property({ type: Label})
    labelDic: Label;

    @property({ type: Image})
    imgUnlock: Image;
    @property({ type: Label})
    labelUnlock: Label;
    @property({ type: Image})
    imgCurrency: Image;

    @property({ type: Box})
    boxMsg: Box;



    private $viewIndex: number = 0;

    private $selectIndex: number = 0;

    private $playerData: any;

    private $playerList: Array<number>;



    constructor() { super() }

    onOpened(param?: any): void {
        this.$viewIndex = 0;

        if (!this.$playerList) {
            this.$playerList = [];
            for (let item in PlayerEnum) {
                if (!isNaN(Number(item))) {
                    this.$playerList.push(Number(item));
                }
            }
        }

        this.$selectIndex = this.$playerList.indexOf(PlayerMgr.instance.selectedPlayerId);
        this.showPlayer();

    }





    addEvent(): void {
        this.regClick(this.imgBack, this.goBack);
        this.regClick(this.imgNext, this.nextItem);
        this.regClick(this.imgPrev, this.prevItem);
        this.regClick(this.imgSelect, this.selectPlayer);
        this.regClick(this.imgSelect, this.selectPlayer);
        this.regClick(this.imgUnlock, this.unlockPlayer);
        this.regEvent(EventEnum.UNLOCKPLAYER, this.changeNexPrev, true);
    }

    changeData() {
        this.boxMsg.right = -1000;


        this.$playerData = PlayerMgr.instance.getSelectedPlayerData(this.$playerList[this.$selectIndex]);
        this.labelName.text = LocalizationMgr.getLocalizationByEnum(this.$playerData.localizationKey);
        this.labelDic.text = LocalizationMgr.getLocalizationByEnum(this.$playerData.descriptionKey);



        Tween.get(this.boxMsg)
            .to({ right: 0 }, 350, Laya.Ease.circOut)
            .start();


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
        this.changeData();

        this.imgPrev.visible = false;
        this.imgNext.visible = false;

        Timer.get(400, this, () => {
            if (this.$selectIndex <= 0) {
                this.imgNext.visible = true;
            } else if (this.$selectIndex >= this.$playerList.length - 1) {
                this.imgPrev.visible = true;
            } else {
                this.imgPrev.visible = true;
                this.imgNext.visible = true;
            }
        }).start();

    }
    goBack() {
        this.close();
        UIBaseMgr.instance.open(ViewEnum.MainView);
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
    selectPlayer() {//
        PlayerMgr.instance.selectedPlayerId = this.$playerList[this.$selectIndex];
        MainGame.instance.loadGameScene();
        UIBaseMgr.instance.open(ViewEnum.GameView);
        this.close();
    }
    unlockPlayer() {
        PlayerMgr.instance.unlockPlayer(this.$playerList[this.$selectIndex]);
    }

    onClosed(): void {
        // if(this.play)
    }

}