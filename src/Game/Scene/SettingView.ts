import UIBase from "../../UIBase/UIBase";
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
 * @Date: 2023-02-10 18:36:22 
 * @Last Modified by: NoRain
 * @Last Modified time: 2023-02-10 20:53:54
 */
const { regClass, property } = Laya;
/**设置界面 */
@regClass()
export default class SettingView extends UIBase {
    @property()
    imgClose:Image;
    @property()
    sfxSlider:Box;
    @property()
    bgmSlider:Box;
    @property()
    imgToggle:Image;
    @property()
    imgItem:Image;
    @property()
    imgLanguage:Image;
    @property()
    imgLan:Image;
    @property()
    imgSupport:Image;
    constructor() { super() }

    onOpened(param?: any): void {
        this.regClick(this.imgClose,this.close);
    }


    onClosed(): void {
        
    }

}