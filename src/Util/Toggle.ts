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
 * @Date: 2023-02-11 13:59:39 
 * @Last Modified by: NoRain
 * @Last Modified time: 2023-02-11 14:31:26
 */
const { regClass, property } = Laya;
/**开关 */
@regClass()
export default class Toggle extends Laya.Script {

    private $imgBg: Image;

    @property()
    isON: boolean = false;
    @property()
    imgItem: Image;

    private $caller: any;
    private $callback: Function;

    constructor() { super() }



    onEnable(): void {
        this.$imgBg = this.owner as Image;
        this.$imgBg.on(Laya.Event.CLICK, this, this.changeValue);
        this.changeItem();
    }

    init(caller: any, callback: Function, isON?: boolean) {
        if (isON != void 0) {
            this.isON = isON;
        }
        this.$caller = caller;
        this.$callback = callback
    }

    private changeItem() {
        if (this.isON) {
            this.imgItem.x = 85;
            this.imgItem.gray = false;
        } else {
            this.imgItem.x = 5;
            this.imgItem.gray = true;
        }
    }
    private changeValue() {
        this.isON = !this.isON;
        this.changeItem();
        if (this.$caller && this.$callback) {
            this.$callback.call(this.$caller, this.isON);
        }
    }
    onDisable(): void {
        this.$imgBg.off(Laya.Event.CLICK, this, this.changeValue);
    }

}