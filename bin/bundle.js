
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

  // E:/WheelChairMan/src/Mgr/LocalMgr.ts
  var LocalStorage = Laya.LocalStorage;
  var LocalMgr = class {
    getItem(key) {
      return LocalStorage.getItem(`${ProjectConfig.projectName}_${key}`);
    }
    setItem(key, value) {
      LocalStorage.setItem(`${ProjectConfig.projectName}_${key}`, typeof value === "string" ? value : value.toString());
    }
  };
  __name(LocalMgr, "LocalMgr");

  // E:/WheelChairMan/src/GameEntry.ts
  var GameEntry = class {
    static get LocalMgr() {
      return this._localMgr;
    }
    static __init__() {
      this._localMgr = new LocalMgr();
    }
  };
  __name(GameEntry, "GameEntry");

  // E:/WheelChairMan/src/Main.ts
  var __decorate = __$decorate("5d4f5965-a166-4aeb-8715-baae3302439a", "../src/Main.ts");
  var { regClass, property } = Laya;
  var Main = /* @__PURE__ */ __name(class Main2 extends Laya.Script {
    constructor() {
      super();
      this.isInit = false;
      if (!this.isInit) {
        this.isInit = true;
        this.__init__();
      }
    }
    __init__() {
      console.log(`\u5F53\u524D\u5F15\u64CE\u7248\u672C:${Laya.LayaEnv.version}, \u5F53\u524D\u9879\u76EE\u540D\u79F0:${ProjectConfig.projectName},\u5F53\u524D\u9879\u76EE\u7248\u672C:${ProjectConfig.projectVersion}/${ProjectConfig.projectVersionIndex}`);
      GameEntry.__init__();
    }
  }, "Main");
  Main = __decorate([
    regClass(),
    __metadata("design:paramtypes", [])
  ], Main);
})();
//# sourceMappingURL=bundle.js.map
