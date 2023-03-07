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
 * @Date: 2023-02-25 17:53:53 
 * @Last Modified by: NoRain
 * @Last Modified time: 2023-03-07 21:03:53
 */
/**3d对象的工具类 */
export default class Sprite3d {
    private static _instance: Sprite3d;
    public static get instance(): Sprite3d {
        return this._instance ? this._instance : this._instance = new Sprite3d();
    }






    private static _ZERO: Vector3;
    /**零向量 */
    static get ZERO(): Vector3 {
        if (!this._ZERO) {
            this._ZERO = new Vector3(0, 0, 0);
            Object.freeze(this._ZERO);
        }
        return this._ZERO;
    }
    private static _ONE: Vector3;
    /**一向量 */
    static get ONE(): Vector3 {
        if (!this._ONE) {
            this._ONE = new Vector3(1, 1, 1);
            Object.freeze(this._ONE);
        }
        return this._ONE;
    }


    /**X向量 */
    private static _UnitX: Vector3;
    /**X向量 */
    static get UnitX(): Vector3 {
        if (!this._UnitX) {
            this._UnitX = new Vector3(1, 0, 0);
            Object.freeze(this._UnitX);
        }
        return this._UnitX;
    }
    /**Y向量 */
    private static _UnitY: Vector3;
    /**Y向量 */
    static get UnitY(): Vector3 {
        if (!this._UnitY) {
            this._UnitY = new Vector3(0, 1, 0);
            Object.freeze(this._UnitY);
        }
        return this._UnitY;
    }

    /**Y向量 */
    private static _DOWN: Vector3;
    /**上向量 */
    static get DOWN(): Vector3 {
        if (!this._DOWN) {
            this._DOWN = new Vector3(0, -1, 0);
            Object.freeze(this._DOWN);
        }
        return this._DOWN;
    }

    /**Z向量 */
    private static _UnitZ: Vector3;
    /**Z向量 */
    static get UnitZ(): Vector3 {
        if (!this._UnitZ) {
            this._UnitZ = new Vector3(0, 0, 1);
            Object.freeze(this._UnitZ);
        }
        return this._UnitZ;
    }

    /**
   * 世界坐标转局部坐标
   * @param {Vector3} pos2world 世界坐标
   * @param {Sprite3D} sp3d 局部空间
   * @returns {Vector3} 局部坐标
   */
    static positionWorld2local(pos2world: Vector3, sp3d: Sprite3D): Vector3 {
        let pos2local: Vector3 = new Vector3(0, 0, 0);//局部坐标
        let m: Laya.Matrix4x4 = new Laya.Matrix4x4();//新建空矩阵	
        sp3d.transform.worldMatrix.invert(m);//获取当前局部空间的逆矩阵
        Vector3.transformCoordinate(pos2world, m, pos2local);
        return pos2local;
    }



    /**获取目标向量 */
    static getDic(startPos: Vector3, endPos: Vector3, scale: number = 1, ignoreY: boolean = false): Vector3 {
        if (startPos && endPos) {
            let v3 = new Vector3(0, 0, 0);
            Vector3.subtract(endPos, startPos, v3);
            Vector3.normalize(v3, v3);
            if (scale != 1) {
                Vector3.scale(v3, scale, v3);
            }
            if (ignoreY) {
                v3 = new Vector3(v3.x, 0, v3.z);
            }
            return v3;
        } else {
            return this.ZERO;
        }
    }
    /**获取目标Y轴的欧拉角
     *       ±180°
     *         |
     * 90° ----+---- -90°
     *         |
     *         0
     */
    static getAngle(startPos: Vector3, endPos: Vector3): number {
        if (startPos && endPos) {

            let offX = endPos.x - startPos.x;
            let offZ = endPos.z - startPos.z;
            let angle = Math.atan2(offX, offZ) * 180 / Math.PI;
            return angle;
        }
        return null;
    }

    /**获取3DUI节点上的脚本 */
    static get3DUIScript<T extends Laya.Component>(node: Sprite3D, _class: new () => T): T {
        if (node && _class) {
            let uiScript = node.getComponent(Laya.UI3D);
            return uiScript?.sprite?.getComponent(_class);
        }
        return null;
    }

    /**
     * 判定点是否再扇形区域上
     * @param startX 圆心X
     * @param startY 圆心Y
     * @param angle 扇形中心方向
     * @param rad 扇形弧度
     * @param r 圆半径
     * @param targetX 目标X
     * @param targetY 目标Y
     * @returns 
     */
    static pointInPie(startX: number, startY: number, angle: number, rad: number, r: number, targetX: number, targetY: number): boolean {
        let dis = this.getDistance(startX, startY, targetX, targetY);
        let offAngle = Math.atan2(targetY - startY, targetX - startY) * 180 / Math.PI;
        offAngle = Math.abs(angle - offAngle);
        let rag = rad * 180 / Math.PI / 2;
        if (offAngle <= rag && dis <= r) {
            return true;
        }

        return false;
    }


    /**获取两点距离 */
    static getDistance(x1: number, y1: number, x2: number, y2: number): number {
        return Math.sqrt((x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2));
    }




    //--------------------------获取节点------------------------

    //步骤1：获取目标节点的所有子节点，将所有子节点放入数组并返回
    public static getChildNodesArray(target: Laya.Node): Laya.Node[] {
        let nodeArray: Laya.Node[] = [];
        for (let i = 0; i < target.numChildren; i++) {
            let node = target.getChildAt(i);
            if (node) {
                nodeArray.push(node);
            }
        }
        return nodeArray;
    }

    //步骤二：递归获取目标节点的所有子孙节点，并将他们全部放入数组并返回
    public static FindAndGetAllChildren(parentNode: Laya.Node, outNodesArray: Laya.Node[]): Laya.Node[] {
        if (parentNode.numChildren > 0) {
            let nodeArray = this.getChildNodesArray(parentNode);
            nodeArray.forEach(node => {
                outNodesArray.push(node);
                if (this.getChildNodesArray(node).length > 0) {
                    this.FindAndGetAllChildren(node, outNodesArray);
                }
                else {
                    return outNodesArray;
                }
            });
        }
        return null;
    }

    //第三步：构建一个数组来存放获取的所有节点并返回此数组
    public static getAllChildrenArray(parentNode: Laya.Node): Laya.Node[] {
        let allChildrenArray: Laya.Node[] = [];
        this.FindAndGetAllChildren(parentNode, allChildrenArray);
        return allChildrenArray;
    }

    //最后一步：将所有节点封装到字典里，方便获取
    public static getAllChildrenMap(parentNode: Laya.Node): Map<string, Laya.Node> {

        let obj = parentNode as Laya.Sprite3D;
        let id = obj.id;
        let map: any = this.nodeDic[id];
        if (!map) {

            let allChildrenArray = this.getAllChildrenArray(parentNode);
            map = new Map();
            for (let i = 0; i < allChildrenArray.length; i++) {
                if (!map.has(allChildrenArray[i].name)) {
                    map.set(allChildrenArray[i].name, (allChildrenArray[i]));
                }
            }
            if (!this.nodeDic) {
                this.nodeDic = new Array<{ id: number, map: any }>();
            }
            this.nodeDic[id] = map;
        }

        return map;
    }

    //为了方便获取各种类型的节点，可以在写一个泛型方法来获取
    public static getNodeByMap<T extends Laya.Node>(nodeName: string, map: Map<string, Laya.Node>): T {
        if (!map.has(nodeName)) {
            return null;
        }
        return map.get(nodeName) as T;
    }


    static nodeDic = {};

    /**获取某个节点 */
    public static getNodeByName(nodeName: string, parentNode: Laya.Sprite3D): Laya.Sprite3D {
        let id = parentNode.id;
        let map: any = this.nodeDic[id];
        if (!map) {
            let allChildrenArray = this.getAllChildrenArray(parentNode);
            map = new Map();
            for (let i = 0; i < allChildrenArray.length; i++) {
                if (!map.has(allChildrenArray[i].name)) {
                    map.set(allChildrenArray[i].name, (allChildrenArray[i]));
                }
            }
            this.nodeDic[id] = map;
        }

        if (!map.has(nodeName)) {
            return null;
        }
        return map.get(nodeName) as Laya.Sprite3D;
    }

    /**清除拖尾
    * @param trail 拖尾
    * @param active 清理之后是否展示
    */
    public static clearTrail(trail: Laya.TrailSprite3D, active: boolean = false) {
        if (trail && trail instanceof Laya.TrailSprite3D) {
            trail.active = true;
            let bt = trail.trailFilter.time;
            trail.trailFilter.time = 0.001;
            Laya.timer.frameOnce(1, this, () => {
                trail.trailFilter.time = bt;
                trail.active = active;
            })
        }
    }




}