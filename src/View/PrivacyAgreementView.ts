import { AgreementEnum } from "../Enum/AgreementEnum";
import UIBase from "../UIBase/UIBase";
import ResLoader from "../Util/ResLoader";
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
import Panel = Laya.Panel;
/*
 * @Author: NoRain 
 * @Date: 2023-02-14 10:37:38 
 * @Last Modified by: NoRain
 * @Last Modified time: 2023-02-24 23:34:37
 */
const { regClass, property } = Laya;
/**隐私协议界面 */
@regClass()
export default class PrivacyAgreementView extends UIBase {

    @property({ type: Image})
    imgSure: Image;
    @property({ type: Image})
    imgCancel: Image;
    @property({ type: Panel})
    panel: Panel;
    @property({ type: Label})
    txtAgreement: Label;


    constructor() { super() }

    onOpened(param?: any): void {
        this.regClick(this.imgSure, this.sure);
        this.regClick(this.imgCancel, this.cancel);

        let data = ResLoader.instance.getResById(AgreementEnum.PrivacyAgreement);
        this.txtAgreement.text = data.data;

        this.txtAgreement.height = data.data.length / 0.9;

    }

    sure() {
        this.close();
    }
    cancel() {
        this.close();

    }
}