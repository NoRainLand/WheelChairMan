import ProjectConfig from "../Config/ProjectConfig";
import { EventEnum } from "../Enum/EventEnum";
import { SceneEnum } from "../Enum/SceneEnum";
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
    @property()
    imgClose: Image;
    @property()
    sliderSfx: Slider;
    @property()
    sliderBgm: Slider;
    @property()
    toggleShake: Toggle;
    @property()
    imgLanguage: Image;
    @property()
    imgLan: Image;
    @property()
    imgSupport: Image;

    @property()
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
        UIBaseMgr.instance.open(SceneEnum.PrivacyAgreementView);
    }


    getSupport() {


        Laya.Browser.window.open(ProjectConfig.support);
        console.log('support');
    }
    changeLanguage() {
        UIBaseMgr.instance.open(SceneEnum.LanguageView);
    }

    onClosed(): void {

    }

}