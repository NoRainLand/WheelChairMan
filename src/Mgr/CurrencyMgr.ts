/*
 * @Author: NoRain 
 * @Date: 2023-02-16 21:26:36 
 * @Last Modified by: NoRain
 * @Last Modified time: 2023-02-16 21:39:24
 */

import { CurrencyEnum } from "../Enum/CurrencyEnum";
import { DataTableEnum } from "../Enum/DataTableEnum";
import ResLoader from "../Util/ResLoader";

/**货币表管理类 */
export default class CurrencyMgr {
    private static $currencyMap: Map<number, Object>;

    /**初始化 */
    static init() {
        this.$currencyMap = ResLoader.getDataTableById(DataTableEnum.Currency);
    }


    /**获取对应颜色 */
    static getColorById(id: CurrencyEnum): string {
        let data = this.$currencyMap.get(id);
        if (data && data["color"]) {
            return "#" + data["color"];
        }
        return "#fff";
    }

    /**获取对应图标 */
    static getImgUrlById(id: CurrencyEnum): string {
        let data = this.$currencyMap.get(id);
        if (data && data["imgId"]) {
            return ResLoader.getUrlById(data["imgId"]);
        }
        return "";
    }
}