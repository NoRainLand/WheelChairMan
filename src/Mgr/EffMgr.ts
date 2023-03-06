/*
 * @Author: NoRain 
 * @Date: 2023-03-06 15:17:15 
 * @Last Modified by: NoRain
 * @Last Modified time: 2023-03-06 15:26:58
 */

import { EffEnum } from "../Enum/EffEnum";
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
export default class EffMgr {
    private static _instance: EffMgr;
    public static get instance(): EffMgr {
        return this._instance ? this._instance : this._instance = new EffMgr();
    }

    createEff(eff: EffEnum, aliveTime: number, staget?: Sprite3D) {

    }

}