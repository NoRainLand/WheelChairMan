import { EventEnum } from "../Enum/EventEnum";
import CameraItem from "../Game/CameraItem";
import EventMgr from "../Mgr/EventMgr";
import Scene3d from "../Scene3dBase/Scene3d";
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
import Camera = Laya.Camera;
import DirectionLight = Laya.DirectionLight;
/*
 * @Author: NoRain 
 * @Date: 2023-02-27 14:09:36 
 * @Last Modified by: NoRain
 * @Last Modified time: 2023-03-05 18:16:25
 */
const { regClass, property } = Laya;
/**游戏界面 */
@regClass()
export default class GameScene extends Scene3d {
    @property()
    cameraItem: CameraItem;
    @property()
    groundStage: Sprite3D;
    @property()
    light: DirectionLight;
    @property()
    playerStage: Sprite3D;
    @property()
    zombieStage: Sprite3D;
    @property()
    bulletStage: Sprite3D;


    constructor() { super() }

    onOpened(param?: any): void {
        EventMgr.event(EventEnum.GAMESCENELOADED, this);

    }






    addEvent(): void {


    }
    onClosed(): void {

    }
}
