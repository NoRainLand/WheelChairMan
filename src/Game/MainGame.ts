import GameData from "../Data/GameData";
import { EventEnum } from "../Enum/EventEnum";
import { Scene3dEnum } from "../Enum/Scene3dEnum";
import EventMgr from "../Mgr/EventMgr";
import GameScene from "../Scene3d/GameScene";
import Scene3dMgr from "../Scene3dBase/Scene3dMgr";
import Timer from "../Util/Timer";
import EnemyMgr from "./Enemy/EnemyMgr";
import { GameStepEnum } from "./Enum/GameStepEnum";
import GroundMgr from "./Ground/GroundMgr";
import PlayerMgr from "./Player/PlayerMgr";
import WeaponMgr from "./Weapon/WeaponMgr";
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
 * @Date: 2023-02-20 15:26:58 
 * @Last Modified by: NoRain
 * @Last Modified time: 2023-03-03 21:22:51
 */
const { regClass, property } = Laya;
/**主游戏逻辑 */
@regClass()
export default class MainGame {
    private static _instance: MainGame;
    public static get instance(): MainGame {
        return this._instance ? this._instance : this._instance = new MainGame();
    }

    private $scene3dMap: Map<number, Object>;
    private $isInit: boolean = false;


    private $gameStep: GameStepEnum;

    private $gameScene: GameScene;

    gameTime: number;
    gameTimer: Timer;

    init() {
        if (!this.$isInit) {
            this.$isInit = true;
            this.addEvent();
            this.reset();
            WeaponMgr.instance.init();
            PlayerMgr.instance.init();
            EnemyMgr.instance.init();
        }
    }
    /**获取当前游戏的流程 */
    getGameStep(): number {
        return this.$gameStep;
    }


    addEvent() {
        EventMgr.on(EventEnum.GAMESCENELOADED, this, this.gameStart);
    }




    reset() {
        this.$gameStep = GameStepEnum.ResetGame;
        this.goToMain();
        this.$gameScene = null;
    }

    /**开始选择玩家 */
    selectPlayerAndWeapon() {
        this.$gameStep = GameStepEnum.SelectPlayer;
        Scene3dMgr.instance.open(Scene3dEnum.SelectPlayerScene);
        Scene3dMgr.instance.close(Scene3dEnum.MainScene);
    }
    /**返回主页 */
    goToMain() {
        Scene3dMgr.instance.close(Scene3dEnum.SelectPlayerScene);
        Scene3dMgr.instance.open(Scene3dEnum.MainScene);
    }

    loadGameScene() {
        this.$gameStep = GameStepEnum.LoadGameScene;
        Scene3dMgr.instance.close(Scene3dEnum.SelectPlayerScene);
        Scene3dMgr.instance.open(Scene3dEnum.GameScene);
    }


    /**游戏开始 */
    gameStart(gameScene: GameScene) {
        this.$gameStep = GameStepEnum.GameStart;

        this.$gameScene = gameScene;
        // console.log(gameScene);



        GroundMgr.instance.gameStart(this.$gameScene.groundStage);
        PlayerMgr.instance.gameStart(this.$gameScene.playerStage);

        this.$gameScene.cameraItem.initFallowTarget(PlayerMgr.instance.$playerItem.owner as Sprite3D);



        Timer.get(1400, this, () => {
            EnemyMgr.instance.gameStart(this.$gameScene.zombieStage);
        }).start();

        this.setGameTime();
    }


    /**开启一个游戏倒计时,倒计时结束游戏胜利 */
    setGameTime() {
        this.gameTime = GameData.gameTime;
        this.gameTimer = Timer.get(1000, this, () => {
            this.gameTime--;
            if (this.gameTime <= 0) {
                Timer.clearAll(this);
                this.gameWin();//倒计时结束直接win
            }
        }).loop().start();
    }


    /**游戏暂停 */
    gamePause() {
        this.$gameStep = GameStepEnum.GamePause;

        this.gameTimer.pause();

    }
    /**游戏继续*/
    gameResume() {
        this.$gameStep = GameStepEnum.GameStart;
        this.gameTimer.resume();

    }

    gameWin() {
        this.$gameStep = GameStepEnum.GameWin;

        this.gameOver();
    }
    gameLose() {
        this.$gameStep = GameStepEnum.GameLose;

        this.gameOver();
    }

    gameOver() {

    }





}