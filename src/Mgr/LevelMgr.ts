import GameData from "../Data/GameData";
import { DataTableEnum } from "../Enum/DataTableEnum";
import ResLoader from "../Util/ResLoader";

/*
 * @Author: NoRain 
 * @Date: 2023-02-16 14:37:23 
 * @Last Modified by: NoRain
 * @Last Modified time: 2023-02-16 16:53:42
 */
export default class LevelMgr {

    /**经验表 */
    private static $levelDataTable: Map<number, Object> = new Map();

    /**初始化 */
    static init() {
        this.$levelDataTable = ResLoader.strParser(ResLoader.getResById(DataTableEnum.Level).data);
    }

    /**等级 */
    static get level(): number {
        for (let [, value] of this.$levelDataTable) {
            let minEx = value["minEx"];
            let maxEx = value["maxEx"];
            if (!isNaN(minEx) && !isNaN(maxEx)) {
                if (GameData.experience > minEx && GameData.experience <= maxEx) {
                    return value["level"];
                }
            }
        }
        return 1;
    }



}