/*
* @Author: NoRain
* @Date: 2022-05-12 10:55:17 
 * @Last Modified by: NoRain
 * @Last Modified time: 2023-03-03 20:44:22
*/

import { DataTableEnum } from "../../Enum/DataTableEnum";
import ObjUtil from "../../Util/ObjUtil";
import ResLoader from "../../Util/ResLoader";
import Timer from "../../Util/Timer";
import { EnemyEnum } from "../Enum/EnemyEnum";
import PlayerMgr from "../Player/PlayerMgr";
import ZombieItem from "./ZombieItem";
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

/**丧尸管理类 */
export default class EnemyMgr {
    private static _instance: EnemyMgr;
    public static get instance(): EnemyMgr {
        return this._instance ? this._instance : this._instance = new EnemyMgr();
    }
    private enemyDataMap: Map<number, Object>;

    private zombieList: Array<ZombieItem>;


    private maxZombieNum: number = 20;

    private enemyStage: Sprite3D;

    init() {
        this.enemyDataMap = ResLoader.instance.getDataTableById(DataTableEnum.Enemy);
        this.zombieList = [];
    }

    gameStart(stage: Sprite3D) {
        this.enemyStage = stage;
        let index = 0;
        Timer.get(200, this, () => {
            this.createZombie();
            index++;
            if (index >= 1) {
                Timer.clearAll(this);
            }
        }).loop().start();
    }


    createZombie() {
        if (this.zombieList.length < this.maxZombieNum) {
            let zombie = ResLoader.instance.getResCloneById(this.enemyDataMap.get(EnemyEnum.zombie)?.["path"]);
            let point = ObjUtil.randomRingPos(18, 13);
            let pos = PlayerMgr.instance.getPlayerPos();
            let zombieItem = zombie.getComponent(ZombieItem) as ZombieItem;
            zombieItem.position = new Vector3(4,0,4);//pos.x + point.x, pos.y, pos.z + point.y
            this.enemyStage.addChild(zombie);
            zombieItem.init();
        }
    }




}