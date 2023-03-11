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
/*
 * @Author: NoRain 
 * @Date: 2023-02-10 13:35:20 
 * @Last Modified by: NoRain
 * @Last Modified time: 2023-02-13 19:17:39
 */
const { regClass, property } = Laya;
/**确认取消面板 */
@regClass()
export default class SureView extends UIBase {
    @property()
    imgSure: Image;
    @property()
    imgCancel: Image;
    @property()
    txtTitle: Label;
    @property()
    txtMsg: Label;

    caller: any;
    sureCallback: Function;
    cancelCallback: Function;


    constructor() { super() }



    onOpened(param: any): void {
        this.regClick(this.imgSure, this.sureClick);
        this.regClick(this.imgCancel, this.cancelClick);
        // let data = { title: title, msg: msg, caller: caller, sureCallback: sureCallback, cancelCallBack: cancelCallBack };
        this.txtTitle.text = param.title;
        this.txtMsg.text = param.msg;
        this.caller = param.caller;
        this.sureCallback = param.sureCallback;
        this.cancelCallback = param.cancelCallBack;

        if (!this.cancelCallback) {
            this.imgSure.centerX = 0;
            this.imgSure.visible = true;
        } else {
            this.imgSure.centerX = 180;
            this.imgSure.visible = true;
            this.imgCancel.visible = true;
        }

    }

    sureClick() {
        if (this.caller && this.sureCallback) {
            this.sureCallback.call(this.caller);
        }
        this.close();
    }
    cancelClick() {
        if (this.caller && this.cancelCallback) {
            this.cancelCallback.call(this.caller);
        }
        this.close();
    }

    onClosed(): void {
        this.caller = null;
        this.sureCallback = null;
        this.cancelCallback = null;
        this.imgSure.visible = false;
        this.imgCancel.visible = false;
        this.imgSure.centerX = 180;
    }

}