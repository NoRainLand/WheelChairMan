import Script3d from "../Script3d/Script3d";
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
import Transform = Laya.Transform;
import Camera = Laya.Camera;
/*
 * @Author: NoRain 
 * @Date: 2023-03-03 14:41:02 
 * @Last Modified by: NoRain
 * @Last Modified time: 2023-03-03 20:44:30
 */
const { regClass, property } = Laya;
/**相机 */
@regClass()
export default class CameraItem extends Script3d {

    /**跟随目标 */
    fallowTarget: Sprite3D;
    public curpos: Laya.Vector3;
    private delatpos: Laya.Vector3;


    camera: Camera;

    constructor() { super() }

    onEnable(): void {
        this.camera = this.owner as Camera;
        // this.camera.orthographicVerticalSize = 20;
    }

    gameStart() {
        this.camera.transform.position = new Vector3(0, 12, 5.5);
        this.camera.transform.localRotationEuler = new Vector3(-65.001, 0, 0);

    }


    initFallowTarget(target: Sprite3D) {
        if (target) {
            this.fallowTarget = target;
            this.curpos = new Laya.Vector3();
            this.fallowTarget.transform.position.cloneTo(this.curpos);
            this.delatpos = new Laya.Vector3();
        }
    }

    laterUpdate(time: number): void {
        if (this.fallowTarget && this.curpos && this.delatpos) {
            this.fallowTarget.transform.position.vsub(this.curpos, this.delatpos);
            this.camera.transform.position.vadd(this.delatpos, this.delatpos);
            this.camera.transform.position = this.delatpos;

            this.fallowTarget.transform.position.cloneTo(this.curpos);
        }
    }


    /**是否能被相机看见 */
    IsVisible(pos: Vector3): boolean {
        let outpos = new Laya.Vector4();
        this.camera.viewport.project(pos, this.camera.projectionViewMatrix, outpos);
        if (outpos.z < 1) return true;
        return false;
    }

}