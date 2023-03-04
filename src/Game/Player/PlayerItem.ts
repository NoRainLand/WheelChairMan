import { EventEnum } from "../../Enum/EventEnum";
import EventMgr from "../../Mgr/EventMgr";
import VibrateMgr from "../../Mgr/VibrateMgr";
import AnimatorTool from "../../Util/AnimatorTool";
import Physics3DUtils from "../../Util/Physics3DUtils";
import PlayerController from "../../Util/PlayerController";
import Sprite3d from "../../Util/Sprite3d";
import Timer from "../../Util/Timer";
import Tween from "../../Util/Tween";
import BaseItem from "../BaseItem/BaseItem";
import { PlayerAniEnum } from "../Enum/PlayerAniEnum";
import { PlayerStatusEnum } from "../Enum/PlayerStatusEnum";
import WeaponItem from "../Weapon/WeaponItem";
import WeaponMgr from "../Weapon/WeaponMgr";
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
 * @Last Modified time: 2023-03-04 17:05:13
 */
const { regClass, property } = Laya;
/**玩家类 */
@regClass()
export default class PlayerItem extends BaseItem {

    @property()
    weaponPoint: Sprite3D;

    @property()
    playerSkinMaterial: Material;

    constructor() { super() }

    /**玩家数据 */
    playerData: any;

    /**旋转节点 */
    rotNode: Sprite3D;

    animator: Animator;


    private totalHealth: number = 0;

    private weaponItem: WeaponItem;

    private $health: number = 0;
    /**生命 */
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

    /**是否无敌 */
    isGod: boolean = false;

    private $playerController: PlayerController;

    get playerController(): PlayerController {
        if (!this.$playerController) {
            this.$playerController = this.obj.getComponent(PlayerController);
        }
        return this.$playerController;
    }


    gameStart() {

        this.rotNode = this.obj.getChildAt(0) as Sprite3D;
        this.animator = this.rotNode.getComponent(Animator);
        if (this.playerData) {
            this.totalHealth = this.health = this.playerData.health;
            this.playerController.moveSpeed = this.playerData.speed;
        }
        this.playerStatus = PlayerStatusEnum.idle;


        this.playerController.characterController.collisionGroup = Physics3DUtils.COLLISIONFILTERGROUP_CUSTOMFILTER1;
        this.playerController.characterController.canCollideWith = Physics3DUtils.COLLISIONFILTERGROUP_CUSTOMFILTER2;


        if (!this.pixelLineSprite3D) {
            this.pixelLineSprite3D = new PixelLineSprite3D(1);
            this.obj.addChild(this.pixelLineSprite3D);
            this.pixelLineSprite3D.addLine(new Vector3(0, 1.3, 0), new Vector3(0, 1.3, 5), new Color(1 / 255, 114 / 255, 1 / 255), new Color(1 / 255, 114 / 255, 1 / 255));
            this.pixelLineSprite3D.active = false;
        }

        this.initWeapon();

    }

    initWeapon() {
        if (!this.weaponItem) {
            this.weaponItem = WeaponMgr.instance.getSelectWeapon(this.playerData["weaponId"]);
            this.weaponPoint.addChild(this.weaponItem.owner);
        } else {
            this.weaponItem.owner.active = true;
        }
        this.weaponItem.localPosition = Sprite3d.ZERO;
        this.weaponItem.localRotationEuler = Sprite3d.ZERO;
    }


    /**血量改变 */
    healthChange(oldHealth: number) {
        EventMgr.event(EventEnum.HEALTHCHANGE, this.health);
        if (this.health == 0) {
            EventMgr.event(EventEnum.PLAYERDEAD);
            this.playerStatus = PlayerStatusEnum.death;
            this.changeAni();
        }
    }


    changeAni() {
        this.weaponItem.owner.active = true;
        switch (this.playerStatus) {
            case PlayerStatusEnum.idle:
                this.weaponItem.owner.active = false;
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
        this.rotNode.transform.localRotationEulerY = angle;
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


    onCollisionEnter(collision: Laya.Collision): void {
        if (!this.isGod) {
            this.isGod = true;
            Timer.get(1000, this, () => {
                this.isGod = false;
            }).start();
            this.health--;
            VibrateMgr.vibrateLong();
            this.shakeSkin();
        }
    }


    shakeSkin() {
        let num = this.playerSkinMaterial.getFloat("u_EmissionIntensity");
        let data = { value: num }
        Tween.get(data)
            .toFun({
                value: (t) => {
                    this.playerSkinMaterial.setFloat("u_EmissionIntensity", data.value);
                    return t * 4 + num;
                }
            }, 120)
            .toFun({
                value: (t) => {
                    this.playerSkinMaterial.setFloat("u_EmissionIntensity", data.value);
                    return (1 - t) * 4 + num;
                }
            }, 120)
            .loop(4)
            .call(this, () => {
                this.playerSkinMaterial.setFloat("u_EmissionIntensity", num);
            })
            .start();
    }

}