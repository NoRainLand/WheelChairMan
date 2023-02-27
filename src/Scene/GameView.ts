import UIBase from "../UIBase/UIBase";
import RockerBox from "../Util/RockerBox";
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
 * @Date: 2023-02-14 10:37:38 
 * @Last Modified by: NoRain
 * @Last Modified time: 2023-02-27 20:24:24
 */
const { regClass, property } = Laya;
/**游戏界面 */
@regClass()
export default class GameView extends UIBase {
    @property()
    listHealth: List;
    @property()
    rocketBoxL: RockerBox;
    @property()
    rocketBoxR: RockerBox;


    constructor() { super() }
    onOpened(param?: any): void {
        
    }
    onClosed(): void {

    }


}