import { EventEnum } from "../Enum/EventEnum";
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
 * @Last Modified time: 2023-02-14 10:43:32
 */
const { regClass, property } = Laya;
/**暂停界面 */
@regClass()
export default class PauseView extends UIBase {
    @property()
    imgContinue: Image;
    @property()
    imgRestart: Image;
    @property()
    imgQuit: Image;

    constructor() { super() }

    onOpened(param?: any): void {

    }
    addEvent(): void {
        this.regClick(this.imgContinue, this.continue);
        this.regClick(this.imgRestart, this.restart);
        this.regClick(this.imgQuit, this.quit);
    }



    continue() {
        EventMgr.event(EventEnum.GAMERESUME);
        this.close();
    }

    restart() {
        EventMgr.event(EventEnum.GAMERESTART);
        this.close();
    }

    quit() {
        EventMgr.event(EventEnum.GAMEOVER);
        this.close();
    }
}