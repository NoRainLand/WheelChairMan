
import ProjectConfig from "./Config/ProjectConfig";
import GameEntry from "./GameEntry";

/*
 * @Author: NoRain 
 * @Date: 2023-02-06 16:41:32 
 * @Last Modified by: NoRain
 * @Last Modified time: 2023-02-06 19:03:36
 */
const { regClass, property } = Laya;

/** 初始化所有游戏逻辑 */
@regClass()
export class Main extends Laya.Script {
    constructor() {
        super();
        if (!this.isInit) {
            this.isInit = true;
            this.__init__();

        }
    }
    /**是否初始化 */
    isInit: boolean = false;


    /**初始化 */
    __init__() {
        console.log(`当前引擎版本:${Laya.LayaEnv.version}, 当前项目名称:${ProjectConfig.projectName},当前项目版本:${ProjectConfig.projectVersion}/${ProjectConfig.projectVersionIndex}`);
        GameEntry.__init__();
    }
}
