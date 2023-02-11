import ProjectConfig from "../../Config/ProjectConfig";
import LocalizationMgr from "../../Localization/LocalizationMgr";
import LocalizationUrl from "../../Localization/LocalizationUrl";
import UIBase from "../../UIBase/UIBase";
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
 * @Last Modified time: 2023-02-11 16:22:08
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
        this.$selectIndex = ProjectConfig.LanguageList.indexOf(LocalizationMgr.Language);
        console.log(this.$selectIndex);
        this.$listLanguage.array = ProjectConfig.LocalizationLanguageList;
        this.$listLanguage.selectedIndex = this.$selectIndex;
    }

    private changeItem(box: Box, index: number) {
        let labelLanguage = box.getChildByName('labelLanguage') as Label;
        let imgFlag = box.getChildByName("imgFlag") as Image;
        let imgSelect = box.getChildByName("imgSelect") as Image;
        labelLanguage.text = box.dataSource;
        imgFlag.skin = LocalizationUrl.Image[index];
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
            LocalizationMgr.Language = ProjectConfig.LanguageList[index];
            let newBox = this.$listLanguage.getCell(this.$selectIndex) as Box;
            let newSelect = newBox.getChildByName("imgSelect") as Image;
            newSelect.visible = true;
        }
    }


}