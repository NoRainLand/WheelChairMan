/*
 * @Author: NoRain 
 * @Date: 2023-02-06 19:04:56 
 * @Last Modified by: NoRain
 * @Last Modified time: 2023-03-06 16:01:49
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
    GAMERESUME = "GAMERESUME",

    /**怪物死亡 */
    ENEMYDEATH = "ENEMYDEATH",

    /**玩家重生 */
    PLAEYRRESURRECTION = 'PLAEYRRESURRECTION',

    /**游戏重开 */
    GAMERESTART = "GAMERESTART",

    /**游戏结束 */
    GAMEOVER = "GAMEOVER",
    /**游戏胜利 */
    GAMEWIN = "GAMEWIN",
    /**游戏失败 */
    GAMELOSE = "GAMELOSE",


}