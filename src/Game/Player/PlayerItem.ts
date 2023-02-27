import PlayerController from "../../Util/PlayerController";
import BaseItem from "../BaseItem/BaseItem";

/*
 * @Author: NoRain 
 * @Date: 2023-02-25 19:27:37 
 * @Last Modified by: NoRain
 * @Last Modified time: 2023-02-27 19:10:51
 */
const { regClass, property } = Laya;
/**玩家类 */
@regClass()
export default class PlayerItem extends BaseItem {
    /**玩家数据 */
    playerData: any;

    private $health: number = 0;

    get health(): number {
        return this.$health;
    }
    set health(value: number) {
        if (!isNaN(value)) {
            let oldHealth = this.$health;
            this.$health = value;
            this.healthChange(oldHealth);
        }
    }
    /**血量改变 */
    healthChange(oldHealth: number) {

    }



    private $playerController: PlayerController;

    get playerController(): PlayerController {
        if (!this.$playerController) {
            this.$playerController = this.obj.getComponent(PlayerController);
        }
        return this.$playerController;
    }
    reset() {

    }
}