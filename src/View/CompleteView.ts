import { EventEnum } from "../Enum/EventEnum";
import { SoundEnum } from "../Enum/SoundEnum";
import MainGame from "../Game/MainGame";
import EventMgr from "../Mgr/EventMgr";
import SoundMgr from "../Mgr/SoundMgr";
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
 * @Last Modified time: 2023-03-08 15:46:13
 */
const { regClass, property } = Laya;
/**胜利界面 */
@regClass()
export default class CompleteView extends UIBase {
    @property({ type: Label })
    labelDiamond: Label;
    @property({ type: Label})
    labelGold: Label;
    @property({ type: Image})
    imgStar1: Image;
    @property({ type: Image})
    imgStar2: Image;
    @property({ type: Image})
    imgStar3: Image;
    @property({ type: Image})
    imgNext: Image;
    @property({ type: Image})
    imgRestart: Image;
    @property({ type: Image})
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

        SoundMgr.instance.playSound(SoundEnum.win);
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