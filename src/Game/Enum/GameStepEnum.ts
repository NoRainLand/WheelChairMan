/*
 * @Author: NoRain 
 * @Date: 2023-02-25 19:20:06 
 * @Last Modified by: NoRain
 * @Last Modified time: 2023-02-27 20:11:06
 */
/**游戏状态 */
export enum GameStepEnum {
    /**重置/未进入游戏 */
    ResetGame = 1001,
    /**选择人物 */
    SelectPlayer = 1002,
    /**选择武器 */
    SelectWeapon = 1003,
    /**加载游戏场景 */
    LoadGameScene = 1004,
    /**游戏进行中 */
    GameStart = 1005,
    /**游戏暂停 */
    GamePause = 1006,
    /**玩家死亡倒计时 */
    PlayerDead = 1007,
    /**游戏失败 */
    GameLose = 1008,
    /**游戏胜利 */
    GameWin = 1009,
}