import GameData from "../Data/GameData";
import { EventEnum } from "../Enum/EventEnum";
import { ViewEnum } from "../Enum/ViewEnum";
import MainGame from "../Game/MainGame";
import PlayerMgr from "../Game/Player/PlayerMgr";
import EventMgr from "../Mgr/EventMgr";
import UIBase from "../UIBase/UIBase";
import UIBaseMgr from "../UIBase/UIBaseMgr";
import RockerBox from "../Util/RockerBox";
import Timer from "../Util/Timer";
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
 * @Last Modified time: 2023-03-04 17:00:41
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

    @property()
    labelTime: Label;

    @property()
    imgPause: Image;

    @property()
    labelKill: Label;


    private playerData: any;

    private health: number = 0;
    private totalHealth: number = 0;

    private healthList: Array<number>;


    constructor() { super() }
    onOpened(param?: any): void {
        this.rocketBoxL.initTarget(PlayerMgr.instance, PlayerMgr.instance.startMove, PlayerMgr.instance.stopMove);
        this.rocketBoxR.initTarget(PlayerMgr.instance, PlayerMgr.instance.startShoot, PlayerMgr.instance.stopShoot);
        this.playerData = PlayerMgr.instance.getSelectedPlayerData(PlayerMgr.instance.selectedPlayerId);
        this.totalHealth = this.health = this.playerData.health;


        Timer.get(1, this, () => {
            let min = Math.floor(MainGame.instance.gameTime / 60);
            let sec = MainGame.instance.gameTime % 60;

            this.labelTime.text = "0" + min + ":" + (sec < 10 ? "0" + sec : sec);

            let num = MainGame.instance.killNum;
            if (num < 10) {
                this.labelKill.text = "000" + num;
            } else if (num < 100) {
                this.labelKill.text = "00" + num;
            } else if (num < 1000) {
                this.labelKill.text = "0" + num;
            }


        }).frameLoop().start();
    }

    addEvent(): void {
        this.listHealth.renderHandler = new Handler(this, this.changeHealthItem);
        this.regEvent(EventEnum.HEALTHCHANGE, this.changeHealth, true);
        this.regEvent(EventEnum.PLAYERDEAD, this.playerDeath);
        this.regEvent(EventEnum.GAMEOVER, this.gameOver);
        this.regEvent(EventEnum.GAMERESTART, this.gameRestart);
        this.regEvent(EventEnum.GAMEWIN, this.gameWin);
        this.regEvent(EventEnum.GAMELOSE, this.ganeLose);

        this.regClick(this.imgPause, this.pause);
    }

    pause() {
        EventMgr.event(EventEnum.GAMEPAUSE);
        UIBaseMgr.instance.open(ViewEnum.PauseView);
    }

    gameOver() {
        this.close();
        UIBaseMgr.instance.open(ViewEnum.MainView);
    }
    gameRestart() {

    }
    gameWin() {
        UIBaseMgr.instance.open(ViewEnum.CompleteView);
    }
    ganeLose() {
        UIBaseMgr.instance.open(ViewEnum.LoseView);
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

    playerDeath() {
        if (MainGame.instance.resurrectionTimes >= GameData.resurrectionTimes) {
            UIBaseMgr.instance.open(ViewEnum.LoseView);
        } else {
            UIBaseMgr.instance.open(ViewEnum.ResurrectionView);
        }
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