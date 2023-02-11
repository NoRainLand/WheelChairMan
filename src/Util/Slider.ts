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
 * @Last Modified time: 2023-02-11 13:57:08
 */
const { regClass, property } = Laya;
/**滑条 */
@regClass()
export default class Slider extends Laya.Script {

    /**是否为水平 */
    @property()
    isH: boolean = false;
    @property()
    imgLoad: Image;
    @property()
    imgBar: Image;
    @property()
    imgBg: Image;
    /**默认值 */
    @property()
    value: number = 0.7;



    private $caller: any;
    private $callback: Function;

    private $isTouch: boolean = false;

    private $imgMask: Image;



    private $slider: Box;

    private $start: number;

    private $offX: number

    private $offY: number;


    constructor() { super() }

    onAwake(): void {
        this.$isTouch = false;
        this.$slider = this.owner as Box;
        this.$imgMask = this.imgLoad.mask as Image;
        this.$offX = this.imgLoad.width * this.value;
        this.$offY = this.imgLoad.height * this.value;
        this.changeMask();
    }

    onMouseDown(evt: Laya.Event): void {
        if (evt.target == this.imgBar) {
            this.$isTouch = true;

            if (this.isH) {
                this.$start = Laya.stage.mouseX;
            } else {
                this.$start = Laya.stage.mouseY;
            }
        }
    }

    onMouseMove(evt: Laya.Event): void {
        if (evt.target == this.imgBar && this.$isTouch) {
            if (this.isH) {
                this.$offX += Laya.stage.mouseX - this.$start;
                this.$offX = this.$offX > this.imgLoad.width ? this.imgLoad.width : this.$offX;
                this.$offX = this.$offX < 0 ? 0 : this.$offX;
                this.value = this.$offX / this.imgLoad.width;
                this.$start = Laya.stage.mouseX;
            } else {
                this.$offY += Laya.stage.mouseY - this.$start;
                this.$offY = this.$offY > this.imgLoad.height ? this.imgLoad.height : this.$offY;
                this.$offY = this.$offY < 0 ? 0 : this.$offY;
                this.value = this.$offX / this.imgLoad.height;
                this.$start = Laya.stage.mouseY;
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


    /**初始化 */
    init(caller: any, callback: Function) {
        this.$caller = caller;
        this.$callback = callback;
    }

    private changeMask() {
        if (this.isH) {
            this.$imgMask.width = this.imgLoad.width * this.value;
            this.imgBar.x = this.imgLoad.width * this.value+this.imgBg.x;
        } else {
            this.$imgMask.height = this.imgLoad.height * this.value;
            this.imgBar.y = this.imgLoad.height * this.value +this.imgBg.y;
        }
    }

    private valueChange() {
        this.changeMask();
        if (this.$caller && this.$callback) {
            this.$callback.call(this.$caller, this.value);
        }
    }


    onDisable(): void {

    }

}