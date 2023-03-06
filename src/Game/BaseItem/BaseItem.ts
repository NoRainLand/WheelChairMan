/*
 * @Author: NoRain 
 * @Date: 2023-02-25 17:15:05 
 * @Last Modified by: NoRain
 * @Last Modified time: 2023-03-06 16:11:55
 */

import EventMgr from "../../Mgr/EventMgr";
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
/**基础类 */
export default class BaseItem extends Script3d {



    constructor() { super() }
    /**序号 */
    index: number = -1;
    /**对象数据 */
    objData: any;
    /**位置数据 */
    posData: any;
    /**对象类型 */
    objType: number = -1;
    /**对象名字
     * 如果不为空就用这个名字作为键回收对象池
     */
    objName: string;

    private $events: any;

    onAwake() {
        this.$events = {};
        this.objName = '';
        this.addEvent();
    }


    addEvent() {

    }



    /**初始化位置
         * @param data 数据
         * @param isRotPoint 是否为旋转节点
         * @param isLocalPos 是否为本地节点
         * @param lscale 是否修正缩放
         */
    initPos(data: any, isRotPoint: boolean = false, isLocalPos: boolean = false, lscale: number = 1) {
        this.posData = data;
        let pos = new Vector3(this.posData.x, this.posData.y, this.posData.z);
        let rot = new Quaternion(this.posData.rotX, this.posData.rotY, this.posData.rotZ, this.posData.rotW);
        let scale = new Vector3(this.posData.scaleX * lscale, this.posData.scaleY * lscale, this.posData.scaleZ * lscale);
        if (isLocalPos) {
            pos && (this.localPosition = pos);
        } else {
            pos && (this.position = pos);
        }
        if (isRotPoint) {
            let rotPoint = this.obj.getChildAt(0) as Sprite3D;
            rotPoint && (rotPoint.transform.rotation = rot);
        } else {
            rot && (this.rotation = rot);
        }
        scale && (this.localScale = scale);
        this.initOthers();
    }


    protected initOthers() {

    }


    /**
     * 注册自身事件
     * 回收对象的时候会自动移除
     * @param eventName 
     * @param func 
     */
    protected regEvent(eventName: string, func: Function): void {
        var self = this;
        self.$events[eventName] = func;
        EventMgr.on(eventName, self, func);
    }

    /**移除监听 */
    private unRegEvent() {
        var self = this, eventMgr = EventMgr, events = self.$events;
        // 注册事件清理
        for (let name in events) {
            eventMgr.off(name, self, events[name]);
        }
        self.$events = null;
    }
    /**清理回收对象 */
    clear(isDestroy: boolean = false) {
        this.clearOthers();
        this.unRegEvent();
        Laya.timer.clearAll(this);
        // Tween.clear(this.transform);
        this.index = -1;
        this.objData = null;
        this.posData = null;
        if (this.obj) {
            this.obj.removeSelf();
            if (isDestroy) {
                this.obj.destroy(true);
            } else {
                if (this.objName != "") {
                    Pool.recover(this.objName, this.obj);
                    this.objName = "";
                } else {
                    Pool.recover(this.obj.name, this.obj);
                }
            }
            // this.destroy();
        } else {
            // this.destroy();
        }
    }
    /**额外清理
     */
    protected clearOthers() {

    }

}