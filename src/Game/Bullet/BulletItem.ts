import Physics3DUtils from "../../Util/Physics3DUtils";
import Timer from "../../Util/Timer";
import BaseItem from "../BaseItem/BaseItem";
import EnemyMgr from "../Enemy/EnemyMgr";
import ZombieItem from "../Enemy/ZombieItem";
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
/*
 * @Author: NoRain 
 * @Date: 2023-03-05 17:09:01 
 * @Last Modified by: NoRain
 * @Last Modified time: 2023-03-06 17:40:35
 */
const { regClass, property } = Laya;
/**子弹 */
@regClass()
export default class BulletItem extends BaseItem {

    /**子弹数据 */
    bulletData: Object;
    /**飞行速度 */
    speed: number;
    /**爆炸类型 */
    type: number = 0;
    /**爆炸范围 */
    expRange: number = 0;
    /**飞行距离 */
    flightDis: number = 0;
    /**伤害 */
    damage: number = 0;

    phy: PhysicsCollider;

    /**开始坐标 */
    startPos: Vector3;

    constructor() { super() }

    init() {
        if (this.bulletData) {

            this.speed = this.bulletData["speed"];
            this.type = this.bulletData["type"];
            this.expRange = this.bulletData["expRange"];
            this.flightDis = this.bulletData["flightDis"];
            this.damage = this.bulletData["damage"];


            this.startPos = this.position.clone();
        }

        this.phy = this.obj.getComponent(PhysicsCollider);

        if (this.phy) {
            this.phy.canCollideWith = Physics3DUtils.COLLISIONFILTERGROUP_CUSTOMFILTER2;
            this.phy.collisionGroup = Physics3DUtils.COLLISIONFILTERGROUP_CUSTOMFILTER4;

            console.log(this.phy.isTrigger);
        }
    }

    update(time: number): void {


        this.transform.translate(new Vector3(0, 0, this.speed));
        let len = Vector3.distance(this.startPos, this.position);
        if (len >= this.flightDis) {
            this.overDis();
        }

    }


    onTriggerEnter(other: Laya.PhysicsComponent | Laya.ColliderBase, self?: Laya.ColliderBase, contact?: any): void {
        let baseItem = other.owner.getComponent(ZombieItem)
        if (baseItem) {
            this.hitEnemy(baseItem);
        }
    }

    hitEnemy(baseItem: ZombieItem) {
        switch (this.type) {
            case 0:
                baseItem.beHit(this.position, this.damage);
                this.clear();
                break;
            case 1:
                this.explode(this.expRange);
                this.clear();
                break;
            case 2:
                baseItem.beHit(this.position, this.damage);
                break;
            case 3:
                baseItem.beHit(this.position, this.damage);
                break;
            case 4:
                // baseItem.beHit(this.position, this.damage);
                break;
        }
    }


    overDis() {
        switch (this.type) {
            case 0:
                this.clear();
                break;
            case 1:
                this.explode(this.expRange);
                this.clear();
                break;
            case 2:
                this.clear();
                break;
            case 3:
                this.clear();
                break;
            case 4:
                this.explode2(this.expRange);
                break;
        }
    }



    explode(range: number) {
        EnemyMgr.instance.explode(this.position, range, this.damage);
    }


    explode2(range: number) {
        EnemyMgr.instance.explode2(this.position, this.localRotationEulerY, Math.PI / 2, range, this.damage);
        Timer.get(500, this, () => {
            this.clear();
        })
            .start();
    }


}