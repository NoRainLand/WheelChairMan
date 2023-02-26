/*
* @Author: NoRain
* @Date: 2022-05-12 10:55:17 
 * @Last Modified by: NoRain
 * @Last Modified time: 2023-02-25 19:23:51
*/

import { DataTableEnum } from "../../Enum/DataTableEnum";
import { LocalStorageEnum } from "../../Enum/LocalStorageEnum";
import LocalStorageMgr from "../../Mgr/LocalMgr";
import ResLoader from "../../Util/ResLoader";
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
    private $playerMap: Map<number, Object>;

    private $selectedPlayerId: number;

    private $sign: string = "playerId_"

    private $unlockList: number[];

    init() {
        this.$playerMap = ResLoader.instance.getDataTableById(DataTableEnum.Player);
    }




    // /**获取当前选择的玩家id */
    // get selectedPlayerId(): number {
    //     if (!this.$selectedPlayerId) {
    //         let id = Number(LocalStorageMgr.getItem(LocalStorageEnum.PLAYERID)?.replace(this.$sign, ""));
    //         if (isNaN(id)) {
    //             this.$selectedPlayerId = 1001;
    //             LocalStorageMgr.setItem(LocalStorageEnum.PLAYERID, this.$sign + this.$selectedPlayerId);
    //         } else {
    //             {
    //                 this.$selectedPlayerId = id
    //             }
    //         }
    //     }
    //     return this.$selectedPlayerId
    // }

    // set selectedPlayerId(value: number) {
    //     if (value) {
    //         this.$selectedPlayerId = value;
    //         LocalStorageMgr.setItem(LocalStorageEnum.PLAYERID, this.$sign + this.$selectedPlayerId);
    //     }
    // }







    /**获取已经解锁的人物 */
    getUnlockList(): number[] {
        let str = LocalStorageMgr.getItem(LocalStorageEnum.UNLOCKPLAYERLIST);
        if (str) {
            this.$unlockList = JSON.parse(str);
        } else {
            this.$unlockList = [1001];
            LocalStorageMgr.setItem(LocalStorageEnum.UNLOCKPLAYERLIST, JSON.stringify(this.$unlockList));
        }
        return this.$unlockList;
    }

    /**解锁人物 */
    unlockPlayer(playerId: number) {
        if (playerId && this.$unlockList.indexOf(playerId) == -1) {
            this.$unlockList.push(playerId);
            LocalStorageMgr.setItem(LocalStorageEnum.UNLOCKPLAYERLIST, JSON.stringify(this.$unlockList));
        }
    }





    /**是否已经解锁 */
    isUnlock(playerId: number) {
        let arr = this.getUnlockList();
        return arr.indexOf(playerId) != -1;
    }


    /**获取当前选择的玩家数据 */
    getSelectedPlayerData(playerId: number) {
        return this.$playerMap.get(playerId);
    }




    /**获取当前人物 */
    getSelectPlayer(playerId: number): Sprite3D {
        let playerData = this.getSelectedPlayerData(playerId);
        return ResLoader.instance.getResCloneById(playerData?.["path"]);
    }


}