import { EventEnum } from "../Enum/EventEnum";
import EventMgr from "../Mgr/EventMgr";

/*
 * @Author: NoRain 
 * @Date: 2023-02-24 22:42:20 
 * @Last Modified by: NoRain
 * @Last Modified time: 2023-02-24 23:14:20
 */
const { regClass, property } = Laya;
/**3D场景基类 */
@regClass()
export default class Scene3d extends Laya.Script {

    /**传入数据 */
    $param: any = null;

    /**事件 */
    private $event: Map<string, Function>;

    constructor() { super() }
    onStart(): void {
        // super.onStart();
        this.onOpened();
        this.addEvent();
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


    onDisable(): void {
        // super.onDisable();
        this.onClosed();
        let self = this, events = self.$event;
        for (let name in events) {
            EventMgr.off(name, self, events.get(name));
        }
        self.$event = null;
        self.$param = null;
    }
}