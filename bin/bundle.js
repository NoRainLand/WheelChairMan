
function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
        r = Reflect.decorate(decorators, target, key, desc);
    else
        for (let i = decorators.length - 1; i >= 0; i--)
            if (d = decorators[i])
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __metadata(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") {
        return Reflect.metadata(k, v);
    }
}

var _regClass = window._regClass;
var _dummyRegClass = Laya.regClass();
function __$decorate(assetId, codePath) {
    return function(...args) {
        let i = args[0].indexOf(_dummyRegClass);
        if (i != -1) {
            if (_regClass)
                args[0][i] = _regClass(assetId, codePath);
            else
                args[0][i] = function(constructor) { Laya.ClassUtils.regClass(assetId, constructor); };
        }
        return __decorate(...args);
    }
}

(() => {
  var __defProp = Object.defineProperty;
  var __name = (target, value) => __defProp(target, "name", { value, configurable: true });

  // E:/WheelChairMan/src/Config/ProjectConfig.ts
  var ProjectConfig = class {
  };
  __name(ProjectConfig, "ProjectConfig");
  ProjectConfig.projectName = "WheelChairMan";
  ProjectConfig.gameName = "WheelChairMan";
  ProjectConfig.projectVersion = "1.0.0";
  ProjectConfig.projectVersionIndex = 1;
  ProjectConfig.isDebug = true;
  ProjectConfig.support = "https://github.com/NoRainLand/WheelChairMan";
  ProjectConfig.defaultLanguage = 1001;

  // E:/WheelChairMan/src/Url/SceneUrl.ts
  var SceneUrl = class {
  };
  __name(SceneUrl, "SceneUrl");
  SceneUrl.LoadView = "resources/prefab/LoadView.lh";

  // E:/WheelChairMan/src/Url/ResUrl.ts
  var ResUrl = class {
  };
  __name(ResUrl, "ResUrl");
  ResUrl.AssetPath = "resources/datatables/AssetsPath.txt";

  // E:/WheelChairMan/src/Util/ResLoader.ts
  var __decorate = __$decorate("ad57b7d6-130d-4c0c-aab6-85d0cb5bf6f9", "../src/Util/ResLoader.ts");
  var Handler = Laya.Handler;
  var ResLoader = class {
    static load(url, onCompleted, _onProgress) {
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
    static getRes(url) {
      if (url) {
        return Laya.loader.getRes(url);
      }
    }
    static getResClose(url) {
      if (url) {
        let obj = Laya.loader.getRes(url);
        if (obj && obj.create) {
          return obj.create();
        }
      }
      return null;
    }
    static $load_one_onCompleted() {
      this.$now_num++;
      this.$onProgress && (this.$onProgress.args = [1], this.$onProgress.run());
      if (this.$now_num == this.$total_num) {
        this.$onCompleted && this.$onCompleted.run();
      }
    }
    static preloadRes(onCompleted, _onProgress) {
      if (!this.isLoad) {
        this.isLoad = true;
        this.$onCompleted = onCompleted;
        this.$onProgress = _onProgress;
        this.load(ResUrl.AssetPath).then((path) => {
          this.$dicAssetsPath = this.strParser(path.data);
          for (let [, value] of this.$dicAssetsPath) {
            if (value && value["preload"] == 1) {
              this.$total_num++;
              this.load(value["path"], Handler.create(this, this.$load_one_onCompleted));
            }
          }
        }).catch((err) => {
          console.warn("\u65E0\u6CD5\u52A0\u8F7D\u914D\u7F6E\u6587\u4EF6");
        });
      }
    }
    static strParser(data) {
      if (data) {
        let arr = data.split("\n");
        let str = arr.find((item) => {
          return item.indexOf("$") != -1;
        });
        let arr2 = str.replace("\r", "").replace("$", "").split("	");
        arr2 = arr2.filter((item) => {
          return item != "";
        });
        let map = /* @__PURE__ */ new Map();
        arr.forEach((item, index) => {
          if (item[0] != "#" && item[0] != "$" && item != "") {
            let arr3 = item.replace("\r", "").split("\\").join("/").replace("assets/", "").split("	");
            arr3 = arr3.filter((item2) => {
              return item2 != "";
            });
            let data2 = {};
            for (let i = 0; i < arr2.length; i++) {
              if (isNaN(Number(arr3[i]))) {
                data2[arr2[i]] = arr3[i];
              } else {
                data2[arr2[i]] = Number(arr3[i]);
              }
            }
            map.set(Number(data2["id"]), data2);
          }
        });
        return map;
      }
    }
    static getResById(assetsId) {
      let obj = this.$dicAssetsPath.get(assetsId);
      if (obj && obj["path"]) {
        return this.getRes(obj["path"]);
      }
    }
    static getUrlById(assetsId) {
      let obj = this.$dicAssetsPath.get(assetsId);
      if (obj && obj["path"]) {
        return obj["path"];
      }
    }
  };
  __name(ResLoader, "ResLoader");
  ResLoader.$total_num = 0;
  ResLoader.$now_num = 0;
  ResLoader.isLoad = false;
  ResLoader.$dicAssetsPath = /* @__PURE__ */ new Map();

  // E:/WheelChairMan/src/Mgr/EventMgr.ts
  var EventDispatcher = Laya.EventDispatcher;
  var EventMgr = class {
    static hasListener(type) {
      if (type != null) {
        return this.eventDispatcher.hasListener(type);
      }
      return false;
    }
    static event(type, data) {
      if (type != null) {
        return this.eventDispatcher.event(type, data);
      }
      return false;
    }
    static on(type, caller, listener, args) {
      if (type != null && caller != null && listener != null) {
        return this.eventDispatcher.on(type, caller, listener, args);
      }
      return null;
    }
    static once(type, caller, listener, args) {
      if (type != null && caller != null && listener != null) {
        return this.eventDispatcher.once(type, caller, listener, args);
      }
      return null;
    }
    static off(type, caller, listener, args) {
      if (type != null && caller != null && listener != null) {
        return this.eventDispatcher.off(type, caller, listener, args);
      }
      return null;
    }
    static offAll(type) {
      if (type != null) {
        return this.eventDispatcher.offAll(type);
      }
      return null;
    }
    static offAllCaller(caller) {
      if (caller != null) {
        return this.eventDispatcher.offAllCaller(caller);
      }
      return null;
    }
  };
  __name(EventMgr, "EventMgr");
  EventMgr.eventDispatcher = new EventDispatcher();

  // E:/WheelChairMan/src/UIBase/UIBase.ts
  var __decorate2 = __$decorate("172331b7-4cbf-495d-96b7-70e583afa5dd", "../src/UIBase/UIBase.ts");
  var { regClass, property } = Laya;
  var UIBase = /* @__PURE__ */ __name(class UIBase2 extends Laya.Script {
    constructor() {
      super();
      this.depth = 0;
      this.isSingleton = false;
      this.$param = null;
      this.isOpen = false;
      this.$event = /* @__PURE__ */ new Map();
    }
    onOpened(param) {
    }
    onClosed() {
    }
    onDisable() {
      let self = this, events = self.$event;
      for (let name in events) {
        EventMgr.off(name, self, events.get(name));
      }
      self.$event = null;
      self.$param = null;
    }
    regEvent(event, callback) {
      let self = this;
      if (event != "" && callback) {
        EventMgr.on(event, this, callback);
        self.$event.set(event, callback);
      }
    }
    regClick(node, callback, once, data, time) {
      this.addClick(node, this, callback, once, data, time);
    }
    addClick(node, caller, callback, once, data, time = 300) {
      let clickTime = 0, params = [], evtIdx = 0;
      node.offAll();
      node[once ? "once" : "on"](Laya.Event.CLICK, caller, (e) => {
        let now = Date.now();
        e.stopPropagation();
        if (now - clickTime > time) {
          if (data !== void 0) {
            params[evtIdx] = data;
            evtIdx = 1;
          }
          params[evtIdx] = e;
          callback.apply(caller, params);
          clickTime = now;
        }
      });
    }
    close() {
      UIBaseMgr.close(this.$assetsId, this.id);
    }
  }, "UIBase");
  __decorate2([
    property(),
    __metadata("design:type", Number)
  ], UIBase.prototype, "depth", void 0);
  __decorate2([
    property(),
    __metadata("design:type", Boolean)
  ], UIBase.prototype, "isSingleton", void 0);
  UIBase = __decorate2([
    regClass(),
    __metadata("design:paramtypes", [])
  ], UIBase);
  var UIBase_default = UIBase;

  // E:/WheelChairMan/src/UIBase/UIBaseData.ts
  var __decorate3 = __$decorate("54ce626d-1dfc-47f6-a89f-5bd020584009", "../src/UIBase/UIBaseData.ts");
  var { regClass: regClass2, property: property2 } = Laya;
  var UIBaseData = /* @__PURE__ */ __name(class UIBaseData2 extends Laya.Script {
    constructor() {
      super();
      this.depth = 2;
      this.isSingleton = false;
    }
  }, "UIBaseData");
  __decorate3([
    property2(),
    __metadata("design:type", Number)
  ], UIBaseData.prototype, "depth", void 0);
  __decorate3([
    property2(),
    __metadata("design:type", Boolean)
  ], UIBaseData.prototype, "isSingleton", void 0);
  UIBaseData = __decorate3([
    regClass2(),
    __metadata("design:paramtypes", [])
  ], UIBaseData);
  var UIBaseData_default = UIBaseData;

  // E:/WheelChairMan/src/UIBase/UIBaseMgr.ts
  var Pool = Laya.Pool;
  var Handler2 = Laya.Handler;
  var UIBaseMgr = class {
    static init(UIBase3) {
      this.$UIBase = UIBase3;
      this.$DebugUI = this.$UIBase.getChildByName("DebugUI");
      this.$TipsUI = this.$UIBase.getChildByName("TipsUI");
      this.$MainUI = this.$UIBase.getChildByName("MainUI");
      this.$3DUI = this.$UIBase.getChildByName("3DUI");
    }
    static openLoadView() {
      if (!this.$isOpenLoadView) {
        this.$isOpenLoadView = true;
        ResLoader.load(SceneUrl.LoadView, Handler2.create(this, () => {
          this.initScene(ResLoader.getResClose(SceneUrl.LoadView), 1006 /* LoadView */);
        }));
      }
    }
    static open(sceneId, param, caller, callback) {
      let script = this.$sceneScriptPool.get(sceneId);
      if (!script || script instanceof UIBase_default) {
        let scene = Pool.getItem(this.$sign + sceneId);
        if (scene) {
          this.initScene(scene, sceneId, param, caller, callback);
        } else {
          let scenePrefab = this.$scenes.get(sceneId);
          if (scenePrefab) {
            let scene2 = scenePrefab.create();
            this.initScene(scene2, sceneId, param, caller, callback);
          } else {
            this.loadScene(sceneId, param, caller, callback);
          }
        }
      }
    }
    static initScene(scene, sceneName, param, caller, callback) {
      let base = scene.getComponent(UIBase_default);
      let data = scene.getComponent(UIBaseData_default);
      if (base && data) {
        Object.assign(base, data);
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
        base.onOpened(param);
        if (caller && callback) {
          callback.call(caller);
        }
        if (base.isSingleton) {
          this.$sceneScriptPool.set(sceneName, base);
        } else {
          let map = this.$sceneScriptPool.get(sceneName);
          if (map && map instanceof Map) {
            map.set(base.id.toString(), base);
            this.$sceneScriptPool.set(sceneName, map);
          } else {
            map = /* @__PURE__ */ new Map();
            map.set(base.id.toString(), base);
            this.$sceneScriptPool.set(sceneName, map);
          }
        }
      } else {
        console.log("UIData\u6216\u8005UIBase\u7F3A\u5931");
      }
    }
    static close(sceneName, id) {
      let scriptOrMap = this.$sceneScriptPool.get(sceneName);
      if (scriptOrMap && scriptOrMap instanceof UIBase_default) {
        scriptOrMap.isOpen = false;
        scriptOrMap.owner.removeSelf();
        scriptOrMap.onClosed();
        this.$sceneScriptPool.set(sceneName, void 0);
        Pool.recover(this.$sign + sceneName, scriptOrMap.owner);
      } else if (scriptOrMap && scriptOrMap instanceof Map) {
        if (id) {
          let base = scriptOrMap.get(id.toString());
          if (base) {
            base.isOpen = false;
            base.owner.removeSelf();
            base.onClosed();
            scriptOrMap.set(id.toString(), void 0);
            Pool.recover(this.$sign + sceneName, base.owner);
            this.$sceneScriptPool.set(sceneName, scriptOrMap);
          }
        }
      }
    }
    static isOpen(sceneName, id) {
      let scriptOrMap = this.$sceneScriptPool.get(sceneName);
      if (scriptOrMap && scriptOrMap instanceof UIBase_default) {
        return scriptOrMap.isOpen;
      } else if (scriptOrMap && scriptOrMap instanceof Map) {
        let base = scriptOrMap.get(id.toString());
        return base.isOpen;
      } else {
        return false;
      }
    }
    static loadScene(sceneName, param, caller, callback) {
      this.$scenes.set(sceneName, ResLoader.getResById(sceneName));
      if (this.$scenes.get(sceneName)) {
        this.open(sceneName, param, caller, callback);
      }
    }
    static initDebugScene() {
      this.open(1001 /* DebugView */);
    }
    static showDebug() {
      this.open(1001 /* DebugView */);
    }
    static showTips(msg) {
      this.open(1004 /* TipsView */, msg);
    }
    static showSureDialog(title, msg, caller, sureCallback, cancelCallBack) {
      let data = { title, msg, caller, sureCallback, cancelCallBack };
      this.open(1005 /* SureView */, data);
    }
  };
  __name(UIBaseMgr, "UIBaseMgr");
  UIBaseMgr.$scenes = /* @__PURE__ */ new Map();
  UIBaseMgr.$isOpenLoadView = false;
  UIBaseMgr.$sceneScriptPool = /* @__PURE__ */ new Map();
  UIBaseMgr.$sign = "View";

  // E:/WheelChairMan/src/GameEntry.ts
  var __decorate4 = __$decorate("5d4f5965-a166-4aeb-8715-baae3302439a", "../src/GameEntry.ts");
  var { regClass: regClass3, property: property3 } = Laya;
  var GameEntry = /* @__PURE__ */ __name(class GameEntry2 extends Laya.Script {
    constructor() {
      super();
      this.isInit = false;
    }
    onAwake() {
      if (!this.isInit) {
        this.isInit = true;
        this.init();
      }
    }
    init() {
      console.log(`\u5F53\u524D\u5F15\u64CE\u7248\u672C:${Laya.LayaEnv.version}, \u5F53\u524D\u9879\u76EE\u540D\u79F0:${ProjectConfig.projectName},\u5F53\u524D\u9879\u76EE\u7248\u672C:${ProjectConfig.projectVersion}/${ProjectConfig.projectVersionIndex}`);
      console.log(Laya.stage);
      this.GameEntry = this.owner;
      this.UIBase = this.GameEntry.getChildByName("UIBase");
      UIBaseMgr.init(this.UIBase);
      UIBaseMgr.openLoadView();
    }
  }, "GameEntry");
  GameEntry = __decorate4([
    regClass3(),
    __metadata("design:paramtypes", [])
  ], GameEntry);

  // E:/WheelChairMan/src/Mgr/LocalMgr.ts
  var LocalStorage = Laya.LocalStorage;
  var LocalMgr = class {
    static getItem(key) {
      return LocalStorage.getItem(`${ProjectConfig.projectName}_${key}`);
    }
    static setItem(key, value) {
      LocalStorage.setItem(`${ProjectConfig.projectName}_${key}`, typeof value === "string" ? value : value.toString());
    }
  };
  __name(LocalMgr, "LocalMgr");

  // E:/WheelChairMan/src/Localization/LocalizationMgr.ts
  var LocalizationMgr = class {
    static init(onProgress, complete) {
      let txtRes = ResLoader.getResById(3002 /* Localization */);
      this.$dataTableMap = ResLoader.strParser(txtRes.data);
      console.log(this.$dataTableMap);
      for (let [key, value] of this.$dataTableMap) {
        let data = ResLoader.getResById(value["pathId"]);
        let dic = data.data[0].dic;
        this.$TextResourceMap.set(key, dic);
      }
    }
    static getFlagSkinIdById(id) {
      let data = this.$dataTableMap.get(id);
      return data && data["flagId"];
    }
    static getLanguageMsgById(id) {
      let data = this.$dataTableMap.get(id);
      return data && data["msg"];
    }
    static getLanguageKeyById(id) {
      let data = this.$dataTableMap.get(id);
      return data && data["key"];
    }
    static getLocalizationByKey(key) {
      let dic = this.$TextResourceMap.get(this.Language);
      if (dic && dic[key]) {
        return dic[key];
      } else {
        return null;
      }
    }
    static get Language() {
      if (!this.$language) {
        let language = LocalMgr.getItem("LANGUAGE" /* LANGUAGE */);
        if (language) {
          this.$language = Number(language.substring(language.indexOf("_") + 1));
        } else {
          this.$language = ProjectConfig.defaultLanguage;
          LocalMgr.setItem("LANGUAGE" /* LANGUAGE */, this.$sign + this.$language);
        }
      }
      return this.$language;
    }
    static set Language(language) {
      this.$language = language;
      LocalMgr.setItem("LANGUAGE" /* LANGUAGE */, this.$sign + this.$language);
      EventMgr.event("LANGUAGECHANGE" /* LANGUAGECHANGE */);
    }
  };
  __name(LocalizationMgr, "LocalizationMgr");
  LocalizationMgr.$TextResourceMap = /* @__PURE__ */ new Map();
  LocalizationMgr.$sign = "language_";

  // E:/WheelChairMan/src/Localization/LocalizationText.ts
  var __decorate5 = __$decorate("5a62e727-31ad-49bf-b53f-96fbff2b0a39", "../src/Localization/LocalizationText.ts");
  var Text = Laya.Text;
  var Label = Laya.Label;
  var { regClass: regClass4, property: property4 } = Laya;
  var LocalizationText = /* @__PURE__ */ __name(class LocalizationText2 extends Laya.Script {
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
        let value = LocalizationMgr.getLocalizationByKey(this.localizationKey);
        if (value) {
          this.text.text = value;
        }
      }
    }
    onDisable() {
      EventMgr.offAllCaller(this);
    }
  }, "LocalizationText");
  __decorate5([
    property4(),
    __metadata("design:type", String)
  ], LocalizationText.prototype, "localizationKey", void 0);
  LocalizationText = __decorate5([
    regClass4(),
    __metadata("design:paramtypes", [])
  ], LocalizationText);

  // E:/WheelChairMan/src/Scene/CompleteView.ts
  var __decorate6 = __$decorate("f5f376ef-5874-4c8a-9a28-8088976bd468", "../src/Scene/CompleteView.ts");
  var { regClass: regClass5, property: property5 } = Laya;
  var CompleteView = /* @__PURE__ */ __name(class CompleteView2 extends UIBase_default {
  }, "CompleteView");
  CompleteView = __decorate6([
    regClass5()
  ], CompleteView);

  // E:/WheelChairMan/src/Scene/DebugView.ts
  var __decorate7 = __$decorate("5ca51831-1d23-46b6-a853-a10d5da54d6c", "../src/Scene/DebugView.ts");
  var _a;
  var _b;
  var _c;
  var Box = Laya.Box;
  var Image = Laya.Image;
  var List = Laya.List;
  var Handler3 = Laya.Handler;
  var { regClass: regClass6, property: property6 } = Laya;
  var DebugView = /* @__PURE__ */ __name(class DebugView2 extends UIBase_default {
    constructor() {
      super();
      this.commandList = [
        "\u6DFB\u52A05000\u91D1\u5E01",
        "\u91CD\u7F6E\u7B7E\u5230",
        "\u6E38\u620F\u7ACB\u523B\u80DC\u5229(\u5FC5\u987B\u5148\u5F00\u59CB\u6E38\u620F)",
        "\u6E38\u620F\u7ACB\u523B\u5931\u8D25(\u5FC5\u987B\u5148\u5F00\u59CB\u6E38\u620F)",
        "\u9501\u5B9A\u989D\u5916\u76AE\u80A4"
      ];
    }
    onOpened(param) {
      this.regClick(this.imgShow, this.showHidePanel);
      this.listCommand.renderHandler = new Handler3(this, this.changeItem);
      this.listCommand.selectHandler = new Handler3(this, this.selectItem);
      this.listCommand.array = this.commandList;
    }
    showHidePanel() {
      this.MainPanel.visible = !this.MainPanel.visible;
    }
    changeItem(box, index) {
      let Label6 = box.getChildByName("Label");
      Label6.text = box.dataSource;
    }
    selectItem(index) {
      switch (index) {
        case 0:
          EventMgr.event("GOLDCHANGE" /* GOLDCHANGE */);
          break;
        case 1:
          break;
        case 2:
          break;
        case 3:
          break;
        case 4:
          break;
      }
      this.listCommand.selectedIndex = -1;
    }
  }, "DebugView");
  __decorate7([
    property6(),
    __metadata("design:type", typeof (_a = typeof Image !== "undefined" && Image) === "function" ? _a : Object)
  ], DebugView.prototype, "imgShow", void 0);
  __decorate7([
    property6(),
    __metadata("design:type", typeof (_b = typeof Box !== "undefined" && Box) === "function" ? _b : Object)
  ], DebugView.prototype, "MainPanel", void 0);
  __decorate7([
    property6(),
    __metadata("design:type", typeof (_c = typeof List !== "undefined" && List) === "function" ? _c : Object)
  ], DebugView.prototype, "listCommand", void 0);
  DebugView = __decorate7([
    regClass6(),
    __metadata("design:paramtypes", [])
  ], DebugView);

  // E:/WheelChairMan/src/Scene/GameView.ts
  var __decorate8 = __$decorate("ddf0e22e-43aa-4145-b2f5-8a127efb5611", "../src/Scene/GameView.ts");
  var { regClass: regClass7, property: property7 } = Laya;
  var GameView = /* @__PURE__ */ __name(class GameView2 extends UIBase_default {
  }, "GameView");
  GameView = __decorate8([
    regClass7()
  ], GameView);

  // E:/WheelChairMan/src/Enum/LocalizationEnum.ts
  var LocalizationEnum = /* @__PURE__ */ ((LocalizationEnum2) => {
    LocalizationEnum2[LocalizationEnum2["ChineseSimplified"] = 1001] = "ChineseSimplified";
    LocalizationEnum2[LocalizationEnum2["English"] = 1002] = "English";
    return LocalizationEnum2;
  })(LocalizationEnum || {});

  // E:/WheelChairMan/src/Scene/LanguageView.ts
  var __decorate9 = __$decorate("6bc1bf6a-a993-4ac9-b9f4-4785e0d68c2b", "../src/Scene/LanguageView.ts");
  var _a2;
  var _b2;
  var Image2 = Laya.Image;
  var List2 = Laya.List;
  var Handler4 = Laya.Handler;
  var { regClass: regClass8, property: property8 } = Laya;
  var LanguageView = /* @__PURE__ */ __name(class LanguageView2 extends UIBase_default {
    constructor() {
      super();
      this.$selectIndex = 0;
    }
    onOpened(param) {
      this.regClick(this.$imgClose, this.close);
      this.$listLanguage.renderHandler = new Handler4(this, this.changeItem);
      this.$listLanguage.selectHandler = new Handler4(this, this.selectItem);
      let arr = [];
      for (let i in LocalizationEnum) {
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
      imgFlag.skin = ResLoader.getUrlById(LocalizationMgr.getFlagSkinIdById(box.dataSource));
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
  }, "LanguageView");
  __decorate9([
    property8(),
    __metadata("design:type", typeof (_a2 = typeof List2 !== "undefined" && List2) === "function" ? _a2 : Object)
  ], LanguageView.prototype, "$listLanguage", void 0);
  __decorate9([
    property8(),
    __metadata("design:type", typeof (_b2 = typeof Image2 !== "undefined" && Image2) === "function" ? _b2 : Object)
  ], LanguageView.prototype, "$imgClose", void 0);
  LanguageView = __decorate9([
    regClass8(),
    __metadata("design:paramtypes", [])
  ], LanguageView);

  // E:/WheelChairMan/src/Scene/LevelUpView.ts
  var __decorate10 = __$decorate("f7577321-9089-4d76-ba3b-af9c8a8c0afe", "../src/Scene/LevelUpView.ts");
  var { regClass: regClass9, property: property9 } = Laya;
  var LevelUpView = /* @__PURE__ */ __name(class LevelUpView2 extends UIBase_default {
  }, "LevelUpView");
  LevelUpView = __decorate10([
    regClass9()
  ], LevelUpView);

  // E:/WheelChairMan/src/Util/StringUtil.ts
  var __decorate11 = __$decorate("9f8ef9b7-13a5-4980-a9d8-46f8659dff82", "../src/Util/StringUtil.ts");
  var StringUtil = class {
    static num2percentage(num, d = 2) {
      num = num * 100;
      return num.toFixed(d) + "%";
    }
    static randNum(min, max) {
      let range = max - min;
      let rand = Math.random();
      let num = min + Math.round(rand * range);
      return num;
    }
    static shuffle(arr) {
      let i = arr.length, t, j;
      while (--i) {
        j = Math.floor(Math.random() * i);
        t = arr[i];
        arr[i] = arr[j];
        arr[j] = t;
      }
    }
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
  };
  __name(StringUtil, "StringUtil");
  StringUtil._colorDic = {};

  // E:/WheelChairMan/src/Scene/LoadView.ts
  var __decorate12 = __$decorate("9797e892-adab-4c82-8f5e-800b37f590f9", "../src/Scene/LoadView.ts");
  var _a3;
  var _b3;
  var Image3 = Laya.Image;
  var Label2 = Laya.Label;
  var Handler5 = Laya.Handler;
  var { regClass: regClass10, property: property10 } = Laya;
  var LoadView = /* @__PURE__ */ __name(class LoadView2 extends UIBase_default {
    constructor() {
      super();
    }
    onOpened(param) {
      this.imgMask = this.imgLoad.mask;
      this.checkVersion();
    }
    checkVersion() {
      this.startPreLoad();
    }
    startPreLoad() {
      ResLoader.preloadRes(Handler5.create(this, this.onCompleted), Handler5.create(this, this._onProgress));
    }
    _onProgress(value) {
      this.imgMask.width = this.imgLoad.width * value;
      this.labelLoad.text = "Loading\u2026" + StringUtil.num2percentage(value);
    }
    onCompleted() {
      console.log("load_conCompleted");
      LocalizationMgr.init();
      UIBaseMgr.showDebug();
      UIBaseMgr.open(1012 /* LuckyBoxView */, 1003 /* luckybox_gold */);
      this.close();
    }
  }, "LoadView");
  __decorate12([
    property10(),
    __metadata("design:type", typeof (_a3 = typeof Image3 !== "undefined" && Image3) === "function" ? _a3 : Object)
  ], LoadView.prototype, "imgLoad", void 0);
  __decorate12([
    property10(),
    __metadata("design:type", typeof (_b3 = typeof Label2 !== "undefined" && Label2) === "function" ? _b3 : Object)
  ], LoadView.prototype, "labelLoad", void 0);
  LoadView = __decorate12([
    regClass10(),
    __metadata("design:paramtypes", [])
  ], LoadView);

  // E:/WheelChairMan/src/Scene/LoseView.ts
  var __decorate13 = __$decorate("9b8220cb-adbc-4d84-9618-c7c9f2bd85f3", "../src/Scene/LoseView.ts");
  var { regClass: regClass11, property: property11 } = Laya;
  var LoseView = /* @__PURE__ */ __name(class LoseView2 extends UIBase_default {
  }, "LoseView");
  LoseView = __decorate13([
    regClass11()
  ], LoseView);

  // E:/WheelChairMan/src/Scene/LuckyBoxView.ts
  var __decorate14 = __$decorate("d94dafff-05f0-4479-9a1a-ab9861a24025", "../src/Scene/LuckyBoxView.ts");
  var _a4;
  var _b4;
  var _c2;
  var _d;
  var _e;
  var Text2 = Laya.Text;
  var Image4 = Laya.Image;
  var { regClass: regClass12, property: property12 } = Laya;
  var LuckyBoxView = /* @__PURE__ */ __name(class LuckyBoxView2 extends UIBase_default {
    constructor() {
      super();
      this.$luckyboxDataTable = /* @__PURE__ */ new Map();
    }
    onOpened(param) {
      this.regClick(this.imgClose, this.close);
      this.regClick(this.imgOpen, this.openLuckBox);
      this.$luckyboxDataTable = ResLoader.strParser(ResLoader.getResById(3001 /* LuckyBox */).data);
      console.log(this.$param);
      this.initLuckBox();
    }
    initLuckBox() {
      if (this.$param == void 0) {
        this.$param = 0;
      }
      this.txtMsg.text = LocalizationMgr.getLocalizationByKey(this.$luckyboxDataTable.get(this.$param)["localizationKey"]);
      this.imgBox.skin = ResLoader.getUrlById(this.$luckyboxDataTable.get(this.$param)["boxImgPath"]);
    }
    openLuckBox() {
      switch (this.$param) {
        case 0:
          break;
      }
    }
  }, "LuckyBoxView");
  __decorate14([
    property12(),
    __metadata("design:type", typeof (_a4 = typeof Image4 !== "undefined" && Image4) === "function" ? _a4 : Object)
  ], LuckyBoxView.prototype, "imgLight", void 0);
  __decorate14([
    property12(),
    __metadata("design:type", typeof (_b4 = typeof Image4 !== "undefined" && Image4) === "function" ? _b4 : Object)
  ], LuckyBoxView.prototype, "imgBox", void 0);
  __decorate14([
    property12(),
    __metadata("design:type", typeof (_c2 = typeof Image4 !== "undefined" && Image4) === "function" ? _c2 : Object)
  ], LuckyBoxView.prototype, "imgClose", void 0);
  __decorate14([
    property12(),
    __metadata("design:type", typeof (_d = typeof Image4 !== "undefined" && Image4) === "function" ? _d : Object)
  ], LuckyBoxView.prototype, "imgOpen", void 0);
  __decorate14([
    property12(),
    __metadata("design:type", typeof (_e = typeof Text2 !== "undefined" && Text2) === "function" ? _e : Object)
  ], LuckyBoxView.prototype, "txtMsg", void 0);
  LuckyBoxView = __decorate14([
    regClass12(),
    __metadata("design:paramtypes", [])
  ], LuckyBoxView);

  // E:/WheelChairMan/src/Scene/MainView.ts
  var __decorate15 = __$decorate("127f9431-d96d-491c-b782-2549a9c38d7b", "../src/Scene/MainView.ts");
  var { regClass: regClass13, property: property13 } = Laya;
  var MainView = /* @__PURE__ */ __name(class MainView2 extends UIBase_default {
    constructor() {
      super();
    }
  }, "MainView");
  MainView = __decorate15([
    regClass13(),
    __metadata("design:paramtypes", [])
  ], MainView);

  // E:/WheelChairMan/src/Scene/MyInfoView.ts
  var __decorate16 = __$decorate("dd16d8bf-53b3-41cc-81c1-44f39afec08e", "../src/Scene/MyInfoView.ts");
  var { regClass: regClass14, property: property14 } = Laya;
  var MyInfoView = /* @__PURE__ */ __name(class MyInfoView2 extends UIBase_default {
  }, "MyInfoView");
  MyInfoView = __decorate16([
    regClass14()
  ], MyInfoView);

  // E:/WheelChairMan/src/Scene/PauseView.ts
  var __decorate17 = __$decorate("352c01f5-c61a-4387-bd3b-63f412ac12c7", "../src/Scene/PauseView.ts");
  var { regClass: regClass15, property: property15 } = Laya;
  var PauseView = /* @__PURE__ */ __name(class PauseView2 extends UIBase_default {
  }, "PauseView");
  PauseView = __decorate17([
    regClass15()
  ], PauseView);

  // E:/WheelChairMan/src/Scene/PrivacyAgreementView.ts
  var __decorate18 = __$decorate("df9b38f8-2d16-4280-849d-786074a729fe", "../src/Scene/PrivacyAgreementView.ts");
  var _a5;
  var _b5;
  var _c3;
  var _d2;
  var Label3 = Laya.Label;
  var Image5 = Laya.Image;
  var Panel = Laya.Panel;
  var { regClass: regClass16, property: property16 } = Laya;
  var PrivacyAgreementView = /* @__PURE__ */ __name(class PrivacyAgreementView2 extends UIBase_default {
    constructor() {
      super();
    }
    onOpened(param) {
      this.regClick(this.imgSure, this.sure);
      this.regClick(this.imgCancel, this.cancel);
      let data = ResLoader.getResById(4001 /* PrivacyAgreement */);
      this.txtAgreement.text = data.data;
      this.txtAgreement.height = data.data.length / 0.9;
    }
    sure() {
      this.close();
    }
    cancel() {
      this.close();
    }
  }, "PrivacyAgreementView");
  __decorate18([
    property16(),
    __metadata("design:type", typeof (_a5 = typeof Image5 !== "undefined" && Image5) === "function" ? _a5 : Object)
  ], PrivacyAgreementView.prototype, "imgSure", void 0);
  __decorate18([
    property16(),
    __metadata("design:type", typeof (_b5 = typeof Image5 !== "undefined" && Image5) === "function" ? _b5 : Object)
  ], PrivacyAgreementView.prototype, "imgCancel", void 0);
  __decorate18([
    property16(),
    __metadata("design:type", typeof (_c3 = typeof Panel !== "undefined" && Panel) === "function" ? _c3 : Object)
  ], PrivacyAgreementView.prototype, "panel", void 0);
  __decorate18([
    property16(),
    __metadata("design:type", typeof (_d2 = typeof Label3 !== "undefined" && Label3) === "function" ? _d2 : Object)
  ], PrivacyAgreementView.prototype, "txtAgreement", void 0);
  PrivacyAgreementView = __decorate18([
    regClass16(),
    __metadata("design:paramtypes", [])
  ], PrivacyAgreementView);

  // E:/WheelChairMan/src/Scene/RankingView.ts
  var __decorate19 = __$decorate("731a1c9f-76c7-4237-ad93-f469eb850bb9", "../src/Scene/RankingView.ts");
  var { regClass: regClass17, property: property17 } = Laya;
  var RankingView = /* @__PURE__ */ __name(class RankingView2 extends UIBase_default {
  }, "RankingView");
  RankingView = __decorate19([
    regClass17()
  ], RankingView);

  // E:/WheelChairMan/src/Mgr/SoundMgr.ts
  var SoundManager = Laya.SoundManager;
  var SoundMgr = class {
    static changeMusicVolume(value) {
      SoundManager.musicVolume = value;
    }
    static changeSoundVolume(value) {
      SoundManager.soundVolume = value;
    }
    static playSound(soundEnum, loopTimes) {
      SoundManager.playSound(this.$soundBaseUrl + soundEnum + this.$soundUrlStuff, loopTimes);
    }
  };
  __name(SoundMgr, "SoundMgr");
  SoundMgr.$musicBaseUrl = "";
  SoundMgr.$musicUrlStuff = ".mp3";
  SoundMgr.$soundBaseUrl = "";
  SoundMgr.$soundUrlStuff = ".mp3";

  // E:/WheelChairMan/src/Mgr/VibrateMgr.ts
  var VibrateMgr = class {
    static get isVibrate() {
      return !!this.$isVibrate;
    }
    static set isVibrate(value) {
      if (value) {
        this.$isVibrate = 1;
      } else {
        this.$isVibrate = 0;
      }
    }
  };
  __name(VibrateMgr, "VibrateMgr");
  VibrateMgr.$isVibrate = -1;

  // E:/WheelChairMan/src/Util/Slider.ts
  var __decorate20 = __$decorate("35b37bb8-b4f2-4360-8030-42b6c06ee038", "../src/Util/Slider.ts");
  var _a6;
  var _b6;
  var _c4;
  var Image6 = Laya.Image;
  var { regClass: regClass18, property: property18 } = Laya;
  var Slider = /* @__PURE__ */ __name(class Slider2 extends Laya.Script {
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
    init(caller, callback) {
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
  }, "Slider");
  __decorate20([
    property18(),
    __metadata("design:type", Boolean)
  ], Slider.prototype, "isH", void 0);
  __decorate20([
    property18(),
    __metadata("design:type", typeof (_a6 = typeof Image6 !== "undefined" && Image6) === "function" ? _a6 : Object)
  ], Slider.prototype, "imgLoad", void 0);
  __decorate20([
    property18(),
    __metadata("design:type", typeof (_b6 = typeof Image6 !== "undefined" && Image6) === "function" ? _b6 : Object)
  ], Slider.prototype, "imgBar", void 0);
  __decorate20([
    property18(),
    __metadata("design:type", typeof (_c4 = typeof Image6 !== "undefined" && Image6) === "function" ? _c4 : Object)
  ], Slider.prototype, "imgBg", void 0);
  __decorate20([
    property18(),
    __metadata("design:type", Number)
  ], Slider.prototype, "value", void 0);
  Slider = __decorate20([
    regClass18(),
    __metadata("design:paramtypes", [])
  ], Slider);
  var Slider_default = Slider;

  // E:/WheelChairMan/src/Util/Toggle.ts
  var __decorate21 = __$decorate("0f5a24a0-2f83-4219-9165-99195082aa4a", "../src/Util/Toggle.ts");
  var _a7;
  var Image7 = Laya.Image;
  var { regClass: regClass19, property: property19 } = Laya;
  var Toggle = /* @__PURE__ */ __name(class Toggle2 extends Laya.Script {
    constructor() {
      super();
      this.isON = false;
    }
    onEnable() {
      this.$imgBg = this.owner;
      this.$imgBg.on(Laya.Event.CLICK, this, this.changeValue);
      this.changeItem();
    }
    init(caller, callback, isON) {
      if (isON != void 0) {
        this.isON = isON;
      }
      this.$caller = caller;
      this.$callback = callback;
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
  }, "Toggle");
  __decorate21([
    property19(),
    __metadata("design:type", Boolean)
  ], Toggle.prototype, "isON", void 0);
  __decorate21([
    property19(),
    __metadata("design:type", typeof (_a7 = typeof Image7 !== "undefined" && Image7) === "function" ? _a7 : Object)
  ], Toggle.prototype, "imgItem", void 0);
  Toggle = __decorate21([
    regClass19(),
    __metadata("design:paramtypes", [])
  ], Toggle);
  var Toggle_default = Toggle;

  // E:/WheelChairMan/src/Scene/SettingView.ts
  var __decorate22 = __$decorate("9811079c-9340-49a7-8d8a-71570d70a98d", "../src/Scene/SettingView.ts");
  var _a8;
  var _b7;
  var _c5;
  var _d3;
  var _e2;
  var _f;
  var _g;
  var _h;
  var Box2 = Laya.Box;
  var Label4 = Laya.Label;
  var Image8 = Laya.Image;
  var { regClass: regClass20, property: property20 } = Laya;
  var SettingView = /* @__PURE__ */ __name(class SettingView2 extends UIBase_default {
    constructor() {
      super();
    }
    onOpened(param) {
      this.regClick(this.imgClose, this.close);
      this.regClick(this.imgSupport, this.getSupport);
      this.regClick(this.imgLanguage, this.changeLanguage);
      this.regClick(this.txtAgreement, this.openPrivacyAgreement);
      this.$sliderBgm = this.sliderBgm.getComponent(Slider_default);
      this.$sliderSfx = this.sliderSfx.getComponent(Slider_default);
      this.$toggleShake = this.toggleShake.getComponent(Toggle_default);
      this.$sliderBgm.init(this, this.bgmChange);
      this.$sliderSfx.init(this, this.sfxChange);
      this.$toggleShake.init(this, this.shakeChange);
      this.regEvent("LANGUAGECHANGE" /* LANGUAGECHANGE */, this.changeLanguageIcon);
      this.changeLanguageIcon();
    }
    bgmChange(value) {
      SoundMgr.changeMusicVolume(value);
    }
    sfxChange(value) {
      SoundMgr.changeSoundVolume(value);
    }
    shakeChange(value) {
      VibrateMgr.isVibrate = value;
    }
    changeLanguageIcon() {
      this.imgLan.skin = ResLoader.getUrlById(LocalizationMgr.getFlagSkinIdById(LocalizationMgr.Language));
    }
    openPrivacyAgreement() {
      UIBaseMgr.open(1016 /* PrivacyAgreementView */);
    }
    getSupport() {
      Laya.Browser.window.open(ProjectConfig.support);
      console.log("support");
    }
    changeLanguage() {
      UIBaseMgr.open(1009 /* LanguageView */);
    }
    onClosed() {
    }
  }, "SettingView");
  __decorate22([
    property20(),
    __metadata("design:type", typeof (_a8 = typeof Image8 !== "undefined" && Image8) === "function" ? _a8 : Object)
  ], SettingView.prototype, "imgClose", void 0);
  __decorate22([
    property20(),
    __metadata("design:type", typeof (_b7 = typeof Box2 !== "undefined" && Box2) === "function" ? _b7 : Object)
  ], SettingView.prototype, "sliderSfx", void 0);
  __decorate22([
    property20(),
    __metadata("design:type", typeof (_c5 = typeof Box2 !== "undefined" && Box2) === "function" ? _c5 : Object)
  ], SettingView.prototype, "sliderBgm", void 0);
  __decorate22([
    property20(),
    __metadata("design:type", typeof (_d3 = typeof Image8 !== "undefined" && Image8) === "function" ? _d3 : Object)
  ], SettingView.prototype, "toggleShake", void 0);
  __decorate22([
    property20(),
    __metadata("design:type", typeof (_e2 = typeof Image8 !== "undefined" && Image8) === "function" ? _e2 : Object)
  ], SettingView.prototype, "imgLanguage", void 0);
  __decorate22([
    property20(),
    __metadata("design:type", typeof (_f = typeof Image8 !== "undefined" && Image8) === "function" ? _f : Object)
  ], SettingView.prototype, "imgLan", void 0);
  __decorate22([
    property20(),
    __metadata("design:type", typeof (_g = typeof Image8 !== "undefined" && Image8) === "function" ? _g : Object)
  ], SettingView.prototype, "imgSupport", void 0);
  __decorate22([
    property20(),
    __metadata("design:type", typeof (_h = typeof Label4 !== "undefined" && Label4) === "function" ? _h : Object)
  ], SettingView.prototype, "txtAgreement", void 0);
  SettingView = __decorate22([
    regClass20(),
    __metadata("design:paramtypes", [])
  ], SettingView);

  // E:/WheelChairMan/src/Scene/ShopView.ts
  var __decorate23 = __$decorate("6101acc2-fac8-487c-9045-7d083746b9cd", "../src/Scene/ShopView.ts");
  var { regClass: regClass21, property: property21 } = Laya;
  var ShopView = /* @__PURE__ */ __name(class ShopView2 extends UIBase_default {
  }, "ShopView");
  ShopView = __decorate23([
    regClass21()
  ], ShopView);

  // E:/WheelChairMan/src/Scene/SignInView.ts
  var __decorate24 = __$decorate("658fcc51-8109-42a6-a372-0d6e36f801cc", "../src/Scene/SignInView.ts");
  var { regClass: regClass22, property: property22 } = Laya;
  var SignInView = /* @__PURE__ */ __name(class SignInView2 extends UIBase_default {
  }, "SignInView");
  SignInView = __decorate24([
    regClass22()
  ], SignInView);

  // E:/WheelChairMan/src/Scene/SureView.ts
  var __decorate25 = __$decorate("2eee226a-dcc2-4965-9ad2-4c490d20fbdf", "../src/Scene/SureView.ts");
  var _a9;
  var _b8;
  var _c6;
  var _d4;
  var Label5 = Laya.Label;
  var Image9 = Laya.Image;
  var { regClass: regClass23, property: property23 } = Laya;
  var SureView = /* @__PURE__ */ __name(class SureView2 extends UIBase_default {
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
  }, "SureView");
  __decorate25([
    property23(),
    __metadata("design:type", typeof (_a9 = typeof Image9 !== "undefined" && Image9) === "function" ? _a9 : Object)
  ], SureView.prototype, "imgSure", void 0);
  __decorate25([
    property23(),
    __metadata("design:type", typeof (_b8 = typeof Image9 !== "undefined" && Image9) === "function" ? _b8 : Object)
  ], SureView.prototype, "imgCancel", void 0);
  __decorate25([
    property23(),
    __metadata("design:type", typeof (_c6 = typeof Label5 !== "undefined" && Label5) === "function" ? _c6 : Object)
  ], SureView.prototype, "txtTitle", void 0);
  __decorate25([
    property23(),
    __metadata("design:type", typeof (_d4 = typeof Label5 !== "undefined" && Label5) === "function" ? _d4 : Object)
  ], SureView.prototype, "txtMsg", void 0);
  SureView = __decorate25([
    regClass23(),
    __metadata("design:paramtypes", [])
  ], SureView);

  // E:/WheelChairMan/src/Util/Timer.ts
  var Pool2 = Laya.Pool;
  var _Timer = class {
    constructor() {
      this.$caller = null;
      this.$callBack = null;
      this.$isRunning = false;
      this.$runCount = 0;
      this.$delay = 1;
      this.$lastTime = 0;
      this.$runTime = 0;
      this.$type = 0;
    }
    get isRunning() {
      return this.$isRunning;
    }
    get runCount() {
      return this.$runCount;
    }
    get runTime() {
      if (this.$isRunning) {
        return this.$runTime + Date.now() - this.$lastTime;
      } else {
        return this.$runTime;
      }
    }
    static get(delay, caller, callBack) {
      if (delay > 0 && caller != null && callBack != null) {
        let timer = Pool2.getItemByClass(this.$sign, _Timer);
        timer.$delay = delay;
        timer.$caller = caller;
        timer.$callBack = callBack;
        return timer;
      } else {
        console.log("\u53C2\u6570\u4E3A\u7A7A");
      }
    }
    reset() {
      this.$caller = null;
      this.$callBack = null;
      this.$isRunning = false;
      this.$runCount = 0;
      this.$delay = 1;
      this.$lastTime = 0;
      this.$runTime = 0;
    }
    once() {
      this.$type = 0;
      return this;
    }
    loop() {
      this.$type = 1;
      return this;
    }
    frameOnce() {
      this.$type = 2;
      return this;
    }
    frameLoop() {
      this.$type = 3;
      return this;
    }
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
    resume() {
      this.$isRunning = true;
      this.$lastTime = Date.now();
      if (this.$type == 0) {
        Laya.timer.once(this.$delay, this, this.update);
      } else if (this.$type == 2) {
        Laya.timer.frameOnce(this.$delay, this, this.update);
      }
    }
    clear() {
      this.reset();
      Laya.timer.clear(this, this.update);
      Pool2.recover(_Timer.$sign, this);
    }
    clearAll() {
      this.reset();
      Laya.timer.clearAll(this);
      Pool2.recover(_Timer.$sign, this);
    }
    update() {
      if (this.$isRunning) {
        this.$runTime += Date.now() - this.$lastTime;
        this.$lastTime = Date.now();
        this.$runCount++;
        this.$callBack.call(this.$caller);
        if (this.$type == 0 || this.$type == 2) {
          this.$isRunning = false;
        }
      }
    }
  };
  var Timer = _Timer;
  __name(Timer, "Timer");
  Timer.$sign = "$myTimer";

  // E:/WheelChairMan/src/Scene/TipsView.ts
  var __decorate26 = __$decorate("a1b11e33-3318-4f7e-af1d-2bbf5fa13333", "../src/Scene/TipsView.ts");
  var _a10;
  var Text3 = Laya.Text;
  var { regClass: regClass24, property: property24 } = Laya;
  var TipsView = /* @__PURE__ */ __name(class TipsView2 extends UIBase_default {
    constructor() {
      super();
    }
    onEnable() {
      let img = this.owner;
      img.centerX = 0;
      img.centerY = 200;
    }
    onOpened(param) {
      this.txtMsg.text = param;
      Timer.get(1500, this, () => {
        this.close();
      }).once().start();
    }
  }, "TipsView");
  __decorate26([
    property24(),
    __metadata("design:type", typeof (_a10 = typeof Text3 !== "undefined" && Text3) === "function" ? _a10 : Object)
  ], TipsView.prototype, "txtMsg", void 0);
  TipsView = __decorate26([
    regClass24(),
    __metadata("design:paramtypes", [])
  ], TipsView);

  // E:/WheelChairMan/src/Util/Base64.ts
  var __decorate27 = __$decorate("fe62c9ad-c7c3-4baa-8f7c-216a9f051006", "../src/Util/Base64.ts");
  var Base64 = class {
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
  Base64._keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
})();
//# sourceMappingURL=bundle.js.map
