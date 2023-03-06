import Tween from "./Tween";
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
 * @Date: 2023-03-06 10:56:33 
 * @Last Modified by: NoRain
 * @Last Modified time: 2023-03-06 11:49:47
 */
const { regClass, property } = Laya;
/**换弹提示 */
@regClass()
export default class ReloadTips extends Laya.Script {
    @property()
    imgLoad: Image;
    @property()
    Main: Sprite;



    $width: number;

    constructor() { super() }
    onEnable(): void {
        this.Main.visible = false;
        this.$width = this.imgLoad.width;
    }

    showTips(time: number) {
        this.imgLoad.width = 0;
        this.Main.visible = true;

        Tween.get(this.imgLoad)
            .to({ width: this.$width }, time)
            .call(this, () => {
                this.Main.visible = false;
            })
            .start();
    }
}