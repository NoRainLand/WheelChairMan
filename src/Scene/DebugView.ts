import GameData from "../Data/GameData";
import { EventEnum } from "../Enum/EventEnum";
import EventMgr from "../Mgr/EventMgr";
import UIBase from "../UIBase/UIBase";
import PrefabImpl = Laya.PrefabImpl;
import Text = Laya.Text;
import Box = Laya.Box;
import Scene = Laya.Scene;
import Label = Laya.Label;
import Image = Laya.Image;
import TextInput = Laya.TextInput;
import Sprite = Laya.Sprite;
import List = Laya.List;
import Handler = Laya.Handler;
/*
 * @Author: NoRain 
 * @Date: 2023-02-09 20:09:59 
 * @Last Modified by: NoRain
 * @Last Modified time: 2023-02-18 10:16:13
 */
const { regClass, property } = Laya;
/**调试界面 */
@regClass()
export class DebugView extends UIBase {

    @property()
    imgShow: Image;
    @property()
    MainPanel: Box;
    @property()
    listCommand: List;

    constructor() {
        super();
    }

    commandList =
        [
            "添加5000金币",
            "添加5000钻石",
            "重置签到",
            "游戏立刻胜利(必须先开始游戏)",
            "游戏立刻失败(必须先开始游戏)",
            "锁定额外皮肤",
        ]

    onOpened(param: any): void {
        this.regClick(this.imgShow, this.showHidePanel);
        this.listCommand.renderHandler = new Handler(this, this.changeItem);
        this.listCommand.selectHandler = new Handler(this, this.selectItem);
        this.listCommand.array = this.commandList;

    }

    showHidePanel() {
        this.MainPanel.visible = !this.MainPanel.visible;
    }

    changeItem(box: Box, index: number) {
        let Label = box.getChildByName("Label") as Label;
        Label.text = box.dataSource;
    }

    selectItem(index: number) {
        switch (index) {
            case 0:
                GameData.gold += 5000;
                EventMgr.event(EventEnum.GOLDCHANGE);
                break;
            case 1:
                GameData.diamond += 5000;
                EventMgr.event(EventEnum.DIAMONDCHANGE);
                break;
            case 2:
                break;
            case 3:
                break;
            case 4:
                break;
        }
        this.listCommand.selectedIndex = -1;
    }




}