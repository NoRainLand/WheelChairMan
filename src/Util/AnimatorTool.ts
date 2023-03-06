/*
 * @Author: NoRain 
 * @Date: 2023-02-06 19:56:47 
 * @Last Modified by: NoRain
 * @Last Modified time: 2023-02-06 19:59:35
 */
/**骨骼动画工具 */
export default class AnimatorTool {
    /**
    * 播放动画
    * @param ani 动画
    * @param name 动画名
    * @param loop 是否循环
    * @param speed 速度
    * @param layerIndex 层级
    * @param crossFade 是否过渡
    * @param transitionDuration 过渡时间
    */
    static play(ani: Laya.Animator, name: string, loop: boolean = true, speed: number = 1, layerIndex: number = 0, crossFade: boolean = false, transitionDuration: number = 0.1) {
        if (ani && name) {
            let AnimatorState = ani.getControllerLayer(layerIndex).getAnimatorState(name);
            if (AnimatorState) {
                if (crossFade) {
                    ani.crossFade(name, transitionDuration, layerIndex);
                } else {
                    ani.play(name, layerIndex);
                }
                AnimatorState.speed = speed;
                AnimatorState.clip.islooping = loop;
            } else {
                console.log("名称:" + name + " /层级:" + layerIndex + "对应的动画为空");
            }
        } else {
            console.log('ani/name丢失');
        }
    }
    /**
     * 添加动画退出事件监听 注意 isLooping = true 不执行
     * @param ani 动画
     * @param name 动画名
     * @param caller 域
     * @param callback 回调函数
     * @param layerIndex 层级
     */
    static addEvent(ani: Laya.Animator, name: string, caller: any, callback: Function, layerIndex: number = 0) {
        let layer: Laya.AnimatorControllerLayer = ani.getControllerLayer(layerIndex);
        let aniStatus: Laya.AnimatorState = layer.getAnimatorState(name);
        if (aniStatus) {
            let aniScript: Laya.AnimatorStateScript = aniStatus.getScript(Laya.AnimatorStateScript);
            if (aniScript == null) {
                aniScript = aniStatus.addScript(Laya.AnimatorStateScript);
            }
            aniScript.onStateExit = () => {
                callback && caller && callback.call(caller);
            }
        } else {
            console.log(name + '状态为空');
        }
    }
}