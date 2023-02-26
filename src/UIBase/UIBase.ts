import { EventEnum } from "../Enum/EventEnum";
import EventMgr from "../Mgr/EventMgr";
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
 * @Last Modified time: 2023-02-24 23:38:28
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
    @property()
    depth: number = 2;


    /**是否只能同时存在一个 */
    @property()
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
    /**是开启特效 */
    @property()
    AniType: number = 0;
    /**是否播放完特效 */
    aniFinish: boolean = false;

    /**特效对象 */
    private $Main: Node;
    /**开启特效 */
    openAni() {
        this.$Main = this.owner.getChildByName("Main");
        switch (this.AniType) {
            default:
                this.aniFinish = true;
                break;
            case 0:
                this.aniFinish = true;
                break;
            case 1:

                break


        }

        this.aniFinish = true; //暂时没有
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
                if (now - clickTime > time && this.aniFinish) {
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