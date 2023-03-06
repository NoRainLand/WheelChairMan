import Script3d from "../../Script3d/Script3d";
import Timer from "../../Util/Timer";
import BulletMgr from "../Bullet/BulletMgr";
import { GameStepEnum } from "../Enum/GameStepEnum";
import MainGame from "../MainGame";
import PlayerItem from "../Player/PlayerItem";
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
 * @Date: 2023-02-28 17:52:41 
 * @Last Modified by: NoRain
 * @Last Modified time: 2023-03-06 11:39:32
 */
const { regClass, property } = Laya;
/**武器 */
@regClass()
export default class WeaponItem extends Script3d {
    /**武器数据 */
    weaponData: Object;


    /**总子弹数量 */
    totalBulletNum: number = 0;

    private $bulletNum: number = 0;


    /**开火间隔 */
    shotInterval: number = 0;

    waitShootInterval: number = 0;

    /**能否开火 */
    canShoot: boolean = false;

    /**换弹时间 */
    reloadTime: number = 0;

    /**是否正在换弹 */
    isReload: boolean = false;


    /**对应子弹ID */
    bulletId: number;


    /**是否正在射击 */
    isShooting: boolean = false;


    shootPos: Sprite3D;

    playerItem: PlayerItem;

    constructor() { super() }

    onEnable(): void {

    }
    onStart(): void {

    }

    init() {
        this.canShoot = true;
        this.isReload = false;
        this.isShooting = false;
        this.bulletId = this.weaponData["bulletPath"];
        this.$bulletNum = this.totalBulletNum = this.weaponData["prep"];
        this.reloadTime = this.weaponData["reloadTime"];
        this.shotInterval = this.weaponData["shotInterval"];
    }




    get bulletNum(): number {
        return this.$bulletNum;
    }

    set bulletNum(value: number) {
        if (!isNaN(value)) {
            this.$bulletNum = value;
            if (value == 0) {
                this.reLoad()
                this.canShoot = false;
            }
        }
    }

    reLoad() {
        this.isReload = true;
        Timer.get(this.reloadTime, this, () => {
            this.bulletNum = this.totalBulletNum;
            this.isReload = false;
        }).start();
        this.playerItem?.reloadTips?.showTips(this.reloadTime);
    }


    update(time: number): void {
        if (MainGame.instance.gameStep == GameStepEnum.GameStart) {

            if (this.isShooting) {
                if (this.canShoot && this.isReload == false) {
                    BulletMgr.instance.createBullet(this.bulletId, this.shootPos);
                    this.canShoot = false;
                    this.bulletNum--;
                }
            }

            if (this.canShoot == false) {
                this.waitShootInterval += time;
                if (this.waitShootInterval >= this.shotInterval) {
                    this.waitShootInterval = 0;
                    this.canShoot = true;

                }
            }
        }
    }


    shoot(angle: number) {
        this.isShooting = true;
    }

    stopShoot() {
        this.isShooting = false;
    }



}