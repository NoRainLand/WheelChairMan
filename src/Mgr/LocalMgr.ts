/*
 * @Author: NoRain 
 * @Date: 2023-02-06 17:39:17 
 * @Last Modified by: NoRain
 * @Last Modified time: 2023-02-18 10:16:17
 */
import ProjectConfig from "../Config/ProjectConfig";
import { LocalEnum } from "../Enum/LocalEnum";
import LocalStorage = Laya.LocalStorage;
/**持久化管理类 */
export default class LocalMgr {
    /**
    * 获取指定键名的值。
    * @param key 键名。
    * @return 字符串型值。
    */
    static getItem(key: LocalEnum): string {
        return LocalStorage.getItem(`${ProjectConfig.projectName}_${key}`);
    }
    /**
     * 存储指定键名和键值，字符串类型。
     * @param key 键名。
     * @param value 键值。
     */
    static setItem(key: LocalEnum, value: string | number) {
        LocalStorage.setItem(`${ProjectConfig.projectName}_${key}`, typeof value === "string" ? value : value.toString());
    }



}