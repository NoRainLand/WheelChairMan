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
 * @Last Modified time: 2023-03-08 15:46:41
 */
const { regClass, property } = Laya;
/** */
@regClass()
export default class LoseView extends UIBase {
    @property()
    imgHome: Image;
    @property()
    imgRestart: Image;
    @property()
    labelGold: Label;
    constructor() { super() }

    onOpened(param?: any): void {
        this.labelGold.text = (MainGame.instance.killNum * 10).toString();
        SoundMgr.instance.playSound(SoundEnum.lose);
    }
    addEvent(): void {
        this.regClick(this.imgHome, this.gotoHome);
        this.regClick(this.imgRestart, this.gameRestart);
    }

    gotoHome() {
        EventMgr.event(EventEnum.GAMEOVER);
        this.close();
    }
    gameRestart() {
        EventMgr.event(EventEnum.GAMERESTART);
        this.close();
    }

}