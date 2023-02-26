/*
 * @Author: NoRain 
 * @Date: 2023-02-25 17:15:05 
 * @Last Modified by: NoRain
 * @Last Modified time: 2023-02-25 19:30:28
 */

import Script3d from "../../Script3d/Script3d";
import PlayerController from "../../Util/PlayerController";
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
/**玩家类 */
export default class BaseItem extends Script3d {


    private $health: number = 0;

    get health(): number {
        return this.$health;
    }
    set health(value: number) {
        if (!isNaN(value)) {
            let oldHealth = this.$health;
            this.$health = value;
            this.healthChange(oldHealth);
        }
    }
    /**血量改变 */
    healthChange(oldHealth: number) {

    }

    private $playerController: PlayerController

    get playerController(): PlayerController {
        if (!this.$playerController) {
            this.$playerController = this.obj.getComponent(PlayerController);
        }
        return this.$playerController;
    }

}