import { EventEnum } from "../Enum/EventEnum";
import { Scene3dEnum } from "../Enum/Scene3dEnum";
import EventMgr from "../Mgr/EventMgr";
import GameScene from "../Scene3d/GameScene";
import Scene3dMgr from "../Scene3dBase/Scene3dMgr";
import { GameStepEnum } from "./Enum/GameStepEnum";
import GroundMgr from "./Ground/GroundMgr";
import PlayerMgr from "./Player/PlayerMgr";
import WeaponMgr from "./Weapon/WeaponMgr";

/*
 * @Author: NoRain 
 * @Date: 2023-02-20 15:26:58 
 * @Last Modified by: NoRain
 * @Last Modified time: 2023-03-03 10:13:18
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


    init() {
        if (!this.$isInit) {
            this.$isInit = true;
            this.addEvent();
            this.reset();
            WeaponMgr.instance.init();
            PlayerMgr.instance.init();
        }
    }
    /**获取当前游戏的流程 */
    getGameSetp(): number {
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




    }
    /**游戏暂停 */
    gamePause() {
        this.$gameStep = GameStepEnum.GamePause;

    }
    /**游戏继续*/
    gameResume() {
        this.$gameStep = GameStepEnum.GameStart;

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