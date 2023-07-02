(() => {
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
  var __decorateClass = (decorators, target, key, kind) => {
    var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
    for (var i = decorators.length - 1, decorator; i >= 0; i--)
      if (decorator = decorators[i])
        result = (kind ? decorator(target, key, result) : decorator(result)) || result;
    if (kind && result)
      __defProp(target, key, result);
    return result;
  };

  // src/Config/ProjectConfig.ts
  var ProjectConfig = class {
  };
  __name(ProjectConfig, "ProjectConfig");
  /**项目名称 */
  ProjectConfig.projectName = "WheelChairMan";
  /**游戏名称 */
  ProjectConfig.gameName = "WheelChairMan";
  /**项目版本 */
  ProjectConfig.projectVersion = "1.0.0";
  /**项目版本序号 */
  ProjectConfig.projectVersionIndex = 1;
  /**是否为测试版本 */
  ProjectConfig.isDebug = true;
  /**支持 */
  ProjectConfig.support = "https://github.com/NoRainLand/WheelChairMan";
  /**默认语言 */
  ProjectConfig.defaultLanguage = 1001;
  /**使用Zip分包 */
  ProjectConfig.useZip = false;

  // src/DataTable/DataTable.ts
  var _DataTable = class {
    /**初始化 */
    static Init() {
      _DataTable.AssetsPathDataTableMap.set(100, { id: 100, name: "GameEntry", msg: "\u521D\u59CB\u573A\u666F", path: "assets\\scene\\GameEntry.ls", preload: 0 });
      _DataTable.AssetsPathDataTableMap.set(1001, { id: 1001, name: "DebugView", msg: "\u8C03\u8BD5\u754C\u9762", path: "assets\\resources\\view\\DebugView.lh", preload: 1 });
      _DataTable.AssetsPathDataTableMap.set(1002, { id: 1002, name: "Toggle", msg: "\u5355\u9009", path: "assets\\resources\\prefab\\Toggle.lh", preload: 1 });
      _DataTable.AssetsPathDataTableMap.set(1003, { id: 1003, name: "Slider", msg: "\u6ED1\u6761", path: "assets\\resources\\prefab\\Slider.lh", preload: 1 });
      _DataTable.AssetsPathDataTableMap.set(1004, { id: 1004, name: "TipsView", msg: "\u63D0\u793A\u754C\u9762", path: "assets\\resources\\view\\TipsView.lh", preload: 1 });
      _DataTable.AssetsPathDataTableMap.set(1005, { id: 1005, name: "SureView", msg: "\u786E\u8BA4\u63D0\u793A\u6846", path: "assets\\resources\\view\\SureView.lh", preload: 1 });
      _DataTable.AssetsPathDataTableMap.set(1006, { id: 1006, name: "LoadView", msg: "\u52A0\u8F7D\u754C\u9762", path: "assets\\resources\\view\\LoadView.lh", preload: 1 });
      _DataTable.AssetsPathDataTableMap.set(1007, { id: 1007, name: "CompleteView", msg: "\u80DC\u5229\u754C\u9762", path: "assets\\resources\\view\\CompleteView.lh", preload: 1 });
      _DataTable.AssetsPathDataTableMap.set(1008, { id: 1008, name: "GameView", msg: "\u6E38\u620F\u754C\u9762", path: "assets\\resources\\view\\GameView.lh", preload: 1 });
      _DataTable.AssetsPathDataTableMap.set(1009, { id: 1009, name: "LanguageView", msg: "\u8BED\u8A00\u754C\u9762", path: "assets\\resources\\view\\LanguageView.lh", preload: 1 });
      _DataTable.AssetsPathDataTableMap.set(1010, { id: 1010, name: "LevelUpView", msg: "\u5347\u7EA7\u754C\u9762", path: "assets\\resources\\view\\LevelUpView.lh", preload: 1 });
      _DataTable.AssetsPathDataTableMap.set(1011, { id: 1011, name: "LoseView", msg: "\u5931\u8D25\u754C\u9762", path: "assets\\resources\\view\\LoseView.lh", preload: 1 });
      _DataTable.AssetsPathDataTableMap.set(1012, { id: 1012, name: "LuckyBoxView", msg: "\u5E78\u8FD0\u5B9D\u7BB1\u754C\u9762", path: "assets\\resources\\view\\LuckyBoxView.lh", preload: 1 });
      _DataTable.AssetsPathDataTableMap.set(1013, { id: 1013, name: "MainView", msg: "\u4E3B\u754C\u9762", path: "assets\\resources\\view\\MainView.lh", preload: 1 });
      _DataTable.AssetsPathDataTableMap.set(1014, { id: 1014, name: "MyInfoView", msg: "\u7528\u6237\u4FE1\u606F\u754C\u9762", path: "assets\\resources\\view\\MyInfoView.lh", preload: 1 });
      _DataTable.AssetsPathDataTableMap.set(1015, { id: 1015, name: "PauseView", msg: "\u6682\u505C\u754C\u9762", path: "assets\\resources\\view\\PauseView.lh", preload: 1 });
      _DataTable.AssetsPathDataTableMap.set(1016, { id: 1016, name: "PrivacyAgreementView", msg: "\u9690\u79C1\u534F\u8BAE\u754C\u9762", path: "assets\\resources\\view\\PrivacyAgreementView.lh", preload: 1 });
      _DataTable.AssetsPathDataTableMap.set(1017, { id: 1017, name: "RankingView", msg: "\u6392\u884C\u699C", path: "assets\\resources\\view\\RankingView.lh", preload: 1 });
      _DataTable.AssetsPathDataTableMap.set(1018, { id: 1018, name: "SettingView", msg: "\u8BBE\u7F6E\u754C\u9762", path: "assets\\resources\\view\\SettingView.lh", preload: 1 });
      _DataTable.AssetsPathDataTableMap.set(1019, { id: 1019, name: "ShopView", msg: "\u5546\u57CE\u754C\u9762", path: "assets\\resources\\view\\ShopView.lh", preload: 1 });
      _DataTable.AssetsPathDataTableMap.set(1020, { id: 1020, name: "SignInView", msg: "\u7B7E\u5230\u754C\u9762", path: "assets\\resources\\view\\SignInView.lh", preload: 1 });
      _DataTable.AssetsPathDataTableMap.set(1021, { id: 1021, name: "SelectPlayerView", msg: "\u9009\u62E9\u4EBA\u7269\u6B66\u5668\u754C\u9762", path: "assets\\resources\\view\\SelectPlayerView.lh", preload: 1 });
      _DataTable.AssetsPathDataTableMap.set(1022, { id: 1022, name: "ResurrectionView", msg: "\u590D\u6D3B\u754C\u9762", path: "assets\\resources\\view\\ResurrectionView.lh", preload: 1 });
      _DataTable.AssetsPathDataTableMap.set(2001, { id: 2001, name: "ChineseSimplifiedFlag", msg: "\u4E2D\u56FD\u56FD\u65D7", path: "assets\\resources\\img\\languageview\\language_chn.png", preload: 1 });
      _DataTable.AssetsPathDataTableMap.set(2002, { id: 2002, name: "EnglishFlag", msg: "\u7F8E\u56FD\u56FD\u65D7", path: "assets\\resources\\img\\languageview\\language_eng.png", preload: 1 });
      _DataTable.AssetsPathDataTableMap.set(2003, { id: 2003, name: "luckybox_bronze", msg: "\u9752\u94DC\u5B9D\u7BB1", path: "assets\\resources\\img\\luckyboxview\\luckybox_bronze.png", preload: 1 });
      _DataTable.AssetsPathDataTableMap.set(2004, { id: 2004, name: "luckybox_silver", msg: "\u767D\u94F6\u5B9D\u7BB1", path: "assets\\resources\\img\\luckyboxview\\luckybox_silver.png", preload: 1 });
      _DataTable.AssetsPathDataTableMap.set(2005, { id: 2005, name: "luckybox_gold", msg: "\u9EC4\u91D1\u5B9D\u7BB1", path: "assets\\resources\\img\\luckyboxview\\luckybox_gold.png", preload: 1 });
      _DataTable.AssetsPathDataTableMap.set(2006, { id: 2006, name: "luckybox_diamond", msg: "\u94BB\u77F3\u5B9D\u7BB1", path: "assets\\resources\\img\\luckyboxview\\luckybox_diamond.png", preload: 1 });
      _DataTable.AssetsPathDataTableMap.set(2007, { id: 2007, name: "luckybox_platinum", msg: "\u767D\u91D1\u5B9D\u7BB1", path: "assets\\resources\\img\\luckyboxview\\luckybox_platinum.png", preload: 1 });
      _DataTable.AssetsPathDataTableMap.set(2008, { id: 2008, name: "icon_rank_gd", msg: "\u7B2C\u4E00\u540D", path: "assets\\resources\\img\\rankingview\\icon_rank_gd.png", preload: 1 });
      _DataTable.AssetsPathDataTableMap.set(2009, { id: 2009, name: "icon_rank_sv", msg: "\u7B2C\u4E8C\u540D", path: "assets\\resources\\img\\rankingview\\icon_rank_sv.png", preload: 1 });
      _DataTable.AssetsPathDataTableMap.set(2010, { id: 2010, name: "icon_rank_bz", msg: "\u7B2C\u4E09\u540D", path: "assets\\resources\\img\\rankingview\\icon_rank_bz.png", preload: 1 });
      _DataTable.AssetsPathDataTableMap.set(2011, { id: 2011, name: "icon_rank_default", msg: "\u5176\u4ED6\u540D\u6B21", path: "assets\\resources\\img\\rankingview\\icon_rank_default.png", preload: 1 });
      _DataTable.AssetsPathDataTableMap.set(2012, { id: 2012, name: "icon_reward_coin", msg: "\u91D1\u5E01\u56FE\u6807", path: "assets\\resources\\img\\common\\icon_reward_coin.png", preload: 1 });
      _DataTable.AssetsPathDataTableMap.set(2013, { id: 2013, name: "icon_reward_gem", msg: "\u94BB\u77F3\u56FE\u6807", path: "assets\\resources\\img\\common\\icon_reward_gem.png", preload: 1 });
      _DataTable.AssetsPathDataTableMap.set(2014, { id: 2014, name: "icon_reward_key", msg: "\u94A5\u5319\u56FE\u6807", path: "assets\\resources\\img\\common\\icon_reward_key.png", preload: 1 });
      _DataTable.AssetsPathDataTableMap.set(2015, { id: 2015, name: "icon_reward_soulgem", msg: "\u9B42\u94BB\u56FE\u6807", path: "assets\\resources\\img\\common\\icon_reward_soulgem.png", preload: 1 });
      _DataTable.AssetsPathDataTableMap.set(2016, { id: 2016, name: "icon_reward_dollar", msg: "\u949E\u7968\u7F8E\u5143\u56FE\u6807", path: "assets\\resources\\img\\common\\icon_reward_dollar.png", preload: 1 });
      _DataTable.AssetsPathDataTableMap.set(2017, { id: 2017, name: "shop_img_coin_01", msg: "\u5546\u54C1\u56FE\u6807", path: "assets\\resources\\img\\shopview\\shop_img_coin_01.png", preload: 1 });
      _DataTable.AssetsPathDataTableMap.set(2018, { id: 2018, name: "shop_img_coin_02", msg: "\u5546\u54C1\u56FE\u6807", path: "assets\\resources\\img\\shopview\\shop_img_coin_02.png", preload: 1 });
      _DataTable.AssetsPathDataTableMap.set(2019, { id: 2019, name: "shop_img_coin_03", msg: "\u5546\u54C1\u56FE\u6807", path: "assets\\resources\\img\\shopview\\shop_img_coin_03.png", preload: 1 });
      _DataTable.AssetsPathDataTableMap.set(2020, { id: 2020, name: "shop_img_coin_04", msg: "\u5546\u54C1\u56FE\u6807", path: "assets\\resources\\img\\shopview\\shop_img_coin_04.png", preload: 1 });
      _DataTable.AssetsPathDataTableMap.set(2021, { id: 2021, name: "shop_img_gem_01", msg: "\u5546\u54C1\u56FE\u6807", path: "assets\\resources\\img\\shopview\\shop_img_gem_01.png", preload: 1 });
      _DataTable.AssetsPathDataTableMap.set(2022, { id: 2022, name: "shop_img_gem_02", msg: "\u5546\u54C1\u56FE\u6807", path: "assets\\resources\\img\\shopview\\shop_img_gem_02.png", preload: 1 });
      _DataTable.AssetsPathDataTableMap.set(2023, { id: 2023, name: "shop_img_gem_03", msg: "\u5546\u54C1\u56FE\u6807", path: "assets\\resources\\img\\shopview\\shop_img_gem_03.png", preload: 1 });
      _DataTable.AssetsPathDataTableMap.set(2024, { id: 2024, name: "shop_img_gem_04", msg: "\u5546\u54C1\u56FE\u6807", path: "assets\\resources\\img\\shopview\\shop_img_gem_04.png", preload: 1 });
      _DataTable.AssetsPathDataTableMap.set(2501, { id: 2501, name: "bgm1", msg: "\u80CC\u666F1", path: "assets\\resources\\music\\PL_3AM_Kit_1_124bpm_Arp.mp3", preload: 0 });
      _DataTable.AssetsPathDataTableMap.set(2502, { id: 2502, name: "bgm2", msg: "\u80CC\u666F2", path: "assets\\resources\\music\\PL_3AM_Kit_1_124bpm_Crash.mp3", preload: 0 });
      _DataTable.AssetsPathDataTableMap.set(2503, { id: 2503, name: "bgm3", msg: "\u80CC\u666F3", path: "assets\\resources\\music\\PL_3AM_Kit_1_124bpm_Drumbeat.mp3", preload: 0 });
      _DataTable.AssetsPathDataTableMap.set(2504, { id: 2504, name: "bgm4", msg: "\u80CC\u666F4", path: "assets\\resources\\music\\PL_3AM_Kit_1_124bpm_Lead.mp3", preload: 0 });
      _DataTable.AssetsPathDataTableMap.set(2505, { id: 2505, name: "bgm5", msg: "\u80CC\u666F5", path: "assets\\resources\\music\\PL_3AM_Kit_1_124bpm_Pad.mp3", preload: 0 });
      _DataTable.AssetsPathDataTableMap.set(2601, { id: 2601, name: "countdown", msg: "\u5012\u8BA1\u65F6", path: "assets\\resources\\sound\\countdown.mp3", preload: 0 });
      _DataTable.AssetsPathDataTableMap.set(2602, { id: 2602, name: "DoubleBarrel", msg: "\u55B7\u5B50\u5C04\u51FB", path: "assets\\resources\\sound\\DoubleBarrel.mp3", preload: 0 });
      _DataTable.AssetsPathDataTableMap.set(2603, { id: 2603, name: "Explosion1", msg: "\u7206\u70B81", path: "assets\\resources\\sound\\Explosion1.mp3", preload: 0 });
      _DataTable.AssetsPathDataTableMap.set(2604, { id: 2604, name: "lose", msg: "\u5931\u8D25", path: "assets\\resources\\sound\\lose.mp3", preload: 0 });
      _DataTable.AssetsPathDataTableMap.set(2605, { id: 2605, name: "Pistol", msg: "\u624B\u67AA", path: "assets\\resources\\sound\\Pistol.mp3", preload: 0 });
      _DataTable.AssetsPathDataTableMap.set(2606, { id: 2606, name: "Revolver", msg: "\u5DE6\u8F6E", path: "assets\\resources\\sound\\Revolver.mp3", preload: 0 });
      _DataTable.AssetsPathDataTableMap.set(2607, { id: 2607, name: "RPG", msg: "RPG", path: "assets\\resources\\sound\\RPG.mp3", preload: 0 });
      _DataTable.AssetsPathDataTableMap.set(2608, { id: 2608, name: "SMG", msg: "SMG", path: "assets\\resources\\sound\\SMG.mp3", preload: 0 });
      _DataTable.AssetsPathDataTableMap.set(2609, { id: 2609, name: "win", msg: "\u80DC\u5229", path: "assets\\resources\\sound\\win.mp3", preload: 0 });
      _DataTable.AssetsPathDataTableMap.set(2610, { id: 2610, name: "WizardStaff", msg: "\u6CD5\u6756", path: "assets\\resources\\sound\\WizardStaff.mp3", preload: 0 });
      _DataTable.AssetsPathDataTableMap.set(2611, { id: 2611, name: "zombie1", msg: "\u4E27\u5C381", path: "assets\\resources\\sound\\zombie1.mp3", preload: 0 });
      _DataTable.AssetsPathDataTableMap.set(2612, { id: 2612, name: "zombie2", msg: "\u4E27\u5C382", path: "assets\\resources\\sound\\zombie2.mp3", preload: 0 });
      _DataTable.AssetsPathDataTableMap.set(2613, { id: 2613, name: "zombie3", msg: "\u4E27\u5C383", path: "assets\\resources\\sound\\zombie3.mp3", preload: 0 });
      _DataTable.AssetsPathDataTableMap.set(2614, { id: 2614, name: "hi't", msg: "\u88AB\u54AC", path: "assets\\resources\\sound\\hit.mp3", preload: 0 });
      _DataTable.AssetsPathDataTableMap.set(4001, { id: 4001, name: "PrivacyAgreement", msg: "\u56FD\u5185\u9690\u79C1\u534F\u8BAE", path: "assets\\resources\\text\\PrivacyAgreement.txt", preload: 1 });
      _DataTable.AssetsPathDataTableMap.set(5001, { id: 5001, name: "MainScene", msg: "\u4E3B\u573A\u666F", path: "assets\\resources\\res3d\\prefab\\scene\\MainScene.lh", preload: 1 });
      _DataTable.AssetsPathDataTableMap.set(5002, { id: 5002, name: "SelectPlayerScene", msg: "\u9009\u62E9\u4EBA\u7269\u6B66\u5668\u573A\u666F", path: "assets\\resources\\res3d\\prefab\\scene\\SelectPlayerScene.lh", preload: 1 });
      _DataTable.AssetsPathDataTableMap.set(5003, { id: 5003, name: "GameScene", msg: "\u6E38\u620F\u573A\u666F", path: "assets\\resources\\res3d\\prefab\\scene\\GameScene.lh", preload: 1 });
      _DataTable.AssetsPathDataTableMap.set(5101, { id: 5101, name: "SkyBox1", msg: "\u5929\u7A7A\u76D21", path: "assets\\resources\\res3d\\skybox\\Sky_Anime_03_Day_a.lmat", preload: 1 });
      _DataTable.AssetsPathDataTableMap.set(5102, { id: 5102, name: "SkyBox2", msg: "\u5929\u7A7A\u76D22", path: "assets\\resources\\res3d\\skybox\\Sky_Anime_11_morning_a.lmat", preload: 1 });
      _DataTable.AssetsPathDataTableMap.set(5103, { id: 5103, name: "SkyBox3", msg: "\u5929\u7A7A\u76D23", path: "assets\\resources\\res3d\\skybox\\Sky_LowPoly_01_Day_a.lmat", preload: 1 });
      _DataTable.AssetsPathDataTableMap.set(6001, { id: 6001, name: "Zombie", msg: "\u4E27\u5C38", path: "assets\\resources\\res3d\\prefab\\zombie\\Zombie.lh", preload: 1 });
      _DataTable.AssetsPathDataTableMap.set(6101, { id: 6101, name: "BusinessMan", msg: "\u6253\u5DE5\u4EBA", path: "assets\\resources\\res3d\\prefab\\player\\BusinessMan.lh", preload: 1 });
      _DataTable.AssetsPathDataTableMap.set(6102, { id: 6102, name: "BombDisEX", msg: "\u62C6\u5F39\u4E13\u5BB6", path: "assets\\resources\\res3d\\prefab\\player\\BombDisEX.lh", preload: 1 });
      _DataTable.AssetsPathDataTableMap.set(6103, { id: 6103, name: "GreatMagician", msg: "\u5927\u9B54\u6CD5\u5E08", path: "assets\\resources\\res3d\\prefab\\player\\GreatMagician.lh", preload: 1 });
      _DataTable.AssetsPathDataTableMap.set(6104, { id: 6104, name: "Kingsman", msg: "\u738B\u724C\u7279\u5DE5", path: "assets\\resources\\res3d\\prefab\\player\\Kingsman.lh", preload: 1 });
      _DataTable.AssetsPathDataTableMap.set(6105, { id: 6105, name: "ScoutRobot", msg: "\u65A5\u5019\u673A\u5668\u4EBA", path: "assets\\resources\\res3d\\prefab\\player\\ScoutRobot.lh", preload: 1 });
      _DataTable.AssetsPathDataTableMap.set(6106, { id: 6106, name: "RookiePirate", msg: "\u83DC\u9E1F\u6D77\u76D7", path: "assets\\resources\\res3d\\prefab\\player\\RookiePirate.lh", preload: 1 });
      _DataTable.AssetsPathDataTableMap.set(6201, { id: 6201, name: "Pistol", msg: "\u624B\u67AA", path: "assets\\resources\\res3d\\prefab\\weapon\\Pistol.lh", preload: 1 });
      _DataTable.AssetsPathDataTableMap.set(6202, { id: 6202, name: "RPG", msg: "RPG", path: "assets\\resources\\res3d\\prefab\\weapon\\RPG.lh", preload: 1 });
      _DataTable.AssetsPathDataTableMap.set(6203, { id: 6203, name: "WizardStaff", msg: "\u6CD5\u6756", path: "assets\\resources\\res3d\\prefab\\weapon\\WizardStaff.lh", preload: 1 });
      _DataTable.AssetsPathDataTableMap.set(6204, { id: 6204, name: "SMG", msg: "SMG", path: "assets\\resources\\res3d\\prefab\\weapon\\SMG.lh", preload: 1 });
      _DataTable.AssetsPathDataTableMap.set(6205, { id: 6205, name: "Revolver", msg: "\u5DE6\u8F6E", path: "assets\\resources\\res3d\\prefab\\weapon\\Revolver.lh", preload: 1 });
      _DataTable.AssetsPathDataTableMap.set(6206, { id: 6206, name: "DoubleBarrel", msg: "\u53CC\u7BA1\u55B7", path: "assets\\resources\\res3d\\prefab\\weapon\\DoubleBarrel.lh", preload: 1 });
      _DataTable.AssetsPathDataTableMap.set(6301, { id: 6301, name: "Bullet_Pistol", msg: "\u624B\u67AA\u5B50\u5F39", path: "assets\\resources\\res3d\\prefab\\bullet\\Bullet_Pistol.lh", preload: 1 });
      _DataTable.AssetsPathDataTableMap.set(6302, { id: 6302, name: "Bullet_RPG", msg: "RPG\u5B50\u5F39", path: "assets\\resources\\res3d\\prefab\\bullet\\Bullet_RPG.lh", preload: 1 });
      _DataTable.AssetsPathDataTableMap.set(6303, { id: 6303, name: "Bullet_WizardStaff", msg: "\u6CD5\u6756\u5B50\u5F39", path: "assets\\resources\\res3d\\prefab\\bullet\\Bullet_WizardStaff.lh", preload: 1 });
      _DataTable.AssetsPathDataTableMap.set(6304, { id: 6304, name: "Bullet_SMG", msg: "SMG\u5B50\u5F39", path: "assets\\resources\\res3d\\prefab\\bullet\\Bullet_SMG.lh", preload: 1 });
      _DataTable.AssetsPathDataTableMap.set(6305, { id: 6305, name: "Bullet_Revolver", msg: "\u5DE6\u8F6E\u5B50\u5F39", path: "assets\\resources\\res3d\\prefab\\bullet\\Bullet_Revolver.lh", preload: 1 });
      _DataTable.AssetsPathDataTableMap.set(6306, { id: 6306, name: "Bullet_DoubleBarrel", msg: "\u53CC\u7BA1\u55B7\u5B50\u5F39", path: "assets\\resources\\res3d\\prefab\\bullet\\Bullet_DoubleBarrel.lh", preload: 1 });
      _DataTable.AssetsPathDataTableMap.set(6701, { id: 6701, name: "GrassGround", msg: "\u8349\u5730\u677F", path: "assets\\resources\\res3d\\prefab\\ground\\GrassGround.lh", preload: 1 });
      _DataTable.AssetsPathDataTableMap.set(6801, { id: 6801, name: "Explode1", msg: "\u7206\u70B8", path: "assets\\resources\\res3d\\prefab\\vfx\\Explode1.lh", preload: 1 });
      _DataTable.BulletDataTableMap.set(1001, { id: 1001, msg: "\u624B\u67AA\u5B50\u5F39", path: 6301, damage: 10, speed: 0.1, expRange: 0, type: 0, soundId: 7001, flightDis: 5, maxKillNum: -1 });
      _DataTable.BulletDataTableMap.set(1002, { id: 1002, msg: "RPG\u5B50\u5F39", path: 6302, damage: 15, speed: 0.08, expRange: 2.5, type: 1, soundId: 7001, flightDis: 4.5, maxKillNum: -1 });
      _DataTable.BulletDataTableMap.set(1003, { id: 1003, msg: "\u6CD5\u6756\u5B50\u5F39", path: 6303, damage: 20, speed: 0.1, expRange: 0, type: 2, soundId: 7001, flightDis: 3.6, maxKillNum: 5 });
      _DataTable.BulletDataTableMap.set(1004, { id: 1004, msg: "SMG\u5B50\u5F39", path: 6304, damage: 7, speed: 0.12, expRange: 0, type: 0, soundId: 7001, flightDis: 4, maxKillNum: -1 });
      _DataTable.BulletDataTableMap.set(1005, { id: 1005, msg: "\u5DE6\u8F6E\u5B50\u5F39", path: 6305, damage: 25, speed: 0.2, expRange: 0, type: 3, soundId: 7001, flightDis: 7, maxKillNum: 2 });
      _DataTable.BulletDataTableMap.set(1006, { id: 1006, msg: "\u53CC\u7BA1\u55B7\u5B50\u5F39", path: 6306, damage: 30, speed: 0.1, expRange: 2, type: 4, soundId: 7001, flightDis: 4, maxKillNum: -1 });
      _DataTable.CurrencyDataTableMap.set(1001, { id: 1001, key: "gold", meg: "\u91D1\u5E01", worth: 1, imgId: 2012, localizationKey: "GOLD", color: "FFD800" });
      _DataTable.CurrencyDataTableMap.set(1002, { id: 1002, key: "diamond", meg: "\u94BB\u77F3", worth: 1e3, imgId: 2013, localizationKey: "DIAMOND", color: "4288D7" });
      _DataTable.CurrencyDataTableMap.set(1003, { id: 1003, key: "key", meg: "\u94A5\u5319", worth: 1e4, imgId: 2014, localizationKey: "KEY", color: "7C231C" });
      _DataTable.CurrencyDataTableMap.set(1004, { id: 1004, key: "soulgem", meg: "\u9B42\u94BB", worth: 5e4, imgId: 2015, localizationKey: "SOULGEM", color: "FF0000" });
      _DataTable.CurrencyDataTableMap.set(1005, { id: 1005, key: "dollar", meg: "\u949E\u7968", worth: 9e4, imgId: 2016, localizationKey: "DOLLAR", color: "00AD5F" });
      _DataTable.EnemyDataTableMap.set(1001, { id: 1001, msg: "\u4E27\u5C38", path: 6001, health: 20, speed: 0.015 });
      _DataTable.LevelDataTableMap.set(1001, { id: 1001, level: 1, minEx: 0, maxEx: 10 });
      _DataTable.LevelDataTableMap.set(1002, { id: 1002, level: 2, minEx: 10, maxEx: 40 });
      _DataTable.LevelDataTableMap.set(1003, { id: 1003, level: 3, minEx: 40, maxEx: 90 });
      _DataTable.LevelDataTableMap.set(1004, { id: 1004, level: 4, minEx: 90, maxEx: 160 });
      _DataTable.LevelDataTableMap.set(1005, { id: 1005, level: 5, minEx: 160, maxEx: 250 });
      _DataTable.LevelDataTableMap.set(1006, { id: 1006, level: 6, minEx: 250, maxEx: 360 });
      _DataTable.LevelDataTableMap.set(1007, { id: 1007, level: 7, minEx: 360, maxEx: 490 });
      _DataTable.LevelDataTableMap.set(1008, { id: 1008, level: 8, minEx: 490, maxEx: 640 });
      _DataTable.LevelDataTableMap.set(1009, { id: 1009, level: 9, minEx: 640, maxEx: 810 });
      _DataTable.LocalizationResDataTableMap.set(1001, { id: 1001, msg: "\u7B80\u4F53\u4E2D\u6587", key: "ChineseSimplified", flagId: 2001 });
      _DataTable.LocalizationResDataTableMap.set(1002, { id: 1002, msg: "Engish", key: "English", flagId: 2002 });
      _DataTable.LuckyBoxDataTableMap.set(1001, { id: 1001, luckyboxType: "luckybox_bronze", luckyboxGetMin: 100, luckyboxGetMax: 500, luckyboxGetType: 0, imgPath: 2003, localizationKey: "LUCKYBOXBRONZE" });
      _DataTable.LuckyBoxDataTableMap.set(1002, { id: 1002, luckyboxType: "luckybox_silver", luckyboxGetMin: 500, luckyboxGetMax: 1e3, luckyboxGetType: 0, imgPath: 2004, localizationKey: "LUCKYBOXSILVER" });
      _DataTable.LuckyBoxDataTableMap.set(1003, { id: 1003, luckyboxType: "luckybox_gold", luckyboxGetMin: 1e3, luckyboxGetMax: 2e3, luckyboxGetType: 1, imgPath: 2005, localizationKey: "LUCKYBOXGOLD" });
      _DataTable.LuckyBoxDataTableMap.set(1004, { id: 1004, luckyboxType: "luckybox_diamond", luckyboxGetMin: 10, luckyboxGetMax: 20, luckyboxGetType: 1, imgPath: 2006, localizationKey: "LUCKYBOXDIAMOND" });
      _DataTable.LuckyBoxDataTableMap.set(1005, { id: 1005, luckyboxType: "luckybox_platinum", luckyboxGetMin: 20, luckyboxGetMax: 50, luckyboxGetType: 1, imgPath: 2007, localizationKey: "LUCKYBOXPLATINUM" });
      _DataTable.PlayerDataTableMap.set(1001, { id: 1001, key: "BusinessMan", msg: "\u6253\u5DE5\u4EBA", localizationKey: 2001, health: 4, speed: 0.035, path: 6101, descriptionKey: 2101, weaponId: 1001, skillid: 1001, unlockPrice: 0, currency: 1001 });
      _DataTable.PlayerDataTableMap.set(1002, { id: 1002, key: "BombDisEX", msg: "\u62C6\u5F39\u4E13\u5BB6", localizationKey: 2002, health: 8, speed: 0.03, path: 6102, descriptionKey: 2102, weaponId: 1002, skillid: 1002, unlockPrice: 5e3, currency: 1001 });
      _DataTable.PlayerDataTableMap.set(1003, { id: 1003, key: "GreatMagician", msg: "\u9B54\u6CD5\u5E08", localizationKey: 2003, health: 3, speed: 0.04, path: 6103, descriptionKey: 2103, weaponId: 1003, skillid: 1003, unlockPrice: 2e4, currency: 1001 });
      _DataTable.PlayerDataTableMap.set(1004, { id: 1004, key: "Kingsman", msg: "\u673A\u5668\u4EBA", localizationKey: 2004, health: 6, speed: 0.055, path: 6104, descriptionKey: 2104, weaponId: 1004, skillid: 1004, unlockPrice: 50, currency: 1002 });
      _DataTable.PlayerDataTableMap.set(1005, { id: 1005, key: "ScoutRobot", msg: "\u7279\u5DE5", localizationKey: 2005, health: 5, speed: 0.038, path: 6105, descriptionKey: 2105, weaponId: 1005, skillid: 1005, unlockPrice: 100, currency: 1002 });
      _DataTable.PlayerDataTableMap.set(1006, { id: 1006, key: "RookiePirate", msg: "\u6D77\u76D7", localizationKey: 2006, health: 5, speed: 0.04, path: 6106, descriptionKey: 2106, weaponId: 1006, skillid: 1006, unlockPrice: 200, currency: 1002 });
      _DataTable.RankingDataTableMap.set(1001, { id: 1001, imgId: 2008, color: "87191B" });
      _DataTable.RankingDataTableMap.set(1002, { id: 1002, imgId: 2009, color: "2C4861" });
      _DataTable.RankingDataTableMap.set(1003, { id: 1003, imgId: 2010, color: "6A3829" });
      _DataTable.RankingDataTableMap.set(1004, { id: 1004, imgId: 2011, color: "40392D" });
      _DataTable.Scene3dDataTableMap.set(1001, { id: 1001, msg: "\u4E3B\u754C\u9762\u573A\u666F", key: "MainScene", path: 5001 });
      _DataTable.Scene3dDataTableMap.set(1002, { id: 1002, msg: "\u9009\u62E9\u4EBA\u7269\u6B66\u5668\u573A\u666F", key: "SelectPlayerScene", path: 5002 });
      _DataTable.Scene3dDataTableMap.set(1003, { id: 1003, msg: "\u6E38\u620F\u754C\u9762", key: "GameScene", path: 5003 });
      _DataTable.ShopDataTableMap.set(1001, { id: 1001, imgId: 2017, shopId: 1001, number: 1e3, isHot: 0, isBest: 0, price: 10, priceId: 1002, msg: "\u5C11\u91CF\u91D1\u5E01", page: 1, localizationKey: "GOLD", bonus: 0 });
      _DataTable.ShopDataTableMap.set(1002, { id: 1002, imgId: 2018, shopId: 1001, number: 6300, isHot: 1, isBest: 0, price: 60, priceId: 1002, msg: "\u5927\u91CF\u91D1\u5E01", page: 1, localizationKey: "GOLD", bonus: 0.05 });
      _DataTable.ShopDataTableMap.set(1003, { id: 1003, imgId: 2019, shopId: 1001, number: 27500, isHot: 0, isBest: 1, price: 120, priceId: 1002, msg: "\u5DE8\u91CF\u91D1\u5E01", page: 1, localizationKey: "GOLD", bonus: 0.15 });
      _DataTable.ShopDataTableMap.set(1004, { id: 1004, imgId: 2020, shopId: 1001, number: 57600, isHot: 0, isBest: 0, price: 250, priceId: 1002, msg: "\u6D77\u91CF\u91D1\u5E01", page: 1, localizationKey: "GOLD", bonus: 0.2 });
      _DataTable.ShopDataTableMap.set(1005, { id: 1005, imgId: 2021, shopId: 1002, number: 180, isHot: 0, isBest: 0, price: 2, priceId: 1005, msg: "\u5C11\u91CF\u94BB\u77F3", page: 2, localizationKey: "DIAMOND", bonus: 0 });
      _DataTable.ShopDataTableMap.set(1006, { id: 1006, imgId: 2022, shopId: 1002, number: 490, isHot: 1, isBest: 0, price: 5, priceId: 1005, msg: "\u5927\u91CF\u94BB\u77F3", page: 2, localizationKey: "DIAMOND", bonus: 0.05 });
      _DataTable.ShopDataTableMap.set(1007, { id: 1007, imgId: 2023, shopId: 1002, number: 1035, isHot: 0, isBest: 1, price: 10, priceId: 1005, msg: "\u5DE8\u91CF\u94BB\u77F3", page: 2, localizationKey: "DIAMOND", bonus: 0.15 });
      _DataTable.ShopDataTableMap.set(1008, { id: 1008, imgId: 2024, shopId: 1002, number: 3240, isHot: 0, isBest: 0, price: 30, priceId: 1005, msg: "\u6D77\u91CF\u94BB\u77F3", page: 2, localizationKey: "DIAMOND", bonus: 0.2 });
      _DataTable.WeaponDataTableMap.set(1001, { id: 1001, msg: "\u624B\u67AA", localizationKey: 2301, descriptionKey: 2401, path: 6201, bulletPath: 1001, prep: 8, reloadTime: 1200, sound: 2605, shotInterval: 300, expSound: 2603 });
      _DataTable.WeaponDataTableMap.set(1002, { id: 1002, msg: "RPG", localizationKey: 2401, descriptionKey: 2402, path: 6202, bulletPath: 1002, prep: 1, reloadTime: 2500, sound: 2607, shotInterval: 1200, expSound: 2603 });
      _DataTable.WeaponDataTableMap.set(1003, { id: 1003, msg: "\u6CD5\u6756", localizationKey: 2501, descriptionKey: 2403, path: 6203, bulletPath: 1003, prep: -99, reloadTime: 20, sound: 2610, shotInterval: 2200, expSound: 2603 });
      _DataTable.WeaponDataTableMap.set(1004, { id: 1004, msg: "SMG", localizationKey: 2601, descriptionKey: 2404, path: 6204, bulletPath: 1004, prep: 12, reloadTime: 1500, sound: 2608, shotInterval: 250, expSound: 2603 });
      _DataTable.WeaponDataTableMap.set(1005, { id: 1005, msg: "\u5DE6\u8F6E", localizationKey: 2701, descriptionKey: 2405, path: 6205, bulletPath: 1005, prep: 5, reloadTime: 700, sound: 2606, shotInterval: 900, expSound: 2603 });
      _DataTable.WeaponDataTableMap.set(1006, { id: 1006, msg: "\u53CC\u7BA1\u55B7", localizationKey: 2801, descriptionKey: 2406, path: 6206, bulletPath: 1006, prep: 2, reloadTime: 1200, sound: 2602, shotInterval: 400, expSound: 2603 });
    }
  };
  var DataTable = _DataTable;
  __name(DataTable, "DataTable");
  /** AssetsPath_DataTableMap 资源配置路径表*/
  DataTable.AssetsPathDataTableMap = /* @__PURE__ */ new Map();
  /** Bullet_DataTableMap 子弹配置表*/
  DataTable.BulletDataTableMap = /* @__PURE__ */ new Map();
  /** Currency_DataTableMap 游戏货币表*/
  DataTable.CurrencyDataTableMap = /* @__PURE__ */ new Map();
  /** Enemy_DataTableMap 敌人配置表*/
  DataTable.EnemyDataTableMap = /* @__PURE__ */ new Map();
  /** Level_DataTableMap 等级表*/
  DataTable.LevelDataTableMap = /* @__PURE__ */ new Map();
  /** LocalizationRes_DataTableMap 本地化资源配置表*/
  DataTable.LocalizationResDataTableMap = /* @__PURE__ */ new Map();
  /** LuckyBox_DataTableMap 幸运宝箱配置*/
  DataTable.LuckyBoxDataTableMap = /* @__PURE__ */ new Map();
  /** Player_DataTableMap 角色表*/
  DataTable.PlayerDataTableMap = /* @__PURE__ */ new Map();
  /** Ranking_DataTableMap 排行榜*/
  DataTable.RankingDataTableMap = /* @__PURE__ */ new Map();
  /** Scene3d_DataTableMap 3d场景*/
  DataTable.Scene3dDataTableMap = /* @__PURE__ */ new Map();
  /** Shop_DataTableMap 商店表*/
  DataTable.ShopDataTableMap = /* @__PURE__ */ new Map();
  /** Weapon_DataTableMap 武器配置表*/
  DataTable.WeaponDataTableMap = /* @__PURE__ */ new Map();

  // src/Platform/PlatformMgr.ts
  var PlatformMgr = class {
    constructor() {
      this.$isMiniGame = false;
    }
    static get instance() {
      return this._instance ? this._instance : this._instance = new PlatformMgr();
    }
    /**是否为小游戏 */
    get isMiniGame() {
      return this.$isMiniGame;
    }
    init() {
      this.iniMiniGame();
    }
    iniMiniGame() {
      this.$isMiniGame = true;
      if (Laya.Browser.onMiniGame) {
        this.miniGame = Laya.Browser.window.wx;
      } else if (Laya.Browser.onQQMiniGame) {
        this.miniGame = Laya.Browser.window.qq;
      } else if (Laya.Browser.onTTMiniGame) {
        this.miniGame = Laya.Browser.window.tt;
      } else if (Laya.Browser.onQGMiniGame) {
        this.miniGame = Laya.Browser.window.qg;
      } else if (Laya.Browser.onVVMiniGame) {
        this.miniGame = Laya.Browser.window.qg;
      } else {
        this.$isMiniGame = false;
        this.miniGame = null;
      }
    }
    getPlatformType() {
    }
  };
  __name(PlatformMgr, "PlatformMgr");

  // src/Mgr/EventMgr.ts
  var EventDispatcher = Laya.EventDispatcher;
  var EventMgr = class {
    /**
     * 检查 EventDispatcher 对象是否为特定事件类型注册了任何侦听器。
     * @param	type 事件的类型。
     * @return 如果指定类型的侦听器已注册，则值为 true；否则，值为 false。
     */
    static hasListener(type) {
      if (type != null) {
        return this.eventDispatcher.hasListener(type);
      }
      return false;
    }
    /**
    * 派发事件。
    * @param type	事件类型。
    * @param data	（可选）回调数据。<b>注意：</b>如果是需要传递多个参数 p1,p2,p3,...可以使用数组结构如：[p1,p2,p3,...] ；如果需要回调单个参数 p ，且 p 是一个数组，则需要使用结构如：[p]，其他的单个参数 p ，可以直接传入参数 p。
    * @return 此事件类型是否有侦听者，如果有侦听者则值为 true，否则值为 false。
    */
    static event(type, data) {
      if (type != null) {
        return this.eventDispatcher.event(type, data);
      }
      return false;
    }
    /**
     * 使用 EventDispatcher 对象注册指定类型的事件侦听器对象，以使侦听器能够接收事件通知。
     * @param type		事件的类型。
     * @param caller	事件侦听函数的执行域。
     * @param listener	事件侦听函数。
     * @param args		（可选）事件侦听函数的回调参数。
     * @return 此 EventDispatcher 对象。
     */
    static on(type, caller, listener, args) {
      if (type != null && caller != null && listener != null) {
        return this.eventDispatcher.on(type, caller, listener, args);
      }
      return null;
    }
    /**
     * 使用 EventDispatcher 对象注册指定类型的事件侦听器对象，以使侦听器能够接收事件通知，此侦听事件响应一次后自动移除。
     * @param type		事件的类型。
     * @param caller	事件侦听函数的执行域。
     * @param listener	事件侦听函数。
     * @param args		（可选）事件侦听函数的回调参数。
     * @return 此 EventDispatcher 对象。
     */
    static once(type, caller, listener, args) {
      if (type != null && caller != null && listener != null) {
        return this.eventDispatcher.once(type, caller, listener, args);
      }
      return null;
    }
    /**
     * 从 EventDispatcher 对象中删除侦听器。
     * @param type		事件的类型。
     * @param caller	事件侦听函数的执行域。
     * @param listener	事件侦听函数。
     * @return 此 EventDispatcher 对象。
     */
    static off(type, caller, listener, args) {
      if (type != null && caller != null && listener != null) {
        return this.eventDispatcher.off(type, caller, listener, args);
      }
      return null;
    }
    /**
     * 从 EventDispatcher 对象中删除指定事件类型的所有侦听器。
     * @param type	（可选）事件类型，如果值为 null，则移除本对象所有类型的侦听器。
     * @return 此 EventDispatcher 对象。
     */
    static offAll(type) {
      if (type != null) {
        return this.eventDispatcher.offAll(type);
      }
      return null;
    }
    /**
         * 移除caller为target的所有事件监听
         * @param	caller caller对象
         */
    static offAllCaller(caller) {
      if (caller != null) {
        return this.eventDispatcher.offAllCaller(caller);
      }
      return null;
    }
  };
  __name(EventMgr, "EventMgr");
  /**实例化 */
  EventMgr.eventDispatcher = new EventDispatcher();

  // src/Url/SceneUrl.ts
  var SceneUrl = class {
  };
  __name(SceneUrl, "SceneUrl");
  /**加载页面地址 */
  SceneUrl.LoadView = "resources/view/LoadView.lh";

  // src/Util/ResLoader.ts
  var Handler = Laya.Handler;
  var ResLoader = class {
    constructor() {
      /**总资源加载数量 */
      this.$total_num = 0;
      /**当前已经完成加载数量 */
      this.$now_num = 0;
      /**是否进行预加载了 */
      this.isLoad = false;
    }
    static get instance() {
      return this._instance ? this._instance : this._instance = new ResLoader();
    }
    /**
     * 基础加载器
     * @param url 资源地址,必须是一个string或者string[]
     * @param onCompleted 加载完成回调
     * @param _onProgress 加载进度
     */
    load(url, onCompleted, _onProgress) {
      if (!url || url.length == 0) {
        onCompleted && onCompleted.run();
        _onProgress && (_onProgress.args = [1], _onProgress.run());
      } else {
        if (url instanceof Array) {
          url.filter((item) => {
            item != "";
          });
        }
        return Laya.loader.load(url, onCompleted, _onProgress);
      }
    }
    /**获取缓存 */
    getRes(url) {
      if (url) {
        return Laya.loader.getRes(url);
      }
    }
    /**获取克隆 */
    getResCloneByUrl(url) {
      if (url) {
        let obj = Laya.loader.getRes(url);
        if (obj && obj.create) {
          return obj.create();
        }
      }
      return null;
    }
    /**获取克隆 */
    getResCloneById(id) {
      var _a, _b;
      if (id) {
        let url = this.getUrlById(id);
        if (url) {
          let obj = Laya.loader.getRes(url);
          if (obj == null ? void 0 : obj.create) {
            return (_a = obj == null ? void 0 : obj.create) == null ? void 0 : _a.call(obj);
          } else if (obj == null ? void 0 : obj.clone) {
            return (_b = obj == null ? void 0 : obj.clone) == null ? void 0 : _b.call(obj);
          } else {
            console.log("\u65E0\u6CD5\u83B7\u53D6\u514B\u9686");
            return obj;
          }
        }
      }
      return null;
    }
    /**加载完成一个 */
    $load_one_onCompleted() {
      this.$now_num++;
      this.$onProgress && (this.$onProgress.args = [1], this.$onProgress.run());
      if (this.$now_num == this.$total_num) {
        this.$onCompleted && this.$onCompleted.run();
      }
    }
    /**
     * 预先加载所有的资源
     * @param onCompleted 完成回调
     * @param _onProgress 进度回调
     */
    preloadRes(onCompleted, _onProgress) {
      if (!this.isLoad) {
        this.isLoad = true;
        this.$onCompleted = onCompleted;
        this.$onProgress = _onProgress;
        for (let [, value] of DataTable.AssetsPathDataTableMap) {
          value.path = value.path.replace("assets\\", "").replace(/\\/g, "/");
          if (value && value.preload == 1) {
            this.$total_num++;
            this.load(value.path, Handler.create(this, this.$load_one_onCompleted));
          }
        }
      }
    }
    /**通过唯一Id获取资源 */
    getResById(assetsId) {
      let obj = DataTable.AssetsPathDataTableMap.get(assetsId);
      if (obj && obj.path) {
        return this.getRes(obj.path);
      }
    }
    /**通过唯一id获取url */
    getUrlById(assetsId) {
      let obj = DataTable.AssetsPathDataTableMap.get(assetsId);
      if (obj && obj.path) {
        return obj.path;
      }
    }
  };
  __name(ResLoader, "ResLoader");

  // src/Util/Tween.ts
  var _Tween = class {
    constructor() {
      /**循环次数 -1 为无限循环 */
      this.$loopTime = 1;
    }
    /**初始化 */
    $init(target) {
      let self = this;
      let tweens = target[_Tween.cache] || (target[_Tween.cache] = []);
      tweens.push(self);
      self.$target = target;
      self.$loopTime = 1;
      self.$curTime = 0;
      self.$needCopy = true;
      self.$steps = [];
      self.$cSteps = [];
      self.$timer = Timer.get(1, self, self.$update).frameLoop();
    }
    /**回调 */
    $update() {
      let self = this;
      let steps = self.$steps, cSteps = self.$cSteps;
      if (self.$needCopy) {
        self.$needCopy = false;
        cSteps.push.apply(cSteps, steps);
      }
      let runTime = self.$timer.runTime, remove = 0;
      for (let i = 0, len = steps.length; i < len; i++) {
        let step = steps[i];
        if (step.startTime <= runTime) {
          self.$runStep(step);
        }
        if (step.endTime <= runTime) {
          remove++;
        }
      }
      remove > 0 && steps.splice(0, remove);
      steps = self.$steps;
      if (steps && steps.length == 0) {
        if (self.$loopTime > 1) {
          self.$loopTime--;
          self.$timer.reStart();
          self.$steps = cSteps.concat();
        } else {
          if (self.$loopTime == -1) {
            self.$timer.reStart();
            self.$steps = cSteps.concat();
          } else {
            self.clear();
          }
        }
      }
    }
    /**执行步骤 */
    $runStep(step) {
      let self = this;
      let type = step.type;
      switch (type) {
        case 0:
          self.$to(step);
          break;
        case 1:
          self.$set(step.param);
          break;
        case 2:
          self.$wait(step);
          break;
        case 3:
          self.$call(step.param);
          break;
        case 4:
          self.$toFun(step);
          break;
      }
    }
    /**渐变 */
    $to(step) {
      let self = this;
      let start = step.startTime;
      let ratio = Math.min((self.$timer.runTime - start) / (step.endTime - start), 1);
      let param = step.param;
      let ease = param[0];
      ease && (ratio = ease(ratio, 0, 1, 1));
      let target = self.$target, endp = param[1], dstp = param[2] || (param[2] = self.$getIncrement(target, endp));
      for (let i in dstp) {
        target[i] = endp[i] - dstp[i] * (1 - ratio);
      }
    }
    /**复制属性 */
    $set(props) {
      let self = this;
      let target = self.$target;
      for (let i in props)
        target[i] = props[i];
    }
    /**等待 */
    $wait(step) {
    }
    /**回调 */
    $call(param) {
      param[0].apply(param[1], param[2]);
    }
    /**执行步骤函数 */
    $toFun(step) {
      let self = this, props = step.param, target = self.$target, start = step.startTime;
      let ratio = Math.min((self.$timer.runTime - start) / (step.endTime - start), 1);
      for (let i in props) {
        target[i] = props[i](ratio);
      }
    }
    /**
      * 添加步骤
      * @param type 类型
      * @param duration 持续时间
      */
    $addStep(type, duration, param) {
      let self = this;
      let startTime = self.$curTime;
      let endTime = self.$curTime = startTime + duration;
      self.$steps.push({ type, startTime, endTime, param });
    }
    /**
        * 获取属性增量，若起始属性没有结束属性的值，则忽略该属性
        * @param start 起始属性
        * @param end 结束属性
        */
    $getIncrement(start, end) {
      let copy = {};
      let keys = Object.keys(end);
      let hasv = /* @__PURE__ */ __name((obj) => {
        return !!obj || obj != null && obj != void 0;
      }, "hasv");
      for (let i in keys) {
        let key = keys[i];
        let value = start[key];
        if (hasv(value)) {
          copy[key] = end[key] - value;
        }
      }
      return copy;
    }
    //-------------外部方法--------------
    /**获取一个缓动 */
    static get(target) {
      var tween = Laya.Pool.getItemByClass(_Tween.sign, _Tween);
      tween.$init(target);
      return tween;
    }
    /**
    * 用公式的形式来执行属性变化
    * @param props 对象属性集合，key值为属性，value值为公式函数（参数是时间比例0~1，返回当前时间比例的属性值）
    * @example 
    * var sp = new Laya.Sprite;
    * sp.graphics.drawCircle(0, 0, 10, '#ff00ff');
    * Laya.stage.addChild(sp);
    * Tween.get(sp).set({x: 100, y: 100}).toFrom({x:function(t) {return 100 * t + 100}})
    */
    toFun(props, duration) {
      var self = this;
      if (isNaN(duration) || duration <= 0) {
        let obj = {};
        for (let i in props) {
          obj[i] = props[i](1);
        }
        self.set(obj);
      } else {
        self.$addStep(4, duration, props);
      }
      return self;
    }
    /**
     * 执行到对应的属性
     * @param props 对象属性集合，一般都是属性值都是数字
     * @param duration 持续时间，非负数，建议时间不低于一帧
     * @param ease 缓动算法
     */
    to(props, duration, ease) {
      let self = this;
      if (isNaN(duration) || duration <= 0) {
        self.set(props);
      } else {
        self.$addStep(0, duration, [ease, props]);
      }
      return self;
    }
    /**
      * 直接修改对象属性
      * @param props 对象属性集合
      */
    set(props) {
      var self = this;
      self.$addStep(1, 0, props);
      return self;
    }
    /**
       * 执行回调
       * 注：尽量避免在回调里对自身进行有持续性的操作to/wait等，会出现异常现象
       */
    call(caller, callback, params) {
      var self = this;
      callback && self.$addStep(3, 0, [callback, caller, params]);
      return self;
    }
    /**延时 */
    await() {
    }
    /**循环 */
    loop(loopTime = -1) {
      this.$loopTime = loopTime;
      return this;
    }
    pause() {
      var timer = this.$timer;
      timer && timer.pause();
    }
    resume() {
      var timer = this.$timer;
      timer && timer.resume();
    }
    /**开始 */
    start() {
      let timer = this.$timer;
      timer && timer.start();
    }
    clear() {
      var self = this;
      if (self.$timer) {
        let target = self.$target;
        let tweens = target[_Tween.cache];
        if (tweens instanceof Array) {
          let index = tweens.indexOf(self);
          if (index != -1) {
            tweens.splice(index, 1);
          }
          tweens.length == 0 && delete target[_Tween.cache];
        }
        self.$timer.clear();
        self.$timer = self.$steps = self.$cSteps = self.$target = null;
        Laya.Pool.recover(_Tween.sign, self);
      }
    }
    static clear(target) {
      if (target) {
        let tweens = target[_Tween.cache];
        if (tweens instanceof Array) {
          for (let i = 0, len = tweens.length; i < len; i++) {
            let tween = tweens[i];
            tween instanceof _Tween && tween.clear();
          }
        }
        delete target[_Tween.cache];
      }
    }
    static clearAll(root) {
      _Tween.clear(root);
      if (root instanceof Laya.Node) {
        for (let i = 0, len = root.numChildren; i < len; i++) {
          _Tween.clearAll(root.getChildAt(i));
        }
      }
    }
    /**
     * Laya常规的Ease函数转Tween能识别的Ease函数
     * @example Tween.tuenEase(Laya.Ease.XXXX);
     */
    static turnEase(ease) {
      return function(t) {
        return ease(t, 0, 1, 1);
      };
    }
  };
  var Tween = _Tween;
  __name(Tween, "Tween");
  /**缓存标记 */
  Tween.sign = "MyTween";
  Tween.cache = "$" + _Tween.sign;

  // src/Util/Timer.ts
  var Pool = Laya.Pool;
  var _Timer = class {
    constructor() {
      /**作用域 */
      this.$caller = null;
      /**回调函数 */
      this.$callBack = null;
      /**是否在运行 */
      this.$isRunning = false;
      /**运行次数 */
      this.$runCount = 0;
      /**间隔 */
      this.$delay = 1;
      /**时间进度
       * 循环默认为0
       */
      this.timeValue = 0;
      /**上次运行时间 */
      this.$lastTime = 0;
      /**运行时间 */
      this.$runTime = 0;
      /**类型
       * 0 once
       * 1 loop
       * 2 frameOnce
       * 3 frameLoop
       */
      this.$type = 0;
      /**循环次数 */
      this.$loopTime = -99;
    }
    /**是否正在运行 */
    get isRunning() {
      return this.$isRunning;
    }
    /**运行次数 */
    get runCount() {
      return this.$runCount;
    }
    /**获取运行时间 */
    get runTime() {
      if (this.$isRunning) {
        return this.$runTime + Date.now() - this.$lastTime;
      } else {
        return this.$runTime;
      }
    }
    /**
     * 返回一个计时器
     * @param delay 延时
     * @param caller 作用域
     * @param callBack 回调函数
     * @returns Timer
     */
    static get(delay, caller, callBack) {
      let self = this;
      if (delay > 0 && caller != null && callBack != null) {
        let timer = Pool.getItemByClass(_Timer.$sign, _Timer);
        timer.$init(delay, caller, callBack);
        return timer;
      } else {
        console.log("\u53C2\u6570\u4E3A\u7A7A");
      }
    }
    /**重置数据 */
    reset() {
      this.$caller = null;
      this.$callBack = null;
      this.$isRunning = false;
      this.$runCount = 0;
      this.$delay = 1;
      this.$lastTime = 0;
      this.$runTime = 0;
      this.$loopTime = -99;
    }
    $init(delay, caller, callBack) {
      let self = this;
      self.reset();
      let timerCache = caller[_Timer.$cache] || (caller[_Timer.$cache] = []);
      timerCache.push(self);
      self.$delay = delay;
      self.$caller = caller;
      self.$callBack = callBack;
      self.$type = 0;
    }
    /**定时执行一次 */
    once() {
      this.$type = 0;
      return this;
    }
    /**定时重复执行 */
    loop(loopTime = -99) {
      this.$type = 1;
      if (loopTime > 0) {
        this.$loopTime = loopTime;
      }
      return this;
    }
    /**定时执行一次(基于帧率) */
    frameOnce() {
      this.$type = 2;
      return this;
    }
    /**定时重复执行(基于帧率) */
    frameLoop() {
      this.$type = 3;
      return this;
    }
    /**开始计时器 */
    start() {
      switch (this.$type) {
        case 0:
          Laya.timer.once(this.$delay, this, this.update);
          break;
        case 1:
          Laya.timer.loop(this.$delay, this, this.update);
          break;
        case 2:
          Laya.timer.frameOnce(this.$delay, this, this.update);
          break;
        case 3:
          Laya.timer.frameLoop(this.$delay, this, this.update);
          break;
      }
      this.$isRunning = true;
      this.$lastTime = Date.now();
      return this;
    }
    /**重新开始计时器 */
    reStart() {
      this.$runTime = this.$runCount = 0;
      this.$lastTime = Date.now();
      return this;
    }
    /**暂停 */
    pause() {
      this.$isRunning = false;
      if (this.$type == 0) {
        this.$delay = Date.now() - this.$lastTime;
        this.$delay = this.$delay >= 20 ? this.$delay : 20;
      } else if (this.$type == 2) {
        this.$delay = (Date.now() - this.$lastTime) / 16;
        this.$delay = this.$delay >= 1 ? this.$delay : 1;
      }
      this.$runTime += Date.now() - this.$lastTime;
    }
    /**重新开始 */
    resume() {
      this.$isRunning = true;
      this.$lastTime = Date.now();
      if (this.$type == 0) {
        Laya.timer.once(this.$delay, this, this.update);
      } else if (this.$type == 2) {
        Laya.timer.frameOnce(this.$delay, this, this.update);
      }
    }
    /**更新 */
    update() {
      let self = this;
      if (self.$isRunning) {
        self.$runTime += Date.now() - self.$lastTime;
        self.$lastTime = Date.now();
        self.$runCount++;
        self.$callBack.call(self.$caller);
        if (self.$type == 0 || self.$type == 2) {
          self.$isRunning = false;
          self.clear();
        } else {
          if (this.$loopTime != -99 && this.$loopTime > 0) {
            this.$loopTime--;
            if (this.$loopTime == 0) {
              self.$isRunning = false;
              self.clear();
            }
          }
        }
      }
    }
    /**清理 */
    clear() {
      let self = this;
      self.$isRunning = false;
      Laya.timer.clear(self, self.update);
      if (self.$caller) {
        let timerCache = self.$caller[_Timer.$cache];
        if (timerCache && timerCache instanceof Array) {
          let index = timerCache.indexOf(self);
          if (index != -1) {
            timerCache.splice(index, 1);
          }
          timerCache.length == 0 && delete self.$caller[_Timer.$cache];
        }
      }
      Laya.timer.frameOnce(1, self, () => {
        Pool.recover(_Timer.$sign, self);
      });
      self.reset();
    }
    /**清理 */
    static clearAll(target) {
      let timerCache = target[_Timer.$cache];
      if (timerCache && timerCache instanceof Array) {
        for (let i = 0; i < timerCache.length; i++) {
          let timer = timerCache[i];
          if (timer instanceof _Timer) {
            let caller = timer.$caller;
            if (caller && caller instanceof Tween) {
              console.log("\u4E0D\u5141\u8BB8\u6E05\u7406");
            } else {
              timer.clear();
            }
          }
        }
      }
    }
  };
  var Timer = _Timer;
  __name(Timer, "Timer");
  /**对象池标志 */
  Timer.$sign = "MyTimer";
  Timer.$cache = "$" + _Timer.$sign;

  // src/UIBase/UIBase.ts
  var Sprite = Laya.Sprite;
  var { regClass, property } = Laya;
  var UIBase = class extends Laya.Script {
    constructor() {
      super();
      this.depth = 2;
      this.isSingleton = true;
      /**传入数据 */
      this.$param = null;
      /**是否开启 */
      this.isOpen = false;
      this.AniType = 0;
      /**是否播放完特效 */
      this.$aniFinish = false;
    }
    /**开启特效 */
    openAni() {
      if (!this.Main) {
        this.Main = this.owner.getChildByName("Main");
      }
      if (this.Main) {
        switch (this.AniType) {
          default:
          case 0:
            this.$aniFinish = true;
            break;
          case 1:
            Tween.get(this.Main).set({ scaleX: 0.8, scaleY: 0.8 }).to({ scaleX: 1, scaleY: 1 }, 300, Laya.Ease.backOut).call(this, () => {
              this.$aniFinish = true;
            }).start();
            break;
          case 2:
            Tween.get(this.Main).set({ x: 1920 }).to({ x: 0 }, 300, Laya.Ease.circOut).call(this, () => {
              this.$aniFinish = true;
            }).start();
            break;
        }
      } else {
        this.$aniFinish = true;
      }
    }
    /**界面打开 */
    onOpened(param) {
    }
    /**添加监听 */
    addEvent() {
    }
    /**界面关闭 */
    onClosed() {
    }
    /**
     * 注册监听事件，不需要销毁
     * @param event 事件枚举
     * @param callback 回调
     * @param callNow 立刻回调一次
     */
    regEvent(event, callback, callNow = false, data) {
      let self = this;
      if (event && callback) {
        EventMgr.on(event, this, callback);
        self.$event || (self.$event = /* @__PURE__ */ new Map());
        self.$event.set(event, callback);
        if (callNow) {
          callback.call(this, data);
        }
      }
    }
    /**
     * 注册点击事件，并且清空之前的所有事件
     * @param node 节点
     * @param callback 回调
     * @param data 参数 默认第一位
     * @param once 是否只触发一次
     * @param time 点击间隔,默认300s，防止多次点击
     */
    regClick(node, callback, data, once, time) {
      this.addClick(node, this, callback, once, data, time);
    }
    /**
    * 添加点击事件
    * @param node 点击对象
    * @param callback 回调
    * @param caller 回调对象
    * @param once 仅监听一次
    * @param data 回调参数 
    * @param time 多次点击阻断，默认300
    * 注：事件清理请使用offAll
    */
    addClick(node, caller, callback, once, data, time = 300) {
      if (node) {
        let clickTime = 0, params = [], evtIdx = 0;
        node.offAll();
        node[once ? "once" : "on"](Laya.Event.CLICK, caller, (e) => {
          let now = Date.now();
          e.stopPropagation();
          if (now - clickTime > time && this.$aniFinish) {
            if (data !== void 0) {
              params[evtIdx] = data;
              evtIdx = 1;
            }
            params[evtIdx] = e;
            callback.apply(caller, params);
            clickTime = now;
          }
        });
      } else {
        console.log("node is undefined");
      }
    }
    /**关闭自身 */
    close() {
      UIBaseMgr.instance.close(this.$assetsId, this.id);
    }
  };
  __name(UIBase, "UIBase");
  __decorateClass([
    property({ type: Number })
  ], UIBase.prototype, "depth", 2);
  __decorateClass([
    property({ type: Boolean })
  ], UIBase.prototype, "isSingleton", 2);
  __decorateClass([
    property({ type: Number })
  ], UIBase.prototype, "AniType", 2);
  __decorateClass([
    property({ type: Sprite })
  ], UIBase.prototype, "Main", 2);
  __decorateClass([
    property({ type: Sprite })
  ], UIBase.prototype, "imgClose", 2);
  UIBase = __decorateClass([
    regClass("172331b7-4cbf-495d-96b7-70e583afa5dd", "../src/UIBase/UIBase.ts")
  ], UIBase);

  // src/UIBase/UIBaseMgr.ts
  var Pool2 = Laya.Pool;
  var Handler2 = Laya.Handler;
  var UIBaseMgr = class {
    constructor() {
      /**是否已经调用过openLoadView */
      this.$isOpenLoadView = false;
      /**对象池标记 */
      this.$sign = "View_";
    }
    static get instance() {
      return this._instance ? this._instance : this._instance = new UIBaseMgr();
    }
    /**初始化 */
    init(UIBase2) {
      this.$UIBase = UIBase2;
      this.$DebugUI = this.$UIBase.getChildByName("DebugUI");
      this.$TipsUI = this.$UIBase.getChildByName("TipsUI");
      this.$MainUI = this.$UIBase.getChildByName("MainUI");
      this.$3DUI = this.$UIBase.getChildByName("3DUI");
      this.$sceneScriptPool = /* @__PURE__ */ new Map();
      this.$scenePool = /* @__PURE__ */ new Map();
    }
    /**加载load界面 */
    openLoadView() {
      if (!this.$isOpenLoadView) {
        this.$isOpenLoadView = true;
        ResLoader.instance.load(SceneUrl.LoadView, Handler2.create(this, () => {
          this.initScene(ResLoader.instance.getResCloneByUrl(SceneUrl.LoadView), 1006 /* LoadView */);
        }));
      }
    }
    /**
     * 打开一个场景
     * @param sceneId 场景名称
     * @param param 传递参数
     * @param caller 作用域
     * @param callback 回调
     */
    open(sceneId, param, caller, callback) {
      let scripts = this.$sceneScriptPool.get(sceneId);
      if (scripts && scripts[0] && scripts[0].isSingleton) {
        console.log("\u8FD9\u4E2A\u9875\u9762\u5DF2\u7ECF\u5B58\u5728\u5E76\u4E14\u4E0D\u5141\u8BB8\u91CD\u590D\u6253\u5F00");
      } else {
        let scene = Pool2.getItem(this.$sign + sceneId);
        if (scene) {
          this.initScene(scene, sceneId, param, caller, callback);
        } else {
          let scenePrefab = this.$scenePool.get(sceneId);
          if (scenePrefab) {
            scene = scenePrefab.create();
            this.initScene(scene, sceneId, param, caller, callback);
          } else {
            this.loadScene(sceneId, param, caller, callback);
          }
        }
      }
    }
    /**初始化界面 */
    initScene(scene, sceneName, param, caller, callback) {
      let base = scene.getComponent(UIBase);
      if (base) {
        switch (base.depth) {
          default:
            this.$MainUI.addChild(scene);
            break;
          case 0:
            this.$DebugUI.addChild(scene);
            break;
          case 1:
            this.$TipsUI.addChild(scene);
            break;
          case 2:
            this.$MainUI.addChild(scene);
            break;
          case 3:
            this.$3DUI.addChild(scene);
            break;
        }
        base.$param = param;
        base.$assetsId = sceneName;
        base.isOpen = true;
        base.$aniFinish = false;
        base.openAni();
        base.onOpened(param);
        base.addEvent();
        if (caller && callback) {
          callback.call(caller);
        }
        let arr = this.$sceneScriptPool.get(sceneName);
        if (arr) {
          arr.push(base);
          this.$sceneScriptPool.set(sceneName, arr);
        } else {
          this.$sceneScriptPool.set(sceneName, [base]);
        }
      } else {
        console.log("UIData\u6216\u8005UIBase\u7F3A\u5931");
      }
    }
    /**关闭页面 */
    close(sceneName, id) {
      let scripts = this.$sceneScriptPool.get(sceneName);
      if (scripts && scripts.length > 0) {
        let arr = [];
        for (let i = 0; i < scripts.length; i++) {
          let script = scripts[i];
          if (script.id == id) {
            script.isOpen = false;
            script.owner.removeSelf();
            script.onClosed();
            Timer.clearAll(script);
            let events = script.$event;
            for (let name in events) {
              EventMgr.off(name, script, events.get(name));
            }
            script.$event = null;
            script.$param = null;
            Pool2.recover(this.$sign + sceneName, script.owner);
          } else {
            arr.push(script);
          }
        }
        this.$sceneScriptPool.set(sceneName, arr);
      }
    }
    /**是否打开某个界面 */
    isOpen(sceneName) {
      let arr = this.$sceneScriptPool.get(sceneName);
      if (arr && arr.length > 0) {
        return true;
      }
      return false;
    }
    /**加载场景 */
    loadScene(sceneName, param, caller, callback) {
      this.$scenePool.set(sceneName, ResLoader.instance.getResById(sceneName));
      if (this.$scenePool.get(sceneName)) {
        this.open(sceneName, param, caller, callback);
      }
    }
    initDebugScene() {
      this.open(1001 /* DebugView */);
    }
    /**打开一个调试界面 */
    showDebug() {
      this.open(1001 /* DebugView */);
    }
    /**
     * 打开一个提示面板
     * @param msg 信息
     */
    showTips(msg) {
      this.open(1004 /* TipsView */, msg);
    }
    /**
     * 打开一个确认取消面板
     * @param title 标题
     * @param msg 信息
     * @param caller 作用域
     * @param sureCallback 确认回调
     * @param cancelCallBack 取消回调
     */
    showSureDialog(title, msg, caller, sureCallback, cancelCallBack) {
      let data = { title, msg, caller, sureCallback, cancelCallBack };
      this.open(1005 /* SureView */, data);
    }
  };
  __name(UIBaseMgr, "UIBaseMgr");

  // src/GameEntry.ts
  var { regClass: regClass2, property: property2 } = Laya;
  var GameEntry = class extends Laya.Script {
    constructor() {
      super();
      /**是否初始化 */
      this.isInit = false;
    }
    onAwake() {
      if (!this.isInit) {
        this.isInit = true;
        this.init();
      }
    }
    /**初始化 */
    init() {
      console.log(`\u5F53\u524D\u5F15\u64CE\u7248\u672C:${Laya.LayaEnv.version}, \u5F53\u524D\u9879\u76EE\u540D\u79F0:${ProjectConfig.projectName},\u5F53\u524D\u9879\u76EE\u7248\u672C:${ProjectConfig.projectVersion}/${ProjectConfig.projectVersionIndex}`);
      this.GameEntry = this.owner;
      this.UIBase = this.GameEntry.getChildByName("UIBase");
      PlatformMgr.instance.init();
      LayaZip == null ? void 0 : LayaZip.Init();
      DataTable.Init();
      console.log(LayaZip == null ? void 0 : LayaZip.Version);
      UIBaseMgr.instance.init(this.UIBase);
      UIBaseMgr.instance.openLoadView();
    }
  };
  __name(GameEntry, "GameEntry");
  GameEntry = __decorateClass([
    regClass2("5d4f5965-a166-4aeb-8715-baae3302439a", "../src/GameEntry.ts")
  ], GameEntry);

  // src/TestPhy.ts
  var Vector3 = Laya.Vector3;
  var { regClass: regClass3, property: property3 } = Laya;
  var TestPhy = class extends Laya.Script {
    constructor() {
      super();
    }
    onAdded() {
    }
    onStart() {
      if (this.bullet) {
        this.bullet2 = this.bullet.create();
        this.owner.addChild(this.bullet2);
        console.log("------1--------");
        console.log(this.bullet2);
      } else {
        console.log(this.bullet);
        console.log("-----------2-------");
      }
    }
    onUpdate() {
      this.bullet2.transform.translate(new Vector3(0.01, 0, 0));
    }
  };
  __name(TestPhy, "TestPhy");
  __decorateClass([
    property3({ type: Laya.Prefab })
  ], TestPhy.prototype, "bullet", 2);
  TestPhy = __decorateClass([
    regClass3("703165f6-1bb3-483a-b1f7-918d3418e246", "../src/TestPhy.ts")
  ], TestPhy);

  // src/Script3d/Script3d.ts
  var Vector32 = Laya.Vector3;
  var Script3d = class extends Laya.Script {
    constructor() {
      super();
      /**序列 */
      this.index = -1;
    }
    /**y挂载脚本的对象
      * 同 owner
      */
    get obj() {
      return this.owner;
    }
    /**z精灵变换。*/
    get transform() {
      return this.obj ? this.obj.transform : null;
    }
    /**d世界坐标 */
    get position() {
      return this.transform ? this.transform.position.clone() : null;
    }
    set position(v3) {
      this.transform && (this.transform.position = v3);
    }
    /**本地坐标 */
    get localPosition() {
      return this.transform ? this.transform.localPosition.clone() : null;
    }
    set localPosition(v3) {
      this.transform && (this.transform.localPosition = v3);
    }
    /**世界旋转 */
    get rotation() {
      return this.transform ? this.transform.rotation.clone() : null;
    }
    set rotation(v3) {
      this.transform && (this.transform.rotation = v3);
    }
    /**局部旋转 */
    get localRotation() {
      return this.transform ? this.transform.localRotation.clone() : null;
    }
    set localRotation(v3) {
      this.transform && (this.transform.localRotation = v3);
    }
    /**世界欧拉角 */
    get rotationEuler() {
      return this.transform ? this.transform.rotationEuler.clone() : null;
    }
    set rotationEuler(v3) {
      this.transform && (this.transform.rotationEuler = v3);
    }
    /**本地欧拉角 */
    get localRotationEuler() {
      return this.transform ? this.transform.localRotationEuler.clone() : null;
    }
    set localRotationEuler(e) {
      this.transform && (this.transform.localRotationEuler = e);
    }
    /**世界缩放（某些情况不准，少用） */
    get scale() {
      return this.transform ? this.transform.getWorldLossyScale().clone() : null;
    }
    set scale(v3) {
      this.transform && this.transform.setWorldLossyScale(v3);
    }
    /**本地缩放*/
    get localScale() {
      return this.transform ? this.transform.localScale.clone() : null;
    }
    set localScale(v3) {
      this.transform && (this.transform.localScale = v3);
    }
    /**局部空间的X轴欧拉角。*/
    get localRotationEulerX() {
      return this.transform ? this.transform.localRotationEulerX : null;
    }
    set localRotationEulerX(num) {
      this.transform && (this.transform.localRotationEulerX = num);
    }
    /**局部空间的Y轴欧拉角。*/
    get localRotationEulerY() {
      return this.transform ? this.transform.localRotationEulerY : null;
    }
    set localRotationEulerY(num) {
      this.transform && (this.transform.localRotationEulerY = num);
    }
    /**局部空间的Z轴欧拉角。*/
    get localRotationEulerZ() {
      return this.transform ? this.transform.localRotationEulerZ : null;
    }
    set localRotationEulerZ(num) {
      this.transform && (this.transform.localRotationEulerZ = num);
    }
    /**局部位置X轴分量。*/
    get localPositionX() {
      return this.transform ? this.transform.localPositionX : null;
    }
    set localPositionX(num) {
      this.transform && (this.transform.localPositionX = num);
    }
    /**局部位置Y轴分量。*/
    get localPositionY() {
      return this.transform ? this.transform.localPositionY : null;
    }
    set localPositionY(num) {
      this.transform && (this.transform.localPositionY = num);
    }
    /**局部位置Z轴分量。*/
    get localPositionZ() {
      return this.transform ? this.transform.localPositionZ : null;
    }
    set localPositionZ(num) {
      this.transform && (this.transform.localPositionZ = num);
    }
    onUpdate() {
      this.updateTime = Laya.timer.delta;
      this.update(this.updateTime);
    }
    /**更新 */
    update(time) {
    }
    onLateUpdate() {
      this.laterUpdateTime = Laya.timer.delta;
      this.laterUpdate(this.laterUpdateTime);
    }
    laterUpdate(time) {
    }
    /**
    * 世界坐标转局部坐标
    * @param {Vector3} pos2world 世界坐标
    * @param {Sprite3D} sp3d 局部空间
    * @returns {Vector3} 局部坐标
    */
    positionWorld2local(pos2world, sp3d) {
      let pos2local = new Vector32(0, 0, 0);
      let m = new Laya.Matrix4x4();
      sp3d.transform.worldMatrix.invert(m);
      Vector32.transformCoordinate(pos2world, m, pos2local);
      return pos2local;
    }
  };
  __name(Script3d, "Script3d");

  // src/Game/CameraItem.ts
  var Vector33 = Laya.Vector3;
  var { regClass: regClass4, property: property4 } = Laya;
  var CameraItem = class extends Script3d {
    constructor() {
      super();
    }
    onEnable() {
      this.camera = this.owner;
    }
    gameStart() {
      this.camera.transform.position = new Vector33(0, 12, 5.5);
      this.camera.transform.localRotationEuler = new Vector33(-65.001, 0, 0);
    }
    initFallowTarget(target) {
      if (target) {
        this.fallowTarget = target;
        this.curpos = new Laya.Vector3();
        this.fallowTarget.transform.position.cloneTo(this.curpos);
        this.delatpos = new Laya.Vector3();
      }
    }
    laterUpdate(time) {
      if (this.fallowTarget && this.curpos && this.delatpos) {
        this.fallowTarget.transform.position.vsub(this.curpos, this.delatpos);
        this.camera.transform.position.vadd(this.delatpos, this.delatpos);
        this.camera.transform.position = this.delatpos;
        this.fallowTarget.transform.position.cloneTo(this.curpos);
      }
    }
    /**是否能被相机看见 */
    IsVisible(pos) {
      let outPos = new Laya.Vector4();
      this.camera.viewport.project(pos, this.camera.projectionViewMatrix, outPos);
      if (outPos.z < 1)
        return true;
      return false;
    }
  };
  __name(CameraItem, "CameraItem");
  CameraItem = __decorateClass([
    regClass4("5c31dd90-8819-4905-b33b-ed3d5c647cc8", "../src/Game/CameraItem.ts")
  ], CameraItem);

  // src/Mgr/LocalMgr.ts
  var LocalStorage = Laya.LocalStorage;
  var LocalStorageMgr = class {
    /**
    * 获取指定键名的值。
    * @param key 键名。
    * @return 字符串型值。
    */
    static getItem(key) {
      return LocalStorage.getItem(`${ProjectConfig.projectName}_${key}`);
    }
    /**
     * 存储指定键名和键值，字符串类型。
     * @param key 键名。
     * @param value 键值。
     */
    static setItem(key, value) {
      LocalStorage.setItem(`${ProjectConfig.projectName}_${key}`, typeof value === "string" ? value : value.toString());
    }
  };
  __name(LocalStorageMgr, "LocalStorageMgr");

  // src/Data/GameData.ts
  var GameData = class {
    /**用户头像 */
    static get userHead() {
      if (!this.$userHead) {
        this.$userHead = LocalStorageMgr.getItem("USERHEAD" /* USERHEAD */);
      }
      return this.$userHead;
    }
    /**用户唯一ID */
    static get UID() {
      if (!this.$UID) {
        let uid = LocalStorageMgr.getItem("DID" /* UID */);
        if (uid) {
          this.$UID = uid;
        } else {
          this.$UID = (Math.random() * 1e8).toFixed();
          LocalStorageMgr.setItem("DID" /* UID */, this.$UID);
        }
      }
      return this.$UID;
    }
    /**用户名字 */
    static get userName() {
      if (!this.$userName) {
        this.$userName = LocalStorageMgr.getItem("USERNAME" /* USERNAME */);
        if (!this.$userName) {
          this.$userName = "userName";
          LocalStorageMgr.setItem("USERNAME" /* USERNAME */, this.$userName);
        }
      }
      return this.$userName;
    }
    /**金币 */
    static get gold() {
      if (this.$gold == -1) {
        let gold = Number(LocalStorageMgr.getItem("GOLD" /* GOLD */));
        if (isNaN(gold)) {
          this.$gold = 0;
          LocalStorageMgr.setItem("GOLD" /* GOLD */, this.$gold);
        } else {
          this.$gold = gold;
        }
      }
      return this.$gold;
    }
    static set gold(value) {
      if (!isNaN(value) && value >= 0) {
        this.$gold = value;
        LocalStorageMgr.setItem("GOLD" /* GOLD */, this.$gold);
      }
    }
    /**钻石 */
    static get diamond() {
      if (this.$diamond == -1) {
        let diamond = Number(LocalStorageMgr.getItem("DIAMOND" /* DIAMOND */));
        if (isNaN(diamond)) {
          this.$diamond = 0;
          LocalStorageMgr.setItem("DIAMOND" /* DIAMOND */, this.$diamond);
        } else {
          this.$diamond = diamond;
        }
      }
      return this.$diamond;
    }
    static set diamond(value) {
      if (!isNaN(value) && value >= 0) {
        this.$diamond = value;
        LocalStorageMgr.setItem("DIAMOND" /* DIAMOND */, this.$diamond);
      }
    }
    /**经验 */
    static get experience() {
      if (this.$experience == -1) {
        let experience = Number(LocalStorageMgr.getItem("EXPERIENCE" /* EXPERIENCE */));
        if (isNaN(experience)) {
          this.$experience = 0;
          LocalStorageMgr.setItem("EXPERIENCE" /* EXPERIENCE */, this.$experience);
        } else {
          this.$experience = experience;
        }
      }
      return this.$experience;
    }
    static set experience(value) {
      if (!isNaN(value) && value >= 0) {
        this.$experience = value;
        LocalStorageMgr.setItem("EXPERIENCE" /* EXPERIENCE */, this.$experience);
      }
    }
    /**金币 */
    static get key() {
      if (this.$key == -1) {
        let key = Number(LocalStorageMgr.getItem("KEY" /* KEY */));
        if (isNaN(key)) {
          this.$key = 0;
          LocalStorageMgr.setItem("KEY" /* KEY */, this.$key);
        } else {
          this.$key = key;
        }
      }
      return this.$key;
    }
    static set key(value) {
      if (!isNaN(value) && value >= 0) {
        this.$key = value;
        LocalStorageMgr.setItem("KEY" /* KEY */, this.$key);
      }
    }
  };
  __name(GameData, "GameData");
  GameData.$userHead = "";
  GameData.$UID = "";
  GameData.$userName = "";
  GameData.$gold = -1;
  GameData.$diamond = -1;
  GameData.$experience = -1;
  GameData.$key = -1;
  /**单局游戏时长 单位s*/
  GameData.gameTime = 180;
  /**复活倒计时 单位s*/
  GameData.countdown = 5;
  /**最大复活次数 */
  GameData.resurrectionTimes = 1;

  // src/Scene3dBase/Scene3d.ts
  var { regClass: regClass5, property: property5 } = Laya;
  var Scene3d = class extends Laya.Script {
    constructor() {
      super();
      /**传入数据 */
      this.$param = null;
      /**场景ID */
      this.sceneId = 0;
    }
    onReset() {
    }
    /**界面打开 */
    onOpened(param) {
    }
    /**添加监听 */
    addEvent() {
    }
    /**界面关闭 */
    onClosed() {
    }
    /**关闭 */
    close(isDestroy) {
      Scene3dMgr.instance.close(this.sceneId, isDestroy);
    }
    /**
        * 注册监听事件，不需要销毁
        * @param event 事件枚举
        * @param callback 回调
        * @param callNow 立刻回调一次
        */
    regEvent(event, callback, callNow = false, data) {
      let self = this;
      if (event && callback) {
        EventMgr.on(event, this, callback);
        self.$event || (self.$event = /* @__PURE__ */ new Map());
        self.$event.set(event, callback);
        if (callNow) {
          callback.call(this, data);
        }
      }
    }
  };
  __name(Scene3d, "Scene3d");
  Scene3d = __decorateClass([
    regClass5("5d2200e4-1fa0-4d47-ab3d-f4961980a2ae", "../src/Scene3dBase/Scene3d.ts")
  ], Scene3d);

  // src/Scene3dBase/Scene3dMgr.ts
  var Scene3D = Laya.Scene3D;
  var Scene3dMgr = class {
    static get instance() {
      return this._instance ? this._instance : this._instance = new Scene3dMgr();
    }
    init() {
      this.$scene3dPool = /* @__PURE__ */ new Map();
      this.initScene3D();
    }
    initScene3D() {
      this.$scene3d = new Scene3D();
      this.$scene3d.name = "baseScene3d";
      Laya.stage.addChild(this.$scene3d);
      Laya.stage.setChildIndex(this.$scene3d, 0);
      this.$scene3d.enableFog = true;
      this.$scene3d.fogStart = 200;
      this.$scene3d.fogRange = 400;
      this.$scene3d.fogColor = new Laya.Color(0.34, 0.34, 0.34);
      this.$scene3d.sceneReflectionProb.ambientIntensity = 0.7;
      this.$scene3d.sceneReflectionProb.ambientMode = 0;
      this.$scene3d.sceneReflectionProb.ambientColor = new Laya.Color(0.7, 0.7, 0.7, 0.7);
      this.$scene3d.skyRenderer.material = ResLoader.instance.getResCloneById(5103 /* SkyBox3 */);
      this.rotSkyBox();
    }
    rotSkyBox() {
      let mat = this.$scene3d.skyRenderer.material;
      mat && Timer.get(1, this, () => {
        mat._shaderValues.setNumber(Laya.SkyBoxMaterial.ROTATION, mat._shaderValues.getNumber(Laya.SkyBoxMaterial.ROTATION) + 0.01);
      }).frameLoop().start();
    }
    /**打开某个场景 */
    open(sceneId, param) {
      var _a;
      let sceneScript;
      sceneScript = this.$scene3dPool.get(sceneId);
      if (sceneScript) {
        this.initScene(sceneScript, param);
      } else {
        let id = (_a = DataTable.Scene3dDataTableMap.get(sceneId)) == null ? void 0 : _a.path;
        if (id) {
          let scene = ResLoader.instance.getResCloneById(id);
          scene && this.$scene3d.addChild(scene);
          sceneScript = scene.getComponent(Scene3d);
          if (sceneScript) {
            this.$scene3dPool.set(sceneId, sceneScript);
            sceneScript.sceneId = sceneId;
            this.initScene(sceneScript, param);
          } else {
            console.log("sceneScript is undefined");
          }
        }
      }
    }
    /**初始化一下 */
    initScene(sceneScript, param) {
      var _a;
      this.$scene3d.addChild(sceneScript.owner);
      sceneScript.owner.name = (_a = DataTable.Scene3dDataTableMap.get(sceneScript.sceneId)) == null ? void 0 : _a.key;
      sceneScript.$param = param;
      sceneScript.onOpened(param);
      sceneScript.addEvent();
    }
    /**关闭某个场景 */
    close(sceneId, isDestroy) {
      let sceneScript = this.$scene3dPool.get(sceneId);
      if (sceneScript) {
        sceneScript.onClosed();
        sceneScript.owner.removeSelf();
        let events = sceneScript.$event;
        for (let name in events) {
          EventMgr.off(name, sceneScript, events.get(name));
        }
        sceneScript.$event = null;
        sceneScript.$param = null;
        if (isDestroy) {
          sceneScript.owner.destroy();
          this.$scene3dPool.delete(sceneId);
        }
      }
    }
  };
  __name(Scene3dMgr, "Scene3dMgr");

  // src/Enum/MusicEnum.ts
  var MusicEnum = /* @__PURE__ */ ((MusicEnum2) => {
    MusicEnum2[MusicEnum2["bgm1"] = 2501] = "bgm1";
    MusicEnum2[MusicEnum2["bgm2"] = 2502] = "bgm2";
    MusicEnum2[MusicEnum2["bgm3"] = 2503] = "bgm3";
    MusicEnum2[MusicEnum2["bgm4"] = 2504] = "bgm4";
    MusicEnum2[MusicEnum2["bgm5"] = 2505] = "bgm5";
    return MusicEnum2;
  })(MusicEnum || {});

  // src/Util/ObjUtil.ts
  var Point = Laya.Point;
  var ObjUtil = class {
    /**数组去重 */
    static clearList(arr) {
      arr.every((item) => {
      });
    }
    /**Set转List */
    static set2List(_set) {
      if (_set && _set.size) {
        let arr = [];
        for (let item of _set) {
          arr.push(item);
        }
        return arr;
      }
      return null;
    }
    /**移除项目 */
    static removeItem(arr, item) {
      if (arr && arr.length && item) {
        let index = arr.indexOf(item);
        index != -1 && arr.splice(index, 1);
      }
    }
    /**
     * 随机一个圆环坐标
     * @param De 外径
     * @param d 内径
     */
    static randomRingPos(De, d) {
      let point = new Point();
      let r = Math.random() * (De - d) + d;
      let angle = Math.random() * 360;
      point.x = Math.cos(angle / 2 / Math.PI) * r;
      point.y = Math.sin(angle / 2 / Math.PI) * r;
      return point;
    }
    /**随机排序数组 */
    static shuffle(arr) {
      let i = arr.length, t, j;
      while (--i) {
        j = Math.floor(Math.random() * i);
        t = arr[i];
        arr[i] = arr[j];
        arr[j] = t;
      }
    }
    /**生成特定范围随机数 */
    static randomNum(minNum, maxNum) {
      return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10);
    }
  };
  __name(ObjUtil, "ObjUtil");

  // src/Mgr/SoundMgr.ts
  var SoundManager = Laya.SoundManager;
  var Handler3 = Laya.Handler;
  var SoundMgr = class {
    constructor() {
      this.$MusicVolume = -1;
      this.$SoundVolume = -1;
    }
    static get instance() {
      return this._instance ? this._instance : this._instance = new SoundMgr();
    }
    /**背景音乐音量 */
    get MusicVolume() {
      if (this.$MusicVolume == -1) {
        let str = LocalStorageMgr.getItem("MUSICVOLUME" /* MUSICVOLUME */);
        if (str === null) {
          this.$MusicVolume = 0.7;
          LocalStorageMgr.setItem("MUSICVOLUME" /* MUSICVOLUME */, this.$MusicVolume.toString());
        } else {
          this.$MusicVolume = Number(str);
        }
      }
      return this.$MusicVolume;
    }
    set MusicVolume(value) {
      if (!isNaN(value)) {
        this.$MusicVolume = value;
        SoundManager.musicVolume = value;
        this.musicChannel && (this.musicChannel.volume = value);
        LocalStorageMgr.setItem("MUSICVOLUME" /* MUSICVOLUME */, this.$MusicVolume.toString());
      }
    }
    /**背景音乐音量 */
    get SoundVolume() {
      if (this.$SoundVolume == -1) {
        let str = LocalStorageMgr.getItem("SOUNDVOLUME" /* SOUNDVOLUME */);
        if (str === null) {
          this.$SoundVolume = 0.7;
          LocalStorageMgr.setItem("SOUNDVOLUME" /* SOUNDVOLUME */, this.$SoundVolume.toString());
        } else {
          this.$SoundVolume = Number(str);
        }
      }
      return this.$SoundVolume;
    }
    set SoundVolume(value) {
      if (!isNaN(value)) {
        this.$SoundVolume = value;
        SoundManager.soundVolume = value;
        LocalStorageMgr.setItem("SOUNDVOLUME" /* SOUNDVOLUME */, this.$SoundVolume.toString());
      }
    }
    /**播放音乐 */
    playMusic(musicEnum, complete, loopTimes = 0) {
      let url = ResLoader.instance.getUrlById(musicEnum);
      if (url) {
        this.musicChannel = SoundManager.playMusic(url, loopTimes, complete);
        if (this.musicChannel) {
          this.musicChannel.volume = SoundManager.musicVolume;
        }
      }
    }
    /**暂停音乐 */
    pauseMusic() {
      if (this.musicChannel) {
        this.musicChannel.pause();
      }
    }
    /**继续音乐 */
    resumeMusic() {
      if (this.musicChannel) {
        this.musicChannel.resume();
      }
    }
    /**播放音效 */
    playSound(soundEnum, loopTimes = 1) {
      let url = ResLoader.instance.getUrlById(soundEnum);
      if (url) {
        SoundManager.playSound(url, loopTimes);
      }
    }
    playBgm(index = 0) {
      if (!this.musicList) {
        this.musicList = [];
        for (let value in MusicEnum) {
          if (!isNaN(Number(value))) {
            this.musicList.push(Number(value));
          }
        }
        ObjUtil.shuffle(this.musicList);
      }
      this.playMusic(this.musicList[index], Handler3.create(this, () => {
        index++;
        if (index > this.musicList.length) {
          index = 0;
        }
        this.playBgm(index);
      }), 1);
    }
  };
  __name(SoundMgr, "SoundMgr");

  // src/Util/Sprite3d.ts
  var Vector34 = Laya.Vector3;
  var _Sprite3d = class {
    static get instance() {
      return this._instance ? this._instance : this._instance = new _Sprite3d();
    }
    /**零向量 */
    static get ZERO() {
      if (!this._ZERO) {
        this._ZERO = new Vector34(0, 0, 0);
        Object.freeze(this._ZERO);
      }
      return this._ZERO;
    }
    /**一向量 */
    static get ONE() {
      if (!this._ONE) {
        this._ONE = new Vector34(1, 1, 1);
        Object.freeze(this._ONE);
      }
      return this._ONE;
    }
    /**X向量 */
    static get UnitX() {
      if (!this._UnitX) {
        this._UnitX = new Vector34(1, 0, 0);
        Object.freeze(this._UnitX);
      }
      return this._UnitX;
    }
    /**Y向量 */
    static get UnitY() {
      if (!this._UnitY) {
        this._UnitY = new Vector34(0, 1, 0);
        Object.freeze(this._UnitY);
      }
      return this._UnitY;
    }
    /**上向量 */
    static get DOWN() {
      if (!this._DOWN) {
        this._DOWN = new Vector34(0, -1, 0);
        Object.freeze(this._DOWN);
      }
      return this._DOWN;
    }
    /**Z向量 */
    static get UnitZ() {
      if (!this._UnitZ) {
        this._UnitZ = new Vector34(0, 0, 1);
        Object.freeze(this._UnitZ);
      }
      return this._UnitZ;
    }
    /**
    * 世界坐标转局部坐标
    * @param {Vector3} pos2world 世界坐标
    * @param {Sprite3D} sp3d 局部空间
    * @returns {Vector3} 局部坐标
    */
    static positionWorld2local(pos2world, sp3d) {
      let pos2local = new Vector34(0, 0, 0);
      let m = new Laya.Matrix4x4();
      sp3d.transform.worldMatrix.invert(m);
      Vector34.transformCoordinate(pos2world, m, pos2local);
      return pos2local;
    }
    /**获取目标向量 */
    static getDic(startPos, endPos, scale = 1, ignoreY = false) {
      if (startPos && endPos) {
        let v3 = new Vector34(0, 0, 0);
        Vector34.subtract(endPos, startPos, v3);
        Vector34.normalize(v3, v3);
        if (scale != 1) {
          Vector34.scale(v3, scale, v3);
        }
        if (ignoreY) {
          v3 = new Vector34(v3.x, 0, v3.z);
        }
        return v3;
      } else {
        return this.ZERO;
      }
    }
    /**获取目标Y轴的欧拉角
     *       ±180°
     *         |
     * 90° ----+---- -90°
     *         |
     *         0
     */
    static getAngle(startPos, endPos) {
      if (startPos && endPos) {
        let offX = endPos.x - startPos.x;
        let offZ = endPos.z - startPos.z;
        let angle = Math.atan2(offX, offZ) * 180 / Math.PI;
        return angle;
      }
      return null;
    }
    /**获取3DUI节点上的脚本 */
    static get3DUIScript(node, _class) {
      var _a;
      if (node && _class) {
        let uiScript = node.getComponent(Laya.UI3D);
        return (_a = uiScript == null ? void 0 : uiScript.sprite) == null ? void 0 : _a.getComponent(_class);
      }
      return null;
    }
    /**
     * 判定点是否再扇形区域上
     * @param startX 圆心X
     * @param startY 圆心Y
     * @param angle 扇形中心方向
     * @param rad 扇形弧度
     * @param r 圆半径
     * @param targetX 目标X
     * @param targetY 目标Y
     * @returns 
     */
    static pointInPie(startX, startY, angle, rad, r, targetX, targetY) {
      let dis = this.getDistance(startX, startY, targetX, targetY);
      let offAngle = Math.atan2(targetY - startY, targetX - startY) * 180 / Math.PI;
      offAngle = Math.abs(angle - offAngle);
      let rag = rad * 180 / Math.PI / 2;
      if (offAngle <= rag && dis <= r) {
        return true;
      }
      return false;
    }
    /**获取两点距离 */
    static getDistance(x1, y1, x2, y2) {
      return Math.sqrt((x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2));
    }
    //--------------------------获取节点------------------------
    //步骤1：获取目标节点的所有子节点，将所有子节点放入数组并返回
    static getChildNodesArray(target) {
      let nodeArray = [];
      for (let i = 0; i < target.numChildren; i++) {
        let node = target.getChildAt(i);
        if (node) {
          nodeArray.push(node);
        }
      }
      return nodeArray;
    }
    //步骤二：递归获取目标节点的所有子孙节点，并将他们全部放入数组并返回
    static FindAndGetAllChildren(parentNode, outNodesArray) {
      if (parentNode.numChildren > 0) {
        let nodeArray = this.getChildNodesArray(parentNode);
        nodeArray.forEach((node) => {
          outNodesArray.push(node);
          if (this.getChildNodesArray(node).length > 0) {
            this.FindAndGetAllChildren(node, outNodesArray);
          } else {
            return outNodesArray;
          }
        });
      }
      return null;
    }
    //第三步：构建一个数组来存放获取的所有节点并返回此数组
    static getAllChildrenArray(parentNode) {
      let allChildrenArray = [];
      this.FindAndGetAllChildren(parentNode, allChildrenArray);
      return allChildrenArray;
    }
    //最后一步：将所有节点封装到字典里，方便获取
    static getAllChildrenMap(parentNode) {
      let obj = parentNode;
      let id = obj.id;
      let map = this.nodeDic[id];
      if (!map) {
        let allChildrenArray = this.getAllChildrenArray(parentNode);
        map = /* @__PURE__ */ new Map();
        for (let i = 0; i < allChildrenArray.length; i++) {
          if (!map.has(allChildrenArray[i].name)) {
            map.set(allChildrenArray[i].name, allChildrenArray[i]);
          }
        }
        if (!this.nodeDic) {
          this.nodeDic = new Array();
        }
        this.nodeDic[id] = map;
      }
      return map;
    }
    //为了方便获取各种类型的节点，可以在写一个泛型方法来获取
    static getNodeByMap(nodeName, map) {
      if (!map.has(nodeName)) {
        return null;
      }
      return map.get(nodeName);
    }
    /**获取某个节点 */
    static getNodeByName(nodeName, parentNode) {
      let id = parentNode.id;
      let map = this.nodeDic[id];
      if (!map) {
        let allChildrenArray = this.getAllChildrenArray(parentNode);
        map = /* @__PURE__ */ new Map();
        for (let i = 0; i < allChildrenArray.length; i++) {
          if (!map.has(allChildrenArray[i].name)) {
            map.set(allChildrenArray[i].name, allChildrenArray[i]);
          }
        }
        this.nodeDic[id] = map;
      }
      if (!map.has(nodeName)) {
        return null;
      }
      return map.get(nodeName);
    }
    /**清除拖尾
    * @param trail 拖尾
    * @param active 清理之后是否展示
    */
    static clearTrail(trail, active = false) {
      if (trail && trail instanceof Laya.TrailSprite3D) {
        trail.active = true;
        let bt = trail.trailFilter.time;
        trail.trailFilter.time = 1e-3;
        Laya.timer.frameOnce(1, this, () => {
          trail.trailFilter.time = bt;
          trail.active = active;
        });
      }
    }
  };
  var Sprite3d = _Sprite3d;
  __name(Sprite3d, "Sprite3d");
  Sprite3d.nodeDic = {};

  // src/Mgr/VFXMgr.ts
  var Pool3 = Laya.Pool;
  var VFXMgr = class {
    constructor() {
      this.$sign = "$VFX_";
    }
    static get instance() {
      return this._instance ? this._instance : this._instance = new VFXMgr();
    }
    /**新建特效 */
    createVFX(vfxEnum, aliveTime = 500, pos, stage) {
      let vfx;
      vfx = Pool3.getItem(this.$sign + vfxEnum);
      if (!vfx) {
        vfx = ResLoader.instance.getResCloneById(vfxEnum);
      }
      if (vfx) {
        stage.addChild(vfx);
        vfx.transform.position = pos;
        vfx.transform.localRotationEuler = Sprite3d.ZERO;
        vfx.active = true;
        Timer.get(aliveTime, this, () => {
          vfx.active = false;
          vfx.removeSelf();
          Pool3.recover(this.$sign + vfxEnum, vfx);
        }).start();
      }
    }
  };
  __name(VFXMgr, "VFXMgr");

  // src/Util/Physics3DUtils.ts
  var Physics3DUtils = class {
  };
  __name(Physics3DUtils, "Physics3DUtils");
  /**自定义过滤1 */
  Physics3DUtils.COLLISIONFILTERGROUP_CUSTOMFILTER1 = Laya.Physics3DUtils.COLLISIONFILTERGROUP_CUSTOMFILTER1;
  /**自定义过滤2 */
  Physics3DUtils.COLLISIONFILTERGROUP_CUSTOMFILTER2 = Laya.Physics3DUtils.COLLISIONFILTERGROUP_CUSTOMFILTER2;
  /**自定义过滤3 */
  Physics3DUtils.COLLISIONFILTERGROUP_CUSTOMFILTER3 = Laya.Physics3DUtils.COLLISIONFILTERGROUP_CUSTOMFILTER3;
  /**自定义过滤4 */
  Physics3DUtils.COLLISIONFILTERGROUP_CUSTOMFILTER4 = Laya.Physics3DUtils.COLLISIONFILTERGROUP_CUSTOMFILTER4;
  /**自定义过滤5 */
  Physics3DUtils.COLLISIONFILTERGROUP_CUSTOMFILTER5 = Laya.Physics3DUtils.COLLISIONFILTERGROUP_CUSTOMFILTER5;
  /**自定义过滤6 */
  Physics3DUtils.COLLISIONFILTERGROUP_CUSTOMFILTER6 = Laya.Physics3DUtils.COLLISIONFILTERGROUP_CUSTOMFILTER6;
  /**自定义过滤7 */
  Physics3DUtils.COLLISIONFILTERGROUP_CUSTOMFILTER7 = Laya.Physics3DUtils.COLLISIONFILTERGROUP_CUSTOMFILTER7;
  /**自定义过滤8 */
  Physics3DUtils.COLLISIONFILTERGROUP_CUSTOMFILTER8 = Laya.Physics3DUtils.COLLISIONFILTERGROUP_CUSTOMFILTER8;
  /**自定义过滤9 */
  Physics3DUtils.COLLISIONFILTERGROUP_CUSTOMFILTER9 = Laya.Physics3DUtils.COLLISIONFILTERGROUP_CUSTOMFILTER9;
  /**自定义过滤10*/
  Physics3DUtils.COLLISIONFILTERGROUP_CUSTOMFILTER10 = Laya.Physics3DUtils.COLLISIONFILTERGROUP_CUSTOMFILTER10;
  /**所有过滤 */
  Physics3DUtils.COLLISIONFILTERGROUP_ALLFILTER = Laya.Physics3DUtils.COLLISIONFILTERGROUP_ALLFILTER;

  // src/Game/BaseItem/BaseItem.ts
  var Vector35 = Laya.Vector3;
  var Quaternion = Laya.Quaternion;
  var Pool4 = Laya.Pool;
  var BaseItem = class extends Script3d {
    constructor() {
      super();
      /**序号 */
      this.index = -1;
      /**对象类型 */
      this.objType = -1;
    }
    onAwake() {
      this.$events = {};
      this.objName = "";
      this.addEvent();
    }
    addEvent() {
    }
    /**初始化位置
         * @param data 数据
         * @param isRotPoint 是否为旋转节点
         * @param isLocalPos 是否为本地节点
         * @param lscale 是否修正缩放
         */
    initPos(data, isRotPoint = false, isLocalPos = false, lscale = 1) {
      this.posData = data;
      let pos = new Vector35(this.posData.x, this.posData.y, this.posData.z);
      let rot = new Quaternion(this.posData.rotX, this.posData.rotY, this.posData.rotZ, this.posData.rotW);
      let scale = new Vector35(this.posData.scaleX * lscale, this.posData.scaleY * lscale, this.posData.scaleZ * lscale);
      if (isLocalPos) {
        pos && (this.localPosition = pos);
      } else {
        pos && (this.position = pos);
      }
      if (isRotPoint) {
        let rotPoint = this.obj.getChildAt(0);
        rotPoint && (rotPoint.transform.rotation = rot);
      } else {
        rot && (this.rotation = rot);
      }
      scale && (this.localScale = scale);
      this.initOthers();
    }
    initOthers() {
    }
    /**
     * 注册自身事件
     * 回收对象的时候会自动移除
     * @param eventName 
     * @param func 
     */
    regEvent(eventName, func) {
      var self = this;
      self.$events[eventName] = func;
      EventMgr.on(eventName, self, func);
    }
    /**移除监听 */
    unRegEvent() {
      var self = this, eventMgr = EventMgr, events = self.$events;
      for (let name in events) {
        eventMgr.off(name, self, events[name]);
      }
      self.$events = null;
    }
    /**清理回收对象 */
    clear(isDestroy = false) {
      this.clearOthers();
      this.unRegEvent();
      Laya.timer.clearAll(this);
      Timer.clearAll(this);
      Tween.clearAll(this.transform);
      this.index = -1;
      this.objData = null;
      this.posData = null;
      if (this.obj) {
        this.obj.removeSelf();
        if (isDestroy) {
          this.obj.destroy(true);
        } else {
          if (this.objName != "") {
            Pool4.recover(this.objName, this.obj);
            this.objName = "";
          } else {
            Pool4.recover(this.obj.name, this.obj);
          }
        }
      } else {
      }
    }
    /**额外清理
     */
    clearOthers() {
    }
  };
  __name(BaseItem, "BaseItem");

  // src/Enum/LanguageEnum.ts
  var LanguageEnum = /* @__PURE__ */ ((LanguageEnum2) => {
    LanguageEnum2[LanguageEnum2["ChineseSimplified"] = 1001] = "ChineseSimplified";
    LanguageEnum2[LanguageEnum2["English"] = 1002] = "English";
    return LanguageEnum2;
  })(LanguageEnum || {});

  // src/Localization/Localization.ts
  var _Localization = class {
    /**初始化 */
    static Init() {
      _Localization.LocalizationDataTableMap.set(1001, { id: 1001, key: "GAME_START", ChineseSimplified: "\u6E38\u620F\u5F00\u59CB", English: "Game Start" });
      _Localization.LocalizationDataTableMap.set(1002, { id: 1002, key: "OK", ChineseSimplified: "\u786E\u8BA4", English: "OK" });
      _Localization.LocalizationDataTableMap.set(1003, { id: 1003, key: "CANCEL", ChineseSimplified: "\u53D6\u6D88", English: "CANCEL" });
      _Localization.LocalizationDataTableMap.set(1004, { id: 1004, key: "SETTING", ChineseSimplified: "\u8BBE\u7F6E", English: "Setting" });
      _Localization.LocalizationDataTableMap.set(1005, { id: 1005, key: "BGM", ChineseSimplified: "\u97F3\u4E50", English: "Bgm" });
      _Localization.LocalizationDataTableMap.set(1006, { id: 1006, key: "SFX", ChineseSimplified: "\u97F3\u6548", English: "Sfx" });
      _Localization.LocalizationDataTableMap.set(1007, { id: 1007, key: "SHAKE", ChineseSimplified: "\u9707\u52A8", English: "Shake" });
      _Localization.LocalizationDataTableMap.set(1008, { id: 1008, key: "LANGUAGE", ChineseSimplified: "\u8BED\u8A00", English: "Language" });
      _Localization.LocalizationDataTableMap.set(1009, { id: 1009, key: "SUPPORT", ChineseSimplified: "\u652F\u6301", English: "Support" });
      _Localization.LocalizationDataTableMap.set(1010, { id: 1010, key: "ON", ChineseSimplified: "\u5F00", English: "ON" });
      _Localization.LocalizationDataTableMap.set(1011, { id: 1011, key: "OFF", ChineseSimplified: "\u5173", English: "OFF" });
      _Localization.LocalizationDataTableMap.set(1012, { id: 1012, key: "CONGRATULATIONS", ChineseSimplified: "\u606D\u559C", English: "Congratulations" });
      _Localization.LocalizationDataTableMap.set(1013, { id: 1013, key: "OPENNOW", ChineseSimplified: "\u7ACB\u523B\u6253\u5F00", English: "OpenNow" });
      _Localization.LocalizationDataTableMap.set(1014, { id: 1014, key: "LUCKYBOXBRONZE", ChineseSimplified: "\u9752\u94DC\u5E78\u8FD0\u5B9D\u7BB1", English: "Bronze Luck Box" });
      _Localization.LocalizationDataTableMap.set(1015, { id: 1015, key: "LUCKYBOXSILVER", ChineseSimplified: "\u767D\u94F6\u5E78\u8FD0\u5B9D\u7BB1", English: "Silver Luck Box" });
      _Localization.LocalizationDataTableMap.set(1016, { id: 1016, key: "LUCKYBOXGOLD", ChineseSimplified: "\u9EC4\u91D1\u5E78\u8FD0\u5B9D\u7BB1", English: "Gold Luck Box" });
      _Localization.LocalizationDataTableMap.set(1017, { id: 1017, key: "LUCKYBOXDIAMOND", ChineseSimplified: "\u94BB\u77F3\u5E78\u8FD0\u5B9D\u7BB1", English: "Diamond Luck Box" });
      _Localization.LocalizationDataTableMap.set(1018, { id: 1018, key: "LUCKYBOXPLATINUM", ChineseSimplified: "\u767D\u91D1\u5E78\u8FD0\u5B9D\u7BB1", English: "Platinum Luck Box" });
      _Localization.LocalizationDataTableMap.set(1019, { id: 1019, key: "PRIVACYAGREEMENT", ChineseSimplified: "\u9690\u79C1\u534F\u8BAE", English: "PrivacyAgreement" });
      _Localization.LocalizationDataTableMap.set(1020, { id: 1020, key: "SHOP", ChineseSimplified: "\u5546\u5E97", English: "Shop" });
      _Localization.LocalizationDataTableMap.set(1021, { id: 1021, key: "RANKING", ChineseSimplified: "\u6392\u884C\u699C", English: "Ranking" });
      _Localization.LocalizationDataTableMap.set(1022, { id: 1022, key: "GOLD", ChineseSimplified: "\u91D1\u5E01", English: "Gold" });
      _Localization.LocalizationDataTableMap.set(1023, { id: 1023, key: "DIAMOND", ChineseSimplified: "\u94BB\u77F3", English: "Diamond" });
      _Localization.LocalizationDataTableMap.set(1024, { id: 1024, key: "HOT", ChineseSimplified: "\u70ED\u95E8", English: "HOT" });
      _Localization.LocalizationDataTableMap.set(1025, { id: 1025, key: "BEST", ChineseSimplified: "\u63A8\u8350", English: "BEST" });
      _Localization.LocalizationDataTableMap.set(1026, { id: 1026, key: "YOUDONTHAVEENOUGHDIAMONDS", ChineseSimplified: "\u60A8\u7684$\u4E0D\u8DB3", English: "You don't have enough $" });
      _Localization.LocalizationDataTableMap.set(1027, { id: 1027, key: "NOTYETIMPLEMENTED", ChineseSimplified: "\u6682\u672A\u5B9E\u73B0", English: "Not yet implemented" });
      _Localization.LocalizationDataTableMap.set(1028, { id: 1028, key: "CONGRATULATIONSONGETTING", ChineseSimplified: "\u606D\u559C\u4F60\u83B7\u5F97$$", English: "Congratulations on getting $ $" });
      _Localization.LocalizationDataTableMap.set(1029, { id: 1029, key: "STARTFIGHTING", ChineseSimplified: "\u5F00\u59CB\u6218\u6597", English: "STARTFIGHTING" });
      _Localization.LocalizationDataTableMap.set(1030, { id: 1030, key: "UNLOCK", ChineseSimplified: "\u89E3\u9501 $", English: "Unlock $" });
      _Localization.LocalizationDataTableMap.set(1031, { id: 1031, key: "CONGRATULATIONSUNLOCK", ChineseSimplified: "\u606D\u559C\u4F60\u89E3\u9501\u4EBA\u7269\u6210\u529F", English: "Congratulations, you successfully unlocked the character" });
      _Localization.LocalizationDataTableMap.set(1032, { id: 1032, key: "PAUSE", ChineseSimplified: "\u6682\u505C", English: "PAUSE" });
      _Localization.LocalizationDataTableMap.set(1033, { id: 1033, key: "CONTINUE", ChineseSimplified: "\u7EE7\u7EED", English: "CONTINUE" });
      _Localization.LocalizationDataTableMap.set(1034, { id: 1034, key: "RESTART", ChineseSimplified: "\u91CD\u5F00", English: "RESTART" });
      _Localization.LocalizationDataTableMap.set(1035, { id: 1035, key: "QUIT", ChineseSimplified: "\u9000\u51FA", English: "QUIT" });
      _Localization.LocalizationDataTableMap.set(1036, { id: 1036, key: "RESURRECTION", ChineseSimplified: "\u590D\u6D3B", English: "RESURRECTION" });
      _Localization.LocalizationDataTableMap.set(1037, { id: 1037, key: "WATCH", ChineseSimplified: "\u89C2\u770B\u89C6\u9891", English: "WATCH" });
      _Localization.LocalizationDataTableMap.set(1038, { id: 1038, key: "WATCH2REVIVE", ChineseSimplified: "\u662F\u5426\u7ACB\u5373\u89C2\u770B\u89C6\u9891\u590D\u6D3B\uFF1F", English: "Want to watch the video revive now?" });
      _Localization.LocalizationDataTableMap.set(1039, { id: 1039, key: "DEFEAT", ChineseSimplified: "\u5931\u8D25", English: "DEFEAT" });
      _Localization.LocalizationDataTableMap.set(1040, { id: 1040, key: "TRYAGAIN", ChineseSimplified: "\u8BF7\u7EE7\u7EED\u52AA\u529B", English: "PLEASETRYAGAIN" });
      _Localization.LocalizationDataTableMap.set(2001, { id: 2001, key: "BUSINESSMAN", ChineseSimplified: "\u6253\u5DE5\u4EBA", English: "BusinessMan" });
      _Localization.LocalizationDataTableMap.set(2002, { id: 2002, key: "BOMBDISEX", ChineseSimplified: "\u62C6\u5F39\u4E13\u5BB6", English: "BombDisEX" });
      _Localization.LocalizationDataTableMap.set(2003, { id: 2003, key: "GREATMAGICIAN", ChineseSimplified: "\u5927\u9B54\u6CD5\u5E08", English: "GreatMagician" });
      _Localization.LocalizationDataTableMap.set(2004, { id: 2004, key: "KINGSMAN", ChineseSimplified: "\u738B\u724C\u7279\u5DE5", English: "Kingsman" });
      _Localization.LocalizationDataTableMap.set(2005, { id: 2005, key: "SCOUTROBOT", ChineseSimplified: "\u65A5\u5019\u673A\u5668\u4EBA", English: "ScoutRobot" });
      _Localization.LocalizationDataTableMap.set(2006, { id: 2006, key: "ROOKIEPIRATE", ChineseSimplified: "\u83DC\u9E1F\u6D77\u76D7", English: "RookiePirate" });
      _Localization.LocalizationDataTableMap.set(2101, { id: 2101, key: "BUSINESSMAN_DESCRIPTION", ChineseSimplified: "\u666E\u901A\u7684\u6253\u5DE5\u4EBA\n\u9664\u4E86\u5076\u5C14\u5065\u8EAB\n\u5E76\u65E0\u4EC0\u4E48\u7279\u70B9", English: "Ordinary migrant workers\n have no special features except for occasional exercise\n" });
      _Localization.LocalizationDataTableMap.set(2102, { id: 2102, key: "BOMBDISEX_DESCRIPTION", ChineseSimplified: "\u5927\u7206\u70B8\u4E2D\u6D3B\u4E0B\u6765\u7684\u62C6\u5F39\u4E13\u5BB6\n\u79D8\u8BC0\u662F\u4ECE\u4E0D\u8131\u4E0B\u4ED6\u7684\u91CD\u88C5\n\u9632\u5FA1\u8D85\u9AD8", English: "Bomb disposal expert who survived the Big Bang\nThe secret is never taking off his armor\nSuper defense" });
      _Localization.LocalizationDataTableMap.set(2103, { id: 2103, key: "GREATMAGICIAN_DESCRIPTION", ChineseSimplified: "\u795E\u79D8\u7684\u9B54\u6CD5\u5E08\n\u968F\u8EAB\u8DDF\u7740\u4E00\u672C\u6D6E\u7A7A\u9B54\u6CD5\u4E66\n\u5A01\u529B\u83AB\u6D4B", English: "The mysterious magician\nfollows a floating magic book\nunpredictable power" });
      _Localization.LocalizationDataTableMap.set(2104, { id: 2104, key: "KINGSMAN_DESCRIPTION", ChineseSimplified: "\u4E0D\u660E\u7EC4\u7EC7\u7684\u7279\u5DE5\n\u53D7\u8FC7\u7279\u6B8A\u8BAD\u7EC3\n\u8EAB\u4F53\u7D20\u8D28\u8D85\u8D8A\u5E38\u4EBA", English: "A robot that claims to come from the future\nThe body is full of technology\nIt has a moving speed that surpasses that of humans" });
      _Localization.LocalizationDataTableMap.set(2105, { id: 2105, key: "SCOUTROBOT_DESCRIPTION", ChineseSimplified: "\u81EA\u79F0\u6765\u81EA\u672A\u6765\u7684\u673A\u5668\u4EBA\n\u8EAB\u4F53\u5145\u6EE1\u79D1\u6280\u611F\n\u6709\u7740\u8D85\u8D8A\u4EBA\u7C7B\u7684\u79FB\u52A8\u901F\u5EA6", English: "Agents of unknown organizations\n have received special training\n physical fitness surpasses that of ordinary people" });
      _Localization.LocalizationDataTableMap.set(2106, { id: 2106, key: "ROOKIEPIRATE_DESCRIPTION", ChineseSimplified: "\u6D77\u76D7\u4E2D\u7684\u83DC\u9E1F\n\u8239\u957F\u6B7B\u540E\u72EC\u81EA\u51FA\u6765\u5192\u9669\n\u968F\u8EAB\u5E26\u7740\u51E0\u4E2A\u6A58\u5B50", English: "A rookie among pirates\nThe captain came out alone to take risks\nAfter the death of the captain, he took a few oranges with him" });
      _Localization.LocalizationDataTableMap.set(2201, { id: 2201, key: "BUSINESSMAN_SKILL", ChineseSimplified: "\u53D1\u51FA\u7EDD\u671B\u7684\u543C\u53EB\n\u63A8\u5F00\u8EAB\u8FB9\u6240\u6709\u654C\u4EBA\n\u5E76\u7ED9\u4E88\u4E00\u5B9A\u4F24\u5BB3", English: "Let out a desperate roar\npush away all enemies around you,\nand deal certain damage" });
      _Localization.LocalizationDataTableMap.set(2202, { id: 2202, key: "BOMBDISEX_SKILL", ChineseSimplified: "\u653E\u4E0B\u4E00\u9897\u53CD\u6B65\u5175\u5730\u96F7\n\u89E6\u53D1\u540E\u9020\u6210\u5927\u5E45\u5EA6\u4F24\u5BB3", English: "Drops an Anti-Personnel Mine\nDeals massive damage when triggered" });
      _Localization.LocalizationDataTableMap.set(2203, { id: 2203, key: "GREATMAGICIAN_SKILL", ChineseSimplified: "\u53EC\u5524\u6D41\u661F\u96E8\n\u968F\u673A\u653B\u51FB\u4E00\u5B9A\u8303\u56F4\u654C\u4EBA", English: "Summon meteor shower\nRandomly attack enemies within a certain range" });
      _Localization.LocalizationDataTableMap.set(2204, { id: 2204, key: "KINGSMAN_SKILL", ChineseSimplified: "\u6FC0\u53D1\u8BAD\u7EC3\u65F6\u7684\u56DE\u5FC6\n\u77ED\u65F6\u95F4\u5185\u514D\u75AB\u6240\u6709\u4F24\u5BB3", English: "Stimulate memories of training\nImmune to all damage for a short time" });
      _Localization.LocalizationDataTableMap.set(2205, { id: 2205, key: "SCOUTROBOT_SKILL", ChineseSimplified: "\u8C03\u7528\u8EAB\u4F53\u7279\u6B8A\u7684\u80FD\u91CF\n\u5411\u7740\u7279\u5B9A\u65B9\u5411\u95EA\u73B0\u4E00\u6BB5\u8DDD\u79BB", English: "Invoke the special energy of the body\nFlash a certain distance in a specific direction" });
      _Localization.LocalizationDataTableMap.set(2206, { id: 2206, key: "ROOKIEPIRATE_SKILL", ChineseSimplified: "\u5403\u4E0B\u968F\u8EAB\u643A\u5E26\u7684\u6A58\u5B50\n\u53EF\u4EE5\u6062\u590D\u4E00\u6EF4\u8840\uFF08\u4E00\u5C40\u6700\u591A\u53EF\u4EE5\u7528\u4E24\u6B21\uFF09", English: "Eat the oranges you carry with you\nYou can restore a drop of blood (can be used up to twice in a round)" });
      _Localization.LocalizationDataTableMap.set(2301, { id: 2301, key: "PISTOL", ChineseSimplified: "\u5C0F\u624B\u67AA", English: "Pistol" });
      _Localization.LocalizationDataTableMap.set(2302, { id: 2302, key: "RPG", ChineseSimplified: "\u706B\u7BAD\u7B52", English: "RPG" });
      _Localization.LocalizationDataTableMap.set(2303, { id: 2303, key: "WIZARDSTAFF", ChineseSimplified: "\u6CD5\u6756", English: "WizardStaff" });
      _Localization.LocalizationDataTableMap.set(2304, { id: 2304, key: "SMG", ChineseSimplified: "\u6D88\u97F3\u51B2\u950B\u67AA", English: "SMG" });
      _Localization.LocalizationDataTableMap.set(2305, { id: 2305, key: "REVOLVER", ChineseSimplified: "\u79D1\u6280\u5DE6\u8F6E", English: "Revolver" });
      _Localization.LocalizationDataTableMap.set(2306, { id: 2306, key: "DOUBLEBARREL", ChineseSimplified: "\u53CC\u7BA1\u55B7", English: "DoubleBarrel" });
      _Localization.LocalizationDataTableMap.set(2401, { id: 2401, key: "PISTOL_DESCRIPTION", ChineseSimplified: "\u5E73\u5E73\u65E0\u5947\u7684\u5C0F\u624B\u67AA\n\u548C\u5B83\u7684\u4E3B\u4EBA\u4E00\u6837\uFF0C\u6BEB\u4E0D\u8D77\u773C\n\u4F46\u5373\u4F7F\u8FD9\u6837\uFF0C\u4E5F\u8981\u52AA\u529B\u6D3B\u4E0B\u53BB\u554A", English: "An unremarkable little pistol\nLike its owner, it is inconspicuous\n But even so, we must work hard to live" });
      _Localization.LocalizationDataTableMap.set(2402, { id: 2402, key: "RPG_DESCRIPTION", ChineseSimplified: "\u5A01\u529B\u5DE8\u5927\u7684RPG\n\u4F7F\u7528\u65F6\u5019\u6CE8\u610F\u5B89\u5168\n\u66F4\u52A0\u8981\u6CE8\u610F\u53CB\u519B\u706B\u529B\u54DF", English: "Powerful RPG\nBe careful when using it\nAlso pay attention to friendly firepower" });
      _Localization.LocalizationDataTableMap.set(2403, { id: 2403, key: "WIZARDSTAFF_DESCRIPTION", ChineseSimplified: "\u80FD\u591F\u6301\u7EED\u65BD\u6CD5\u7684\u6CD5\u6756\n\u96BE\u9053\u6CD5\u6756\u5C31\u4E0D\u4F1A\u8FC7\u70ED\u4E48\n\u6216\u8BB8\u662F\u6CD5\u5E08\u4F7F\u7528\u4E86\u964D\u6E29\u9B54\u6CD5", English: "A wand that can continue to cast spells\nWill the wand not be overheated\nMaybe the mage used cooling magic" });
      _Localization.LocalizationDataTableMap.set(2404, { id: 2404, key: "SMG_DESCRIPTION", ChineseSimplified: "\u7F8E\u4E3D\u800C\u53C8\u81F4\u547D\u7684\u6D88\u97F3\u51B2\u950B\u67AA\n\u5373\u4F7F\u76EE\u6807\u6B7B\u4EA1\n\u4E5F\u4E0D\u77E5\u90FD\u5B50\u5F39\u662F\u54EA\u91CC\u6253\u8FC7\u6765\u7684", English: "Beautiful and deadly silenced submachine gun\nEven if the target dies\n I don't know where the bullets came from" });
      _Localization.LocalizationDataTableMap.set(2405, { id: 2405, key: "REVOLVER_DESCRIPTION", ChineseSimplified: "\u5E26\u6709\u672A\u6765\u79D1\u6280\u7684\u5DE6\u8F6E\u624B\u67AA\n\u53E4\u8001\u9020\u578B\u7684\u80CC\u540E\n\u662F\u5BF9\u8FC7\u53BB\u7684\u8FF7\u604B", English: "Revolver with futuristic technology\nBehind the ancient shape\n is a fascination with the past" });
      _Localization.LocalizationDataTableMap.set(2406, { id: 2406, key: "DOUBLEBARREL_DESCRIPTION", ChineseSimplified: "\u7ECF\u5178\u8BBE\u8BA1\u7684\u53CC\u7BA1\u55B7\u5B50\n\u7B80\u5355\u8010\u7528\n\u662F\u4F60\u672B\u65E5\u751F\u5B58\u7684\u9996\u9009\u6B66\u5668", English: "The classic design of the double-pipe nozzle\nsimple and durable\nis your weapon of choice for doomsday survival" });
      _Localization.LocalizationDataTableMap.set(2501, { id: 2501, key: "ZOMBIE", ChineseSimplified: "\u4E27\u5C38", English: "Zombie" });
      _Localization.LocalizationDataTableMap.set(2601, { id: 2601, key: "RELOADING", ChineseSimplified: "\u6362\u5F39\u4E2D", English: "Reloading" });
    }
  };
  var Localization = _Localization;
  __name(Localization, "Localization");
  /** Localization_DataTableMap 本地化配置表*/
  Localization.LocalizationDataTableMap = /* @__PURE__ */ new Map();

  // src/Localization/LocalizationMgr.ts
  var LocalizationMgr = class {
    /**初始化 */
    static init() {
      Localization.Init();
      this.$localizationKeyMap = /* @__PURE__ */ new Map();
      for (let [key, value] of Localization.LocalizationDataTableMap) {
        this.$localizationKeyMap.set(value.key, value);
      }
    }
    /**获取语言对应国旗 */
    static getFlagSkinIdById(id) {
      var _a;
      return (_a = DataTable.LocalizationResDataTableMap.get(id)) == null ? void 0 : _a.flagId;
    }
    /**获取语言描述 */
    static getLanguageMsgById(id) {
      var _a;
      return (_a = DataTable.LocalizationResDataTableMap.get(id)) == null ? void 0 : _a.msg;
    }
    /**通过key获取对应语言,一般来说是内部调用 */
    static $getLocalizationByKey(key, ...keys) {
      var _a, _b;
      let language = LanguageEnum[this.Language];
      let value = (_a = this.$localizationKeyMap.get(key)) == null ? void 0 : _a[language];
      if (value) {
        if (keys && keys.length) {
          for (let i = 0; i < keys.length; i++) {
            let item = (_b = this.$localizationKeyMap.get(keys[i])) == null ? void 0 : _b[language];
            item = item ? item : keys[i];
            value = value.replace("$", item);
          }
        }
      }
      return value;
    }
    /**通过枚举获取对应语言 */
    static getLocalizationByEnum(lenum, ...lenums) {
      var _a, _b;
      let language = LanguageEnum[this.Language];
      let value = (_a = Localization.LocalizationDataTableMap.get(lenum)) == null ? void 0 : _a[language];
      if (value) {
        if (lenums && lenums.length) {
          for (let i = 0; i < lenums.length; i++) {
            let item = (_b = Localization.LocalizationDataTableMap.get(lenums[i])) == null ? void 0 : _b[language];
            item = item ? item : lenums[i];
            value = value.replace("$", item);
          }
        }
      }
      return value;
    }
    /**获取当前语言 */
    static get Language() {
      if (!this.$language) {
        let language = LocalStorageMgr.getItem("LANGUAGE" /* LANGUAGE */);
        if (language) {
          this.$language = Number(language.substring(language.indexOf("_") + 1));
        } else {
          this.$language = ProjectConfig.defaultLanguage;
          LocalStorageMgr.setItem("LANGUAGE" /* LANGUAGE */, this.$sign + this.$language);
        }
      }
      return this.$language;
    }
    /**修改当前语言 */
    static set Language(language) {
      this.$language = language;
      LocalStorageMgr.setItem("LANGUAGE" /* LANGUAGE */, this.$sign + this.$language);
      EventMgr.event("LANGUAGECHANGE" /* LANGUAGECHANGE */);
    }
  };
  __name(LocalizationMgr, "LocalizationMgr");
  /**持久化标志 */
  LocalizationMgr.$sign = "language_";

  // src/Mgr/VibrateMgr.ts
  var VibrateMgr = class {
    /**是否震动 */
    static get isVibrate() {
      if (this.$isVibrate == -1) {
        let str = LocalStorageMgr.getItem("ISVIBRATE" /* ISVIBRATE */);
        if (str) {
          this.$isVibrate = Number(str);
        } else {
          this.$isVibrate = 1;
          LocalStorageMgr.setItem("ISVIBRATE" /* ISVIBRATE */, "1");
        }
      }
      return !!this.$isVibrate;
    }
    static set isVibrate(value) {
      if (value) {
        this.$isVibrate = 1;
      } else {
        this.$isVibrate = 0;
      }
      LocalStorageMgr.setItem("ISVIBRATE" /* ISVIBRATE */, this.$isVibrate.toString());
    }
    /**自定义震动时间
       * 默认间隔15ms
       */
    static vibrateShort(time = 15) {
      if (PlatformMgr.instance.isMiniGame && this.isVibrate) {
        let count = Math.ceil(time / 15);
        let index = 0;
        let obj = { count, index };
        Laya.timer.loop(16, obj, () => {
          if (this.isVibrate) {
            PlatformMgr.instance.miniGame && PlatformMgr.instance.miniGame.vibrateShort();
          } else {
            Laya.timer.clearAll(obj);
          }
          index++;
          if (index > count) {
            Laya.timer.clearAll(obj);
          }
        });
      }
    }
    /**长震动 */
    static vibrateLong() {
      if (PlatformMgr.instance.isMiniGame && this.isVibrate) {
        PlatformMgr.instance.miniGame && PlatformMgr.instance.miniGame.vibrateLong();
      }
    }
  };
  __name(VibrateMgr, "VibrateMgr");
  VibrateMgr.$sign = "isVibrate";
  /**震动 */
  VibrateMgr.$isVibrate = -1;

  // src/Util/AnimatorTool.ts
  var AnimatorTool = class {
    /**
    * 播放动画
    * @param ani 动画
    * @param name 动画名
    * @param loop 是否循环
    * @param speed 速度
    * @param layerIndex 层级
    * @param crossFade 是否过渡
    * @param transitionDuration 过渡时间
    */
    static play(ani, name, loop = true, speed = 1, layerIndex = 0, crossFade = false, transitionDuration = 0.1) {
      if (ani && name) {
        let AnimatorState = ani.getControllerLayer(layerIndex).getAnimatorState(name);
        if (AnimatorState) {
          if (crossFade) {
            ani.crossFade(name, transitionDuration, layerIndex);
          } else {
            ani.play(name, layerIndex);
          }
          AnimatorState.speed = speed;
          AnimatorState.clip.islooping = loop;
        } else {
          console.log("\u540D\u79F0:" + name + " /\u5C42\u7EA7:" + layerIndex + "\u5BF9\u5E94\u7684\u52A8\u753B\u4E3A\u7A7A");
        }
      } else {
        console.log("ani/name\u4E22\u5931");
      }
    }
    /**
     * 添加动画退出事件监听 注意 isLooping = true 不执行
     * @param ani 动画
     * @param name 动画名
     * @param caller 域
     * @param callback 回调函数
     * @param layerIndex 层级
     */
    static addEvent(ani, name, caller, callback, layerIndex = 0) {
      let layer = ani.getControllerLayer(layerIndex);
      let aniStatus = layer.getAnimatorState(name);
      if (aniStatus) {
        let aniScript = aniStatus.getScript(Laya.AnimatorStateScript);
        if (aniScript == null) {
          aniScript = aniStatus.addScript(Laya.AnimatorStateScript);
        }
        aniScript.onStateExit = () => {
          callback && caller && callback.call(caller);
        };
      } else {
        console.log(name + "\u72B6\u6001\u4E3A\u7A7A");
      }
    }
  };
  __name(AnimatorTool, "AnimatorTool");

  // src/Util/PlayerController.ts
  var Vector36 = Laya.Vector3;
  var CharacterController = Laya.CharacterController;
  var { regClass: regClass6, property: property6 } = Laya;
  var PlayerController = class extends Script3d {
    constructor() {
      super();
      this.friction = 0.5;
      this.stepHeight = 0.1;
      this.jumpAllTimes = 1;
      this.moveSpeed = 0.05;
      this.jumpTimes = 0;
      /**正在被攻击 */
      this.isBeHit = false;
      /**被击退 */
      this.beHitSpeed = { value: 0 };
      /**临时状态 */
      this.angleCache = 180;
      /**击退力度 */
      this.hitStrength = 20;
    }
    onEnable() {
      this.characterController = this.obj.getComponent(CharacterController);
      if (!this.characterController) {
        console.log("characterController is undefined");
      }
    }
    onStart() {
      this.characterController.friction = this.friction;
      this.characterController.stepHeight = this.stepHeight;
      this.moveSpeedV3 = new Vector36(0, 0, 0);
    }
    update(time) {
    }
    /**
     * 移动 
     * @param angle z方向为正方向，逆时针旋转0到180°，顺时针旋转0到-180°
     */
    move(angle) {
      if (!isNaN(angle)) {
        this.angleCache = angle;
        angle = angle / 180 * Math.PI;
        let offX = Math.sin(angle);
        let offY = Math.cos(angle);
        this.moveSpeedV3 = new Vector36(offX * this.moveSpeed, 0, offY * this.moveSpeed);
        this.characterController.move(this.moveSpeedV3);
      }
    }
    /**
     * 被击退
     * @param angle 击退方向
     * @param strength 击退力度(0.01-1)
     */
    beHit(angle, strength = 1) {
      if (!isNaN(angle)) {
        if (isNaN(strength) && strength == 0)
          return;
        strength = strength < 0.01 ? 0.01 : strength;
        strength = strength > 1 ? 1 : strength;
        angle = angle / 180 * Math.PI;
        let offX = Math.sin(angle);
        let offY = Math.cos(angle);
        let self = this;
        this.beHitSpeed = { value: self.hitStrength * this.moveSpeed };
        Tween.get(self.beHitSpeed).toFun({
          value: (t) => {
            self.moveSpeedV3 = new Vector36(offX * self.beHitSpeed.value * strength, 0, offY * self.beHitSpeed.value * strength);
            self.characterController.move(self.moveSpeedV3);
            let num = self.hitStrength * self.moveSpeed - t * self.hitStrength * self.moveSpeed;
            return num;
          }
        }, 350).call(self, () => {
          if (self.angleCache == 180) {
            self.characterController.move(Sprite3d.ZERO);
          } else {
            self.move(this.angleCache);
          }
        }).start();
      }
    }
    /**停止移动 */
    stopMove() {
      this.characterController.move(Sprite3d.ZERO);
      this.angleCache = 180;
    }
    /**跳跃 */
    jump() {
      if (this.isGrounded) {
        this.jumpTimes = 0;
        this.jumpTimes++;
        this.characterController.jump();
      } else {
        if (this.jumpTimes < this.jumpAllTimes) {
          this.jumpTimes++;
          this.characterController.jump();
        }
      }
    }
    /**是否在地上 */
    isGrounded() {
      return this.characterController.isGrounded;
    }
    onDisable() {
    }
  };
  __name(PlayerController, "PlayerController");
  __decorateClass([
    property6({ type: Number })
  ], PlayerController.prototype, "friction", 2);
  __decorateClass([
    property6({ type: Number })
  ], PlayerController.prototype, "stepHeight", 2);
  __decorateClass([
    property6({ type: Number })
  ], PlayerController.prototype, "jumpAllTimes", 2);
  __decorateClass([
    property6({ type: Number })
  ], PlayerController.prototype, "moveSpeed", 2);
  PlayerController = __decorateClass([
    regClass6("f3ea911e-7d9e-4e77-b857-d99a7338285a", "../src/Util/PlayerController.ts")
  ], PlayerController);

  // src/Util/ReloadTips.ts
  var Image = Laya.Image;
  var Sprite2 = Laya.Sprite;
  var { regClass: regClass7, property: property7 } = Laya;
  var ReloadTips = class extends Laya.Script {
    constructor() {
      super();
    }
    onEnable() {
      this.Main.visible = false;
      this.$width = this.imgLoad.width;
    }
    showTips(time) {
      this.imgLoad.width = 0;
      this.Main.visible = true;
      Tween.get(this.imgLoad).to({ width: this.$width }, time).call(this, () => {
        this.Main.visible = false;
      }).start();
    }
  };
  __name(ReloadTips, "ReloadTips");
  __decorateClass([
    property7({ type: Image })
  ], ReloadTips.prototype, "imgLoad", 2);
  __decorateClass([
    property7({ type: Sprite2 })
  ], ReloadTips.prototype, "Main", 2);
  ReloadTips = __decorateClass([
    regClass7("9e09e05b-3c95-4846-bea9-6bed64839712", "../src/Util/ReloadTips.ts")
  ], ReloadTips);

  // src/Game/Weapon/WeaponItem.ts
  var { regClass: regClass8, property: property8 } = Laya;
  var WeaponItem = class extends Script3d {
    constructor() {
      super();
      /**总子弹数量 */
      this.totalBulletNum = 0;
      this.$bulletNum = 0;
      /**开火间隔 */
      this.shotInterval = 0;
      this.waitShootInterval = 0;
      /**能否开火 */
      this.canShoot = false;
      /**换弹时间 */
      this.reloadTime = 0;
      /**是否正在换弹 */
      this.isReload = false;
      /**是否正在射击 */
      this.isShooting = false;
    }
    onEnable() {
    }
    onStart() {
    }
    init() {
      this.canShoot = true;
      this.isReload = false;
      this.isShooting = false;
      this.bulletId = this.weaponData["bulletPath"];
      this.$bulletNum = this.totalBulletNum = this.weaponData["prep"];
      this.reloadTime = this.weaponData["reloadTime"];
      this.shotInterval = this.weaponData["shotInterval"];
      this.fireSound = this.weaponData["sound"];
      this.expSound = this.weaponData["expSound"];
    }
    get bulletNum() {
      return this.$bulletNum;
    }
    set bulletNum(value) {
      if (!isNaN(value)) {
        this.$bulletNum = value;
        if (value == 0) {
          this.reLoad();
          this.canShoot = false;
        }
      }
    }
    reLoad() {
      var _a, _b;
      this.isReload = true;
      Timer.get(this.reloadTime, this, () => {
        this.bulletNum = this.totalBulletNum;
        this.isReload = false;
      }).start();
      (_b = (_a = this.playerItem) == null ? void 0 : _a.reloadTips) == null ? void 0 : _b.showTips(this.reloadTime);
    }
    update(time) {
      if (MainGame.instance.gameStep == 1005 /* GameStart */) {
        if (this.isShooting) {
          if (this.canShoot && this.isReload == false) {
            BulletMgr.instance.createBullet(this.bulletId, this.shootPos);
            this.canShoot = false;
            SoundMgr.instance.playSound(this.fireSound, 1);
            this.bulletNum--;
          }
        }
        if (this.canShoot == false) {
          this.waitShootInterval += time;
          if (this.waitShootInterval >= this.shotInterval) {
            this.waitShootInterval = 0;
            this.canShoot = true;
          }
        }
      }
    }
    shoot(angle) {
      this.isShooting = true;
    }
    stopShoot() {
      this.isShooting = false;
    }
  };
  __name(WeaponItem, "WeaponItem");
  WeaponItem = __decorateClass([
    regClass8("303c1b70-94df-4fd5-afab-45556c45c044", "../src/Game/Weapon/WeaponItem.ts")
  ], WeaponItem);

  // src/Game/Weapon/WeaponMgr.ts
  var WeaponMgr = class {
    constructor() {
      this.selectWeaponId = 0;
    }
    static get instance() {
      return this._instance ? this._instance : this._instance = new WeaponMgr();
    }
    init() {
    }
    getSelectWeapon(weaponId, owner) {
      let obj;
      let weaponItem;
      if (!this.weaponMap) {
        this.weaponMap = /* @__PURE__ */ new Map();
      } else {
        weaponItem = this.weaponMap.get(weaponId);
      }
      if (!obj) {
        let weaponData = this.getSelectedWeaponData(weaponId);
        obj = ResLoader.instance.getResCloneById(weaponData["path"]);
        weaponItem = obj.getComponent(WeaponItem);
        this.weaponMap.set(weaponId, weaponItem);
        if (weaponItem) {
          weaponItem.weaponData = weaponData;
        }
      }
      this.weaponItem = weaponItem;
      weaponItem.playerItem = owner;
      weaponItem.init();
      return weaponItem;
    }
    gameStart() {
    }
    /**获取当前选择的武器数据 */
    getSelectedWeaponData(weaponId) {
      return DataTable.WeaponDataTableMap.get(weaponId);
    }
  };
  __name(WeaponMgr, "WeaponMgr");

  // src/Game/Player/PlayerItem.ts
  var Sprite3D = Laya.Sprite3D;
  var Material = Laya.Material;
  var Animator = Laya.Animator;
  var { regClass: regClass9, property: property9 } = Laya;
  var PlayerItem = class extends BaseItem {
    constructor() {
      super();
      this.totalHealth = 0;
      this.$health = 0;
      this.$isGod = false;
    }
    /**生命 */
    get health() {
      return this.$health;
    }
    set health(value) {
      if (!isNaN(value)) {
        let oldHealth = this.$health;
        this.$health = value;
        this.healthChange(oldHealth);
      }
    }
    /**是否无敌 */
    get isGod() {
      return this.$isGod;
    }
    set isGod(value) {
      this.$isGod = value;
    }
    get playerController() {
      if (!this.$playerController) {
        this.$playerController = this.obj.getComponent(PlayerController);
      }
      return this.$playerController;
    }
    onEnable() {
      this.rotNode = this.obj.getChildAt(0);
      this.animator = this.rotNode.getComponent(Animator);
      this.initWeapon();
      if (!this.reloadTips) {
        this.reloadTips = Sprite3d.get3DUIScript(this.UI3D, ReloadTips);
      }
    }
    gameStart() {
      if (this.playerData) {
        this.totalHealth = this.health = this.playerData.health;
        this.playerController.moveSpeed = this.playerData.speed;
      }
      this.playerStatus = 1001 /* idle */;
      this.changeAni();
      this.position = Sprite3d.ZERO;
      this.localRotationEuler = Sprite3d.ZERO;
      this.isGod = false;
      this.playerController.characterController.collisionGroup = Physics3DUtils.COLLISIONFILTERGROUP_CUSTOMFILTER1;
      this.playerController.characterController.canCollideWith = Physics3DUtils.COLLISIONFILTERGROUP_CUSTOMFILTER2;
      this.playerDirection.active = true;
    }
    selectPlayer() {
      this.playerStatus = 1001 /* idle */;
      this.changeAni();
      this.position = Sprite3d.ZERO;
      this.localRotationEuler = Sprite3d.ZERO;
      this.playerDirection.active = false;
    }
    update(time) {
    }
    initWeapon() {
      if (!this.weaponItem) {
        this.weaponItem = WeaponMgr.instance.getSelectWeapon(this.playerData["weaponId"], this);
        this.weaponPoint.addChild(this.weaponItem.owner);
      } else {
        this.weaponItem.owner.active = true;
      }
      this.weaponItem.localPosition = Sprite3d.ZERO;
      this.weaponItem.localRotationEuler = Sprite3d.ZERO;
      this.weaponItem.shootPos = this.shootPos;
    }
    /**血量改变 */
    healthChange(oldHealth) {
      EventMgr.event("HEALTHCHANGE" /* HEALTHCHANGE */, this.health);
      if (this.health == 0) {
        EventMgr.event("PLAYERDEAD" /* PLAYERDEAD */);
        this.playerStatus = 1005 /* death */;
        this.changeAni();
      }
    }
    /**复活 */
    resurrection() {
      this.health = this.totalHealth;
      this.isGod = true;
      this.playerController.characterController.canCollideWith = Physics3DUtils.COLLISIONFILTERGROUP_CUSTOMFILTER9;
      Timer.get(3e3, this, () => {
        this.isGod = false;
        this.playerController.characterController.canCollideWith = Physics3DUtils.COLLISIONFILTERGROUP_CUSTOMFILTER2;
      }).start();
      this.playerStatus = 1001 /* idle */;
      this.changeAni();
      this.shakeSkin(3e3);
    }
    win() {
      this.stopMove();
      this.playerStatus = 1001 /* idle */;
      this.changeAni();
    }
    changeAni() {
      this.weaponItem && (this.weaponItem.owner.active = true);
      switch (this.playerStatus) {
        case 1001 /* idle */:
          this.weaponItem && (this.weaponItem.owner.active = false);
          AnimatorTool.play(this.animator, "idle" /* idle */, true, 1, 1, false, 0.2);
          AnimatorTool.play(this.animator, "idle" /* idle */, true, 1, 2, false, 0.2);
          break;
        case 1005 /* death */:
          AnimatorTool.play(this.animator, "death" /* death */, false, 1, 1, false, 0.2);
          AnimatorTool.play(this.animator, "death" /* death */, false, 1, 2, false, 0.2);
          break;
        case 1003 /* run */:
          AnimatorTool.play(this.animator, "runUp" /* runUp */, true, 1, 1, false, 0.2);
          AnimatorTool.play(this.animator, "runDown" /* runDown */, true, 1, 2, false, 0.2);
          break;
        case 1004 /* runAndShoot */:
          AnimatorTool.play(this.animator, "shoot" /* shoot */, true, 1, 1, false, 0.2);
          AnimatorTool.play(this.animator, "runDown" /* runDown */, true, 1, 2, false, 0.2);
          break;
        case 1002 /* standAndShoot */:
          AnimatorTool.play(this.animator, "shoot" /* shoot */, true, 1, 1, false, 0.2);
          AnimatorTool.play(this.animator, "stand" /* stand */, true, 1, 2, false, 0.2);
          break;
      }
    }
    startMove(angle, value) {
      if (this.playerStatus == 1005 /* death */ || MainGame.instance.gameStep != 1005 /* GameStart */)
        return;
      this.playerController.move(angle);
      if (this.playerStatus == 1001 /* idle */) {
        this.playerStatus = 1003 /* run */;
        this.changeAni();
      } else if (this.playerStatus == 1002 /* standAndShoot */) {
        this.playerStatus = 1004 /* runAndShoot */;
        this.changeAni();
      }
    }
    stopMove() {
      if (this.playerStatus == 1005 /* death */ || MainGame.instance.gameStep != 1005 /* GameStart */)
        return;
      this.playerController.stopMove();
      if (this.playerStatus == 1003 /* run */) {
        this.playerStatus = 1001 /* idle */;
        this.changeAni();
      } else if (this.playerStatus == 1004 /* runAndShoot */) {
        this.playerStatus = 1002 /* standAndShoot */;
        this.changeAni();
      }
    }
    startShoot(angle, value) {
      if (this.playerStatus == 1005 /* death */ || MainGame.instance.gameStep != 1005 /* GameStart */)
        return;
      this.rotNode.transform.localRotationEulerY = angle;
      if (this.playerStatus == 1001 /* idle */) {
        this.playerStatus = 1002 /* standAndShoot */;
        this.changeAni();
      } else if (this.playerStatus == 1003 /* run */) {
        this.playerStatus = 1004 /* runAndShoot */;
        this.changeAni();
      }
      this.weaponItem.shoot(angle);
    }
    stopShoot() {
      if (this.playerStatus == 1005 /* death */ || MainGame.instance.gameStep != 1005 /* GameStart */)
        return;
      if (this.playerStatus == 1002 /* standAndShoot */) {
        this.playerStatus = 1001 /* idle */;
        this.changeAni();
      } else if (this.playerStatus == 1004 /* runAndShoot */) {
        this.playerStatus = 1003 /* run */;
        this.changeAni();
      }
      this.weaponItem.stopShoot();
    }
    onCollisionEnter(collision) {
      if (!this.isGod && 1005 /* death */ != this.playerStatus && MainGame.instance.gameStep == 1005 /* GameStart */) {
        this.isGod = true;
        this.playerController.characterController.canCollideWith = Physics3DUtils.COLLISIONFILTERGROUP_CUSTOMFILTER9;
        Timer.get(1e3, this, () => {
          this.isGod = false;
          this.playerController.characterController.canCollideWith = Physics3DUtils.COLLISIONFILTERGROUP_CUSTOMFILTER2;
        }).start();
        this.health--;
        SoundMgr.instance.playSound(2614 /* hit */);
        EnemyMgr.instance.explode(this.position, 2.5, 0);
        VibrateMgr.vibrateLong();
        this.shakeSkin(1e3);
      }
    }
    shakeSkin(time) {
      let num = this.playerSkinMaterial.getFloat("u_EmissionIntensity");
      let data = { value: num };
      Tween.get(data).toFun({
        value: (t) => {
          this.playerSkinMaterial.setFloat("u_EmissionIntensity", data.value);
          return t * 4 + num;
        }
      }, 120).toFun({
        value: (t) => {
          this.playerSkinMaterial.setFloat("u_EmissionIntensity", data.value);
          return (1 - t) * 4 + num;
        }
      }, 120).loop(Math.ceil(time / 250)).call(this, () => {
        this.playerSkinMaterial.setFloat("u_EmissionIntensity", num);
      }).start();
    }
  };
  __name(PlayerItem, "PlayerItem");
  __decorateClass([
    property9({ type: Sprite3D })
  ], PlayerItem.prototype, "weaponPoint", 2);
  __decorateClass([
    property9({ type: Material })
  ], PlayerItem.prototype, "playerSkinMaterial", 2);
  __decorateClass([
    property9({ type: Sprite3D })
  ], PlayerItem.prototype, "shootPos", 2);
  __decorateClass([
    property9({ type: Sprite3D })
  ], PlayerItem.prototype, "UI3D", 2);
  __decorateClass([
    property9({ type: Sprite3D })
  ], PlayerItem.prototype, "playerDirection", 2);
  PlayerItem = __decorateClass([
    regClass9("778295ff-e54e-4576-82ea-f69285cd3b58", "../src/Game/Player/PlayerItem.ts")
  ], PlayerItem);

  // src/Game/Player/PlayerMgr.ts
  var PlayerMgr = class {
    constructor() {
      this.$selectedPlayerId = -1;
      this.$sign = "playerId_";
    }
    static get instance() {
      return this._instance ? this._instance : this._instance = new PlayerMgr();
    }
    init() {
    }
    startMove(angle, value) {
      this.playerItem && this.playerItem.startMove(angle, value);
    }
    stopMove() {
      this.playerItem && this.playerItem.stopMove();
    }
    startShoot(angle, value) {
      this.playerItem && this.playerItem.startShoot(angle, value);
    }
    stopShoot() {
      this.playerItem && this.playerItem.stopShoot();
    }
    /**获取坐标 */
    getPlayerPos() {
      var _a;
      return (_a = this.playerItem) == null ? void 0 : _a.position;
    }
    playerResurrection() {
      var _a;
      (_a = this.playerItem) == null ? void 0 : _a.resurrection();
    }
    gameOver() {
      this.playerItem.clear();
    }
    gameWin() {
      this.playerItem.win();
    }
    /**获取已经解锁的人物 */
    getUnlockList() {
      let str = LocalStorageMgr.getItem("UNLOCKPLAYERLIST" /* UNLOCKPLAYERLIST */);
      if (str) {
        this.unlockList = JSON.parse(str);
      } else {
        this.unlockList = [1001];
        LocalStorageMgr.setItem("UNLOCKPLAYERLIST" /* UNLOCKPLAYERLIST */, JSON.stringify(this.unlockList));
      }
      return this.unlockList;
    }
    /**解锁人物 */
    unlockPlayer(playerId) {
      if (playerId && this.unlockList.indexOf(playerId) == -1) {
        let data = this.getSelectedPlayerData(playerId);
        switch (data["currency"]) {
          case 1001 /* gold */:
            if (GameData.gold >= data["unlockPrice"]) {
              GameData.gold -= data["unlockPrice"];
              this.unlockList.push(playerId);
              LocalStorageMgr.setItem("UNLOCKPLAYERLIST" /* UNLOCKPLAYERLIST */, JSON.stringify(this.unlockList));
              UIBaseMgr.instance.showTips(LocalizationMgr.getLocalizationByEnum(1031 /* CONGRATULATIONSUNLOCK */));
              EventMgr.event("UNLOCKPLAYER" /* UNLOCKPLAYER */, playerId);
            } else {
              UIBaseMgr.instance.showTips(LocalizationMgr.getLocalizationByEnum(1026 /* YOUDONTHAVEENOUGHDIAMONDS */, 1022 /* GOLD */));
            }
            break;
          case 1002 /* diamond */:
            if (GameData.diamond >= data["unlockPrice"]) {
              GameData.diamond -= data["unlockPrice"];
              this.unlockList.push(playerId);
              LocalStorageMgr.setItem("UNLOCKPLAYERLIST" /* UNLOCKPLAYERLIST */, JSON.stringify(this.unlockList));
              UIBaseMgr.instance.showTips(LocalizationMgr.getLocalizationByEnum(1031 /* CONGRATULATIONSUNLOCK */));
              EventMgr.event("UNLOCKPLAYER" /* UNLOCKPLAYER */, playerId);
            } else {
              UIBaseMgr.instance.showTips(LocalizationMgr.getLocalizationByEnum(1026 /* YOUDONTHAVEENOUGHDIAMONDS */, 1023 /* DIAMOND */));
            }
            break;
        }
      }
    }
    /**是否已经解锁 */
    isUnlock(playerId) {
      let arr = this.getUnlockList();
      return arr.indexOf(playerId) != -1;
    }
    /**获取当前选择的玩家数据 */
    getSelectedPlayerData(playerId) {
      return DataTable.PlayerDataTableMap.get(playerId);
    }
    get selectedPlayerId() {
      if (this.$selectedPlayerId == -1) {
        let str = LocalStorageMgr.getItem("SELECTEDPLAYERID" /* SELECTEDPLAYERID */);
        if (str == null) {
          this.$selectedPlayerId = 1001;
          LocalStorageMgr.setItem("SELECTEDPLAYERID" /* SELECTEDPLAYERID */, this.$selectedPlayerId);
        } else {
          this.$selectedPlayerId = Number(str);
        }
      }
      return this.$selectedPlayerId;
    }
    set selectedPlayerId(playerId) {
      this.$selectedPlayerId = playerId;
      LocalStorageMgr.setItem("SELECTEDPLAYERID" /* SELECTEDPLAYERID */, this.$selectedPlayerId);
    }
    /**获取当前人物 */
    getSelectPlayer(playerId) {
      let obj;
      let playerItem;
      if (this.playerPool) {
        playerItem = this.playerPool.get(playerId);
      } else {
        this.playerPool = /* @__PURE__ */ new Map();
      }
      if (!obj) {
        let playerData = this.getSelectedPlayerData(playerId);
        obj = ResLoader.instance.getResCloneById(playerData == null ? void 0 : playerData["path"]);
        playerItem = obj.getComponent(PlayerItem);
        this.playerPool.set(playerId, playerItem);
        if (playerItem) {
          playerItem.playerData = playerData;
        }
      }
      return playerItem;
    }
    gameStart(stage) {
      this.playerStage = stage;
      this.playerItem = this.getSelectPlayer(this.$selectedPlayerId);
      if (this.playerItem && this.playerStage) {
        this.playerStage.addChild(this.playerItem.obj);
        this.playerItem.gameStart();
      }
    }
  };
  __name(PlayerMgr, "PlayerMgr");

  // src/Game/Enemy/ZombieItem.ts
  var Vector37 = Laya.Vector3;
  var Animator2 = Laya.Animator;
  var SkinnedMeshSprite3D = Laya.SkinnedMeshSprite3D;
  var { regClass: regClass10, property: property10 } = Laya;
  var ZombieItem = class extends BaseItem {
    constructor() {
      super();
      this.totalHealth = 0;
      this.$health = 0;
      /**逻辑间隔 */
      this.logicTime = 0;
      /**移动速度 */
      this.speed = 0;
    }
    /**生命 */
    get health() {
      return this.$health;
    }
    set health(value) {
      if (!isNaN(value)) {
        let oldHealth = this.$health;
        this.$health = value;
        this.healthChange(oldHealth);
      }
    }
    onStart() {
      this.rotNode = this.owner.getChildAt(0);
      this.animator = this.rotNode.getComponent(Animator2);
      this.randomSkin();
    }
    /**血量改变 */
    healthChange(oldHealth) {
      if (this.health <= 0) {
        this.dead();
      }
    }
    get playerController() {
      if (!this.$playerController) {
        this.$playerController = this.obj.getComponent(PlayerController);
      }
      return this.$playerController;
    }
    init() {
      this.zombieStatus = 1001 /* idle */;
      this.playerController.characterController.collisionGroup = Physics3DUtils.COLLISIONFILTERGROUP_CUSTOMFILTER2;
      this.playerController.characterController.canCollideWith = Physics3DUtils.COLLISIONFILTERGROUP_ALLFILTER;
      this.health = this.zombieData["health"];
      this.speed = this.zombieData["speed"];
      this.playerController.moveSpeed = this.speed;
    }
    randomSkin() {
      this.skin1.active = false;
      this.skin2.active = false;
      this.skin3.active = false;
      this.skin4.active = false;
      this.skin5.active = false;
      let ran = Math.random();
      if (ran >= 0 && ran < 0.4) {
        this.skin1.active = true;
      } else if (ran >= 0.4 && ran < 0.6) {
        this.skin2.active = true;
      } else if (ran >= 0.6 && ran < 0.75) {
        this.skin3.active = true;
      } else if (ran >= 0.75 && ran < 0.9) {
        this.skin4.active = true;
      } else if (ran >= 0.9) {
        this.skin5.active = true;
      }
    }
    update(time) {
      if (MainGame.instance.gameStep == 1005 /* GameStart */) {
        this.logicTime += time;
        if (this.logicTime > 4 * 15) {
          this.logicTime = 0;
          let pos = PlayerMgr.instance.getPlayerPos();
          if (Math.abs(pos.x - this.position.x) > 10 || Math.abs(pos.z - this.position.z) > 13) {
            let point = EnemyMgr.instance.getNewPos();
            this.position = new Vector37(pos.x + point.x, 0, pos.z + point.y);
          }
          let angle = Sprite3d.getAngle(this.position, pos);
          this.move(angle);
        }
      }
    }
    changeAni() {
      switch (this.zombieStatus) {
        case 1001 /* idle */:
          AnimatorTool.play(this.animator, "ZombieIdle" /* ZombieIdle */, true, 1, 0, true, 0.1);
          break;
        case 1002 /* walking */:
          AnimatorTool.play(this.animator, "ZombieWalk" /* ZombieWalk */, true, 1.5, 0, true, 0.1);
          break;
        case 1003 /* death */:
          AnimatorTool.play(this.animator, "ZombieDeath" /* ZombieDeath */, false, 1, 0, true, 0.1);
          break;
      }
    }
    idle() {
      if (this.zombieStatus == 1002 /* walking */) {
        this.zombieStatus = 1001 /* idle */;
        this.changeAni();
      }
    }
    move(angle) {
      if (this.zombieStatus != 1003 /* death */) {
        if (this.zombieStatus != 1002 /* walking */) {
          this.zombieStatus = 1002 /* walking */;
          this.changeAni();
        }
        if (!isNaN(angle)) {
          this.playerController.move(angle);
          this.rotNode.transform.localRotationEulerY = angle;
        }
      }
    }
    stopMove() {
      this.playerController.stopMove();
      this.idle();
    }
    dead() {
      this.zombieStatus = 1003 /* death */;
      this.changeAni();
      this.playerController.characterController.canCollideWith = Physics3DUtils.COLLISIONFILTERGROUP_CUSTOMFILTER10;
      this.playerController.stopMove();
      let ran = Math.random();
      if (ran > 0.66) {
        SoundMgr.instance.playSound(2611 /* zombie1 */);
      } else if (ran > 0.33) {
        SoundMgr.instance.playSound(2612 /* zombie2 */);
      } else {
        SoundMgr.instance.playSound(2613 /* zombie3 */);
      }
      Timer.get(2500, this, () => {
        this.clear();
        EventMgr.event("ENEMYDEATH" /* ENEMYDEATH */, 1001 /* zombie */);
      }).start();
    }
    playerDeath() {
      this.stopMove();
    }
    playerResurrection() {
    }
    beHit(pos, damage, value = 0.01) {
      if (this.zombieStatus != 1003 /* death */) {
        this.health -= damage;
        let angle = Sprite3d.getAngle(pos, this.position);
        this.playerController.beHit(angle, value);
      }
    }
    onTriggerEnter(other, self, contact) {
    }
    onCollisionEnter(collision) {
    }
    clearOthers() {
    }
  };
  __name(ZombieItem, "ZombieItem");
  __decorateClass([
    property10({ type: SkinnedMeshSprite3D })
  ], ZombieItem.prototype, "skin1", 2);
  __decorateClass([
    property10({ type: SkinnedMeshSprite3D })
  ], ZombieItem.prototype, "skin2", 2);
  __decorateClass([
    property10({ type: SkinnedMeshSprite3D })
  ], ZombieItem.prototype, "skin3", 2);
  __decorateClass([
    property10({ type: SkinnedMeshSprite3D })
  ], ZombieItem.prototype, "skin4", 2);
  __decorateClass([
    property10({ type: SkinnedMeshSprite3D })
  ], ZombieItem.prototype, "skin5", 2);
  ZombieItem = __decorateClass([
    regClass10("834e827d-f6c6-404f-a4a3-2ccf75708917", "../src/Game/Enemy/ZombieItem.ts")
  ], ZombieItem);

  // src/Game/Enemy/EnemyMgr.ts
  var Vector38 = Laya.Vector3;
  var Pool5 = Laya.Pool;
  var EnemyMgr = class {
    constructor() {
      this.maxZombieNum = 20;
    }
    static get instance() {
      return this._instance ? this._instance : this._instance = new EnemyMgr();
    }
    init() {
      this.zombieList = [];
      this.addEvent();
    }
    addEvent() {
      EventMgr.on("ENEMYDEATH" /* ENEMYDEATH */, this, this.enemyDeath);
      EventMgr.on("PLAYERDEAD" /* PLAYERDEAD */, this, this.playerDeath);
      EventMgr.on("GAMEWIN" /* GAMEWIN */, this, this.gameWin);
      EventMgr.on("GAMELOSE" /* GAMELOSE */, this, this.gameLose);
    }
    gameStart(stage) {
      this.enemyStage = stage;
      let index = 0;
      Timer.get(200, this, () => {
        this.createZombie();
        index++;
        if (index >= this.maxZombieNum) {
          Timer.clearAll(this);
        }
      }).loop().start();
    }
    enemyDeath(enemyEnum) {
      switch (enemyEnum) {
        case 1001 /* zombie */:
          this.createZombie();
          break;
      }
    }
    playerDeath() {
      for (let i = 0; i < this.zombieList.length; i++) {
        let zombieItem = this.zombieList[i];
        if ((zombieItem == null ? void 0 : zombieItem.health) > 0) {
          zombieItem.playerDeath();
        }
      }
    }
    playerResurrection() {
      for (let i = 0; i < this.zombieList.length; i++) {
        let zombieItem = this.zombieList[i];
        if ((zombieItem == null ? void 0 : zombieItem.health) > 0) {
          zombieItem.playerResurrection();
        }
      }
    }
    gameOver() {
      for (let i = 0; i < this.zombieList.length; i++) {
        let zombieItem = this.zombieList[i];
        if ((zombieItem == null ? void 0 : zombieItem.health) > 0) {
          zombieItem.clear();
        }
      }
    }
    gamePause() {
      for (let i = 0; i < this.zombieList.length; i++) {
        let zombieItem = this.zombieList[i];
        if ((zombieItem == null ? void 0 : zombieItem.health) > 0) {
          zombieItem.stopMove();
        }
      }
    }
    gameWin() {
      for (let i = 0; i < this.zombieList.length; i++) {
        let zombieItem = this.zombieList[i];
        if ((zombieItem == null ? void 0 : zombieItem.health) > 0) {
          zombieItem.stopMove();
        }
      }
    }
    gameLose() {
      for (let i = 0; i < this.zombieList.length; i++) {
        let zombieItem = this.zombieList[i];
        if ((zombieItem == null ? void 0 : zombieItem.health) > 0) {
          zombieItem.stopMove();
        }
      }
    }
    createZombie() {
      var _a;
      let zombie;
      zombie = Pool5.getItem("ZOMBIE" /* ZOMBIE */);
      if (!zombie) {
        zombie = ResLoader.instance.getResCloneById((_a = DataTable.EnemyDataTableMap.get(1001 /* zombie */)) == null ? void 0 : _a.path);
      }
      let point = this.getNewPos();
      let pos = PlayerMgr.instance.getPlayerPos();
      let zombieItem = zombie.getComponent(ZombieItem);
      zombieItem.position = new Vector38(pos.x + point.x, pos.y, pos.z + point.y);
      this.enemyStage.addChild(zombie);
      zombieItem.objName = "ZOMBIE" /* ZOMBIE */;
      zombieItem.index++;
      zombieItem.zombieData = DataTable.EnemyDataTableMap.get(1001 /* zombie */);
      zombieItem.init();
      this.zombieList.push(zombieItem);
    }
    getNewPos(ran) {
      if (isNaN(ran)) {
        ran = Math.floor(Math.random() * 4);
      }
      let point = new Laya.Point();
      switch (ran) {
        case 0:
          point.x = -9;
          point.y = -6 + Math.random() * 12;
          break;
        case 1:
          point.x = 9;
          point.y = -6 + Math.random() * 12;
          break;
        case 2:
          point.x = -9 + Math.random() * 18;
          point.y = -6;
          break;
        case 3:
          point.x = -9 + Math.random() * 18;
          point.y = 6;
          break;
      }
      return point;
    }
    explode(pos, range, damage) {
      for (let i = 0; i < this.zombieList.length; i++) {
        let zombieItem = this.zombieList[i];
        if (zombieItem && zombieItem.health > 0) {
          let dis = Vector38.distance(pos, zombieItem.position);
          if (range > dis) {
            zombieItem.beHit(pos, damage, 0.4);
          }
        }
      }
    }
    explode2(pos, angle, rad, r, damage) {
      for (let i = 0; i < this.zombieList.length; i++) {
        let zombieItem = this.zombieList[i];
        if (zombieItem && zombieItem.health > 0) {
          if (Sprite3d.pointInPie(pos.x, pos.z, angle, rad, r, zombieItem.position.x, zombieItem.position.z)) {
            zombieItem.beHit(pos, damage, 0.2);
          }
        }
      }
    }
  };
  __name(EnemyMgr, "EnemyMgr");

  // src/Game/Bullet/BulletItem.ts
  var Vector39 = Laya.Vector3;
  var PhysicsCollider = Laya.PhysicsCollider;
  var { regClass: regClass11, property: property11 } = Laya;
  var BulletItem = class extends BaseItem {
    constructor() {
      super();
      /**爆炸类型 */
      this.type = 0;
      /**爆炸范围 */
      this.expRange = 0;
      /**飞行距离 */
      this.flightDis = 0;
      /**伤害 */
      this.damage = 0;
      /**是否存在 */
      this.isActive = true;
      /**最大允许击杀 */
      this.maxKillNum = 0;
      /**是否超出距离 */
      this.isOverDis = false;
    }
    init() {
      if (this.bulletData) {
        this.speed = this.bulletData["speed"];
        this.type = this.bulletData["type"];
        this.expRange = this.bulletData["expRange"];
        this.flightDis = this.bulletData["flightDis"];
        this.damage = this.bulletData["damage"];
        this.maxKillNum = this.bulletData["maxKillNum"];
        this.startPos = this.position.clone();
        this.isActive = true;
        this.isOverDis = false;
      }
      this.phy = this.obj.getComponent(PhysicsCollider);
      if (this.phy) {
        this.phy.canCollideWith = Physics3DUtils.COLLISIONFILTERGROUP_CUSTOMFILTER2;
        this.phy.collisionGroup = Physics3DUtils.COLLISIONFILTERGROUP_CUSTOMFILTER4;
      }
    }
    update(time) {
      if (MainGame.instance.gameStep == 1005 /* GameStart */) {
        if (!this.isOverDis) {
          this.transform.translate(new Vector39(0, 0, this.speed));
          let len = Vector39.distance(this.startPos, this.position);
          if (len >= this.flightDis) {
            this.overDis();
          }
        }
      }
    }
    onTriggerEnter(other, self, contact) {
      let baseItem = other.owner.getComponent(ZombieItem);
      if (baseItem) {
        this.hitEnemy(baseItem);
      }
    }
    hitEnemy(baseItem) {
      switch (this.type) {
        case 0:
          baseItem.beHit(this.position, this.damage);
          this.clear();
          break;
        case 1:
          this.explode(this.expRange);
          this.clear();
          break;
        case 2:
          baseItem.beHit(this.position, this.damage);
          break;
        case 3:
          baseItem.beHit(this.position, this.damage);
          break;
        case 4:
          break;
      }
      if (this.maxKillNum > 0) {
        this.maxKillNum--;
        if (this.maxKillNum <= 0) {
          this.clear();
        }
      }
    }
    overDis() {
      this.isOverDis = true;
      switch (this.type) {
        case 0:
          this.clear();
          break;
        case 1:
          this.explode(this.expRange);
          this.clear();
          break;
        case 2:
          this.clear();
          break;
        case 3:
          this.clear();
          break;
        case 4:
          this.explode2(this.expRange);
          break;
      }
    }
    explode(range) {
      SoundMgr.instance.playSound(2603 /* Explosion1 */);
      EnemyMgr.instance.explode(this.position, range, this.damage);
      VFXMgr.instance.createVFX(6801 /* Explode1 */, 500, this.position, this.owner.parent);
    }
    explode2(range) {
      EnemyMgr.instance.explode2(this.position, this.localRotationEulerY, Math.PI / 2, range, this.damage);
      Timer.get(500, this, () => {
        this.clear();
      }).start();
    }
    clearOthers() {
      this.isActive = false;
    }
  };
  __name(BulletItem, "BulletItem");
  BulletItem = __decorateClass([
    regClass11("c08609ed-ebe2-4062-8e7f-0779439120be", "../src/Game/Bullet/BulletItem.ts")
  ], BulletItem);

  // src/Game/Bullet/BulletMgr.ts
  var Pool6 = Laya.Pool;
  var BulletMgr = class {
    static get instance() {
      return this._instance ? this._instance : this._instance = new BulletMgr();
    }
    init() {
    }
    gameStart(stage) {
      this.bulletStage = stage;
      this.bulletList = [];
    }
    createBullet(bulletId, shootPos) {
      let bullet = Pool6.getItem("BULLET" /* BUllET */ + bulletId);
      let bulletData = DataTable.BulletDataTableMap.get(bulletId);
      if (!bullet) {
        bullet = ResLoader.instance.getResCloneById(bulletData["path"]);
      }
      let bulletItem = bullet.getComponent(BulletItem);
      bulletItem.position = shootPos.transform.position;
      bulletItem.rotationEuler = shootPos.transform.rotationEuler;
      bulletItem.bulletData = bulletData;
      bulletItem.objName = "BULLET" /* BUllET */ + bulletId;
      this.bulletStage.addChild(bullet);
      bulletItem.init();
      this.bulletList.push(bulletItem);
    }
    gameOver() {
      for (let i = 0; i < this.bulletList.length; i++) {
        let item = this.bulletList[i];
        if (item && item.isActive) {
          item.clear();
        }
      }
    }
  };
  __name(BulletMgr, "BulletMgr");

  // src/Game/Ground/GroundItem.ts
  var Vector310 = Laya.Vector3;
  var { regClass: regClass12, property: property12 } = Laya;
  var GroundItem = class extends Script3d {
    constructor() {
      super();
      this.staticY = -0.13;
    }
    init() {
      this.position = new Vector310(this.index % 6 * 5 - 15, this.staticY, Math.floor(this.index / 6) * 5 - 5);
    }
    changePos(playerPos) {
      if (this.position.x > playerPos.x + 12) {
        this.position = new Vector310(this.position.x - 30, this.staticY, this.position.z);
      }
      if (this.position.x < playerPos.x - 17) {
        this.position = new Vector310(this.position.x + 30, this.staticY, this.position.z);
      }
      if (this.position.z > playerPos.z + 12) {
        this.position = new Vector310(this.position.x, this.staticY, this.position.z - 20);
      }
      if (this.position.z < playerPos.z - 7) {
        this.position = new Vector310(this.position.x, this.staticY, this.position.z + 20);
      }
    }
  };
  __name(GroundItem, "GroundItem");
  GroundItem = __decorateClass([
    regClass12("e2100ba2-ca09-4fc2-8312-90645c381ddc", "../src/Game/Ground/GroundItem.ts")
  ], GroundItem);

  // src/Game/Ground/GroundMgr.ts
  var GroundMgr = class {
    static get instance() {
      return this._instance ? this._instance : this._instance = new GroundMgr();
    }
    init() {
      if (!this.$grass) {
        this.$grass = ResLoader.instance.getResCloneById(6701 /* grass */);
      }
    }
    gameStart(grassStage) {
      this.$stage = grassStage;
      if (this.groundList) {
        for (let i = 0; i < this.groundList.length; i++) {
          let groundItem = this.groundList[i];
          this.$stage.addChild(groundItem.owner);
          groundItem.init();
        }
      } else {
        this.groundList = [];
        for (let i = 0; i < 24; i++) {
          let grass = ResLoader.instance.getResCloneById(6701 /* grass */);
          let groundItem = grass.getComponent(GroundItem);
          groundItem.index = i;
          this.$stage.addChild(grass);
          this.groundList.push(groundItem);
          groundItem.init();
        }
      }
      Timer.get(16, this, () => {
        let pos = PlayerMgr.instance.getPlayerPos();
        for (let i = 0; i < this.groundList.length; i++) {
          let groundItem = this.groundList[i];
          groundItem.changePos(pos);
        }
      }).frameLoop().start();
    }
    gamePause() {
    }
    gameOver() {
      Timer.clearAll(this);
    }
  };
  __name(GroundMgr, "GroundMgr");

  // src/Game/MainGame.ts
  var { regClass: regClass13, property: property13 } = Laya;
  var MainGame = class {
    constructor() {
      this.$isInit = false;
      /**复活次数 */
      this.resurrectionTimes = 0;
      /**击杀计数器 */
      this.killNum = 0;
    }
    static get instance() {
      return this._instance ? this._instance : this._instance = new MainGame();
    }
    init() {
      if (!this.$isInit) {
        this.$isInit = true;
        this.addEvent();
        this.reset();
        WeaponMgr.instance.init();
        PlayerMgr.instance.init();
        EnemyMgr.instance.init();
        BulletMgr.instance.init();
      }
    }
    /**获取当前游戏的流程 */
    get gameStep() {
      return this.$gameStep;
    }
    addEvent() {
      EventMgr.on("GAMESCENELOADED" /* GAMESCENELOADED */, this, this.gameStart);
      EventMgr.on("ENEMYDEATH" /* ENEMYDEATH */, this, this.skillEnemy);
      EventMgr.on("PLAYERDEAD" /* PLAYERDEAD */, this, this.playerDeath);
      EventMgr.on("PLAEYRRESURRECTION" /* PLAEYRRESURRECTION */, this, this.playerResurrection);
      EventMgr.on("GAMEPAUSE" /* GAMEPAUSE */, this, this.gamePause);
      EventMgr.on("GAMERESUME" /* GAMERESUME */, this, this.gameResume);
      EventMgr.on("GAMERESTART" /* GAMERESTART */, this, this.gameRestart);
      EventMgr.on("GAMEOVER" /* GAMEOVER */, this, this.gameOver);
    }
    reset() {
      this.$gameStep = 1001 /* ResetGame */;
      this.goToMain();
      this.gameScene = null;
      this.killNum = 0;
      this.resurrectionTimes = 0;
    }
    /**开始选择玩家 */
    selectPlayerAndWeapon() {
      this.$gameStep = 1002 /* SelectPlayer */;
      Scene3dMgr.instance.open(1002 /* SelectPlayerScene */);
      Scene3dMgr.instance.close(1001 /* MainScene */);
    }
    /**返回主页 */
    goToMain() {
      Scene3dMgr.instance.close(1002 /* SelectPlayerScene */);
      Scene3dMgr.instance.open(1001 /* MainScene */);
    }
    loadGameScene() {
      this.$gameStep = 1004 /* LoadGameScene */;
      Scene3dMgr.instance.close(1002 /* SelectPlayerScene */);
      Scene3dMgr.instance.open(1003 /* GameScene */);
    }
    /**游戏开始 */
    gameStart(gameScene) {
      this.$gameStep = 1005 /* GameStart */;
      this.gameScene = gameScene;
      this.cameraItem = this.gameScene.cameraItem;
      this.gameScene.cameraItem.gameStart();
      GroundMgr.instance.gameStart(this.gameScene.groundStage);
      PlayerMgr.instance.gameStart(this.gameScene.playerStage);
      BulletMgr.instance.gameStart(this.gameScene.bulletStage);
      WeaponMgr.instance.gameStart();
      this.gameScene.cameraItem.initFallowTarget(PlayerMgr.instance.playerItem.owner);
      Timer.get(1400, this, () => {
        EnemyMgr.instance.gameStart(this.gameScene.zombieStage);
      }).start();
      this.setGameTime();
    }
    /**游戏重开 */
    gameRestart() {
      this.killNum = 0;
      this.resurrectionTimes = 0;
      PlayerMgr.instance.gameOver();
      EnemyMgr.instance.gameOver();
      BulletMgr.instance.gameOver();
      Timer.clearAll(this);
      this.gameStart(this.gameScene);
    }
    /**开启一个游戏倒计时,倒计时结束游戏胜利 */
    setGameTime() {
      this.gameTime = GameData.gameTime;
      this.gameTimer = Timer.get(1e3, this, () => {
        this.gameTime--;
        if (this.gameTime <= 0) {
          Timer.clearAll(this);
          this.gameWin();
        }
      }).loop().start();
    }
    /**击杀 */
    skillEnemy() {
      this.killNum++;
    }
    /**玩家死亡 */
    playerDeath() {
      this.gamePause();
    }
    /**玩家复活 */
    playerResurrection() {
      this.resurrectionTimes++;
      this.gameResume();
      PlayerMgr.instance.playerResurrection();
      EnemyMgr.instance.playerResurrection();
    }
    /**游戏暂停 */
    gamePause() {
      this.$gameStep = 1006 /* GamePause */;
      this.gameTimer.pause();
      EnemyMgr.instance.gamePause();
    }
    /**游戏继续*/
    gameResume() {
      this.$gameStep = 1005 /* GameStart */;
      this.gameTimer.resume();
    }
    gameWin() {
      this.$gameStep = 1009 /* GameWin */;
      EventMgr.event("GAMEWIN" /* GAMEWIN */);
      PlayerMgr.instance.gameWin();
    }
    gameLose() {
      this.$gameStep = 1008 /* GameLose */;
    }
    gameOver() {
      EnemyMgr.instance.gameOver();
      PlayerMgr.instance.gameOver();
      BulletMgr.instance.gameOver();
      Scene3dMgr.instance.close(1003 /* GameScene */);
      this.reset();
    }
  };
  __name(MainGame, "MainGame");
  MainGame = __decorateClass([
    regClass13("17be9e1a-ac52-43f3-8894-fa783a42a738", "../src/Game/MainGame.ts")
  ], MainGame);

  // src/Localization/LocalizationText.ts
  var Text = Laya.Text;
  var Label = Laya.Label;
  var { regClass: regClass14, property: property14 } = Laya;
  var LocalizationText = class extends Laya.Script {
    constructor() {
      super();
    }
    onEnable() {
      if (this.owner instanceof Text || this.owner instanceof Label) {
        this.text = this.owner;
        EventMgr.on("LANGUAGECHANGE" /* LANGUAGECHANGE */, this, this.changeLanguage);
        this.changeLanguage();
      }
    }
    changeLanguage() {
      if (this.localizationKey) {
        let value = LocalizationMgr.$getLocalizationByKey(this.localizationKey);
        if (value) {
          this.text.text = value;
        }
      } else {
        if (this.text.text != "") {
          this.localizationKey = this.text.text;
          let value = LocalizationMgr.$getLocalizationByKey(this.localizationKey);
          if (value) {
            this.text.text = value;
          }
        }
      }
    }
    onDisable() {
      EventMgr.offAllCaller(this);
    }
  };
  __name(LocalizationText, "LocalizationText");
  __decorateClass([
    property14({ type: String })
  ], LocalizationText.prototype, "localizationKey", 2);
  LocalizationText = __decorateClass([
    regClass14("5a62e727-31ad-49bf-b53f-96fbff2b0a39", "../src/Localization/LocalizationText.ts")
  ], LocalizationText);

  // src/Scene3d/GameScene.ts
  var Sprite3D2 = Laya.Sprite3D;
  var DirectionLight = Laya.DirectionLight;
  var { regClass: regClass15, property: property15 } = Laya;
  var GameScene = class extends Scene3d {
    constructor() {
      super();
    }
    onOpened(param) {
      EventMgr.event("GAMESCENELOADED" /* GAMESCENELOADED */, this);
    }
    addEvent() {
    }
    onClosed() {
    }
  };
  __name(GameScene, "GameScene");
  __decorateClass([
    property15({ type: CameraItem })
  ], GameScene.prototype, "cameraItem", 2);
  __decorateClass([
    property15({ type: Sprite3D2 })
  ], GameScene.prototype, "groundStage", 2);
  __decorateClass([
    property15({ type: DirectionLight })
  ], GameScene.prototype, "light", 2);
  __decorateClass([
    property15({ type: Sprite3D2 })
  ], GameScene.prototype, "playerStage", 2);
  __decorateClass([
    property15({ type: Sprite3D2 })
  ], GameScene.prototype, "zombieStage", 2);
  __decorateClass([
    property15({ type: Sprite3D2 })
  ], GameScene.prototype, "bulletStage", 2);
  GameScene = __decorateClass([
    regClass15("0706d1ae-b0b6-47a5-9387-2a6360b2893e", "../src/Scene3d/GameScene.ts")
  ], GameScene);

  // src/Scene3d/MainScene.ts
  var { regClass: regClass16, property: property16 } = Laya;
  var MainScene = class extends Scene3d {
    constructor() {
      super();
    }
    onOpened(param) {
    }
  };
  __name(MainScene, "MainScene");
  MainScene = __decorateClass([
    regClass16("71c8c727-1736-44b1-984f-02439872df63", "../src/Scene3d/MainScene.ts")
  ], MainScene);

  // src/Enum/PlayerEnum.ts
  var PlayerEnum = /* @__PURE__ */ ((PlayerEnum2) => {
    PlayerEnum2[PlayerEnum2["BusinessMan"] = 1001] = "BusinessMan";
    PlayerEnum2[PlayerEnum2["BombDisEX"] = 1002] = "BombDisEX";
    PlayerEnum2[PlayerEnum2["GreatMagician"] = 1003] = "GreatMagician";
    PlayerEnum2[PlayerEnum2["Kingsman"] = 1004] = "Kingsman";
    PlayerEnum2[PlayerEnum2["ScoutRobot"] = 1005] = "ScoutRobot";
    return PlayerEnum2;
  })(PlayerEnum || {});

  // src/Scene3d/SelectPlayerScene.ts
  var Sprite3D3 = Laya.Sprite3D;
  var { regClass: regClass17, property: property17 } = Laya;
  var SelectPlayerScene = class extends Scene3d {
    constructor() {
      super();
    }
    onOpened(param) {
      if (!this.$playerList) {
        this.$playerList = [];
        this.$playerList = [];
        for (let item in PlayerEnum) {
          if (!isNaN(Number(item))) {
            this.$playerList.push(Number(item));
          }
        }
      }
    }
    addEvent() {
      this.regEvent("SHOWPLAYER" /* SHOWPLAYER */, this.showPlayer);
    }
    showPlayer(playerId) {
      var _a, _b;
      (_a = this.playerItem) == null ? void 0 : _a.clear();
      this.playerItem = PlayerMgr.instance.getSelectPlayer(playerId);
      this.playerItem && this.playerStage.addChild(this.playerItem.obj);
      (_b = this.playerItem) == null ? void 0 : _b.selectPlayer();
    }
    onClosed() {
      var _a;
      (_a = this.playerItem) == null ? void 0 : _a.clear();
    }
  };
  __name(SelectPlayerScene, "SelectPlayerScene");
  __decorateClass([
    property17({ type: Sprite3D3 })
  ], SelectPlayerScene.prototype, "playerStage", 2);
  SelectPlayerScene = __decorateClass([
    regClass17("34405a80-13b4-48be-ac44-94bb920f1518", "../src/Scene3d/SelectPlayerScene.ts")
  ], SelectPlayerScene);

  // src/Util/Base64.ts
  var Base64 = class {
    /**
     * 编码
     * @param input 输入 
     */
    static encode(input) {
      let output = "";
      let chr1, chr2, chr3, enc1, enc2, enc3, enc4;
      let i = 0;
      input = this._utf8_encode(input);
      while (i < input.length) {
        chr1 = input.charCodeAt(i++);
        chr2 = input.charCodeAt(i++);
        chr3 = input.charCodeAt(i++);
        enc1 = chr1 >> 2;
        enc2 = (chr1 & 3) << 4 | chr2 >> 4;
        enc3 = (chr2 & 15) << 2 | chr3 >> 6;
        enc4 = chr3 & 63;
        if (isNaN(chr2)) {
          enc3 = enc4 = 64;
        } else if (isNaN(chr3)) {
          enc4 = 64;
        }
        output = output + this._keyStr.charAt(enc1) + this._keyStr.charAt(enc2) + this._keyStr.charAt(enc3) + this._keyStr.charAt(enc4);
      }
      return output;
    }
    /**
     * 译码
     * @param input 输入
     */
    static decode(input) {
      let output = "";
      let chr1, chr2, chr3;
      let enc1, enc2, enc3, enc4;
      let i = 0;
      input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");
      while (i < input.length) {
        enc1 = this._keyStr.indexOf(input.charAt(i++));
        enc2 = this._keyStr.indexOf(input.charAt(i++));
        enc3 = this._keyStr.indexOf(input.charAt(i++));
        enc4 = this._keyStr.indexOf(input.charAt(i++));
        chr1 = enc1 << 2 | enc2 >> 4;
        chr2 = (enc2 & 15) << 4 | enc3 >> 2;
        chr3 = (enc3 & 3) << 6 | enc4;
        output = output + String.fromCharCode(chr1);
        if (enc3 !== 64) {
          output = output + String.fromCharCode(chr2);
        }
        if (enc4 !== 64) {
          output = output + String.fromCharCode(chr3);
        }
      }
      output = this._utf8_decode(output);
      return output;
    }
    // 
    static _utf8_encode(string) {
      string = string.replace(/\r\n/g, "\n");
      let utftext = "";
      for (let n = 0; n < string.length; n++) {
        const c = string.charCodeAt(n);
        if (c < 128) {
          utftext += String.fromCharCode(c);
        } else if (c > 127 && c < 2048) {
          utftext += String.fromCharCode(c >> 6 | 192);
          utftext += String.fromCharCode(c & 63 | 128);
        } else {
          utftext += String.fromCharCode(c >> 12 | 224);
          utftext += String.fromCharCode(c >> 6 & 63 | 128);
          utftext += String.fromCharCode(c & 63 | 128);
        }
      }
      return utftext;
    }
    // 
    static _utf8_decode(utftext) {
      let string = "";
      let i = 0;
      let c = 0, c2 = 0, c3 = 0;
      while (i < utftext.length) {
        c = utftext.charCodeAt(i);
        if (c < 128) {
          string += String.fromCharCode(c);
          i++;
        } else if (c > 191 && c < 224) {
          c2 = utftext.charCodeAt(i + 1);
          string += String.fromCharCode((c & 31) << 6 | c2 & 63);
          i += 2;
        } else {
          c2 = utftext.charCodeAt(i + 1);
          c3 = utftext.charCodeAt(i + 2);
          string += String.fromCharCode((c & 15) << 12 | (c2 & 63) << 6 | c3 & 63);
          i += 3;
        }
      }
      return string;
    }
  };
  __name(Base64, "Base64");
  //
  Base64._keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";

  // src/Util/RockerBox.ts
  var Button = Laya.Button;
  var Point2 = Laya.Point;
  var { regClass: regClass18, property: property18 } = Laya;
  var RockerBox = class extends Laya.Script {
    constructor() {
      super();
      this.dropLen = 110;
      this.touchId = -1;
      /**欧拉角
      *       ±180°
      *         |
      * 90° ----+---- -90°
      *         |
      *         0
      */
      this.rockerAngle = 0;
      /**幅度 */
      this.rockerValue = 0;
    }
    onEnable() {
      this.rockerBox = this.owner;
      this.touchId = -1;
      this.rockerIsDown = false;
      this.freeBar.selected = false;
      this.rockerBox.alpha = 0.2;
      this.initBarX = this.freeBar.x;
      this.initBarY = this.freeBar.y;
      this.mousePoint = new Point2(0, 0);
      this.freeBar.on(Laya.Event.MOUSE_DOWN, this, this.rockerDown);
      Laya.stage.on(Laya.Event.MOUSE_MOVE, this, this.rockerMove);
      Laya.stage.on(Laya.Event.MOUSE_UP, this, this.rockerUp);
    }
    rockerDown(evt) {
      if (this.touchId != -1)
        return;
      evt.stopPropagation();
      this.touchId = evt.touchId;
      this.rockerIsDown = true;
      this.freeBar.selected = true;
      this.mouseDownX = this.rockerBox.mouseX;
      this.mouseDownY = this.rockerBox.mouseY;
      this.rockerBox.alpha = 0.8;
    }
    rockerMove(evt) {
      if (!this.rockerIsDown)
        return;
      if (evt.touchId != this.touchId)
        return;
      evt.stopPropagation();
      this.mousePoint.x = Math.round(evt.touchPos.x / Laya.stage.clientScaleX);
      this.mousePoint.y = Math.round(evt.touchPos.y / Laya.stage.clientScaleY);
      this.rockerBox.globalToLocal(this.mousePoint, false);
      let mouseX = this.mousePoint.x;
      let mouseY = this.mousePoint.y;
      let offX = mouseX - this.mouseDownX;
      let offY = mouseY - this.mouseDownY;
      this.rockerAngle = Math.atan2(offX, offY) * 180 / Math.PI;
      let dis = Math.sqrt((this.mouseDownX - mouseX) * (this.mouseDownX - mouseX) + (this.mouseDownY - mouseY) * (this.mouseDownY - mouseY));
      dis = dis < 0 ? -dis : dis;
      if (dis < this.dropLen) {
        this.freeBar.x = this.initBarX + offX;
        this.freeBar.y = this.initBarY + offY;
        this.rockerValue = dis / this.dropLen;
      } else {
        let radians = Math.PI / 180 * this.rockerAngle;
        let x = Math.floor(Math.sin(radians) * this.dropLen + this.initBarX);
        let y = Math.floor(Math.cos(radians) * this.dropLen + this.initBarY);
        this.freeBar.x = x;
        this.freeBar.y = y;
        this.rockerValue = 1;
      }
      this.startMove();
    }
    rockerUp(evt) {
      if (this.touchId == evt.touchId) {
        this.touchId = -1;
        this.rockerIsDown = false;
        this.freeBar.x = this.initBarX;
        this.freeBar.y = this.initBarY;
        this.freeBar.selected = false;
        this.stopMove();
        this.rockerBox.alpha = 0.2;
      }
    }
    /**初始化目标 */
    initTarget(caller, startMove, stopMove) {
      this.caller = caller;
      this.FstartMove = startMove;
      this.FstopMove = stopMove;
    }
    /**开始移动 */
    startMove() {
      this.FstartMove && this.caller && this.FstartMove.apply(this.caller, [this.rockerAngle, this.rockerValue]);
    }
    /**停止移动 */
    stopMove() {
      this.FstopMove && this.caller && this.FstopMove.call(this.caller);
    }
    onDisable() {
      this.freeBar.off(Laya.Event.MOUSE_DOWN, this, this.rockerDown);
      Laya.stage.off(Laya.Event.MOUSE_MOVE, this, this.rockerMove);
      Laya.stage.off(Laya.Event.MOUSE_UP, this, this.rockerUp);
      this.caller = null;
      this.FstartMove = null;
      this.FstopMove = null;
    }
  };
  __name(RockerBox, "RockerBox");
  __decorateClass([
    property18({ type: Button })
  ], RockerBox.prototype, "freeBar", 2);
  __decorateClass([
    property18({ type: Number })
  ], RockerBox.prototype, "dropLen", 2);
  RockerBox = __decorateClass([
    regClass18("7204f275-aa8d-45b5-b2eb-b4122c72d7a3", "../src/Util/RockerBox.ts")
  ], RockerBox);

  // src/Util/Slider.ts
  var Image2 = Laya.Image;
  var { regClass: regClass19, property: property19 } = Laya;
  var Slider = class extends Laya.Script {
    constructor() {
      super();
      this.isH = false;
      this.value = 0.7;
      this.$isTouch = false;
    }
    onAwake() {
      this.$isTouch = false;
      this.$slider = this.owner;
      this.$imgMask = this.imgLoad.mask;
      this.$offX = this.imgLoad.width * this.value;
      this.$offY = this.imgLoad.height * this.value;
      this.changeMask();
    }
    onMouseDown(evt) {
      if (evt.target == this.imgBar) {
        this.$isTouch = true;
        if (this.isH) {
          this.$start = Laya.stage.mouseX;
        } else {
          this.$start = Laya.stage.mouseY;
        }
      }
    }
    onMouseMove(evt) {
      if (evt.target == this.imgBar && this.$isTouch) {
        if (this.isH) {
          this.$offX += Laya.stage.mouseX - this.$start;
          this.$offX = this.$offX > this.imgLoad.width ? this.imgLoad.width : this.$offX;
          this.$offX = this.$offX < 0 ? 0 : this.$offX;
          this.value = this.$offX / this.imgLoad.width;
          this.$start = Laya.stage.mouseX;
        } else {
          this.$offY += Laya.stage.mouseY - this.$start;
          this.$offY = this.$offY > this.imgLoad.height ? this.imgLoad.height : this.$offY;
          this.$offY = this.$offY < 0 ? 0 : this.$offY;
          this.value = this.$offX / this.imgLoad.height;
          this.$start = Laya.stage.mouseY;
        }
        this.valueChange();
      }
    }
    onMouseUp(evt) {
      this.$isTouch = false;
    }
    onMouseOver(evt) {
      this.$isTouch = false;
    }
    onMouseOut(evt) {
      this.$isTouch = false;
    }
    /**初始化 */
    init(caller, callback, value = 1) {
      if (!isNaN(value)) {
        this.value = value;
        this.changeMask();
      }
      this.$caller = caller;
      this.$callback = callback;
    }
    changeMask() {
      if (this.isH) {
        this.$imgMask.width = this.imgLoad.width * this.value;
        this.imgBar.x = this.imgLoad.width * this.value + this.imgBg.x;
      } else {
        this.$imgMask.height = this.imgLoad.height * this.value;
        this.imgBar.y = this.imgLoad.height * this.value + this.imgBg.y;
      }
    }
    valueChange() {
      this.changeMask();
      if (this.$caller && this.$callback) {
        this.$callback.call(this.$caller, this.value);
      }
    }
    onDisable() {
    }
  };
  __name(Slider, "Slider");
  __decorateClass([
    property19({ type: Boolean })
  ], Slider.prototype, "isH", 2);
  __decorateClass([
    property19({ type: Image2 })
  ], Slider.prototype, "imgLoad", 2);
  __decorateClass([
    property19({ type: Image2 })
  ], Slider.prototype, "imgBar", 2);
  __decorateClass([
    property19({ type: Image2 })
  ], Slider.prototype, "imgBg", 2);
  __decorateClass([
    property19({ type: Number })
  ], Slider.prototype, "value", 2);
  Slider = __decorateClass([
    regClass19("35b37bb8-b4f2-4360-8030-42b6c06ee038", "../src/Util/Slider.ts")
  ], Slider);

  // src/Util/StringUtil.ts
  var StringUtil = class {
    /**小数转百分比，默认保留两位小数 */
    static num2percentage(num, d = 2) {
      num = num * 100;
      return num.toFixed(d) + "%";
    }
    /**获取随机整数  */
    static randNum(min, max) {
      let range = max - min;
      let rand = Math.random();
      let num = min + Math.round(rand * range);
      return num;
    }
    /**随机排序数组 */
    static shuffle(arr) {
      let i = arr.length, t, j;
      while (--i) {
        j = Math.floor(Math.random() * i);
        t = arr[i];
        arr[i] = arr[j];
        arr[j] = t;
      }
    }
    /**
     * RGB转16色
     * @param str RGB(23, 245, 56)
     * @returns string
     */
    static colorHex(str) {
      let reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
      if (/^(rgb|RGB)/.test(str)) {
        let aColor = str.replace(/(?:\(|\)|rgb|RGB)*/g, "").split(",");
        let strHex = "#";
        for (let i = 0; i < aColor.length; i++) {
          let hex = Number(aColor[i]).toString(16);
          if (hex.length < 2) {
            hex = "0" + hex;
          }
          strHex += hex;
        }
        if (strHex.length !== 7) {
          strHex = str;
        }
        return strHex;
      } else if (reg.test(str)) {
        let aNum = str.replace(/#/, "").split("");
        if (aNum.length === 6) {
          return str;
        } else if (aNum.length === 3) {
          let numHex = "#";
          for (let i = 0; i < aNum.length; i += 1) {
            numHex += aNum[i] + aNum[i];
          }
          return numHex;
        }
      }
      return str;
    }
    /**
     * 16色 转 RGB
     * @param str #34538b
     * @returns v3
     */
    static colorRgb(str) {
      str = str.toLowerCase();
      let color = this._colorDic[str];
      if (color) {
        return color;
      }
      var reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
      if (str && reg.test(str)) {
        if (str.length === 4) {
          var sColorNew = "#";
          for (var i = 1; i < 4; i += 1) {
            sColorNew += str.slice(i, i + 1).concat(str.slice(i, i + 1));
          }
          str = sColorNew;
        }
        var sColorChange = [];
        for (var i = 1; i < 7; i += 2) {
          sColorChange.push(parseInt("0x" + str.slice(i, i + 2)));
        }
        this._colorDic[str] = sColorChange;
        return sColorChange;
      } else {
        console.log("\u8F6C\u6362\u9519\u8BEF");
        return [0, 0, 0];
      }
    }
    /**
     * 格式化单位
     * @param num 
     * @returns 
     */
    static formatToUnitEN(num) {
      num = Math.round(num);
      let result = "";
      if (("" + num).length > 15) {
        result = (num / 1e15).toFixed(2) + "MB";
      } else if (("" + num).length > 12) {
        result = (num / 1e12).toFixed(2) + "KB";
      } else if (("" + num).length > 9) {
        result = (num / 1e9).toFixed(2) + "B";
      } else if (("" + num).length > 6) {
        result = (num / 1e6).toFixed(2) + "M";
      } else if (("" + num).length > 3) {
        result = (num / 1e3).toFixed(2) + "K";
      } else {
        result = "" + num.toFixed(0);
      }
      return result;
    }
  };
  __name(StringUtil, "StringUtil");
  StringUtil._colorDic = {};

  // src/Util/Toggle.ts
  var Image3 = Laya.Image;
  var { regClass: regClass20, property: property20 } = Laya;
  var Toggle = class extends Laya.Script {
    constructor() {
      super();
      this.isON = false;
    }
    onEnable() {
      this.$imgBg = this.owner;
      this.$imgBg.on(Laya.Event.CLICK, this, this.changeValue);
    }
    init(caller, callback, isON) {
      if (isON != void 0) {
        this.isON = isON;
      }
      this.$caller = caller;
      this.$callback = callback;
      this.changeItem();
    }
    changeItem() {
      if (this.isON) {
        this.imgItem.x = 85;
        this.imgItem.gray = false;
      } else {
        this.imgItem.x = 5;
        this.imgItem.gray = true;
      }
    }
    changeValue() {
      this.isON = !this.isON;
      this.changeItem();
      if (this.$caller && this.$callback) {
        this.$callback.call(this.$caller, this.isON);
      }
    }
    onDisable() {
      this.$imgBg.off(Laya.Event.CLICK, this, this.changeValue);
    }
  };
  __name(Toggle, "Toggle");
  __decorateClass([
    property20({ type: Boolean })
  ], Toggle.prototype, "isON", 2);
  __decorateClass([
    property20({ type: Image3 })
  ], Toggle.prototype, "imgItem", 2);
  Toggle = __decorateClass([
    regClass20("0f5a24a0-2f83-4219-9165-99195082aa4a", "../src/Util/Toggle.ts")
  ], Toggle);

  // src/View/CompleteView.ts
  var Label2 = Laya.Label;
  var Image4 = Laya.Image;
  var { regClass: regClass21, property: property21 } = Laya;
  var CompleteView = class extends UIBase {
    constructor() {
      super();
    }
    onOpened(param) {
      let diamond = Math.floor(MainGame.instance.killNum / 10);
      diamond = diamond > 0 ? diamond : 0;
      this.labelGold.text = (MainGame.instance.killNum * 10).toString();
      this.labelDiamond.text = diamond.toString();
      this.imgStar1.visible = true;
      this.imgStar2.visible = true;
      this.imgStar3.visible = false;
      SoundMgr.instance.playSound(2609 /* win */);
    }
    addEvent() {
      this.regClick(this.imgNext, this.goHome);
      this.regClick(this.imgHome, this.goHome);
      this.regClick(this.imgRestart, this.gameRestart);
    }
    goHome() {
      EventMgr.event("GAMEOVER" /* GAMEOVER */);
      this.close();
    }
    gameRestart() {
      EventMgr.event("GAMERESTART" /* GAMERESTART */);
      this.close();
    }
  };
  __name(CompleteView, "CompleteView");
  __decorateClass([
    property21({ type: Label2 })
  ], CompleteView.prototype, "labelDiamond", 2);
  __decorateClass([
    property21({ type: Label2 })
  ], CompleteView.prototype, "labelGold", 2);
  __decorateClass([
    property21({ type: Image4 })
  ], CompleteView.prototype, "imgStar1", 2);
  __decorateClass([
    property21({ type: Image4 })
  ], CompleteView.prototype, "imgStar2", 2);
  __decorateClass([
    property21({ type: Image4 })
  ], CompleteView.prototype, "imgStar3", 2);
  __decorateClass([
    property21({ type: Image4 })
  ], CompleteView.prototype, "imgNext", 2);
  __decorateClass([
    property21({ type: Image4 })
  ], CompleteView.prototype, "imgRestart", 2);
  __decorateClass([
    property21({ type: Image4 })
  ], CompleteView.prototype, "imgHome", 2);
  CompleteView = __decorateClass([
    regClass21("f5f376ef-5874-4c8a-9a28-8088976bd468", "../src/View/CompleteView.ts")
  ], CompleteView);

  // src/View/DebugView.ts
  var Box = Laya.Box;
  var Image5 = Laya.Image;
  var List = Laya.List;
  var Handler4 = Laya.Handler;
  var { regClass: regClass22, property: property22 } = Laya;
  var DebugView = class extends UIBase {
    constructor() {
      super();
      this.commandList = [
        "\u6DFB\u52A05000\u91D1\u5E01",
        "\u6DFB\u52A05000\u94BB\u77F3",
        "\u6E05\u96F6\u91D1\u5E01\u94BB\u77F3",
        "\u9501\u5B9A\u989D\u5916\u76AE\u80A4",
        "\u6E05\u7406\u6240\u6709\u672C\u5730\u6301\u4E45\u5316"
      ];
    }
    onOpened(param) {
      this.regClick(this.imgShow, this.showHidePanel);
      this.listCommand.renderHandler = new Handler4(this, this.changeItem);
      this.listCommand.selectHandler = new Handler4(this, this.selectItem);
      this.listCommand.array = this.commandList;
    }
    showHidePanel() {
      this.MainPanel.visible = !this.MainPanel.visible;
    }
    changeItem(box, index) {
      let Label10 = box.getChildByName("Label");
      Label10.text = box.dataSource;
    }
    selectItem(index) {
      switch (index) {
        case 0:
          GameData.gold += 5e3;
          EventMgr.event("GOLDCHANGE" /* GOLDCHANGE */);
          break;
        case 1:
          GameData.diamond += 5e3;
          EventMgr.event("DIAMONDCHANGE" /* DIAMONDCHANGE */);
          break;
        case 2:
          GameData.diamond = 0;
          GameData.gold = 0;
          EventMgr.event("DIAMONDCHANGE" /* DIAMONDCHANGE */);
          EventMgr.event("GOLDCHANGE" /* GOLDCHANGE */);
          break;
        case 3:
          LocalStorageMgr.setItem("UNLOCKPLAYERLIST" /* UNLOCKPLAYERLIST */, JSON.stringify([1001]));
          break;
        case 4:
          Laya.LocalStorage.clear();
          break;
      }
      this.listCommand.selectedIndex = -1;
    }
  };
  __name(DebugView, "DebugView");
  __decorateClass([
    property22({ type: Image5 })
  ], DebugView.prototype, "imgShow", 2);
  __decorateClass([
    property22({ type: Box })
  ], DebugView.prototype, "MainPanel", 2);
  __decorateClass([
    property22({ type: List })
  ], DebugView.prototype, "listCommand", 2);
  DebugView = __decorateClass([
    regClass22("5ca51831-1d23-46b6-a853-a10d5da54d6c", "../src/View/DebugView.ts")
  ], DebugView);

  // src/View/GameView.ts
  var Label3 = Laya.Label;
  var Image6 = Laya.Image;
  var List2 = Laya.List;
  var Handler5 = Laya.Handler;
  var { regClass: regClass23, property: property23 } = Laya;
  var GameView = class extends UIBase {
    constructor() {
      super();
      this.health = 0;
      this.totalHealth = 0;
    }
    onOpened(param) {
      this.rocketBoxL.initTarget(PlayerMgr.instance, PlayerMgr.instance.startMove, PlayerMgr.instance.stopMove);
      this.rocketBoxR.initTarget(PlayerMgr.instance, PlayerMgr.instance.startShoot, PlayerMgr.instance.stopShoot);
      this.playerData = PlayerMgr.instance.getSelectedPlayerData(PlayerMgr.instance.selectedPlayerId);
      this.totalHealth = this.health = this.playerData.health;
      Timer.get(1, this, () => {
        let min = Math.floor(MainGame.instance.gameTime / 60);
        let sec = MainGame.instance.gameTime % 60;
        this.labelTime.text = "0" + min + ":" + (sec < 10 ? "0" + sec : sec);
        let num = MainGame.instance.killNum;
        if (num < 10) {
          this.labelKill.text = "000" + num;
        } else if (num < 100) {
          this.labelKill.text = "00" + num;
        } else if (num < 1e3) {
          this.labelKill.text = "0" + num;
        }
      }).frameLoop().start();
    }
    addEvent() {
      this.listHealth.renderHandler = new Handler5(this, this.changeHealthItem);
      this.regEvent("HEALTHCHANGE" /* HEALTHCHANGE */, this.changeHealth, true);
      this.regEvent("PLAYERDEAD" /* PLAYERDEAD */, this.playerDeath);
      this.regEvent("GAMEOVER" /* GAMEOVER */, this.gameOver);
      this.regEvent("GAMERESTART" /* GAMERESTART */, this.gameRestart);
      this.regEvent("GAMEWIN" /* GAMEWIN */, this.gameWin);
      this.regEvent("GAMELOSE" /* GAMELOSE */, this.ganeLose);
      this.regClick(this.imgPause, this.pause);
    }
    pause() {
      EventMgr.event("GAMEPAUSE" /* GAMEPAUSE */);
      UIBaseMgr.instance.open(1015 /* PauseView */);
    }
    gameOver() {
      this.close();
      UIBaseMgr.instance.open(1013 /* MainView */);
    }
    gameRestart() {
    }
    gameWin() {
      UIBaseMgr.instance.open(1007 /* CompleteView */);
    }
    ganeLose() {
      UIBaseMgr.instance.open(1011 /* LoseView */);
    }
    changeHealth(health) {
      if (!isNaN(health)) {
        this.health = health;
      }
      if (!this.healthList) {
        this.healthList = [];
        for (let i = 0; i < this.totalHealth; i++) {
          this.healthList.push(1);
        }
      }
      this.listHealth.array = this.healthList;
    }
    playerDeath() {
      if (MainGame.instance.resurrectionTimes >= GameData.resurrectionTimes) {
        UIBaseMgr.instance.open(1011 /* LoseView */);
      } else {
        UIBaseMgr.instance.open(1022 /* ResurrectionView */);
      }
    }
    changeHealthItem(box, index) {
      let img = box.getChildAt(0);
      if (index > this.health - 1) {
        img.gray = true;
      } else {
        img.gray = false;
      }
    }
    onClosed() {
      this.healthList = null;
    }
  };
  __name(GameView, "GameView");
  __decorateClass([
    property23({ type: List2 })
  ], GameView.prototype, "listHealth", 2);
  __decorateClass([
    property23({ type: RockerBox })
  ], GameView.prototype, "rocketBoxL", 2);
  __decorateClass([
    property23({ type: RockerBox })
  ], GameView.prototype, "rocketBoxR", 2);
  __decorateClass([
    property23({ type: Label3 })
  ], GameView.prototype, "labelTime", 2);
  __decorateClass([
    property23({ type: Image6 })
  ], GameView.prototype, "imgPause", 2);
  __decorateClass([
    property23({ type: Label3 })
  ], GameView.prototype, "labelKill", 2);
  GameView = __decorateClass([
    regClass23("ddf0e22e-43aa-4145-b2f5-8a127efb5611", "../src/View/GameView.ts")
  ], GameView);

  // src/View/GuideView.ts
  var Image7 = Laya.Image;
  var { regClass: regClass24, property: property24 } = Laya;
  var GuideView = class extends UIBase {
    constructor() {
      super();
    }
    onOpened(param) {
    }
    addEvent() {
      this.imgSkip.on(Laya.Event.MOUSE_DOWN, this, this.skipGuide);
    }
    skipGuide() {
    }
    onClosed() {
      this.imgSkip.off(Laya.Event.MOUSE_DOWN, this, this.skipGuide);
      EventMgr.event("GUIDFINISH" /* GUIDFINISH */);
      LocalStorageMgr.setItem("FIRESTTIME" /* FIRSTTIME */, "1");
    }
  };
  __name(GuideView, "GuideView");
  __decorateClass([
    property24({ type: Image7 })
  ], GuideView.prototype, "imgSkip", 2);
  GuideView = __decorateClass([
    regClass24("a7a26e14-76d9-4f1c-9471-21fbc179af77", "../src/View/GuideView.ts")
  ], GuideView);

  // src/View/LanguageView.ts
  var Image8 = Laya.Image;
  var List3 = Laya.List;
  var Handler6 = Laya.Handler;
  var { regClass: regClass25, property: property25 } = Laya;
  var LanguageView = class extends UIBase {
    constructor() {
      super();
      this.$selectIndex = 0;
    }
    onOpened(param) {
      this.regClick(this.$imgClose, this.close);
      this.$listLanguage.renderHandler = new Handler6(this, this.changeItem);
      this.$listLanguage.selectHandler = new Handler6(this, this.selectItem);
      let arr = [];
      for (let i in LanguageEnum) {
        if (!isNaN(Number(i))) {
          arr.push(Number(i));
        }
      }
      this.$selectIndex = arr.indexOf(LocalizationMgr.Language);
      this.$listLanguage.array = arr;
      this.$listLanguage.selectedIndex = this.$selectIndex;
    }
    changeItem(box, index) {
      let labelLanguage = box.getChildByName("labelLanguage");
      let imgFlag = box.getChildByName("imgFlag");
      let imgSelect = box.getChildByName("imgSelect");
      labelLanguage.text = LocalizationMgr.getLanguageMsgById(box.dataSource);
      imgFlag.skin = ResLoader.instance.getUrlById(LocalizationMgr.getFlagSkinIdById(box.dataSource));
      if (index == this.$selectIndex) {
        imgSelect.visible = true;
      } else {
        imgSelect.visible = false;
      }
    }
    selectItem(index) {
      if (index != this.$selectIndex) {
        let oldBox = this.$listLanguage.getCell(this.$selectIndex);
        let oldSelect = oldBox.getChildByName("imgSelect");
        oldSelect.visible = false;
        this.$selectIndex = index;
        LocalizationMgr.Language = this.$listLanguage.array[index];
        let newBox = this.$listLanguage.getCell(this.$selectIndex);
        let newSelect = newBox.getChildByName("imgSelect");
        newSelect.visible = true;
      }
    }
  };
  __name(LanguageView, "LanguageView");
  __decorateClass([
    property25({ type: List3 })
  ], LanguageView.prototype, "$listLanguage", 2);
  __decorateClass([
    property25({ type: Image8 })
  ], LanguageView.prototype, "$imgClose", 2);
  LanguageView = __decorateClass([
    regClass25("6bc1bf6a-a993-4ac9-b9f4-4785e0d68c2b", "../src/View/LanguageView.ts")
  ], LanguageView);

  // src/View/LevelUpView.ts
  var { regClass: regClass26, property: property26 } = Laya;
  var LevelUpView = class extends UIBase {
  };
  __name(LevelUpView, "LevelUpView");
  LevelUpView = __decorateClass([
    regClass26("f7577321-9089-4d76-ba3b-af9c8a8c0afe", "../src/View/LevelUpView.ts")
  ], LevelUpView);

  // src/Mgr/CurrencyMgr.ts
  var CurrencyMgr = class {
    /**初始化 */
    static init() {
    }
    /**获取对应颜色 */
    static getColorById(id) {
      let data = DataTable.CurrencyDataTableMap.get(id);
      if (data && data.color) {
        return "#" + data.color;
      }
      return "#fff";
    }
    /**获取对应图标 */
    static getImgUrlById(id) {
      let data = DataTable.CurrencyDataTableMap.get(id);
      if (data && data.imgId) {
        return ResLoader.instance.getUrlById(data.imgId);
      }
      return "";
    }
  };
  __name(CurrencyMgr, "CurrencyMgr");

  // src/Mgr/LevelMgr.ts
  var LevelMgr = class {
    /**初始化 */
    static init() {
    }
    /**等级 */
    static get level() {
      for (let [, value] of DataTable.LevelDataTableMap) {
        if (!isNaN(value.minEx) && !isNaN(value.maxEx)) {
          if (GameData.experience > value.minEx && GameData.experience <= value.maxEx) {
            return value.level;
          }
        }
      }
      return 1;
    }
  };
  __name(LevelMgr, "LevelMgr");

  // src/Url/SubPackageUrl.ts
  var SubPackageUrl = class {
  };
  __name(SubPackageUrl, "SubPackageUrl");
  /**3d资源分包 */
  SubPackageUrl.res3dUrl = "resources/res3d/res3d.zip";

  // src/View/LoadView.ts
  var Image9 = Laya.Image;
  var Label4 = Laya.Label;
  var Handler7 = Laya.Handler;
  var { regClass: regClass27, property: property27 } = Laya;
  var LoadView = class extends UIBase {
    constructor() {
      super();
    }
    onOpened(param) {
      this.imgMask = this.imgLoad.mask;
      this.checkVersion();
    }
    /**请求版本 */
    checkVersion() {
      this.loadZip();
    }
    /**加载zip */
    loadZip() {
      if (ProjectConfig.useZip) {
        let self = this;
        LayaZip.LazyMode = true;
        LayaZip.BasePathMode = 1;
        LayaZip.LazyFilter = ["ls", "lh", "lmat"];
        Laya.loader.load([{ url: SubPackageUrl.res3dUrl, type: LayaZip.ZIP }], Handler7.create(self, () => {
          console.log(Laya.Loader.loadedMap);
          this.startPreLoad();
        }), new Laya.Handler(self, (args) => {
          self._onProgress(args);
        }));
      } else {
        this.startPreLoad();
      }
    }
    /**开始预加载全局资源 */
    startPreLoad() {
      ResLoader.instance.preloadRes(Handler7.create(this, this.onCompleted), Handler7.create(this, this._onProgress));
    }
    /**刷新进度条 */
    _onProgress(value) {
      this.imgMask.width = this.imgLoad.width * value;
      this.labelLoad.text = "Loading\u2026" + StringUtil.num2percentage(value);
    }
    /**加载完成可以进入主界面 */
    onCompleted() {
      console.log("load_conCompleted");
      this.initData();
      this.openScene();
    }
    /**初始化数据 */
    initData() {
      LocalizationMgr.init();
      LevelMgr.init();
      CurrencyMgr.init();
      Scene3dMgr.instance.init();
      MainGame.instance.init();
      SoundMgr.instance.playBgm();
    }
    /**打开页面 */
    openScene() {
      UIBaseMgr.instance.showDebug();
      UIBaseMgr.instance.open(1013 /* MainView */);
      this.close();
    }
  };
  __name(LoadView, "LoadView");
  __decorateClass([
    property27({ type: Image9 })
  ], LoadView.prototype, "imgLoad", 2);
  __decorateClass([
    property27({ type: Label4 })
  ], LoadView.prototype, "labelLoad", 2);
  __decorateClass([
    property27({ type: Label4 })
  ], LoadView.prototype, "testLabel", 2);
  LoadView = __decorateClass([
    regClass27("9797e892-adab-4c82-8f5e-800b37f590f9", "../src/View/LoadView.ts")
  ], LoadView);

  // src/View/LoseView.ts
  var Label5 = Laya.Label;
  var Image10 = Laya.Image;
  var { regClass: regClass28, property: property28 } = Laya;
  var LoseView = class extends UIBase {
    constructor() {
      super();
    }
    onOpened(param) {
      this.labelGold.text = (MainGame.instance.killNum * 10).toString();
      SoundMgr.instance.playSound(2604 /* lose */);
    }
    addEvent() {
      this.regClick(this.imgHome, this.gotoHome);
      this.regClick(this.imgRestart, this.gameRestart);
    }
    gotoHome() {
      EventMgr.event("GAMEOVER" /* GAMEOVER */);
      this.close();
    }
    gameRestart() {
      EventMgr.event("GAMERESTART" /* GAMERESTART */);
      this.close();
    }
  };
  __name(LoseView, "LoseView");
  __decorateClass([
    property28({ type: Image10 })
  ], LoseView.prototype, "imgHome", 2);
  __decorateClass([
    property28({ type: Image10 })
  ], LoseView.prototype, "imgRestart", 2);
  __decorateClass([
    property28({ type: Label5 })
  ], LoseView.prototype, "labelGold", 2);
  LoseView = __decorateClass([
    regClass28("9b8220cb-adbc-4d84-9618-c7c9f2bd85f3", "../src/View/LoseView.ts")
  ], LoseView);

  // src/View/LuckyBoxView.ts
  var Text2 = Laya.Text;
  var Image11 = Laya.Image;
  var { regClass: regClass29, property: property29 } = Laya;
  var LuckyBoxView = class extends UIBase {
    constructor() {
      super();
    }
    onOpened(param) {
      this.regClick(this.imgClose, this.close);
      this.regClick(this.imgOpen, this.openLuckBox);
      this.initLuckBox();
    }
    initLuckBox() {
      if (this.$param == void 0) {
        this.$param = 0;
      }
      this.txtMsg.text = LocalizationMgr.$getLocalizationByKey(DataTable.LuckyBoxDataTableMap.get(this.$param).localizationKey);
      this.imgBox.skin = ResLoader.instance.getUrlById(DataTable.LuckyBoxDataTableMap.get(this.$param).imgPath);
    }
    openLuckBox() {
      switch (this.$param) {
        case 0:
          break;
      }
    }
  };
  __name(LuckyBoxView, "LuckyBoxView");
  __decorateClass([
    property29({ type: Image11 })
  ], LuckyBoxView.prototype, "imgLight", 2);
  __decorateClass([
    property29({ type: Image11 })
  ], LuckyBoxView.prototype, "imgBox", 2);
  __decorateClass([
    property29({ type: Image11 })
  ], LuckyBoxView.prototype, "imgClose", 2);
  __decorateClass([
    property29({ type: Image11 })
  ], LuckyBoxView.prototype, "imgOpen", 2);
  __decorateClass([
    property29({ type: Text2 })
  ], LuckyBoxView.prototype, "txtMsg", 2);
  LuckyBoxView = __decorateClass([
    regClass29("d94dafff-05f0-4479-9a1a-ab9861a24025", "../src/View/LuckyBoxView.ts")
  ], LuckyBoxView);

  // src/View/MainView.ts
  var Text3 = Laya.Text;
  var Box2 = Laya.Box;
  var Image12 = Laya.Image;
  var { regClass: regClass30, property: property30 } = Laya;
  var MainView = class extends UIBase {
    constructor() {
      super();
    }
    onOpened(param) {
      this.labelName.text = GameData.userName;
      this.imgHead.skin = GameData.userHead;
      this.imgLevelMask = this.imgLevel.mask;
      this.imgMsMask = this.imgMs.mask;
    }
    addEvent() {
      this.regEvent("GOLDCHANGE" /* GOLDCHANGE */, this.changeGold, true);
      this.regEvent("DIAMONDCHANGE" /* DIAMONDCHANGE */, this.changeDiamond, true);
      this.regEvent("EXPERIENCECHANGE" /* EXPERIENCECHANGE */, this.changeExperience, true);
      this.regClick(this.imgPlusGold, this.openShop, 1001 /* gold */);
      this.regClick(this.imgPlusDiamond, this.openShop, 1002 /* diamond */);
      this.regClick(this.imgRing, this.openUserInfo);
      this.regClick(this.imgShop, this.openShop, 1002 /* diamond */);
      this.regClick(this.imgRanking, this.openRanking);
      this.regClick(this.imgSettings, this.openSetting);
      this.regClick(this.imgStart, this.checkFirstTime);
    }
    changeGold() {
      this.txtGold.text = StringUtil.formatToUnitEN(GameData.gold);
    }
    changeDiamond() {
      this.txtDiamond.text = StringUtil.formatToUnitEN(GameData.diamond);
    }
    changeExperience() {
      this.txtLevel.text = LevelMgr.level.toString();
    }
    openShop(currency) {
      UIBaseMgr.instance.open(1019 /* ShopView */, currency);
    }
    openUserInfo() {
    }
    openSetting() {
      UIBaseMgr.instance.open(1018 /* SettingView */);
    }
    openRanking() {
      UIBaseMgr.instance.open(1017 /* RankingView */);
    }
    checkFirstTime() {
      this.selectPlayer();
    }
    showGuide() {
    }
    selectPlayer() {
      MainGame.instance.selectPlayerAndWeapon();
      UIBaseMgr.instance.open(1021 /* SelectPlayerView */);
      this.close();
    }
    selectWeapon() {
    }
    onClosed() {
    }
  };
  __name(MainView, "MainView");
  __decorateClass([
    property30({ type: Text3 })
  ], MainView.prototype, "txtGold", 2);
  __decorateClass([
    property30({ type: Image12 })
  ], MainView.prototype, "imgPlusGold", 2);
  __decorateClass([
    property30({ type: Text3 })
  ], MainView.prototype, "txtDiamond", 2);
  __decorateClass([
    property30({ type: Image12 })
  ], MainView.prototype, "imgPlusDiamond", 2);
  __decorateClass([
    property30({ type: Image12 })
  ], MainView.prototype, "imgHead", 2);
  __decorateClass([
    property30({ type: Image12 })
  ], MainView.prototype, "imgRing", 2);
  __decorateClass([
    property30({ type: Image12 })
  ], MainView.prototype, "imgLevel", 2);
  __decorateClass([
    property30({ type: Image12 })
  ], MainView.prototype, "imgMs", 2);
  __decorateClass([
    property30({ type: Text3 })
  ], MainView.prototype, "txtLevel", 2);
  __decorateClass([
    property30({ type: Text3 })
  ], MainView.prototype, "labelName", 2);
  __decorateClass([
    property30({ type: Image12 })
  ], MainView.prototype, "imgShop", 2);
  __decorateClass([
    property30({ type: Image12 })
  ], MainView.prototype, "imgRanking", 2);
  __decorateClass([
    property30({ type: Image12 })
  ], MainView.prototype, "imgSettings", 2);
  __decorateClass([
    property30({ type: Image12 })
  ], MainView.prototype, "imgStart", 2);
  __decorateClass([
    property30({ type: Box2 })
  ], MainView.prototype, "Main", 2);
  MainView = __decorateClass([
    regClass30("127f9431-d96d-491c-b782-2549a9c38d7b", "../src/View/MainView.ts")
  ], MainView);

  // src/View/MyInfoView.ts
  var { regClass: regClass31, property: property31 } = Laya;
  var MyInfoView = class extends UIBase {
  };
  __name(MyInfoView, "MyInfoView");
  MyInfoView = __decorateClass([
    regClass31("dd16d8bf-53b3-41cc-81c1-44f39afec08e", "../src/View/MyInfoView.ts")
  ], MyInfoView);

  // src/View/PauseView.ts
  var Image13 = Laya.Image;
  var { regClass: regClass32, property: property32 } = Laya;
  var PauseView = class extends UIBase {
    constructor() {
      super();
    }
    onOpened(param) {
    }
    addEvent() {
      this.regClick(this.imgContinue, this.continue);
      this.regClick(this.imgRestart, this.restart);
      this.regClick(this.imgQuit, this.quit);
    }
    continue() {
      EventMgr.event("GAMERESUME" /* GAMERESUME */);
      this.close();
    }
    restart() {
      EventMgr.event("GAMERESTART" /* GAMERESTART */);
      this.close();
    }
    quit() {
      EventMgr.event("GAMEOVER" /* GAMEOVER */);
      this.close();
    }
  };
  __name(PauseView, "PauseView");
  __decorateClass([
    property32({ type: Image13 })
  ], PauseView.prototype, "imgContinue", 2);
  __decorateClass([
    property32({ type: Image13 })
  ], PauseView.prototype, "imgRestart", 2);
  __decorateClass([
    property32({ type: Image13 })
  ], PauseView.prototype, "imgQuit", 2);
  PauseView = __decorateClass([
    regClass32("352c01f5-c61a-4387-bd3b-63f412ac12c7", "../src/View/PauseView.ts")
  ], PauseView);

  // src/View/PrivacyAgreementView.ts
  var Label6 = Laya.Label;
  var Image14 = Laya.Image;
  var Panel = Laya.Panel;
  var { regClass: regClass33, property: property33 } = Laya;
  var PrivacyAgreementView = class extends UIBase {
    constructor() {
      super();
    }
    onOpened(param) {
      this.regClick(this.imgSure, this.sure);
      this.regClick(this.imgCancel, this.cancel);
      let data = ResLoader.instance.getResById(4001 /* PrivacyAgreement */);
      this.txtAgreement.text = data.data;
      this.txtAgreement.height = data.data.length / 0.9;
    }
    sure() {
      this.close();
    }
    cancel() {
      this.close();
    }
  };
  __name(PrivacyAgreementView, "PrivacyAgreementView");
  __decorateClass([
    property33({ type: Image14 })
  ], PrivacyAgreementView.prototype, "imgSure", 2);
  __decorateClass([
    property33({ type: Image14 })
  ], PrivacyAgreementView.prototype, "imgCancel", 2);
  __decorateClass([
    property33({ type: Panel })
  ], PrivacyAgreementView.prototype, "panel", 2);
  __decorateClass([
    property33({ type: Label6 })
  ], PrivacyAgreementView.prototype, "txtAgreement", 2);
  PrivacyAgreementView = __decorateClass([
    regClass33("df9b38f8-2d16-4280-849d-786074a729fe", "../src/View/PrivacyAgreementView.ts")
  ], PrivacyAgreementView);

  // src/View/RankingView.ts
  var Text4 = Laya.Text;
  var Image15 = Laya.Image;
  var List4 = Laya.List;
  var Handler8 = Laya.Handler;
  var { regClass: regClass34, property: property34 } = Laya;
  var RankingView = class extends UIBase {
    constructor() {
      super();
      this.rankingList = [
        //临时数据
        { "head": "", "name": "\u5F20\u4E09", "rank": 1, "lv": "100", "UID": "12324" },
        { "head": "", "name": "\u674E\u56DB", "rank": 2, "lv": "99", "UID": "12324" },
        { "head": "", "name": "\u738B\u9EBB\u5B50\u4E94", "rank": 3, "lv": "80", "UID": "12324" },
        { "head": "", "name": "\u7231\u4E3D\u4E1D", "rank": 4, "lv": "77", "UID": "12324" },
        { "head": "", "name": "\u8428\u9876\u9876", "rank": 5, "lv": "76", "UID": "12324" },
        { "head": "", "name": "\u8C46\u8150\u4EE8", "rank": 6, "lv": "75", "UID": "12324" },
        { "head": "", "name": "s'd''j", "rank": 7, "lv": "30", "UID": "12324" },
        { "head": "", "name": "NoRainLand", "rank": 8, "lv": "22", "UID": "654" },
        { "head": "", "name": "\u5F00\u82B1\u7ED3\u679C", "rank": 9, "lv": "11", "UID": "12324" },
        { "head": "", "name": "323", "rank": 10, "lv": "2", "UID": "12324" }
      ];
    }
    onOpened(param) {
      let data = this.rankingList.find((value) => {
        return value.UID == "654";
      });
      if (data) {
        this.txtLV.text = data.lv.toString();
        this.txtName.text = data.name.toString();
        this.txtRank.text = data.rank.toString();
      }
    }
    addEvent() {
      this.regClick(this.imgClose, this.close);
      this.listRanking.renderHandler = new Handler8(this, this.changeItem);
      this.listRanking.array = this.rankingList;
    }
    changeItem(box, index) {
      let txtLV = box.getChildByName("txtLV");
      let txtName = box.getChildByName("txtName");
      let txtRank = box.getChildByName("txtRank");
      let data = box.dataSource;
      txtLV.text = "LV" + data.lv.toString();
      txtName.text = data.name.toString();
      txtRank.text = data.rank.toString();
      txtRank.visible = false;
      let imgRank = box.getChildByName("imgRank");
      switch (data.rank) {
        case 1:
          let data1 = DataTable.RankingDataTableMap.get(1001 /* fist */);
          txtRank.color = data1["color"];
          imgRank.skin = ResLoader.instance.getUrlById(data1["imgId"]);
          break;
        case 2:
          let data2 = DataTable.RankingDataTableMap.get(1002 /* second */);
          txtRank.color = data2["color"];
          imgRank.skin = ResLoader.instance.getUrlById(data2["imgId"]);
          break;
        case 3:
          let data3 = DataTable.RankingDataTableMap.get(1003 /* third */);
          txtRank.color = data3["color"];
          imgRank.skin = ResLoader.instance.getUrlById(data3["imgId"]);
          break;
        default:
          let data4 = DataTable.RankingDataTableMap.get(1004 /* default */);
          txtRank.color = data4["color"];
          imgRank.skin = ResLoader.instance.getUrlById(data4["imgId"]);
          txtRank.visible = true;
          break;
      }
    }
  };
  __name(RankingView, "RankingView");
  __decorateClass([
    property34({ type: Image15 })
  ], RankingView.prototype, "imgClose", 2);
  __decorateClass([
    property34({ type: Image15 })
  ], RankingView.prototype, "imgHead", 2);
  __decorateClass([
    property34({ type: Text4 })
  ], RankingView.prototype, "txtName", 2);
  __decorateClass([
    property34({ type: Text4 })
  ], RankingView.prototype, "txtLV", 2);
  __decorateClass([
    property34({ type: Text4 })
  ], RankingView.prototype, "txtRank", 2);
  __decorateClass([
    property34({ type: List4 })
  ], RankingView.prototype, "listRanking", 2);
  RankingView = __decorateClass([
    regClass34("731a1c9f-76c7-4237-ad93-f469eb850bb9", "../src/View/RankingView.ts")
  ], RankingView);

  // src/View/ResurrectionView.ts
  var Image16 = Laya.Image;
  var { regClass: regClass35, property: property35 } = Laya;
  var ResurrectionView = class extends UIBase {
    constructor() {
      super();
      this.countdown = 0;
    }
    onOpened(param) {
      this.countdown = GameData.countdown;
      this.labelTime.text = this.countdown.toString();
      Tween.get(this.labelTime).set({ scaleX: 1.3, scaleY: 1.3 }).to({ scaleX: 1, scaleY: 1 }, 1e3).call(this, () => {
        this.countdown--;
        this.labelTime.text = this.countdown.toString();
        SoundMgr.instance.playSound(2601 /* countdown */, 1);
        if (this.countdown == 0) {
          Tween.clear(this.labelTime);
          this.goDie();
        }
      }).loop().start();
    }
    addEvent() {
      this.regClick(this.imgClose, this.goDie);
      this.regClick(this.imgWatch, this.watch);
    }
    watch() {
      var _a;
      (_a = PlatformMgr.instance.miniGame) == null ? void 0 : _a.showVideo(this, this.resurrection);
      ProjectConfig.isDebug && this.resurrection(true);
    }
    resurrection(args) {
      if (args) {
        EventMgr.event("PLAEYRRESURRECTION" /* PLAEYRRESURRECTION */);
        this.close();
      }
    }
    goDie() {
      Tween.clearAll(this.labelTime);
      EventMgr.event("GAMELOSE" /* GAMELOSE */);
      this.close();
    }
  };
  __name(ResurrectionView, "ResurrectionView");
  __decorateClass([
    property35({ type: Image16 })
  ], ResurrectionView.prototype, "labelTime", 2);
  __decorateClass([
    property35({ type: Image16 })
  ], ResurrectionView.prototype, "imgWatch", 2);
  ResurrectionView = __decorateClass([
    regClass35("31411ed3-ec40-4e2d-ba1b-726a4a7e4de7", "../src/View/ResurrectionView.ts")
  ], ResurrectionView);

  // src/View/SelectPlayerView.ts
  var Box3 = Laya.Box;
  var Label7 = Laya.Label;
  var Image17 = Laya.Image;
  var { regClass: regClass36, property: property36 } = Laya;
  var SelectPlayerView = class extends UIBase {
    constructor() {
      super();
      this.$viewIndex = 0;
      this.$selectIndex = 0;
    }
    onOpened(param) {
      this.$viewIndex = 0;
      if (!this.$playerList) {
        this.$playerList = [];
        for (let item in PlayerEnum) {
          if (!isNaN(Number(item))) {
            this.$playerList.push(Number(item));
          }
        }
      }
      this.$selectIndex = this.$playerList.indexOf(PlayerMgr.instance.selectedPlayerId);
      this.showPlayer();
    }
    addEvent() {
      this.regClick(this.imgBack, this.goBack);
      this.regClick(this.imgNext, this.nextItem);
      this.regClick(this.imgPrev, this.prevItem);
      this.regClick(this.imgSelect, this.selectPlayer);
      this.regClick(this.imgSelect, this.selectPlayer);
      this.regClick(this.imgUnlock, this.unlockPlayer);
      this.regEvent("UNLOCKPLAYER" /* UNLOCKPLAYER */, this.changeNexPrev, true);
    }
    changeData() {
      this.boxMsg.right = -1e3;
      this.$playerData = PlayerMgr.instance.getSelectedPlayerData(this.$playerList[this.$selectIndex]);
      this.labelName.text = LocalizationMgr.getLocalizationByEnum(this.$playerData.localizationKey);
      this.labelDic.text = LocalizationMgr.getLocalizationByEnum(this.$playerData.descriptionKey);
      Tween.get(this.boxMsg).to({ right: 0 }, 350, Laya.Ease.circOut).start();
      if (PlayerMgr.instance.isUnlock(this.$playerList[this.$selectIndex])) {
        this.imgLock.visible = false;
        this.imgSelect.visible = true;
        this.imgUnlock.visible = false;
      } else {
        this.imgLock.visible = true;
        this.imgSelect.visible = false;
        this.imgUnlock.visible = true;
        this.labelUnlock.text = LocalizationMgr.getLocalizationByEnum(1030 /* UNLOCK */, this.$playerData.unlockPrice);
        this.imgCurrency.skin = CurrencyMgr.getImgUrlById(this.$playerData["currency"]);
      }
    }
    changeNexPrev() {
      this.changeData();
      this.imgPrev.visible = false;
      this.imgNext.visible = false;
      Timer.get(400, this, () => {
        if (this.$selectIndex <= 0) {
          this.imgNext.visible = true;
        } else if (this.$selectIndex >= this.$playerList.length - 1) {
          this.imgPrev.visible = true;
        } else {
          this.imgPrev.visible = true;
          this.imgNext.visible = true;
        }
      }).start();
    }
    goBack() {
      this.close();
      UIBaseMgr.instance.open(1013 /* MainView */);
      MainGame.instance.goToMain();
    }
    showPlayer() {
      EventMgr.event("SHOWPLAYER" /* SHOWPLAYER */, this.$playerList[this.$selectIndex]);
    }
    nextItem() {
      this.$selectIndex++;
      this.changeNexPrev();
      this.showPlayer();
    }
    prevItem() {
      this.$selectIndex--;
      this.changeNexPrev();
      this.showPlayer();
    }
    selectPlayer() {
      PlayerMgr.instance.selectedPlayerId = this.$playerList[this.$selectIndex];
      MainGame.instance.loadGameScene();
      UIBaseMgr.instance.open(1008 /* GameView */);
      this.close();
    }
    unlockPlayer() {
      PlayerMgr.instance.unlockPlayer(this.$playerList[this.$selectIndex]);
    }
    onClosed() {
    }
  };
  __name(SelectPlayerView, "SelectPlayerView");
  __decorateClass([
    property36({ type: Image17 })
  ], SelectPlayerView.prototype, "imgBack", 2);
  __decorateClass([
    property36({ type: Image17 })
  ], SelectPlayerView.prototype, "imgNext", 2);
  __decorateClass([
    property36({ type: Image17 })
  ], SelectPlayerView.prototype, "imgPrev", 2);
  __decorateClass([
    property36({ type: Image17 })
  ], SelectPlayerView.prototype, "imgLock", 2);
  __decorateClass([
    property36({ type: Image17 })
  ], SelectPlayerView.prototype, "imgSelect", 2);
  __decorateClass([
    property36({ type: Image17 })
  ], SelectPlayerView.prototype, "labelName", 2);
  __decorateClass([
    property36({ type: Label7 })
  ], SelectPlayerView.prototype, "labelDic", 2);
  __decorateClass([
    property36({ type: Image17 })
  ], SelectPlayerView.prototype, "imgUnlock", 2);
  __decorateClass([
    property36({ type: Label7 })
  ], SelectPlayerView.prototype, "labelUnlock", 2);
  __decorateClass([
    property36({ type: Image17 })
  ], SelectPlayerView.prototype, "imgCurrency", 2);
  __decorateClass([
    property36({ type: Box3 })
  ], SelectPlayerView.prototype, "boxMsg", 2);
  SelectPlayerView = __decorateClass([
    regClass36("cdfd211f-d5a7-4c9b-9ffb-7956585db6fc", "../src/View/SelectPlayerView.ts")
  ], SelectPlayerView);

  // src/View/SettingView.ts
  var Label8 = Laya.Label;
  var Image18 = Laya.Image;
  var { regClass: regClass37, property: property37 } = Laya;
  var SettingView = class extends UIBase {
    constructor() {
      super();
    }
    onOpened(param) {
      this.sliderBgm.init(this, this.bgmChange, SoundMgr.instance.MusicVolume);
      this.sliderSfx.init(this, this.sfxChange, SoundMgr.instance.SoundVolume);
      this.toggleShake.init(this, this.shakeChange, VibrateMgr.isVibrate);
    }
    addEvent() {
      this.regClick(this.imgClose, this.close);
      this.regClick(this.imgSupport, this.getSupport);
      this.regClick(this.imgLanguage, this.changeLanguage);
      this.regClick(this.txtAgreement, this.openPrivacyAgreement);
      this.regEvent("LANGUAGECHANGE" /* LANGUAGECHANGE */, this.changeLanguageIcon, true);
    }
    bgmChange(value) {
      SoundMgr.instance.MusicVolume = value;
    }
    sfxChange(value) {
      SoundMgr.instance.SoundVolume = value;
    }
    shakeChange(value) {
      VibrateMgr.isVibrate = value;
      if (value) {
        VibrateMgr.vibrateShort();
      }
    }
    changeLanguageIcon() {
      this.imgLan.skin = ResLoader.instance.getUrlById(LocalizationMgr.getFlagSkinIdById(LocalizationMgr.Language));
    }
    openPrivacyAgreement() {
      UIBaseMgr.instance.open(1016 /* PrivacyAgreementView */);
    }
    getSupport() {
      Laya.Browser.window.open(ProjectConfig.support);
      console.log("support");
    }
    changeLanguage() {
      UIBaseMgr.instance.open(1009 /* LanguageView */);
    }
    onClosed() {
    }
  };
  __name(SettingView, "SettingView");
  __decorateClass([
    property37({ type: Image18 })
  ], SettingView.prototype, "imgClose", 2);
  __decorateClass([
    property37({ type: Slider })
  ], SettingView.prototype, "sliderSfx", 2);
  __decorateClass([
    property37({ type: Slider })
  ], SettingView.prototype, "sliderBgm", 2);
  __decorateClass([
    property37({ type: Toggle })
  ], SettingView.prototype, "toggleShake", 2);
  __decorateClass([
    property37({ type: Image18 })
  ], SettingView.prototype, "imgLanguage", 2);
  __decorateClass([
    property37({ type: Image18 })
  ], SettingView.prototype, "imgLan", 2);
  __decorateClass([
    property37({ type: Image18 })
  ], SettingView.prototype, "imgSupport", 2);
  __decorateClass([
    property37({ type: Label8 })
  ], SettingView.prototype, "txtAgreement", 2);
  SettingView = __decorateClass([
    regClass37("9811079c-9340-49a7-8d8a-71570d70a98d", "../src/View/SettingView.ts")
  ], SettingView);

  // src/View/ShopView.ts
  var Image19 = Laya.Image;
  var List5 = Laya.List;
  var Handler9 = Laya.Handler;
  var { regClass: regClass38, property: property38 } = Laya;
  var ShopView = class extends UIBase {
    constructor() {
      super();
      this.$titleSelectedIndex = 0;
    }
    onOpened(param) {
      this.$titleSet = /* @__PURE__ */ new Set();
      this.$shopList = [];
      if (DataTable.ShopDataTableMap) {
        for (let [key, value] of DataTable.ShopDataTableMap) {
          this.$titleSet.add(value.localizationKey);
          if (value.page && this.$shopList[value.page - 1]) {
            this.$shopList[value.page - 1].push(value);
          } else {
            this.$shopList[value.page - 1] = [value];
          }
        }
      }
    }
    addEvent() {
      this.regClick(this.imgClose, this.close);
      this.listTitle.renderHandler = new Handler9(this, this.changeTitleItem);
      this.listTitle.selectHandler = new Handler9(this, this.selectTitleItem);
      this.listShop.renderHandler = new Handler9(this, this.changeShopItem);
      this.regEvent("LANGUAGECHANGE" /* LANGUAGECHANGE */, this.changeLanguage, true);
    }
    changeTitleItem(box, index) {
      let imgUnSelected = box.getChildByName("imgUnSelected");
      let labelUnSelected = imgUnSelected.getChildByName("labelUnSelected");
      let imgSelected = box.getChildByName("imgSelected");
      let labelSelected = imgSelected.getChildByName("labelSelected");
      let show = index == this.listTitle.selectedIndex;
      imgSelected.visible = show;
      imgUnSelected.visible = !show;
      let str = LocalizationMgr.$getLocalizationByKey(box.dataSource);
      labelUnSelected.text = str;
      labelSelected.text = str;
    }
    selectTitleItem(index) {
      this.$titleSelectedIndex = index;
      this.listShop.array = this.$shopList[this.$titleSelectedIndex];
    }
    changeLanguage() {
      let index = 0;
      switch (this.$param) {
        case 1001 /* gold */:
          index = 0;
          break;
        case 1002 /* diamond */:
          index = 1;
          break;
      }
      this.listTitle.array = ObjUtil.set2List(this.$titleSet);
      this.listTitle.width = this.listTitle.array.length * 328;
      this.listTitle.centerX = 0;
      this.listTitle.selectedIndex = index;
      this.listShop.array = this.$shopList[this.$titleSelectedIndex];
      this.listShop.selectedIndex = index;
    }
    changeShopItem(box, index) {
      let data = box.dataSource;
      let imgItem = box.getChildByName("imgItem");
      imgItem.skin = ResLoader.instance.getUrlById(data["imgId"]);
      imgItem.height = imgItem.source.sourceHeight;
      imgItem.width = imgItem.source.sourceWidth;
      let imgBest = box.getChildByName("imgBest");
      imgBest.visible = !!data["isBest"];
      let imgHot = box.getChildByName("imgHot");
      imgHot.visible = !!data["isHot"];
      let labelNum = box.getChildByName("labelNum");
      labelNum.text = data["number"];
      labelNum.color = CurrencyMgr.getColorById(data["shopId"]);
      let bonus = data["bonus"];
      if (bonus) {
        let labelBonus = box.getChildByName("labelBonus");
        labelBonus.text = "+" + StringUtil.num2percentage(data["bonus"], 0);
      }
      let imgBuy = box.getChildByName("imgBuy");
      imgBuy.offAll();
      imgBuy.on(Laya.Event.CLICK, this, () => {
        this.buySomething(data);
      });
      let imgCurrency = imgBuy.getChildByName("imgCurrency");
      imgCurrency.skin = CurrencyMgr.getImgUrlById(data["priceId"]);
      imgCurrency.height = imgCurrency.source.sourceHeight;
      imgCurrency.width = imgCurrency.source.sourceWidth;
      let txtPrice = imgBuy.getChildByName("txtPrice");
      txtPrice.text = data["price"].toFixed(2);
      txtPrice.color = CurrencyMgr.getColorById(data["priceId"]);
    }
    buySomething(obj) {
      switch (obj["priceId"]) {
        case 1001 /* gold */:
          break;
        case 1002 /* diamond */:
          if (GameData.diamond >= obj["price"]) {
            GameData.diamond -= obj["price"];
            this.getSomething(obj);
          } else {
            UIBaseMgr.instance.showTips(LocalizationMgr.getLocalizationByEnum(1026 /* YOUDONTHAVEENOUGHDIAMONDS */, 1023 /* DIAMOND */));
          }
          break;
        case 1003 /* key */:
          break;
        case 1005 /* dollar */:
          UIBaseMgr.instance.showTips(LocalizationMgr.getLocalizationByEnum(1027 /* NOTYETIMPLEMENTED */));
          break;
      }
    }
    getSomething(obj) {
      switch (obj["shopId"]) {
        case 1001 /* gold */:
          GameData.gold += obj["number"];
          UIBaseMgr.instance.showTips(LocalizationMgr.getLocalizationByEnum(1028 /* CONGRATULATIONSONGETTING */, obj["number"], 1022 /* GOLD */));
          break;
        case 1002 /* diamond */:
          GameData.diamond += obj["number"];
          UIBaseMgr.instance.showTips(LocalizationMgr.getLocalizationByEnum(1028 /* CONGRATULATIONSONGETTING */, obj["number"], 1023 /* DIAMOND */));
          break;
        case 1003 /* key */:
          GameData.key += obj["number"];
          break;
      }
    }
  };
  __name(ShopView, "ShopView");
  __decorateClass([
    property38({ type: Image19 })
  ], ShopView.prototype, "imgClose", 2);
  __decorateClass([
    property38({ type: List5 })
  ], ShopView.prototype, "listTitle", 2);
  __decorateClass([
    property38({ type: List5 })
  ], ShopView.prototype, "listShop", 2);
  ShopView = __decorateClass([
    regClass38("6101acc2-fac8-487c-9045-7d083746b9cd", "../src/View/ShopView.ts")
  ], ShopView);

  // src/View/SignInView.ts
  var { regClass: regClass39, property: property39 } = Laya;
  var SignInView = class extends UIBase {
  };
  __name(SignInView, "SignInView");
  SignInView = __decorateClass([
    regClass39("658fcc51-8109-42a6-a372-0d6e36f801cc", "../src/View/SignInView.ts")
  ], SignInView);

  // src/View/SureView.ts
  var Label9 = Laya.Label;
  var Image20 = Laya.Image;
  var { regClass: regClass40, property: property40 } = Laya;
  var SureView = class extends UIBase {
    constructor() {
      super();
    }
    onOpened(param) {
      this.regClick(this.imgSure, this.sureClick);
      this.regClick(this.imgCancel, this.cancelClick);
      this.txtTitle.text = param.title;
      this.txtMsg.text = param.msg;
      this.caller = param.caller;
      this.sureCallback = param.sureCallback;
      this.cancelCallback = param.cancelCallBack;
      if (!this.cancelCallback) {
        this.imgSure.centerX = 0;
        this.imgSure.visible = true;
      } else {
        this.imgSure.centerX = 180;
        this.imgSure.visible = true;
        this.imgCancel.visible = true;
      }
    }
    sureClick() {
      if (this.caller && this.sureCallback) {
        this.sureCallback.call(this.caller);
      }
      this.close();
    }
    cancelClick() {
      if (this.caller && this.cancelCallback) {
        this.cancelCallback.call(this.caller);
      }
      this.close();
    }
    onClosed() {
      this.caller = null;
      this.sureCallback = null;
      this.cancelCallback = null;
      this.imgSure.visible = false;
      this.imgCancel.visible = false;
      this.imgSure.centerX = 180;
    }
  };
  __name(SureView, "SureView");
  __decorateClass([
    property40({ type: Image20 })
  ], SureView.prototype, "imgSure", 2);
  __decorateClass([
    property40({ type: Image20 })
  ], SureView.prototype, "imgCancel", 2);
  __decorateClass([
    property40({ type: Label9 })
  ], SureView.prototype, "txtTitle", 2);
  __decorateClass([
    property40({ type: Label9 })
  ], SureView.prototype, "txtMsg", 2);
  SureView = __decorateClass([
    regClass40("2eee226a-dcc2-4965-9ad2-4c490d20fbdf", "../src/View/SureView.ts")
  ], SureView);

  // src/View/TipsView.ts
  var Text5 = Laya.Text;
  var { regClass: regClass41, property: property41 } = Laya;
  var TipsView = class extends UIBase {
    constructor() {
      super();
    }
    onEnable() {
      this.img = this.owner;
      this.img.centerX = 0;
      this.img.centerY = 200;
      this.img.alpha;
    }
    onOpened(param) {
      this.txtMsg.text = param;
      Tween.get(this.owner).set({ scaleX: 0.8, scaleY: 0.8, alpha: 1 }).to({ scaleX: 1, scaleY: 1 }, 300, Laya.Ease.backOut).to({ centerY: 0, alpha: 0.7 }, 1500).call(this, () => {
        this.close();
      }).start();
    }
  };
  __name(TipsView, "TipsView");
  __decorateClass([
    property41({ type: Text5 })
  ], TipsView.prototype, "txtMsg", 2);
  TipsView = __decorateClass([
    regClass41("a1b11e33-3318-4f7e-af1d-2bbf5fa13333", "../src/View/TipsView.ts")
  ], TipsView);
})();
//# sourceMappingURL=bundle.js.map
