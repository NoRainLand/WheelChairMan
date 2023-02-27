/*
* @Author: NoRain
* @Date: 2022-05-12 10:55:17 
 * @Last Modified by: NoRain
 * @Last Modified time: 2023-02-27 19:42:38
*/

import BaseItemMgr from "../BaseItem/BaseItemMgr";
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
/**地板 */
export default class GroundMgr extends BaseItemMgr {
    private static _instance: GroundMgr;
    public static get instance(): GroundMgr {
        return this._instance ? this._instance : this._instance = new GroundMgr();
    }

    private $pool: Sprite3D;
    private $grass: Sprite3D;

    private $grassPool: Array<Sprite3D>;

    init() {
        // if (!this.$grass) {
        //     this.$grass = ResLoader.instance.getResCloneById(GrassEnum.grass);
        // }
        // if (!this.$grassPool) {
        //     this.$grassPool = [];
        // }
        // if (!this.$grassPool.length) {

        // }

    }

    gameStart() {

    }

    gamePause() {

    }

    gameOver() {

    }








}