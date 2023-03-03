import Script3d from "../../Script3d/Script3d";

/*
 * @Author: NoRain 
 * @Date: 2023-02-28 17:52:41 
 * @Last Modified by: NoRain
 * @Last Modified time: 2023-03-03 15:27:05
 */
const { regClass, property } = Laya;
/**武器 */
@regClass()
export default class WeaponItem extends Script3d {
    /**武器数据 */
    weaponData: any;



    totalBullet: number = 0;

    private $bullet: number = 0;

    canShoot: boolean = false;

    constructor() { super() }

    onEnable(): void {

    }
    onStart(): void {

    }

    gameStart() {
        this.canShoot = true;
    }




    get bullet(): number {
        return this.$bullet;
    }

    set bullet(value: number) {
        if (value == 0) {
            this.reLoad()
            this.canShoot = false;
        }
    }

    reLoad() {
        // Tween.get()

    }





}