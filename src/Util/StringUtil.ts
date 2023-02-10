/*
 * @Author: NoRain 
 * @Date: 2023-02-10 11:04:51 
 * @Last Modified by: NoRain
 * @Last Modified time: 2023-02-10 11:07:22
 */
/**文字工具类 */
export default class StringUtil {
    /**小数转百分比，默认保留两位小数 */
    static num2percentage(num: number, d: number = 2): string {
        num = num * 100;
        return num.toFixed(d) + "%";
    }
}