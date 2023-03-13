/*
 * @Author: NoRain 
 * @Date: 2023-02-16 21:26:36 
 * @Last Modified by: NoRain
 * @Last Modified time: 2023-03-13 17:57:23
 */

import DataTable from "../DataTable/DataTable";
import { CurrencyEnum } from "../Enum/CurrencyEnum";
import ResLoader from "../Util/ResLoader";

/**货币表管理类 */
export default class CurrencyMgr {

    /**初始化 */
    static init() {

    }


    /**获取对应颜色 */
    static getColorById(id: CurrencyEnum): string {
        let data = DataTable.CurrencyDataTableMap.get(id);
        if (data && data.color) {
            return "#" + data.color;
        }
        return "#fff";
    }

    /**获取对应图标 */
    static getImgUrlById(id: CurrencyEnum): string {
        let data = DataTable.CurrencyDataTableMap.get(id);
        if (data && data.imgId) {
            return ResLoader.instance.getUrlById(data.imgId);
        }
        return "";
    }
}