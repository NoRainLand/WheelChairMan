import { EventEnum } from "../Enum/EventEnum";
import PlayerMgr from "../Game/Player/PlayerMgr";
import UIBase from "../UIBase/UIBase";
import RockerBox from "../Util/RockerBox";
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
 * @Last Modified time: 2023-02-27 20:24:24
 */
const { regClass, property } = Laya;
/**游戏界面 */
@regClass()
export default class GameView extends UIBase {
    @property()
    listHealth: List;
    @property()
    rocketBoxL: RockerBox;
    @property()
    rocketBoxR: RockerBox;

    private playerData: any;

    private health: number = 0;
    private totalHealth: number = 0;

    private healthList: Array<number>;

    constructor() { super() }
    onOpened(param?: any): void {
        this.rocketBoxL.initTarget(PlayerMgr.instance, PlayerMgr.instance.startMove, PlayerMgr.instance.stopMove);
        this.rocketBoxR.initTarget(PlayerMgr.instance, PlayerMgr.instance.startShoot, PlayerMgr.instance.stopShoot);
        this.playerData = PlayerMgr.instance.getSelectedPlayerData(PlayerMgr.instance.$selectedPlayerId);
        this.totalHealth = this.health = this.playerData.health;

    }

    addEvent(): void {
        this.listHealth.renderHandler = new Handler(this, this.changeHealthItem);
        this.regEvent(EventEnum.HEALTHCHANGE, this.changeHealth, true);
    }

    changeHealth(health: number) {
        if (!isNaN(health)) {
            this.health = health;
        }
        if (!this.healthList) {
            this.healthList = [];
            for (let i = 0; i < this.totalHealth; i++) {
                this.healthList.push(1);
            }
        }
        this.listHealth.array = this.healthList;
    }

    changeHealthItem(box: Box, index: number) {
        let img = box.getChildAt(0) as Image;
        if (index > this.health - 1) {
            img.gray = true;
        } else {
            img.gray = false;
        }
    }



    onClosed(): void {
        this.healthList = null;
    }


}