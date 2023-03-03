/*
* @Author: NoRain
* @Date: 2022-05-12 10:55:17 
 * @Last Modified by: NoRain
 * @Last Modified time: 2023-03-03 14:55:55
*/
import { GrassEnum } from "../../Enum/GroundEnum";
import ResLoader from "../../Util/ResLoader";
import Timer from "../../Util/Timer";
import PlayerMgr from "../Player/PlayerMgr";
import GroundItem from "./GroundItem";
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
/**地板 */
export default class GroundMgr {
    private static _instance: GroundMgr;
    public static get instance(): GroundMgr {
        return this._instance ? this._instance : this._instance = new GroundMgr();
    }

    private $stage: Sprite3D;
    private $grass: Sprite3D;

    private groundList: Array<GroundItem>;

    init() {
        if (!this.$grass) {
            this.$grass = ResLoader.instance.getResCloneById(GrassEnum.grass);
        }


    }

    gameStart(grassStage: Sprite3D) {
        this.$stage = grassStage;

        if (this.groundList) {
            for (let i = 0; i < this.groundList.length; i++) {
                let groundItem = this.groundList[i];
                this.$stage.addChild(groundItem.owner);
                groundItem.init();
            }
        } else {
            this.groundList = [];
            for (let i = 0; i < 24; i++) {
                let grass = ResLoader.instance.getResCloneById(GrassEnum.grass);
                let groundItem = grass.getComponent(GroundItem) as GroundItem;
                groundItem.index = i;
                this.$stage.addChild(grass);
                this.groundList.push(groundItem);
                groundItem.init();
            }
        }



        Timer.get(16, this, () => {
            let pos = PlayerMgr.instance.getPlayerPos();
            for (let i = 0; i < this.groundList.length; i++) {
                let groundItem = this.groundList[i];
                groundItem.changePos(pos);
            }
        }).frameLoop().start();


    }

    gamePause() {

    }

    gameOver() {
        Timer.clearAll(this);
    }








}