/*
* @Author: NoRain
* @Date: 2022-05-12 10:55:17 
* @Last Modified by: NoRain
* @Last Modified time: 2022-05-12 10:56:27
*/
/**武器管理类 */
export default class Weapon {
    private static _instance: Weapon;
    public static get instance(): Weapon {
        return this._instance ? this._instance : this._instance = new Weapon();
    }
    init() {

    }

}