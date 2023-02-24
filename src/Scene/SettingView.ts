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
 * @Last Modified time: 2023-02-24 23:35:07
 */
const { regClass, property } = Laya;
/**设置界面 */
@regClass()
export default class SettingView extends UIBase {
    @property()
    imgClose: Image;
    @property()
    sliderSfx: Box;
    @property()
    sliderBgm: Box;
    @property()
    toggleShake: Image;
    @property()
    imgLanguage: Image;
    @property()
    imgLan: Image;
    @property()
    imgSupport: Image;

    @property()
    txtAgreement: Label;

    constructor() { super() }

    private $sliderBgm: Slider;
    private $sliderSfx: Slider;
    private $toggleShake: Toggle;


    onOpened(param?: any): void {
        this.$sliderBgm = this.sliderBgm.getComponent(Slider);
        this.$sliderSfx = this.sliderSfx.getComponent(Slider);
        this.$toggleShake = this.toggleShake.getComponent(Toggle);

        this.$sliderBgm.init(this, this.bgmChange);
        this.$sliderSfx.init(this, this.sfxChange);
        this.$toggleShake.init(this, this.shakeChange);


    }

    addEvent(): void {

        this.regClick(this.imgClose, this.close);
        this.regClick(this.imgSupport, this.getSupport);
        this.regClick(this.imgLanguage, this.changeLanguage);

        this.regClick(this.txtAgreement, this.openPrivacyAgreement);

        this.regEvent(EventEnum.LANGUAGECHANGE, this.changeLanguageIcon, true);
    }

    bgmChange(value: number) {
        SoundMgr.changeMusicVolume(value);
    }
    sfxChange(value: number) {
        SoundMgr.changeSoundVolume(value);
    }
    shakeChange(value: boolean) {
        VibrateMgr.isVibrate = value;
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