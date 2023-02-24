import GameData from "../Data/GameData";
import { CurrencyEnum } from "../Enum/CurrencyEnum";
import { DataTableEnum } from "../Enum/DataTableEnum";
import { EventEnum } from "../Enum/EventEnum";
import { LocalizationEnum } from "../Enum/LocalizationEnum";
import LocalizationMgr from "../Localization/LocalizationMgr";
import CurrencyMgr from "../Mgr/CurrencyMgr";
import UIBase from "../UIBase/UIBase";
import UIBaseMgr from "../UIBase/UIBaseMgr";
import ObjUtil from "../Util/ObjUtil";
import ResLoader from "../Util/ResLoader";
import StringUtil from "../Util/StringUtil";
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
 * @Date: 2023-02-14 10:37:38 
 * @Last Modified by: NoRain
 * @Last Modified time: 2023-02-24 23:35:08
 */
const { regClass, property } = Laya;
/**商城界面 */
@regClass()
export default class ShopView extends UIBase {
    @property()
    imgClose: Image;
    @property()
    listTitle: List;
    @property()
    listShop: List;

    private $shopDataTable: Map<number, Object>;


    private $titleSet: Set<number>;


    private $titleSelectedIndex: number = 0;


    private $shopList;


    constructor() { super() }

    onOpened(param?: any): void {
        if (!this.$shopDataTable) {
            this.$shopDataTable = ResLoader.instance.getDataTableById(DataTableEnum.Shop);
        }
        this.$titleSet = new Set();
        this.$shopList = [];
        if (this.$shopDataTable) {
            for (let [key, value] of this.$shopDataTable) {
                this.$titleSet.add(value["localizationKey"]);
                if (value["page"] && this.$shopList[value["page"] - 1]) {
                    this.$shopList[value["page"] - 1].push(value);
                } else {
                    this.$shopList[value["page"] - 1] = [value];
                }

            }
        }

    }

    addEvent(): void {
        this.regClick(this.imgClose, this.close);
        this.listTitle.renderHandler = new Handler(this, this.changeTitleItem);
        this.listTitle.selectHandler = new Handler(this, this.selectTitleItem);
        this.listShop.renderHandler = new Handler(this, this.changeShopItem);
        // this.listShop.selectHandler = new Handler(this, this.selectShopItem);



        this.regEvent(EventEnum.LANGUAGECHANGE, this.changeLanguage, true);
    }

    changeTitleItem(box: Box, index: number) {
        let imgUnSelected = box.getChildByName("imgUnSelected") as Image;
        let labelUnSelected = imgUnSelected.getChildByName("labelUnSelected") as Label;
        let imgSelected = box.getChildByName("imgSelected") as Image;
        let labelSelected = imgSelected.getChildByName("labelSelected") as Label;

        let show = index == this.listTitle.selectedIndex;
        imgSelected.visible = show;
        imgUnSelected.visible = !show;

        let str = LocalizationMgr.$getLocalizationByKey(box.dataSource);

        labelUnSelected.text = str;
        labelSelected.text = str;

    }

    selectTitleItem(index: number) {
        this.$titleSelectedIndex = index;
        this.listShop.array = this.$shopList[this.$titleSelectedIndex];
    }

    changeLanguage() {
        let index = 0;
        switch (this.$param) {
            case CurrencyEnum.gold:
                index = 0;
                break;
            case CurrencyEnum.diamond:
                index = 1;
                break;
        }
        this.listTitle.array = ObjUtil.set2List(this.$titleSet);
        this.listTitle.width = this.listTitle.array.length * 328;
        this.listTitle.centerX = 0;
        this.listTitle.selectedIndex = index;

        this.listShop.array = this.$shopList[this.$titleSelectedIndex];
        this.listShop.selectedIndex = index;
    }



    changeShopItem(box: Box, index: number) {
        let data = box.dataSource;

        let imgItem = box.getChildByName("imgItem") as Image;
        imgItem.skin = ResLoader.instance.getUrlById(data["imgId"]);
        imgItem.height = imgItem.source.sourceHeight;
        imgItem.width = imgItem.source.sourceWidth;
        let imgBest = box.getChildByName("imgBest") as Image;
        imgBest.visible = !!data["isBest"];
        let imgHot = box.getChildByName("imgHot") as Image;
        imgHot.visible = !!data["isHot"];
        let labelNum = box.getChildByName("labelNum") as Label;
        labelNum.text = data["number"];
        labelNum.color = CurrencyMgr.getColorById(data["shopId"]);
        let bonus = data["bonus"];
        if (bonus) {
            let labelBonus = box.getChildByName("labelBonus") as Label;
            labelBonus.text = "+" + StringUtil.num2percentage(data["bonus"], 0);
        }
        let imgBuy = box.getChildByName("imgBuy") as Image;
        imgBuy.offAll();
        imgBuy.on(Laya.Event.CLICK, this, () => {
            this.buySomething(data);
        })
        let imgCurrency = imgBuy.getChildByName("imgCurrency") as Image;
        imgCurrency.skin = CurrencyMgr.getImgUrlById(data['priceId']);
        imgCurrency.height = imgCurrency.source.sourceHeight;
        imgCurrency.width = imgCurrency.source.sourceWidth;
        let txtPrice = imgBuy.getChildByName("txtPrice") as Label;
        txtPrice.text = data["price"].toFixed(2);
        txtPrice.color = CurrencyMgr.getColorById(data["priceId"])

    }


    buySomething(obj: Object) {
        console.log(obj);

        switch (obj["priceId"]) {
            case CurrencyEnum.gold:

                break;
            case CurrencyEnum.diamond:
                if (GameData.diamond >= obj["price"]) {
                    GameData.diamond -= obj["price"];
                    this.getSomething(obj);
                } else {
                    UIBaseMgr.instance.showTips(LocalizationMgr.getLocalizationByEnum(LocalizationEnum.YOUDONTHAVEENOUGHDIAMONDS, LocalizationEnum.DIAMOND));
                }
                break;
            case CurrencyEnum.key:

                break;
            case CurrencyEnum.dollar:
                UIBaseMgr.instance.showTips(LocalizationMgr.getLocalizationByEnum(LocalizationEnum.NOTYETIMPLEMENTED));

                break;
        }
    }


    getSomething(obj: Object) {
        switch (obj["shopId"]) {
            case CurrencyEnum.gold:
                GameData.gold += obj["number"];
                UIBaseMgr.instance.showTips(LocalizationMgr.getLocalizationByEnum(LocalizationEnum.CONGRATULATIONSONGETTING, obj["number"], LocalizationEnum.GOLD));
                break;
            case CurrencyEnum.diamond:
                GameData.diamond += obj["number"];
                UIBaseMgr.instance.showTips(LocalizationMgr.getLocalizationByEnum(LocalizationEnum.CONGRATULATIONSONGETTING, obj["number"], LocalizationEnum.DIAMOND));
                break;
            case CurrencyEnum.key:
                GameData.key += obj["number"];
                // UIBaseMgr.showTips(LocalizationMgr.getLocalizationByKey(LocalizationKeyEnum.CONGRATULATIONSONGETTING,obj["number"],LocalizationKeyEnum.DIAMOND));
                break;
        }
    }






}