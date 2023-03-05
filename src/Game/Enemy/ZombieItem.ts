import Script3d from "../../Script3d/Script3d";
import AnimatorTool from "../../Util/AnimatorTool";
import PlayerController from "../../Util/PlayerController";
import Sprite3d from "../../Util/Sprite3d";
import { GameStepEnum } from "../Enum/GameStepEnum";
import { ZombieAniEnum } from "../Enum/ZombieAniEnum";
import { ZombieStatusEnum } from "../Enum/ZombieStatusEnum";
import MainGame from "../MainGame";
import PlayerMgr from "../Player/PlayerMgr";
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
 * @Date: 2023-03-03 16:00:31 
 * @Last Modified by: NoRain
 * @Last Modified time: 2023-03-05 20:42:34
 */
const { regClass, property } = Laya;
/**丧尸 */
@regClass()
export default class ZombieItem extends Script3d {




    private totalHealth: number = 0;

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

    animator: Animator;

    /**丧尸数据 */
    zombieData: any;
    /**旋转节点 */
    rotNode: Sprite3D;


    @property()
    skin1: SkinnedMeshSprite3D;
    @property()
    skin2: SkinnedMeshSprite3D;
    @property()
    skin3: SkinnedMeshSprite3D;
    @property()
    skin4: SkinnedMeshSprite3D;
    @property()
    skin5: SkinnedMeshSprite3D;



    logicTime: number = 0;

    zombieStatus: ZombieStatusEnum;


    constructor() { super() }

    onStart(): void {
        this.rotNode = this.owner.getChildAt(0) as Sprite3D;
        this.animator = this.rotNode.getComponent(Animator);
        this.randomSkin();
    }


    /**血量改变 */
    healthChange(oldHealth: number) {
        if (this.health <= 0) {
            this.dead();
        }
    }

    private $playerController: PlayerController;

    get playerController(): PlayerController {
        if (!this.$playerController) {
            this.$playerController = this.obj.getComponent(PlayerController);
        }
        return this.$playerController;
    }

    init() {

        this.zombieStatus = ZombieStatusEnum.idle;

        // this.playerController.characterController.collisionGroup = Physics3DUtils.COLLISIONFILTERGROUP_CUSTOMFILTER2;
        // this.playerController.characterController.canCollideWith = Physics3DUtils.COLLISIONFILTERGROUP_CUSTOMFILTER3 | Physics3DUtils.COLLISIONFILTERGROUP_CUSTOMFILTER1;

    }


    randomSkin() {
        this.skin1.active = false;
        this.skin2.active = false;
        this.skin3.active = false;
        this.skin4.active = false;
        this.skin5.active = false;
        let ran = Math.random();
        if (ran >= 0 && ran < 0.4) {
            this.skin1.active = true;
        } else if (ran >= 0.4 && ran < 0.6) {
            this.skin2.active = true;
        } else if (ran >= 0.6 && ran < 0.75) {
            this.skin3.active = true;
        } else if (ran >= 0.75 && ran < 0.9) {
            this.skin4.active = true;
        } else if (ran >= 0.9) {
            this.skin5.active = true;
        }
    }

    update(time: number): void {
        if (MainGame.instance.gameStep == GameStepEnum.GameStart) {
            this.logicTime += time;
            if (this.logicTime > 4 * 15) {
                this.logicTime = 0;

                let pos = PlayerMgr.instance.getPlayerPos();
                let angle = Sprite3d.getAngle(this.position, pos);
                this.move(angle);
            }
        }
    }


    changeAni() {
        switch (this.zombieStatus) {
            case ZombieStatusEnum.idle:
                AnimatorTool.play(this.animator, ZombieAniEnum.ZombieIdle, true, 1, 0, true, 0.1);
                break;
            case ZombieStatusEnum.walking:
                AnimatorTool.play(this.animator, ZombieAniEnum.ZombieWalk, true, 1.5, 0, true, 0.1);
                break;
            case ZombieStatusEnum.death:
                AnimatorTool.play(this.animator, ZombieAniEnum.ZombieDeath, false, 1, 0, true, 0.1);
                break;
        }
    }

    idle() {
        if (this.zombieStatus == ZombieStatusEnum.walking) {
            this.zombieStatus = ZombieStatusEnum.idle;
            this.changeAni();
        }
    }

    move(angle: number) {
        if (this.zombieStatus != ZombieStatusEnum.death) {
            if (this.zombieStatus != ZombieStatusEnum.walking) {
                this.zombieStatus = ZombieStatusEnum.walking;
                this.changeAni();
            }
            if (!isNaN(angle)) {
                this.playerController.move(angle);
                this.rotNode.transform.localRotationEulerY = angle;
            }
        }

    }

    dead() {
        this.zombieStatus = ZombieStatusEnum.death;
        this.changeAni();
    }


    beHit(pos: Vector3) {
        let angle = Sprite3d.getAngle(pos, this.position)
        this.playerController.beHit(angle);
    }


    onTriggerEnter(other: Laya.PhysicsComponent | Laya.ColliderBase, self?: Laya.ColliderBase, contact?: any): void {
        console.log('zombie_onTriggerEnter');
    }

    onCollisionEnter(collision: Laya.Collision): void {
        console.log("zombie_onCollisionEnter");
    }

}