import UIBase from "../UIBase/UIBase";

/*
 * @Author: NoRain 
 * @Date: 2023-02-07 18:06:44 
 * @Last Modified by: NoRain
 * @Last Modified time: 2023-02-09 16:35:14
 */
const { regClass, property } = Laya;
import Image = Laya.Image;
import Label = Laya.Label;
@regClass()
export default class LoadView extends UIBase {

    @property()
    imgLoad: Image;
    @property()
    labelLoad: Label;

    imgMask: Image;

    constructor() {
        super();
    }
    onOpened(param: any): void {
        this.imgMask = this.imgLoad.mask as Image;
        
    }



}