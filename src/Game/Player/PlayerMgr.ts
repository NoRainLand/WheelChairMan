/*
* @Author: NoRain
* @Date: 2022-05-12 10:55:17 
 * @Last Modified by: NoRain
 * @Last Modified time: 2023-03-03 14:52:21
*/

import GameData from "../../Data/GameData";
import { CurrencyEnum } from "../../Enum/CurrencyEnum";
import { DataTableEnum } from "../../Enum/DataTableEnum";
import { EventEnum } from "../../Enum/EventEnum";
import { LocalizationEnum } from "../../Enum/LocalizationEnum";
import { LocalStorageEnum } from "../../Enum/LocalStorageEnum";
import LocalizationMgr from "../../Localization/LocalizationMgr";
import EventMgr from "../../Mgr/EventMgr";
import LocalStorageMgr from "../../Mgr/LocalMgr";
import UIBaseMgr from "../../UIBase/UIBaseMgr";
import ResLoader from "../../Util/ResLoader";
import PlayerItem from "./PlayerItem";
import Vector3 = Laya.Vector3;
import Sprite3D = Laya.Sprite3D;
import Quaternion = Laya.Quaternion;
import Pool = Laya.Pool;
import Vector4 = Laya.Vector4;
import Vector2 = Laya.Vector2;
import Handler = Laya.Handler;
import Rigidbody3D = Laya.Rigidbody3D;
import Material = Laya.Material;
import MeshSprite3D = Laya.MeshSprite3D;
import Animator = Laya.Animator;
import PhysicsCollider = Laya.PhysicsCollider;
import CharacterController = Laya.CharacterController;
import SkinnedMeshSprite3D = Laya.SkinnedMeshSprite3D;

/**玩家管理类 */
export default class PlayerMgr {
    private static _instance: PlayerMgr;
    public static get instance(): PlayerMgr {
        return this._instance ? this._instance : this._instance = new PlayerMgr();
    }
    private playerMap: Map<number, Object>;

    selectedPlayerId: number;

    private $sign: string = "playerId_"

    private unlockList: number[];


    playerItem: PlayerItem;

    private playerStage: Sprite3D;

    private playerPool: Map<number, PlayerItem>

    init() {
        this.playerMap = ResLoader.instance.getDataTableById(DataTableEnum.Player);
    }

    startMove(angle: number, value: number) {
        this.playerItem && this.playerItem.startMove(angle, value);
    }
    stopMove() {
        this.playerItem && this.playerItem.stopMove();
    }

    startShoot(angle: number, value: number) {
        this.playerItem && this.playerItem.startShoot(angle, value);
    }
    stopShoot() {
        this.playerItem && this.playerItem.stopShoot();
    }


    /**获取坐标 */
    getPlayerPos() {
        return this.playerItem?.position;
    }


    playerResurrection() {
        this.playerItem?.resurrection();
    }


    gameOver() {
        this.playerItem.clear();
    }









    /**获取已经解锁的人物 */
    getUnlockList(): number[] {
        let str = LocalStorageMgr.getItem(LocalStorageEnum.UNLOCKPLAYERLIST);
        if (str) {
            this.unlockList = JSON.parse(str);
        } else {
            this.unlockList = [1001];
            LocalStorageMgr.setItem(LocalStorageEnum.UNLOCKPLAYERLIST, JSON.stringify(this.unlockList));
        }
        return this.unlockList;
    }

    /**解锁人物 */
    unlockPlayer(playerId: number) {
        if (playerId && this.unlockList.indexOf(playerId) == -1) {
            let data = this.getSelectedPlayerData(playerId);

            switch (data["currency"]) {
                case CurrencyEnum.gold:
                    if (GameData.gold >= data["unlockPrice"]) {
                        GameData.gold -= data["unlockPrice"];
                        this.unlockList.push(playerId);
                        LocalStorageMgr.setItem(LocalStorageEnum.UNLOCKPLAYERLIST, JSON.stringify(this.unlockList));
                        UIBaseMgr.instance.showTips(LocalizationMgr.getLocalizationByEnum(LocalizationEnum.CONGRATULATIONSUNLOCK));
                        EventMgr.event(EventEnum.UNLOCKPLAYER, playerId);
                    } else {
                        UIBaseMgr.instance.showTips(LocalizationMgr.getLocalizationByEnum(LocalizationEnum.YOUDONTHAVEENOUGHDIAMONDS, LocalizationEnum.GOLD));
                    }
                    break;
                case CurrencyEnum.diamond:
                    if (GameData.diamond >= data["unlockPrice"]) {
                        GameData.diamond -= data["unlockPrice"];
                        this.unlockList.push(playerId);
                        LocalStorageMgr.setItem(LocalStorageEnum.UNLOCKPLAYERLIST, JSON.stringify(this.unlockList));
                        UIBaseMgr.instance.showTips(LocalizationMgr.getLocalizationByEnum(LocalizationEnum.CONGRATULATIONSUNLOCK));
                        EventMgr.event(EventEnum.UNLOCKPLAYER, playerId);
                    } else {
                        UIBaseMgr.instance.showTips(LocalizationMgr.getLocalizationByEnum(LocalizationEnum.YOUDONTHAVEENOUGHDIAMONDS, LocalizationEnum.DIAMOND));
                    }
                    break;
            }

        }
    }





    /**是否已经解锁 */
    isUnlock(playerId: number) {
        let arr = this.getUnlockList();
        return arr.indexOf(playerId) != -1;
    }


    /**获取当前选择的玩家数据 */
    getSelectedPlayerData(playerId: number) {
        return this.playerMap.get(playerId);
    }


    setSelectedPlayerId(playerId: number) {
        this.selectedPlayerId = playerId;
    }



    /**获取当前人物 */
    getSelectPlayer(playerId: number): PlayerItem {
        let obj: Sprite3D;
        let playerItem: PlayerItem;
        if (this.playerPool) {
            playerItem = this.playerPool.get(playerId);
        } else {
            this.playerPool = new Map;
        }
        if (!obj) {
            let playerData = this.getSelectedPlayerData(playerId);
            obj = ResLoader.instance.getResCloneById(playerData?.["path"]);
            playerItem = obj.getComponent(PlayerItem);
            this.playerPool.set(playerId, playerItem);
            if (playerItem) {
                playerItem.playerData = playerData;
            }
        }
        return playerItem;
    }




    gameStart(stage: Sprite3D) {
        this.playerStage = stage;
        this.playerItem = this.getSelectPlayer(this.selectedPlayerId);
        if (this.playerItem && this.playerStage) {
            this.playerStage.addChild(this.playerItem.obj);
            this.playerItem.gameStart();
        }

    }

}