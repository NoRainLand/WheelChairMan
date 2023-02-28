/*
 * @Author: NoRain 
 * @Date: 2023-02-27 23:40:12 
 * @Last Modified by: NoRain
 * @Last Modified time: 2023-02-27 23:51:20
 */
export enum PlayerStatusEnum {
    /**待机 */
    idle = 1001,
    /**站立设计 */
    standAndShoot = 1002,
    /**跑动 */
    run = 1003,
    /**跑动射击 */
    runAndShoot = 1004,
    /**死亡 */
    death = 1005,
}