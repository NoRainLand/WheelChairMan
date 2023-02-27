import BaseItem from "./BaseItem";
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
* @Date: 2022-05-12 10:55:17 
 * @Last Modified by: NoRain
 * @Last Modified time: 2023-02-27 19:41:15
*/
/**管理类 */
export default class BaseItemMgr {

    constructor() {
        this.regEvent();
    }

    /**对象预设 */
    public objPrefab: Sprite3D;
    /**预设列表 */
    public objList: Array<Sprite3D> = [];
    /**预设脚本列表 */
    public objscriptList: Array<any> = [];
    /**objName */
    public objName: string = '';
    /**对象数据 */
    public objData: any = null;
    /**对象池子 */
    public objPool: Sprite3D;
    /**是否需要检查对象池子 */
    public checkPool: boolean = true;
    /**是否彻底销毁 */
    public isDestroy: boolean = false;

    /**初始化 */
    public init() {

    }


    /**加载 */
    public load(args: any = null) {

    }

    /**加载方法 用于加载每局游戏会清理的对象
      * @param data 关卡导出脚本的数据列表
      * @param clas 脚本
      * @param isRotPoint 是否为旋转节点
      */
    protected loadObjs(data: any, clas: any = null, isRotPoint: boolean = false) {
        if (data) {
            if (data instanceof Array) {
                if (data.length > 0) {
                    for (let i = 0; i < data.length; i++) {
                        let basedata = data[i];
                        let obj = this.createObj();
                        if (clas) {
                            let script = obj.addComponent(clas) as BaseItem;
                            script.index = i;
                            this.objPool.addChild(obj);
                            script.initPos(basedata, isRotPoint);
                            this.objscriptList.push(script);
                        } else {
                            this.objList.push(obj);
                            this.objPool.addChild(obj);
                            obj.transform.position = new Vector3(basedata.x, basedata.y, basedata.z);
                            if (isRotPoint) {
                                let rotPoint = obj.getChildAt(0) as Sprite3D;
                                rotPoint.transform.rotation = new Quaternion(basedata.rotX, basedata.rotY, basedata.rotZ, basedata.rotW);
                            } else {
                                obj.transform.rotation = new Quaternion(basedata.rotX, basedata.rotY, basedata.rotZ, basedata.rotW);
                            }
                            obj.transform.localScale = new Vector3(basedata.scaleX, basedata.scaleY, basedata.scaleZ);
                        }
                    }
                }
            } else {
                let list = [data];
                this.loadObjs(list);
            }
        }
    }


    /**通过预设生成 */
    protected createObj(): Sprite3D {
        if (this.objName != null && this.objName != undefined && this.objName != '') {
            if (this.objPrefab) {
                let obj = Pool.getItemByCreateFun(this.objName, this.objPrefab.clone, this.objPrefab) as Sprite3D;
                obj.name = this.objName;
                return obj;
            } else {
                console.log(this.objName + '对象为空')
                return null;
            }
        } else {
            console.log('对象名为空');
            return null;
        }
    }

    /**清理脚本 */
    public clear() {
        Laya.timer.clearAll(this);
        if (this.objscriptList && this.objscriptList.length > 0) {
            for (let i = 0; i < this.objscriptList.length; i++) {
                let script = this.objscriptList[i] as BaseItem;
                script && script.clear(this.isDestroy);
            }
        } else if (this.objList && this.objList.length > 0) {
            if (this.objName != '') {
                for (let i = 0; i < this.objList.length; i++) {
                    let obj = this.objList[i] as Sprite3D;
                    if (obj) {
                        obj.removeSelf();
                        if (this.isDestroy) {
                            obj.destroy(true);
                        } else {
                            Pool.recover(this.objName, obj);
                        }
                        obj = null;
                    }
                }
            } else {
                console.log("objName为空");
            }
        }
        this.objscriptList = [];
        this.objList = [];
        this.clearOthers();
        console.log('清理' + this.objName);
        this.checkObjPool();
    }



    /**检查对象池 */
    private checkObjPool() {
        if (this.checkPool) {
            if (this.objPool.numChildren > 0) {
                console.log('对象池' + this.objName + 'Pool回收有遗漏');
                console.log(this.objPool);
            }
        }
    }


    /**重置状态 */
    public reset() {

    }
    /**开始 */
    public gameStart() {

    }
    /**额外清理 */
    protected clearOthers() {

    }

    /**添加监听 */
    protected regEvent() {

    }
    /**移除监听 */
    protected unRegEvent() {

    }


    /**移除 */
    public destryObj() {
        this.unRegEvent();
        Laya.timer.clearAll(this);
    }

}