/*
* @Author: NoRain
* @Date: 2022-05-12 10:55:17 
 * @Last Modified by: NoRain
 * @Last Modified time: 2023-03-13 17:52:20
*/

import DataTable from "../../DataTable/DataTable";
import { EventEnum } from "../../Enum/EventEnum";
import { PoolEnum } from "../../Enum/PoolEnum";
import EventMgr from "../../Mgr/EventMgr";
import ResLoader from "../../Util/ResLoader";
import Sprite3d from "../../Util/Sprite3d";
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
   

    private zombieList: Array<ZombieItem>;


    private maxZombieNum: number = 20;

    private enemyStage: Sprite3D;

    init() {
        this.zombieList = [];
        this.addEvent();
    }


    addEvent() {
        EventMgr.on(EventEnum.ENEMYDEATH, this, this.enemyDeath);
        EventMgr.on(EventEnum.PLAYERDEAD, this, this.playerDeath);
        EventMgr.on(EventEnum.GAMEWIN, this, this.gameWin);
        EventMgr.on(EventEnum.GAMELOSE, this, this.gameLose);
    }

    gameStart(stage: Sprite3D) {
        this.enemyStage = stage;
        let index = 0;
        // this.createZombie();

        Timer.get(200, this, () => {
            this.createZombie();
            index++;
            if (index >= this.maxZombieNum) {
                Timer.clearAll(this);
            }
        }).loop().start();
    }


    enemyDeath(enemyEnum: EnemyEnum) {
        switch (enemyEnum) {
            case EnemyEnum.zombie:
                this.createZombie();
                break;
        }
    }

    playerDeath() {
        for (let i = 0; i < this.zombieList.length; i++) {
            let zombieItem = this.zombieList[i];
            if (zombieItem?.health > 0) {
                zombieItem.playerDeath();
            }
        }
    }
    playerResurrection() {
        for (let i = 0; i < this.zombieList.length; i++) {
            let zombieItem = this.zombieList[i];
            if (zombieItem?.health > 0) {
                zombieItem.playerResurrection();
            }
        }
    }

    gameOver() {
        for (let i = 0; i < this.zombieList.length; i++) {
            let zombieItem = this.zombieList[i];
            if (zombieItem?.health > 0) {
                zombieItem.clear();
            }
        }
    }

    gamePause() {
        for (let i = 0; i < this.zombieList.length; i++) {
            let zombieItem = this.zombieList[i];
            if (zombieItem?.health > 0) {
                zombieItem.stopMove();
            }
        }
    }

    gameWin() {
        for (let i = 0; i < this.zombieList.length; i++) {
            let zombieItem = this.zombieList[i];
            if (zombieItem?.health > 0) {
                zombieItem.stopMove();
            }
        }
    }

    gameLose() {
        for (let i = 0; i < this.zombieList.length; i++) {
            let zombieItem = this.zombieList[i];
            if (zombieItem?.health > 0) {
                zombieItem.stopMove();
            }
        }
    }



    createZombie() {
        let zombie: Sprite3D;
        zombie = Pool.getItem(PoolEnum.ZOMBIE);
        if (!zombie) {
            zombie = ResLoader.instance.getResCloneById(DataTable.EnemyDataTableMap.get(EnemyEnum.zombie)?.path);
        }

        let point = this.getNewPos();



        let pos = PlayerMgr.instance.getPlayerPos();
        let zombieItem = zombie.getComponent(ZombieItem) as ZombieItem;
        zombieItem.position = new Vector3(pos.x + point.x, pos.y, pos.z + point.y);//pos.x + point.x, pos.y, pos.z + point.y
        this.enemyStage.addChild(zombie);
        zombieItem.objName = PoolEnum.ZOMBIE;
        zombieItem.index++;
        zombieItem.zombieData = DataTable.EnemyDataTableMap.get(EnemyEnum.zombie);
        zombieItem.init();
        this.zombieList.push(zombieItem);

    }


    getNewPos(ran?: number) {
        if (isNaN(ran)) {
            ran = Math.floor(Math.random() * 4);
        }
        let point = new Laya.Point;
        switch (ran) {
            case 0:
                point.x = -9;
                point.y = -6 + Math.random() * 12;
                break
            case 1:
                point.x = 9;
                point.y = -6 + Math.random() * 12;
                break
            case 2:
                point.x = -9 + Math.random() * 18;
                point.y = -6;
                break
            case 3:
                point.x = -9 + Math.random() * 18;
                point.y = 6;
                break
        }
        return point;
    }

    explode(pos: Vector3, range: number, damage: number) {
        for (let i = 0; i < this.zombieList.length; i++) {
            let zombieItem = this.zombieList[i];
            if (zombieItem && zombieItem.health > 0) {
                let dis = Vector3.distance(pos, zombieItem.position);
                if (range > dis) {
                    zombieItem.beHit(pos, damage, 0.4);
                }
            }
        }
    }

    explode2(pos: Vector3, angle: number, rad: number, r: number, damage: number) {
        for (let i = 0; i < this.zombieList.length; i++) {
            let zombieItem = this.zombieList[i];
            if (zombieItem && zombieItem.health > 0) {
                if (Sprite3d.pointInPie(pos.x, pos.z, angle, rad, r, zombieItem.position.x, zombieItem.position.z)) {
                    zombieItem.beHit(pos, damage, 0.2);
                }
            }
        }
    }



}