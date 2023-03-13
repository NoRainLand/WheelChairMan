/*
* @Author: NoRain
* @Date: 2023-03-12 20:55:48
* @Last         Modified by:   NoRain
            * @Last Modified time: 2023-03-12 20:55:48
*/
/** AssetsPath_DataTableType 资源配置路径表*/
type AssetsPath_DataTableType = { id: number, name: string, msg: string, path: string , preload: number}
/** Bullet_DataTableType 子弹配置表*/
type Bullet_DataTableType = { id: number, msg: string, path: number, damage: number, speed: number, expRange: number, type: number, soundId: number, flightDis: number, maxKillNum: number}
/** Currency_DataTableType 游戏货币表*/
type Currency_DataTableType = { id: number, key: string, meg: string, worth: number, imgId: number, localizationKey: string, color: string}
/** Enemy_DataTableType 敌人配置表*/
type Enemy_DataTableType = { id: number, msg: string, path: number, health: number, speed: number}
/** Level_DataTableType 等级表*/
type Level_DataTableType = { id: number, level: number, minEx: number, maxEx: number}
/** LocalizationRes_DataTableType 本地化资源配置表*/
type LocalizationRes_DataTableType = { id: number, msg: string, key: string, flagId: number}
/** LuckyBox_DataTableType 幸运宝箱配置*/
type LuckyBox_DataTableType = { id: number, luckyboxType: string, luckyboxGetMin: number, luckyboxGetMax: number, luckyboxGetType: number, imgPath: number, localizationKey: string}
/** Player_DataTableType 角色表*/
type Player_DataTableType = { id: number, key: string, msg: string, localizationKey: number, health: number, speed: number, path: number, descriptionKey: number, weaponId: number, skillid: number, unlockPrice: number, currency: number}
/** Ranking_DataTableType 排行榜*/
type Ranking_DataTableType = { id: number, imgId: number, color: string}
/** Scene3d_DataTableType 3d场景*/
type Scene3d_DataTableType = { id: number, msg: string, key: string, path: number}
/** Shop_DataTableType 商店表*/
type Shop_DataTableType = { id: number, imgId: number, shopId: number, number: number, isHot: number, isBest: number, price: number, priceId: number, msg: string, page: number, localizationKey: string, bonus: number}
/** Weapon_DataTableType 武器配置表*/
type Weapon_DataTableType = { id: number, msg: string, localizationKey: number, descriptionKey: number, path: number, bulletPath: number, prep: number, reloadTime: number, sound: number, shotInterval: number, expSound: number}
/** DataTable数据类 */
export default class DataTable {
/** AssetsPath_DataTableMap 资源配置路径表*/
public static AssetsPathDataTableMap:Map<number,AssetsPath_DataTableType>             = new Map<number,AssetsPath_DataTableType>();
/** Bullet_DataTableMap 子弹配置表*/
public static BulletDataTableMap:Map<number,Bullet_DataTableType>             = new Map<number,Bullet_DataTableType>();
/** Currency_DataTableMap 游戏货币表*/
public static CurrencyDataTableMap:Map<number,Currency_DataTableType>             = new Map<number,Currency_DataTableType>();
/** Enemy_DataTableMap 敌人配置表*/
public static EnemyDataTableMap:Map<number,Enemy_DataTableType>             = new Map<number,Enemy_DataTableType>();
/** Level_DataTableMap 等级表*/
public static LevelDataTableMap:Map<number,Level_DataTableType>             = new Map<number,Level_DataTableType>();
/** LocalizationRes_DataTableMap 本地化资源配置表*/
public static LocalizationResDataTableMap:Map<number,LocalizationRes_DataTableType>             = new Map<number,LocalizationRes_DataTableType>();
/** LuckyBox_DataTableMap 幸运宝箱配置*/
public static LuckyBoxDataTableMap:Map<number,LuckyBox_DataTableType>             = new Map<number,LuckyBox_DataTableType>();
/** Player_DataTableMap 角色表*/
public static PlayerDataTableMap:Map<number,Player_DataTableType>             = new Map<number,Player_DataTableType>();
/** Ranking_DataTableMap 排行榜*/
public static RankingDataTableMap:Map<number,Ranking_DataTableType>             = new Map<number,Ranking_DataTableType>();
/** Scene3d_DataTableMap 3d场景*/
public static Scene3dDataTableMap:Map<number,Scene3d_DataTableType>             = new Map<number,Scene3d_DataTableType>();
/** Shop_DataTableMap 商店表*/
public static ShopDataTableMap:Map<number,Shop_DataTableType>             = new Map<number,Shop_DataTableType>();
/** Weapon_DataTableMap 武器配置表*/
public static WeaponDataTableMap:Map<number,Weapon_DataTableType>             = new Map<number,Weapon_DataTableType>();
/**初始化 */
static Init() {
DataTable.AssetsPathDataTableMap.set(100,{id:100,name:"GameEntry",msg:"初始场景",path:"assets\\scene\\GameEntry.ls",preload:0,});
DataTable.AssetsPathDataTableMap.set(1001,{id:1001,name:"DebugView",msg:"调试界面",path:"assets\\resources\\view\\DebugView.lh",preload:1,});
DataTable.AssetsPathDataTableMap.set(1002,{id:1002,name:"Toggle",msg:"单选",path:"assets\\resources\\prefab\\Toggle.lh",preload:1,});
DataTable.AssetsPathDataTableMap.set(1003,{id:1003,name:"Slider",msg:"滑条",path:"assets\\resources\\prefab\\Slider.lh",preload:1,});
DataTable.AssetsPathDataTableMap.set(1004,{id:1004,name:"TipsView",msg:"提示界面",path:"assets\\resources\\view\\TipsView.lh",preload:1,});
DataTable.AssetsPathDataTableMap.set(1005,{id:1005,name:"SureView",msg:"确认提示框",path:"assets\\resources\\view\\SureView.lh",preload:1,});
DataTable.AssetsPathDataTableMap.set(1006,{id:1006,name:"LoadView",msg:"加载界面",path:"assets\\resources\\view\\LoadView.lh",preload:1,});
DataTable.AssetsPathDataTableMap.set(1007,{id:1007,name:"CompleteView",msg:"胜利界面",path:"assets\\resources\\view\\CompleteView.lh",preload:1,});
DataTable.AssetsPathDataTableMap.set(1008,{id:1008,name:"GameView",msg:"游戏界面",path:"assets\\resources\\view\\GameView.lh",preload:1,});
DataTable.AssetsPathDataTableMap.set(1009,{id:1009,name:"LanguageView",msg:"语言界面",path:"assets\\resources\\view\\LanguageView.lh",preload:1,});
DataTable.AssetsPathDataTableMap.set(1010,{id:1010,name:"LevelUpView",msg:"升级界面",path:"assets\\resources\\view\\LevelUpView.lh",preload:1,});
DataTable.AssetsPathDataTableMap.set(1011,{id:1011,name:"LoseView",msg:"失败界面",path:"assets\\resources\\view\\LoseView.lh",preload:1,});
DataTable.AssetsPathDataTableMap.set(1012,{id:1012,name:"LuckyBoxView",msg:"幸运宝箱界面",path:"assets\\resources\\view\\LuckyBoxView.lh",preload:1,});
DataTable.AssetsPathDataTableMap.set(1013,{id:1013,name:"MainView",msg:"主界面",path:"assets\\resources\\view\\MainView.lh",preload:1,});
DataTable.AssetsPathDataTableMap.set(1014,{id:1014,name:"MyInfoView",msg:"用户信息界面",path:"assets\\resources\\view\\MyInfoView.lh",preload:1,});
DataTable.AssetsPathDataTableMap.set(1015,{id:1015,name:"PauseView",msg:"暂停界面",path:"assets\\resources\\view\\PauseView.lh",preload:1,});
DataTable.AssetsPathDataTableMap.set(1016,{id:1016,name:"PrivacyAgreementView",msg:"隐私协议界面",path:"assets\\resources\\view\\PrivacyAgreementView.lh",preload:1,});
DataTable.AssetsPathDataTableMap.set(1017,{id:1017,name:"RankingView",msg:"排行榜",path:"assets\\resources\\view\\RankingView.lh",preload:1,});
DataTable.AssetsPathDataTableMap.set(1018,{id:1018,name:"SettingView",msg:"设置界面",path:"assets\\resources\\view\\SettingView.lh",preload:1,});
DataTable.AssetsPathDataTableMap.set(1019,{id:1019,name:"ShopView",msg:"商城界面",path:"assets\\resources\\view\\ShopView.lh",preload:1,});
DataTable.AssetsPathDataTableMap.set(1020,{id:1020,name:"SignInView",msg:"签到界面",path:"assets\\resources\\view\\SignInView.lh",preload:1,});
DataTable.AssetsPathDataTableMap.set(1021,{id:1021,name:"SelectPlayerView",msg:"选择人物武器界面",path:"assets\\resources\\view\\SelectPlayerView.lh",preload:1,});
DataTable.AssetsPathDataTableMap.set(1022,{id:1022,name:"ResurrectionView",msg:"复活界面",path:"assets\\resources\\view\\ResurrectionView.lh",preload:1,});
DataTable.AssetsPathDataTableMap.set(2001,{id:2001,name:"ChineseSimplifiedFlag",msg:"中国国旗",path:"assets\\resources\\img\\languageview\\language_chn.png",preload:1,});
DataTable.AssetsPathDataTableMap.set(2002,{id:2002,name:"EnglishFlag",msg:"美国国旗",path:"assets\\resources\\img\\languageview\\language_eng.png",preload:1,});
DataTable.AssetsPathDataTableMap.set(2003,{id:2003,name:"luckybox_bronze",msg:"青铜宝箱",path:"assets\\resources\\img\\luckyboxview\\luckybox_bronze.png",preload:1,});
DataTable.AssetsPathDataTableMap.set(2004,{id:2004,name:"luckybox_silver",msg:"白银宝箱",path:"assets\\resources\\img\\luckyboxview\\luckybox_silver.png",preload:1,});
DataTable.AssetsPathDataTableMap.set(2005,{id:2005,name:"luckybox_gold",msg:"黄金宝箱",path:"assets\\resources\\img\\luckyboxview\\luckybox_gold.png",preload:1,});
DataTable.AssetsPathDataTableMap.set(2006,{id:2006,name:"luckybox_diamond",msg:"钻石宝箱",path:"assets\\resources\\img\\luckyboxview\\luckybox_diamond.png",preload:1,});
DataTable.AssetsPathDataTableMap.set(2007,{id:2007,name:"luckybox_platinum",msg:"白金宝箱",path:"assets\\resources\\img\\luckyboxview\\luckybox_platinum.png",preload:1,});
DataTable.AssetsPathDataTableMap.set(2008,{id:2008,name:"icon_rank_gd",msg:"第一名",path:"assets\\resources\\img\\rankingview\\icon_rank_gd.png",preload:1,});
DataTable.AssetsPathDataTableMap.set(2009,{id:2009,name:"icon_rank_sv",msg:"第二名",path:"assets\\resources\\img\\rankingview\\icon_rank_sv.png",preload:1,});
DataTable.AssetsPathDataTableMap.set(2010,{id:2010,name:"icon_rank_bz",msg:"第三名",path:"assets\\resources\\img\\rankingview\\icon_rank_bz.png",preload:1,});
DataTable.AssetsPathDataTableMap.set(2011,{id:2011,name:"icon_rank_default",msg:"其他名次",path:"assets\\resources\\img\\rankingview\\icon_rank_default.png",preload:1,});
DataTable.AssetsPathDataTableMap.set(2012,{id:2012,name:"icon_reward_coin",msg:"金币图标",path:"assets\\resources\\img\\common\\icon_reward_coin.png",preload:1,});
DataTable.AssetsPathDataTableMap.set(2013,{id:2013,name:"icon_reward_gem",msg:"钻石图标",path:"assets\\resources\\img\\common\\icon_reward_gem.png",preload:1,});
DataTable.AssetsPathDataTableMap.set(2014,{id:2014,name:"icon_reward_key",msg:"钥匙图标",path:"assets\\resources\\img\\common\\icon_reward_key.png",preload:1,});
DataTable.AssetsPathDataTableMap.set(2015,{id:2015,name:"icon_reward_soulgem",msg:"魂钻图标",path:"assets\\resources\\img\\common\\icon_reward_soulgem.png",preload:1,});
DataTable.AssetsPathDataTableMap.set(2016,{id:2016,name:"icon_reward_dollar",msg:"钞票美元图标",path:"assets\\resources\\img\\common\\icon_reward_dollar.png",preload:1,});
DataTable.AssetsPathDataTableMap.set(2017,{id:2017,name:"shop_img_coin_01",msg:"商品图标",path:"assets\\resources\\img\\shopview\\shop_img_coin_01.png",preload:1,});
DataTable.AssetsPathDataTableMap.set(2018,{id:2018,name:"shop_img_coin_02",msg:"商品图标",path:"assets\\resources\\img\\shopview\\shop_img_coin_02.png",preload:1,});
DataTable.AssetsPathDataTableMap.set(2019,{id:2019,name:"shop_img_coin_03",msg:"商品图标",path:"assets\\resources\\img\\shopview\\shop_img_coin_03.png",preload:1,});
DataTable.AssetsPathDataTableMap.set(2020,{id:2020,name:"shop_img_coin_04",msg:"商品图标",path:"assets\\resources\\img\\shopview\\shop_img_coin_04.png",preload:1,});
DataTable.AssetsPathDataTableMap.set(2021,{id:2021,name:"shop_img_gem_01",msg:"商品图标",path:"assets\\resources\\img\\shopview\\shop_img_gem_01.png",preload:1,});
DataTable.AssetsPathDataTableMap.set(2022,{id:2022,name:"shop_img_gem_02",msg:"商品图标",path:"assets\\resources\\img\\shopview\\shop_img_gem_02.png",preload:1,});
DataTable.AssetsPathDataTableMap.set(2023,{id:2023,name:"shop_img_gem_03",msg:"商品图标",path:"assets\\resources\\img\\shopview\\shop_img_gem_03.png",preload:1,});
DataTable.AssetsPathDataTableMap.set(2024,{id:2024,name:"shop_img_gem_04",msg:"商品图标",path:"assets\\resources\\img\\shopview\\shop_img_gem_04.png",preload:1,});
DataTable.AssetsPathDataTableMap.set(2501,{id:2501,name:"bgm1",msg:"背景1",path:"assets\\resources\\music\\PL_3AM_Kit_1_124bpm_Arp.mp3",preload:0,});
DataTable.AssetsPathDataTableMap.set(2502,{id:2502,name:"bgm2",msg:"背景2",path:"assets\\resources\\music\\PL_3AM_Kit_1_124bpm_Crash.mp3",preload:0,});
DataTable.AssetsPathDataTableMap.set(2503,{id:2503,name:"bgm3",msg:"背景3",path:"assets\\resources\\music\\PL_3AM_Kit_1_124bpm_Drumbeat.mp3",preload:0,});
DataTable.AssetsPathDataTableMap.set(2504,{id:2504,name:"bgm4",msg:"背景4",path:"assets\\resources\\music\\PL_3AM_Kit_1_124bpm_Lead.mp3",preload:0,});
DataTable.AssetsPathDataTableMap.set(2505,{id:2505,name:"bgm5",msg:"背景5",path:"assets\\resources\\music\\PL_3AM_Kit_1_124bpm_Pad.mp3",preload:0,});
DataTable.AssetsPathDataTableMap.set(2601,{id:2601,name:"countdown",msg:"倒计时",path:"assets\\resources\\sound\\countdown.mp3",preload:0,});
DataTable.AssetsPathDataTableMap.set(2602,{id:2602,name:"DoubleBarrel",msg:"喷子射击",path:"assets\\resources\\sound\\DoubleBarrel.mp3",preload:0,});
DataTable.AssetsPathDataTableMap.set(2603,{id:2603,name:"Explosion1",msg:"爆炸1",path:"assets\\resources\\sound\\Explosion1.mp3",preload:0,});
DataTable.AssetsPathDataTableMap.set(2604,{id:2604,name:"lose",msg:"失败",path:"assets\\resources\\sound\\lose.mp3",preload:0,});
DataTable.AssetsPathDataTableMap.set(2605,{id:2605,name:"Pistol",msg:"手枪",path:"assets\\resources\\sound\\Pistol.mp3",preload:0,});
DataTable.AssetsPathDataTableMap.set(2606,{id:2606,name:"Revolver",msg:"左轮",path:"assets\\resources\\sound\\Revolver.mp3",preload:0,});
DataTable.AssetsPathDataTableMap.set(2607,{id:2607,name:"RPG",msg:"RPG",path:"assets\\resources\\sound\\RPG.mp3",preload:0,});
DataTable.AssetsPathDataTableMap.set(2608,{id:2608,name:"SMG",msg:"SMG",path:"assets\\resources\\sound\\SMG.mp3",preload:0,});
DataTable.AssetsPathDataTableMap.set(2609,{id:2609,name:"win",msg:"胜利",path:"assets\\resources\\sound\\win.mp3",preload:0,});
DataTable.AssetsPathDataTableMap.set(2610,{id:2610,name:"WizardStaff",msg:"法杖",path:"assets\\resources\\sound\\WizardStaff.mp3",preload:0,});
DataTable.AssetsPathDataTableMap.set(2611,{id:2611,name:"zombie1",msg:"丧尸1",path:"assets\\resources\\sound\\zombie1.mp3",preload:0,});
DataTable.AssetsPathDataTableMap.set(2612,{id:2612,name:"zombie2",msg:"丧尸2",path:"assets\\resources\\sound\\zombie2.mp3",preload:0,});
DataTable.AssetsPathDataTableMap.set(2613,{id:2613,name:"zombie3",msg:"丧尸3",path:"assets\\resources\\sound\\zombie3.mp3",preload:0,});
DataTable.AssetsPathDataTableMap.set(2614,{id:2614,name:"hi't",msg:"被咬",path:"assets\\resources\\sound\\hit.mp3",preload:0,});
DataTable.AssetsPathDataTableMap.set(4001,{id:4001,name:"PrivacyAgreement",msg:"国内隐私协议",path:"assets\\resources\\text\\PrivacyAgreement.txt",preload:1,});
DataTable.AssetsPathDataTableMap.set(5001,{id:5001,name:"MainScene",msg:"主场景",path:"assets\\resources\\res3d\\prefab\\scene\\MainScene.lh",preload:1,});
DataTable.AssetsPathDataTableMap.set(5002,{id:5002,name:"SelectPlayerScene",msg:"选择人物武器场景",path:"assets\\resources\\res3d\\prefab\\scene\\SelectPlayerScene.lh",preload:1,});
DataTable.AssetsPathDataTableMap.set(5003,{id:5003,name:"GameScene",msg:"游戏场景",path:"assets\\resources\\res3d\\prefab\\scene\\GameScene.lh",preload:1,});
DataTable.AssetsPathDataTableMap.set(5101,{id:5101,name:"SkyBox1",msg:"天空盒1",path:"assets\\resources\\res3d\\skybox\\Sky_Anime_03_Day_a.lmat",preload:1,});
DataTable.AssetsPathDataTableMap.set(5102,{id:5102,name:"SkyBox2",msg:"天空盒2",path:"assets\\resources\\res3d\\skybox\\Sky_Anime_11_morning_a.lmat",preload:1,});
DataTable.AssetsPathDataTableMap.set(5103,{id:5103,name:"SkyBox3",msg:"天空盒3",path:"assets\\resources\\res3d\\skybox\\Sky_LowPoly_01_Day_a.lmat",preload:1,});
DataTable.AssetsPathDataTableMap.set(6001,{id:6001,name:"Zombie",msg:"丧尸",path:"assets\\resources\\res3d\\prefab\\zombie\\Zombie.lh",preload:1,});
DataTable.AssetsPathDataTableMap.set(6101,{id:6101,name:"BusinessMan",msg:"打工人",path:"assets\\resources\\res3d\\prefab\\player\\BusinessMan.lh",preload:1,});
DataTable.AssetsPathDataTableMap.set(6102,{id:6102,name:"BombDisEX",msg:"拆弹专家",path:"assets\\resources\\res3d\\prefab\\player\\BombDisEX.lh",preload:1,});
DataTable.AssetsPathDataTableMap.set(6103,{id:6103,name:"GreatMagician",msg:"大魔法师",path:"assets\\resources\\res3d\\prefab\\player\\GreatMagician.lh",preload:1,});
DataTable.AssetsPathDataTableMap.set(6104,{id:6104,name:"Kingsman",msg:"王牌特工",path:"assets\\resources\\res3d\\prefab\\player\\Kingsman.lh",preload:1,});
DataTable.AssetsPathDataTableMap.set(6105,{id:6105,name:"ScoutRobot",msg:"斥候机器人",path:"assets\\resources\\res3d\\prefab\\player\\ScoutRobot.lh",preload:1,});
DataTable.AssetsPathDataTableMap.set(6106,{id:6106,name:"RookiePirate",msg:"菜鸟海盗",path:"assets\\resources\\res3d\\prefab\\player\\RookiePirate.lh",preload:1,});
DataTable.AssetsPathDataTableMap.set(6201,{id:6201,name:"Pistol",msg:"手枪",path:"assets\\resources\\res3d\\prefab\\weapon\\Pistol.lh",preload:1,});
DataTable.AssetsPathDataTableMap.set(6202,{id:6202,name:"RPG",msg:"RPG",path:"assets\\resources\\res3d\\prefab\\weapon\\RPG.lh",preload:1,});
DataTable.AssetsPathDataTableMap.set(6203,{id:6203,name:"WizardStaff",msg:"法杖",path:"assets\\resources\\res3d\\prefab\\weapon\\WizardStaff.lh",preload:1,});
DataTable.AssetsPathDataTableMap.set(6204,{id:6204,name:"SMG",msg:"SMG",path:"assets\\resources\\res3d\\prefab\\weapon\\SMG.lh",preload:1,});
DataTable.AssetsPathDataTableMap.set(6205,{id:6205,name:"Revolver",msg:"左轮",path:"assets\\resources\\res3d\\prefab\\weapon\\Revolver.lh",preload:1,});
DataTable.AssetsPathDataTableMap.set(6206,{id:6206,name:"DoubleBarrel",msg:"双管喷",path:"assets\\resources\\res3d\\prefab\\weapon\\DoubleBarrel.lh",preload:1,});
DataTable.AssetsPathDataTableMap.set(6301,{id:6301,name:"Bullet_Pistol",msg:"手枪子弹",path:"assets\\resources\\res3d\\prefab\\bullet\\Bullet_Pistol.lh",preload:1,});
DataTable.AssetsPathDataTableMap.set(6302,{id:6302,name:"Bullet_RPG",msg:"RPG子弹",path:"assets\\resources\\res3d\\prefab\\bullet\\Bullet_RPG.lh",preload:1,});
DataTable.AssetsPathDataTableMap.set(6303,{id:6303,name:"Bullet_WizardStaff",msg:"法杖子弹",path:"assets\\resources\\res3d\\prefab\\bullet\\Bullet_WizardStaff.lh",preload:1,});
DataTable.AssetsPathDataTableMap.set(6304,{id:6304,name:"Bullet_SMG",msg:"SMG子弹",path:"assets\\resources\\res3d\\prefab\\bullet\\Bullet_SMG.lh",preload:1,});
DataTable.AssetsPathDataTableMap.set(6305,{id:6305,name:"Bullet_Revolver",msg:"左轮子弹",path:"assets\\resources\\res3d\\prefab\\bullet\\Bullet_Revolver.lh",preload:1,});
DataTable.AssetsPathDataTableMap.set(6306,{id:6306,name:"Bullet_DoubleBarrel",msg:"双管喷子弹",path:"assets\\resources\\res3d\\prefab\\bullet\\Bullet_DoubleBarrel.lh",preload:1,});
DataTable.AssetsPathDataTableMap.set(6701,{id:6701,name:"GrassGround",msg:"草地板",path:"assets\\resources\\res3d\\prefab\\ground\\GrassGround.lh",preload:1,});
DataTable.AssetsPathDataTableMap.set(6801,{id:6801,name:"Explode1",msg:"爆炸",path:"assets\\resources\\res3d\\prefab\\vfx\\Explode1.lh",preload:1,});
DataTable.BulletDataTableMap.set(1001,{id:1001,msg:"手枪子弹",path:6301,damage:10,speed:0.1,expRange:0,type:0,soundId:7001,flightDis:5,maxKillNum:-1,});
DataTable.BulletDataTableMap.set(1002,{id:1002,msg:"RPG子弹",path:6302,damage:15,speed:0.08,expRange:2.5,type:1,soundId:7001,flightDis:4.5,maxKillNum:-1,});
DataTable.BulletDataTableMap.set(1003,{id:1003,msg:"法杖子弹",path:6303,damage:20,speed:0.1,expRange:0,type:2,soundId:7001,flightDis:3.6,maxKillNum:5,});
DataTable.BulletDataTableMap.set(1004,{id:1004,msg:"SMG子弹",path:6304,damage:7,speed:0.12,expRange:0,type:0,soundId:7001,flightDis:4,maxKillNum:-1,});
DataTable.BulletDataTableMap.set(1005,{id:1005,msg:"左轮子弹",path:6305,damage:25,speed:0.2,expRange:0,type:3,soundId:7001,flightDis:7,maxKillNum:2,});
DataTable.BulletDataTableMap.set(1006,{id:1006,msg:"双管喷子弹",path:6306,damage:30,speed:0.1,expRange:2,type:4,soundId:7001,flightDis:4,maxKillNum:-1,});
DataTable.CurrencyDataTableMap.set(1001,{id:1001,key:"gold",meg:"金币",worth:1,imgId:2012,localizationKey:"GOLD",color:"FFD800",});
DataTable.CurrencyDataTableMap.set(1002,{id:1002,key:"diamond",meg:"钻石",worth:1000,imgId:2013,localizationKey:"DIAMOND",color:"4288D7",});
DataTable.CurrencyDataTableMap.set(1003,{id:1003,key:"key",meg:"钥匙",worth:10000,imgId:2014,localizationKey:"KEY",color:"7C231C",});
DataTable.CurrencyDataTableMap.set(1004,{id:1004,key:"soulgem",meg:"魂钻",worth:50000,imgId:2015,localizationKey:"SOULGEM",color:"FF0000",});
DataTable.CurrencyDataTableMap.set(1005,{id:1005,key:"dollar",meg:"钞票",worth:90000,imgId:2016,localizationKey:"DOLLAR",color:"00AD5F",});
DataTable.EnemyDataTableMap.set(1001,{id:1001,msg:"丧尸",path:6001,health:20,speed:0.015,});
DataTable.LevelDataTableMap.set(1001,{id:1001,level:1,minEx:0,maxEx:10,});
DataTable.LevelDataTableMap.set(1002,{id:1002,level:2,minEx:10,maxEx:40,});
DataTable.LevelDataTableMap.set(1003,{id:1003,level:3,minEx:40,maxEx:90,});
DataTable.LevelDataTableMap.set(1004,{id:1004,level:4,minEx:90,maxEx:160,});
DataTable.LevelDataTableMap.set(1005,{id:1005,level:5,minEx:160,maxEx:250,});
DataTable.LevelDataTableMap.set(1006,{id:1006,level:6,minEx:250,maxEx:360,});
DataTable.LevelDataTableMap.set(1007,{id:1007,level:7,minEx:360,maxEx:490,});
DataTable.LevelDataTableMap.set(1008,{id:1008,level:8,minEx:490,maxEx:640,});
DataTable.LevelDataTableMap.set(1009,{id:1009,level:9,minEx:640,maxEx:810,});
DataTable.LocalizationResDataTableMap.set(1001,{id:1001,msg:"简体中文",key:"ChineseSimplified",flagId:2001,});
DataTable.LocalizationResDataTableMap.set(1002,{id:1002,msg:"Engish",key:"English",flagId:2002,});
DataTable.LuckyBoxDataTableMap.set(1001,{id:1001,luckyboxType:"luckybox_bronze",luckyboxGetMin:100,luckyboxGetMax:500,luckyboxGetType:0,imgPath:2003,localizationKey:"LUCKYBOXBRONZE",});
DataTable.LuckyBoxDataTableMap.set(1002,{id:1002,luckyboxType:"luckybox_silver",luckyboxGetMin:500,luckyboxGetMax:1000,luckyboxGetType:0,imgPath:2004,localizationKey:"LUCKYBOXSILVER",});
DataTable.LuckyBoxDataTableMap.set(1003,{id:1003,luckyboxType:"luckybox_gold",luckyboxGetMin:1000,luckyboxGetMax:2000,luckyboxGetType:1,imgPath:2005,localizationKey:"LUCKYBOXGOLD",});
DataTable.LuckyBoxDataTableMap.set(1004,{id:1004,luckyboxType:"luckybox_diamond",luckyboxGetMin:10,luckyboxGetMax:20,luckyboxGetType:1,imgPath:2006,localizationKey:"LUCKYBOXDIAMOND",});
DataTable.LuckyBoxDataTableMap.set(1005,{id:1005,luckyboxType:"luckybox_platinum",luckyboxGetMin:20,luckyboxGetMax:50,luckyboxGetType:1,imgPath:2007,localizationKey:"LUCKYBOXPLATINUM",});
DataTable.PlayerDataTableMap.set(1001,{id:1001,key:"BusinessMan",msg:"打工人",localizationKey:2001,health:4,speed:0.035,path:6101,descriptionKey:2101,weaponId:1001,skillid:1001,unlockPrice:0,currency:1001,});
DataTable.PlayerDataTableMap.set(1002,{id:1002,key:"BombDisEX",msg:"拆弹专家",localizationKey:2002,health:8,speed:0.03,path:6102,descriptionKey:2102,weaponId:1002,skillid:1002,unlockPrice:5000,currency:1001,});
DataTable.PlayerDataTableMap.set(1003,{id:1003,key:"GreatMagician",msg:"魔法师",localizationKey:2003,health:3,speed:0.04,path:6103,descriptionKey:2103,weaponId:1003,skillid:1003,unlockPrice:20000,currency:1001,});
DataTable.PlayerDataTableMap.set(1004,{id:1004,key:"Kingsman",msg:"机器人",localizationKey:2004,health:6,speed:0.055,path:6104,descriptionKey:2104,weaponId:1004,skillid:1004,unlockPrice:50,currency:1002,});
DataTable.PlayerDataTableMap.set(1005,{id:1005,key:"ScoutRobot",msg:"特工",localizationKey:2005,health:5,speed:0.038,path:6105,descriptionKey:2105,weaponId:1005,skillid:1005,unlockPrice:100,currency:1002,});
DataTable.PlayerDataTableMap.set(1006,{id:1006,key:"RookiePirate",msg:"海盗",localizationKey:2006,health:5,speed:0.04,path:6106,descriptionKey:2106,weaponId:1006,skillid:1006,unlockPrice:200,currency:1002,});
DataTable.RankingDataTableMap.set(1001,{id:1001,imgId:2008,color:"87191B",});
DataTable.RankingDataTableMap.set(1002,{id:1002,imgId:2009,color:"2C4861",});
DataTable.RankingDataTableMap.set(1003,{id:1003,imgId:2010,color:"6A3829",});
DataTable.RankingDataTableMap.set(1004,{id:1004,imgId:2011,color:"40392D",});
DataTable.Scene3dDataTableMap.set(1001,{id:1001,msg:"主界面场景",key:"MainScene",path:5001,});
DataTable.Scene3dDataTableMap.set(1002,{id:1002,msg:"选择人物武器场景",key:"SelectPlayerScene",path:5002,});
DataTable.Scene3dDataTableMap.set(1003,{id:1003,msg:"游戏界面",key:"GameScene",path:5003,});
DataTable.ShopDataTableMap.set(1001,{id:1001,imgId:2017,shopId:1001,number:1000,isHot:0,isBest:0,price:10,priceId:1002,msg:"少量金币",page:1,localizationKey:"GOLD",bonus:0,});
DataTable.ShopDataTableMap.set(1002,{id:1002,imgId:2018,shopId:1001,number:6300,isHot:1,isBest:0,price:60,priceId:1002,msg:"大量金币",page:1,localizationKey:"GOLD",bonus:0.05,});
DataTable.ShopDataTableMap.set(1003,{id:1003,imgId:2019,shopId:1001,number:27500,isHot:0,isBest:1,price:120,priceId:1002,msg:"巨量金币",page:1,localizationKey:"GOLD",bonus:0.15,});
DataTable.ShopDataTableMap.set(1004,{id:1004,imgId:2020,shopId:1001,number:57600,isHot:0,isBest:0,price:250,priceId:1002,msg:"海量金币",page:1,localizationKey:"GOLD",bonus:0.2,});
DataTable.ShopDataTableMap.set(1005,{id:1005,imgId:2021,shopId:1002,number:180,isHot:0,isBest:0,price:2,priceId:1005,msg:"少量钻石",page:2,localizationKey:"DIAMOND",bonus:0,});
DataTable.ShopDataTableMap.set(1006,{id:1006,imgId:2022,shopId:1002,number:490,isHot:1,isBest:0,price:5,priceId:1005,msg:"大量钻石",page:2,localizationKey:"DIAMOND",bonus:0.05,});
DataTable.ShopDataTableMap.set(1007,{id:1007,imgId:2023,shopId:1002,number:1035,isHot:0,isBest:1,price:10,priceId:1005,msg:"巨量钻石",page:2,localizationKey:"DIAMOND",bonus:0.15,});
DataTable.ShopDataTableMap.set(1008,{id:1008,imgId:2024,shopId:1002,number:3240,isHot:0,isBest:0,price:30,priceId:1005,msg:"海量钻石",page:2,localizationKey:"DIAMOND",bonus:0.2,});
DataTable.WeaponDataTableMap.set(1001,{id:1001,msg:"手枪",localizationKey:2301,descriptionKey:2401,path:6201,bulletPath:1001,prep:8,reloadTime:1200,sound:2605,shotInterval:300,expSound:2603,});
DataTable.WeaponDataTableMap.set(1002,{id:1002,msg:"RPG",localizationKey:2401,descriptionKey:2402,path:6202,bulletPath:1002,prep:1,reloadTime:2500,sound:2607,shotInterval:1200,expSound:2603,});
DataTable.WeaponDataTableMap.set(1003,{id:1003,msg:"法杖",localizationKey:2501,descriptionKey:2403,path:6203,bulletPath:1003,prep:-99,reloadTime:20,sound:2610,shotInterval:2200,expSound:2603,});
DataTable.WeaponDataTableMap.set(1004,{id:1004,msg:"SMG",localizationKey:2601,descriptionKey:2404,path:6204,bulletPath:1004,prep:12,reloadTime:1500,sound:2608,shotInterval:250,expSound:2603,});
DataTable.WeaponDataTableMap.set(1005,{id:1005,msg:"左轮",localizationKey:2701,descriptionKey:2405,path:6205,bulletPath:1005,prep:5,reloadTime:700,sound:2606,shotInterval:900,expSound:2603,});
DataTable.WeaponDataTableMap.set(1006,{id:1006,msg:"双管喷",localizationKey:2801,descriptionKey:2406,path:6206,bulletPath:1006,prep:2,reloadTime:1200,sound:2602,shotInterval:400,expSound:2603,});
}}