
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
  // E:/WheelChairMan/src/Config/ProjectConfig.ts
  var ProjectConfig = class {
    static get Language() {
      return this.LanguageList[0];
    }
  };
  ProjectConfig.projectName = "WheelChairMan";
  ProjectConfig.gameName = "WheelChairMan";
  ProjectConfig.projectVersion = "1.0.0";
  ProjectConfig.projectVersionIndex = 1;
  ProjectConfig.isDebug = true;
  ProjectConfig.LanguageList = [
    "ChineseSimplified",
    "English"
  ];
  ProjectConfig.LocalizationLanguageList = [
    "\u7B80\u4F53\u4E2D\u6587",
    "English"
  ];
  ProjectConfig.support = "https://github.com/NoRainLand/WheelChairMan";

  // E:/WheelChairMan/src/Url/SceneUrl.ts
  var SceneUrl = class {
  };
  SceneUrl.SceneUrlBase = "resources/prefab/";
  SceneUrl.sceneUrlSuffix = ".lh";
  SceneUrl.LoadView = "LoadView";
  SceneUrl.DebugView = "DebugView";
  SceneUrl.SureDialog = "SureDialog";
  SceneUrl.TipsView = "TipsView";
  SceneUrl.SettingView = "SettingView";
  SceneUrl.LanguageView = "LanguageView";

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
  EventMgr.eventDispatcher = new EventDispatcher();

  // E:/WheelChairMan/src/UIBase/UIBase.ts
  var __decorate = __$decorate("172331b7-4cbf-495d-96b7-70e583afa5dd", "");
  var { regClass, property } = Laya;
  var UIBase = class UIBase2 extends Laya.Script {
    constructor() {
      super();
      this.depth = 0;
      this.isSingleton = false;
      this.$param = null;
      this.isOpen = false;
      this.$event = /* @__PURE__ */ new Map();
      this.$sceneName = "";
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
      UIBaseMgr.close(this.$sceneName, this.id);
    }
  };
  __decorate([
    property(),
    __metadata("design:type", Number)
  ], UIBase.prototype, "depth", void 0);
  __decorate([
    property(),
    __metadata("design:type", Boolean)
  ], UIBase.prototype, "isSingleton", void 0);
  UIBase = __decorate([
    regClass(),
    __metadata("design:paramtypes", [])
  ], UIBase);
  var UIBase_default = UIBase;

  // E:/WheelChairMan/src/UIBase/UIBaseData.ts
  var __decorate2 = __$decorate("54ce626d-1dfc-47f6-a89f-5bd020584009", "");
  var { regClass: regClass2, property: property2 } = Laya;
  var UIBaseData = class UIBaseData2 extends Laya.Script {
    constructor() {
      super();
      this.depth = 2;
      this.isSingleton = false;
    }
  };
  __decorate2([
    property2(),
    __metadata("design:type", Number)
  ], UIBaseData.prototype, "depth", void 0);
  __decorate2([
    property2(),
    __metadata("design:type", Boolean)
  ], UIBaseData.prototype, "isSingleton", void 0);
  UIBaseData = __decorate2([
    regClass2(),
    __metadata("design:paramtypes", [])
  ], UIBaseData);
  var UIBaseData_default = UIBaseData;

  // E:/WheelChairMan/src/UIBase/UIBaseMgr.ts
  var Pool = Laya.Pool;
  var UIBaseMgr = class {
    static init(UIBase3) {
      this.$UIBase = UIBase3;
      this.$DebugUI = this.$UIBase.getChildByName("DebugUI");
      this.$TipsUI = this.$UIBase.getChildByName("TipsUI");
      this.$MainUI = this.$UIBase.getChildByName("MainUI");
      this.$3DUI = this.$UIBase.getChildByName("3DUI");
      ProjectConfig.isDebug && this.initDebugScene();
    }
    static open(sceneName, param, caller, callback) {
      let script = this.$sceneScriptPool.get(sceneName);
      if (!script || script instanceof UIBase_default) {
        let scene = Pool.getItem(sceneName);
        if (scene) {
          this.initScene(scene, sceneName, param, caller, callback);
        } else {
          let scenePrefab = this.$scenes.get(sceneName);
          if (scenePrefab) {
            let scene2 = scenePrefab.create();
            this.initScene(scene2, sceneName, param, caller, callback);
          } else {
            this.loadScene(sceneName, param, caller, callback);
          }
        }
      }
    }
    static initScene(scene, sceneName, param, caller, callback) {
      let base = scene.getComponent(UIBase_default);
      let data = scene.getComponent(UIBaseData_default);
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
      base.$sceneName = sceneName;
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
    }
    static close(sceneName, id) {
      let scriptOrMap = this.$sceneScriptPool.get(sceneName);
      if (scriptOrMap && scriptOrMap instanceof UIBase_default) {
        scriptOrMap.isOpen = false;
        scriptOrMap.owner.removeSelf();
        scriptOrMap.onClosed();
        this.$sceneScriptPool.set(sceneName, void 0);
      } else if (scriptOrMap && scriptOrMap instanceof Map) {
        if (id) {
          let base = scriptOrMap.get(id.toString());
          if (base) {
            base.isOpen = false;
            base.owner.removeSelf();
            base.onClosed();
            scriptOrMap.set(id.toString(), void 0);
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
      Laya.loader.load(SceneUrl.SceneUrlBase + sceneName + SceneUrl.sceneUrlSuffix).then((prefab) => {
        this.$scenes.set(sceneName, prefab);
        this.open(sceneName, param, caller, callback);
      });
    }
    static initDebugScene() {
      this.open(SceneUrl.DebugView);
    }
    static showTips(msg) {
      this.open(SceneUrl.TipsView, msg);
    }
    static showSureDialog(title, msg, caller, sureCallback, cancelCallBack) {
      let data = { title, msg, caller, sureCallback, cancelCallBack };
      this.open(SceneUrl.SureDialog, data);
    }
  };
  UIBaseMgr.$scenes = /* @__PURE__ */ new Map();
  UIBaseMgr.$sceneScriptPool = /* @__PURE__ */ new Map();

  // E:/WheelChairMan/src/GameEntry.ts
  var __decorate3 = __$decorate("5d4f5965-a166-4aeb-8715-baae3302439a", "");
  var { regClass: regClass3, property: property3 } = Laya;
  var GameEntry = class GameEntry2 extends Laya.Script {
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
      UIBaseMgr.open(SceneUrl.LoadView);
    }
  };
  GameEntry = __decorate3([
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

  // E:/WheelChairMan/src/Localization/LocalizationUrl.ts
  var LocalizationUrl = class {
  };
  LocalizationUrl.Json = [
    "resources/localization/ChineseSimplified/Default.json",
    "resources/localization/English/Default.json"
  ];
  LocalizationUrl.Image = [
    "resources/img/languageview/language_chn.png",
    "resources/img/languageview/language_eng.png"
  ];

  // E:/WheelChairMan/src/Localization/LocalizationMgr.ts
  var LocalizationMgr = class {
    static init(onProgress, complete) {
      this.$language = this.Language;
      Laya.loader.load(LocalizationUrl.Json, complete, onProgress).then((value) => {
        for (let i = 0; i < value.length; i++) {
          let language = value[i].data[0].language;
          let dic = value[i].data[0].dic;
          this.$TextResourceMap.set(language, dic);
        }
      });
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
          this.$language = language;
        } else {
          this.$language = ProjectConfig.Language;
          LocalMgr.setItem("LANGUAGE" /* LANGUAGE */, this.$language);
        }
      }
      return this.$language;
    }
    static set Language(language) {
      this.$language = language;
      LocalMgr.setItem("LANGUAGE" /* LANGUAGE */, this.$language);
      EventMgr.event("LANGUAGECHANGE" /* LANGUAGECHANGE */);
    }
  };
  LocalizationMgr.$TextResourceMap = /* @__PURE__ */ new Map();

  // E:/WheelChairMan/src/Localization/LocalizationText.ts
  var __decorate4 = __$decorate("5a62e727-31ad-49bf-b53f-96fbff2b0a39", "");
  var Text = Laya.Text;
  var Label = Laya.Label;
  var { regClass: regClass4, property: property4 } = Laya;
  var LocalizationText = class LocalizationText2 extends Laya.Script {
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
  };
  __decorate4([
    property4(),
    __metadata("design:type", String)
  ], LocalizationText.prototype, "localizationKey", void 0);
  LocalizationText = __decorate4([
    regClass4(),
    __metadata("design:paramtypes", [])
  ], LocalizationText);

  // E:/WheelChairMan/src/Util/Slider.ts
  var __decorate5 = __$decorate("35b37bb8-b4f2-4360-8030-42b6c06ee038", "");
  var _a;
  var _b;
  var _c;
  var Image = Laya.Image;
  var { regClass: regClass5, property: property5 } = Laya;
  var Slider = class Slider2 extends Laya.Script {
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
  };
  __decorate5([
    property5(),
    __metadata("design:type", Boolean)
  ], Slider.prototype, "isH", void 0);
  __decorate5([
    property5(),
    __metadata("design:type", typeof (_a = typeof Image !== "undefined" && Image) === "function" ? _a : Object)
  ], Slider.prototype, "imgLoad", void 0);
  __decorate5([
    property5(),
    __metadata("design:type", typeof (_b = typeof Image !== "undefined" && Image) === "function" ? _b : Object)
  ], Slider.prototype, "imgBar", void 0);
  __decorate5([
    property5(),
    __metadata("design:type", typeof (_c = typeof Image !== "undefined" && Image) === "function" ? _c : Object)
  ], Slider.prototype, "imgBg", void 0);
  __decorate5([
    property5(),
    __metadata("design:type", Number)
  ], Slider.prototype, "value", void 0);
  Slider = __decorate5([
    regClass5(),
    __metadata("design:paramtypes", [])
  ], Slider);
  var Slider_default = Slider;

  // E:/WheelChairMan/src/Util/Toggle.ts
  var __decorate6 = __$decorate("0f5a24a0-2f83-4219-9165-99195082aa4a", "");
  var _a2;
  var Image2 = Laya.Image;
  var { regClass: regClass6, property: property6 } = Laya;
  var Toggle = class Toggle2 extends Laya.Script {
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
  };
  __decorate6([
    property6(),
    __metadata("design:type", Boolean)
  ], Toggle.prototype, "isON", void 0);
  __decorate6([
    property6(),
    __metadata("design:type", typeof (_a2 = typeof Image2 !== "undefined" && Image2) === "function" ? _a2 : Object)
  ], Toggle.prototype, "imgItem", void 0);
  Toggle = __decorate6([
    regClass6(),
    __metadata("design:paramtypes", [])
  ], Toggle);
  var Toggle_default = Toggle;

  // E:/WheelChairMan/src/Game/Scene/DebugView.ts
  var __decorate7 = __$decorate("5ca51831-1d23-46b6-a853-a10d5da54d6c", "");
  var _a3;
  var _b2;
  var _c2;
  var Box = Laya.Box;
  var Image3 = Laya.Image;
  var List = Laya.List;
  var Handler = Laya.Handler;
  var { regClass: regClass7, property: property7 } = Laya;
  var DebugView = class DebugView2 extends UIBase_default {
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
      this.listCommand.renderHandler = new Handler(this, this.changeItem);
      this.listCommand.selectHandler = new Handler(this, this.selectItem);
      this.listCommand.array = this.commandList;
    }
    showHidePanel() {
      this.MainPanel.visible = !this.MainPanel.visible;
    }
    changeItem(box, index) {
      let Label4 = box.getChildByName("Label");
      Label4.text = box.dataSource;
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
  };
  __decorate7([
    property7(),
    __metadata("design:type", typeof (_a3 = typeof Image3 !== "undefined" && Image3) === "function" ? _a3 : Object)
  ], DebugView.prototype, "imgShow", void 0);
  __decorate7([
    property7(),
    __metadata("design:type", typeof (_b2 = typeof Box !== "undefined" && Box) === "function" ? _b2 : Object)
  ], DebugView.prototype, "MainPanel", void 0);
  __decorate7([
    property7(),
    __metadata("design:type", typeof (_c2 = typeof List !== "undefined" && List) === "function" ? _c2 : Object)
  ], DebugView.prototype, "listCommand", void 0);
  DebugView = __decorate7([
    regClass7(),
    __metadata("design:paramtypes", [])
  ], DebugView);

  // E:/WheelChairMan/src/Game/Scene/LanguageView.ts
  var __decorate8 = __$decorate("6bc1bf6a-a993-4ac9-b9f4-4785e0d68c2b", "");
  var _a4;
  var _b3;
  var Image4 = Laya.Image;
  var List2 = Laya.List;
  var Handler2 = Laya.Handler;
  var { regClass: regClass8, property: property8 } = Laya;
  var LanguageView = class LanguageView2 extends UIBase_default {
    constructor() {
      super();
      this.$selectIndex = 0;
    }
    onOpened(param) {
      this.regClick(this.$imgClose, this.close);
      this.$listLanguage.renderHandler = new Handler2(this, this.changeItem);
      this.$listLanguage.selectHandler = new Handler2(this, this.selectItem);
      this.$selectIndex = ProjectConfig.LanguageList.indexOf(LocalizationMgr.Language);
      console.log(this.$selectIndex);
      this.$listLanguage.array = ProjectConfig.LocalizationLanguageList;
      this.$listLanguage.selectedIndex = this.$selectIndex;
    }
    changeItem(box, index) {
      let labelLanguage = box.getChildByName("labelLanguage");
      let imgFlag = box.getChildByName("imgFlag");
      let imgSelect = box.getChildByName("imgSelect");
      labelLanguage.text = box.dataSource;
      imgFlag.skin = LocalizationUrl.Image[index];
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
        LocalizationMgr.Language = ProjectConfig.LanguageList[index];
        let newBox = this.$listLanguage.getCell(this.$selectIndex);
        let newSelect = newBox.getChildByName("imgSelect");
        newSelect.visible = true;
      }
    }
  };
  __decorate8([
    property8(),
    __metadata("design:type", typeof (_a4 = typeof List2 !== "undefined" && List2) === "function" ? _a4 : Object)
  ], LanguageView.prototype, "$listLanguage", void 0);
  __decorate8([
    property8(),
    __metadata("design:type", typeof (_b3 = typeof Image4 !== "undefined" && Image4) === "function" ? _b3 : Object)
  ], LanguageView.prototype, "$imgClose", void 0);
  LanguageView = __decorate8([
    regClass8(),
    __metadata("design:paramtypes", [])
  ], LanguageView);

  // E:/WheelChairMan/src/Util/StringUtil.ts
  var StringUtil = class {
    static num2percentage(num, d = 2) {
      num = num * 100;
      return num.toFixed(d) + "%";
    }
  };

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
  Timer.$sign = "$myTimer";

  // E:/WheelChairMan/src/Game/Scene/LoadView.ts
  var __decorate9 = __$decorate("9797e892-adab-4c82-8f5e-800b37f590f9", "");
  var _a5;
  var _b4;
  var Image5 = Laya.Image;
  var Label2 = Laya.Label;
  var Handler3 = Laya.Handler;
  var { regClass: regClass9, property: property9 } = Laya;
  var LoadView = class LoadView2 extends UIBase_default {
    constructor() {
      super();
    }
    onOpened(param) {
      this.imgMask = this.imgLoad.mask;
      this.checkVersion();
    }
    checkVersion() {
      this.loadLocalization();
    }
    loadLocalization() {
      LocalizationMgr.init(Handler3.create(this, this.changeMask), Handler3.create(this, this.loadLocalizationFinish));
    }
    loadLocalizationFinish() {
      this.changeMask(1);
      console.log("\u672C\u5730\u5316\u8D44\u6E90\u52A0\u8F7D\u5B8C\u6210");
      this.loadRes3D();
    }
    loadRes3D() {
      console.log("loadRes3D");
      Timer.get(300, this, () => {
        UIBaseMgr.open(SceneUrl.SettingView);
      }).once().start();
    }
    sure() {
      console.log("sure");
    }
    no() {
      console.log("no");
    }
    changeMask(value) {
      this.imgMask.width = this.imgLoad.width * value;
      this.labelLoad.text = "Loading\u2026" + StringUtil.num2percentage(value);
    }
  };
  __decorate9([
    property9(),
    __metadata("design:type", typeof (_a5 = typeof Image5 !== "undefined" && Image5) === "function" ? _a5 : Object)
  ], LoadView.prototype, "imgLoad", void 0);
  __decorate9([
    property9(),
    __metadata("design:type", typeof (_b4 = typeof Label2 !== "undefined" && Label2) === "function" ? _b4 : Object)
  ], LoadView.prototype, "labelLoad", void 0);
  LoadView = __decorate9([
    regClass9(),
    __metadata("design:paramtypes", [])
  ], LoadView);

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
  VibrateMgr.$isVibrate = -1;

  // E:/WheelChairMan/src/Game/Scene/SettingView.ts
  var __decorate10 = __$decorate("9811079c-9340-49a7-8d8a-71570d70a98d", "");
  var _a6;
  var _b5;
  var _c3;
  var _d;
  var _e;
  var _f;
  var _g;
  var Box2 = Laya.Box;
  var Image6 = Laya.Image;
  var { regClass: regClass10, property: property10 } = Laya;
  var SettingView = class SettingView2 extends UIBase_default {
    constructor() {
      super();
    }
    onOpened(param) {
      this.regClick(this.imgClose, this.close);
      this.regClick(this.imgSupport, this.getSupport);
      this.regClick(this.imgLanguage, this.changeLanguage);
      this.$sliderBgm = this.sliderBgm.getComponent(Slider_default);
      this.$sliderSfx = this.sliderSfx.getComponent(Slider_default);
      this.$toggleShake = this.toggleShake.getComponent(Toggle_default);
      this.$sliderBgm.init(this, this.bgmChange);
      this.$sliderSfx.init(this, this.sfxChange);
      this.$toggleShake.init(this, this.shakeChange);
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
    getSupport() {
      Laya.Browser.window.open(ProjectConfig.support);
      console.log("support");
    }
    changeLanguage() {
      UIBaseMgr.open(SceneUrl.LanguageView);
    }
    onClosed() {
    }
  };
  __decorate10([
    property10(),
    __metadata("design:type", typeof (_a6 = typeof Image6 !== "undefined" && Image6) === "function" ? _a6 : Object)
  ], SettingView.prototype, "imgClose", void 0);
  __decorate10([
    property10(),
    __metadata("design:type", typeof (_b5 = typeof Box2 !== "undefined" && Box2) === "function" ? _b5 : Object)
  ], SettingView.prototype, "sliderSfx", void 0);
  __decorate10([
    property10(),
    __metadata("design:type", typeof (_c3 = typeof Box2 !== "undefined" && Box2) === "function" ? _c3 : Object)
  ], SettingView.prototype, "sliderBgm", void 0);
  __decorate10([
    property10(),
    __metadata("design:type", typeof (_d = typeof Image6 !== "undefined" && Image6) === "function" ? _d : Object)
  ], SettingView.prototype, "toggleShake", void 0);
  __decorate10([
    property10(),
    __metadata("design:type", typeof (_e = typeof Image6 !== "undefined" && Image6) === "function" ? _e : Object)
  ], SettingView.prototype, "imgLanguage", void 0);
  __decorate10([
    property10(),
    __metadata("design:type", typeof (_f = typeof Image6 !== "undefined" && Image6) === "function" ? _f : Object)
  ], SettingView.prototype, "imgLan", void 0);
  __decorate10([
    property10(),
    __metadata("design:type", typeof (_g = typeof Image6 !== "undefined" && Image6) === "function" ? _g : Object)
  ], SettingView.prototype, "imgSupport", void 0);
  SettingView = __decorate10([
    regClass10(),
    __metadata("design:paramtypes", [])
  ], SettingView);

  // E:/WheelChairMan/src/Game/Scene/SureDialog.ts
  var __decorate11 = __$decorate("5f74b527-d6db-4ea9-9895-86badcafdb6d", "");
  var _a7;
  var _b6;
  var _c4;
  var _d2;
  var Label3 = Laya.Label;
  var Image7 = Laya.Image;
  var { regClass: regClass11, property: property11 } = Laya;
  var SureDialog = class SureDialog2 extends UIBase_default {
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
  __decorate11([
    property11(),
    __metadata("design:type", typeof (_a7 = typeof Image7 !== "undefined" && Image7) === "function" ? _a7 : Object)
  ], SureDialog.prototype, "imgSure", void 0);
  __decorate11([
    property11(),
    __metadata("design:type", typeof (_b6 = typeof Image7 !== "undefined" && Image7) === "function" ? _b6 : Object)
  ], SureDialog.prototype, "imgCancel", void 0);
  __decorate11([
    property11(),
    __metadata("design:type", typeof (_c4 = typeof Label3 !== "undefined" && Label3) === "function" ? _c4 : Object)
  ], SureDialog.prototype, "txtTitle", void 0);
  __decorate11([
    property11(),
    __metadata("design:type", typeof (_d2 = typeof Label3 !== "undefined" && Label3) === "function" ? _d2 : Object)
  ], SureDialog.prototype, "txtMsg", void 0);
  SureDialog = __decorate11([
    regClass11(),
    __metadata("design:paramtypes", [])
  ], SureDialog);

  // E:/WheelChairMan/src/Game/Scene/TipsView.ts
  var __decorate12 = __$decorate("a1b11e33-3318-4f7e-af1d-2bbf5fa13333", "");
  var _a8;
  var Text2 = Laya.Text;
  var { regClass: regClass12, property: property12 } = Laya;
  var TipsView = class TipsView2 extends UIBase_default {
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
  };
  __decorate12([
    property12(),
    __metadata("design:type", typeof (_a8 = typeof Text2 !== "undefined" && Text2) === "function" ? _a8 : Object)
  ], TipsView.prototype, "txtMsg", void 0);
  TipsView = __decorate12([
    regClass12(),
    __metadata("design:paramtypes", [])
  ], TipsView);

  // E:/WheelChairMan/src/Url/ResUrl.ts
  var ResUrl = class {
  };
  ResUrl.LuckyBox = [
    "assets/resources/img/luckboxview/luckybox_bronze.png",
    "assets/resources/img/luckboxview/luckybox_silver.png",
    "assets/resources/img/luckboxview/luckybox_gold.png",
    "assets/resources/img/luckboxview/luckybox_diamond.png",
    "assets/resources/img/luckboxview/luckybox_platinum.png"
  ];
  ResUrl.LuckyBoxData = "assets/resources/data/LuckyBox.txt";
  ResUrl.AssetPath = "assets/resources/datatables/AssetsPath.txt";

  // E:/WheelChairMan/src/Game/Scene/LuckyBoxView.ts
  var __decorate13 = __$decorate("d94dafff-05f0-4479-9a1a-ab9861a24025", "");
  var _a9;
  var _b7;
  var _c5;
  var _d3;
  var _e2;
  var Text3 = Laya.Text;
  var Image8 = Laya.Image;
  var { regClass: regClass13, property: property13 } = Laya;
  var LuckyBoxView = class LuckyBoxView2 extends UIBase_default {
    constructor() {
      super();
      this.luckyboxList = [
        "LUCKYBOXBRONZE",
        "LUCKYBOXSILVER",
        "LUCKYBOXGOLD",
        "LUCKYBOXDIAMOND",
        "LUCKYBOXPLATINUM"
      ];
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
      this.txtMsg.text = LocalizationMgr.getLocalizationByKey(this.luckyboxList[this.$param]);
      this.imgBox.skin = ResUrl.LuckyBox[this.$param];
    }
    openLuckBox() {
      switch (this.$param) {
        case 0:
          break;
      }
    }
  };
  __decorate13([
    property13(),
    __metadata("design:type", typeof (_a9 = typeof Image8 !== "undefined" && Image8) === "function" ? _a9 : Object)
  ], LuckyBoxView.prototype, "imgLight", void 0);
  __decorate13([
    property13(),
    __metadata("design:type", typeof (_b7 = typeof Image8 !== "undefined" && Image8) === "function" ? _b7 : Object)
  ], LuckyBoxView.prototype, "imgBox", void 0);
  __decorate13([
    property13(),
    __metadata("design:type", typeof (_c5 = typeof Image8 !== "undefined" && Image8) === "function" ? _c5 : Object)
  ], LuckyBoxView.prototype, "imgClose", void 0);
  __decorate13([
    property13(),
    __metadata("design:type", typeof (_d3 = typeof Image8 !== "undefined" && Image8) === "function" ? _d3 : Object)
  ], LuckyBoxView.prototype, "imgOpen", void 0);
  __decorate13([
    property13(),
    __metadata("design:type", typeof (_e2 = typeof Text3 !== "undefined" && Text3) === "function" ? _e2 : Object)
  ], LuckyBoxView.prototype, "txtMsg", void 0);
  LuckyBoxView = __decorate13([
    regClass13(),
    __metadata("design:paramtypes", [])
  ], LuckyBoxView);
})();
