import { EventEnum } from "../Enum/EventEnum";
import { Scene3dEnum } from "../Enum/Scene3dEnum";
import EventMgr from "../Mgr/EventMgr";
import GameScene from "../Scene3d/GameScene";
import Scene3dMgr from "../Scene3dBase/Scene3dMgr";
import { GameStepEnum } from "./Enum/GameStepEnum";
import PlayerMgr from "./Player/PlayerMgr";

/*
 * @Author: NoRain 
 * @Date: 2023-02-20 15:26:58 
 * @Last Modified by: NoRain
 * @Last Modified time: 2023-02-27 20:15:21
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


    private $gameSetp: GameStepEnum;

    private $gameScene: GameScene;


    init() {
        if (!this.$isInit) {
            this.$isInit = true;
            this.addEvent();
            this.reset();
            PlayerMgr.instance.init();
        }
    }
    /**获取当前游戏的流程 */
    getGameSetp(): number {
        return this.$gameSetp;
    }


    addEvent() {
        EventMgr.on(EventEnum.GAMESCENELOADED, this, this.gameStart);
    }




    reset() {
        this.$gameSetp = GameStepEnum.ResetGame;
        this.goToMain();
        this.$gameScene = null;
    }

    /**开始选择玩家 */
    selectPlayerAndWeapon() {
        this.$gameSetp = GameStepEnum.SelectPlayer;
        Scene3dMgr.instance.open(Scene3dEnum.SelectPlayerScene);
        Scene3dMgr.instance.close(Scene3dEnum.MainScene);
    }
    /**返回主页 */
    goToMain() {
        Scene3dMgr.instance.close(Scene3dEnum.SelectPlayerScene);
        Scene3dMgr.instance.open(Scene3dEnum.MainScene);
    }

    loadGameScene() {
        this.$gameSetp = GameStepEnum.LoadGameScene;
        Scene3dMgr.instance.close(Scene3dEnum.SelectPlayerScene);
        Scene3dMgr.instance.open(Scene3dEnum.GameScene);
    }


    /**游戏开始 */
    gameStart(gameScene: GameScene) {
        this.$gameSetp = GameStepEnum.GameStart;

        this.$gameScene = gameScene;
        // console.log(gameScene);



        // GroundMgr.instance.gameStart();
        PlayerMgr.instance.gameStart(this.$gameScene.playerStage);




    }
    /**游戏暂停 */
    gamePause() {
        this.$gameSetp = GameStepEnum.GamePause;

    }
    /**游戏继续*/
    gameResume() {
        this.$gameSetp = GameStepEnum.GameStart;

    }

    gameWin() {
        this.$gameSetp = GameStepEnum.GameWin;

        this.gameOver();
    }
    gameLose() {
        this.$gameSetp = GameStepEnum.GameLose;

        this.gameOver();
    }

    gameOver() {

    }





}