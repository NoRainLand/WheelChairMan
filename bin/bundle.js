
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
    constructor() {
      this.$total_num = 0;
      this.$now_num = 0;
      this.isLoad = false;
      this.$dicAssetsPath = /* @__PURE__ */ new Map();
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
      var _a20, _b15;
      if (id) {
        let url = this.getUrlById(id);
        if (url) {
          let obj = Laya.loader.getRes(url);
          if (obj === null || obj === void 0 ? void 0 : obj.create) {
            return (_a20 = obj === null || obj === void 0 ? void 0 : obj.create) === null || _a20 === void 0 ? void 0 : _a20.call(obj);
          } else if (obj === null || obj === void 0 ? void 0 : obj.clone) {
            return (_b15 = obj === null || obj === void 0 ? void 0 : obj.clone) === null || _b15 === void 0 ? void 0 : _b15.call(obj);
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
    stringParser(shotString, $isUrl = false) {
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
    getDataTableById(assetsId) {
      let data = this.getResById(assetsId);
      if (data && data.data) {
        let obj = this.stringParser(data.data);
        return obj;
      }
      return null;
    }
    /**通过唯一Id获取资源 */
    getResById(assetsId) {
      let obj = this.$dicAssetsPath.get(assetsId);
      if (obj && obj["path"]) {
        return this.getRes(obj["path"]);
      }
    }
    /**通过唯一id获取url */
    getUrlById(assetsId) {
      let obj = this.$dicAssetsPath.get(assetsId);
      if (obj && obj["path"]) {
        return obj["path"];
      }
    }
  };
  __name(ResLoader, "ResLoader");

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
      UIBaseMgr.instance.close(this.$assetsId, this.id);
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
    init(UIBase3) {
      this.$UIBase = UIBase3;
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
    initScene(scene, sceneName, param, caller, callback) {
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
            let events = script.$event;
            for (let name in events) {
              EventMgr.off(name, script, events.get(name));
            }
            script.$event = null;
            script.$param = null;
            Pool.recover(this.$sign + sceneName, script.owner);
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
      UIBaseMgr.instance.init(this.UIBase);
      UIBaseMgr.instance.openLoadView();
    }
  }, "GameEntry");
  GameEntry = __decorate3([
    regClass2(),
    __metadata("design:paramtypes", [])
  ], GameEntry);

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

  // E:/WheelChairMan/src/Scene3dBase/Scene3d.ts
  var __decorate4 = __$decorate("5d2200e4-1fa0-4d47-ab3d-f4961980a2ae", "../src/Scene3dBase/Scene3d.ts");
  var { regClass: regClass3, property: property3 } = Laya;
  var Scene3d = /* @__PURE__ */ __name(class Scene3d2 extends Laya.Script {
    constructor() {
      super();
      this.$param = null;
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
  }, "Scene3d");
  Scene3d = __decorate4([
    regClass3(),
    __metadata("design:paramtypes", [])
  ], Scene3d);
  var Scene3d_default = Scene3d;

  // E:/WheelChairMan/src/Scene3dBase/Scene3dMgr.ts
  var Scene3D = Laya.Scene3D;
  var Scene3dMgr = class {
    static get instance() {
      return this._instance ? this._instance : this._instance = new Scene3dMgr();
    }
    init() {
      this.$scene3dMap = ResLoader.instance.getDataTableById(3007 /* Scene3d */);
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
      var _a20;
      let sceneScript;
      sceneScript = this.$scene3dPool.get(sceneId);
      if (sceneScript) {
        this.initScene(sceneScript, param);
      } else {
        let id = (_a20 = this.$scene3dMap.get(sceneId)) == null ? void 0 : _a20["path"];
        if (id) {
          let scene = ResLoader.instance.getResCloneById(id);
          scene && this.$scene3d.addChild(scene);
          sceneScript = scene.getComponent(Scene3d_default);
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
      var _a20;
      this.$scene3d.addChild(sceneScript.owner);
      sceneScript.owner.name = (_a20 = this.$scene3dMap.get(sceneScript.sceneId)) == null ? void 0 : _a20["key"];
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

  // E:/WheelChairMan/src/Enum/LanguageEnum.ts
  var LanguageEnum = /* @__PURE__ */ ((LanguageEnum2) => {
    LanguageEnum2[LanguageEnum2["ChineseSimplified"] = 1001] = "ChineseSimplified";
    LanguageEnum2[LanguageEnum2["English"] = 1002] = "English";
    return LanguageEnum2;
  })(LanguageEnum || {});

  // E:/WheelChairMan/src/Localization/LocalizationMgr.ts
  var LocalizationMgr = class {
    /**初始化 */
    static init() {
      this.$localizationResMap = ResLoader.instance.getDataTableById(3002 /* LocalizationRes */);
      this.$localizationMap = ResLoader.instance.getDataTableById(501 /* Localization */);
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
    /**通过key获取对应语言,一般来说是内部调用 */
    static $getLocalizationByKey(key, ...keys) {
      var _a20, _b15;
      let language = LanguageEnum[this.Language];
      let value = (_a20 = this.$localizationKeyMap.get(key)) == null ? void 0 : _a20[language];
      if (value) {
        if (keys && keys.length) {
          for (let i = 0; i < keys.length; i++) {
            let item = (_b15 = this.$localizationKeyMap.get(keys[i])) == null ? void 0 : _b15[language];
            item = item ? item : keys[i];
            value = value.replace("$", item);
          }
        }
      }
      return value;
    }
    /**通过枚举获取对应语言 */
    static getLocalizationByEnum(lenum, ...lenums) {
      var _a20, _b15;
      let language = LanguageEnum[this.Language];
      let value = (_a20 = this.$localizationMap.get(lenum)) == null ? void 0 : _a20[language];
      if (value) {
        if (lenums && lenums.length) {
          for (let i = 0; i < lenums.length; i++) {
            let item = (_b15 = this.$localizationMap.get(lenums[i])) == null ? void 0 : _b15[language];
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

  // E:/WheelChairMan/src/Util/Sprite3d.ts
  var Vector3 = Laya.Vector3;
  var _Sprite3d = class {
    static get instance() {
      return this._instance ? this._instance : this._instance = new _Sprite3d();
    }
    constructor() {
    }
    /**零向量 */
    static get ZERO() {
      if (!this._ZERO) {
        this._ZERO = new Vector3(0, 0, 0);
        Object.freeze(this._ZERO);
      }
      return this._ZERO;
    }
    /**一向量 */
    static get ONE() {
      if (!this._ONE) {
        this._ONE = new Vector3(1, 1, 1);
        Object.freeze(this._ONE);
      }
      return this._ONE;
    }
    /**X向量 */
    static get UnitX() {
      if (!this._UnitX) {
        this._UnitX = new Vector3(1, 0, 0);
        Object.freeze(this._UnitX);
      }
      return this._UnitX;
    }
    /**Y向量 */
    static get UnitY() {
      if (!this._UnitY) {
        this._UnitY = new Vector3(0, 1, 0);
        Object.freeze(this._UnitY);
      }
      return this._UnitY;
    }
    /**上向量 */
    static get DOWN() {
      if (!this._DOWN) {
        this._DOWN = new Vector3(0, -1, 0);
        Object.freeze(this._DOWN);
      }
      return this._DOWN;
    }
    /**Z向量 */
    static get UnitZ() {
      if (!this._UnitZ) {
        this._UnitZ = new Vector3(0, 0, 1);
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
      let pos2local = new Vector3(0, 0, 0);
      let m = new Laya.Matrix4x4();
      sp3d.transform.worldMatrix.invert(m);
      Vector3.transformCoordinate(pos2world, m, pos2local);
      return pos2local;
    }
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

  // E:/WheelChairMan/src/Script3d/Script3d.ts
  var Vector32 = Laya.Vector3;
  var Script3d = class extends Laya.Script {
    constructor() {
      super();
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

  // E:/WheelChairMan/src/Util/PlayerController.ts
  var __decorate5 = __$decorate("f3ea911e-7d9e-4e77-b857-d99a7338285a", "../src/Util/PlayerController.ts");
  var Vector33 = Laya.Vector3;
  var CharacterController = Laya.CharacterController;
  var { regClass: regClass4, property: property4 } = Laya;
  var PlayerController = /* @__PURE__ */ __name(class PlayerController2 extends Script3d {
    constructor() {
      super();
      this.friction = 0.5;
      this.stepHeight = 0.1;
      this.jumpAllTimes = 1;
      this.moveSpeed = 10;
      this.jumpTimes = 0;
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
    }
    update(time) {
    }
    /**移动 */
    move(v3) {
      Vector33.normalize(v3, v3);
      Vector33.scale(v3, this.moveSpeed, v3);
      this.characterController.move(v3);
    }
    /**停止移动 */
    stopMove() {
      this.characterController.move(Sprite3d.ZERO);
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
  }, "PlayerController");
  __decorate5([
    property4(),
    __metadata("design:type", Number)
  ], PlayerController.prototype, "friction", void 0);
  __decorate5([
    property4(),
    __metadata("design:type", Number)
  ], PlayerController.prototype, "stepHeight", void 0);
  __decorate5([
    property4(),
    __metadata("design:type", Number)
  ], PlayerController.prototype, "jumpAllTimes", void 0);
  __decorate5([
    property4(),
    __metadata("design:type", Number)
  ], PlayerController.prototype, "moveSpeed", void 0);
  PlayerController = __decorate5([
    regClass4(),
    __metadata("design:paramtypes", [])
  ], PlayerController);
  var PlayerController_default = PlayerController;

  // E:/WheelChairMan/src/Game/BaseItem/BaseItem.ts
  var Vector34 = Laya.Vector3;
  var Quaternion = Laya.Quaternion;
  var Pool3 = Laya.Pool;
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
      let pos = new Vector34(this.posData.x, this.posData.y, this.posData.z);
      let rot = new Quaternion(this.posData.rotX, this.posData.rotY, this.posData.rotZ, this.posData.rotW);
      let scale = new Vector34(this.posData.scaleX * lscale, this.posData.scaleY * lscale, this.posData.scaleZ * lscale);
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
      this.index = -1;
      this.objData = null;
      this.posData = null;
      if (this.obj) {
        this.obj.removeSelf();
        if (isDestroy) {
          this.obj.destroy(true);
        } else {
          if (this.objName != "") {
            Pool3.recover(this.objName, this.obj);
            this.objName = "";
          } else {
            Pool3.recover(this.obj.name, this.obj);
          }
        }
        this.destroy();
      } else {
        this.destroy();
      }
    }
    /**额外清理
     */
    clearOthers() {
    }
  };
  __name(BaseItem, "BaseItem");

  // E:/WheelChairMan/src/Game/Player/PlayerItem.ts
  var __decorate6 = __$decorate("778295ff-e54e-4576-82ea-f69285cd3b58", "../src/Game/Player/PlayerItem.ts");
  var { regClass: regClass5, property: property5 } = Laya;
  var PlayerItem = /* @__PURE__ */ __name(class PlayerItem2 extends BaseItem {
    constructor() {
      super(...arguments);
      this.$health = 0;
    }
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
    /**血量改变 */
    healthChange(oldHealth) {
    }
    get playerController() {
      if (!this.$playerController) {
        this.$playerController = this.obj.getComponent(PlayerController_default);
      }
      return this.$playerController;
    }
    reset() {
    }
  }, "PlayerItem");
  PlayerItem = __decorate6([
    regClass5()
  ], PlayerItem);
  var PlayerItem_default = PlayerItem;

  // E:/WheelChairMan/src/Game/Player/PlayerMgr.ts
  var PlayerMgr = class {
    constructor() {
      this.$sign = "playerId_";
    }
    static get instance() {
      return this._instance ? this._instance : this._instance = new PlayerMgr();
    }
    init() {
      this.$playerMap = ResLoader.instance.getDataTableById(3008 /* Player */);
    }
    // /**获取当前选择的玩家id */
    // get selectedPlayerId(): number {
    //     if (!this.$selectedPlayerId) {
    //         let id = Number(LocalStorageMgr.getItem(LocalStorageEnum.PLAYERID)?.replace(this.$sign, ""));
    //         if (isNaN(id)) {
    //             this.$selectedPlayerId = 1001;
    //             LocalStorageMgr.setItem(LocalStorageEnum.PLAYERID, this.$sign + this.$selectedPlayerId);
    //         } else {
    //             {
    //                 this.$selectedPlayerId = id
    //             }
    //         }
    //     }
    //     return this.$selectedPlayerId
    // }
    // set selectedPlayerId(value: number) {
    //     if (value) {
    //         this.$selectedPlayerId = value;
    //         LocalStorageMgr.setItem(LocalStorageEnum.PLAYERID, this.$sign + this.$selectedPlayerId);
    //     }
    // }
    /**获取已经解锁的人物 */
    getUnlockList() {
      let str = LocalStorageMgr.getItem("UNLOCKPLAYERLIST" /* UNLOCKPLAYERLIST */);
      if (str) {
        this.$unlockList = JSON.parse(str);
      } else {
        this.$unlockList = [1001];
        LocalStorageMgr.setItem("UNLOCKPLAYERLIST" /* UNLOCKPLAYERLIST */, JSON.stringify(this.$unlockList));
      }
      return this.$unlockList;
    }
    /**解锁人物 */
    unlockPlayer(playerId) {
      if (playerId && this.$unlockList.indexOf(playerId) == -1) {
        let data = this.getSelectedPlayerData(playerId);
        switch (data["currency"]) {
          case 1001 /* gold */:
            if (GameData.gold >= data["unlockPrice"]) {
              GameData.gold -= data["unlockPrice"];
              this.$unlockList.push(playerId);
              LocalStorageMgr.setItem("UNLOCKPLAYERLIST" /* UNLOCKPLAYERLIST */, JSON.stringify(this.$unlockList));
              UIBaseMgr.instance.showTips(LocalizationMgr.getLocalizationByEnum(1031 /* CONGRATULATIONSUNLOCK */));
              EventMgr.event("UNLOCKPLAYER" /* UNLOCKPLAYER */, playerId);
            } else {
              UIBaseMgr.instance.showTips(LocalizationMgr.getLocalizationByEnum(1026 /* YOUDONTHAVEENOUGHDIAMONDS */, 1022 /* GOLD */));
            }
            break;
          case 1002 /* diamond */:
            if (GameData.diamond >= data["unlockPrice"]) {
              GameData.diamond -= data["unlockPrice"];
              this.$unlockList.push(playerId);
              LocalStorageMgr.setItem("UNLOCKPLAYERLIST" /* UNLOCKPLAYERLIST */, JSON.stringify(this.$unlockList));
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
      return this.$playerMap.get(playerId);
    }
    setSelectedPlayerId(playerId) {
      this.$selectedPlayerId = playerId;
    }
    /**获取当前人物 */
    getSelectPlayer(playerId) {
      let obj;
      if (this.playerPool) {
        obj = this.playerPool.get(playerId);
      } else {
        this.playerPool = /* @__PURE__ */ new Map();
      }
      if (!obj) {
        let playerData = this.getSelectedPlayerData(playerId);
        obj = ResLoader.instance.getResCloneById(playerData == null ? void 0 : playerData["path"]);
        this.playerPool.set(playerId, obj);
      }
      return obj;
    }
    gameStart(stage) {
      this.$playerStage = stage;
      let obj = this.getSelectPlayer(this.$selectedPlayerId);
      if (obj && this.$playerStage) {
        this.$playerStage.addChild(obj);
        this.$playerItem = obj.getComponent(PlayerItem_default);
        this.$playerItem.position = Sprite3d.ZERO;
      }
    }
  };
  __name(PlayerMgr, "PlayerMgr");

  // E:/WheelChairMan/src/Game/MainGame.ts
  var __decorate7 = __$decorate("17be9e1a-ac52-43f3-8894-fa783a42a738", "../src/Game/MainGame.ts");
  var MainGame_1;
  var { regClass: regClass6, property: property6 } = Laya;
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
        this.addEvent();
        this.reset();
        PlayerMgr.instance.init();
      }
    }
    /**获取当前游戏的流程 */
    getGameSetp() {
      return this.$gameSetp;
    }
    addEvent() {
      EventMgr.on("GAMESCENELOADED" /* GAMESCENELOADED */, this, this.gameStart);
    }
    reset() {
      this.$gameSetp = 1001 /* ResetGame */;
      this.goToMain();
      this.$gameScene = null;
    }
    /**开始选择玩家 */
    selectPlayerAndWeapon() {
      this.$gameSetp = 1002 /* SelectPlayer */;
      Scene3dMgr.instance.open(1002 /* SelectPlayerScene */);
      Scene3dMgr.instance.close(1001 /* MainScene */);
    }
    /**返回主页 */
    goToMain() {
      Scene3dMgr.instance.close(1002 /* SelectPlayerScene */);
      Scene3dMgr.instance.open(1001 /* MainScene */);
    }
    loadGameScene() {
      this.$gameSetp = 1004 /* LoadGameScene */;
      Scene3dMgr.instance.close(1002 /* SelectPlayerScene */);
      Scene3dMgr.instance.open(1003 /* GameScene */);
    }
    /**游戏开始 */
    gameStart(gameScene) {
      this.$gameSetp = 1005 /* GameStart */;
      this.$gameScene = gameScene;
      PlayerMgr.instance.gameStart(this.$gameScene.playerStage);
    }
    /**游戏暂停 */
    gamePause() {
      this.$gameSetp = 1006 /* GamePause */;
    }
    /**游戏继续*/
    gameResume() {
      this.$gameSetp = 1005 /* GameStart */;
    }
    gameWin() {
      this.$gameSetp = 1009 /* GameWin */;
      this.gameOver();
    }
    gameLose() {
      this.$gameSetp = 1008 /* GameLose */;
      this.gameOver();
    }
    gameOver() {
    }
  }, "MainGame");
  MainGame = MainGame_1 = __decorate7([
    regClass6()
  ], MainGame);
  var MainGame_default = MainGame;

  // E:/WheelChairMan/src/Localization/LocalizationText.ts
  var __decorate8 = __$decorate("5a62e727-31ad-49bf-b53f-96fbff2b0a39", "../src/Localization/LocalizationText.ts");
  var Text = Laya.Text;
  var Label = Laya.Label;
  var { regClass: regClass7, property: property7 } = Laya;
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
  __decorate8([
    property7(),
    __metadata("design:type", String)
  ], LocalizationText.prototype, "localizationKey", void 0);
  LocalizationText = __decorate8([
    regClass7(),
    __metadata("design:paramtypes", [])
  ], LocalizationText);

  // E:/WheelChairMan/src/Scene/CompleteView.ts
  var __decorate9 = __$decorate("f5f376ef-5874-4c8a-9a28-8088976bd468", "../src/Scene/CompleteView.ts");
  var { regClass: regClass8, property: property8 } = Laya;
  var CompleteView = /* @__PURE__ */ __name(class CompleteView2 extends UIBase_default {
  }, "CompleteView");
  CompleteView = __decorate9([
    regClass8()
  ], CompleteView);

  // E:/WheelChairMan/src/Scene/DebugView.ts
  var __decorate10 = __$decorate("5ca51831-1d23-46b6-a853-a10d5da54d6c", "../src/Scene/DebugView.ts");
  var _a;
  var _b;
  var _c;
  var Box = Laya.Box;
  var Image = Laya.Image;
  var List = Laya.List;
  var Handler3 = Laya.Handler;
  var { regClass: regClass9, property: property9 } = Laya;
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
      let Label8 = box.getChildByName("Label");
      Label8.text = box.dataSource;
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
  __decorate10([
    property9(),
    __metadata("design:type", typeof (_a = typeof Image !== "undefined" && Image) === "function" ? _a : Object)
  ], DebugView.prototype, "imgShow", void 0);
  __decorate10([
    property9(),
    __metadata("design:type", typeof (_b = typeof Box !== "undefined" && Box) === "function" ? _b : Object)
  ], DebugView.prototype, "MainPanel", void 0);
  __decorate10([
    property9(),
    __metadata("design:type", typeof (_c = typeof List !== "undefined" && List) === "function" ? _c : Object)
  ], DebugView.prototype, "listCommand", void 0);
  DebugView = __decorate10([
    regClass9(),
    __metadata("design:paramtypes", [])
  ], DebugView);

  // E:/WheelChairMan/src/Util/RockerBox.ts
  var __decorate11 = __$decorate("7204f275-aa8d-45b5-b2eb-b4122c72d7a3", "../src/Util/RockerBox.ts");
  var _a2;
  var Button = Laya.Button;
  var Point = Laya.Point;
  var { regClass: regClass10, property: property10 } = Laya;
  var RockerBox = /* @__PURE__ */ __name(class RockerBox2 extends Laya.Script {
    constructor() {
      super();
      this.dropLen = 110;
      this.touchId = -1;
      this.rockerAngle = 0;
      this.rockerValue = 0;
    }
    onEnable() {
      this.rockerBox = this.owner;
    }
    onStart() {
      this.initBarX = this.freeBar.x;
      this.initBarY = this.freeBar.y;
      this.mousePoint = new Point(0, 0);
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
      }
    }
    /**开始移动 */
    startMove() {
    }
    /**停止移动 */
    stopMove() {
    }
    onDisable() {
      this.freeBar.off(Laya.Event.MOUSE_DOWN, this, this.rockerDown);
      Laya.stage.off(Laya.Event.MOUSE_MOVE, this, this.rockerMove);
      Laya.stage.off(Laya.Event.MOUSE_UP, this, this.rockerUp);
    }
  }, "RockerBox");
  __decorate11([
    property10(),
    __metadata("design:type", typeof (_a2 = typeof Button !== "undefined" && Button) === "function" ? _a2 : Object)
  ], RockerBox.prototype, "freeBar", void 0);
  __decorate11([
    property10(),
    __metadata("design:type", Number)
  ], RockerBox.prototype, "dropLen", void 0);
  RockerBox = __decorate11([
    regClass10(),
    __metadata("design:paramtypes", [])
  ], RockerBox);
  var RockerBox_default = RockerBox;

  // E:/WheelChairMan/src/Scene/GameView.ts
  var __decorate12 = __$decorate("ddf0e22e-43aa-4145-b2f5-8a127efb5611", "../src/Scene/GameView.ts");
  var _a3;
  var _b2;
  var _c2;
  var List2 = Laya.List;
  var { regClass: regClass11, property: property11 } = Laya;
  var GameView = /* @__PURE__ */ __name(class GameView2 extends UIBase_default {
    constructor() {
      super();
    }
    onOpened(param) {
    }
    onClosed() {
    }
  }, "GameView");
  __decorate12([
    property11(),
    __metadata("design:type", typeof (_a3 = typeof List2 !== "undefined" && List2) === "function" ? _a3 : Object)
  ], GameView.prototype, "listHealth", void 0);
  __decorate12([
    property11(),
    __metadata("design:type", typeof (_b2 = typeof RockerBox_default !== "undefined" && RockerBox_default) === "function" ? _b2 : Object)
  ], GameView.prototype, "rocketBoxL", void 0);
  __decorate12([
    property11(),
    __metadata("design:type", typeof (_c2 = typeof RockerBox_default !== "undefined" && RockerBox_default) === "function" ? _c2 : Object)
  ], GameView.prototype, "rocketBoxR", void 0);
  GameView = __decorate12([
    regClass11(),
    __metadata("design:paramtypes", [])
  ], GameView);

  // E:/WheelChairMan/src/Scene/GuideView.ts
  var __decorate13 = __$decorate("a7a26e14-76d9-4f1c-9471-21fbc179af77", "../src/Scene/GuideView.ts");
  var _a4;
  var Image2 = Laya.Image;
  var { regClass: regClass12, property: property12 } = Laya;
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
  __decorate13([
    property12(),
    __metadata("design:type", typeof (_a4 = typeof Image2 !== "undefined" && Image2) === "function" ? _a4 : Object)
  ], GuideView.prototype, "imgSkip", void 0);
  GuideView = __decorate13([
    regClass12(),
    __metadata("design:paramtypes", [])
  ], GuideView);

  // E:/WheelChairMan/src/Scene/LanguageView.ts
  var __decorate14 = __$decorate("6bc1bf6a-a993-4ac9-b9f4-4785e0d68c2b", "../src/Scene/LanguageView.ts");
  var _a5;
  var _b3;
  var Image3 = Laya.Image;
  var List3 = Laya.List;
  var Handler4 = Laya.Handler;
  var { regClass: regClass13, property: property13 } = Laya;
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
  }, "LanguageView");
  __decorate14([
    property13(),
    __metadata("design:type", typeof (_a5 = typeof List3 !== "undefined" && List3) === "function" ? _a5 : Object)
  ], LanguageView.prototype, "$listLanguage", void 0);
  __decorate14([
    property13(),
    __metadata("design:type", typeof (_b3 = typeof Image3 !== "undefined" && Image3) === "function" ? _b3 : Object)
  ], LanguageView.prototype, "$imgClose", void 0);
  LanguageView = __decorate14([
    regClass13(),
    __metadata("design:paramtypes", [])
  ], LanguageView);

  // E:/WheelChairMan/src/Scene/LevelUpView.ts
  var __decorate15 = __$decorate("f7577321-9089-4d76-ba3b-af9c8a8c0afe", "../src/Scene/LevelUpView.ts");
  var { regClass: regClass14, property: property14 } = Laya;
  var LevelUpView = /* @__PURE__ */ __name(class LevelUpView2 extends UIBase_default {
  }, "LevelUpView");
  LevelUpView = __decorate15([
    regClass14()
  ], LevelUpView);

  // E:/WheelChairMan/src/Mgr/CurrencyMgr.ts
  var CurrencyMgr = class {
    /**初始化 */
    static init() {
      this.$currencyMap = ResLoader.instance.getDataTableById(3003 /* Currency */);
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
        return ResLoader.instance.getUrlById(data["imgId"]);
      }
      return "";
    }
  };
  __name(CurrencyMgr, "CurrencyMgr");

  // E:/WheelChairMan/src/Mgr/LevelMgr.ts
  var LevelMgr = class {
    /**初始化 */
    static init() {
      this.$levelDataTable = ResLoader.instance.getDataTableById(3004 /* Level */);
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
  var __decorate16 = __$decorate("9f8ef9b7-13a5-4980-a9d8-46f8659dff82", "../src/Util/StringUtil.ts");
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
  var __decorate17 = __$decorate("9797e892-adab-4c82-8f5e-800b37f590f9", "../src/Scene/LoadView.ts");
  var _a6;
  var _b4;
  var _c3;
  var Image4 = Laya.Image;
  var Label2 = Laya.Label;
  var Handler5 = Laya.Handler;
  var { regClass: regClass15, property: property15 } = Laya;
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
      ResLoader.instance.preloadRes(Handler5.create(this, this.onCompleted), Handler5.create(this, this._onProgress));
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
      MainGame_default.instance.init();
    }
    /**打开页面 */
    openScene() {
      UIBaseMgr.instance.open(1013 /* MainView */);
      this.close();
    }
  }, "LoadView");
  __decorate17([
    property15(),
    __metadata("design:type", typeof (_a6 = typeof Image4 !== "undefined" && Image4) === "function" ? _a6 : Object)
  ], LoadView.prototype, "imgLoad", void 0);
  __decorate17([
    property15(),
    __metadata("design:type", typeof (_b4 = typeof Label2 !== "undefined" && Label2) === "function" ? _b4 : Object)
  ], LoadView.prototype, "labelLoad", void 0);
  __decorate17([
    property15(),
    __metadata("design:type", typeof (_c3 = typeof Label2 !== "undefined" && Label2) === "function" ? _c3 : Object)
  ], LoadView.prototype, "testLabel", void 0);
  LoadView = __decorate17([
    regClass15(),
    __metadata("design:paramtypes", [])
  ], LoadView);

  // E:/WheelChairMan/src/Scene/LoseView.ts
  var __decorate18 = __$decorate("9b8220cb-adbc-4d84-9618-c7c9f2bd85f3", "../src/Scene/LoseView.ts");
  var { regClass: regClass16, property: property16 } = Laya;
  var LoseView = /* @__PURE__ */ __name(class LoseView2 extends UIBase_default {
  }, "LoseView");
  LoseView = __decorate18([
    regClass16()
  ], LoseView);

  // E:/WheelChairMan/src/Scene/LuckyBoxView.ts
  var __decorate19 = __$decorate("d94dafff-05f0-4479-9a1a-ab9861a24025", "../src/Scene/LuckyBoxView.ts");
  var _a7;
  var _b5;
  var _c4;
  var _d;
  var _e;
  var Text2 = Laya.Text;
  var Image5 = Laya.Image;
  var { regClass: regClass17, property: property17 } = Laya;
  var LuckyBoxView = /* @__PURE__ */ __name(class LuckyBoxView2 extends UIBase_default {
    constructor() {
      super();
      this.$luckyboxDataTable = /* @__PURE__ */ new Map();
    }
    onOpened(param) {
      this.regClick(this.imgClose, this.close);
      this.regClick(this.imgOpen, this.openLuckBox);
      this.$luckyboxDataTable = ResLoader.instance.getDataTableById(3001 /* LuckyBox */);
      this.initLuckBox();
    }
    initLuckBox() {
      if (this.$param == void 0) {
        this.$param = 0;
      }
      this.txtMsg.text = LocalizationMgr.$getLocalizationByKey(this.$luckyboxDataTable.get(this.$param)["localizationKey"]);
      this.imgBox.skin = ResLoader.instance.getUrlById(this.$luckyboxDataTable.get(this.$param)["imgPath"]);
    }
    openLuckBox() {
      switch (this.$param) {
        case 0:
          break;
      }
    }
  }, "LuckyBoxView");
  __decorate19([
    property17(),
    __metadata("design:type", typeof (_a7 = typeof Image5 !== "undefined" && Image5) === "function" ? _a7 : Object)
  ], LuckyBoxView.prototype, "imgLight", void 0);
  __decorate19([
    property17(),
    __metadata("design:type", typeof (_b5 = typeof Image5 !== "undefined" && Image5) === "function" ? _b5 : Object)
  ], LuckyBoxView.prototype, "imgBox", void 0);
  __decorate19([
    property17(),
    __metadata("design:type", typeof (_c4 = typeof Image5 !== "undefined" && Image5) === "function" ? _c4 : Object)
  ], LuckyBoxView.prototype, "imgClose", void 0);
  __decorate19([
    property17(),
    __metadata("design:type", typeof (_d = typeof Image5 !== "undefined" && Image5) === "function" ? _d : Object)
  ], LuckyBoxView.prototype, "imgOpen", void 0);
  __decorate19([
    property17(),
    __metadata("design:type", typeof (_e = typeof Text2 !== "undefined" && Text2) === "function" ? _e : Object)
  ], LuckyBoxView.prototype, "txtMsg", void 0);
  LuckyBoxView = __decorate19([
    regClass17(),
    __metadata("design:paramtypes", [])
  ], LuckyBoxView);

  // E:/WheelChairMan/src/Scene/MainView.ts
  var __decorate20 = __$decorate("127f9431-d96d-491c-b782-2549a9c38d7b", "../src/Scene/MainView.ts");
  var _a8;
  var _b6;
  var _c5;
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
  var Image6 = Laya.Image;
  var { regClass: regClass18, property: property18 } = Laya;
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
      let value = LocalStorageMgr.getItem("FIRESTTIME" /* FIRSTTIME */);
      console.log(value);
      this.selectPlayer();
    }
    showGuide() {
    }
    selectPlayer() {
      MainGame_default.instance.selectPlayerAndWeapon();
      UIBaseMgr.instance.open(1021 /* SelectPlayerView */);
      this.close();
    }
    selectWeapon() {
    }
    onClosed() {
    }
  }, "MainView");
  __decorate20([
    property18(),
    __metadata("design:type", typeof (_a8 = typeof Text3 !== "undefined" && Text3) === "function" ? _a8 : Object)
  ], MainView.prototype, "txtGold", void 0);
  __decorate20([
    property18(),
    __metadata("design:type", typeof (_b6 = typeof Image6 !== "undefined" && Image6) === "function" ? _b6 : Object)
  ], MainView.prototype, "imgPlusGold", void 0);
  __decorate20([
    property18(),
    __metadata("design:type", typeof (_c5 = typeof Text3 !== "undefined" && Text3) === "function" ? _c5 : Object)
  ], MainView.prototype, "txtDiamond", void 0);
  __decorate20([
    property18(),
    __metadata("design:type", typeof (_d2 = typeof Image6 !== "undefined" && Image6) === "function" ? _d2 : Object)
  ], MainView.prototype, "imgPlusDiamond", void 0);
  __decorate20([
    property18(),
    __metadata("design:type", typeof (_e2 = typeof Image6 !== "undefined" && Image6) === "function" ? _e2 : Object)
  ], MainView.prototype, "imgHead", void 0);
  __decorate20([
    property18(),
    __metadata("design:type", typeof (_f = typeof Image6 !== "undefined" && Image6) === "function" ? _f : Object)
  ], MainView.prototype, "imgRing", void 0);
  __decorate20([
    property18(),
    __metadata("design:type", typeof (_g = typeof Image6 !== "undefined" && Image6) === "function" ? _g : Object)
  ], MainView.prototype, "imgLevel", void 0);
  __decorate20([
    property18(),
    __metadata("design:type", typeof (_h = typeof Image6 !== "undefined" && Image6) === "function" ? _h : Object)
  ], MainView.prototype, "imgMs", void 0);
  __decorate20([
    property18(),
    __metadata("design:type", typeof (_j = typeof Text3 !== "undefined" && Text3) === "function" ? _j : Object)
  ], MainView.prototype, "txtLevel", void 0);
  __decorate20([
    property18(),
    __metadata("design:type", typeof (_k = typeof Label3 !== "undefined" && Label3) === "function" ? _k : Object)
  ], MainView.prototype, "labelName", void 0);
  __decorate20([
    property18(),
    __metadata("design:type", typeof (_l = typeof Image6 !== "undefined" && Image6) === "function" ? _l : Object)
  ], MainView.prototype, "imgShop", void 0);
  __decorate20([
    property18(),
    __metadata("design:type", typeof (_m = typeof Image6 !== "undefined" && Image6) === "function" ? _m : Object)
  ], MainView.prototype, "imgRanking", void 0);
  __decorate20([
    property18(),
    __metadata("design:type", typeof (_o = typeof Image6 !== "undefined" && Image6) === "function" ? _o : Object)
  ], MainView.prototype, "imgSettings", void 0);
  __decorate20([
    property18(),
    __metadata("design:type", typeof (_p = typeof Image6 !== "undefined" && Image6) === "function" ? _p : Object)
  ], MainView.prototype, "imgStart", void 0);
  __decorate20([
    property18(),
    __metadata("design:type", typeof (_q = typeof Box2 !== "undefined" && Box2) === "function" ? _q : Object)
  ], MainView.prototype, "Main", void 0);
  MainView = __decorate20([
    regClass18(),
    __metadata("design:paramtypes", [])
  ], MainView);

  // E:/WheelChairMan/src/Scene/MyInfoView.ts
  var __decorate21 = __$decorate("dd16d8bf-53b3-41cc-81c1-44f39afec08e", "../src/Scene/MyInfoView.ts");
  var { regClass: regClass19, property: property19 } = Laya;
  var MyInfoView = /* @__PURE__ */ __name(class MyInfoView2 extends UIBase_default {
  }, "MyInfoView");
  MyInfoView = __decorate21([
    regClass19()
  ], MyInfoView);

  // E:/WheelChairMan/src/Scene/PauseView.ts
  var __decorate22 = __$decorate("352c01f5-c61a-4387-bd3b-63f412ac12c7", "../src/Scene/PauseView.ts");
  var { regClass: regClass20, property: property20 } = Laya;
  var PauseView = /* @__PURE__ */ __name(class PauseView2 extends UIBase_default {
  }, "PauseView");
  PauseView = __decorate22([
    regClass20()
  ], PauseView);

  // E:/WheelChairMan/src/Scene/PrivacyAgreementView.ts
  var __decorate23 = __$decorate("df9b38f8-2d16-4280-849d-786074a729fe", "../src/Scene/PrivacyAgreementView.ts");
  var _a9;
  var _b7;
  var _c6;
  var _d3;
  var Label4 = Laya.Label;
  var Image7 = Laya.Image;
  var Panel = Laya.Panel;
  var { regClass: regClass21, property: property21 } = Laya;
  var PrivacyAgreementView = /* @__PURE__ */ __name(class PrivacyAgreementView2 extends UIBase_default {
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
  }, "PrivacyAgreementView");
  __decorate23([
    property21(),
    __metadata("design:type", typeof (_a9 = typeof Image7 !== "undefined" && Image7) === "function" ? _a9 : Object)
  ], PrivacyAgreementView.prototype, "imgSure", void 0);
  __decorate23([
    property21(),
    __metadata("design:type", typeof (_b7 = typeof Image7 !== "undefined" && Image7) === "function" ? _b7 : Object)
  ], PrivacyAgreementView.prototype, "imgCancel", void 0);
  __decorate23([
    property21(),
    __metadata("design:type", typeof (_c6 = typeof Panel !== "undefined" && Panel) === "function" ? _c6 : Object)
  ], PrivacyAgreementView.prototype, "panel", void 0);
  __decorate23([
    property21(),
    __metadata("design:type", typeof (_d3 = typeof Label4 !== "undefined" && Label4) === "function" ? _d3 : Object)
  ], PrivacyAgreementView.prototype, "txtAgreement", void 0);
  PrivacyAgreementView = __decorate23([
    regClass21(),
    __metadata("design:paramtypes", [])
  ], PrivacyAgreementView);

  // E:/WheelChairMan/src/Scene/RankingView.ts
  var __decorate24 = __$decorate("731a1c9f-76c7-4237-ad93-f469eb850bb9", "../src/Scene/RankingView.ts");
  var _a10;
  var _b8;
  var _c7;
  var _d4;
  var _e3;
  var _f2;
  var Text4 = Laya.Text;
  var Image8 = Laya.Image;
  var List4 = Laya.List;
  var Handler6 = Laya.Handler;
  var { regClass: regClass22, property: property22 } = Laya;
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
      this.$rankingMap = ResLoader.instance.getDataTableById(3006 /* Ranking */);
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
          imgRank.skin = ResLoader.instance.getUrlById(data1["imgId"]);
          break;
        case 2:
          let data2 = this.$rankingMap.get(1002 /* second */);
          txtRank.color = data2["color"];
          imgRank.skin = ResLoader.instance.getUrlById(data2["imgId"]);
          break;
        case 3:
          let data3 = this.$rankingMap.get(1003 /* third */);
          txtRank.color = data3["color"];
          imgRank.skin = ResLoader.instance.getUrlById(data3["imgId"]);
          break;
        default:
          let data4 = this.$rankingMap.get(1004 /* default */);
          txtRank.color = data4["color"];
          imgRank.skin = ResLoader.instance.getUrlById(data4["imgId"]);
          break;
      }
    }
  }, "RankingView");
  __decorate24([
    property22(),
    __metadata("design:type", typeof (_a10 = typeof Image8 !== "undefined" && Image8) === "function" ? _a10 : Object)
  ], RankingView.prototype, "imgClose", void 0);
  __decorate24([
    property22(),
    __metadata("design:type", typeof (_b8 = typeof Image8 !== "undefined" && Image8) === "function" ? _b8 : Object)
  ], RankingView.prototype, "imgHead", void 0);
  __decorate24([
    property22(),
    __metadata("design:type", typeof (_c7 = typeof Text4 !== "undefined" && Text4) === "function" ? _c7 : Object)
  ], RankingView.prototype, "txtName", void 0);
  __decorate24([
    property22(),
    __metadata("design:type", typeof (_d4 = typeof Text4 !== "undefined" && Text4) === "function" ? _d4 : Object)
  ], RankingView.prototype, "txtLV", void 0);
  __decorate24([
    property22(),
    __metadata("design:type", typeof (_e3 = typeof Text4 !== "undefined" && Text4) === "function" ? _e3 : Object)
  ], RankingView.prototype, "txtRank", void 0);
  __decorate24([
    property22(),
    __metadata("design:type", typeof (_f2 = typeof List4 !== "undefined" && List4) === "function" ? _f2 : Object)
  ], RankingView.prototype, "listRanking", void 0);
  RankingView = __decorate24([
    regClass22(),
    __metadata("design:paramtypes", [])
  ], RankingView);

  // E:/WheelChairMan/src/Enum/PlayerEnum.ts
  var PlayerEnum = /* @__PURE__ */ ((PlayerEnum2) => {
    PlayerEnum2[PlayerEnum2["BusinessMan"] = 1001] = "BusinessMan";
    PlayerEnum2[PlayerEnum2["BombDisEX"] = 1002] = "BombDisEX";
    PlayerEnum2[PlayerEnum2["GreatMagician"] = 1003] = "GreatMagician";
    PlayerEnum2[PlayerEnum2["Kingsman"] = 1004] = "Kingsman";
    PlayerEnum2[PlayerEnum2["ScoutRobot"] = 1005] = "ScoutRobot";
    PlayerEnum2[PlayerEnum2["RookiePirate"] = 1006] = "RookiePirate";
    return PlayerEnum2;
  })(PlayerEnum || {});

  // E:/WheelChairMan/src/Scene/SelectPlayerView.ts
  var __decorate25 = __$decorate("cdfd211f-d5a7-4c9b-9ffb-7956585db6fc", "../src/Scene/SelectPlayerView.ts");
  var _a11;
  var _b9;
  var _c8;
  var _d5;
  var _e4;
  var _f3;
  var _g2;
  var _h2;
  var _j2;
  var _k2;
  var Label5 = Laya.Label;
  var Image9 = Laya.Image;
  var { regClass: regClass23, property: property23 } = Laya;
  var SelectPlayerView = /* @__PURE__ */ __name(class SelectPlayerView2 extends UIBase_default {
    constructor() {
      super();
      this.$viewIndex = 0;
      this.$selectIndex = 0;
    }
    onOpened(param) {
      this.$viewIndex = 0;
      this.$selectIndex = 0;
      if (!this.$playerList) {
        this.$playerList = [];
        for (let item in PlayerEnum) {
          if (!isNaN(Number(item))) {
            this.$playerList.push(Number(item));
          }
        }
      }
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
      this.$playerData = PlayerMgr.instance.getSelectedPlayerData(this.$playerList[this.$selectIndex]);
      this.labelName.text = LocalizationMgr.getLocalizationByEnum(this.$playerData.localizationKey);
      this.labelDic.text = LocalizationMgr.getLocalizationByEnum(this.$playerData.descriptionKey);
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
      if (this.$selectIndex <= 0) {
        this.imgPrev.visible = false;
      } else if (this.$selectIndex >= this.$playerList.length - 1) {
        this.imgNext.visible = false;
      } else {
        this.imgPrev.visible = true;
        this.imgNext.visible = true;
      }
      this.changeData();
    }
    goBack() {
      this.close();
      UIBaseMgr.instance.open(1013 /* MainView */);
      MainGame_default.instance.goToMain();
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
      PlayerMgr.instance.setSelectedPlayerId(this.$playerList[this.$selectIndex]);
      MainGame_default.instance.loadGameScene();
      UIBaseMgr.instance.open(1008 /* GameView */);
      this.close();
    }
    unlockPlayer() {
      PlayerMgr.instance.unlockPlayer(this.$playerList[this.$selectIndex]);
    }
    onClosed() {
    }
  }, "SelectPlayerView");
  __decorate25([
    property23(),
    __metadata("design:type", typeof (_a11 = typeof Image9 !== "undefined" && Image9) === "function" ? _a11 : Object)
  ], SelectPlayerView.prototype, "imgBack", void 0);
  __decorate25([
    property23(),
    __metadata("design:type", typeof (_b9 = typeof Image9 !== "undefined" && Image9) === "function" ? _b9 : Object)
  ], SelectPlayerView.prototype, "imgNext", void 0);
  __decorate25([
    property23(),
    __metadata("design:type", typeof (_c8 = typeof Image9 !== "undefined" && Image9) === "function" ? _c8 : Object)
  ], SelectPlayerView.prototype, "imgPrev", void 0);
  __decorate25([
    property23(),
    __metadata("design:type", typeof (_d5 = typeof Image9 !== "undefined" && Image9) === "function" ? _d5 : Object)
  ], SelectPlayerView.prototype, "imgLock", void 0);
  __decorate25([
    property23(),
    __metadata("design:type", typeof (_e4 = typeof Image9 !== "undefined" && Image9) === "function" ? _e4 : Object)
  ], SelectPlayerView.prototype, "imgSelect", void 0);
  __decorate25([
    property23(),
    __metadata("design:type", typeof (_f3 = typeof Label5 !== "undefined" && Label5) === "function" ? _f3 : Object)
  ], SelectPlayerView.prototype, "labelName", void 0);
  __decorate25([
    property23(),
    __metadata("design:type", typeof (_g2 = typeof Label5 !== "undefined" && Label5) === "function" ? _g2 : Object)
  ], SelectPlayerView.prototype, "labelDic", void 0);
  __decorate25([
    property23(),
    __metadata("design:type", typeof (_h2 = typeof Image9 !== "undefined" && Image9) === "function" ? _h2 : Object)
  ], SelectPlayerView.prototype, "imgUnlock", void 0);
  __decorate25([
    property23(),
    __metadata("design:type", typeof (_j2 = typeof Label5 !== "undefined" && Label5) === "function" ? _j2 : Object)
  ], SelectPlayerView.prototype, "labelUnlock", void 0);
  __decorate25([
    property23(),
    __metadata("design:type", typeof (_k2 = typeof Image9 !== "undefined" && Image9) === "function" ? _k2 : Object)
  ], SelectPlayerView.prototype, "imgCurrency", void 0);
  SelectPlayerView = __decorate25([
    regClass23(),
    __metadata("design:paramtypes", [])
  ], SelectPlayerView);

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
  var __decorate26 = __$decorate("35b37bb8-b4f2-4360-8030-42b6c06ee038", "../src/Util/Slider.ts");
  var _a12;
  var _b10;
  var _c9;
  var Image10 = Laya.Image;
  var { regClass: regClass24, property: property24 } = Laya;
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
  __decorate26([
    property24(),
    __metadata("design:type", Boolean)
  ], Slider.prototype, "isH", void 0);
  __decorate26([
    property24(),
    __metadata("design:type", typeof (_a12 = typeof Image10 !== "undefined" && Image10) === "function" ? _a12 : Object)
  ], Slider.prototype, "imgLoad", void 0);
  __decorate26([
    property24(),
    __metadata("design:type", typeof (_b10 = typeof Image10 !== "undefined" && Image10) === "function" ? _b10 : Object)
  ], Slider.prototype, "imgBar", void 0);
  __decorate26([
    property24(),
    __metadata("design:type", typeof (_c9 = typeof Image10 !== "undefined" && Image10) === "function" ? _c9 : Object)
  ], Slider.prototype, "imgBg", void 0);
  __decorate26([
    property24(),
    __metadata("design:type", Number)
  ], Slider.prototype, "value", void 0);
  Slider = __decorate26([
    regClass24(),
    __metadata("design:paramtypes", [])
  ], Slider);
  var Slider_default = Slider;

  // E:/WheelChairMan/src/Util/Toggle.ts
  var __decorate27 = __$decorate("0f5a24a0-2f83-4219-9165-99195082aa4a", "../src/Util/Toggle.ts");
  var _a13;
  var Image11 = Laya.Image;
  var { regClass: regClass25, property: property25 } = Laya;
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
  __decorate27([
    property25(),
    __metadata("design:type", Boolean)
  ], Toggle.prototype, "isON", void 0);
  __decorate27([
    property25(),
    __metadata("design:type", typeof (_a13 = typeof Image11 !== "undefined" && Image11) === "function" ? _a13 : Object)
  ], Toggle.prototype, "imgItem", void 0);
  Toggle = __decorate27([
    regClass25(),
    __metadata("design:paramtypes", [])
  ], Toggle);
  var Toggle_default = Toggle;

  // E:/WheelChairMan/src/Scene/SettingView.ts
  var __decorate28 = __$decorate("9811079c-9340-49a7-8d8a-71570d70a98d", "../src/Scene/SettingView.ts");
  var _a14;
  var _b11;
  var _c10;
  var _d6;
  var _e5;
  var _f4;
  var _g3;
  var _h3;
  var Box3 = Laya.Box;
  var Label6 = Laya.Label;
  var Image12 = Laya.Image;
  var { regClass: regClass26, property: property26 } = Laya;
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
  }, "SettingView");
  __decorate28([
    property26(),
    __metadata("design:type", typeof (_a14 = typeof Image12 !== "undefined" && Image12) === "function" ? _a14 : Object)
  ], SettingView.prototype, "imgClose", void 0);
  __decorate28([
    property26(),
    __metadata("design:type", typeof (_b11 = typeof Box3 !== "undefined" && Box3) === "function" ? _b11 : Object)
  ], SettingView.prototype, "sliderSfx", void 0);
  __decorate28([
    property26(),
    __metadata("design:type", typeof (_c10 = typeof Box3 !== "undefined" && Box3) === "function" ? _c10 : Object)
  ], SettingView.prototype, "sliderBgm", void 0);
  __decorate28([
    property26(),
    __metadata("design:type", typeof (_d6 = typeof Image12 !== "undefined" && Image12) === "function" ? _d6 : Object)
  ], SettingView.prototype, "toggleShake", void 0);
  __decorate28([
    property26(),
    __metadata("design:type", typeof (_e5 = typeof Image12 !== "undefined" && Image12) === "function" ? _e5 : Object)
  ], SettingView.prototype, "imgLanguage", void 0);
  __decorate28([
    property26(),
    __metadata("design:type", typeof (_f4 = typeof Image12 !== "undefined" && Image12) === "function" ? _f4 : Object)
  ], SettingView.prototype, "imgLan", void 0);
  __decorate28([
    property26(),
    __metadata("design:type", typeof (_g3 = typeof Image12 !== "undefined" && Image12) === "function" ? _g3 : Object)
  ], SettingView.prototype, "imgSupport", void 0);
  __decorate28([
    property26(),
    __metadata("design:type", typeof (_h3 = typeof Label6 !== "undefined" && Label6) === "function" ? _h3 : Object)
  ], SettingView.prototype, "txtAgreement", void 0);
  SettingView = __decorate28([
    regClass26(),
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
  var __decorate29 = __$decorate("6101acc2-fac8-487c-9045-7d083746b9cd", "../src/Scene/ShopView.ts");
  var _a15;
  var _b12;
  var _c11;
  var Image13 = Laya.Image;
  var List5 = Laya.List;
  var Handler7 = Laya.Handler;
  var { regClass: regClass27, property: property27 } = Laya;
  var ShopView = /* @__PURE__ */ __name(class ShopView2 extends UIBase_default {
    constructor() {
      super();
      this.$titleSelectedIndex = 0;
    }
    onOpened(param) {
      if (!this.$shopDataTable) {
        this.$shopDataTable = ResLoader.instance.getDataTableById(3005 /* Shop */);
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
      console.log(obj);
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
  }, "ShopView");
  __decorate29([
    property27(),
    __metadata("design:type", typeof (_a15 = typeof Image13 !== "undefined" && Image13) === "function" ? _a15 : Object)
  ], ShopView.prototype, "imgClose", void 0);
  __decorate29([
    property27(),
    __metadata("design:type", typeof (_b12 = typeof List5 !== "undefined" && List5) === "function" ? _b12 : Object)
  ], ShopView.prototype, "listTitle", void 0);
  __decorate29([
    property27(),
    __metadata("design:type", typeof (_c11 = typeof List5 !== "undefined" && List5) === "function" ? _c11 : Object)
  ], ShopView.prototype, "listShop", void 0);
  ShopView = __decorate29([
    regClass27(),
    __metadata("design:paramtypes", [])
  ], ShopView);

  // E:/WheelChairMan/src/Scene/SignInView.ts
  var __decorate30 = __$decorate("658fcc51-8109-42a6-a372-0d6e36f801cc", "../src/Scene/SignInView.ts");
  var { regClass: regClass28, property: property28 } = Laya;
  var SignInView = /* @__PURE__ */ __name(class SignInView2 extends UIBase_default {
  }, "SignInView");
  SignInView = __decorate30([
    regClass28()
  ], SignInView);

  // E:/WheelChairMan/src/Scene/SureView.ts
  var __decorate31 = __$decorate("2eee226a-dcc2-4965-9ad2-4c490d20fbdf", "../src/Scene/SureView.ts");
  var _a16;
  var _b13;
  var _c12;
  var _d7;
  var Label7 = Laya.Label;
  var Image14 = Laya.Image;
  var { regClass: regClass29, property: property29 } = Laya;
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
  __decorate31([
    property29(),
    __metadata("design:type", typeof (_a16 = typeof Image14 !== "undefined" && Image14) === "function" ? _a16 : Object)
  ], SureView.prototype, "imgSure", void 0);
  __decorate31([
    property29(),
    __metadata("design:type", typeof (_b13 = typeof Image14 !== "undefined" && Image14) === "function" ? _b13 : Object)
  ], SureView.prototype, "imgCancel", void 0);
  __decorate31([
    property29(),
    __metadata("design:type", typeof (_c12 = typeof Label7 !== "undefined" && Label7) === "function" ? _c12 : Object)
  ], SureView.prototype, "txtTitle", void 0);
  __decorate31([
    property29(),
    __metadata("design:type", typeof (_d7 = typeof Label7 !== "undefined" && Label7) === "function" ? _d7 : Object)
  ], SureView.prototype, "txtMsg", void 0);
  SureView = __decorate31([
    regClass29(),
    __metadata("design:paramtypes", [])
  ], SureView);

  // E:/WheelChairMan/src/Scene/TipsView.ts
  var __decorate32 = __$decorate("a1b11e33-3318-4f7e-af1d-2bbf5fa13333", "../src/Scene/TipsView.ts");
  var _a17;
  var Text5 = Laya.Text;
  var { regClass: regClass30, property: property30 } = Laya;
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
  __decorate32([
    property30(),
    __metadata("design:type", typeof (_a17 = typeof Text5 !== "undefined" && Text5) === "function" ? _a17 : Object)
  ], TipsView.prototype, "txtMsg", void 0);
  TipsView = __decorate32([
    regClass30(),
    __metadata("design:paramtypes", [])
  ], TipsView);

  // E:/WheelChairMan/src/Scene3d/GameScene.ts
  var __decorate33 = __$decorate("0706d1ae-b0b6-47a5-9387-2a6360b2893e", "../src/Scene3d/GameScene.ts");
  var _a18;
  var _b14;
  var _c13;
  var _d8;
  var _e6;
  var Sprite3D = Laya.Sprite3D;
  var Camera = Laya.Camera;
  var DirectionLight = Laya.DirectionLight;
  var { regClass: regClass31, property: property31 } = Laya;
  var GameScene = /* @__PURE__ */ __name(class GameScene2 extends Scene3d_default {
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
  }, "GameScene");
  __decorate33([
    property31(),
    __metadata("design:type", typeof (_a18 = typeof Camera !== "undefined" && Camera) === "function" ? _a18 : Object)
  ], GameScene.prototype, "mainCamera", void 0);
  __decorate33([
    property31(),
    __metadata("design:type", typeof (_b14 = typeof Sprite3D !== "undefined" && Sprite3D) === "function" ? _b14 : Object)
  ], GameScene.prototype, "groundStage", void 0);
  __decorate33([
    property31(),
    __metadata("design:type", typeof (_c13 = typeof DirectionLight !== "undefined" && DirectionLight) === "function" ? _c13 : Object)
  ], GameScene.prototype, "light", void 0);
  __decorate33([
    property31(),
    __metadata("design:type", typeof (_d8 = typeof Sprite3D !== "undefined" && Sprite3D) === "function" ? _d8 : Object)
  ], GameScene.prototype, "playerStage", void 0);
  __decorate33([
    property31(),
    __metadata("design:type", typeof (_e6 = typeof Sprite3D !== "undefined" && Sprite3D) === "function" ? _e6 : Object)
  ], GameScene.prototype, "zombieStage", void 0);
  GameScene = __decorate33([
    regClass31(),
    __metadata("design:paramtypes", [])
  ], GameScene);

  // E:/WheelChairMan/src/Scene3d/MainScene.ts
  var __decorate34 = __$decorate("71c8c727-1736-44b1-984f-02439872df63", "../src/Scene3d/MainScene.ts");
  var { regClass: regClass32, property: property32 } = Laya;
  var MainScene = /* @__PURE__ */ __name(class MainScene2 extends Scene3d_default {
    constructor() {
      super();
    }
    onOpened(param) {
    }
  }, "MainScene");
  MainScene = __decorate34([
    regClass32(),
    __metadata("design:paramtypes", [])
  ], MainScene);

  // E:/WheelChairMan/src/Scene3d/SelectPlayerScene.ts
  var __decorate35 = __$decorate("34405a80-13b4-48be-ac44-94bb920f1518", "../src/Scene3d/SelectPlayerScene.ts");
  var _a19;
  var Sprite3D2 = Laya.Sprite3D;
  var { regClass: regClass33, property: property33 } = Laya;
  var SelectPlayerScene = /* @__PURE__ */ __name(class SelectPlayerScene2 extends Scene3d_default {
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
      var _a20;
      (_a20 = this.$playerObj) === null || _a20 === void 0 ? void 0 : _a20.removeSelf();
      this.$playerObj = PlayerMgr.instance.getSelectPlayer(playerId);
      this.$playerObj && this.playerStage.addChild(this.$playerObj);
      this.$playerObj && (this.$playerObj.transform.position = Sprite3d.ZERO);
    }
    onClosed() {
      var _a20;
      (_a20 = this.$playerObj) === null || _a20 === void 0 ? void 0 : _a20.removeSelf();
    }
  }, "SelectPlayerScene");
  __decorate35([
    property33(),
    __metadata("design:type", typeof (_a19 = typeof Sprite3D2 !== "undefined" && Sprite3D2) === "function" ? _a19 : Object)
  ], SelectPlayerScene.prototype, "playerStage", void 0);
  SelectPlayerScene = __decorate35([
    regClass33(),
    __metadata("design:paramtypes", [])
  ], SelectPlayerScene);

  // E:/WheelChairMan/src/Util/Base64.ts
  var __decorate36 = __$decorate("fe62c9ad-c7c3-4baa-8f7c-216a9f051006", "../src/Util/Base64.ts");
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

  // E:/WheelChairMan/src/Game/BaseItem/BaseItemMgr.ts
  var __decorate37 = __$decorate("24b34e30-2f17-4824-a3b0-0ba530674c37", "../src/Game/BaseItem/BaseItemMgr.ts");
  var Vector35 = Laya.Vector3;
  var Quaternion2 = Laya.Quaternion;
  var Pool4 = Laya.Pool;
})();
//# sourceMappingURL=bundle.js.map
