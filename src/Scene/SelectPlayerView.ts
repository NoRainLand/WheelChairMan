import { PlayerEnum } from "../Enum/PlayerEnum";
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
 * @Date: 2023-02-24 20:04:35 
 * @Last Modified by: NoRain
 * @Last Modified time: 2023-02-24 23:34:39
 */
const { regClass, property } = Laya;
/**选择玩家界面 */
@regClass()
export default class SelectPlayerView extends UIBase {
    @property()
    imgBack: Image;
    @property()
    imgNext: Image;
    @property()
    imgPrev: Image;
    @property()
    spriteHead: Sprite;
    @property()
    imgLock: Image;
    @property()
    imgSelect: Image;

    private $viewIndex: number = 0;

    private $playerMap: Map<number, Object>;
    private $weaponMap: Map<number, Object>;

    constructor() { super() }

    onOpened(param?: any): void {
        this.$viewIndex = 0;
        // this.$playerMap = 
    }

    addEvent(): void {
        this.regClick(this.imgBack, this.goBack);
        this.regClick(this.imgNext, this.nextItem);
        this.regClick(this.imgPrev, this.prevItem);
    }


    goBack() {
        console.log(ResLoader.instance.getResById(PlayerEnum.BusinessMan));
    }

    nextItem() {

    }

    prevItem() {

    }


}