import Script3d from "../Script3d/Script3d";
import Sprite3d from "./Sprite3d";
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
 * @Date: 2023-02-25 17:21:37 
 * @Last Modified by: NoRain
 * @Last Modified time: 2023-02-25 19:33:57
 */
const { regClass, property } = Laya;
/**第三人称控制器 */
@regClass()
export default class PlayerController extends Script3d {
    constructor() { super() }



    /**角色控制器 */
    characterController: CharacterController;

    @property()
    friction: number = 0.5;
    @property()
    stepHeight: number = 0.1;
    @property()
    jumpAllTimes: number = 1;
    @property()
    moveSpeed: number = 10;


    jumpTimes: number = 0;



    onEnable(): void {
        this.characterController = this.obj.getComponent(CharacterController);
        if (!this.characterController) {
            console.log("characterController is undefined");
        }
    }


    onStart(): void {
        this.characterController.friction = this.friction;
        this.characterController.stepHeight = this.stepHeight;
        // Laya.Loader.createNodes()



    }

    update(time: number): void {

    }

    /**移动 */
    move(v3: Vector3) {
        Vector3.normalize(v3, v3);
        Vector3.scale(v3, this.moveSpeed, v3);
        this.characterController.move(v3);
    }
    /**停止移动 */
    stopMove() {
        this.characterController.move(Sprite3d.ZERO);
    }
    /**跳跃 */
    jump() {
        if (this.isGrounded) {
            this.jumpTimes = 0;
            this.jumpTimes++;
            this.characterController.jump();
        } else {
            if (this.jumpTimes < this.jumpAllTimes) {
                this.jumpTimes++;
                this.characterController.jump();
            }
        }
    }

    /**是否在地上 */
    isGrounded() {
        return this.characterController.isGrounded;
    }

    onDisable(): void {

    }

}