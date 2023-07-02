import { EventEnum } from "../Enum/EventEnum";
import { PlayerEnum } from "../Enum/PlayerEnum";
import PlayerItem from "../Game/Player/PlayerItem";
import PlayerMgr from "../Game/Player/PlayerMgr";
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
/*
 * @Author: NoRain 
 * @Date: 2023-02-24 22:40:31 
 * @Last Modified by: NoRain
 * @Last Modified time: 2023-02-27 19:12:41
 */
const { regClass, property } = Laya;
/**选择人物界面 */
@regClass()
export default class SelectPlayerScene extends Scene3d {

    @property({ type: Sprite3D})
    playerStage: Sprite3D;
    constructor() { super() }

    private $playerList: Array<number>;

    private playerItem: PlayerItem;

    onOpened(param?: any): void {
        if (!this.$playerList) {
            this.$playerList = [];
            this.$playerList = [];
            for (let item in PlayerEnum) {
                if (!isNaN(Number(item))) {
                    this.$playerList.push(Number(item));
                }
            }
        }
        // this.showPlayer(this.$playerList[0]);
    }
    addEvent(): void {
        this.regEvent(EventEnum.SHOWPLAYER, this.showPlayer);
    }
    showPlayer(playerId: number) {
        this.playerItem?.clear();
        this.playerItem = PlayerMgr.instance.getSelectPlayer(playerId);
        this.playerItem && this.playerStage.addChild(this.playerItem.obj);
        this.playerItem?.selectPlayer();

    }
    onClosed(): void {
        this.playerItem?.clear()
    }

}