import UIBase from "../UIBase/UIBase";
import Tween from "../Util/Tween";
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
 * @Last Modified time: 2023-03-03 21:49:26
 */
const { regClass, property } = Laya;

/**提示类 */
@regClass()
export default class TipsView extends UIBase {
    @property({ type: Text})
    txtMsg: Text;
    constructor() { super() }

    img: Image;
    onEnable(): void {
        this.img = this.owner as Image;
        this.img.centerX = 0;
        this.img.centerY = 200;
        this.img.alpha
    }

    onOpened(param?: any): void {
        this.txtMsg.text = param;

        Tween.get(this.owner)
            .set({ scaleX: 0.8, scaleY: 0.8, alpha: 1 })
            .to({ scaleX: 1, scaleY: 1 }, 300, Laya.Ease.backOut)
            .to({ centerY: 0, alpha: 0.7 }, 1500)
            .call(this, () => {
                this.close();
            })
            .start();

    }
}