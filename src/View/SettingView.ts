import ProjectConfig from "../Config/ProjectConfig";
import { EventEnum } from "../Enum/EventEnum";
import { ViewEnum } from "../Enum/ViewEnum";
import LocalizationMgr from "../Localization/LocalizationMgr";
import SoundMgr from "../Mgr/SoundMgr";
import VibrateMgr from "../Mgr/VibrateMgr";
import UIBase from "../UIBase/UIBase";
import UIBaseMgr from "../UIBase/UIBaseMgr";
import ResLoader from "../Util/ResLoader";
import Slider from "../Util/Slider";
import Toggle from "../Util/Toggle";
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
 * @Date: 2023-02-10 18:36:22 
 * @Last Modified by: NoRain
 * @Last Modified time: 2023-03-08 16:05:24
 */
const { regClass, property } = Laya;
/**设置界面 */
@regClass()
export default class SettingView extends UIBase {
    @property({ type: Image})
    imgClose: Image;
    @property({ type: Slider})
    sliderSfx: Slider;
    @property({ type: Slider})
    sliderBgm: Slider;
    @property({ type: Toggle})
    toggleShake: Toggle;
    @property({ type: Image})
    imgLanguage: Image;
    @property({ type: Image})
    imgLan: Image;
    @property({ type: Image})
    imgSupport: Image;

    @property({ type: Label})
    txtAgreement: Label;

    constructor() { super() }



    onOpened(param?: any): void {


        this.sliderBgm.init(this, this.bgmChange, SoundMgr.instance.MusicVolume);
        this.sliderSfx.init(this, this.sfxChange, SoundMgr.instance.SoundVolume);
        this.toggleShake.init(this, this.shakeChange, VibrateMgr.isVibrate);


    }

    addEvent(): void {

        this.regClick(this.imgClose, this.close);
        this.regClick(this.imgSupport, this.getSupport);
        this.regClick(this.imgLanguage, this.changeLanguage);

        this.regClick(this.txtAgreement, this.openPrivacyAgreement);

        this.regEvent(EventEnum.LANGUAGECHANGE, this.changeLanguageIcon, true);
    }

    bgmChange(value: number) {
        SoundMgr.instance.MusicVolume = value;
    }
    sfxChange(value: number) {
        SoundMgr.instance.SoundVolume = value;
    }
    shakeChange(value: boolean) {
        VibrateMgr.isVibrate = value;
        if (value) {
            VibrateMgr.vibrateShort();
        }

    }
    changeLanguageIcon() {
        this.imgLan.skin = ResLoader.instance.getUrlById(LocalizationMgr.getFlagSkinIdById(LocalizationMgr.Language));
    }
    openPrivacyAgreement() {
        UIBaseMgr.instance.open(ViewEnum.PrivacyAgreementView);
    }


    getSupport() {


        Laya.Browser.window.open(ProjectConfig.support);
        console.log('support');
    }
    changeLanguage() {
        UIBaseMgr.instance.open(ViewEnum.LanguageView);
    }

    onClosed(): void {

    }

}