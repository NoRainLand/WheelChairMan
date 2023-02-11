/*
 * @Author: NoRain 
 * @Date: 2023-02-11 14:59:35 
 * @Last Modified by: NoRain
 * @Last Modified time: 2023-02-11 15:38:06
 */
/**震动管理 */
export default class VibrateMgr {
    /**震动 */
    private static $isVibrate: number = -1;


    /**是否震动 */
    static get isVibrate(): boolean {
        return !!this.$isVibrate;
    }
    static set isVibrate(value: boolean) {
        if (value) {
            this.$isVibrate = 1;
        } else {
            this.$isVibrate = 0;
        }
    }





}