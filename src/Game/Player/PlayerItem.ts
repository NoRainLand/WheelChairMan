import BaseItem from "../BaseItem/BaseItem";

/*
 * @Author: NoRain 
 * @Date: 2023-02-25 19:27:37 
 * @Last Modified by: NoRain
 * @Last Modified time: 2023-02-25 19:31:33
 */
const { regClass, property } = Laya;
/**玩家类 */
@regClass()
export default class PlayerItem extends BaseItem {
    /**玩家数据 */
    playerData: any;
    
    reset() {

    }
}