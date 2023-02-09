/*
 * @Author: NoRain 
 * @Date: 2023-02-09 17:02:32 
 * @Last Modified by: NoRain
 * @Last Modified time: 2023-02-09 19:35:46
 */
const { regClass, property } = Laya;
/**页面公共数据 */
@regClass()
export default class UIBaseData extends Laya.Script {
    constructor() { super() }
    /*
    *老李-bug去社区提交ask.layabox.com(399050) 23/2/8 14:45:05
    *暂时还不支持父类属性，你先在当前类里暴露IDE属性吧
    *老李-bug去社区提交ask.layabox.com(399050) 23/2/8 14:45:45
    *我们列入到优化计划了，后面看我们的更新日志吧
    */

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
    isSingleton: boolean = true;



}