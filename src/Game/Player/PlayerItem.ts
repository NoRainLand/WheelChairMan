import { EventEnum } from "../../Enum/EventEnum";
import EventMgr from "../../Mgr/EventMgr";
import AnimatorTool from "../../Util/AnimatorTool";
import PlayerController from "../../Util/PlayerController";
import BaseItem from "../BaseItem/BaseItem";
import { PlayerAniEnum } from "../Enum/PlayerAniEnum";
import { PlayerStatusEnum } from "../Enum/PlayerStatusEnum";
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
import PixelLineSprite3D = Laya.PixelLineSprite3D;
import Color = Laya.Color;
/*
 * @Author: NoRain 
 * @Date: 2023-02-25 19:27:37 
 * @Last Modified by: NoRain
 * @Last Modified time: 2023-02-28 17:30:08
 */
const { regClass, property } = Laya;
/**玩家类 */
@regClass()
export default class PlayerItem extends BaseItem {


    constructor() { super() }

    /**玩家数据 */
    playerData: any;

    rot: Sprite3D;

    animator: Animator;

    private $health: number = 0;

    private totalHealth: number = 0;


    get health(): number {
        return this.$health;
    }
    set health(value: number) {
        if (!isNaN(value)) {
            let oldHealth = this.$health;
            this.$health = value;
            this.healthChange(oldHealth);
        }
    }


    private playerStatus: PlayerStatusEnum;

    private pixelLineSprite3D: PixelLineSprite3D;


    onEnable(): void {
        this.rot = this.obj.getChildAt(0) as Sprite3D;
        this.animator = this.rot.getComponent(Animator);
        if (this.playerData) {
            this.totalHealth = this.health = this.playerData.health;
            this.playerController.moveSpeed = this.playerData.speed;
        }
        this.playerStatus = PlayerStatusEnum.idle;
        if (this.pixelLineSprite3D) {
            this.pixelLineSprite3D.active = false;
        }
    }


    private $playerController: PlayerController;

    get playerController(): PlayerController {
        if (!this.$playerController) {
            this.$playerController = this.obj.getComponent(PlayerController);
        }
        return this.$playerController;
    }


    gameStart() {
        if (!this.pixelLineSprite3D) {
            this.pixelLineSprite3D = new PixelLineSprite3D(1);
            this.obj.addChild(this.pixelLineSprite3D);
            this.pixelLineSprite3D.addLine(new Vector3(0, 1.3, 0), new Vector3(0, 1.3, 5), new Color(1 / 255, 114 / 255, 1 / 255), new Color(1 / 255, 114 / 255, 1 / 255));
        }
    }


    /**血量改变 */
    healthChange(oldHealth: number) {
        if (this.health == 0) {
            EventMgr.event(EventEnum.PLAYERDEAD);
            this.playerStatus = PlayerStatusEnum.death;
            this.changeAni();
        }
    }


    changeAni() {
        switch (this.playerStatus) {
            case PlayerStatusEnum.idle:
                AnimatorTool.play(this.animator, PlayerAniEnum.idle, true, 1, 1, false, 0.2);
                AnimatorTool.play(this.animator, PlayerAniEnum.idle, true, 1, 2, false, 0.2);
                break;
            case PlayerStatusEnum.death:
                AnimatorTool.play(this.animator, PlayerAniEnum.death, false, 1, 1, false, 0.2);
                AnimatorTool.play(this.animator, PlayerAniEnum.death, false, 1, 2, false, 0.2);
                break;
            case PlayerStatusEnum.run:
                AnimatorTool.play(this.animator, PlayerAniEnum.runUp, true, 1, 1, false, 0.2);
                AnimatorTool.play(this.animator, PlayerAniEnum.runDown, true, 1, 2, false, 0.2);
                break;
            case PlayerStatusEnum.runAndShoot:
                AnimatorTool.play(this.animator, PlayerAniEnum.shoot, true, 1, 1, false, 0.2);
                AnimatorTool.play(this.animator, PlayerAniEnum.runDown, true, 1, 2, false, 0.2);
                break;
            case PlayerStatusEnum.standAndShoot:
                AnimatorTool.play(this.animator, PlayerAniEnum.shoot, true, 1, 1, false, 0.2);
                AnimatorTool.play(this.animator, PlayerAniEnum.stand, true, 1, 2, false, 0.2);
                break;
        }
    }


    startMove(angle: number, value: number) {
        if (this.playerStatus == PlayerStatusEnum.death) return;
        this.playerController.move(angle);
        if (this.playerStatus == PlayerStatusEnum.idle) {
            this.playerStatus = PlayerStatusEnum.run;
            this.changeAni();
        } else if (this.playerStatus == PlayerStatusEnum.standAndShoot) {
            this.playerStatus = PlayerStatusEnum.runAndShoot;
            this.changeAni();
        }
    }


    stopMove() {
        if (this.playerStatus == PlayerStatusEnum.death) return;
        this.playerController.stopMove();
        if (this.playerStatus == PlayerStatusEnum.run) {
            this.playerStatus = PlayerStatusEnum.idle;
            this.changeAni();
        } else if (this.playerStatus == PlayerStatusEnum.runAndShoot) {
            this.playerStatus = PlayerStatusEnum.standAndShoot;
            this.changeAni();
        }
    }


    startShoot(angle: number, value: number) {
        if (this.playerStatus == PlayerStatusEnum.death) return;
        this.rot.transform.localRotationEulerY = angle;
        if (this.playerStatus == PlayerStatusEnum.idle) {
            this.playerStatus = PlayerStatusEnum.standAndShoot;
            this.changeAni();
        } else if (this.playerStatus == PlayerStatusEnum.run) {
            this.playerStatus = PlayerStatusEnum.runAndShoot;
            this.changeAni();
        }
        this.pixelLineSprite3D.transform.localRotationEulerY = angle;
        this.pixelLineSprite3D.active = true;
    }
    stopShoot() {
        if (this.playerStatus == PlayerStatusEnum.death) return;
        if (this.playerStatus == PlayerStatusEnum.standAndShoot) {
            this.playerStatus = PlayerStatusEnum.idle;
            this.changeAni();
        } else if (this.playerStatus == PlayerStatusEnum.runAndShoot) {
            this.playerStatus = PlayerStatusEnum.run;
            this.changeAni();
        }
        this.pixelLineSprite3D.active = false;
    }

}