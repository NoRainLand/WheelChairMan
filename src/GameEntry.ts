
import ProjectConfig from "./Config/ProjectConfig";
import UIBaseMgr from "./UIBase/UIBaseMgr";
import PrefabImpl = Laya.PrefabImpl;
import Text = Laya.Text;
import Box = Laya.Box;
import Scene = Laya.Scene;
import Label = Laya.Label;
import Image = Laya.Image;
import TextInput = Laya.TextInput;
import Sprite = Laya.Sprite;
/*
 * @Author: NoRain 
 * @Date: 2023-02-06 16:41:32 
 * @Last Modified by: NoRain
 * @Last Modified time: 2023-02-20 19:35:32
 */
const { regClass, property } = Laya;

/**游戏总入口 */
@regClass()
export class GameEntry extends Laya.Script {
    /**是否初始化 */
    isInit: boolean = false;

    /**游戏UI层级 */
    UIBase: Box;

    /**根节点 */
    GameEntry: Scene;
    constructor() { super(); }

    onAwake(): void {
        if (!this.isInit) {
            this.isInit = true;
            this.init();
        }
    }



    /**初始化 */
    init() {
        console.log(`当前引擎版本:${Laya.LayaEnv.version}, 当前项目名称:${ProjectConfig.projectName},当前项目版本:${ProjectConfig.projectVersion}/${ProjectConfig.projectVersionIndex}`);

        this.GameEntry = this.owner as Scene;
        this.UIBase = this.GameEntry.getChildByName("UIBase") as Box;
        UIBaseMgr.init(this.UIBase);
        UIBaseMgr.openLoadView();
    }
}
