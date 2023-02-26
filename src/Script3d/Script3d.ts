/*
 * @Author: NoRain 
 * @Date: 2023-02-21 11:36:48 
 * @Last Modified by: NoRain
 * @Last Modified time: 2023-02-25 18:09:12
 */
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
/**3d脚本基类 */
export default class Script3d extends Laya.Script {
    constructor() {
        super();
    }



    /**y挂载脚本的对象
      * 同 owner
      */
    public get obj(): Sprite3D {
        return this.owner as Sprite3D;
    };



    /**z精灵变换。*/
    get transform(): Laya.Transform3D {
        return this.obj ? this.obj.transform : null;
    }


    /**d世界坐标 */
    get position(): Vector3 {
        return this.transform ? this.transform.position.clone() : null;
    }
    set position(v3: Vector3) {
        this.transform && (this.transform.position = v3);
    }
    /**本地坐标 */
    get localPosition(): Vector3 {
        return this.transform ? this.transform.localPosition.clone() : null;
    }
    set localPosition(v3: Vector3) {
        this.transform && (this.transform.localPosition = v3);
    }

    /**世界旋转 */
    get rotation(): Quaternion {
        return this.transform ? this.transform.rotation.clone() : null;
    }
    set rotation(v3: Quaternion) {
        this.transform && (this.transform.rotation = v3)
    }


    /**局部旋转 */
    get localRotation(): Quaternion {
        return this.transform ? this.transform.localRotation.clone() : null;
    }
    set localRotation(v3: Quaternion) {
        this.transform && (this.transform.localRotation = v3)
    }


    /**世界欧拉角 */
    get rotationEuler(): Vector3 {
        return this.transform ? this.transform.rotationEuler.clone() : null;
    }
    set rotationEuler(v3: Vector3) {
        this.transform && (this.transform.rotationEuler = v3)
    }
    /**本地欧拉角 */
    get localRotationEuler(): Vector3 {
        return this.transform ? this.transform.localRotationEuler.clone() : null;
    }
    set localRotationEuler(e) {
        this.transform && (this.transform.localRotationEuler = e)
    }


    /**世界缩放（某些情况不准，少用） */
    get scale(): Vector3 {
        return this.transform ? this.transform.getWorldLossyScale().clone() : null;
    }
    set scale(v3: Vector3) {
        this.transform && this.transform.setWorldLossyScale(v3);
    }


    /**本地缩放*/
    get localScale(): Vector3 {
        return this.transform ? this.transform.localScale.clone() : null;
    }
    set localScale(v3: Vector3) {
        this.transform && (this.transform.localScale = v3);
    }



    /**局部空间的X轴欧拉角。*/
    get localRotationEulerX(): number {
        return this.transform ? this.transform.localRotationEulerX : null;
    }
    set localRotationEulerX(num: number) {
        this.transform && (this.transform.localRotationEulerX = num);
    }
    /**局部空间的Y轴欧拉角。*/
    get localRotationEulerY(): number {
        return this.transform ? this.transform.localRotationEulerY : null;
    }
    set localRotationEulerY(num: number) {
        this.transform && (this.transform.localRotationEulerY = num);
    }
    /**局部空间的Z轴欧拉角。*/
    get localRotationEulerZ(): number {
        return this.transform ? this.transform.localRotationEulerZ : null;
    }
    set localRotationEulerZ(num: number) {
        this.transform && (this.transform.localRotationEulerZ = num);
    }

    /**局部位置X轴分量。*/
    get localPositionX(): number {
        return this.transform ? this.transform.localPositionX : null;
    }
    set localPositionX(num: number) {
        this.transform && (this.transform.localPositionX = num);
    }
    /**局部位置Y轴分量。*/
    get localPositionY(): number {
        return this.transform ? this.transform.localPositionY : null;
    }
    set localPositionY(num: number) {
        this.transform && (this.transform.localPositionY = num);
    }
    /**局部位置Z轴分量。*/
    get localPositionZ(): number {
        return this.transform ? this.transform.localPositionZ : null;
    }
    set localPositionZ(num: number) {
        this.transform && (this.transform.localPositionZ = num);
    }



    private updateTime: number;
    onUpdate(): void {
        this.updateTime = Laya.timer.delta;
        this.update(this.updateTime);
    }
    /**更新 */
    update(time: number) {

    }
    private laterUpdateTime: number
    onLateUpdate(): void {
        this.laterUpdateTime = Laya.timer.delta;
        this.laterUpdate(this.laterUpdateTime);
    }

    laterUpdate(time: number) {

    }




    /**
   * 世界坐标转局部坐标
   * @param {Vector3} pos2world 世界坐标
   * @param {Sprite3D} sp3d 局部空间
   * @returns {Vector3} 局部坐标
   */
    positionWorld2local(pos2world: Vector3, sp3d: Sprite3D): Vector3 {
        let pos2local: Vector3 = new Vector3(0, 0, 0);//局部坐标
        let m: Laya.Matrix4x4 = new Laya.Matrix4x4();//新建空矩阵	
        sp3d.transform.worldMatrix.invert(m);//获取当前局部空间的逆矩阵
        Vector3.transformCoordinate(pos2world, m, pos2local);
        return pos2local;
    }

}