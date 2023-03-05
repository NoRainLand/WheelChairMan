/*
* @Author: NoRain
* @Date: 2022-05-12 10:55:17 
 * @Last Modified by: NoRain
 * @Last Modified time: 2023-03-05 19:38:21
*/

import { DataTableEnum } from "../../Enum/DataTableEnum";
import ResLoader from "../../Util/ResLoader";
import WeaponItem from "./WeaponItem";
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

/**武器管理类 */
export default class WeaponMgr {
    private static _instance: WeaponMgr;
    public static get instance(): WeaponMgr {
        return this._instance ? this._instance : this._instance = new WeaponMgr();
    }


    private weaponDataMap: Map<number, Object>;

    private weaponMap: Map<number, Sprite3D>;
    selectWeaponId: number = 0;

    weaponItem: WeaponItem;

    init() {
        this.weaponDataMap = ResLoader.instance.getDataTableById(DataTableEnum.Weapon);
    }

    getSelectWeapon(weaponId: number): WeaponItem {
        console.log(weaponId);
        let obj: Sprite3D;
        let weaponItem: WeaponItem;
        if (!this.weaponMap) {
            this.weaponMap = new Map;
        } else {
            obj = this.weaponMap.get(weaponId);
        }
        if (!obj) {
            let weaponData = this.getSelectedWeaponData(weaponId);
            obj = ResLoader.instance.getResCloneById(weaponData["path"]);
            this.weaponMap.set(weaponId, obj);
            weaponItem = obj.getComponent(WeaponItem);
            if (weaponItem) {
                weaponItem.weaponData = weaponData;
            }
        }
        this.weaponItem = weaponItem;
        weaponItem.init();
        return weaponItem;
    }

    gameStart() {
        // this.weaponItem && this.weaponItem.gameStart();
    }

    /**获取当前选择的武器数据 */
    getSelectedWeaponData(weaponId: number) {
        return this.weaponDataMap.get(weaponId);
    }



}