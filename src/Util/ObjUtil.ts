/*
 * @Author: NoRain 
 * @Date: 2023-02-16 20:31:48 
 * @Last Modified by: NoRain
 * @Last Modified time: 2023-03-12 19:36:10
 */

import PrefabImpl = Laya.PrefabImpl;
import Text = Laya.Text;
import Box = Laya.Box;
import Scene = Laya.Scene;
import Label = Laya.Label;
import Image = Laya.Image;
import TextInput = Laya.TextInput;
import Sprite = Laya.Sprite;
import List = Laya.List;
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
import Point = Laya.Point;

/**工具类 */
export default class ObjUtil {
    /**数组去重 */
    static clearList(arr: Array<any>) {
        arr.every((item) => {

        })
    }


    /**Set转List */
    static set2List(_set: Set<any>): Array<any> {
        if (_set && _set.size) {
            let arr = [];
            for (let item of _set) {
                arr.push(item);
            }
            return arr;
        }
        return null;
    }

    /**移除项目 */
    static removeItem(arr: Array<any>, item: any) {
        if (arr && arr.length && item) {
            let index = arr.indexOf(item);
            index != -1 && arr.splice(index, 1);
        }
    }

    /**
     * 随机一个圆环坐标
     * @param De 外径
     * @param d 内径
     */
    static randomRingPos(De, d): Point {
        let point = new Point;
        let r = Math.random() * (De - d) + d;
        let angle = Math.random() * 360;
        point.x = Math.cos(angle / 2 / Math.PI) * r;
        point.y = Math.sin(angle / 2 / Math.PI) * r;
        return point;
    }


    /**随机排序数组 */
    static shuffle(arr) {
        let i = arr.length, t, j;
        while (--i) {
            j = Math.floor(Math.random() * i);
            t = arr[i];
            arr[i] = arr[j];
            arr[j] = t;
        }
    }

    /**生成特定范围随机数 */
    static randomNum(minNum, maxNum) {
        return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10);
    }

}