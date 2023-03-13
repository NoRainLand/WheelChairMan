import GameData from "../Data/GameData";
import DataTable from "../DataTable/DataTable";

/*
 * @Author: NoRain 
 * @Date: 2023-02-16 14:37:23 
 * @Last Modified by: NoRain
 * @Last Modified time: 2023-03-13 17:58:21
 */
export default class LevelMgr {


    /**初始化 */
    static init() {

    }

    /**等级 */
    static get level(): number {
        for (let [, value] of DataTable.LevelDataTableMap) {
            if (!isNaN(value.minEx) && !isNaN(value.maxEx)) {
                if (GameData.experience > value.minEx && GameData.experience <= value.maxEx) {
                    return value.level;
                }
            }
        }
        return 1;
    }



}