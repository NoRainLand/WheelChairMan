import { EventEnum } from "../Enum/EventEnum";
import MainGame from "../Game/MainGame";
import EventMgr from "../Mgr/EventMgr";
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
 * @Date: 2023-02-14 10:37:38 
 * @Last Modified by: NoRain
 * @Last Modified time: 2023-02-14 10:44:53
 */
const { regClass, property } = Laya;
/**胜利界面 */
@regClass()
export default class CompleteView extends UIBase {
    @property()
    labelDiamond: Label;
    @property()
    labelGold: Label;
    @property()
    imgStar1: Image;
    @property()
    imgStar2: Image;
    @property()
    imgStar3: Image;
    @property()
    imgNext: Image;
    @property()
    imgRestart: Image;
    @property()
    imgHome: Image;

    constructor() { super() }

    onOpened(param?: any): void {
        let diamond = Math.floor(MainGame.instance.killNum / 10);
        diamond = diamond > 0 ? diamond : 0;
        this.labelGold.text = (MainGame.instance.killNum * 10).toString();
        this.labelDiamond.text = diamond.toString();
        this.imgStar1.visible = true;
        this.imgStar2.visible = true;
        this.imgStar3.visible = false;
    }
    addEvent(): void {
        this.regClick(this.imgNext, this.goHome);
        this.regClick(this.imgHome, this.goHome);
        this.regClick(this.imgRestart, this.gameRestart);
    }

    goHome() {
        EventMgr.event(EventEnum.GAMEOVER);
        this.close();
    }
    gameRestart() {
        EventMgr.event(EventEnum.GAMERESTART);
        this.close();
    }


}