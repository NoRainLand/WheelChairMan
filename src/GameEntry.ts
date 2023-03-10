
import ProjectConfig from "./Config/ProjectConfig";
import DataTable from "./DataTable/DataTable";
import PlatformMgr from "./Platform/PlatformMgr";
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
 * @Last Modified time: 2023-03-13 18:15:03
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
        // Laya.Shader3D.PERIOD_MATERIAL
        this.GameEntry = this.owner as Scene;
        this.UIBase = this.GameEntry.getChildByName("UIBase") as Box;
        PlatformMgr.instance.init();
        LayaZip?.Init();
        DataTable.Init();
        console.log(LayaZip?.Version);
        UIBaseMgr.instance.init(this.UIBase);
        UIBaseMgr.instance.openLoadView();
    }
}
