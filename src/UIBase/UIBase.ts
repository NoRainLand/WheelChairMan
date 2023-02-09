import EventMgr from "../Mgr/EventMgr";

/*
 * @Author: NoRain 
 * @Date: 2023-02-08 10:03:24 
 * @Last Modified by: NoRain
 * @Last Modified time: 2023-02-09 20:22:51
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
    depth: number = 0;


    /**是否只能同时存在一个 */
    @property()
    isSingleton: boolean = true;

    /**传入数据 */
    $param: any = null;


    /**是否开启 */
    isOpen: boolean = false;

    /**事件 */
    private $event = new Map;

    constructor() {
        super();
    }
    onStart(): void {

    }
    onOpened(param: any) {

    }
    onClosed() {

    }

    protected regEvent(event: string, callback: Function) {
        let self = this;
        if (event != "" && callback) {
            EventMgr.on(event, this, callback);
            self.$event.set(event, callback);
        }
    }
    /**
     * 注册点击事件，并且清空之前的所有事件
     * @param node 节点
     * @param callback 回调
     * @param once 是否只触发一次
     * @param data 参数 默认第一位
     * @param time 点击间隔,默认300s，防止多次点击
     */
    protected regClick(node: Laya.Sprite, callback: Function, once?: boolean, data?: any, time?: number) {
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
        let clickTime = 0, params: any[] = [], evtIdx = 0;
        node.offAll();
        node[once ? "once" : "on"](Laya.Event.CLICK, caller, (e: Laya.Event) => {
            let now = Date.now();
            e.stopPropagation();
            if (now - clickTime > time) {
                if (data !== void 0) {
                    params[evtIdx] = data;
                    evtIdx = 1;
                }
                params[evtIdx] = e;
                callback.apply(caller, params);
                clickTime = now;
            }
        })
    }

    /**关闭自身 */
    close() {
        let self = this, events = self.$event;
        for (let name in events) {
            EventMgr.off(name, self, events.get(name));
        }
        self.$event = null;
        self.$param = null;
    }




}