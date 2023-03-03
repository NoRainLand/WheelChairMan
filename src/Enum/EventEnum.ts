/*
 * @Author: NoRain 
 * @Date: 2023-02-06 19:04:56 
 * @Last Modified by: NoRain
 * @Last Modified time: 2023-03-03 21:10:37
 */
/**事件枚举 */
export enum EventEnum {
    /**金币改变 */
    GOLDCHANGE = "GOLDCHANGE",
    /**语言改变 */
    LANGUAGECHANGE = "LANGUAGECHANGE",

    /**钻石数量改变 */
    DIAMONDCHANGE = "DIAMONDCHANGE",

    /**经验改变 */
    EXPERIENCECHANGE = "EXPERIENCECHANGE",

    /**引导结束 */
    GUIDFINISH = "GUIDFINISH",

    /**显示玩家 */
    SHOWPLAYER = "SHOWPLAYER",
    /**解锁玩家 */
    UNLOCKPLAYER = "UNLOCKPLAYER",

    /**游戏场景加载完成 */
    GAMESCENELOADED = "GAMESCENELOADED",

    /**玩家血量改变 */
    HEALTHCHANGE = "HEALTHCHANGE",

    /**玩家死亡 */
    PLAYERDEAD = "PLAYERDEAD",

    /**游戏暂停 */
    GAMEPAUSE = "GAMEPAUSE",
    /**游戏继续 */
    GAMERESUME = "GAMERESUME"


}