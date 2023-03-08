/*
 * @Author: NoRain 
 * @Date: 2023-03-06 15:17:15 
 * @Last Modified by: NoRain
 * @Last Modified time: 2023-03-08 19:20:33
 */

import { VFXEnum } from "../Enum/VFXEnum";
import ResLoader from "../Util/ResLoader";
import Sprite3d from "../Util/Sprite3d";
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

/**特效管理 */
export default class VFXMgr {
    private static _instance: VFXMgr;
    public static get instance(): VFXMgr {
        return this._instance ? this._instance : this._instance = new VFXMgr();
    }

    private $sign = "$VFX_";

    /**新建特效 */
    createVFX(vfxEnum: VFXEnum, aliveTime: number = 500, pos: Vector3, stage: Sprite3D) {
        let vfx: Sprite3D;
        vfx = Pool.getItem(this.$sign + vfxEnum);
        if (!vfx) {
            vfx = ResLoader.instance.getResCloneById(vfxEnum);
        }
        if (vfx) {
            stage.addChild(vfx);
            vfx.transform.position = pos;
            vfx.transform.localRotationEuler = Sprite3d.ZERO;
            vfx.active = true;
            Timer.get(aliveTime, this, () => {
                vfx.active = false;
                vfx.removeSelf();
                Pool.recover(this.$sign + vfxEnum, vfx);
            })
                .start();
        }
    }

}