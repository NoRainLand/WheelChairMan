import UIBase from "../UIBase/UIBase";
import Timer from "../Util/Timer";
import PrefabImpl = Laya.PrefabImpl;
import Text = Laya.Text;
import Box = Laya.Box;
import Scene = Laya.Scene;
import Label = Laya.Label;
import Image = Laya.Image;
import TextInput = Laya.TextInput;
import Sprite = Laya.Sprite;
import List = Laya.List;
/*
 * @Author: NoRain 
 * @Date: 2023-02-10 16:29:21 
 * @Last Modified by: NoRain
 * @Last Modified time: 2023-02-10 16:46:22
 */
const { regClass, property } = Laya;

/**提示类 */
@regClass()
export default class TipsView extends UIBase {
    @property()
    txtMsg: Text;
    constructor() { super() }

    onEnable(): void {
        let img = this.owner as Image;
        img.centerX = 0;
        img.centerY = 200;
    }

    onOpened(param?: any): void {
        this.txtMsg.text = param;
        Timer.get(1500, this, () => {
            this.close();
        }).once().start();
    }
}