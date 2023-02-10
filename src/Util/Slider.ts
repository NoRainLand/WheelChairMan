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
 * @Date: 2023-02-10 18:48:21 
 * @Last Modified by: NoRain
 * @Last Modified time: 2023-02-10 20:41:22
 */
const { regClass, property } = Laya;
/**滑条 */
@regClass()
export default class Slider extends Laya.Script {

    /**是否为水平 */
    @property()
    isH: boolean = false;
    @property()
    imgBg: Image;
    @property()
    imgLoad: Image;
    @property()
    imgBar: Image;
    /**默认值 */
    @property()
    value: number = 0.7;



    private $caller: any;
    private $callback: Function;

    private $isTouch: boolean = false;

    private $imgMask: Image;

    private $start: number;
    private $end: number;

    private $slider: Box;


    constructor() { super() }

    onAwake(): void {
        this.$isTouch = false;
        this.$slider = this.owner as Box;
        if (this.isH) {
            this.imgBar.x = this.imgBg.width * this.value;
            this.$start = this.imgBg.x + this.$slider.x;
            this.$end = this.imgBg.x + this.imgBg.width + this.$slider.x;
        } else {
            this.imgBar.top = this.imgBg.height * this.value;
            this.$start = this.imgBg.y + this.$slider.y;
            this.$end = this.imgBg.y + this.imgBg.height + this.$slider.y;
        }
        this.$imgMask = this.imgLoad.mask as Image;
        this.changeMask();

    }

    onMouseDown(evt: Laya.Event): void {
        if (evt.target == this.imgBg) {
            this.$isTouch = true;
        }
    }

    onMouseMove(evt: Laya.Event): void {
        if (evt.target == this.imgBg && this.$isTouch) {
            if (this.isH) {
                let offx = Laya.stage.mouseX - this.imgBg.x - this.$slider.x;
                offx = offx > this.imgBg.width ? this.imgBg.width : offx;
                offx = offx < 0 ? 0 : offx;
                this.value = offx / this.imgBg.width;
            } else {
                let offy = Laya.stage.mouseY - this.imgBg.y - this.$slider.y;
                offy = offy > this.imgBg.height ? this.imgBg.height : offy;
                offy = offy < 0 ? 0 : offy;
                this.value = offy / this.imgBg.height;
            }
            this.valueChange();
        }
    }

    onMouseUp(evt: Laya.Event): void {
        this.$isTouch = false;
    }
    onMouseOver(evt: Laya.Event): void {
        this.$isTouch = false;
    }
    onMouseOut(evt: Laya.Event): void {
        this.$isTouch = false;
    }

    init(caller: any, callback: Function) {
        this.$caller = caller;
        this.$callback = callback;
    }

    changeMask() {
        if (this.isH) {
            this.$imgMask.width = this.imgBg.width * this.value;
            this.imgBar.x = this.imgBg.width * this.value;
        } else {
            this.$imgMask.height = this.imgBg.height * this.value;
            this.imgBar.y = this.imgBg.height * this.value;
        }
    }

    valueChange() {
        this.changeMask();
        if (this.$caller && this.$callback) {
            this.$callback.call(this.$caller, this.value);
        }
    }


    onDisable(): void {

    }

}