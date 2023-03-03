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
 * @Date: 2023-03-03 10:11:46 
 * @Last Modified by: NoRain
 * @Last Modified time: 2023-03-03 10:13:10
 */
const { regClass, property } = Laya;
/**地板 */
@regClass()
export default class GroundItem extends Script3d {
    index: number;
    constructor() { super() }
    changePos(playerPos: Vector3) {

    }
}