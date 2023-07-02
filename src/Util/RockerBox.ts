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
import Button = Laya.Button;
import Point = Laya.Point;
/*
 * @Author: NoRain 
 * @Date: 2023-02-27 20:36:12 
 * @Last Modified by: NoRain
 * @Last Modified time: 2023-03-12 19:35:18
 */
const { regClass, property } = Laya;
/**摇杆 */
@regClass()
export default class RockerBox extends Laya.Script {
    @property({ type: Button})
    freeBar: Button;
    @property({ type: Number})
    dropLen: number = 110;

    private touchId: number = -1;
    private rockerBox: Box;
    private rockerIsDown: boolean;

    private initBarX: number;
    private initBarY: number;


    private mouseDownX: number;
    private mouseDownY: number;

    private mousePoint: Point;


    /**欧拉角
    *       ±180°
    *         |
    * 90° ----+---- -90°
    *         |
    *         0
    */
    rockerAngle: number = 0;
    /**幅度 */
    rockerValue: number = 0;


    private caller: any;
    private FstartMove: Function;
    private FstopMove: Function;



    constructor() { super() };

    onEnable(): void {
        this.rockerBox = this.owner as Box;
        this.touchId = -1;
        this.rockerIsDown = false;
        this.freeBar.selected = false;
        this.rockerBox.alpha = 0.2;


        this.initBarX = this.freeBar.x;
        this.initBarY = this.freeBar.y;
        this.mousePoint = new Point(0, 0);

        this.freeBar.on(Laya.Event.MOUSE_DOWN, this, this.rockerDown);
        Laya.stage.on(Laya.Event.MOUSE_MOVE, this, this.rockerMove);
        Laya.stage.on(Laya.Event.MOUSE_UP, this, this.rockerUp);
    }

    rockerDown(evt: Laya.Event): void {
        if (this.touchId != -1) return;
        evt.stopPropagation();
        this.touchId = evt.touchId;
        this.rockerIsDown = true;
        this.freeBar.selected = true;

        this.mouseDownX = this.rockerBox.mouseX;
        this.mouseDownY = this.rockerBox.mouseY;

        this.rockerBox.alpha = 0.8;
    }

    rockerMove(evt: Laya.Event): void {
        if (!this.rockerIsDown) return;
        if (evt.touchId != this.touchId) return;
        evt.stopPropagation();
        this.mousePoint.x = Math.round(evt.touchPos.x / Laya.stage.clientScaleX);
        this.mousePoint.y = Math.round(evt.touchPos.y / Laya.stage.clientScaleY);
        this.rockerBox.globalToLocal(this.mousePoint, false);
        let mouseX = this.mousePoint.x;
        let mouseY = this.mousePoint.y;

        let offX = mouseX - this.mouseDownX;
        let offY = mouseY - this.mouseDownY;
        this.rockerAngle = Math.atan2(offX, offY) * 180 / Math.PI;
        let dis = Math.sqrt((this.mouseDownX - mouseX) * (this.mouseDownX - mouseX) + (this.mouseDownY - mouseY) * (this.mouseDownY - mouseY));
        dis = dis < 0 ? -dis : dis;
        if (dis < this.dropLen) {
            this.freeBar.x = this.initBarX + offX;
            this.freeBar.y = this.initBarY + offY;
            this.rockerValue = dis / this.dropLen;
        } else {
            let radians: number = Math.PI / 180 * this.rockerAngle;
            let x: number = Math.floor(Math.sin(radians) * this.dropLen + this.initBarX);
            let y: number = Math.floor(Math.cos(radians) * this.dropLen + this.initBarY);
            this.freeBar.x = x;
            this.freeBar.y = y;
            this.rockerValue = 1;
        }

        this.startMove();
    }

    rockerUp(evt: Laya.Event): void {
        if (this.touchId == evt.touchId) {
            this.touchId = -1;
            this.rockerIsDown = false;
            this.freeBar.x = this.initBarX;
            this.freeBar.y = this.initBarY;
            this.freeBar.selected = false;
            this.stopMove();
            this.rockerBox.alpha = 0.2;
        }
    }

    /**初始化目标 */
    initTarget(caller: any, startMove: Function, stopMove: Function) {
        this.caller = caller;
        this.FstartMove = startMove
        this.FstopMove = stopMove;
    }

    /**开始移动 */
    startMove() {
        this.FstartMove && this.caller && this.FstartMove.apply(this.caller, [this.rockerAngle, this.rockerValue]);
    }
    /**停止移动 */
    stopMove() {
        this.FstopMove && this.caller && this.FstopMove.call(this.caller);
    }

    onDisable(): void {
        this.freeBar.off(Laya.Event.MOUSE_DOWN, this, this.rockerDown);
        Laya.stage.off(Laya.Event.MOUSE_MOVE, this, this.rockerMove);
        Laya.stage.off(Laya.Event.MOUSE_UP, this, this.rockerUp);
        this.caller = null;
        this.FstartMove = null;
        this.FstopMove = null;
    }


}