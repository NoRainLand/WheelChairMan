import GameData from "../Data/GameData";
import { CurrencyEnum } from "../Enum/CurrencyEnum";
import { EventEnum } from "../Enum/EventEnum";
import { ViewEnum } from "../Enum/ViewEnum";
import MainGame from "../Game/MainGame";
import LevelMgr from "../Mgr/LevelMgr";
import UIBase from "../UIBase/UIBase";
import UIBaseMgr from "../UIBase/UIBaseMgr";
import StringUtil from "../Util/StringUtil";
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
 * @Date: 2023-02-07 18:06:44 
 * @Last Modified by: NoRain
 * @Last Modified time: 2023-03-03 11:52:15
 */
const { regClass, property } = Laya;
/**主界面 */
@regClass()
export default class MainView extends UIBase {
    @property()
    txtGold: Text;
    @property()
    imgPlusGold: Image;
    @property()
    txtDiamond: Text;
    @property()
    imgPlusDiamond: Image;
    @property()
    imgHead: Image;
    @property()
    imgRing: Image;
    @property()
    imgLevel: Image;
    imgLevelMask: Image;
    @property()
    imgMs: Image;
    imgMsMask: Image;
    @property()
    txtLevel: Text;
    @property()
    labelName: Label;
    @property()
    imgShop: Image;
    @property()
    imgRanking: Image;
    @property()
    imgSettings: Image;

    @property()
    imgStart: Image;

    @property()
    Main: Box;

    constructor() { super() }



    onOpened(param?: any): void {
        this.labelName.text = GameData.userName;
        this.imgHead.skin = GameData.userHead;


        this.imgLevelMask = this.imgLevel.mask as Image;
        this.imgMsMask = this.imgMs.mask as Image;



    }
    addEvent(): void {
        this.regEvent(EventEnum.GOLDCHANGE, this.changeGold, true);
        this.regEvent(EventEnum.DIAMONDCHANGE, this.changeDiamond, true);
        this.regEvent(EventEnum.EXPERIENCECHANGE, this.changeExperience, true);
        this.regClick(this.imgPlusGold, this.openShop, CurrencyEnum.gold);
        this.regClick(this.imgPlusDiamond, this.openShop, CurrencyEnum.diamond);
        this.regClick(this.imgRing, this.openUserInfo);
        this.regClick(this.imgShop, this.openShop, CurrencyEnum.diamond);
        this.regClick(this.imgRanking, this.openRanking);
        this.regClick(this.imgSettings, this.openSetting);
        this.regClick(this.imgStart, this.checkFirstTime);
    }


    changeGold() {
        this.txtGold.text = StringUtil.formatToUnitEN(GameData.gold);
    }

    changeDiamond() {
        this.txtDiamond.text = StringUtil.formatToUnitEN(GameData.diamond);
    }
    changeExperience() {
        this.txtLevel.text = LevelMgr.level.toString();

    }
    openShop(currency: CurrencyEnum) {
        UIBaseMgr.instance.open(ViewEnum.ShopView, currency);
    }
    openUserInfo() {

    }
    openSetting() {
        UIBaseMgr.instance.open(ViewEnum.SettingView);
    }
    openRanking() {
        UIBaseMgr.instance.open(ViewEnum.RankingView);
    }




    checkFirstTime() {
        this.selectPlayer();
    }

    showGuide() {

    }


    selectPlayer() {
        MainGame.instance.selectPlayerAndWeapon();
        UIBaseMgr.instance.open(ViewEnum.SelectPlayerView);
        this.close();
    }

    selectWeapon() {

    }





    onClosed(): void {

    }


}