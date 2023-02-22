import { EventEnum } from "../Enum/EventEnum";
import EventMgr from "../Mgr/EventMgr";
import LocalizationMgr from "./LocalizationMgr";
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
 * @Date: 2023-02-09 16:11:40 
 * @Last Modified by: NoRain
 * @Last Modified time: 2023-02-10 15:00:13
 */
const { regClass, property } = Laya;
/**本地化文本 */
@regClass()
export default class LocalizationText extends Laya.Script {
    @property()
    localizationKey: string;

    constructor() {
        super();
    }
    /**文本框 */
    private text: Laya.Text;

    onEnable(): void {
        if (this.owner instanceof Text || this.owner instanceof Label) {
            this.text = this.owner as Text;
            EventMgr.on(EventEnum.LANGUAGECHANGE, this, this.changeLanguage);
            this.changeLanguage();
        }
    }
    changeLanguage() {
        if (this.localizationKey) {
            let value = LocalizationMgr.$getLocalizationByKey(this.localizationKey);
            if (value) {
                this.text.text = value;
            }
        }
    }
    onDisable(): void {
        EventMgr.offAllCaller(this);
    }
}