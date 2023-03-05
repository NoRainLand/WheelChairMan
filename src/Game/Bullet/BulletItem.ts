import Script3d from "../../Script3d/Script3d";
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
 * @Last Modified time: 2023-03-05 21:19:34
 */
const { regClass, property } = Laya;
/**子弹 */
@regClass()
export default class BulletItem extends Script3d {
    @property()
    phy: PhysicsCollider;
    /**子弹数据 */
    bulletData: Object;
    /**飞行速度 */
    speed: number;




    constructor() { super() }

    init() {
        if (this.phy) {

        }
        if (this.bulletData) {

            this.speed = this.bulletData["speed"];
            console.log(this.bulletData);
        }
    }

    update(time: number): void {

    }



}