/*
 * @Author: NoRain 
 * @Date: 2023-02-07 09:32:30 
 * @Last Modified by: NoRain
 * @Last Modified time: 2023-03-07 21:29:31
 */
import Tween from "./Tween";
import Pool = Laya.Pool;

/**时间管理器 */
export default class Timer {

    /**对象池标志 */
    private static $sign: string = "MyTimer"

    private static $cache: string = "$" + Timer.$sign;


    /**作用域 */
    private $caller: any = null;
    /**回调函数 */
    private $callBack: Function = null;

    /**是否在运行 */
    private $isRunning: boolean = false;
    /**运行次数 */
    private $runCount: number = 0;
    /**间隔 */
    private $delay: number = 1;

    /**时间进度
     * 循环默认为0
     */
    private timeValue: number = 0;

    /**上次运行时间 */
    private $lastTime: number = 0;


    /**运行时间 */
    private $runTime: number = 0;


    /**类型
     * 0 once
     * 1 loop
     * 2 frameOnce
     * 3 frameLoop
     */
    private $type: number = 0;

    /**循环次数 */
    private $loopTime: number = -99;


    /**是否正在运行 */
    get isRunning(): boolean {
        return this.$isRunning;
    }
    /**运行次数 */
    get runCount(): number {
        return this.$runCount;
    }
    /**获取运行时间 */
    get runTime(): number {
        if (this.$isRunning) {
            return this.$runTime + Date.now() - this.$lastTime;
        } else {
            return this.$runTime;
        }
    }


    /**
     * 返回一个计时器
     * @param delay 延时
     * @param caller 作用域
     * @param callBack 回调函数
     * @returns Timer
     */
    static get(delay: number, caller: any, callBack: Function): Timer {
        let self = this;
        if (delay > 0 && caller != null && callBack != null) {
            let timer = <Timer>Pool.getItemByClass(Timer.$sign, Timer);
            timer.$init(delay, caller, callBack);
            return timer;
        } else {
            console.log("参数为空");
        }
    }
    /**重置数据 */
    private reset() {
        this.$caller = null;
        this.$callBack = null;
        this.$isRunning = false;
        this.$runCount = 0;
        this.$delay = 1;
        this.$lastTime = 0;
        this.$runTime = 0;
        this.$loopTime = -99;
    }

    private $init(delay: number, caller: any, callBack: Function) {
        let self = this;
        self.reset();
        let timerCache = caller[Timer.$cache] || (caller[Timer.$cache] = []);
        timerCache.push(self);
        self.$delay = delay;
        self.$caller = caller;
        self.$callBack = callBack;
        self.$type = 0;
    }


    /**定时执行一次 */
    once(): Timer {
        this.$type = 0;
        return this;
    }
    /**定时重复执行 */
    loop(loopTime: number = -99): Timer {
        this.$type = 1;
        if (loopTime > 0) {
            this.$loopTime = loopTime;
        }
        return this;
    }
    /**定时执行一次(基于帧率) */
    frameOnce(): Timer {
        this.$type = 2;
        return this;
    }
    /**定时重复执行(基于帧率) */
    frameLoop(): Timer {
        this.$type = 3;
        return this;
    }
    /**开始计时器 */
    start(): Timer {
        switch (this.$type) {
            case 0:
                Laya.timer.once(this.$delay, this, this.update);
                break;
            case 1:
                Laya.timer.loop(this.$delay, this, this.update);
                break;
            case 2:
                Laya.timer.frameOnce(this.$delay, this, this.update);
                break;
            case 3:
                Laya.timer.frameLoop(this.$delay, this, this.update);
                break;
        }
        this.$isRunning = true;
        this.$lastTime = Date.now();
        return this;
    }

    /**重新开始计时器 */
    reStart(): Timer {
        this.$runTime = this.$runCount = 0;
        this.$lastTime = Date.now();
        return this;
    }

    /**暂停 */
    pause() {
        this.$isRunning = false;
        if (this.$type == 0) {
            this.$delay = Date.now() - this.$lastTime;
            this.$delay = this.$delay >= 20 ? this.$delay : 20;//默认60帧，最低延时20
        } else if (this.$type == 2) {
            this.$delay = (Date.now() - this.$lastTime) / 16; //默认60帧
            this.$delay = this.$delay >= 1 ? this.$delay : 1;
        }
        this.$runTime += Date.now() - this.$lastTime;
    }
    /**重新开始 */
    resume() {
        this.$isRunning = true;
        this.$lastTime = Date.now();
        if (this.$type == 0) {
            Laya.timer.once(this.$delay, this, this.update);
        } else if (this.$type == 2) {
            Laya.timer.frameOnce(this.$delay, this, this.update);
        }
    }




    /**更新 */
    protected update() {
        let self = this;
        if (self.$isRunning) {
            self.$runTime += Date.now() - self.$lastTime;
            self.$lastTime = Date.now();
            self.$runCount++;
            // if (self.$type == 0) {
            //     self.timeValue = self.runTime / self.$delay;
            // } else if (self.$type == 2) {
            //     self.timeValue = self.runCount / self.$delay;
            // }
            self.$callBack.call(self.$caller);//, self.timeValue
            if (self.$type == 0 || self.$type == 2) {
                self.$isRunning = false;
                self.clear();
            } else {
                if (this.$loopTime != -99 && this.$loopTime > 0) {
                    this.$loopTime--;
                    if (this.$loopTime == 0) {
                        self.$isRunning = false;
                        self.clear();
                    }
                }
            }
        }
    }



    /**清理 */
    clear() {
        let self = this;
        self.$isRunning = false;
        Laya.timer.clear(self, self.update);
        if (self.$caller) {
            let timerCache = self.$caller[Timer.$cache];
            if (timerCache && timerCache instanceof Array) {
                let index = timerCache.indexOf(self);
                if (index != -1) {
                    timerCache.splice(index, 1);
                }
                timerCache.length == 0 && (delete self.$caller[Timer.$cache]);
            }
        }
        Laya.timer.frameOnce(1, self, () => { ////为什么要这么写呢？看不懂就对了，我也看不懂。
            Pool.recover(Timer.$sign, self);
        })
        self.reset();
    }


    /**清理 */
    static clearAll(target: Object) {
        let timerCache = target[Timer.$cache];
        if (timerCache && timerCache instanceof Array) {
            for (let i = 0; i < timerCache.length; i++) {
                let timer = timerCache[i];
                if (timer instanceof Timer) {
                    let caller = timer.$caller;
                    if (caller && caller instanceof Tween) {
                        console.log("不允许清理");
                    } else {
                        timer.clear();
                    }
                }
                // console.log("clearAll");
                // timer instanceof Timer && timer.clear();
            }
        }
    }


}