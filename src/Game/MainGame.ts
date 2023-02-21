import { DataTableEnum } from "../Enum/DataTableEnum";
import { Scene3dEnum } from "../Enum/Scene3dEnum";
import ResLoader from "../Util/ResLoader";

/*
 * @Author: NoRain 
 * @Date: 2023-02-20 15:26:58 
 * @Last Modified by: NoRain
 * @Last Modified time: 2023-02-21 11:30:10
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
            this.$scene3dMap = ResLoader.getDataTableById(DataTableEnum.Scene3d);
            this.addEvent();
            this.reset();
        }
    }

    addEvent() {

    }




    reset() {
        Laya.Scene.open(ResLoader.getUrlById(this.$scene3dMap.get(Scene3dEnum.MainScene)["path"]), false);
    }

    gameStart() {

    }
    gameOver() {

    }
    gameWin() {

    }
    gameLose() {

    }





}