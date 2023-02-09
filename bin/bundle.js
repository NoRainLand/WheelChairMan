
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
  ProjectConfig.Localization = "ChineseSimplified";

  // E:/WheelChairMan/src/Url/SceneUrl.ts
  var SceneUrl = class {
  };
  __name(SceneUrl, "SceneUrl");
  SceneUrl.SceneUrlBase = "resources/Prefab/";
  SceneUrl.sceneUrlSuffix = ".lh";
  SceneUrl.LoadView = "LoadView";
  SceneUrl.DebugView = "DebugView";

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
  var __decorate = __$decorate("172331b7-4cbf-495d-96b7-70e583afa5dd", "../src/UIBase/UIBase.ts");
  var { regClass, property } = Laya;
  var UIBase = /* @__PURE__ */ __name(class UIBase2 extends Laya.Script {
    constructor() {
      super();
      this.depth = 0;
      this.isSingleton = true;
      this.$param = null;
      this.isOpen = false;
      this.$event = /* @__PURE__ */ new Map();
    }
    onStart() {
    }
    onOpened(param) {
    }
    onClosed() {
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
      let self = this, events = self.$event;
      for (let name in events) {
        EventMgr.off(name, self, events.get(name));
      }
      self.$event = null;
      self.$param = null;
    }
  }, "UIBase");
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
  var __decorate2 = __$decorate("54ce626d-1dfc-47f6-a89f-5bd020584009", "../src/UIBase/UIBaseData.ts");
  var { regClass: regClass2, property: property2 } = Laya;
  var UIBaseData = /* @__PURE__ */ __name(class UIBaseData2 extends Laya.Script {
    constructor() {
      super();
      this.depth = 2;
      this.isSingleton = true;
    }
  }, "UIBaseData");
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
      let script1 = this.sceneScriptPool.get(sceneName);
      if (!script1 || !script1.isSingleton) {
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
      base.isOpen = true;
      base.onOpened(param);
      if (caller && callback) {
        callback.call(caller);
      }
      if (base.isSingleton) {
        this.sceneScriptPool.set(sceneName, base);
      }
    }
    static close(sceneName) {
      let script = this.sceneScriptPool.get(sceneName);
      if (script) {
        script.isOpen = false;
        script.owner.removeSelf();
        script.onClosed();
        this.sceneScriptPool.set(sceneName, void 0);
      }
    }
    static isOpen(sceneName) {
      let script = this.sceneScriptPool.get(sceneName);
      if (script) {
        return script.isOpen;
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
    }
    static showSureDialog(title, msg, caller, sureCallback, cancelCallBack) {
    }
  };
  __name(UIBaseMgr, "UIBaseMgr");
  UIBaseMgr.$scenes = /* @__PURE__ */ new Map();
  UIBaseMgr.sceneScriptPool = /* @__PURE__ */ new Map();

  // E:/WheelChairMan/src/GameEntry.ts
  var __decorate3 = __$decorate("5d4f5965-a166-4aeb-8715-baae3302439a", "../src/GameEntry.ts");
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
      UIBaseMgr.open(SceneUrl.LoadView);
    }
  }, "GameEntry");
  GameEntry = __decorate3([
    regClass3(),
    __metadata("design:paramtypes", [])
  ], GameEntry);

  // E:/WheelChairMan/src/Localization/LocalizationText.ts
  var __decorate4 = __$decorate("5a62e727-31ad-49bf-b53f-96fbff2b0a39", "../src/Localization/LocalizationText.ts");
  var { regClass: regClass4, property: property4 } = Laya;
  var LocalizationText = class extends Laya.Script {
    constructor() {
      super();
    }
    onStart() {
    }
    onDisable() {
    }
  };
  __name(LocalizationText, "LocalizationText");
  __decorate4([
    property4(),
    __metadata("design:type", String)
  ], LocalizationText.prototype, "localizationKey", void 0);

  // E:/WheelChairMan/src/Scene/LoadView.ts
  var __decorate5 = __$decorate("9797e892-adab-4c82-8f5e-800b37f590f9", "../src/Scene/LoadView.ts");
  var _a;
  var _b;
  var { regClass: regClass5, property: property5 } = Laya;
  var Image = Laya.Image;
  var Label = Laya.Label;
  var LoadView = /* @__PURE__ */ __name(class LoadView2 extends UIBase_default {
    constructor() {
      super();
    }
    onOpened(param) {
      this.imgMask = this.imgLoad.mask;
    }
  }, "LoadView");
  __decorate5([
    property5(),
    __metadata("design:type", typeof (_a = typeof Image !== "undefined" && Image) === "function" ? _a : Object)
  ], LoadView.prototype, "imgLoad", void 0);
  __decorate5([
    property5(),
    __metadata("design:type", typeof (_b = typeof Label !== "undefined" && Label) === "function" ? _b : Object)
  ], LoadView.prototype, "labelLoad", void 0);
  LoadView = __decorate5([
    regClass5(),
    __metadata("design:paramtypes", [])
  ], LoadView);

  // E:/WheelChairMan/src/Scene/DebugView.ts
  var __decorate6 = __$decorate("5ca51831-1d23-46b6-a853-a10d5da54d6c", "../src/Scene/DebugView.ts");
  var _a2;
  var _b2;
  var _c;
  var Box = Laya.Box;
  var Image2 = Laya.Image;
  var List = Laya.List;
  var Handler = Laya.Handler;
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
      this.listCommand.renderHandler = new Handler(this, this.changeItem);
      this.listCommand.selectHandler = new Handler(this, this.selectItem);
      this.listCommand.array = this.commandList;
    }
    showHidePanel() {
      this.MainPanel.visible = !this.MainPanel.visible;
    }
    changeItem(box, index) {
      let Label2 = box.getChildByName("Label");
      Label2.text = box.dataSource;
    }
    selectItem(index) {
      switch (index) {
        case 0:
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
  __decorate6([
    property6(),
    __metadata("design:type", typeof (_a2 = typeof Image2 !== "undefined" && Image2) === "function" ? _a2 : Object)
  ], DebugView.prototype, "imgShow", void 0);
  __decorate6([
    property6(),
    __metadata("design:type", typeof (_b2 = typeof Box !== "undefined" && Box) === "function" ? _b2 : Object)
  ], DebugView.prototype, "MainPanel", void 0);
  __decorate6([
    property6(),
    __metadata("design:type", typeof (_c = typeof List !== "undefined" && List) === "function" ? _c : Object)
  ], DebugView.prototype, "listCommand", void 0);
  DebugView = __decorate6([
    regClass6(),
    __metadata("design:paramtypes", [])
  ], DebugView);
})();
//# sourceMappingURL=bundle.js.map
