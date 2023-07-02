import { EventEnum } from "../Enum/EventEnum";
import EventMgr from "../Mgr/EventMgr";
import Tween from "../Util/Tween";
import UIBaseMgr from "./UIBaseMgr";
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
import Node = Laya.Node;

/*
 * @Author: NoRain 
 * @Date: 2023-02-08 10:03:24 
 * @Last Modified by: NoRain
 * @Last Modified time: 2023-03-08 16:01:23
 */
const { regClass, property } = Laya;

/**页面基类 */
@regClass()
export default class UIBase extends Laya.Script {


    /**深度 默认为2
     * 0 调试界面
     * 1 提示界面
     * 2 主界面
     * 3 3D界面
     */
    @property({ type: Number})
    depth: number = 2;


    /**是否只能同时存在一个 */
    @property({ type: Boolean})
    readonly isSingleton: boolean = true;

    /**传入数据 */
    $param: any = null;


    /**是否开启 */
    isOpen: boolean = false;

    /**事件 */
    $event: Map<string, Function>;

    /**资源的唯一ID */
    $assetsId: number;

    constructor() {
        super();
    }
    /**是开启特效
     * 0 空
     * 1 弹出
     * 2 左切入
     * 3 右切入
     */
    @property({ type: Number})
    AniType: number = 0;


    /**动画节点，默认为Main */
    @property({ type: Sprite})
    Main: Sprite;

    /**关闭节点 */
    @property({ type: Sprite})
    imgClose: Sprite;


    /**是否播放完特效 */
    $aniFinish: boolean = false;


    /**开启特效 */
    openAni() {
        if (!this.Main) {
            this.Main = this.owner.getChildByName("Main") as Sprite;
        }
        if (this.Main) {
            switch (this.AniType) {
                default:
                case 0:
                    this.$aniFinish = true;
                    break;
                case 1:
                    Tween.get(this.Main)
                        .set({ scaleX: 0.8, scaleY: 0.8 })
                        .to({ scaleX: 1, scaleY: 1 }, 300, Laya.Ease.backOut)
                        .call(this, () => {
                            this.$aniFinish = true;
                        })
                        .start();
                    break;
                case 2:
                    Tween.get(this.Main)
                        .set({ x: 1920 })
                        .to({ x: 0 }, 300, Laya.Ease.circOut)
                        .call(this, () => {
                            this.$aniFinish = true;
                        })
                        .start();
                    break
            }
        } else {
            this.$aniFinish = true;
        }
    }

    /**界面打开 */
    onOpened(param?: any) {

    }
    /**添加监听 */
    addEvent() {

    }


    /**界面关闭 */
    onClosed() {

    }


    /**
     * 注册监听事件，不需要销毁
     * @param event 事件枚举
     * @param callback 回调
     * @param callNow 立刻回调一次
     */
    protected regEvent(event: EventEnum, callback: Function, callNow: boolean = false, data?: any) {
        let self = this;
        if (event && callback) {
            EventMgr.on(event, this, callback);
            self.$event || (self.$event = new Map());
            self.$event.set(event, callback);
            if (callNow) {
                callback.call(this, data);
            }
        }
    }
    /**
     * 注册点击事件，并且清空之前的所有事件
     * @param node 节点
     * @param callback 回调
     * @param data 参数 默认第一位
     * @param once 是否只触发一次
     * @param time 点击间隔,默认300s，防止多次点击
     */
    protected regClick(node: Laya.Sprite, callback: Function, data?: any, once?: boolean, time?: number) {
        this.addClick(node, this, callback, once, data, time);
    }
    /**
   * 添加点击事件
   * @param node 点击对象
   * @param callback 回调
   * @param caller 回调对象
   * @param once 仅监听一次
   * @param data 回调参数 
   * @param time 多次点击阻断，默认300
   * 注：事件清理请使用offAll
   */
    private addClick(node: Laya.Sprite, caller: any, callback: Function, once?: boolean, data?: any, time: number = 300): void {
        if (node) {
            let clickTime = 0, params: any[] = [], evtIdx = 0;
            node.offAll();
            node[once ? "once" : "on"](Laya.Event.CLICK, caller, (e: Laya.Event) => {
                let now = Date.now();
                e.stopPropagation();
                if (now - clickTime > time && this.$aniFinish) {
                    if (data !== void 0) {
                        params[evtIdx] = data;
                        evtIdx = 1;
                    }
                    params[evtIdx] = e;
                    callback.apply(caller, params);
                    clickTime = now;
                }
            })
        } else {
            console.log("node is undefined")
        }
    }

    /**关闭自身 */
    close() {
        UIBaseMgr.instance.close(this.$assetsId, this.id);
    }




}