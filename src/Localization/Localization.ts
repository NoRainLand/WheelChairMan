/*
* @Author: NoRain
* @Date: 2023-03-12 20:55:48
* @Last         Modified by:   NoRain
            * @Last Modified time: 2023-03-12 20:55:48
*/
/** Localization_DataTableType 本地化配置表*/
type Localization_DataTableType = { id: number, key: string, ChineseSimplified: string, English: string }
/** Localization数据类 */
export default class Localization {
    /** Localization_DataTableMap 本地化配置表*/
    public static LocalizationDataTableMap: Map<number, Localization_DataTableType> = new Map<number, Localization_DataTableType>();
    /**初始化 */
    static Init() {
        Localization.LocalizationDataTableMap.set(1001, { id: 1001, key: "GAME_START", ChineseSimplified: "游戏开始", English: "Game Start", });
        Localization.LocalizationDataTableMap.set(1002, { id: 1002, key: "OK", ChineseSimplified: "确认", English: "OK", });
        Localization.LocalizationDataTableMap.set(1003, { id: 1003, key: "CANCEL", ChineseSimplified: "取消", English: "CANCEL", });
        Localization.LocalizationDataTableMap.set(1004, { id: 1004, key: "SETTING", ChineseSimplified: "设置", English: "Setting", });
        Localization.LocalizationDataTableMap.set(1005, { id: 1005, key: "BGM", ChineseSimplified: "音乐", English: "Bgm", });
        Localization.LocalizationDataTableMap.set(1006, { id: 1006, key: "SFX", ChineseSimplified: "音效", English: "Sfx", });
        Localization.LocalizationDataTableMap.set(1007, { id: 1007, key: "SHAKE", ChineseSimplified: "震动", English: "Shake", });
        Localization.LocalizationDataTableMap.set(1008, { id: 1008, key: "LANGUAGE", ChineseSimplified: "语言", English: "Language", });
        Localization.LocalizationDataTableMap.set(1009, { id: 1009, key: "SUPPORT", ChineseSimplified: "支持", English: "Support", });
        Localization.LocalizationDataTableMap.set(1010, { id: 1010, key: "ON", ChineseSimplified: "开", English: "ON", });
        Localization.LocalizationDataTableMap.set(1011, { id: 1011, key: "OFF", ChineseSimplified: "关", English: "OFF", });
        Localization.LocalizationDataTableMap.set(1012, { id: 1012, key: "CONGRATULATIONS", ChineseSimplified: "恭喜", English: "Congratulations", });
        Localization.LocalizationDataTableMap.set(1013, { id: 1013, key: "OPENNOW", ChineseSimplified: "立刻打开", English: "OpenNow", });
        Localization.LocalizationDataTableMap.set(1014, { id: 1014, key: "LUCKYBOXBRONZE", ChineseSimplified: "青铜幸运宝箱", English: "Bronze Luck Box", });
        Localization.LocalizationDataTableMap.set(1015, { id: 1015, key: "LUCKYBOXSILVER", ChineseSimplified: "白银幸运宝箱", English: "Silver Luck Box", });
        Localization.LocalizationDataTableMap.set(1016, { id: 1016, key: "LUCKYBOXGOLD", ChineseSimplified: "黄金幸运宝箱", English: "Gold Luck Box", });
        Localization.LocalizationDataTableMap.set(1017, { id: 1017, key: "LUCKYBOXDIAMOND", ChineseSimplified: "钻石幸运宝箱", English: "Diamond Luck Box", });
        Localization.LocalizationDataTableMap.set(1018, { id: 1018, key: "LUCKYBOXPLATINUM", ChineseSimplified: "白金幸运宝箱", English: "Platinum Luck Box", });
        Localization.LocalizationDataTableMap.set(1019, { id: 1019, key: "PRIVACYAGREEMENT", ChineseSimplified: "隐私协议", English: "PrivacyAgreement", });
        Localization.LocalizationDataTableMap.set(1020, { id: 1020, key: "SHOP", ChineseSimplified: "商店", English: "Shop", });
        Localization.LocalizationDataTableMap.set(1021, { id: 1021, key: "RANKING", ChineseSimplified: "排行榜", English: "Ranking", });
        Localization.LocalizationDataTableMap.set(1022, { id: 1022, key: "GOLD", ChineseSimplified: "金币", English: "Gold", });
        Localization.LocalizationDataTableMap.set(1023, { id: 1023, key: "DIAMOND", ChineseSimplified: "钻石", English: "Diamond", });
        Localization.LocalizationDataTableMap.set(1024, { id: 1024, key: "HOT", ChineseSimplified: "热门", English: "HOT", });
        Localization.LocalizationDataTableMap.set(1025, { id: 1025, key: "BEST", ChineseSimplified: "推荐", English: "BEST", });
        Localization.LocalizationDataTableMap.set(1026, { id: 1026, key: "YOUDONTHAVEENOUGHDIAMONDS", ChineseSimplified: "您的$不足", English: "You don't have enough $", });
        Localization.LocalizationDataTableMap.set(1027, { id: 1027, key: "NOTYETIMPLEMENTED", ChineseSimplified: "暂未实现", English: "Not yet implemented", });
        Localization.LocalizationDataTableMap.set(1028, { id: 1028, key: "CONGRATULATIONSONGETTING", ChineseSimplified: "恭喜你获得$$", English: "Congratulations on getting $ $", });
        Localization.LocalizationDataTableMap.set(1029, { id: 1029, key: "STARTFIGHTING", ChineseSimplified: "开始战斗", English: "STARTFIGHTING", });
        Localization.LocalizationDataTableMap.set(1030, { id: 1030, key: "UNLOCK", ChineseSimplified: "解锁 $", English: "Unlock $", });
        Localization.LocalizationDataTableMap.set(1031, { id: 1031, key: "CONGRATULATIONSUNLOCK", ChineseSimplified: "恭喜你解锁人物成功", English: "Congratulations, you successfully unlocked the character", });
        Localization.LocalizationDataTableMap.set(1032, { id: 1032, key: "PAUSE", ChineseSimplified: "暂停", English: "PAUSE", });
        Localization.LocalizationDataTableMap.set(1033, { id: 1033, key: "CONTINUE", ChineseSimplified: "继续", English: "CONTINUE", });
        Localization.LocalizationDataTableMap.set(1034, { id: 1034, key: "RESTART", ChineseSimplified: "重开", English: "RESTART", });
        Localization.LocalizationDataTableMap.set(1035, { id: 1035, key: "QUIT", ChineseSimplified: "退出", English: "QUIT", });
        Localization.LocalizationDataTableMap.set(1036, { id: 1036, key: "RESURRECTION", ChineseSimplified: "复活", English: "RESURRECTION", });
        Localization.LocalizationDataTableMap.set(1037, { id: 1037, key: "WATCH", ChineseSimplified: "观看视频", English: "WATCH", });
        Localization.LocalizationDataTableMap.set(1038, { id: 1038, key: "WATCH2REVIVE", ChineseSimplified: "是否立即观看视频复活？", English: "Want to watch the video revive now?", });
        Localization.LocalizationDataTableMap.set(1039, { id: 1039, key: "DEFEAT", ChineseSimplified: "失败", English: "DEFEAT", });
        Localization.LocalizationDataTableMap.set(1040, { id: 1040, key: "TRYAGAIN", ChineseSimplified: "请继续努力", English: "PLEASETRYAGAIN", });
        Localization.LocalizationDataTableMap.set(2001, { id: 2001, key: "BUSINESSMAN", ChineseSimplified: "打工人", English: "BusinessMan", });
        Localization.LocalizationDataTableMap.set(2002, { id: 2002, key: "BOMBDISEX", ChineseSimplified: "拆弹专家", English: "BombDisEX", });
        Localization.LocalizationDataTableMap.set(2003, { id: 2003, key: "GREATMAGICIAN", ChineseSimplified: "大魔法师", English: "GreatMagician", });
        Localization.LocalizationDataTableMap.set(2004, { id: 2004, key: "KINGSMAN", ChineseSimplified: "王牌特工", English: "Kingsman", });
        Localization.LocalizationDataTableMap.set(2005, { id: 2005, key: "SCOUTROBOT", ChineseSimplified: "斥候机器人", English: "ScoutRobot", });
        Localization.LocalizationDataTableMap.set(2006, { id: 2006, key: "ROOKIEPIRATE", ChineseSimplified: "菜鸟海盗", English: "RookiePirate", });
        Localization.LocalizationDataTableMap.set(2101, { id: 2101, key: "BUSINESSMAN_DESCRIPTION", ChineseSimplified: "普通的打工人\n除了偶尔健身\n并无什么特点", English: "Ordinary migrant workers\n have no special features except for occasional exercise\n", });
        Localization.LocalizationDataTableMap.set(2102, { id: 2102, key: "BOMBDISEX_DESCRIPTION", ChineseSimplified: "大爆炸中活下来的拆弹专家\n秘诀是从不脱下他的重装\n防御超高", English: "Bomb disposal expert who survived the Big Bang\nThe secret is never taking off his armor\nSuper defense", });
        Localization.LocalizationDataTableMap.set(2103, { id: 2103, key: "GREATMAGICIAN_DESCRIPTION", ChineseSimplified: "神秘的魔法师\n随身跟着一本浮空魔法书\n威力莫测", English: "The mysterious magician\nfollows a floating magic book\nunpredictable power", });
        Localization.LocalizationDataTableMap.set(2104, { id: 2104, key: "KINGSMAN_DESCRIPTION", ChineseSimplified: "不明组织的特工\n受过特殊训练\n身体素质超越常人", English: "A robot that claims to come from the future\nThe body is full of technology\nIt has a moving speed that surpasses that of humans", });
        Localization.LocalizationDataTableMap.set(2105, { id: 2105, key: "SCOUTROBOT_DESCRIPTION", ChineseSimplified: "自称来自未来的机器人\n身体充满科技感\n有着超越人类的移动速度", English: "Agents of unknown organizations\n have received special training\n physical fitness surpasses that of ordinary people", });
        Localization.LocalizationDataTableMap.set(2106, { id: 2106, key: "ROOKIEPIRATE_DESCRIPTION", ChineseSimplified: "海盗中的菜鸟\n船长死后独自出来冒险\n随身带着几个橘子", English: "A rookie among pirates\nThe captain came out alone to take risks\nAfter the death of the captain, he took a few oranges with him", });
        Localization.LocalizationDataTableMap.set(2201, { id: 2201, key: "BUSINESSMAN_SKILL", ChineseSimplified: "发出绝望的吼叫\n推开身边所有敌人\n并给予一定伤害", English: "Let out a desperate roar\npush away all enemies around you,\nand deal certain damage", });
        Localization.LocalizationDataTableMap.set(2202, { id: 2202, key: "BOMBDISEX_SKILL", ChineseSimplified: "放下一颗反步兵地雷\n触发后造成大幅度伤害", English: "Drops an Anti-Personnel Mine\nDeals massive damage when triggered", });
        Localization.LocalizationDataTableMap.set(2203, { id: 2203, key: "GREATMAGICIAN_SKILL", ChineseSimplified: "召唤流星雨\n随机攻击一定范围敌人", English: "Summon meteor shower\nRandomly attack enemies within a certain range", });
        Localization.LocalizationDataTableMap.set(2204, { id: 2204, key: "KINGSMAN_SKILL", ChineseSimplified: "激发训练时的回忆\n短时间内免疫所有伤害", English: "Stimulate memories of training\nImmune to all damage for a short time", });
        Localization.LocalizationDataTableMap.set(2205, { id: 2205, key: "SCOUTROBOT_SKILL", ChineseSimplified: "调用身体特殊的能量\n向着特定方向闪现一段距离", English: "Invoke the special energy of the body\nFlash a certain distance in a specific direction", });
        Localization.LocalizationDataTableMap.set(2206, { id: 2206, key: "ROOKIEPIRATE_SKILL", ChineseSimplified: "吃下随身携带的橘子\n可以恢复一滴血（一局最多可以用两次）", English: "Eat the oranges you carry with you\nYou can restore a drop of blood (can be used up to twice in a round)", });
        Localization.LocalizationDataTableMap.set(2301, { id: 2301, key: "PISTOL", ChineseSimplified: "小手枪", English: "Pistol", });
        Localization.LocalizationDataTableMap.set(2302, { id: 2302, key: "RPG", ChineseSimplified: "火箭筒", English: "RPG", });
        Localization.LocalizationDataTableMap.set(2303, { id: 2303, key: "WIZARDSTAFF", ChineseSimplified: "法杖", English: "WizardStaff", });
        Localization.LocalizationDataTableMap.set(2304, { id: 2304, key: "SMG", ChineseSimplified: "消音冲锋枪", English: "SMG", });
        Localization.LocalizationDataTableMap.set(2305, { id: 2305, key: "REVOLVER", ChineseSimplified: "科技左轮", English: "Revolver", });
        Localization.LocalizationDataTableMap.set(2306, { id: 2306, key: "DOUBLEBARREL", ChineseSimplified: "双管喷", English: "DoubleBarrel", });
        Localization.LocalizationDataTableMap.set(2401, { id: 2401, key: "PISTOL_DESCRIPTION", ChineseSimplified: "平平无奇的小手枪\n和它的主人一样，毫不起眼\n但即使这样，也要努力活下去啊", English: "An unremarkable little pistol\nLike its owner, it is inconspicuous\n But even so, we must work hard to live", });
        Localization.LocalizationDataTableMap.set(2402, { id: 2402, key: "RPG_DESCRIPTION", ChineseSimplified: "威力巨大的RPG\n使用时候注意安全\n更加要注意友军火力哟", English: "Powerful RPG\nBe careful when using it\nAlso pay attention to friendly firepower", });
        Localization.LocalizationDataTableMap.set(2403, { id: 2403, key: "WIZARDSTAFF_DESCRIPTION", ChineseSimplified: "能够持续施法的法杖\n难道法杖就不会过热么\n或许是法师使用了降温魔法", English: "A wand that can continue to cast spells\nWill the wand not be overheated\nMaybe the mage used cooling magic", });
        Localization.LocalizationDataTableMap.set(2404, { id: 2404, key: "SMG_DESCRIPTION", ChineseSimplified: "美丽而又致命的消音冲锋枪\n即使目标死亡\n也不知都子弹是哪里打过来的", English: "Beautiful and deadly silenced submachine gun\nEven if the target dies\n I don't know where the bullets came from", });
        Localization.LocalizationDataTableMap.set(2405, { id: 2405, key: "REVOLVER_DESCRIPTION", ChineseSimplified: "带有未来科技的左轮手枪\n古老造型的背后\n是对过去的迷恋", English: "Revolver with futuristic technology\nBehind the ancient shape\n is a fascination with the past", });
        Localization.LocalizationDataTableMap.set(2406, { id: 2406, key: "DOUBLEBARREL_DESCRIPTION", ChineseSimplified: "经典设计的双管喷子\n简单耐用\n是你末日生存的首选武器", English: "The classic design of the double-pipe nozzle\nsimple and durable\nis your weapon of choice for doomsday survival", });
        Localization.LocalizationDataTableMap.set(2501, { id: 2501, key: "ZOMBIE", ChineseSimplified: "丧尸", English: "Zombie", });
        Localization.LocalizationDataTableMap.set(2601, { id: 2601, key: "RELOADING", ChineseSimplified: "换弹中", English: "Reloading", });
    }
}