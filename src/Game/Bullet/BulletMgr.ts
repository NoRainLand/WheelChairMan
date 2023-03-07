import { DataTableEnum } from "../../Enum/DataTableEnum";
import { PoolEnum } from "../../Enum/PoolEnum";
import ResLoader from "../../Util/ResLoader";
import BulletItem from "./BulletItem";
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
 * @Date: 2023-03-05 17:27:06 
 * @Last Modified by: NoRain
 * @Last Modified time: 2023-03-06 14:53:48
 */
/**子弹管理类 */
export default class BulletMgr {
    private static _instance: BulletMgr;
    public static get instance(): BulletMgr {
        return this._instance ? this._instance : this._instance = new BulletMgr();
    }

    private bulletData: Map<number, Object>;

    private bulletStage: Sprite3D;

    private bulletList: Array<BulletItem>;

    init() {
        this.bulletData = ResLoader.instance.getDataTableById(DataTableEnum.Bullet);
    }

    gameStart(stage: Sprite3D) {
        this.bulletStage = stage;
        this.bulletList = [];
    }

    createBullet(bulletId: number, shootPos: Sprite3D) {
        let bullet: Sprite3D = Pool.getItem(PoolEnum.BUllET + bulletId);
        let bulletData = this.bulletData.get(bulletId);
        if (!bullet) {
            bullet = ResLoader.instance.getResCloneById(bulletData["path"]);
        }
        let bulletItem = bullet.getComponent(BulletItem);
        bulletItem.position = shootPos.transform.position;
        bulletItem.rotationEuler = shootPos.transform.rotationEuler;
        bulletItem.bulletData = bulletData;
        bulletItem.objName = PoolEnum.BUllET + bulletId;
        this.bulletStage.addChild(bullet);
        bulletItem.init();
        this.bulletList.push(bulletItem);

    }

    gameOver() {
        for (let i = 0; i < this.bulletList.length; i++) {
            let item = this.bulletList[i];
            if (item && item.isActive) {
                item.clear();
            }
        }
    }

}