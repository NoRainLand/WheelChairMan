import { Scene3dEnum } from "../Enum/Scene3dEnum";
import Scene3dMgr from "../Scene3dBase/Scene3dMgr";
import PlayerMgr from "./Player/PlayerMgr";

/*
 * @Author: NoRain 
 * @Date: 2023-02-20 15:26:58 
 * @Last Modified by: NoRain
 * @Last Modified time: 2023-02-25 17:14:31
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

    init() {
        if (!this.$isInit) {
            this.$isInit = true;
            this.addEvent();
            this.reset();
            PlayerMgr.instance.init();
        }
    }

    addEvent() {

    }




    reset() {
        Scene3dMgr.instance.open(Scene3dEnum.MainScene);

    }

    /**开始选择玩家 */
    selectPlayerAndWeapon() {
        Scene3dMgr.instance.open(Scene3dEnum.SelectPlayerScene);
        Scene3dMgr.instance.close(Scene3dEnum.MainScene);
    }

    gameStart() {
        Scene3dMgr.instance.close(Scene3dEnum.SelectPlayerScene);
        Scene3dMgr.instance.close(Scene3dEnum.GameScene);
    }
    gameOver() {

    }
    gameWin() {

    }
    gameLose() {

    }





}