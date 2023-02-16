import { DataTableEnum } from "../Enum/DataTableEnum";
import { EventEnum } from "../Enum/EventEnum";
import LocalizationMgr from "../Localization/LocalizationMgr";
import CurrencyMgr from "../Mgr/CurrencyMgr";
import UIBase from "../UIBase/UIBase";
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
 * @Last Modified time: 2023-02-16 21:44:23
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
            this.$shopDataTable = ResLoader.getDataTableById(DataTableEnum.Shop);
        }
        this.$titleSet = new Set();
        this.$shopList = [];
        if (this.$shopDataTable) {
            for (let [key, value] of this.$shopDataTable) {
                this.$titleSet.add(value["localizationKey"]);
                if (value["page"] && this.$shopList[value["page"] - 1]) {
                    this.$shopList[value["page"] - 1].push(value);
                } else {
                    console.log([value]);
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

        let str = LocalizationMgr.getLocalizationByKey(box.dataSource);

        labelUnSelected.text = str;
        labelSelected.text = str;

    }

    selectTitleItem(index: number) {
        this.$titleSelectedIndex = index;
        this.listShop.array = this.$shopList[this.$titleSelectedIndex];
    }

    changeLanguage() {
        this.listTitle.array = ObjUtil.set2List(this.$titleSet);
        this.listTitle.width = this.listTitle.array.length * 328;
        this.listTitle.centerX = 0;
        this.listTitle.selectedIndex = 0;

        this.listShop.array = this.$shopList[this.$titleSelectedIndex];
        this.listShop.selectedIndex = 0;
    }



    changeShopItem(box: Box, index: number) {
        let data = box.dataSource;

        let imgItem = box.getChildByName("imgItem") as Image;
        imgItem.skin = ResLoader.getUrlById(data["imgId"]);
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
        let txtPrice = imgBuy.getChildByName("txtPrice") as Label;
        txtPrice.text = data["price"];
        txtPrice.color = CurrencyMgr.getColorById(data["priceId"])

    }


    buySomething(obj: Object) {
        console.log(obj);


    }






}