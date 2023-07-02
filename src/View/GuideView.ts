import { EventEnum } from "../Enum/EventEnum";
import { LocalStorageEnum } from "../Enum/LocalStorageEnum";
import EventMgr from "../Mgr/EventMgr";
import LocalStorageMgr from "../Mgr/LocalMgr";
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
 * @Date: 2023-02-22 20:54:10 
 * @Last Modified by: NoRain
 * @Last Modified time: 2023-02-22 20:59:16
 */
const { regClass, property } = Laya;
/**过场界面 */
@regClass()
export default class GuideView extends UIBase {
    @property({ type: Image})
    imgSkip: Image;
    constructor() { super() }
    onOpened(param?: any): void {

    }
    addEvent(): void {
        this.imgSkip.on(Laya.Event.MOUSE_DOWN, this, this.skipGuide);
    }

    skipGuide() {

    }

    onClosed(): void {
        this.imgSkip.off(Laya.Event.MOUSE_DOWN, this, this.skipGuide);
        EventMgr.event(EventEnum.GUIDFINISH);
        LocalStorageMgr.setItem(LocalStorageEnum.FIRSTTIME, "1");
    }


}