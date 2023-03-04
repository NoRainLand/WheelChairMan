/*
 * @Author: NoRain 
 * @Date: 2023-02-07 16:38:31 
 * @Last Modified by: NoRain
 * @Last Modified time: 2023-03-03 21:35:00
 */

import Timer from "./Timer";
import Transform = Laya.Transform;
import Node = Laya.Node;

/**缓动步骤 */
interface IStep {
    /**类型
     * 0 to
     * 1 set
     * 2 wait
     * 3 call
     * 4 toFun
     */
    type: number;
    /**开始时间 */
    startTime: number;
    /**结束时间 */
    endTime: number;
    /**属性 */
    param?: any;
}

/**
 * 缓间算法
 * 公式：r = F(t)，含义：根据经过时间的比例t[0,1]，获取实际时间的比例r。需保证F(0)=0，F(1)=1
 */
export type TEaseFun = (t: number, a: number, b: number, c: number) => number;

/**to 的参数 */
type TToParam = [TEaseFun, any, any];

/**toFun 的属性格式 */
type TToFunProp = { [key: string]: (t: number) => number }





/**缓动动画 */
export default class Tween {
    /**缓存标记 */
    static sign: string = "MyTween";
    static cache = "$" + Tween.sign;
    /**计时器 */
    private $timer: Timer;
    /**目标 */
    private $target: Node | Transform | Object;
    /**循环次数 -1 为无限循环 */
    private $loopTime: number = 1;
    /**步骤 */
    private $steps: IStep[];
    /**完整步骤 */
    private $cSteps: IStep[];
    /**是否需要复制 */
    private $needCopy: boolean;
    /**当前时间 */
    private $curTime: number;

    /**初始化 */
    private $init(target: Node | Transform | Object): void {
        let self = this;
        let tweens = target[Tween.cache] || (target[Tween.cache] = []);
        tweens.push(self);
        self.$target = target;
        self.$loopTime = 1;
        self.$curTime = 0;
        self.$needCopy = true;
        self.$steps = [];
        self.$cSteps = [];

        self.$timer = Timer.get(1, self, self.$update).frameLoop();
    }


    /**回调 */
    private $update() {
        let self = this;
        let steps = self.$steps, cSteps = self.$cSteps;
        //复制
        if (self.$needCopy) {
            self.$needCopy = false;
            cSteps.push.apply(cSteps, steps);
        }
        //执行
        let runTime = self.$timer.runTime, remove = 0;
        for (let i = 0, len = steps.length; i < len; i++) {
            let step = steps[i];
            if (step.startTime <= runTime) {
                self.$runStep(step);
            }
            if (step.endTime <= runTime) {
                remove++;
            }
        }
        //清理
        remove > 0 && steps.splice(0, remove);

        // 执行结束：注意需要用self.$steps来判断，因为$runStep(call)可能将Tween给变质了，导致steps不等于self.$step
        steps = self.$steps;

        if (steps && steps.length == 0) {
            if (self.$loopTime > 1) {
                self.$loopTime--;
                self.$timer.reStart();
                self.$steps = cSteps.concat();
            } else {
                if (self.$loopTime == -1) {
                    self.$timer.reStart();
                    self.$steps = cSteps.concat();
                } else {
                    self.clear();
                }
            }
        }
    }

    /**执行步骤 */
    $runStep(step: IStep) {
        let self = this;
        let type = step.type;
        switch (type) {
            case 0://to
                self.$to(step);
                break;
            case 1://set
                self.$set(step.param);
                break;
            case 2://wait
                self.$wait(step);
                break;
            case 3://call
                self.$call(step.param);
                break;
            case 4://toFun
                self.$toFun(step);
                break;
        }
    }



    /**渐变 */
    private $to(step: IStep) {
        let self = this;
        // 实际经过时间比例
        let start = step.startTime;
        let ratio = Math.min((self.$timer.runTime - start) / (step.endTime - start), 1);
        // 修改比例
        let param = <TToParam>step.param;
        let ease = param[0];
        ease && (ratio = ease(ratio, 0, 1, 1));
        // 初始化属性
        let target = self.$target, endp = param[1], dstp = param[2] || (param[2] = self.$getIncrement(target, endp));
        // 修改属性
        for (let i in dstp) {
            target[i] = endp[i] - dstp[i] * (1 - ratio);
        }
    }

    /**复制属性 */
    private $set(props: any) {
        let self = this;
        let target = self.$target;
        for (let i in props)
            target[i] = props[i];
    }
    /**等待 */
    private $wait(step: IStep) {

    }

    /**回调 */
    private $call(param: [Function, any, any[]]) {
        param[0].apply(param[1], param[2]);
    }
    /**执行步骤函数 */
    private $toFun(step: IStep) {
        let self = this, props = <TToFunProp>step.param, target = self.$target, start = step.startTime;
        // 当前比例
        let ratio = Math.min((self.$timer.runTime - start) / (step.endTime - start), 1);
        // 修改属性
        for (let i in props) {
            target[i] = props[i](ratio);
        }
    }

    /**
      * 添加步骤
      * @param type 类型
      * @param duration 持续时间
      */
    private $addStep(type: number, duration: number, param?: any): void {
        let self = this;
        let startTime = self.$curTime;
        let endTime = self.$curTime = startTime + duration;
        self.$steps.push({ type, startTime, endTime, param });
        // self.$timer.start();	// 自动启动 //需要手动启动

    }



    /**
        * 获取属性增量，若起始属性没有结束属性的值，则忽略该属性
        * @param start 起始属性
        * @param end 结束属性
        */
    private $getIncrement(start: any, end: any): any {
        let copy = {};
        let keys = Object.keys(end);
        let hasv = (obj) => {
            return !!obj || (obj != null && obj != void 0);
        };
        for (let i in keys) {
            let key = keys[i];
            let value = start[key];
            if (hasv(value)) {
                copy[key] = end[key] - value;
            }
        }
        return copy;
    }









    //-------------外部方法--------------

    /**获取一个缓动 */
    static get(target: Node | Transform | Object) {
        var tween = <Tween>Laya.Pool.getItemByClass(Tween.sign, Tween);
        tween.$init(target);
        return tween;
    }

    /**
    * 用公式的形式来执行属性变化
    * @param props 对象属性集合，key值为属性，value值为公式函数（参数是时间比例0~1，返回当前时间比例的属性值）
    * @example 
    * var sp = new Laya.Sprite;
    * sp.graphics.drawCircle(0, 0, 10, '#ff00ff');
    * Laya.stage.addChild(sp);
    * Tween.get(sp).set({x: 100, y: 100}).toFrom({x:function(t) {return 100 * t + 100}})
    */
    toFun(props: TToFunProp, duration?: number) {
        var self = this;
        if (isNaN(duration) || duration <= 0) {
            let obj = {};
            for (let i in props) {
                obj[i] = props[i](1);
            }
            self.set(obj);
        }
        else {
            self.$addStep(4, duration, props);
        }
        return self;
    }
    /**
     * 执行到对应的属性
     * @param props 对象属性集合，一般都是属性值都是数字
     * @param duration 持续时间，非负数，建议时间不低于一帧
     * @param ease 缓动算法
     */
    to(props: any, duration?: number, ease?: (...params: number[]) => number) {
        let self = this;
        if (isNaN(duration) || duration <= 0) {
            self.set(props);
        } else {
            self.$addStep(0, duration, [ease, props]);
        }
        return self;
    }

    /**
      * 直接修改对象属性
      * @param props 对象属性集合
      */
    public set(props: any): Tween {
        var self = this;
        self.$addStep(1, 0, props);
        return self;
    }

    /**
       * 执行回调
       * 注：尽量避免在回调里对自身进行有持续性的操作to/wait等，会出现异常现象
       */
    public call(caller: any, callback: Function, params?: any[]): Tween {
        var self = this;
        callback && self.$addStep(3, 0, [callback, caller, params]);
        return self;
    }
    /**延时 */
    await() {

    }
    /**循环 */
    loop(loopTime: number = -1) {
        this.$loopTime = loopTime;
        return this;
    }
    pause() {
        var timer = this.$timer;
        timer && timer.pause();
    }
    resume() {
        var timer = this.$timer;
        timer && timer.resume();
    }
    /**开始 */
    start() {
        let timer = this.$timer;
        timer && timer.start();
    }

    clear() {
        var self = this;
        if (self.$timer) {
            // 清除标志
            let target = self.$target;
            let tweens = target[Tween.cache];
            if (tweens instanceof Array) {
                let index = tweens.indexOf(self);
                if (index != -1) {
                    tweens.splice(index, 1);
                }
                tweens.length == 0 && (delete target[Tween.cache]);
            }
            self.$timer.clear();
            self.$timer = self.$steps = self.$cSteps = self.$target = null;
            Laya.Pool.recover(Tween.sign, self);
        }
    }



    static clear(target: Object) {
        if (target) {
            let tweens = target[Tween.cache];
            if (tweens instanceof Array) {
                for (let i = 0, len = tweens.length; i < len; i++) {
                    let tween = tweens[i];
                    tween instanceof Tween && tween.clear();
                }
            }
            delete target[Tween.cache];
        }
    }
    static clearAll(root: Laya.Sprite | Laya.Transform | Object) {
        Tween.clear(root);
        if (root instanceof Laya.Node) {
            for (let i = 0, len = root.numChildren; i < len; i++) {
                Tween.clearAll(root.getChildAt(i) as Laya.Sprite);
            }
        }
    }
    /**
     * Laya常规的Ease函数转Tween能识别的Ease函数
     * @example Tween.tuenEase(Laya.Ease.XXXX);
     */
    public static turnEase(ease: (...params: number[]) => number): TEaseFun {
        return function (t: number): number {
            return ease(t, 0, 1, 1);
        };
    }
}