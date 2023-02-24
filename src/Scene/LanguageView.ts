import { LanguageEnum } from "../Enum/LanguageEnum";
import LocalizationMgr from "../Localization/LocalizationMgr";
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
/*
 * @Author: NoRain 
 * @Date: 2023-02-11 15:50:45 
 * @Last Modified by: NoRain
 * @Last Modified time: 2023-02-24 23:33:55
 */
const { regClass, property } = Laya;
/**语言面板 */
@regClass()
export default class LanguageView extends UIBase {

    @property()
    $listLanguage: List;
    @property()
    $imgClose: Image;

    $selectIndex: number = 0;
    constructor() { super() }

    onOpened(param?: any): void {
        this.regClick(this.$imgClose, this.close);
        this.$listLanguage.renderHandler = new Handler(this, this.changeItem);
        this.$listLanguage.selectHandler = new Handler(this, this.selectItem);

        let arr = []
        for (let i in LanguageEnum) {
            if (!isNaN(Number(i))) {
                arr.push(Number(i));
            }
        }
        this.$selectIndex = arr.indexOf(LocalizationMgr.Language);
        this.$listLanguage.array = arr;
        this.$listLanguage.selectedIndex = this.$selectIndex;
    }

    private changeItem(box: Box, index: number) {
        let labelLanguage = box.getChildByName('labelLanguage') as Label;
        let imgFlag = box.getChildByName("imgFlag") as Image;
        let imgSelect = box.getChildByName("imgSelect") as Image;
        labelLanguage.text = LocalizationMgr.getLanguageMsgById(box.dataSource);
        imgFlag.skin = ResLoader.instance.getUrlById(LocalizationMgr.getFlagSkinIdById(box.dataSource));
        if (index == this.$selectIndex) {
            imgSelect.visible = true;
        } else {
            imgSelect.visible = false;
        }
    }
    private selectItem(index: number) {
        if (index != this.$selectIndex) {
            let oldBox = this.$listLanguage.getCell(this.$selectIndex) as Box;
            let oldSelect = oldBox.getChildByName("imgSelect") as Image;
            oldSelect.visible = false;
            this.$selectIndex = index;
            LocalizationMgr.Language = this.$listLanguage.array[index];
            let newBox = this.$listLanguage.getCell(this.$selectIndex) as Box;
            let newSelect = newBox.getChildByName("imgSelect") as Image;
            newSelect.visible = true;
        }
    }


}