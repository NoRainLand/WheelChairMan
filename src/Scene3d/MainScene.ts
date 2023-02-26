import Scene3d from "../Scene3dBase/Scene3d";
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
import Scene3D = Laya.Scene3D;
import SkyRenderer = Laya.SkyRenderer;
/*
 * @Author: NoRain 
 * @Date: 2023-02-21 11:33:15 
 * @Last Modified by: NoRain
 * @Last Modified time: 2023-02-25 16:29:19
 */

const { regClass, property } = Laya;
/**主界面 */
@regClass()
export default class MainScene extends Scene3d {

    constructor() { super() }



    onOpened(param?: any): void {

    }


}