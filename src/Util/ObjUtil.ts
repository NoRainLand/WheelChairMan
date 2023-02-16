/*
 * @Author: NoRain 
 * @Date: 2023-02-16 20:31:48 
 * @Last Modified by: NoRain
 * @Last Modified time: 2023-02-16 20:37:45
 */
/**乱七八的工具类 */
export default class ObjUtil {
    /**数组去重 */
    static clearList(arr: Array<any>) {
        arr.every((item) => {

        })
    }


    /**Set转List */
    static set2List(_set: Set<any>): Array<any> {
        if (_set && _set.size) {
            let arr = [];
            for (let item of _set) {
                arr.push(item);
            }
            return arr;
        }
        return null;
    }
}