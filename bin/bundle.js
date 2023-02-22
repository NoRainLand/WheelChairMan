
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

  // E:/WheelChairMan/src/Url/SceneUrl.ts
  var SceneUrl = class {
  };
  __name(SceneUrl, "SceneUrl");
  /**加载页面地址 */
  SceneUrl.LoadView = "resources/prefab/LoadView.lh";

  // E:/WheelChairMan/src/Url/ResUrl.ts
  var ResUrl = class {
  };
  __name(ResUrl, "ResUrl");
  /**资源地址列表地址 */
  ResUrl.AssetPath = "resources/datatables/AssetsPath.txt";

  // E:/WheelChairMan/src/Util/ResLoader.ts
  var __decorate = __$decorate("ad57b7d6-130d-4c0c-aab6-85d0cb5bf6f9", "../src/Util/ResLoader.ts");
  var Handler = Laya.Handler;
  var ResLoader = class {
    /**
     * 基础加载器
     * @param url 资源地址,必须是一个string或者string[]
     * @param onCompleted 加载完成回调
     * @param _onProgress 加载进度
     */
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
    /**获取缓存 */
    static getRes(url) {
      if (url) {
        return Laya.loader.getRes(url);
      }
    }
    /**获取克隆 */
    static getResClose(url) {
      if (url) {
        let obj = Laya.loader.getRes(url);
        if (obj && obj.create) {
          return obj.create();
        }
      }
      return null;
    }
    /**加载完成一个 */
    static $load_one_onCompleted() {
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
    static preloadRes(onCompleted, _onProgress) {
      if (!this.isLoad) {
        this.isLoad = true;
        this.$onCompleted = onCompleted;
        this.$onProgress = _onProgress;
        this.load(ResUrl.AssetPath).then((path) => {
          this.$dicAssetsPath = this.stringParser(path.data, true);
          console.log(this.$dicAssetsPath);
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
    /**
     * 字符解析器
     * 约定字符串格式如下
     * #为备注行
     * $为key行 第一个key必须为 "id"
     * 然后通过id生成map
     * 暂时先这样吧,需要可以用正则表达式重写
     * @param shotString 数据
     * @returns 返回一个以id作为key的map
     */
    static stringParser(shotString, $isUrl = false) {
      if (shotString) {
        let arr = shotString.split("\n");
        let shotArr, keyList, typeList, map = /* @__PURE__ */ new Map();
        for (let i = 0; i < arr.length; i++) {
          let str = arr[i];
          if (str.length) {
            if ($isUrl) {
              shotArr = str.replace("\r", "").split("\\").join("/").replace("assets/", "").split("	");
            } else {
              shotArr = str.replace("\r", "").split("\\n").join("\n").split("	");
            }
            if (i == 2) {
              keyList = shotArr;
              keyList = keyList.filter((item) => {
                return item != "$";
              });
            } else if (i == 3) {
              typeList = shotArr;
              typeList = typeList.filter((item) => {
                return item != "#";
              });
            } else if (i > 3) {
              shotArr = shotArr.filter((item) => {
                return item != "";
              });
              if (shotArr[0] != "#") {
                let data = {}, id;
                for (let j = 0; j < keyList.length; j++) {
                  let key = keyList[j];
                  let type = typeList[j];
                  let shot = shotArr[j];
                  if (j == 0) {
                    id = Number(shot);
                  }
                  switch (type) {
                    case "number":
                      data[key] = Number(shot);
                      break;
                    default:
                    case "string":
                      data[key] = shot;
                      break;
                  }
                }
                map.set(id, data);
              }
            }
          }
        }
        return map;
      }
    }
    /**通过唯一id获取数据表 */
    static getDataTableById(assetsId) {
      let data = this.getResById(assetsId);
      if (data && data.data) {
        let obj = this.stringParser(data.data);
        return obj;
      }
      return null;
    }
    /**通过唯一Id获取资源 */
    static getResById(assetsId) {
      let obj = this.$dicAssetsPath.get(assetsId);
      if (obj && obj["path"]) {
        return this.getRes(obj["path"]);
      }
    }
    /**通过唯一id获取url */
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

  // E:/WheelChairMan/src/UIBase/UIBase.ts
  var __decorate2 = __$decorate("172331b7-4cbf-495d-96b7-70e583afa5dd", "../src/UIBase/UIBase.ts");
  var { regClass, property } = Laya;
  var UIBase = /* @__PURE__ */ __name(class UIBase2 extends Laya.Script {
    constructor() {
      super();
      this.depth = 2;
      this.isSingleton = true;
      this.$param = null;
      this.isOpen = false;
      this.AniType = 0;
      this.aniFinish = false;
    }
    /**开启特效 */
    openAni() {
      this.$Main = this.owner.getChildByName("Main");
      switch (this.AniType) {
        default:
          this.aniFinish = true;
          break;
        case 0:
          this.aniFinish = true;
          break;
        case 1:
          break;
      }
      this.aniFinish = true;
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
    onDisable() {
      let self = this, events = self.$event;
      for (let name in events) {
        EventMgr.off(name, self, events.get(name));
      }
      self.$event = null;
      self.$param = null;
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
          if (now - clickTime > time && this.aniFinish) {
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
  __decorate2([
    property(),
    __metadata("design:type", Number)
  ], UIBase.prototype, "AniType", void 0);
  UIBase = __decorate2([
    regClass(),
    __metadata("design:paramtypes", [])
  ], UIBase);
  var UIBase_default = UIBase;

  // E:/WheelChairMan/src/UIBase/UIBaseMgr.ts
  var Pool = Laya.Pool;
  var Handler2 = Laya.Handler;
  var UIBaseMgr = class {
    /**初始化 */
    static init(UIBase3) {
      this.$UIBase = UIBase3;
      this.$DebugUI = this.$UIBase.getChildByName("DebugUI");
      this.$TipsUI = this.$UIBase.getChildByName("TipsUI");
      this.$MainUI = this.$UIBase.getChildByName("MainUI");
      this.$3DUI = this.$UIBase.getChildByName("3DUI");
      this.$sceneScriptPool = /* @__PURE__ */ new Map();
      this.$scenePool = /* @__PURE__ */ new Map();
    }
    /**加载load界面 */
    static openLoadView() {
      if (!this.$isOpenLoadView) {
        this.$isOpenLoadView = true;
        ResLoader.load(SceneUrl.LoadView, Handler2.create(this, () => {
          this.initScene(ResLoader.getResClose(SceneUrl.LoadView), 1006 /* LoadView */);
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
    static open(sceneId, param, caller, callback) {
      let scripts = this.$sceneScriptPool.get(sceneId);
      if (scripts && scripts[0] && scripts[0].isSingleton) {
        console.log("\u8FD9\u4E2A\u9875\u9762\u5DF2\u7ECF\u5B58\u5728\u5E76\u4E14\u4E0D\u5141\u8BB8\u91CD\u590D\u6253\u5F00");
      } else {
        let scene = Pool.getItem(this.$sign + sceneId);
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
    static initScene(scene, sceneName, param, caller, callback) {
      let base = scene.getComponent(UIBase_default);
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
        base.aniFinish = false;
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
    static close(sceneName, id) {
      let scripts = this.$sceneScriptPool.get(sceneName);
      if (scripts && scripts.length > 0) {
        let arr = [];
        for (let i = 0; i < scripts.length; i++) {
          let script = scripts[i];
          if (script.id == id) {
            script.isOpen = false;
            script.owner.removeSelf();
            script.onClosed();
            Pool.recover(this.$sign + sceneName, script.owner);
          } else {
            arr.push(script);
          }
        }
        this.$sceneScriptPool.set(sceneName, arr);
      }
    }
    /**是否打开某个界面 */
    static isOpen(sceneName) {
      let arr = this.$sceneScriptPool.get(sceneName);
      if (arr && arr.length > 0) {
        return true;
      }
      return false;
    }
    /**加载场景 */
    static loadScene(sceneName, param, caller, callback) {
      this.$scenePool.set(sceneName, ResLoader.getResById(sceneName));
      if (this.$scenePool.get(sceneName)) {
        this.open(sceneName, param, caller, callback);
      }
    }
    static initDebugScene() {
      this.open(1001 /* DebugView */);
    }
    /**打开一个调试界面 */
    static showDebug() {
      this.open(1001 /* DebugView */);
    }
    /**
     * 打开一个提示面板
     * @param msg 信息
     */
    static showTips(msg) {
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
    static showSureDialog(title, msg, caller, sureCallback, cancelCallBack) {
      let data = { title, msg, caller, sureCallback, cancelCallBack };
      this.open(1005 /* SureView */, data);
    }
  };
  __name(UIBaseMgr, "UIBaseMgr");
  /**是否已经调用过openLoadView */
  UIBaseMgr.$isOpenLoadView = false;
  /**对象池标记 */
  UIBaseMgr.$sign = "View_";

  // E:/WheelChairMan/src/GameEntry.ts
  var __decorate3 = __$decorate("5d4f5965-a166-4aeb-8715-baae3302439a", "../src/GameEntry.ts");
  var { regClass: regClass2, property: property2 } = Laya;
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
    /**初始化 */
    init() {
      console.log(`\u5F53\u524D\u5F15\u64CE\u7248\u672C:${Laya.LayaEnv.version}, \u5F53\u524D\u9879\u76EE\u540D\u79F0:${ProjectConfig.projectName},\u5F53\u524D\u9879\u76EE\u7248\u672C:${ProjectConfig.projectVersion}/${ProjectConfig.projectVersionIndex}`);
      this.GameEntry = this.owner;
      this.UIBase = this.GameEntry.getChildByName("UIBase");
      UIBaseMgr.init(this.UIBase);
      UIBaseMgr.openLoadView();
    }
  }, "GameEntry");
  GameEntry = __decorate3([
    regClass2(),
    __metadata("design:paramtypes", [])
  ], GameEntry);

  // E:/WheelChairMan/src/Game/MainGame.ts
  var __decorate4 = __$decorate("17be9e1a-ac52-43f3-8894-fa783a42a738", "../src/Game/MainGame.ts");
  var MainGame_1;
  var { regClass: regClass3, property: property3 } = Laya;
  var MainGame = MainGame_1 = /* @__PURE__ */ __name(class MainGame2 {
    constructor() {
      this.$isInit = false;
    }
    static get instance() {
      return this._instance ? this._instance : this._instance = new MainGame_1();
    }
    init() {
      if (!this.$isInit) {
        this.$isInit = true;
        this.$scene3dMap = ResLoader.getDataTableById(3007 /* Scene3d */);
        this.addEvent();
        this.reset();
      }
    }
    addEvent() {
    }
    reset() {
      Laya.Scene.open(ResLoader.getUrlById(this.$scene3dMap.get(1001 /* MainScene */)["path"]), false);
    }
    gameStart() {
    }
    gameOver() {
    }
    gameWin() {
    }
    gameLose() {
    }
  }, "MainGame");
  MainGame = MainGame_1 = __decorate4([
    regClass3()
  ], MainGame);
  var MainGame_default = MainGame;

  // E:/WheelChairMan/src/Enum/LanguageEnum.ts
  var LanguageEnum = /* @__PURE__ */ ((LanguageEnum2) => {
    LanguageEnum2[LanguageEnum2["ChineseSimplified"] = 1001] = "ChineseSimplified";
    LanguageEnum2[LanguageEnum2["English"] = 1002] = "English";
    return LanguageEnum2;
  })(LanguageEnum || {});

  // E:/WheelChairMan/src/Mgr/LocalMgr.ts
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

  // E:/WheelChairMan/src/Localization/LocalizationMgr.ts
  var LocalizationMgr = class {
    /**初始化 */
    static init() {
      this.$localizationResMap = ResLoader.getDataTableById(3002 /* LocalizationRes */);
      this.$localizationMap = ResLoader.getDataTableById(501 /* Localization */);
      this.$localizationKeyMap = /* @__PURE__ */ new Map();
      for (let [key, value] of this.$localizationMap) {
        this.$localizationKeyMap.set(value["key"], value);
      }
    }
    /**获取语言对应国旗 */
    static getFlagSkinIdById(id) {
      let data = this.$localizationResMap.get(id);
      return data && data["flagId"];
    }
    /**获取语言描述 */
    static getLanguageMsgById(id) {
      let data = this.$localizationResMap.get(id);
      return data && data["msg"];
    }
    /**通过key获取对应语言 */
    static $getLocalizationByKey(key, ...keys) {
      var _a15, _b12;
      let language = LanguageEnum[this.Language];
      let value = (_a15 = this.$localizationKeyMap.get(key)) == null ? void 0 : _a15[language];
      if (value) {
        if (keys && keys.length) {
          for (let i = 0; i < keys.length; i++) {
            let item = (_b12 = this.$localizationKeyMap.get(keys[i])) == null ? void 0 : _b12[language];
            item = item ? item : keys[i];
            value = value.replace("$", item);
          }
        }
      }
      return value;
    }
    /**通过枚举获取对应语言 */
    static getLocalizationByEnum(lenum, ...lenums) {
      var _a15, _b12;
      let language = LanguageEnum[this.Language];
      let value = (_a15 = this.$localizationMap.get(lenum)) == null ? void 0 : _a15[language];
      if (value) {
        if (lenums && lenums.length) {
          for (let i = 0; i < lenums.length; i++) {
            let item = (_b12 = this.$localizationMap.get(lenums[i])) == null ? void 0 : _b12[language];
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
        let value = LocalizationMgr.$getLocalizationByKey(this.localizationKey);
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

  // E:/WheelChairMan/src/Data/GameData.ts
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
        console.log(key);
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
        "\u6DFB\u52A05000\u94BB\u77F3",
        "\u6E05\u96F6\u91D1\u5E01\u94BB\u77F3",
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
      let Label7 = box.getChildByName("Label");
      Label7.text = box.dataSource;
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

  // E:/WheelChairMan/src/Mgr/CurrencyMgr.ts
  var CurrencyMgr = class {
    /**初始化 */
    static init() {
      this.$currencyMap = ResLoader.getDataTableById(3003 /* Currency */);
    }
    /**获取对应颜色 */
    static getColorById(id) {
      let data = this.$currencyMap.get(id);
      if (data && data["color"]) {
        return "#" + data["color"];
      }
      return "#fff";
    }
    /**获取对应图标 */
    static getImgUrlById(id) {
      let data = this.$currencyMap.get(id);
      if (data && data["imgId"]) {
        return ResLoader.getUrlById(data["imgId"]);
      }
      return "";
    }
  };
  __name(CurrencyMgr, "CurrencyMgr");

  // E:/WheelChairMan/src/Mgr/LevelMgr.ts
  var LevelMgr = class {
    /**初始化 */
    static init() {
      this.$levelDataTable = ResLoader.stringParser(ResLoader.getResById(3004 /* Level */).data);
    }
    /**等级 */
    static get level() {
      for (let [, value] of this.$levelDataTable) {
        let minEx = value["minEx"];
        let maxEx = value["maxEx"];
        if (!isNaN(minEx) && !isNaN(maxEx)) {
          if (GameData.experience > minEx && GameData.experience <= maxEx) {
            return value["level"];
          }
        }
      }
      return 1;
    }
  };
  __name(LevelMgr, "LevelMgr");
  /**经验表 */
  LevelMgr.$levelDataTable = /* @__PURE__ */ new Map();

  // E:/WheelChairMan/src/Util/StringUtil.ts
  var __decorate11 = __$decorate("9f8ef9b7-13a5-4980-a9d8-46f8659dff82", "../src/Util/StringUtil.ts");
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

  // E:/WheelChairMan/src/Scene/LoadView.ts
  var __decorate12 = __$decorate("9797e892-adab-4c82-8f5e-800b37f590f9", "../src/Scene/LoadView.ts");
  var _a3;
  var _b3;
  var _c2;
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
    /**请求版本 */
    checkVersion() {
      this.startPreLoad();
    }
    /**开始预加载全局资源 */
    startPreLoad() {
      ResLoader.preloadRes(Handler5.create(this, this.onCompleted), Handler5.create(this, this._onProgress));
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
      MainGame_default.instance.init();
    }
    /**打开页面 */
    openScene() {
      UIBaseMgr.showDebug();
      UIBaseMgr.open(1013 /* MainView */);
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
  __decorate12([
    property10(),
    __metadata("design:type", typeof (_c2 = typeof Label2 !== "undefined" && Label2) === "function" ? _c2 : Object)
  ], LoadView.prototype, "testLabel", void 0);
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
  var _c3;
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
      this.initLuckBox();
    }
    initLuckBox() {
      if (this.$param == void 0) {
        this.$param = 0;
      }
      this.txtMsg.text = LocalizationMgr.$getLocalizationByKey(this.$luckyboxDataTable.get(this.$param)["localizationKey"]);
      this.imgBox.skin = ResLoader.getUrlById(this.$luckyboxDataTable.get(this.$param)["imgPath"]);
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
    __metadata("design:type", typeof (_c3 = typeof Image4 !== "undefined" && Image4) === "function" ? _c3 : Object)
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
  var _a5;
  var _b5;
  var _c4;
  var _d2;
  var _e2;
  var _f;
  var _g;
  var _h;
  var _j;
  var _k;
  var _l;
  var _m;
  var _o;
  var _p;
  var _q;
  var Text3 = Laya.Text;
  var Box2 = Laya.Box;
  var Label3 = Laya.Label;
  var Image5 = Laya.Image;
  var { regClass: regClass13, property: property13 } = Laya;
  var MainView = /* @__PURE__ */ __name(class MainView2 extends UIBase_default {
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
      UIBaseMgr.open(1019 /* ShopView */, currency);
    }
    openUserInfo() {
    }
    openSetting() {
      UIBaseMgr.open(1018 /* SettingView */);
    }
    openRanking() {
      UIBaseMgr.open(1017 /* RankingView */);
    }
    checkFirstTime() {
      let value = LocalStorageMgr.getItem("FIRESTTIME" /* FIRSTTIME */);
      console.log(value);
      if (value && Number(value) == 1) {
        this.selectPlayer();
      } else {
        this.showGuide();
      }
    }
    showGuide() {
    }
    selectPlayer() {
    }
    selectWeapon() {
    }
    onClosed() {
    }
  }, "MainView");
  __decorate15([
    property13(),
    __metadata("design:type", typeof (_a5 = typeof Text3 !== "undefined" && Text3) === "function" ? _a5 : Object)
  ], MainView.prototype, "txtGold", void 0);
  __decorate15([
    property13(),
    __metadata("design:type", typeof (_b5 = typeof Image5 !== "undefined" && Image5) === "function" ? _b5 : Object)
  ], MainView.prototype, "imgPlusGold", void 0);
  __decorate15([
    property13(),
    __metadata("design:type", typeof (_c4 = typeof Text3 !== "undefined" && Text3) === "function" ? _c4 : Object)
  ], MainView.prototype, "txtDiamond", void 0);
  __decorate15([
    property13(),
    __metadata("design:type", typeof (_d2 = typeof Image5 !== "undefined" && Image5) === "function" ? _d2 : Object)
  ], MainView.prototype, "imgPlusDiamond", void 0);
  __decorate15([
    property13(),
    __metadata("design:type", typeof (_e2 = typeof Image5 !== "undefined" && Image5) === "function" ? _e2 : Object)
  ], MainView.prototype, "imgHead", void 0);
  __decorate15([
    property13(),
    __metadata("design:type", typeof (_f = typeof Image5 !== "undefined" && Image5) === "function" ? _f : Object)
  ], MainView.prototype, "imgRing", void 0);
  __decorate15([
    property13(),
    __metadata("design:type", typeof (_g = typeof Image5 !== "undefined" && Image5) === "function" ? _g : Object)
  ], MainView.prototype, "imgLevel", void 0);
  __decorate15([
    property13(),
    __metadata("design:type", typeof (_h = typeof Image5 !== "undefined" && Image5) === "function" ? _h : Object)
  ], MainView.prototype, "imgMs", void 0);
  __decorate15([
    property13(),
    __metadata("design:type", typeof (_j = typeof Text3 !== "undefined" && Text3) === "function" ? _j : Object)
  ], MainView.prototype, "txtLevel", void 0);
  __decorate15([
    property13(),
    __metadata("design:type", typeof (_k = typeof Label3 !== "undefined" && Label3) === "function" ? _k : Object)
  ], MainView.prototype, "labelName", void 0);
  __decorate15([
    property13(),
    __metadata("design:type", typeof (_l = typeof Image5 !== "undefined" && Image5) === "function" ? _l : Object)
  ], MainView.prototype, "imgShop", void 0);
  __decorate15([
    property13(),
    __metadata("design:type", typeof (_m = typeof Image5 !== "undefined" && Image5) === "function" ? _m : Object)
  ], MainView.prototype, "imgRanking", void 0);
  __decorate15([
    property13(),
    __metadata("design:type", typeof (_o = typeof Image5 !== "undefined" && Image5) === "function" ? _o : Object)
  ], MainView.prototype, "imgSettings", void 0);
  __decorate15([
    property13(),
    __metadata("design:type", typeof (_p = typeof Image5 !== "undefined" && Image5) === "function" ? _p : Object)
  ], MainView.prototype, "imgStart", void 0);
  __decorate15([
    property13(),
    __metadata("design:type", typeof (_q = typeof Box2 !== "undefined" && Box2) === "function" ? _q : Object)
  ], MainView.prototype, "Main", void 0);
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
  var _a6;
  var _b6;
  var _c5;
  var _d3;
  var Label4 = Laya.Label;
  var Image6 = Laya.Image;
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
    __metadata("design:type", typeof (_a6 = typeof Image6 !== "undefined" && Image6) === "function" ? _a6 : Object)
  ], PrivacyAgreementView.prototype, "imgSure", void 0);
  __decorate18([
    property16(),
    __metadata("design:type", typeof (_b6 = typeof Image6 !== "undefined" && Image6) === "function" ? _b6 : Object)
  ], PrivacyAgreementView.prototype, "imgCancel", void 0);
  __decorate18([
    property16(),
    __metadata("design:type", typeof (_c5 = typeof Panel !== "undefined" && Panel) === "function" ? _c5 : Object)
  ], PrivacyAgreementView.prototype, "panel", void 0);
  __decorate18([
    property16(),
    __metadata("design:type", typeof (_d3 = typeof Label4 !== "undefined" && Label4) === "function" ? _d3 : Object)
  ], PrivacyAgreementView.prototype, "txtAgreement", void 0);
  PrivacyAgreementView = __decorate18([
    regClass16(),
    __metadata("design:paramtypes", [])
  ], PrivacyAgreementView);

  // E:/WheelChairMan/src/Scene/RankingView.ts
  var __decorate19 = __$decorate("731a1c9f-76c7-4237-ad93-f469eb850bb9", "../src/Scene/RankingView.ts");
  var _a7;
  var _b7;
  var _c6;
  var _d4;
  var _e3;
  var _f2;
  var Text4 = Laya.Text;
  var Image7 = Laya.Image;
  var List3 = Laya.List;
  var Handler6 = Laya.Handler;
  var { regClass: regClass17, property: property17 } = Laya;
  var RankingView = /* @__PURE__ */ __name(class RankingView2 extends UIBase_default {
    constructor() {
      super();
      this.rankingList = [
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
        console.log(value);
        return value.UID == "654";
      });
      if (data) {
        this.txtLV.text = data.lv.toString();
        this.txtName.text = data.name.toString();
        this.txtRank.text = data.rank.toString();
      }
      this.$rankingMap = ResLoader.getDataTableById(3006 /* Ranking */);
    }
    addEvent() {
      this.regClick(this.imgClose, this.close);
      this.listRanking.renderHandler = new Handler6(this, this.changeItem);
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
      let imgRank = box.getChildByName("imgRank");
      switch (data.rank) {
        case 1:
          let data1 = this.$rankingMap.get(1001 /* fist */);
          txtRank.color = data1["color"];
          imgRank.skin = ResLoader.getUrlById(data1["imgId"]);
          break;
        case 2:
          let data2 = this.$rankingMap.get(1002 /* second */);
          txtRank.color = data2["color"];
          imgRank.skin = ResLoader.getUrlById(data2["imgId"]);
          break;
        case 3:
          let data3 = this.$rankingMap.get(1003 /* third */);
          txtRank.color = data3["color"];
          imgRank.skin = ResLoader.getUrlById(data3["imgId"]);
          break;
        default:
          let data4 = this.$rankingMap.get(1004 /* default */);
          txtRank.color = data4["color"];
          imgRank.skin = ResLoader.getUrlById(data4["imgId"]);
          break;
      }
    }
  }, "RankingView");
  __decorate19([
    property17(),
    __metadata("design:type", typeof (_a7 = typeof Image7 !== "undefined" && Image7) === "function" ? _a7 : Object)
  ], RankingView.prototype, "imgClose", void 0);
  __decorate19([
    property17(),
    __metadata("design:type", typeof (_b7 = typeof Image7 !== "undefined" && Image7) === "function" ? _b7 : Object)
  ], RankingView.prototype, "imgHead", void 0);
  __decorate19([
    property17(),
    __metadata("design:type", typeof (_c6 = typeof Text4 !== "undefined" && Text4) === "function" ? _c6 : Object)
  ], RankingView.prototype, "txtName", void 0);
  __decorate19([
    property17(),
    __metadata("design:type", typeof (_d4 = typeof Text4 !== "undefined" && Text4) === "function" ? _d4 : Object)
  ], RankingView.prototype, "txtLV", void 0);
  __decorate19([
    property17(),
    __metadata("design:type", typeof (_e3 = typeof Text4 !== "undefined" && Text4) === "function" ? _e3 : Object)
  ], RankingView.prototype, "txtRank", void 0);
  __decorate19([
    property17(),
    __metadata("design:type", typeof (_f2 = typeof List3 !== "undefined" && List3) === "function" ? _f2 : Object)
  ], RankingView.prototype, "listRanking", void 0);
  RankingView = __decorate19([
    regClass17(),
    __metadata("design:paramtypes", [])
  ], RankingView);

  // E:/WheelChairMan/src/Mgr/SoundMgr.ts
  var SoundManager = Laya.SoundManager;
  var SoundMgr = class {
    /**修改音乐音量 */
    static changeMusicVolume(value) {
      SoundManager.musicVolume = value;
    }
    /**修改音效音量 */
    static changeSoundVolume(value) {
      SoundManager.soundVolume = value;
    }
    /**播放音效 */
    static playSound(soundEnum, loopTimes) {
      SoundManager.playSound(this.$soundBaseUrl + soundEnum + this.$soundUrlStuff, loopTimes);
    }
  };
  __name(SoundMgr, "SoundMgr");
  /**音乐路径 */
  SoundMgr.$musicBaseUrl = "";
  /**音乐后缀 */
  SoundMgr.$musicUrlStuff = ".mp3";
  /**声音路径 */
  SoundMgr.$soundBaseUrl = "";
  /**声音后缀 */
  SoundMgr.$soundUrlStuff = ".mp3";

  // E:/WheelChairMan/src/Mgr/VibrateMgr.ts
  var VibrateMgr = class {
    /**是否震动 */
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
  /**震动 */
  VibrateMgr.$isVibrate = -1;

  // E:/WheelChairMan/src/Util/Slider.ts
  var __decorate20 = __$decorate("35b37bb8-b4f2-4360-8030-42b6c06ee038", "../src/Util/Slider.ts");
  var _a8;
  var _b8;
  var _c7;
  var Image8 = Laya.Image;
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
    /**初始化 */
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
    __metadata("design:type", typeof (_a8 = typeof Image8 !== "undefined" && Image8) === "function" ? _a8 : Object)
  ], Slider.prototype, "imgLoad", void 0);
  __decorate20([
    property18(),
    __metadata("design:type", typeof (_b8 = typeof Image8 !== "undefined" && Image8) === "function" ? _b8 : Object)
  ], Slider.prototype, "imgBar", void 0);
  __decorate20([
    property18(),
    __metadata("design:type", typeof (_c7 = typeof Image8 !== "undefined" && Image8) === "function" ? _c7 : Object)
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
  var _a9;
  var Image9 = Laya.Image;
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
    __metadata("design:type", typeof (_a9 = typeof Image9 !== "undefined" && Image9) === "function" ? _a9 : Object)
  ], Toggle.prototype, "imgItem", void 0);
  Toggle = __decorate21([
    regClass19(),
    __metadata("design:paramtypes", [])
  ], Toggle);
  var Toggle_default = Toggle;

  // E:/WheelChairMan/src/Scene/SettingView.ts
  var __decorate22 = __$decorate("9811079c-9340-49a7-8d8a-71570d70a98d", "../src/Scene/SettingView.ts");
  var _a10;
  var _b9;
  var _c8;
  var _d5;
  var _e4;
  var _f3;
  var _g2;
  var _h2;
  var Box3 = Laya.Box;
  var Label5 = Laya.Label;
  var Image10 = Laya.Image;
  var { regClass: regClass20, property: property20 } = Laya;
  var SettingView = /* @__PURE__ */ __name(class SettingView2 extends UIBase_default {
    constructor() {
      super();
    }
    onOpened(param) {
      this.$sliderBgm = this.sliderBgm.getComponent(Slider_default);
      this.$sliderSfx = this.sliderSfx.getComponent(Slider_default);
      this.$toggleShake = this.toggleShake.getComponent(Toggle_default);
      this.$sliderBgm.init(this, this.bgmChange);
      this.$sliderSfx.init(this, this.sfxChange);
      this.$toggleShake.init(this, this.shakeChange);
    }
    addEvent() {
      this.regClick(this.imgClose, this.close);
      this.regClick(this.imgSupport, this.getSupport);
      this.regClick(this.imgLanguage, this.changeLanguage);
      this.regClick(this.txtAgreement, this.openPrivacyAgreement);
      this.regEvent("LANGUAGECHANGE" /* LANGUAGECHANGE */, this.changeLanguageIcon, true);
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
    __metadata("design:type", typeof (_a10 = typeof Image10 !== "undefined" && Image10) === "function" ? _a10 : Object)
  ], SettingView.prototype, "imgClose", void 0);
  __decorate22([
    property20(),
    __metadata("design:type", typeof (_b9 = typeof Box3 !== "undefined" && Box3) === "function" ? _b9 : Object)
  ], SettingView.prototype, "sliderSfx", void 0);
  __decorate22([
    property20(),
    __metadata("design:type", typeof (_c8 = typeof Box3 !== "undefined" && Box3) === "function" ? _c8 : Object)
  ], SettingView.prototype, "sliderBgm", void 0);
  __decorate22([
    property20(),
    __metadata("design:type", typeof (_d5 = typeof Image10 !== "undefined" && Image10) === "function" ? _d5 : Object)
  ], SettingView.prototype, "toggleShake", void 0);
  __decorate22([
    property20(),
    __metadata("design:type", typeof (_e4 = typeof Image10 !== "undefined" && Image10) === "function" ? _e4 : Object)
  ], SettingView.prototype, "imgLanguage", void 0);
  __decorate22([
    property20(),
    __metadata("design:type", typeof (_f3 = typeof Image10 !== "undefined" && Image10) === "function" ? _f3 : Object)
  ], SettingView.prototype, "imgLan", void 0);
  __decorate22([
    property20(),
    __metadata("design:type", typeof (_g2 = typeof Image10 !== "undefined" && Image10) === "function" ? _g2 : Object)
  ], SettingView.prototype, "imgSupport", void 0);
  __decorate22([
    property20(),
    __metadata("design:type", typeof (_h2 = typeof Label5 !== "undefined" && Label5) === "function" ? _h2 : Object)
  ], SettingView.prototype, "txtAgreement", void 0);
  SettingView = __decorate22([
    regClass20(),
    __metadata("design:paramtypes", [])
  ], SettingView);

  // E:/WheelChairMan/src/Util/ObjUtil.ts
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
  };
  __name(ObjUtil, "ObjUtil");

  // E:/WheelChairMan/src/Scene/ShopView.ts
  var __decorate23 = __$decorate("6101acc2-fac8-487c-9045-7d083746b9cd", "../src/Scene/ShopView.ts");
  var _a11;
  var _b10;
  var _c9;
  var Image11 = Laya.Image;
  var List4 = Laya.List;
  var Handler7 = Laya.Handler;
  var { regClass: regClass21, property: property21 } = Laya;
  var ShopView = /* @__PURE__ */ __name(class ShopView2 extends UIBase_default {
    constructor() {
      super();
      this.$titleSelectedIndex = 0;
    }
    onOpened(param) {
      if (!this.$shopDataTable) {
        this.$shopDataTable = ResLoader.getDataTableById(3005 /* Shop */);
      }
      this.$titleSet = /* @__PURE__ */ new Set();
      this.$shopList = [];
      if (this.$shopDataTable) {
        for (let [key, value] of this.$shopDataTable) {
          this.$titleSet.add(value["localizationKey"]);
          if (value["page"] && this.$shopList[value["page"] - 1]) {
            this.$shopList[value["page"] - 1].push(value);
          } else {
            this.$shopList[value["page"] - 1] = [value];
          }
        }
      }
    }
    addEvent() {
      this.regClick(this.imgClose, this.close);
      this.listTitle.renderHandler = new Handler7(this, this.changeTitleItem);
      this.listTitle.selectHandler = new Handler7(this, this.selectTitleItem);
      this.listShop.renderHandler = new Handler7(this, this.changeShopItem);
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
      imgItem.skin = ResLoader.getUrlById(data["imgId"]);
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
      console.log(obj);
      switch (obj["priceId"]) {
        case 1001 /* gold */:
          break;
        case 1002 /* diamond */:
          if (GameData.diamond >= obj["price"]) {
            GameData.diamond -= obj["price"];
            this.getSomething(obj);
          } else {
            UIBaseMgr.showTips(LocalizationMgr.getLocalizationByEnum(1026 /* YOUDONTHAVEENOUGHDIAMONDS */, 1023 /* DIAMOND */));
          }
          break;
        case 1003 /* key */:
          break;
        case 1005 /* dollar */:
          UIBaseMgr.showTips(LocalizationMgr.getLocalizationByEnum(1027 /* NOTYETIMPLEMENTED */));
          break;
      }
    }
    getSomething(obj) {
      switch (obj["shopId"]) {
        case 1001 /* gold */:
          GameData.gold += obj["number"];
          UIBaseMgr.showTips(LocalizationMgr.getLocalizationByEnum(1028 /* CONGRATULATIONSONGETTING */, obj["number"], 1022 /* GOLD */));
          break;
        case 1002 /* diamond */:
          GameData.diamond += obj["number"];
          UIBaseMgr.showTips(LocalizationMgr.getLocalizationByEnum(1028 /* CONGRATULATIONSONGETTING */, obj["number"], 1023 /* DIAMOND */));
          break;
        case 1003 /* key */:
          GameData.key += obj["number"];
          break;
      }
    }
  }, "ShopView");
  __decorate23([
    property21(),
    __metadata("design:type", typeof (_a11 = typeof Image11 !== "undefined" && Image11) === "function" ? _a11 : Object)
  ], ShopView.prototype, "imgClose", void 0);
  __decorate23([
    property21(),
    __metadata("design:type", typeof (_b10 = typeof List4 !== "undefined" && List4) === "function" ? _b10 : Object)
  ], ShopView.prototype, "listTitle", void 0);
  __decorate23([
    property21(),
    __metadata("design:type", typeof (_c9 = typeof List4 !== "undefined" && List4) === "function" ? _c9 : Object)
  ], ShopView.prototype, "listShop", void 0);
  ShopView = __decorate23([
    regClass21(),
    __metadata("design:paramtypes", [])
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
  var _a12;
  var _b11;
  var _c10;
  var _d6;
  var Label6 = Laya.Label;
  var Image12 = Laya.Image;
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
    __metadata("design:type", typeof (_a12 = typeof Image12 !== "undefined" && Image12) === "function" ? _a12 : Object)
  ], SureView.prototype, "imgSure", void 0);
  __decorate25([
    property23(),
    __metadata("design:type", typeof (_b11 = typeof Image12 !== "undefined" && Image12) === "function" ? _b11 : Object)
  ], SureView.prototype, "imgCancel", void 0);
  __decorate25([
    property23(),
    __metadata("design:type", typeof (_c10 = typeof Label6 !== "undefined" && Label6) === "function" ? _c10 : Object)
  ], SureView.prototype, "txtTitle", void 0);
  __decorate25([
    property23(),
    __metadata("design:type", typeof (_d6 = typeof Label6 !== "undefined" && Label6) === "function" ? _d6 : Object)
  ], SureView.prototype, "txtMsg", void 0);
  SureView = __decorate25([
    regClass23(),
    __metadata("design:paramtypes", [])
  ], SureView);

  // E:/WheelChairMan/src/Util/Timer.ts
  var Pool2 = Laya.Pool;
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
      // /**开始时间 */
      // private $startTime: number = 0;
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
    /**重置数据 */
    reset() {
      this.$caller = null;
      this.$callBack = null;
      this.$isRunning = false;
      this.$runCount = 0;
      this.$delay = 1;
      this.$lastTime = 0;
      this.$runTime = 0;
    }
    /**定时执行一次 */
    once() {
      this.$type = 0;
      return this;
    }
    /**定时重复执行 */
    loop() {
      this.$type = 1;
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
    /**清理 */
    clear() {
      this.reset();
      Laya.timer.clear(this, this.update);
      Pool2.recover(_Timer.$sign, this);
    }
    /**清理全部 */
    clearAll() {
      this.reset();
      Laya.timer.clearAll(this);
      Pool2.recover(_Timer.$sign, this);
    }
    /**更新 */
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
  /**对象池标志 */
  Timer.$sign = "$myTimer";

  // E:/WheelChairMan/src/Scene/TipsView.ts
  var __decorate26 = __$decorate("a1b11e33-3318-4f7e-af1d-2bbf5fa13333", "../src/Scene/TipsView.ts");
  var _a13;
  var Text5 = Laya.Text;
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
    __metadata("design:type", typeof (_a13 = typeof Text5 !== "undefined" && Text5) === "function" ? _a13 : Object)
  ], TipsView.prototype, "txtMsg", void 0);
  TipsView = __decorate26([
    regClass24(),
    __metadata("design:paramtypes", [])
  ], TipsView);

  // E:/WheelChairMan/src/Script3d/Script3d.ts
  var Script3d = class extends Laya.Script3D {
    constructor() {
      super();
    }
  };
  __name(Script3d, "Script3d");

  // E:/WheelChairMan/src/Scene3d/MainScene.ts
  var __decorate27 = __$decorate("71c8c727-1736-44b1-984f-02439872df63", "../src/Scene3d/MainScene.ts");
  var { regClass: regClass25, property: property25 } = Laya;
  var MainScene = /* @__PURE__ */ __name(class MainScene2 extends Script3d {
    constructor() {
      super();
    }
    onAwake() {
      this.$scene3d = this.owner;
      let skyRenderer = this.$scene3d.skyRenderer;
      let mat = skyRenderer.material;
      Timer.get(1, this, () => {
        mat._shaderValues.setNumber(Laya.SkyBoxMaterial.ROTATION, mat._shaderValues.getNumber(Laya.SkyBoxMaterial.ROTATION) + 0.01);
      }).frameLoop().start();
    }
  }, "MainScene");
  MainScene = __decorate27([
    regClass25(),
    __metadata("design:paramtypes", [])
  ], MainScene);

  // E:/WheelChairMan/src/Util/Base64.ts
  var __decorate28 = __$decorate("fe62c9ad-c7c3-4baa-8f7c-216a9f051006", "../src/Util/Base64.ts");
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
  Base64._keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";

  // E:/WheelChairMan/src/Scene/GuideView.ts
  var __decorate29 = __$decorate("a7a26e14-76d9-4f1c-9471-21fbc179af77", "../src/Scene/GuideView.ts");
  var _a14;
  var Image13 = Laya.Image;
  var { regClass: regClass26, property: property26 } = Laya;
  var GuideView = /* @__PURE__ */ __name(class GuideView2 extends UIBase_default {
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
  }, "GuideView");
  __decorate29([
    property26(),
    __metadata("design:type", typeof (_a14 = typeof Image13 !== "undefined" && Image13) === "function" ? _a14 : Object)
  ], GuideView.prototype, "imgSkip", void 0);
  GuideView = __decorate29([
    regClass26(),
    __metadata("design:paramtypes", [])
  ], GuideView);
})();
//# sourceMappingURL=bundle.js.map
