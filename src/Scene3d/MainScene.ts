import Scene3d from "../UIBase/Scene3d";
import Timer from "../Util/Timer";
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
 * @Last Modified time: 2023-02-24 23:50:17
 */

const { regClass, property } = Laya;
/**主界面 */
@regClass()
export default class MainScene extends Scene3d {
    private $scene3d: Scene3D;
    constructor() { super() }



    onOpened(param?: any): void {
        console.log("-----------open------");
        this.$scene3d = this.owner as Scene3D;
        let skyRenderer = this.$scene3d.skyRenderer;
        let mat = skyRenderer.material as Laya.SkyBoxMaterial;
        Timer.get(1, this, () => {
            mat._shaderValues.setNumber(Laya.SkyBoxMaterial.ROTATION, mat._shaderValues.getNumber(Laya.SkyBoxMaterial.ROTATION) + 0.01);
        }).frameLoop().start();
    }


}