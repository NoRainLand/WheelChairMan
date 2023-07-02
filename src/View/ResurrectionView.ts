import ProjectConfig from "../Config/ProjectConfig";
import GameData from "../Data/GameData";
import { EventEnum } from "../Enum/EventEnum";
import { SoundEnum } from "../Enum/SoundEnum";
import EventMgr from "../Mgr/EventMgr";
import SoundMgr from "../Mgr/SoundMgr";
import PlatformMgr from "../Platform/PlatformMgr";
import UIBase from "../UIBase/UIBase";
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
 * @Date: 2023-03-07 11:32:13 
 * @Last Modified by: NoRain
 * @Last Modified time: 2023-03-08 15:54:46
 */
const { regClass, property } = Laya;
/**复活界面 */
@regClass()
export default class ResurrectionView extends UIBase {
    @property({ type: Image })
    labelTime: Label;
    @property({ type: Image })
    imgWatch: Image;

    countdown: number = 0;

    constructor() { super() }

    onOpened(param?: any): void {
        this.countdown = GameData.countdown;
        this.labelTime.text = this.countdown.toString();
        Tween.get(this.labelTime)
            .set({ scaleX: 1.3, scaleY: 1.3 })
            .to({ scaleX: 1, scaleY: 1 }, 1000)
            .call(this, () => {
                this.countdown--;
                this.labelTime.text = this.countdown.toString();
                SoundMgr.instance.playSound(SoundEnum.countdown, 1);
                if (this.countdown == 0) {
                    Tween.clear(this.labelTime);
                    this.goDie();
                }
            })
            .loop()
            .start()

    }

    addEvent(): void {
        this.regClick(this.imgClose, this.goDie);
        this.regClick(this.imgWatch, this.watch);
    }

    watch() {
        PlatformMgr.instance.miniGame?.showVideo(this, this.resurrection);
        ProjectConfig.isDebug && this.resurrection(true);
    }
    resurrection(args: any) {
        if (args) {
            EventMgr.event(EventEnum.PLAEYRRESURRECTION);
            this.close();
        }
    }



    goDie() {
        Tween.clearAll(this.labelTime);
        EventMgr.event(EventEnum.GAMELOSE);
        this.close();
    }

}