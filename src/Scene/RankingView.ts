import { DataTableEnum } from "../Enum/DataTableEnum";
import { RankingEnum } from "../Enum/RankingEnum";
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
 * @Date: 2023-02-14 10:37:38 
 * @Last Modified by: NoRain
 * @Last Modified time: 2023-02-24 23:34:38
 */
const { regClass, property } = Laya;
/**排行榜 */
@regClass()
export default class RankingView extends UIBase {
    @property()
    imgClose: Image;
    @property()
    imgHead: Image;
    @property()
    txtName: Text;
    @property()
    txtLV: Text;
    @property()
    txtRank: Text;
    @property()
    listRanking: List;
    private rankingList = [ //临时数据
        { "head": "", "name": "张三", "rank": 1, "lv": "100", "UID": "12324" },
        { "head": "", "name": "李四", "rank": 2, "lv": "99", "UID": "12324" },
        { "head": "", "name": "王麻子五", "rank": 3, "lv": "80", "UID": "12324" },
        { "head": "", "name": "爱丽丝", "rank": 4, "lv": "77", "UID": "12324" },
        { "head": "", "name": "萨顶顶", "rank": 5, "lv": "76", "UID": "12324" },
        { "head": "", "name": "豆腐仨", "rank": 6, "lv": "75", "UID": "12324" },
        { "head": "", "name": "s'd''j", "rank": 7, "lv": "30", "UID": "12324" },
        { "head": "", "name": "NoRainLand", "rank": 8, "lv": "22", "UID": "654" },
        { "head": "", "name": "开花结果", "rank": 9, "lv": "11", "UID": "12324" },
        { "head": "", "name": "323", "rank": 10, "lv": "2", "UID": "12324" },
    ]

    private $rankingMap: Map<number, Object>;

    constructor() { super() }


    onOpened(param?: any): void {
        let data = this.rankingList.find((value) => { //临时数据
            console.log(value);
            return value.UID == "654"
        })

        if (data) {
            this.txtLV.text = data.lv.toString();
            this.txtName.text = data.name.toString();
            this.txtRank.text = data.rank.toString();
        }
        this.$rankingMap = ResLoader.instance.getDataTableById(DataTableEnum.Ranking);
        // console.log(this.$rankingMap);

    }
    addEvent(): void {
        this.regClick(this.imgClose, this.close);
        this.listRanking.renderHandler = new Handler(this, this.changeItem);

        this.listRanking.array = this.rankingList;

    }
    changeItem(box: Box, index: number) {
        let txtLV = box.getChildByName("txtLV") as Label;
        let txtName = box.getChildByName("txtName") as Label;
        let txtRank = box.getChildByName("txtRank") as Label;
        let data = box.dataSource;
        txtLV.text = "LV" + data.lv.toString();
        txtName.text = data.name.toString();
        txtRank.text = data.rank.toString();
        let imgRank = box.getChildByName("imgRank") as Image;
        switch (data.rank) {
            case 1:
                let data1 = this.$rankingMap.get(RankingEnum.fist)
                txtRank.color = data1["color"];
                imgRank.skin = ResLoader.instance.getUrlById(data1["imgId"]);
                break;
            case 2:
                let data2 = this.$rankingMap.get(RankingEnum.second)
                txtRank.color = data2["color"];
                imgRank.skin = ResLoader.instance.getUrlById(data2["imgId"]);
                break;
            case 3:
                let data3 = this.$rankingMap.get(RankingEnum.third)
                txtRank.color = data3["color"];
                imgRank.skin = ResLoader.instance.getUrlById(data3["imgId"]);
                break;
            default:
                let data4 = this.$rankingMap.get(RankingEnum.default)
                txtRank.color = data4["color"];
                imgRank.skin = ResLoader.instance.getUrlById(data4["imgId"]);

                break;
        }
    }



}