(function (exports, Laya) {
    'use strict';

    class UIConfig {
    }
    UIConfig.touchScrollEnable = true;
    UIConfig.mouseWheelEnable = true;
    UIConfig.showButtons = true;
    UIConfig.popupBgColor = "#000000";
    UIConfig.popupBgAlpha = 0.5;
    UIConfig.closeDialogOnSide = true;

    class AutoBitmap extends Laya.Graphics {
        constructor() {
            super(...arguments);
            this._width = null;
            this._height = null;
            this.uv = null;
            this._color = "#ffffff";
        }
        destroy() {
            super.destroy();
            if (this._source && !Laya.LayaEnv.isPlaying)
                this._source.off("reload", this, this._setChanged);
            this._source = null;
            this._sizeGrid = null;
            this._offset = null;
        }
        get sizeGrid() {
            return this._sizeGrid;
        }
        set sizeGrid(value) {
            this._sizeGrid = value ? value.map((v) => { return +v; }) : null;
            this._setChanged();
        }
        get width() {
            if (this._width != null)
                return this._width;
            if (this._source)
                return this._source.sourceWidth;
            return 0;
        }
        set width(value) {
            if (this._width != value) {
                this._width = value;
                this._setChanged();
            }
        }
        get height() {
            if (this._height != null)
                return this._height;
            if (this._source)
                return this._source.sourceHeight / (this._source._stateNum || this._stateNum || 1);
            return 0;
        }
        set height(value) {
            if (this._height != value) {
                this._height = value;
                this._setChanged();
            }
        }
        get source() {
            return this._source;
        }
        set source(value) {
            if (this._source && !Laya.LayaEnv.isPlaying)
                this._source.off("reload", this, this._setChanged);
            if (value) {
                this._source = value;
                this._setChanged();
                if (!Laya.LayaEnv.isPlaying)
                    value.on("reload", this, this._setChanged);
            }
            else {
                this._source = null;
                this._setDrawGridCmd(null);
            }
        }
        setState(index, numStates) {
            this._stateIndex = index;
            this._stateNum = numStates;
            this._setChanged();
        }
        get color() {
            return this._color;
        }
        set color(value) {
            if (this._color != value) {
                this._color = value;
                this._setChanged();
            }
        }
        _setChanged() {
            if (!this._isChanged) {
                this._isChanged = true;
                Laya.ILaya.timer.callLater(this, this.changeSource);
            }
        }
        changeSource() {
            this._isChanged = false;
            let source = this._source;
            if (!source || !source.bitmap || !this._sp)
                return;
            let width = this.width;
            let height = this.height;
            let sizeGrid = this._sizeGrid || source._sizeGrid;
            let stateIndex = this._stateIndex;
            if (stateIndex != null) {
                let stateNum = source._stateNum || this._stateNum || 1;
                if (stateNum == 1)
                    stateIndex = 0;
                else if (stateNum == 2) {
                    if (stateIndex == 2)
                        stateIndex = 1;
                    else
                        stateIndex = 0;
                }
                else if (stateNum == 3) {
                    if (stateIndex == 3)
                        stateIndex = 0;
                }
                let h = source.height / stateNum;
                source = source.getCachedClip(0, h * stateIndex, source.width, h);
                if (!source)
                    return;
            }
            let sw = source.sourceWidth;
            let sh = source.sourceHeight;
            let cmd;
            if (!sizeGrid || (sw === width && sh === height))
                cmd = Laya.DrawTextureCmd.create(source, this._offset ? this._offset[0] : 0, this._offset ? this._offset[1] : 0, width, height, null, 1, this._color, null, this.uv);
            else
                cmd = Laya.Draw9GridTextureCmd.create(source, 0, 0, width, height, sizeGrid, false, this._color);
            this._setDrawGridCmd(cmd);
        }
        _setDrawGridCmd(newcmd) {
            if (this._drawGridCmd) {
                this.removeCmd(this._drawGridCmd);
                this._drawGridCmd.recover();
            }
            this._drawGridCmd = newcmd;
            if (newcmd)
                this.addCmd(newcmd);
        }
    }

    class UIEvent {
    }
    UIEvent.SHOW_TIP = "showtip";
    UIEvent.HIDE_TIP = "hidetip";

    class UIUtils {
        static fillArray(arr, str, type = null) {
            let temp = arr.concat();
            if (str) {
                let a = str.split(",");
                for (let i = 0, n = Math.min(temp.length, a.length); i < n; i++) {
                    let value = a[i];
                    temp[i] = (value == "true" ? true : (value == "false" ? false : value));
                    if (type != null)
                        temp[i] = type(value);
                }
            }
            return temp;
        }
        static toColor(color) {
            return Laya.Utils.toHexColor(color);
        }
        static gray(target, isGray = true) {
            let filters = target.filters || [];
            let i = filters.indexOf(UIUtils.grayFilter);
            if (isGray) {
                if (i == -1) {
                    filters.push(UIUtils.grayFilter);
                    target.filters = filters;
                }
            }
            else if (i != -1) {
                filters.splice(i, 1);
                target.filters = filters;
            }
        }
        static getBindFun(value) {
            if (!UIUtils._funMap) {
                UIUtils._funMap = new Laya.WeakObject();
            }
            var fun = UIUtils._funMap.get(value);
            if (fun == null) {
                var temp = "\"" + value + "\"";
                temp = temp.replace(/^"\${|}"$/g, "").replace(/\${/g, "\"+").replace(/}/g, "+\"");
                var str = "(function(data){if(data==null)return;with(data){try{\nreturn " + temp + "\n}catch(e){}}})";
                fun = window.Laya._runScript(str);
                UIUtils._funMap.set(value, fun);
            }
            return fun;
        }
    }
    UIUtils.grayFilter = new Laya.ColorFilter([0.3086, 0.6094, 0.082, 0, 0, 0.3086, 0.6094, 0.082, 0, 0, 0.3086, 0.6094, 0.082, 0, 0, 0, 0, 0, 1, 0]);
    UIUtils._funMap = null;

    class UIComponent extends Laya.Sprite {
        constructor(createChildren = true) {
            super();
            this._widget = Laya.Widget.EMPTY;
            if (createChildren) {
                this.preinitialize();
                this.createChildren();
                this.initialize();
            }
        }
        destroy(destroyChild = true) {
            super.destroy(destroyChild);
            this._dataSource = null;
            this._toolTip = null;
        }
        preinitialize() {
        }
        createChildren() {
        }
        initialize() {
        }
        get_width() {
            if (this._isWidthSet)
                return this._width;
            return this.measureWidth();
        }
        measureWidth() {
            var max = 0;
            this.commitMeasure();
            for (var i = this.numChildren - 1; i > -1; i--) {
                var comp = this.getChildAt(i);
                if (comp._visible) {
                    max = Math.max(comp._x + comp.width * comp.scaleX, max);
                }
            }
            return max;
        }
        commitMeasure() {
        }
        get_height() {
            if (this._isHeightSet)
                return this._height;
            return this.measureHeight();
        }
        measureHeight() {
            var max = 0;
            this.commitMeasure();
            for (var i = this.numChildren - 1; i > -1; i--) {
                var comp = this.getChildAt(i);
                if (comp._visible) {
                    max = Math.max(comp._y + comp.height * comp.scaleY, max);
                }
            }
            return max;
        }
        get dataSource() {
            return this.get_dataSource();
        }
        get_dataSource() {
            return this._dataSource;
        }
        set dataSource(value) {
            this.set_dataSource(value);
        }
        set_dataSource(value) {
            this._dataSource = value;
            for (var prop in this._dataSource) {
                if (prop in this && !(typeof (this[prop]) == 'function')) {
                    this[prop] = this._dataSource[prop];
                }
            }
        }
        get top() {
            return this.get_top();
        }
        get_top() {
            return this._widget.top;
        }
        set top(value) {
            this.set_top(value);
        }
        set_top(value) {
            if (value != this._widget.top) {
                this._getWidget().top = value;
            }
        }
        get bottom() {
            return this.get_bottom();
        }
        get_bottom() {
            return this._widget.bottom;
        }
        set bottom(value) {
            this.set_bottom(value);
        }
        set_bottom(value) {
            if (value != this._widget.bottom) {
                this._getWidget().bottom = value;
            }
        }
        get left() {
            return this._widget.left;
        }
        set left(value) {
            if (value != this._widget.left) {
                this._getWidget().left = value;
            }
        }
        get right() {
            return this._widget.right;
        }
        set right(value) {
            if (value != this._widget.right) {
                this._getWidget().right = value;
            }
        }
        get centerX() {
            return this._widget.centerX;
        }
        set centerX(value) {
            if (value != this._widget.centerX) {
                this._getWidget().centerX = value;
            }
        }
        get centerY() {
            return this._widget.centerY;
        }
        set centerY(value) {
            if (value != this._widget.centerY) {
                this._getWidget().centerY = value;
            }
        }
        _shouldRefreshLayout() {
            super._shouldRefreshLayout();
            this.callLater(this._sizeChanged);
        }
        _sizeChanged() {
            this.event(Laya.Event.RESIZE);
            if (this._widget !== Laya.Widget.EMPTY)
                this._widget.resetLayout();
        }
        get toolTip() {
            return this._toolTip;
        }
        set toolTip(value) {
            if (this._toolTip != value) {
                this._toolTip = value;
                if (value != null) {
                    this.on(Laya.Event.MOUSE_OVER, this, this.onMouseOver);
                    this.on(Laya.Event.MOUSE_OUT, this, this.onMouseOut);
                }
                else {
                    this.off(Laya.Event.MOUSE_OVER, this, this.onMouseOver);
                    this.off(Laya.Event.MOUSE_OUT, this, this.onMouseOut);
                }
            }
        }
        onMouseOver(e) {
            Laya.ILaya.stage.event(UIEvent.SHOW_TIP, this._toolTip);
        }
        onMouseOut(e) {
            Laya.ILaya.stage.event(UIEvent.HIDE_TIP, this._toolTip);
        }
        get gray() {
            return this._gray;
        }
        set gray(value) {
            if (value !== this._gray) {
                this._gray = value;
                UIUtils.gray(this, value);
            }
        }
        get disabled() {
            return this._disabled;
        }
        set disabled(value) {
            if (value !== this._disabled) {
                this.gray = this._disabled = value;
                this.mouseEnabled = !value;
            }
        }
        _getWidget() {
            this._widget === Laya.Widget.EMPTY && (this._widget = this.addComponent(Laya.Widget));
            return this._widget;
        }
        onCompResize() {
            this._sizeChanged();
        }
        _childChanged(child = null) {
            this.callLater(this._sizeChanged);
            super._childChanged(child);
        }
        freshLayout() {
            if (this._widget != Laya.Widget.EMPTY) {
                this._widget.resetLayout();
            }
        }
    }

    class Box extends UIComponent {
        set_dataSource(value) {
            this._dataSource = value;
            for (let name in value) {
                let comp = this.getChildByName(name);
                if (comp)
                    comp.dataSource = value[name];
                else if (name in this && !(this[name] instanceof Function))
                    this[name] = value[name];
            }
        }
        get bgColor() {
            return this._bgColor;
        }
        set bgColor(value) {
            this._bgColor = value;
            this.graphics.clear();
            this.graphics.drawRect(0, 0, 1, 1, this._bgColor, null, null, true);
        }
    }

    class Styles {
    }
    Styles.defaultSizeGrid = [4, 4, 4, 4, 0];
    Styles.labelColor = "#000000";
    Styles.labelPadding = [2, 2, 2, 2];
    Styles.inputLabelPadding = [1, 1, 1, 3];
    Styles.buttonStateNum = 3;
    Styles.buttonLabelColors = ["#32556b", "#32cc6b", "#ff0000"];
    Styles.comboBoxItemColors = ["#5e95b6", "#ffffff", "#000000", "#8fa4b1", "#ffffff"];
    Styles.scrollBarMinNum = 15;
    Styles.scrollBarDelayTime = 500;
    exports.ScrollType = void 0;
    (function (ScrollType) {
        ScrollType[ScrollType["None"] = 0] = "None";
        ScrollType[ScrollType["Horizontal"] = 1] = "Horizontal";
        ScrollType[ScrollType["Vertical"] = 2] = "Vertical";
        ScrollType[ScrollType["Both"] = 3] = "Both";
    })(exports.ScrollType || (exports.ScrollType = {}));

    class Button extends UIComponent {
        constructor(skin = null, label = "") {
            super();
            this._state = 0;
            this._autoSize = true;
            this._stateChanged = false;
            this._labelColors = Styles.buttonLabelColors;
            this._stateNum = Styles.buttonStateNum;
            if (skin)
                this.skin = skin;
            this.label = label;
        }
        destroy(destroyChild = true) {
            super.destroy(destroyChild);
            this._text && this._text.destroy(destroyChild);
            this._text = null;
            this._clickHandler = null;
            this._labelColors = this._strokeColors = null;
        }
        createChildren() {
            this.graphics = new AutoBitmap();
        }
        createText() {
            if (!this._text) {
                this._text = new Laya.Text();
                this._text.overflow = Laya.Text.HIDDEN;
                this._text.align = "center";
                this._text.valign = "middle";
                this._text.width = this._width;
                this._text.height = this._height;
                this._text.hideFlags = Laya.HideFlags.HideAndDontSave;
            }
        }
        initialize() {
            if (this._mouseState !== 1) {
                this.mouseEnabled = true;
                this._setBit(Laya.NodeFlags.HAS_MOUSE, true);
            }
            this.on(Laya.Event.MOUSE_OVER, this, this.onMouse);
            this.on(Laya.Event.MOUSE_OUT, this, this.onMouse);
            this.on(Laya.Event.MOUSE_DOWN, this, this.onMouse);
            this.on(Laya.Event.MOUSE_UP, this, this.onMouse);
            this.on(Laya.Event.CLICK, this, this.onMouse);
        }
        onMouse(e) {
            if (this.toggle === false && this._selected)
                return;
            let type = e ? e.type : Laya.Event.CLICK;
            if (type === Laya.Event.CLICK) {
                this.toggle && (this.selected = !this._selected);
                this._clickHandler && this._clickHandler.run();
                return;
            }
            !this._selected && (this.state = stateMap[type]);
        }
        get skin() {
            return this._skin;
        }
        set skin(value) {
            if (this._skin == value)
                return;
            this._setSkin(value);
        }
        _setSkin(url) {
            this._skin = url;
            if (url) {
                if (this._skinBaseUrl)
                    url = Laya.URL.formatURL(url, this._skinBaseUrl);
                let tex = Laya.Loader.getRes(url);
                if (!tex)
                    return Laya.ILaya.loader.load(url, Laya.Loader.IMAGE).then(tex => this._skinLoaded(tex));
                else {
                    this._skinLoaded(tex);
                    return Promise.resolve();
                }
            }
            else {
                this._skinLoaded(null);
                return Promise.resolve();
            }
        }
        _skinLoaded(tex) {
            this._graphics.source = tex;
            this.callLater(this.changeClips);
            this._setStateChanged();
            this._sizeChanged();
            this.event(Laya.Event.LOADED);
        }
        get stateNum() {
            return this._stateNum;
        }
        set stateNum(value) {
            if (typeof value == 'string') {
                value = parseInt(value);
            }
            if (this._stateNum != value) {
                this._stateNum = value < 1 ? 1 : value > 3 ? 3 : value;
                this._graphics.setState(this._state, this._stateNum);
                if (this._skin) {
                    this.callLater(this.changeClips);
                    this._setStateChanged();
                }
            }
        }
        changeClips() {
            let width = 0, height = 0;
            let img = Laya.Loader.getRes(this._skin);
            if (!img) {
                console.log(`lose skin ${this._skin}`);
                return;
            }
            width = img.sourceWidth;
            height = img.sourceHeight / (img._stateNum || this._stateNum);
            if (this._autoSize) {
                this._graphics.width = this._isWidthSet ? this._width : width;
                this._graphics.height = this._isHeightSet ? this._height : height;
                if (this._text) {
                    this._text.width = this._graphics.width;
                    this._text.height = this._graphics.height;
                }
            }
            else {
                if (this._text) {
                    this._text.x = width;
                    this._text.height = height;
                }
            }
        }
        measureWidth() {
            if (this._skin)
                this.runCallLater(this.changeClips);
            if (this._autoSize)
                return this._graphics.width;
            this.runCallLater(this.changeState);
            return this._graphics.width + (this._text ? this._text.width : 0);
        }
        measureHeight() {
            if (this._skin)
                this.runCallLater(this.changeClips);
            return this._text ? Math.max(this._graphics.height, this._text.height) : this._graphics.height;
        }
        get label() {
            return this._text ? this._text.text : null;
        }
        set label(value) {
            if (!this._text && !value)
                return;
            this.createText();
            if (this._text.text != value) {
                value && !this._text.parent && this.addChild(this._text);
                this._text.text = (value + "").replace(/\\n/g, "\n");
                this._setStateChanged();
            }
        }
        get selected() {
            return this._selected;
        }
        set selected(value) {
            if (this._selected != value) {
                this._selected = value;
                this.state = this._selected ? 2 : 0;
                this.event(Laya.Event.CHANGE);
            }
        }
        get state() {
            return this._state;
        }
        set state(value) {
            if (this._state != value) {
                this._state = value;
                this._setStateChanged();
            }
        }
        changeState() {
            this._stateChanged = false;
            if (this._skin)
                this.runCallLater(this.changeClips);
            let index = Math.max(this._state, 0);
            this._graphics.setState(index, this._stateNum);
            if (this.label) {
                this._text.color = this._labelColors[index];
                if (this._strokeColors)
                    this._text.strokeColor = this._strokeColors[index];
            }
        }
        get labelColors() {
            return this._labelColors.join(",");
        }
        set labelColors(value) {
            this._labelColors = UIUtils.fillArray(Styles.buttonLabelColors, value, String);
            this._setStateChanged();
        }
        get strokeColors() {
            return this._strokeColors ? this._strokeColors.join(",") : "";
        }
        set strokeColors(value) {
            this._strokeColors = UIUtils.fillArray(Styles.buttonLabelColors, value, String);
            this._setStateChanged();
        }
        get labelPadding() {
            this.createText();
            return this._text.padding.join(",");
        }
        set labelPadding(value) {
            this.createText();
            this._text.padding = UIUtils.fillArray(Styles.labelPadding, value, Number);
        }
        get labelSize() {
            this.createText();
            return this._text.fontSize;
        }
        set labelSize(value) {
            this.createText();
            this._text.fontSize = value;
        }
        get labelStroke() {
            this.createText();
            return this._text.stroke;
        }
        set labelStroke(value) {
            this.createText();
            this._text.stroke = value;
        }
        get labelStrokeColor() {
            this.createText();
            return this._text.strokeColor;
        }
        set labelStrokeColor(value) {
            this.createText();
            this._text.strokeColor = value;
        }
        get labelBold() {
            this.createText();
            return this._text.bold;
        }
        set labelBold(value) {
            this.createText();
            this._text.bold = value;
        }
        get labelFont() {
            this.createText();
            return this._text.font;
        }
        set labelFont(value) {
            this.createText();
            this._text.font = value;
        }
        get labelAlign() {
            this.createText();
            return this._text.align;
        }
        set labelAlign(value) {
            this.createText();
            this._text.align = value;
        }
        get labelVAlign() {
            this.createText();
            return this._text.valign;
        }
        set labelVAlign(value) {
            this.createText();
            this._text.valign = value;
        }
        get clickHandler() {
            return this._clickHandler;
        }
        set clickHandler(value) {
            this._clickHandler = value;
        }
        get text() {
            this.createText();
            return this._text;
        }
        set text(value) {
            if (typeof (value) == "string") {
                this._text && (this._text.text = value);
            }
        }
        get sizeGrid() {
            if (this._graphics.sizeGrid)
                return this._graphics.sizeGrid.join(",");
            return null;
        }
        set sizeGrid(value) {
            if (value)
                this._graphics.sizeGrid = UIUtils.fillArray(Styles.defaultSizeGrid, value, Number);
            else
                this._graphics.sizeGrid = null;
        }
        _setWidth(value) {
            super._setWidth(value);
            if (this._autoSize) {
                this._graphics.width = value;
                this._text && (this._text.width = value);
            }
        }
        _setHeight(value) {
            super._setHeight(value);
            if (this._autoSize) {
                this._graphics.height = value;
                this._text && (this._text.height = value);
            }
        }
        set_dataSource(value) {
            if (typeof (value) == 'number' || typeof (value) == 'string') {
                this._dataSource = value;
                this.label = value + "";
            }
            else
                super.set_dataSource(value);
        }
        get iconOffset() {
            return this._graphics._offset ? this._graphics._offset.join(",") : null;
        }
        set iconOffset(value) {
            if (value)
                this._graphics._offset = UIUtils.fillArray([1, 1], value, Number);
            else
                this._graphics._offset = [];
        }
        _setStateChanged() {
            if (!this._stateChanged) {
                this._stateChanged = true;
                this.callLater(this.changeState);
            }
        }
    }
    const stateMap = { "mouseup": 0, "mouseover": 1, "mousedown": 2, "mouseout": 0 };

    class CheckBox extends Button {
        constructor(skin = null, label = "") {
            super(skin, label);
            this.toggle = true;
            this._autoSize = false;
        }
        preinitialize() {
            super.preinitialize();
            this.toggle = true;
            this._autoSize = false;
        }
        initialize() {
            super.initialize();
            this.createText();
            this._text.align = "left";
            this._text.valign = "top";
            this._text.width = null;
        }
        set_dataSource(value) {
            this._dataSource = value;
            if (value instanceof Boolean)
                this.selected = value;
            else if (typeof (value) == 'string')
                this.selected = value === "true";
            else
                super.set_dataSource(value);
        }
    }

    class Clip extends UIComponent {
        constructor(url = null, clipX = 1, clipY = 1) {
            super();
            this._clipX = 1;
            this._clipY = 1;
            this._clipWidth = 0;
            this._clipHeight = 0;
            this._interval = 50;
            this._index = 0;
            this._toIndex = -1;
            this._sources = [];
            this._clipX = clipX;
            this._clipY = clipY;
            this.skin = url;
        }
        createChildren() {
            this.graphics = new AutoBitmap();
        }
        _onDisplay(e) {
            if (this._isPlaying) {
                if (this._getBit(Laya.NodeFlags.DISPLAYED_INSTAGE))
                    this.play();
                else
                    this.stop();
            }
            else if (this._autoPlay) {
                this.play();
            }
        }
        get skin() {
            return this._skin;
        }
        set skin(value) {
            if (this._skin == value)
                return;
            this._setSkin(value);
        }
        _setSkin(url) {
            this._skin = url;
            if (url) {
                if (this._skinBaseUrl)
                    url = Laya.URL.formatURL(url, this._skinBaseUrl);
                if (!Laya.Loader.getRes(url))
                    return Laya.ILaya.loader.load(url, Laya.Loader.IMAGE).then(() => this._skinLoaded());
                else {
                    this._skinLoaded();
                    return Promise.resolve();
                }
            }
            else {
                this._graphics.source = null;
                return Promise.resolve();
            }
        }
        _skinLoaded() {
            this._setClipChanged();
            this._sizeChanged();
            this.event(Laya.Event.LOADED);
        }
        get clipX() {
            return this._clipX;
        }
        set clipX(value) {
            this._clipX = value || 1;
            this._setClipChanged();
        }
        get clipY() {
            return this._clipY;
        }
        set clipY(value) {
            this._clipY = value || 1;
            this._setClipChanged();
        }
        get clipWidth() {
            return this._clipWidth;
        }
        set clipWidth(value) {
            this._clipWidth = value;
            this._setClipChanged();
        }
        get clipHeight() {
            return this._clipHeight;
        }
        set clipHeight(value) {
            this._clipHeight = value;
            this._setClipChanged();
        }
        changeClip() {
            this._clipChanged = false;
            if (!this._skin || this._destroyed)
                return;
            let url = this._skinBaseUrl ? Laya.URL.formatURL(this._skin, this._skinBaseUrl) : this._skin;
            let img = Laya.Loader.getRes(url);
            if (img) {
                this.loadComplete(this._skin, img);
            }
            else {
                Laya.ILaya.loader.load(url, Laya.Handler.create(this, this.loadComplete, [this._skin]), null, Laya.Loader.IMAGE);
            }
        }
        loadComplete(url, img) {
            if (url !== this._skin)
                return;
            this._sources.length = 0;
            if (img) {
                var w = this._clipWidth || Math.ceil(img.sourceWidth / this._clipX);
                var h = this._clipHeight || Math.ceil(img.sourceHeight / this._clipY);
                for (let i = 0; i < this._clipY; i++) {
                    for (let j = 0; j < this._clipX; j++) {
                        this._sources.push(img.getCachedClip(w * j, h * i, w, h));
                    }
                }
            }
            this.index = this._index;
            this.event(Laya.Event.LOADED);
            this.onCompResize();
        }
        get sources() {
            return this._sources;
        }
        set sources(value) {
            this._sources = value;
            this.index = this._index;
            this.event(Laya.Event.LOADED);
        }
        get group() {
            return this._group;
        }
        set group(value) {
            if (value && this._skin)
                Laya.Loader.setGroup(this._skin, value);
            this._group = value;
        }
        _setWidth(value) {
            super._setWidth(value);
            this._graphics.width = value;
        }
        _setHeight(value) {
            super._setHeight(value);
            this._graphics.height = value;
        }
        measureWidth() {
            this.runCallLater(this.changeClip);
            return this._graphics.width;
        }
        measureHeight() {
            this.runCallLater(this.changeClip);
            return this._graphics.height;
        }
        get sizeGrid() {
            if (this._graphics.sizeGrid)
                return this._graphics.sizeGrid.join(",");
            return null;
        }
        set sizeGrid(value) {
            if (value)
                this._graphics.sizeGrid = UIUtils.fillArray(Styles.defaultSizeGrid, value, Number);
            else
                this._graphics.sizeGrid = null;
        }
        get index() {
            return this._index;
        }
        set index(value) {
            this._index = value;
            this._graphics && (this._graphics.source = this._sources[value]);
            this.event(Laya.Event.CHANGE);
        }
        get total() {
            this.runCallLater(this.changeClip);
            return this._sources.length;
        }
        get autoPlay() {
            return this._autoPlay;
        }
        set autoPlay(value) {
            if (this._autoPlay != value) {
                this._autoPlay = value;
                value ? this.play() : this.stop();
            }
        }
        get interval() {
            return this._interval;
        }
        set interval(value) {
            if (this._interval != value) {
                this._interval = value;
                if (this._isPlaying)
                    this.play();
            }
        }
        get isPlaying() {
            return this._isPlaying;
        }
        set isPlaying(value) {
            this._isPlaying = value;
        }
        play(from = 0, to = -1) {
            this._setClipChanged();
            this._isPlaying = true;
            this.index = from;
            this._toIndex = to;
            Laya.ILaya.timer.loop(this.interval, this, this._loop);
            this.on(Laya.Event.DISPLAY, this, this._onDisplay);
            this.on(Laya.Event.UNDISPLAY, this, this._onDisplay);
        }
        _loop() {
            if (this._visible) {
                this._index++;
                if (this._toIndex > -1 && this._index >= this._toIndex)
                    this.stop();
                else if (this._index >= this._sources.length)
                    this._index = 0;
                this.index = this._index;
            }
        }
        stop() {
            this._isPlaying = false;
            Laya.ILaya.timer.clear(this, this._loop);
            this.event(Laya.Event.COMPLETE);
        }
        set_dataSource(value) {
            this._dataSource = value;
            if (typeof (value) == 'number' || typeof (value) == 'string')
                this.index = parseInt(value);
            else
                super.set_dataSource(value);
        }
        _setClipChanged() {
            if (!this._clipChanged) {
                this._clipChanged = true;
                this.callLater(this.changeClip);
            }
        }
    }

    class ColorPicker extends UIComponent {
        constructor(createChildren = true) {
            super(false);
            this._gridSize = 11;
            this._bgColor = "#ffffff";
            this._borderColor = "#000000";
            this._inputColor = "#000000";
            this._inputBgColor = "#efefef";
            this._colors = [];
            this._selectedColor = "#000000";
            if (createChildren) {
                this.preinitialize();
                this.createChildren();
                this.initialize();
            }
        }
        destroy(destroyChild = true) {
            Laya.ILaya.stage.off(Laya.Event.MOUSE_DOWN, this, this.removeColorBox);
            super.destroy(destroyChild);
            this._colorPanel && this._colorPanel.destroy(destroyChild);
            this._colorButton && this._colorButton.destroy(destroyChild);
            this._colorPanel = null;
            this._colorTiles = null;
            this._colorBlock = null;
            this._colorInput = null;
            this._colorButton = null;
            this._colors = null;
            this.changeHandler = null;
        }
        createChildren() {
            this._colorButton = new Button();
            this._colorButton.hideFlags = Laya.HideFlags.HideAndDontSave;
            this.addChild(this._colorButton);
            this._colorPanel = new Box();
            this._colorPanel.hideFlags = Laya.HideFlags.HideAndDontSave;
            this._colorPanel.size(230, 166);
            this._colorPanel.addChild(this._colorTiles = new Laya.Sprite());
            this._colorPanel.addChild(this._colorBlock = new Laya.Sprite());
            this._colorPanel.addChild(this._colorInput = new Laya.Input());
        }
        initialize() {
            this._colorButton.on(Laya.Event.CLICK, this, this.onColorButtonClick);
            this._colorBlock.pos(5, 5);
            this._colorInput.pos(60, 5);
            this._colorInput.size(60, 20);
            this._colorInput.on(Laya.Event.CHANGE, this, this.onColorInputChange);
            this._colorInput.on(Laya.Event.KEY_DOWN, this, this.onColorFieldKeyDown);
            this._colorTiles.pos(5, 30);
            this._colorTiles.on(Laya.Event.MOUSE_MOVE, this, this.onColorTilesMouseMove);
            this._colorTiles.on(Laya.Event.CLICK, this, this.onColorTilesClick);
            this._colorTiles.size(20 * this._gridSize, 12 * this._gridSize);
            this._colorPanel.on(Laya.Event.MOUSE_DOWN, this, this.onPanelMouseDown);
            this.bgColor = this._bgColor;
        }
        onPanelMouseDown(e) {
            e.stopPropagation();
        }
        changePanel() {
            this._panelChanged = false;
            var g = this._colorPanel.graphics;
            g.clear(true);
            g.drawRect(0, 0, 230, 166, this._bgColor, this._borderColor);
            this.drawBlock(this._selectedColor);
            this._colorInput.borderColor = this._borderColor;
            this._colorInput.bgColor = this._inputBgColor;
            this._colorInput.color = this._inputColor;
            g = this._colorTiles.graphics;
            g.clear(true);
            var mainColors = [0x000000, 0x333333, 0x666666, 0x999999, 0xCCCCCC, 0xFFFFFF, 0xFF0000, 0x00FF00, 0x0000FF, 0xFFFF00, 0x00FFFF, 0xFF00FF];
            for (var i = 0; i < 12; i++) {
                for (var j = 0; j < 20; j++) {
                    var color;
                    if (j === 0)
                        color = mainColors[i];
                    else if (j === 1)
                        color = 0x000000;
                    else
                        color = (((i * 3 + j / 6) % 3 << 0) + ((i / 6) << 0) * 3) * 0x33 << 16 | j % 6 * 0x33 << 8 | (i << 0) % 6 * 0x33;
                    var strColor = UIUtils.toColor(color);
                    this._colors.push(strColor);
                    var x = j * this._gridSize;
                    var y = i * this._gridSize;
                    g.drawRect(x, y, this._gridSize, this._gridSize, strColor, "#000000");
                }
            }
        }
        onColorButtonClick(e) {
            if (this._colorPanel.parent)
                this.close();
            else
                this.open();
        }
        open() {
            let stage = Laya.ILaya.stage;
            var p = this.localToGlobal(new Laya.Point());
            var px = p.x + this._colorPanel.width <= stage.width ? p.x : stage.width - this._colorPanel.width;
            var py = p.y + this._colorButton.height;
            py = py + this._colorPanel.height <= stage.height ? py : p.y - this._colorPanel.height;
            this._colorPanel.pos(px, py);
            this._colorPanel.zOrder = 1001;
            stage.addChild(this._colorPanel);
            stage.on(Laya.Event.MOUSE_DOWN, this, this.removeColorBox);
        }
        close() {
            Laya.ILaya.stage.off(Laya.Event.MOUSE_DOWN, this, this.removeColorBox);
            this._colorPanel.removeSelf();
        }
        removeColorBox(e = null) {
            this.close();
        }
        onColorFieldKeyDown(e) {
            if (e.keyCode == 13) {
                if (this._colorInput.text)
                    this.selectedColor = this._colorInput.text;
                else
                    this.selectedColor = null;
                this.close();
                e.stopPropagation();
            }
        }
        onColorInputChange(e = null) {
            if (this._colorInput.text)
                this.drawBlock(this._colorInput.text);
            else
                this.drawBlock("#FFFFFF");
        }
        onColorTilesClick(e) {
            this.selectedColor = this.getColorByMouse();
            this.close();
        }
        onColorTilesMouseMove(e) {
            this._colorInput.focus = false;
            var color = this.getColorByMouse();
            this._colorInput.text = color;
            this.drawBlock(color);
        }
        getColorByMouse() {
            var point = this._colorTiles.getMousePoint();
            var x = Math.floor(point.x / this._gridSize);
            var y = Math.floor(point.y / this._gridSize);
            return this._colors[y * 20 + x];
        }
        drawBlock(color) {
            var g = this._colorBlock.graphics;
            g.clear(true);
            var showColor = color ? color : "#ffffff";
            g.drawRect(0, 0, 50, 20, showColor, this._borderColor);
            color || g.drawLine(0, 0, 50, 20, "#ff0000");
        }
        get selectedColor() {
            return this._selectedColor;
        }
        set selectedColor(value) {
            if (this._selectedColor != value) {
                this._selectedColor = this._colorInput.text = value;
                this.drawBlock(value);
                this.changeColor();
                this.changeHandler && this.changeHandler.runWith(this._selectedColor);
                this.event(Laya.Event.CHANGE, Laya.Event.EMPTY);
            }
        }
        get skin() {
            return this._colorButton.skin;
        }
        set skin(value) {
            this._colorButton.once(Laya.Event.LOADED, this, this.changeColor);
            this._colorButton.skin = value;
        }
        changeColor() {
            var g = this.graphics;
            g.clear(true);
            var showColor = this._selectedColor || "#000000";
            g.drawRect(0, 0, this._colorButton.width, this._colorButton.height, showColor);
        }
        get bgColor() {
            return this._bgColor;
        }
        set bgColor(value) {
            this._bgColor = value;
            this._setPanelChanged();
        }
        get borderColor() {
            return this._borderColor;
        }
        set borderColor(value) {
            this._borderColor = value;
            this._setPanelChanged();
        }
        get inputColor() {
            return this._inputColor;
        }
        set inputColor(value) {
            this._inputColor = value;
            this._setPanelChanged();
        }
        get inputBgColor() {
            return this._inputBgColor;
        }
        set inputBgColor(value) {
            this._inputBgColor = value;
            this._setPanelChanged();
        }
        _setPanelChanged() {
            if (!this._panelChanged) {
                this._panelChanged = true;
                this.callLater(this.changePanel);
            }
        }
    }

    class Label extends UIComponent {
        constructor(text) {
            super();
            this._fitContent = "no";
            if (text != null)
                this.text = text;
        }
        createChildren() {
            this._tf = new Laya.Text();
            this._tf.hideFlags = Laya.HideFlags.HideAndDontSave;
            this._tf._parseEscapeChars = true;
            this._tf._onPostLayout = () => this._onPostLayout();
            this._tf.on(Laya.Event.CHANGE, () => {
                this.event(Laya.Event.CHANGE);
                if (!this._isWidthSet || !this._isHeightSet)
                    this.onCompResize();
            });
            this.addChild(this._tf);
        }
        _onPostLayout() {
            if ((this._fitContent == "yes" || this._fitContent == "height") && (Laya.LayaEnv.isPlaying || this._tf.textWidth > 0 && this._tf.textHeight > 0)) {
                this._fitFlag = true;
                if (this._fitContent == "height")
                    this.height = this._tf.textHeight;
                else
                    this.size(this._tf.textWidth, this._tf.textHeight);
                this._fitFlag = false;
            }
        }
        get text() {
            return this._tf.text;
        }
        set text(value) {
            this._tf.text = value;
        }
        get wordWrap() {
            return this._tf.wordWrap;
        }
        set wordWrap(value) {
            this._tf.wordWrap = value;
        }
        get color() {
            return this._tf.color;
        }
        set color(value) {
            this._tf.color = value;
        }
        get font() {
            return this._tf.font;
        }
        set font(value) {
            this._tf.font = value;
        }
        get align() {
            return this._tf.align;
        }
        set align(value) {
            this._tf.align = value;
        }
        get valign() {
            return this._tf.valign;
        }
        set valign(value) {
            this._tf.valign = value;
        }
        get bold() {
            return this._tf.bold;
        }
        set bold(value) {
            this._tf.bold = value;
        }
        get italic() {
            return this._tf.italic;
        }
        set italic(value) {
            this._tf.italic = value;
        }
        get leading() {
            return this._tf.leading;
        }
        set leading(value) {
            this._tf.leading = value;
        }
        get fontSize() {
            return this._tf.fontSize;
        }
        set fontSize(value) {
            this._tf.fontSize = value;
        }
        get padding() {
            return this._tf.padding.join(",");
        }
        set padding(value) {
            this._tf.padding = UIUtils.fillArray(Styles.labelPadding, value, Number);
        }
        get bgColor() {
            return this._tf.bgColor;
        }
        set bgColor(value) {
            this._tf.bgColor = value;
        }
        get borderColor() {
            return this._tf.borderColor;
        }
        set borderColor(value) {
            this._tf.borderColor = value;
        }
        get stroke() {
            return this._tf.stroke;
        }
        set stroke(value) {
            this._tf.stroke = value;
        }
        get strokeColor() {
            return this._tf.strokeColor;
        }
        set strokeColor(value) {
            this._tf.strokeColor = value;
        }
        get html() {
            return this._tf.html;
        }
        set html(value) {
            this._tf.html = value;
        }
        get ubb() {
            return this._tf.ubb;
        }
        set ubb(value) {
            this._tf.ubb = value;
        }
        get maxWidth() {
            return this._tf.maxWidth;
        }
        set maxWidth(value) {
            this._tf.maxWidth = value;
        }
        get fitContent() {
            return this._fitContent;
        }
        set fitContent(value) {
            if (typeof (value) === "boolean")
                value = value ? "yes" : "no";
            if (this._fitContent != value) {
                if ((value == "yes" || value == "height") && !Laya.SerializeUtil.isDeserializing && (Laya.LayaEnv.isPlaying || this._tf.textWidth > 0 && this._tf.textHeight > 0)) {
                    if (value == "height")
                        this.height = this._tf.textHeight;
                    else
                        this.size(this._tf.textWidth, this._tf.textHeight);
                }
                this._fitContent = value;
            }
        }
        get textField() {
            return this._tf;
        }
        measureWidth() {
            return this._tf.width;
        }
        measureHeight() {
            return this._tf.height;
        }
        get_width() {
            if (this._isWidthSet || this._tf.text)
                return super.get_width();
            return 0;
        }
        set_width(value) {
            if (this._fitContent == "yes" && !this._fitFlag)
                return;
            super.set_width(value);
        }
        _setWidth(value) {
            super._setWidth(value);
            this._tf.width = value;
        }
        get_height() {
            if (this._isHeightSet || this._tf.text)
                return super.get_height();
            return 0;
        }
        set_height(value) {
            if ((this._fitContent == "yes" || this._fitContent == "height") && !this._fitFlag)
                return;
            super.set_height(value);
        }
        _setHeight(value) {
            super._setHeight(value);
            this._tf.height = value;
        }
        set_dataSource(value) {
            this._dataSource = value;
            if (typeof (value) == 'number' || typeof (value) == 'string')
                this.text = value + "";
            else
                super.set_dataSource(value);
        }
        get overflow() {
            return this._tf.overflow;
        }
        set overflow(value) {
            this._tf.overflow = value;
        }
        get underline() {
            return this._tf.underline;
        }
        set underline(value) {
            this._tf.underline = value;
        }
        get underlineColor() {
            return this._tf.underlineColor;
        }
        set underlineColor(value) {
            this._tf.underlineColor = value;
        }
        get ignoreLang() {
            return this._tf.ignoreLang;
        }
        set ignoreLang(value) {
            this._tf.ignoreLang = value;
        }
        get templateVars() {
            return this._tf.templateVars;
        }
        set templateVars(value) {
            this._tf.templateVars = value;
        }
        setVar(name, value) {
            this._tf.setVar(name, value);
            return this;
        }
    }

    class Image extends UIComponent {
        constructor(skin = null) {
            super();
            this.skin = skin;
        }
        dispose() {
            this.destroy(true);
            Laya.ILaya.loader.clearRes(this._skin);
        }
        createChildren() {
            this.graphics = new AutoBitmap();
        }
        get skin() {
            return this._skin;
        }
        set skin(value) {
            if (value == "")
                value = null;
            if (this._skin == value)
                return;
            this._setSkin(value);
        }
        _setSkin(url) {
            this._skin = url;
            if (url) {
                if (this._skinBaseUrl)
                    url = Laya.URL.formatURL(url, this._skinBaseUrl);
                let source = Laya.Loader.getRes(url);
                if (source) {
                    this.source = source;
                    return Promise.resolve();
                }
                else {
                    let sk = this._skin;
                    return Laya.ILaya.loader.load(url, { type: Laya.Loader.IMAGE, group: this._group }).then(tex => {
                        if (sk == this._skin)
                            this.source = tex;
                    });
                }
            }
            else {
                this.source = null;
                return Promise.resolve();
            }
        }
        get source() {
            return this._graphics.source;
        }
        set source(value) {
            if (!this._graphics)
                return;
            this._graphics.source = value;
            this.event(Laya.Event.LOADED);
            this.repaint();
            if (this._useSourceSize && value) {
                this.size(value.sourceWidth, value.sourceHeight);
                this._useSourceSize = true;
            }
            else
                this.onCompResize();
        }
        get color() {
            return this._graphics.color;
        }
        set color(value) {
            this._graphics.color = value;
        }
        get group() {
            return this._group;
        }
        set group(value) {
            if (value && this._skin)
                Laya.Loader.setGroup(this._skin, value);
            this._group = value;
        }
        get useSourceSize() {
            return this._useSourceSize;
        }
        set useSourceSize(value) {
            if (this._useSourceSize != value) {
                if (value && this._graphics.source)
                    this.size(this._graphics.source.sourceWidth, this._graphics.source.sourceHeight);
                this._useSourceSize = value;
            }
        }
        measureWidth() {
            return this._graphics.width;
        }
        measureHeight() {
            return this._graphics.height;
        }
        _setWidth(value) {
            super._setWidth(value);
            this._graphics.width = value;
            if (!Laya.SerializeUtil.isDeserializing)
                this._useSourceSize = false;
        }
        _setHeight(value) {
            super._setHeight(value);
            this._graphics.height = value;
            if (!Laya.SerializeUtil.isDeserializing)
                this._useSourceSize = false;
        }
        get sizeGrid() {
            if (this._graphics.sizeGrid)
                return this._graphics.sizeGrid.join(",");
            return null;
        }
        set sizeGrid(value) {
            if (value)
                this._graphics.sizeGrid = UIUtils.fillArray(Styles.defaultSizeGrid, value, Number);
            else
                this._graphics.sizeGrid = null;
        }
        set_dataSource(value) {
            this._dataSource = value;
            if (typeof (value) == 'string')
                this.skin = value;
            else
                super.set_dataSource(value);
        }
    }

    class Slider extends UIComponent {
        constructor(skin = null) {
            super();
            this.isVertical = true;
            this.showLabel = true;
            this._max = 100;
            this._min = 0;
            this._tick = 1;
            this._value = 0;
            if (!Slider.label) {
                Slider.label = new Label();
                Slider.label.hideFlags = Laya.HideFlags.HideAndDontSave;
            }
            this.skin = skin;
        }
        destroy(destroyChild = true) {
            super.destroy(destroyChild);
            this._bg && this._bg.destroy(destroyChild);
            this._bar && this._bar.destroy(destroyChild);
            this._progress && this._progress.destroy(destroyChild);
            this._bg = null;
            this._bar = null;
            this._progress = null;
            this.changeHandler = null;
        }
        createChildren() {
            this._bg = new Image();
            this._bg.hideFlags = Laya.HideFlags.HideAndDontSave;
            this.addChild(this._bg);
            this._bar = new Button();
            this._bar.hideFlags = Laya.HideFlags.HideAndDontSave;
            this.addChild(this._bar);
        }
        initialize() {
            this._bar.on(Laya.Event.MOUSE_DOWN, this, this.onBarMouseDown);
            this.allowClickBack = true;
        }
        onBarMouseDown(e) {
            let stage = Laya.ILaya.stage;
            this._globalSacle || (this._globalSacle = new Laya.Point());
            this._globalSacle.setTo(this.globalScaleX || 0.01, this.globalScaleY || 0.01);
            this._maxMove = this.isVertical ? (this.height - this._bar.height) : (this.width - this._bar.width);
            this._tx = stage.mouseX;
            this._ty = stage.mouseY;
            stage.on(Laya.Event.MOUSE_MOVE, this, this.mouseMove);
            stage.once(Laya.Event.MOUSE_UP, this, this.mouseUp);
            stage.once(Laya.Event.MOUSE_OUT, this, this.mouseUp);
            this.showValueText();
        }
        showValueText() {
            if (this.showLabel) {
                var label = Slider.label;
                this.addChild(label);
                label.textField.text = this._value + "";
                if (this.isVertical) {
                    label.x = this._bar._x + 20;
                    label.y = (this._bar.height - label.height) * 0.5 + this._bar._y;
                }
                else {
                    label.y = this._bar._y - 20;
                    label.x = (this._bar.width - label.width) * 0.5 + this._bar._x;
                }
            }
        }
        hideValueText() {
            Slider.label && Slider.label.removeSelf();
        }
        mouseUp(e) {
            let stage = Laya.ILaya.stage;
            stage.off(Laya.Event.MOUSE_MOVE, this, this.mouseMove);
            stage.off(Laya.Event.MOUSE_UP, this, this.mouseUp);
            stage.off(Laya.Event.MOUSE_OUT, this, this.mouseUp);
            this.sendChangeEvent(Laya.Event.CHANGED);
            this.hideValueText();
        }
        mouseMove(e) {
            let stage = Laya.ILaya.stage;
            var oldValue = this._value;
            if (this.isVertical) {
                this._bar.y += (stage.mouseY - this._ty) / this._globalSacle.y;
                if (this._bar._y > this._maxMove)
                    this._bar.y = this._maxMove;
                else if (this._bar._y < 0)
                    this._bar.y = 0;
                this._value = this._bar._y / this._maxMove * (this._max - this._min) + this._min;
                if (this._progress)
                    this._progress.height = this._bar._y + 0.5 * this._bar.height;
            }
            else {
                this._bar.x += (stage.mouseX - this._tx) / this._globalSacle.x;
                if (this._bar._x > this._maxMove)
                    this._bar.x = this._maxMove;
                else if (this._bar._x < 0)
                    this._bar.x = 0;
                this._value = this._bar._x / this._maxMove * (this._max - this._min) + this._min;
                if (this._progress)
                    this._progress.width = this._bar._x + 0.5 * this._bar.width;
            }
            this._tx = stage.mouseX;
            this._ty = stage.mouseY;
            if (this._tick != 0) {
                var pow = Math.pow(10, (this._tick + "").length - 1);
                this._value = Math.round(Math.round(this._value / this._tick) * this._tick * pow) / pow;
            }
            if (this._value != oldValue) {
                this.sendChangeEvent();
            }
            this.showValueText();
        }
        sendChangeEvent(type = Laya.Event.CHANGE) {
            this.event(type);
            this.changeHandler && this.changeHandler.runWith(this._value);
        }
        get skin() {
            return this._skin;
        }
        set skin(value) {
            if (value == "")
                value = null;
            if (this._skin == value)
                return;
            this._setSkin(value);
        }
        _setSkin(url) {
            this._skin = url;
            if (url) {
                return Laya.AssetDb.inst.resolveURL(url).then(url => {
                    if (this._skinBaseUrl)
                        url = Laya.URL.formatURL(url, this._skinBaseUrl);
                    return Promise.all([
                        this._bg._setSkin(url),
                        this._bar._setSkin(Laya.Utils.replaceFileExtension(url, "$bar.png", true))
                    ]).then(() => this._skinLoaded());
                });
            }
            else {
                this._bg.skin = null;
                this._bar.skin = null;
                if (this._progress)
                    this._progress.skin = null;
                this._skinLoaded();
                return Promise.resolve();
            }
        }
        _skinLoaded() {
            var _a;
            let url = (_a = this._bg.source) === null || _a === void 0 ? void 0 : _a.url;
            if (url) {
                let progressSkin = Laya.Utils.replaceFileExtension(url, "$progress.png", true);
                if (Laya.Loader.getRes(progressSkin)) {
                    if (!this._progress) {
                        this._progress = new Image();
                        this._progress.hideFlags = Laya.HideFlags.HideAndDontSave;
                        this.addChildAt(this._progress, 1);
                    }
                    this._progress.skin = progressSkin;
                }
            }
            this.setBarPoint();
            this.callLater(this.changeValue);
            this._sizeChanged();
            this.event(Laya.Event.LOADED);
        }
        setBarPoint() {
            if (this.isVertical)
                this._bar.x = Math.round((this._bg.width - this._bar.width) * 0.5);
            else
                this._bar.y = Math.round((this._bg.height - this._bar.height) * 0.5);
        }
        measureWidth() {
            return Math.max(this._bg.width, this._bar.width);
        }
        measureHeight() {
            return Math.max(this._bg.height, this._bar.height);
        }
        _sizeChanged() {
            super._sizeChanged();
            if (this.isVertical)
                this._bg.height = this.height;
            else
                this._bg.width = this.width;
            this.setBarPoint();
            this.changeValue();
        }
        get sizeGrid() {
            return this._bg.sizeGrid;
        }
        set sizeGrid(value) {
            this._bg.sizeGrid = value;
            this._bar.sizeGrid = value;
            if (this._progress)
                this._progress.sizeGrid = this._bar.sizeGrid;
        }
        setSlider(min, max, value) {
            this._value = -1;
            this._min = min;
            this._max = max > min ? max : min;
            this.value = value < min ? min : value > max ? max : value;
        }
        get tick() {
            return this._tick;
        }
        set tick(value) {
            if (this._tick != value) {
                this._tick = value;
                this.callLater(this.changeValue);
            }
        }
        changeValue() {
            if (this.tick != 0) {
                var pow = Math.pow(10, (this._tick + "").length - 1);
                this._value = Math.round(Math.round(this._value / this._tick) * this._tick * pow) / pow;
            }
            if (this._max >= this._min) {
                this._value = this._value > this._max ? this._max : this._value < this._min ? this._min : this._value;
            }
            else {
                this._value = this._value > this._min ? this._min : this._value < this._max ? this._max : this._value;
            }
            var num = this._max - this._min;
            if (num === 0)
                num = 1;
            if (this.isVertical) {
                this._bar.y = (this._value - this._min) / num * (this.height - this._bar.height);
                if (this._progress)
                    this._progress.height = this._bar._y + 0.5 * this._bar.height;
            }
            else {
                this._bar.x = (this._value - this._min) / num * (this.width - this._bar.width);
                if (this._progress)
                    this._progress.width = this._bar._x + 0.5 * this._bar.width;
            }
        }
        get max() {
            return this._max;
        }
        set max(value) {
            if (this._max != value) {
                this._max = value;
                this.callLater(this.changeValue);
            }
        }
        get min() {
            return this._min;
        }
        set min(value) {
            if (this._min != value) {
                this._min = value;
                this.callLater(this.changeValue);
            }
        }
        get value() {
            return this._value;
        }
        set value(num) {
            if (this._value != num) {
                var oldValue = this._value;
                this._value = num;
                this.changeValue();
                if (this._value != oldValue) {
                    this.sendChangeEvent();
                }
            }
        }
        get allowClickBack() {
            return this._allowClickBack;
        }
        set allowClickBack(value) {
            if (this._allowClickBack != value) {
                this._allowClickBack = value;
                if (value)
                    this._bg.on(Laya.Event.MOUSE_DOWN, this, this.onBgMouseDown);
                else
                    this._bg.off(Laya.Event.MOUSE_DOWN, this, this.onBgMouseDown);
            }
        }
        onBgMouseDown(e) {
            var point = this._bg.getMousePoint();
            if (this.isVertical)
                this.value = point.y / (this.height - this._bar.height) * (this._max - this._min) + this._min;
            else
                this.value = point.x / (this.width - this._bar.width) * (this._max - this._min) + this._min;
        }
        set_dataSource(value) {
            this._dataSource = value;
            if (typeof (value) == 'number' || typeof (value) == 'string')
                this.value = Number(value);
            else
                super.set_dataSource(value);
        }
        get bar() {
            return this._bar;
        }
    }
    Slider.label = null;

    class ScrollBar extends UIComponent {
        constructor(skin = null) {
            super();
            this.rollRatio = 0.97;
            this.scaleBar = true;
            this.autoHide = false;
            this.elasticDistance = 0;
            this.elasticBackTime = 500;
            this.topMoveLimit = 0;
            this.bottomMoveLimit = 0;
            this.disableDrag = false;
            this._scrollSize = 1;
            this._thumbPercent = 1;
            this._lastOffset = 0;
            this._checkElastic = false;
            this._isElastic = false;
            this._hide = false;
            this._clickOnly = true;
            this._showButtons = UIConfig.showButtons;
            this._touchScrollEnable = UIConfig.touchScrollEnable;
            this._mouseWheelEnable = UIConfig.mouseWheelEnable;
            this.skin = skin;
            this.max = 1;
        }
        destroy(destroyChild = true) {
            this.stopScroll();
            this.target = null;
            super.destroy(destroyChild);
            this.upButton && this.upButton.destroy(destroyChild);
            this.downButton && this.downButton.destroy(destroyChild);
            this.slider && this.slider.destroy(destroyChild);
            this.upButton = this.downButton = null;
            this.slider = null;
            this.changeHandler = null;
            this._offsets = null;
        }
        createChildren() {
            this.slider = new Slider();
            this.slider.hideFlags = Laya.HideFlags.HideAndDontSave;
            this.addChild(this.slider);
            this.upButton = new Button();
            this.upButton.hideFlags = Laya.HideFlags.HideAndDontSave;
            this.addChild(this.upButton);
            this.downButton = new Button();
            this.downButton.hideFlags = Laya.HideFlags.HideAndDontSave;
            this.addChild(this.downButton);
        }
        initialize() {
            this.slider.showLabel = false;
            this.slider.tick = 0;
            this.slider.on(Laya.Event.CHANGE, this, this.onSliderChange);
            this.slider.setSlider(0, 0, 0);
            this.upButton.on(Laya.Event.MOUSE_DOWN, this, this.onButtonMouseDown);
            this.downButton.on(Laya.Event.MOUSE_DOWN, this, this.onButtonMouseDown);
        }
        onSliderChange() {
            if (this._value != this.slider.value)
                this.value = this.slider.value;
        }
        onButtonMouseDown(e) {
            var isUp = e.currentTarget === this.upButton;
            this.slide(isUp);
            Laya.ILaya.timer.once(Styles.scrollBarDelayTime, this, this.startLoop, [isUp]);
            Laya.ILaya.stage.once(Laya.Event.MOUSE_UP, this, this.onStageMouseUp);
        }
        startLoop(isUp) {
            Laya.ILaya.timer.frameLoop(1, this, this.slide, [isUp]);
        }
        slide(isUp) {
            if (isUp)
                this.value -= this._scrollSize;
            else
                this.value += this._scrollSize;
        }
        onStageMouseUp(e) {
            Laya.ILaya.timer.clear(this, this.startLoop);
            Laya.ILaya.timer.clear(this, this.slide);
        }
        get skin() {
            return this._skin;
        }
        set skin(value) {
            if (value == "")
                value = null;
            if (this._skin == value)
                return;
            this._setSkin(value);
        }
        _setSkin(url) {
            this._skin = url;
            if (url) {
                return Laya.AssetDb.inst.resolveURL(url).then(url => {
                    if (this._skinBaseUrl)
                        url = Laya.URL.formatURL(url, this._skinBaseUrl);
                    return Promise.all([
                        this.slider._setSkin(url),
                        this.upButton._setSkin(Laya.Utils.replaceFileExtension(url, "$up.png", true)),
                        this.downButton._setSkin(Laya.Utils.replaceFileExtension(url, "$down.png", true))
                    ]).then(() => this._skinLoaded());
                });
            }
            else {
                this.slider.skin = null;
                this.upButton.skin = null;
                this.downButton.skin = null;
                this._skinLoaded();
                return Promise.resolve();
            }
        }
        _skinLoaded() {
            if (this._destroyed)
                return;
            this.callLater(this.changeScrollBar);
            this._sizeChanged();
            this.event(Laya.Event.LOADED);
        }
        changeScrollBar() {
            this.upButton.visible = this._showButtons;
            this.downButton.visible = this._showButtons;
            if (this.slider.isVertical)
                this.slider.y = this._showButtons ? this.upButton.height : 0;
            else
                this.slider.x = this._showButtons ? this.upButton.width : 0;
            this.resetPositions();
            this.repaint();
        }
        _sizeChanged() {
            super._sizeChanged();
            this.repaint();
            this.resetPositions();
            this.event(Laya.Event.CHANGE);
            this.changeHandler && this.changeHandler.runWith(this.value);
        }
        resetPositions() {
            if (this.slider.isVertical)
                this.slider.height = this.height - (this._showButtons ? (this.upButton.height + this.downButton.height) : 0);
            else
                this.slider.width = this.width - (this._showButtons ? (this.upButton.width + this.downButton.width) : 0);
            this.resetButtonPosition();
        }
        resetButtonPosition() {
            if (this.slider.isVertical)
                this.downButton.y = this.slider._y + this.slider.height;
            else
                this.downButton.x = this.slider._x + this.slider.width;
        }
        measureWidth() {
            if (this.slider.isVertical)
                return this.slider.width;
            return 100;
        }
        measureHeight() {
            if (this.slider.isVertical)
                return 100;
            return this.slider.height;
        }
        setScroll(min, max, value) {
            this.runCallLater(this._sizeChanged);
            this.slider.setSlider(min, max, value);
            this.slider.bar.visible = max > 0;
            if (!this._hide && this.autoHide)
                this.visible = false;
        }
        get max() {
            return this.slider.max;
        }
        set max(value) {
            this.slider.max = value;
        }
        get min() {
            return this.slider.min;
        }
        set min(value) {
            this.slider.min = value;
        }
        get value() {
            return this._value;
        }
        set value(v) {
            if (v !== this._value) {
                this._value = v;
                if (!this._isElastic) {
                    if (this.slider["_value"] != v) {
                        this.slider["_value"] = v;
                        this.slider.changeValue();
                    }
                    this._value = this.slider["_value"];
                }
                this.event(Laya.Event.CHANGE);
                this.changeHandler && this.changeHandler.runWith(this._value);
            }
        }
        get isVertical() {
            return this.slider.isVertical;
        }
        set isVertical(value) {
            this.slider.isVertical = value;
        }
        get sizeGrid() {
            return this.slider.sizeGrid;
        }
        set sizeGrid(value) {
            this.slider.sizeGrid = value;
        }
        get scrollSize() {
            return this._scrollSize;
        }
        set scrollSize(value) {
            this._scrollSize = value;
        }
        set_dataSource(value) {
            this._dataSource = value;
            if (typeof (value) == 'number' || typeof (value) == 'string')
                this.value = Number(value);
            else
                super.set_dataSource(value);
        }
        get thumbPercent() {
            return this._thumbPercent;
        }
        set thumbPercent(value) {
            this.runCallLater(this.changeScrollBar);
            this.runCallLater(this._sizeChanged);
            value = value >= 1 ? 0.99 : value;
            this._thumbPercent = value;
            if (this.scaleBar) {
                if (this.slider.isVertical)
                    this.slider.bar.height = Math.max(this.slider.height * value, Styles.scrollBarMinNum);
                else
                    this.slider.bar.width = Math.max(this.slider.width * value, Styles.scrollBarMinNum);
            }
        }
        get target() {
            return this._target;
        }
        set target(value) {
            if (this._target) {
                this._target.off(Laya.Event.MOUSE_WHEEL, this, this.onTargetMouseWheel);
                this._target.off(Laya.Event.MOUSE_DOWN, this, this.onTargetMouseDown);
            }
            this._target = value;
            if (value) {
                this._mouseWheelEnable && this._target.on(Laya.Event.MOUSE_WHEEL, this, this.onTargetMouseWheel);
                this._touchScrollEnable && this._target.on(Laya.Event.MOUSE_DOWN, this, this.onTargetMouseDown);
            }
        }
        get hide() {
            return this._hide;
        }
        set hide(value) {
            this._hide = value;
            this.visible = !value;
        }
        get showButtons() {
            return this._showButtons;
        }
        set showButtons(value) {
            this._showButtons = value;
            this.callLater(this.changeScrollBar);
        }
        get touchScrollEnable() {
            return this._touchScrollEnable;
        }
        set touchScrollEnable(value) {
            this._touchScrollEnable = value;
            this.target = this._target;
        }
        get mouseWheelEnable() {
            return this._mouseWheelEnable;
        }
        set mouseWheelEnable(value) {
            this._mouseWheelEnable = value;
            this.target = this._target;
        }
        onTargetMouseWheel(e) {
            this.value += e.delta * this._scrollSize;
            this.target = this._target;
        }
        onTargetMouseDown(e) {
            if ((this.isLockedFun) && !this.isLockedFun(e))
                return;
            this.event(Laya.Event.END);
            this._clickOnly = true;
            this._lastOffset = 0;
            this._checkElastic = false;
            this._lastPoint || (this._lastPoint = new Laya.Point());
            this._lastPoint.setTo(Laya.ILaya.stage.mouseX, Laya.ILaya.stage.mouseY);
            Laya.ILaya.timer.clear(this, this.tweenMove);
            Laya.Tween.clearTween(this);
            Laya.ILaya.stage.once(Laya.Event.MOUSE_UP, this, this.onStageMouseUp2);
            Laya.ILaya.stage.once(Laya.Event.MOUSE_OUT, this, this.onStageMouseUp2);
            Laya.ILaya.timer.frameLoop(1, this, this.loop);
        }
        startDragForce() {
            this._clickOnly = true;
            this._lastOffset = 0;
            this._checkElastic = false;
            this._lastPoint || (this._lastPoint = new Laya.Point());
            this._lastPoint.setTo(Laya.ILaya.stage.mouseX, Laya.ILaya.stage.mouseY);
            Laya.ILaya.timer.clear(this, this.tweenMove);
            Laya.Tween.clearTween(this);
            Laya.ILaya.stage.once(Laya.Event.MOUSE_UP, this, this.onStageMouseUp2);
            Laya.ILaya.stage.once(Laya.Event.MOUSE_OUT, this, this.onStageMouseUp2);
            Laya.ILaya.timer.frameLoop(1, this, this.loop);
        }
        cancelDragOp() {
            Laya.ILaya.stage.off(Laya.Event.MOUSE_UP, this, this.onStageMouseUp2);
            Laya.ILaya.stage.off(Laya.Event.MOUSE_OUT, this, this.onStageMouseUp2);
            Laya.ILaya.timer.clear(this, this.tweenMove);
            Laya.ILaya.timer.clear(this, this.loop);
            this._target.mouseEnabled = true;
        }
        checkTriggers(isTweenMove = false) {
            if (this.value >= 0 && this.value - this._lastOffset <= 0) {
                if ((this.triggerDownDragLimit) && this.triggerDownDragLimit(isTweenMove)) {
                    this.cancelDragOp();
                    this.value = 0;
                    return true;
                }
            }
            if (this.value <= this.max && (this.value - this._lastOffset >= this.max)) {
                if ((this.triggerUpDragLimit) && this.triggerUpDragLimit(isTweenMove)) {
                    this.cancelDragOp();
                    this.value = this.max;
                    return true;
                }
            }
            return false;
        }
        get lastOffset() {
            return this._lastOffset;
        }
        startTweenMoveForce(lastOffset) {
            this._lastOffset = lastOffset;
            Laya.ILaya.timer.frameLoop(1, this, this.tweenMove, [200]);
        }
        loop() {
            if (this.disableDrag)
                return;
            var mouseY = Laya.ILaya.stage.mouseY;
            var mouseX = Laya.ILaya.stage.mouseX;
            this._lastOffset = this.isVertical ? (mouseY - this._lastPoint.y) : (mouseX - this._lastPoint.x);
            if (this._clickOnly) {
                if (Math.abs(this._lastOffset * (this.isVertical ? Laya.ILaya.stage._canvasTransform.getScaleY() : Laya.ILaya.stage._canvasTransform.getScaleX())) > 1) {
                    this._clickOnly = false;
                    if (this.checkTriggers())
                        return;
                    this._offsets || (this._offsets = []);
                    this._offsets.length = 0;
                    this._target.mouseEnabled = false;
                    if (!this.hide && this.autoHide) {
                        this.alpha = 1;
                        this.visible = true;
                    }
                    this.event(Laya.Event.START);
                }
                else
                    return;
            }
            else {
                if (this.checkTriggers())
                    return;
            }
            this._offsets.push(this._lastOffset);
            this._lastPoint.x = mouseX;
            this._lastPoint.y = mouseY;
            if (this._lastOffset === 0)
                return;
            if (!this._checkElastic) {
                if (this.elasticDistance > 0) {
                    if (!this._checkElastic && this._lastOffset != 0) {
                        if ((this._lastOffset > 0 && this._value <= this.min) || (this._lastOffset < 0 && this._value >= this.max)) {
                            this._isElastic = true;
                            this._checkElastic = true;
                        }
                        else {
                            this._isElastic = false;
                        }
                    }
                }
                else {
                    this._checkElastic = true;
                }
            }
            if (this._isElastic) {
                if (this._value <= this.min) {
                    if (this._lastOffset > 0) {
                        this.value -= this._lastOffset * Math.max(0, (1 - ((this.min - this._value) / this.elasticDistance)));
                    }
                    else {
                        this.value -= this._lastOffset * 0.5;
                        if (this._value >= this.min)
                            this._checkElastic = false;
                    }
                }
                else if (this._value >= this.max) {
                    if (this._lastOffset < 0) {
                        this.value -= this._lastOffset * Math.max(0, (1 - ((this._value - this.max) / this.elasticDistance)));
                    }
                    else {
                        this.value -= this._lastOffset * 0.5;
                        if (this._value <= this.max)
                            this._checkElastic = false;
                    }
                }
            }
            else {
                this.value -= this._lastOffset;
            }
        }
        onStageMouseUp2(e) {
            Laya.ILaya.stage.off(Laya.Event.MOUSE_UP, this, this.onStageMouseUp2);
            Laya.ILaya.stage.off(Laya.Event.MOUSE_OUT, this, this.onStageMouseUp2);
            Laya.ILaya.timer.clear(this, this.loop);
            if (this._clickOnly) {
                if (this._value >= this.min && this._value <= this.max)
                    return;
            }
            this._target.mouseEnabled = true;
            if (this._isElastic) {
                if (this._value < this.min) {
                    this.event("dragTopLimit");
                    var moveValue = (this.stopMoveLimit && this.stopMoveLimit()) ? (this.min - this.topMoveLimit) : this.min;
                    Laya.Tween.to(this, { value: moveValue }, this.elasticBackTime, Laya.Ease.sineOut, Laya.Handler.create(this, this.elasticOver));
                }
                else if (this._value > this.max) {
                    this.event("dragBottomLimit");
                    var moveValue = (this.stopMoveLimit && this.stopMoveLimit()) ? (this.max + this.bottomMoveLimit) : this.max;
                    Laya.Tween.to(this, { value: moveValue }, this.elasticBackTime, Laya.Ease.sineOut, Laya.Handler.create(this, this.elasticOver));
                }
            }
            else {
                if (!this._offsets)
                    return;
                if (this._offsets.length < 1) {
                    this._offsets[0] = this.isVertical ? Laya.ILaya.stage.mouseY - this._lastPoint.y : Laya.ILaya.stage.mouseX - this._lastPoint.x;
                }
                var offset = 0;
                var n = Math.min(this._offsets.length, 3);
                for (var i = 0; i < n; i++) {
                    offset += this._offsets[this._offsets.length - 1 - i];
                }
                this._lastOffset = offset / n;
                offset = Math.abs(this._lastOffset);
                if (offset < 2) {
                    this.event(Laya.Event.END);
                    return;
                }
                if (offset > 250)
                    this._lastOffset = this._lastOffset > 0 ? 250 : -250;
                var dis = Math.round(Math.abs(this.elasticDistance * (this._lastOffset / 150)));
                Laya.ILaya.timer.frameLoop(1, this, this.tweenMove, [dis]);
            }
        }
        elasticOver() {
            this._isElastic = false;
            if (!this.hide && this.autoHide) {
                Laya.Tween.to(this, { alpha: 0 }, 500);
            }
            this.event(Laya.Event.END);
        }
        tweenMove(maxDistance) {
            this._lastOffset *= this.rollRatio;
            if (this.checkTriggers(true)) {
                return;
            }
            var tarSpeed;
            if (maxDistance > 0) {
                if (this._lastOffset > 0 && this.value <= this.min) {
                    this._isElastic = true;
                    tarSpeed = -(this.min - maxDistance - this.value) * 0.5;
                    if (this._lastOffset > tarSpeed)
                        this._lastOffset = tarSpeed;
                }
                else if (this._lastOffset < 0 && this.value >= this.max) {
                    this._isElastic = true;
                    tarSpeed = -(this.max + maxDistance - this.value) * 0.5;
                    if (this._lastOffset < tarSpeed)
                        this._lastOffset = tarSpeed;
                }
            }
            this.value -= this._lastOffset;
            if (Math.abs(this._lastOffset) < 0.1) {
                Laya.ILaya.timer.clear(this, this.tweenMove);
                if (this._isElastic) {
                    if (this._value < this.min) {
                        Laya.Tween.to(this, { value: this.min }, this.elasticBackTime, Laya.Ease.sineOut, Laya.Handler.create(this, this.elasticOver));
                    }
                    else if (this._value > this.max) {
                        Laya.Tween.to(this, { value: this.max }, this.elasticBackTime, Laya.Ease.sineOut, Laya.Handler.create(this, this.elasticOver));
                    }
                    else {
                        this.elasticOver();
                    }
                    return;
                }
                this.event(Laya.Event.END);
                if (!this.hide && this.autoHide) {
                    Laya.Tween.to(this, { alpha: 0 }, 500);
                }
            }
        }
        stopScroll() {
            this.onStageMouseUp2(null);
            Laya.ILaya.timer.clear(this, this.tweenMove);
            Laya.Tween.clearTween(this);
        }
        get tick() {
            return this.slider.tick;
        }
        set tick(value) {
            this.slider.tick = value;
        }
        backToNormal() {
            if (this._value < this.min) {
                this._backToNormal(this.min);
            }
            else if (this._value > this.max) {
                this._backToNormal(this.max);
            }
        }
        _backToNormal(value) {
            Laya.Tween.to(this, { value: value }, this.elasticBackTime, Laya.Ease.sineOut, Laya.Handler.create(this, this.elasticOver));
        }
    }

    class VScrollBar extends ScrollBar {
    }

    class HScrollBar extends ScrollBar {
        initialize() {
            super.initialize();
            this.slider.isVertical = false;
        }
    }

    class List extends Box {
        constructor() {
            super(...arguments);
            this.selectEnable = false;
            this.totalPage = 0;
            this.disableStopScroll = false;
            this._repeatX = 0;
            this._repeatY = 0;
            this._repeatX2 = 0;
            this._repeatY2 = 0;
            this._spaceX = 0;
            this._spaceY = 0;
            this._cells = [];
            this._startIndex = 0;
            this._selectedIndex = -1;
            this._page = 0;
            this._isVertical = true;
            this._cellSize = 20;
            this._cellOffset = 0;
            this._createdLine = 0;
            this._offset = new Laya.Point();
            this._usedCache = null;
            this._elasticEnabled = false;
            this._scrollType = 0;
            this._preLen = 0;
        }
        destroy(destroyChild = true) {
            this._content && this._content.destroy(destroyChild);
            this._scrollBar && this._scrollBar.destroy(destroyChild);
            super.destroy(destroyChild);
            this._content = null;
            this._scrollBar = null;
            this._itemRender = null;
            this._cells = null;
            this._array = null;
            this.selectHandler = this.renderHandler = this.mouseHandler = null;
        }
        createChildren() {
            this._content = new Box();
            this._content.hideFlags = Laya.HideFlags.HideAndDontSave;
            this.addChild(this._content);
        }
        set cacheAs(value) {
            super.cacheAs = value;
            if (this._scrollBar) {
                this._usedCache = null;
                if (value !== "none")
                    this._scrollBar.on(Laya.Event.START, this, this.onScrollStart);
                else
                    this._scrollBar.off(Laya.Event.START, this, this.onScrollStart);
            }
        }
        get cacheAs() {
            return super.cacheAs;
        }
        onScrollStart() {
            this._usedCache || (this._usedCache = super.cacheAs);
            super.cacheAs = "none";
            this._scrollBar.once(Laya.Event.END, this, this.onScrollEnd);
        }
        onScrollEnd() {
            super.cacheAs = this._usedCache || 'none';
        }
        get content() {
            return this._content;
        }
        get scrollType() {
            return this._scrollType;
        }
        set scrollType(value) {
            this._scrollType = value;
            if (this._scrollType == exports.ScrollType.None) {
                if (this._scrollBar) {
                    this._scrollBar.destroy();
                    this._scrollBar = null;
                    this._content.scrollRect = null;
                }
            }
            else if (this._scrollType == exports.ScrollType.Horizontal) {
                if (this._scrollBar && !this._scrollBar.isVertical) {
                    this._scrollBar.skin = this._hScrollBarSkin;
                    return;
                }
                if (this._scrollBar) {
                    this._scrollBar.destroy();
                    this._scrollBar = null;
                }
                let scrollBar = new HScrollBar();
                scrollBar.name = "scrollBar";
                scrollBar.bottom = 0;
                scrollBar._skinBaseUrl = this._skinBaseUrl;
                scrollBar.skin = this._hScrollBarSkin;
                scrollBar.elasticDistance = this._elasticEnabled ? 200 : 0;
                scrollBar.hideFlags = Laya.HideFlags.HideAndDontSave;
                this.scrollBar = scrollBar;
                this._setCellChanged();
            }
            else {
                if (this._scrollBar && this._scrollBar.isVertical) {
                    this._scrollBar.skin = this._vScrollBarSkin;
                    return;
                }
                if (this._scrollBar) {
                    this._scrollBar.destroy();
                    this._scrollBar = null;
                }
                let scrollBar = new VScrollBar();
                scrollBar.name = "scrollBar";
                scrollBar.right = 0;
                scrollBar._skinBaseUrl = this._skinBaseUrl;
                scrollBar.skin = this._vScrollBarSkin;
                scrollBar.elasticDistance = this._elasticEnabled ? 200 : 0;
                scrollBar.hideFlags = Laya.HideFlags.HideAndDontSave;
                this.scrollBar = scrollBar;
                this._setCellChanged();
            }
        }
        get vScrollBarSkin() {
            return this._vScrollBarSkin;
        }
        set vScrollBarSkin(value) {
            if (value == "")
                value = null;
            if (this._vScrollBarSkin != value) {
                this._vScrollBarSkin = value;
                if (this._scrollType == 0)
                    this.scrollType = exports.ScrollType.Vertical;
                else
                    this.scrollType = this._scrollType;
            }
        }
        get hScrollBarSkin() {
            return this._hScrollBarSkin;
        }
        set hScrollBarSkin(value) {
            if (value == "")
                value = null;
            if (this._hScrollBarSkin != value) {
                this._hScrollBarSkin = value;
                if (this._scrollType == 0)
                    this.scrollType = exports.ScrollType.Horizontal;
                else
                    this.scrollType = this._scrollType;
            }
        }
        get scrollBar() {
            return this._scrollBar;
        }
        set scrollBar(value) {
            if (this._scrollBar != value) {
                this._scrollBar = value;
                if (value) {
                    this._isVertical = this._scrollBar.isVertical;
                    this._scrollBar.target = this._content;
                    this._scrollBar.on(Laya.Event.CHANGE, this, this.onScrollBarChange);
                    this.addChild(this._scrollBar);
                    this._content.scrollRect = Laya.Rectangle.create();
                }
            }
        }
        get itemRender() {
            return this._itemRender;
        }
        set itemRender(value) {
            if (this._itemRender != value) {
                this._itemRender = value;
                for (let i = this._cells.length - 1; i > -1; i--) {
                    this._cells[i].destroy();
                }
                this._cells.length = 0;
                this._setCellChanged();
            }
        }
        _setWidth(value) {
            super._setWidth(value);
            this._setCellChanged();
        }
        _setHeight(value) {
            super._setWidth(value);
            this._setCellChanged();
        }
        get repeatX() {
            return this._repeatX > 0 ? this._repeatX : this._repeatX2 > 0 ? this._repeatX2 : 1;
        }
        set repeatX(value) {
            this._repeatX = value;
            this._setCellChanged();
        }
        get repeatY() {
            return this._repeatY > 0 ? this._repeatY : this._repeatY2 > 0 ? this._repeatY2 : 1;
        }
        set repeatY(value) {
            this._repeatY = value;
            this._setCellChanged();
        }
        get spaceX() {
            return this._spaceX;
        }
        set spaceX(value) {
            this._spaceX = value;
            this._setCellChanged();
        }
        get spaceY() {
            return this._spaceY;
        }
        set spaceY(value) {
            this._spaceY = value;
            this._setCellChanged();
        }
        changeCells() {
            this._cellChanged = false;
            if (this._itemRender) {
                this.scrollBar = this.getChildByName("scrollBar");
                let cell = this._getOneCell();
                let cellWidth = (cell.width + this._spaceX) || 1;
                let cellHeight = (cell.height + this._spaceY) || 1;
                if (this._width > 0)
                    this._repeatX2 = this._isVertical ? Math.round(this._width / cellWidth) : Math.ceil(this._width / cellWidth);
                if (this._height > 0)
                    this._repeatY2 = this._isVertical ? Math.ceil(this._height / cellHeight) : Math.round(this._height / cellHeight);
                let listWidth = this._isWidthSet ? this._width : (cellWidth * this.repeatX - this._spaceX);
                let listHeight = this._isHeightSet ? this._height : (cellHeight * this.repeatY - this._spaceY);
                this._cellSize = this._isVertical ? cellHeight : cellWidth;
                this._cellOffset = this._isVertical ? (cellHeight * Math.max(this._repeatY2, this._repeatY) - listHeight - this._spaceY) : (cellWidth * Math.max(this._repeatX2, this._repeatX) - listWidth - this._spaceX);
                if (this._scrollBar) {
                    if (this._isVertical)
                        this._scrollBar.height = listHeight;
                    else
                        this._scrollBar.width = listWidth;
                }
                this.setContentSize(listWidth, listHeight);
                let numX = this._isVertical ? this.repeatX : this.repeatY;
                let numY = (this._isVertical ? this.repeatY : this.repeatX) + (this._scrollBar ? 1 : 0);
                this._createItems(0, numX, numY);
                this._createdLine = numY;
                if (this._array) {
                    this.array = this._array;
                    this.runCallLater(this.renderItems);
                }
                else
                    this.changeSelectStatus();
            }
        }
        _getOneCell() {
            if (this._cells.length === 0) {
                let item = this.createItem();
                this._offset.setTo(item._x, item._y);
                if (this.cacheContent)
                    return item;
                this._cells.push(item);
            }
            return this._cells[0];
        }
        _createItems(startY, numX, numY) {
            let box = this._content;
            let cell = this._getOneCell();
            let cellWidth = cell.width + this._spaceX;
            let cellHeight = cell.height + this._spaceY;
            let arr;
            if (this.cacheContent) {
                let cacheBox = new Box();
                cacheBox.hideFlags = Laya.HideFlags.HideAndDontSave;
                cacheBox.cacheAs = "normal";
                cacheBox.pos((this._isVertical ? 0 : startY) * cellWidth, (this._isVertical ? startY : 0) * cellHeight);
                this._content.addChild(cacheBox);
                box = cacheBox;
            }
            else {
                arr = [];
                for (let i = this._cells.length - 1; i > -1; i--) {
                    let item = this._cells[i];
                    item.removeSelf();
                    arr.push(item);
                }
                this._cells.length = 0;
            }
            for (let k = startY; k < numY; k++) {
                for (let l = 0; l < numX; l++) {
                    if (arr && arr.length) {
                        cell = arr.pop();
                    }
                    else {
                        cell = this.createItem();
                        cell.hideFlags = Laya.HideFlags.HideAndDontSave;
                    }
                    cell.x = (this._isVertical ? l : k) * cellWidth - box._x;
                    cell.y = (this._isVertical ? k : l) * cellHeight - box._y;
                    cell.name = "item" + (k * numX + l);
                    box.addChild(cell);
                    this.addCell(cell);
                }
            }
        }
        createItem() {
            let arr = [];
            let box;
            if (typeof (this._itemRender) == "function") {
                box = new this._itemRender();
                box._skinBaseUrl = this._skinBaseUrl;
            }
            else {
                if (this._itemRender._$type || this._itemRender._$prefab)
                    box = Laya.HierarchyParser.parse(this._itemRender, { skinBaseUrl: this._skinBaseUrl })[0];
                else
                    box = Laya.LegacyUIParser.createComp(this._itemRender, null, null, arr);
                if (!box) {
                    console.warn("cannot create item");
                    box = new Box();
                }
            }
            box.hideFlags = Laya.HideFlags.HideAndDontSave;
            if (arr.length == 0 && box["_watchMap"]) {
                let watchMap = box["_watchMap"];
                for (let name in watchMap) {
                    let a = watchMap[name];
                    for (let i = 0; i < a.length; i++) {
                        let watcher = a[i];
                        arr.push(watcher.comp, watcher.prop, watcher.value);
                    }
                }
            }
            if (arr.length)
                box["_$bindData"] = arr;
            return box;
        }
        addCell(cell) {
            cell.on(Laya.Event.CLICK, this, this.onCellMouse);
            cell.on(Laya.Event.RIGHT_CLICK, this, this.onCellMouse);
            cell.on(Laya.Event.MOUSE_OVER, this, this.onCellMouse);
            cell.on(Laya.Event.MOUSE_OUT, this, this.onCellMouse);
            cell.on(Laya.Event.MOUSE_DOWN, this, this.onCellMouse);
            cell.on(Laya.Event.MOUSE_UP, this, this.onCellMouse);
            this._cells.push(cell);
        }
        onAfterDeserialize() {
            super.onAfterDeserialize();
            this.initItems();
        }
        _afterInited() {
            this.initItems();
        }
        initItems() {
            if (!this._itemRender && this.getChildByName("item0") != null) {
                this.repeatX = 1;
                let count;
                count = 0;
                for (let i = 0; i < 10000; i++) {
                    let cell = this.getChildByName("item" + i);
                    if (cell) {
                        this.addCell(cell);
                        count++;
                        continue;
                    }
                    break;
                }
                this.repeatY = count;
            }
        }
        setContentSize(width, height) {
            this._content.width = width;
            this._content.height = height;
            if (this._scrollBar) {
                let r = this._content.scrollRect;
                if (!r)
                    r = Laya.Rectangle.create();
                r.setTo(-this._offset.x, -this._offset.y, width, height);
                this._content.scrollRect = r;
            }
            this.event(Laya.Event.RESIZE);
        }
        onCellMouse(e) {
            if (e.type === Laya.Event.MOUSE_DOWN)
                this._isMoved = false;
            let cell = e.currentTarget;
            let index = this._startIndex + this._cells.indexOf(cell);
            if (index < 0)
                return;
            if (e.type === Laya.Event.CLICK || e.type === Laya.Event.RIGHT_CLICK) {
                if (this.selectEnable && !this._isMoved)
                    this.selectedIndex = index;
                else
                    this.changeCellState(cell, true, 0);
            }
            else if ((e.type === Laya.Event.MOUSE_OVER || e.type === Laya.Event.MOUSE_OUT) && this._selectedIndex !== index) {
                this.changeCellState(cell, e.type === Laya.Event.MOUSE_OVER, 0);
            }
            this.mouseHandler && this.mouseHandler.runWith([e, index]);
        }
        changeCellState(cell, visible, index) {
            let selectBox = cell.getChildByName("selectBox");
            if (selectBox) {
                this.selectEnable = true;
                selectBox.visible = visible;
                selectBox.index = index;
            }
        }
        _sizeChanged() {
            super._sizeChanged();
            this.setContentSize(this.width, this.height);
            if (this._scrollBar)
                this.callLater(this.onScrollBarChange);
        }
        onScrollBarChange(e = null) {
            this.runCallLater(this.changeCells);
            let scrollValue = this._scrollBar.value;
            let lineX = (this._isVertical ? this.repeatX : this.repeatY);
            let lineY = (this._isVertical ? this.repeatY : this.repeatX);
            let scrollLine = Math.floor(scrollValue / this._cellSize);
            if (!this.cacheContent) {
                let index = scrollLine * lineX;
                let num = 0;
                let down = true;
                let toIndex = 0;
                if (index > this._startIndex) {
                    num = index - this._startIndex;
                    toIndex = this._startIndex + lineX * (lineY + 1);
                    this._isMoved = true;
                }
                else if (index < this._startIndex) {
                    num = this._startIndex - index;
                    down = false;
                    toIndex = this._startIndex - 1;
                    this._isMoved = true;
                }
                let cell;
                let cellIndex;
                for (let i = 0; i < num; i++) {
                    if (down) {
                        cell = this._cells.shift();
                        this._cells[this._cells.length] = cell;
                        cellIndex = toIndex + i;
                    }
                    else {
                        cell = this._cells.pop();
                        this._cells.unshift(cell);
                        cellIndex = toIndex - i;
                    }
                    let pos = Math.floor(cellIndex / lineX) * this._cellSize;
                    this._isVertical ? cell.y = pos : cell.x = pos;
                    this.renderItem(cell, cellIndex);
                }
                this._startIndex = index;
                this.changeSelectStatus();
            }
            else {
                let num = (lineY + 1);
                if (this._createdLine - scrollLine < num) {
                    this._createItems(this._createdLine, lineX, this._createdLine + num);
                    this.renderItems(this._createdLine * lineX, 0);
                    this._createdLine += num;
                }
            }
            let r = this._content._style.scrollRect;
            if (this._isVertical) {
                r.y = scrollValue - this._offset.y;
                r.x = -this._offset.x;
            }
            else {
                r.y = -this._offset.y;
                r.x = scrollValue - this._offset.x;
            }
            this._content.scrollRect = r;
        }
        posCell(cell, cellIndex) {
            if (!this._scrollBar)
                return;
            let lineX = (this._isVertical ? this.repeatX : this.repeatY);
            let pos = Math.floor(cellIndex / lineX) * this._cellSize;
            this._isVertical ? cell._y = pos : cell.x = pos;
        }
        get selectedIndex() {
            return this._selectedIndex;
        }
        set selectedIndex(value) {
            if (this._selectedIndex != value) {
                this._selectedIndex = value;
                this.changeSelectStatus();
                this.event(Laya.Event.CHANGE);
                this.selectHandler && this.selectHandler.runWith(value);
                this.startIndex = this._startIndex;
            }
        }
        changeSelectStatus() {
            for (let i = 0, n = this._cells.length; i < n; i++) {
                this.changeCellState(this._cells[i], this._selectedIndex === this._startIndex + i, 1);
            }
        }
        get selectedItem() {
            if (!this._array)
                return null;
            return this._selectedIndex != -1 ? this._array[this._selectedIndex] : null;
        }
        set selectedItem(value) {
            this._array && (this.selectedIndex = this._array.indexOf(value));
        }
        get selection() {
            return this.getCell(this._selectedIndex);
        }
        set selection(value) {
            this.selectedIndex = this._startIndex + this._cells.indexOf(value);
        }
        get startIndex() {
            return this._startIndex;
        }
        set startIndex(value) {
            this._startIndex = value > 0 ? value : 0;
            this.callLater(this.renderItems);
        }
        renderItems(from = 0, to = 0) {
            for (let i = from, n = to || this._cells.length; i < n; i++) {
                this.renderItem(this._cells[i], this._startIndex + i);
            }
            this.changeSelectStatus();
        }
        renderItem(cell, index) {
            if (!this._array || index >= 0 && index < this._array.length) {
                cell.visible = true;
                if (this._array) {
                    if (cell["_$bindData"]) {
                        cell["_dataSource"] = this._array[index];
                        this._bindData(cell, this._array[index]);
                    }
                    else
                        cell.dataSource = this._array[index];
                }
                if (!this.cacheContent) {
                    this.posCell(cell, index);
                }
                if (this.hasListener(Laya.Event.RENDER))
                    this.event(Laya.Event.RENDER, [cell, index]);
                if (this.renderHandler)
                    this.renderHandler.runWith([cell, index]);
            }
            else {
                cell.visible = false;
                cell.dataSource = null;
            }
        }
        _bindData(cell, data) {
            let arr = cell._$bindData;
            for (let i = 0, n = arr.length; i < n; i++) {
                let ele = arr[i++];
                let prop = arr[i++];
                let value = arr[i];
                let fun = UIUtils.getBindFun(value);
                ele[prop] = fun.call(this, data);
            }
        }
        get array() {
            return this._array;
        }
        set array(value) {
            this.runCallLater(this.changeCells);
            this._array = value || [];
            this._preLen = this._array.length;
            let length = this._array.length;
            this.totalPage = Math.ceil(length / (this.repeatX * this.repeatY));
            this._selectedIndex = this._selectedIndex < length ? this._selectedIndex : length - 1;
            this.startIndex = this._startIndex;
            if (this._scrollBar) {
                (!this.disableStopScroll && this._scrollBar.stopScroll());
                let numX = this._isVertical ? this.repeatX : this.repeatY;
                let numY = this._isVertical ? this.repeatY : this.repeatX;
                let lineCount = Math.ceil(length / numX);
                let total = this._cellOffset > 0 ? this.totalPage + 1 : this.totalPage;
                if (total > 1 && lineCount >= numY) {
                    this._scrollBar.scrollSize = this._cellSize;
                    this._scrollBar.thumbPercent = numY / lineCount;
                    this._scrollBar.setScroll(0, (lineCount - numY) * this._cellSize + this._cellOffset, this._scrollBar.value);
                }
                else {
                    this._scrollBar.setScroll(0, 0, 0);
                }
            }
        }
        updateArray(array) {
            this._array = array;
            if (this._array) {
                let freshStart = this._preLen - this._startIndex;
                if (freshStart >= 0)
                    this.renderItems(freshStart);
                this._preLen = this._array.length;
            }
            if (this._scrollBar) {
                let length = array.length;
                let numX = this._isVertical ? this.repeatX : this.repeatY;
                let numY = this._isVertical ? this.repeatY : this.repeatX;
                let lineCount = Math.ceil(length / numX);
                if (lineCount >= numY) {
                    this._scrollBar.thumbPercent = numY / lineCount;
                    this._scrollBar.slider["_max"] = (lineCount - numY) * this._cellSize + this._cellOffset;
                }
            }
        }
        get page() {
            return this._page;
        }
        set page(value) {
            this._page = value;
            if (this._array) {
                this._page = value > 0 ? value : 0;
                this._page = this._page < this.totalPage ? this._page : this.totalPage - 1;
                this.startIndex = this._page * this.repeatX * this.repeatY;
            }
        }
        get length() {
            return this._array ? this._array.length : 0;
        }
        set_dataSource(value) {
            this._dataSource = value;
            if (typeof (value) == 'number' || typeof (value) == 'string')
                this.selectedIndex = parseInt(value);
            else if (value instanceof Array)
                this.array = value;
            else
                super.set_dataSource(value);
        }
        get cells() {
            this.runCallLater(this.changeCells);
            return this._cells;
        }
        get elasticEnabled() {
            return this._elasticEnabled;
        }
        set elasticEnabled(value) {
            this._elasticEnabled = value;
            if (this._scrollBar) {
                this._scrollBar.elasticDistance = value ? 200 : 0;
            }
        }
        refresh() {
            this.array = this._array;
        }
        getItem(index) {
            if (!this._array)
                return null;
            if (index > -1 && index < this._array.length) {
                return this._array[index];
            }
            return null;
        }
        changeItem(index, source) {
            if (index > -1 && this._array && index < this._array.length) {
                this._array[index] = source;
                if (index >= this._startIndex && index < this._startIndex + this._cells.length) {
                    this.renderItem(this.getCell(index), index);
                }
            }
        }
        setItem(index, source) {
            this.changeItem(index, source);
        }
        addItem(source) {
            if (!this.array) {
                this.array = [source];
            }
            else {
                this._array.push(source);
            }
            this.array = this._array;
        }
        addItemAt(souce, index) {
            this._array.splice(index, 0, souce);
            this.array = this._array;
        }
        deleteItem(index) {
            if (this._array) {
                this._array.splice(index, 1);
                this.array = this._array;
            }
        }
        getCell(index) {
            this.runCallLater(this.changeCells);
            if (index > -1 && this._cells) {
                return this._cells[(index - this._startIndex) % this._cells.length];
            }
            return null;
        }
        scrollTo(index) {
            if (this._scrollBar) {
                let numX = this._isVertical ? this.repeatX : this.repeatY;
                this._scrollBar.value = Math.floor(index / numX) * this._cellSize;
            }
            else {
                this.startIndex = index;
            }
        }
        tweenTo(index, time = 200, complete = null) {
            if (this._scrollBar) {
                this._scrollBar.stopScroll();
                let numX = this._isVertical ? this.repeatX : this.repeatY;
                Laya.Tween.to(this._scrollBar, { value: Math.floor(index / numX) * this._cellSize }, time, null, complete, 0, true);
            }
            else {
                this.startIndex = index;
                if (complete)
                    complete.run();
            }
        }
        _setCellChanged() {
            if (!this._cellChanged) {
                this._cellChanged = true;
                this.callLater(this.changeCells);
            }
        }
        commitMeasure() {
            this.runCallLater(this.changeCells);
        }
    }

    class ComboBox extends UIComponent {
        constructor(skin = null, labels = null) {
            super();
            this._visibleNum = 6;
            this._itemSize = 12;
            this._labels = [];
            this._defaultLabel = '';
            this._selectedIndex = -1;
            this._scrollType = 0;
            this.itemRender = null;
            this._itemColors = Styles.comboBoxItemColors;
            this._itemPadding = [3, 3, 3, 3];
            this.skin = skin;
            this.labels = labels;
        }
        destroy(destroyChild = true) {
            Laya.ILaya.stage.off(Laya.Event.MOUSE_DOWN, this, this.removeList);
            Laya.ILaya.stage.off(Laya.Event.MOUSE_WHEEL, this, this._onStageMouseWheel);
            super.destroy(destroyChild);
            this._button && this._button.destroy(destroyChild);
            this._list && this._list.destroy(destroyChild);
            this._button = null;
            this._list = null;
            this._itemColors = null;
            this._itemPadding = null;
            this._itemHeight = null;
            this._labels = null;
            this._selectHandler = null;
            this._defaultLabel = null;
        }
        createChildren() {
            this._button = new Button();
            this._button.hideFlags = Laya.HideFlags.HideAndDontSave;
            this._button.text.align = "left";
            this._button.labelPadding = "0,0,0,5";
            this._button.on(Laya.Event.MOUSE_DOWN, this, this.onButtonMouseDown);
            this.addChild(this._button);
        }
        _createList() {
            this._list = new List();
            this._list.hideFlags = Laya.HideFlags.HideAndDontSave;
            this._list.scrollType = this._scrollType;
            if (this._scrollBarSkin)
                this._list.vScrollBarSkin = this._scrollBarSkin;
            this._setListEvent(this._list);
        }
        _setListEvent(list) {
            this._list.selectEnable = true;
            this._list.on(Laya.Event.MOUSE_DOWN, this, this.onListDown);
            this._list.mouseHandler = Laya.Handler.create(this, this.onlistItemMouse, null, false);
            if (this._list.scrollBar)
                this._list.scrollBar.on(Laya.Event.MOUSE_DOWN, this, this.onScrollBarDown);
        }
        onListDown(e) {
            e.stopPropagation();
        }
        onScrollBarDown(e) {
            e.stopPropagation();
        }
        onButtonMouseDown(e) {
            this.callLater(this.switchTo, [!this._isOpen]);
        }
        get skin() {
            return this._button.skin;
        }
        set skin(value) {
            if (this._button.skin != value) {
                this._button.skin = value;
                this._listChanged = true;
            }
        }
        measureWidth() {
            return this._button.width;
        }
        measureHeight() {
            return this._button.height;
        }
        changeList() {
            this._listChanged = false;
            var labelWidth = this.width - 2;
            var labelColor = this._itemColors[2];
            this._itemHeight = (this._itemHeight) ? this._itemHeight : this._itemSize + 6;
            let _padding = (this.itemPadding) ? this.itemPadding : "3,3,3,3";
            this._list.itemRender = this.itemRender || { type: "Box", child: [{ type: "Label", props: { name: "label", x: 1, padding: _padding, width: labelWidth, height: this._itemHeight, fontSize: this._itemSize, color: labelColor } }] };
            this._list.repeatY = this._visibleNum;
            this._list.refresh();
        }
        onlistItemMouse(e, index) {
            let type = e.type;
            if (type === Laya.Event.MOUSE_OVER || type === Laya.Event.MOUSE_OUT) {
                if (this._isCustomList)
                    return;
                let box = this._list.getCell(index);
                if (!box)
                    return;
                let label = box.getChildByName("label");
                if (label) {
                    if (type === Laya.Event.ROLL_OVER) {
                        label.bgColor = this._itemColors[0];
                        label.color = this._itemColors[1];
                    }
                    else {
                        label.bgColor = null;
                        label.color = this._itemColors[2];
                    }
                }
            }
            else if (type === Laya.Event.CLICK) {
                this.selectedIndex = index;
                this.isOpen = false;
            }
        }
        switchTo(value) {
            this.isOpen = value;
        }
        changeOpen() {
            this.isOpen = !this._isOpen;
        }
        _setWidth(value) {
            super._setWidth(value);
            this._button.width = this._width;
            this._itemChanged = true;
            this._listChanged = true;
        }
        get itemPadding() {
            return this._itemPadding.join(",");
        }
        set itemPadding(value) {
            this._itemPadding = UIUtils.fillArray(this._itemPadding, value, Number);
        }
        _setHeight(value) {
            super._setHeight(value);
            this._button.height = this._height;
        }
        get labels() {
            return this._labels.join(",");
        }
        set labels(value) {
            if (this._labels.length > 0)
                this.selectedIndex = -1;
            if (value)
                this._labels = value.split(",");
            else
                this._labels.length = 0;
            this._itemChanged = true;
        }
        changeItem() {
            this._itemChanged = false;
            this._listHeight = this._labels.length > 0 ? Math.min(this._visibleNum, this._labels.length) * this._itemHeight : this._itemHeight;
            if (!this._isCustomList) {
                var g = this._list.graphics;
                g.clear();
                g.drawRect(0, 0, this.width - 1, this._listHeight, this._itemColors[4], this._itemColors[3]);
            }
            let a = this._list.array || [];
            a.length = 0;
            for (let i = 0, n = this._labels.length; i < n; i++) {
                a.push({ label: this._labels[i] });
            }
            this._list.size(this.width, this._listHeight);
            this._list.array = a;
        }
        get selectedIndex() {
            return this._selectedIndex;
        }
        set selectedIndex(value) {
            if (this._selectedIndex != value) {
                this._selectedIndex = value;
                if (this._labels.length > 0)
                    this.changeSelected();
                else
                    this.callLater(this.changeSelected);
                this.event(Laya.Event.CHANGE, Laya.Event.EMPTY);
                this._selectHandler && this._selectHandler.runWith(this._selectedIndex);
            }
        }
        changeSelected() {
            this._button.label = this.selectedLabel;
        }
        get defaultLabel() {
            return this._defaultLabel;
        }
        set defaultLabel(value) {
            this._defaultLabel = value;
            this._selectedIndex < 0 && (this._button.label = value);
        }
        get selectHandler() {
            return this._selectHandler;
        }
        set selectHandler(value) {
            this._selectHandler = value;
        }
        get selectedLabel() {
            return this._selectedIndex > -1 && this._selectedIndex < this._labels.length ? this._labels[this._selectedIndex] : this.defaultLabel;
        }
        set selectedLabel(value) {
            this.selectedIndex = this._labels.indexOf(value);
        }
        get visibleNum() {
            return this._visibleNum;
        }
        set visibleNum(value) {
            this._visibleNum = value;
            this._listChanged = true;
        }
        get itemHeight() {
            return this._itemHeight;
        }
        set itemHeight(value) {
            this._itemHeight = value;
            this._listChanged = true;
        }
        get itemColors() {
            return this._itemColors.join(",");
        }
        set itemColors(value) {
            this._itemColors = UIUtils.fillArray(this._itemColors, value, String);
            this._listChanged = true;
        }
        get itemSize() {
            return this._itemSize;
        }
        set itemSize(value) {
            this._itemSize = value;
            this._listChanged = true;
        }
        get isOpen() {
            return this._isOpen;
        }
        set isOpen(value) {
            if (this._isOpen != value) {
                this._isOpen = value;
                this._button.selected = this._isOpen;
                if (this._isOpen) {
                    this._list || this._createList();
                    this._listChanged && !this._isCustomList && this.changeList();
                    this._itemChanged && this.changeItem();
                    var p = this.localToGlobal(Laya.Point.TEMP.setTo(0, 0));
                    var py = p.y + this._button.height;
                    py = py + this._listHeight <= Laya.ILaya.stage.height ? py : p.y - this._listHeight < 0 ? py : p.y - this._listHeight;
                    this._list.pos(p.x, py);
                    this._list.zOrder = 1001;
                    Laya.ILaya.stage.addChild(this._list);
                    Laya.ILaya.stage.once(Laya.Event.MOUSE_DOWN, this, this.removeList);
                    Laya.ILaya.stage.on(Laya.Event.MOUSE_WHEEL, this, this._onStageMouseWheel);
                    this._list.selectedIndex = this._selectedIndex;
                }
                else {
                    this._list && this._list.removeSelf();
                }
            }
        }
        _onStageMouseWheel(e) {
            if (!this._list || this._list.contains(e.target))
                return;
            this.removeList(null);
        }
        removeList(e) {
            Laya.ILaya.stage.off(Laya.Event.MOUSE_DOWN, this, this.removeList);
            Laya.ILaya.stage.off(Laya.Event.MOUSE_WHEEL, this, this._onStageMouseWheel);
            this.isOpen = false;
        }
        get scrollType() {
            return this._scrollType;
        }
        set scrollType(value) {
            this._scrollType = value;
        }
        get scrollBarSkin() {
            return this._scrollBarSkin;
        }
        set scrollBarSkin(value) {
            this._scrollBarSkin = value;
        }
        get sizeGrid() {
            return this._button.sizeGrid;
        }
        set sizeGrid(value) {
            this._button.sizeGrid = value;
        }
        get scrollBar() {
            return this.list.scrollBar;
        }
        get button() {
            return this._button;
        }
        get list() {
            this._list || this._createList();
            return this._list;
        }
        set list(value) {
            if (value) {
                value.removeSelf();
                this._isCustomList = true;
                this._list = value;
                this._setListEvent(value);
                this._itemHeight = value.getCell(0).height + value.spaceY;
            }
        }
        set_dataSource(value) {
            this._dataSource = value;
            if (typeof (value) == 'number' || typeof (value) == 'string')
                this.selectedIndex = parseInt(value);
            else if (value instanceof Array)
                this.labels = value.join(",");
            else
                super.set_dataSource(value);
        }
        get labelColors() {
            return this._button.labelColors;
        }
        set labelColors(value) {
            if (this._button.labelColors != value) {
                this._button.labelColors = value;
            }
        }
        get labelPadding() {
            return this._button.text.padding.join(",");
        }
        set labelPadding(value) {
            this._button.text.padding = UIUtils.fillArray(Styles.labelPadding, value, Number);
        }
        get labelSize() {
            return this._button.text.fontSize;
        }
        set labelSize(value) {
            this._button.text.fontSize = value;
        }
        get labelBold() {
            return this._button.text.bold;
        }
        set labelBold(value) {
            this._button.text.bold = value;
        }
        get labelFont() {
            return this._button.text.font;
        }
        set labelFont(value) {
            this._button.text.font = value;
        }
        get stateNum() {
            return this._button.stateNum;
        }
        set stateNum(value) {
            this._button.stateNum = value;
        }
    }

    class View extends Laya.Scene {
        constructor() {
            super(false);
            this._watchMap = {};
            this._scene = null;
            this.createChildren();
        }
        static regUI(url, json) {
            Laya.ILaya.loader.cacheRes(url, json);
        }
        changeData(key) {
            let arr = this._watchMap[key];
            if (!arr)
                return;
            for (let i = 0, n = arr.length; i < n; i++) {
                let watcher = arr[i];
                watcher.exe(this);
            }
        }
        set_dataSource(value) {
            this._dataSource = value;
            for (let name in value) {
                let comp = this.getChildByName(name);
                if (comp instanceof UIComponent)
                    comp.dataSource = value[name];
                else if (name in this && !(this[name] instanceof Function))
                    this[name] = value[name];
            }
        }
    }
    View.uiMap = {};

    class DialogManager extends Laya.Sprite {
        constructor() {
            super();
            this.maskLayer = new Laya.Sprite();
            this.popupEffect = (dialog) => {
                dialog.scale(1, 1);
                dialog._effectTween = Laya.Tween.from(dialog, { x: Laya.ILaya.stage.width / 2, y: Laya.ILaya.stage.height / 2, scaleX: 0, scaleY: 0 }, 300, Laya.Ease.backOut, Laya.Handler.create(this, this.doOpen, [dialog]), 0, false, false);
            };
            this.closeEffect = (dialog) => {
                dialog._effectTween = Laya.Tween.to(dialog, { x: Laya.ILaya.stage.width / 2, y: Laya.ILaya.stage.height / 2, scaleX: 0, scaleY: 0 }, 300, Laya.Ease.strongOut, Laya.Handler.create(this, this.doClose, [dialog]), 0, false, false);
            };
            this.popupEffectHandler = new Laya.Handler(this, this.popupEffect);
            this.closeEffectHandler = new Laya.Handler(this, this.closeEffect);
            this.mouseEnabled = this.maskLayer.mouseEnabled = true;
            this.zOrder = 1000;
            Laya.ILaya.stage.addChild(this);
            Laya.ILaya.stage.on(Laya.Event.RESIZE, this, this._onResize);
            if (UIConfig.closeDialogOnSide)
                this.maskLayer.on("click", this, this._closeOnSide);
            this._onResize(null);
        }
        _closeOnSide() {
            var dialog = this.getChildAt(this.numChildren - 1);
            if (dialog instanceof Dialog)
                dialog.close("side");
        }
        setLockView(value) {
            if (!this.lockLayer) {
                this.lockLayer = new Box();
                this.lockLayer.mouseEnabled = true;
                this.lockLayer.size(Laya.ILaya.stage.width, Laya.ILaya.stage.height);
            }
            this.lockLayer.removeChildren();
            if (value) {
                value.centerX = value.centerY = 0;
                this.lockLayer.addChild(value);
            }
        }
        _onResize(e = null) {
            var width = this.maskLayer.width = Laya.ILaya.stage.width;
            var height = this.maskLayer.height = Laya.ILaya.stage.height;
            if (this.lockLayer)
                this.lockLayer.size(width, height);
            this.maskLayer.graphics.clear(true);
            this.maskLayer.graphics.drawRect(0, 0, width, height, UIConfig.popupBgColor);
            this.maskLayer.alpha = UIConfig.popupBgAlpha;
            for (var i = this.numChildren - 1; i > -1; i--) {
                var item = this.getChildAt(i);
                if (item.isPopupCenter)
                    this._centerDialog(item);
            }
        }
        _centerDialog(dialog) {
            dialog.x = Math.round(((Laya.ILaya.stage.width - dialog.width) >> 1) + dialog.pivotX);
            dialog.y = Math.round(((Laya.ILaya.stage.height - dialog.height) >> 1) + dialog.pivotY);
        }
        open(dialog, closeOther = false, showEffect = false) {
            if (closeOther)
                this._closeAll();
            this._clearDialogEffect(dialog);
            if (dialog.isPopupCenter)
                this._centerDialog(dialog);
            this.addChild(dialog);
            if (dialog.isModal || this._getBit(Laya.NodeFlags.HAS_ZORDER))
                Laya.ILaya.timer.callLater(this, this._checkMask);
            if (showEffect && dialog.popupEffect != null)
                dialog.popupEffect.runWith(dialog);
            else
                this.doOpen(dialog);
            this.event(Laya.Event.OPEN);
        }
        _clearDialogEffect(dialog) {
            if (dialog._effectTween) {
                Laya.Tween.clear(dialog._effectTween);
                dialog._effectTween = null;
            }
        }
        doOpen(dialog) {
            dialog.onOpened(dialog._param);
        }
        lock(value) {
            if (this.lockLayer) {
                if (value)
                    this.addChild(this.lockLayer);
                else
                    this.lockLayer.removeSelf();
            }
        }
        close(dialog) {
            this._clearDialogEffect(dialog);
            if (dialog.isShowEffect && dialog.closeEffect != null)
                dialog.closeEffect.runWith([dialog]);
            else
                this.doClose(dialog);
            this.event(Laya.Event.CLOSE);
        }
        doClose(dialog) {
            dialog.removeSelf();
            dialog.isModal && this._checkMask();
            dialog.closeHandler && dialog.closeHandler.runWith(dialog.closeType);
            dialog.onClosed(dialog.closeType);
            if (dialog.autoDestroyAtClosed)
                dialog.destroy();
        }
        closeAll() {
            this._closeAll();
            this.event(Laya.Event.CLOSE);
        }
        _closeAll() {
            for (var i = this.numChildren - 1; i > -1; i--) {
                var item = this.getChildAt(i);
                if (item && item.close != null) {
                    this.doClose(item);
                }
            }
        }
        getDialogsByGroup(group) {
            var arr = [];
            for (var i = this.numChildren - 1; i > -1; i--) {
                var item = this.getChildAt(i);
                if (item && item.group === group) {
                    arr.push(item);
                }
            }
            return arr;
        }
        closeByGroup(group) {
            var arr = [];
            for (var i = this.numChildren - 1; i > -1; i--) {
                var item = this.getChildAt(i);
                if (item && item.group === group) {
                    item.close();
                    arr.push(item);
                }
            }
            return arr;
        }
        _checkMask() {
            this.maskLayer.removeSelf();
            for (var i = this.numChildren - 1; i > -1; i--) {
                var dialog = this.getChildAt(i);
                if (dialog && dialog.isModal) {
                    this.addChildAt(this.maskLayer, i);
                    return;
                }
            }
        }
    }

    class Dialog extends View {
        static get manager() {
            return Dialog._manager = Dialog._manager || new DialogManager();
        }
        static set manager(value) {
            Dialog._manager = value;
        }
        constructor() {
            super();
            this.isShowEffect = true;
            this.isPopupCenter = true;
            this.popupEffect = Dialog.manager.popupEffectHandler;
            this.closeEffect = Dialog.manager.closeEffectHandler;
            this._dealDragArea();
            this.on(Laya.Event.CLICK, this, this._onClick);
        }
        _dealDragArea() {
            var dragTarget = this.getChildByName("drag");
            if (dragTarget) {
                this.dragArea = dragTarget._x + "," + dragTarget._y + "," + dragTarget.width + "," + dragTarget.height;
                dragTarget.removeSelf();
            }
        }
        get dragArea() {
            if (this._dragArea)
                return this._dragArea.toString();
            return null;
        }
        set dragArea(value) {
            if (value) {
                var a = UIUtils.fillArray([0, 0, 0, 0], value, Number);
                this._dragArea = new Laya.Rectangle(a[0], a[1], a[2], a[3]);
                this.on(Laya.Event.MOUSE_DOWN, this, this._onMouseDown);
            }
            else {
                this._dragArea = null;
                this.off(Laya.Event.MOUSE_DOWN, this, this._onMouseDown);
            }
        }
        _onMouseDown(e) {
            var point = this.getMousePoint();
            if (this._dragArea.contains(point.x, point.y))
                this.startDrag();
            else
                this.stopDrag();
        }
        _onClick(e) {
            var btn = e.target;
            if (btn) {
                switch (btn.name) {
                    case Dialog.CLOSE:
                    case Dialog.CANCEL:
                    case Dialog.SURE:
                    case Dialog.NO:
                    case Dialog.OK:
                    case Dialog.YES:
                        this.close(btn.name);
                        return;
                }
            }
        }
        open(closeOther = true, param = null) {
            this._dealDragArea();
            this._param = param;
            Dialog.manager.open(this, closeOther, this.isShowEffect);
            Dialog.manager.lock(false);
        }
        close(type = null) {
            this.closeType = type;
            Dialog.manager.close(this);
        }
        destroy(destroyChild = true) {
            this.closeHandler = null;
            this.popupEffect = null;
            this.closeEffect = null;
            this._dragArea = null;
            super.destroy(destroyChild);
        }
        show(closeOther = false, showEffect = true) {
            this._open(false, closeOther, showEffect);
        }
        popup(closeOther = false, showEffect = true) {
            this._open(true, closeOther, showEffect);
        }
        _open(modal, closeOther, showEffect) {
            this.isModal = modal;
            this.isShowEffect = showEffect;
            Dialog.manager.lock(true);
            this.open(closeOther);
        }
        get isPopup() {
            return this.parent != null;
        }
        set zOrder(value) {
            super.zOrder = value;
            Dialog.manager._checkMask();
        }
        get zOrder() {
            return super.zOrder;
        }
        static setLockView(view) {
            Dialog.manager.setLockView(view);
        }
        static lock(value) {
            Dialog.manager.lock(value);
        }
        static closeAll() {
            Dialog.manager.closeAll();
        }
        static getDialogsByGroup(group) {
            return Dialog.manager.getDialogsByGroup(group);
        }
        static closeByGroup(group) {
            return Dialog.manager.closeByGroup(group);
        }
    }
    Dialog.CLOSE = "close";
    Dialog.CANCEL = "cancel";
    Dialog.SURE = "sure";
    Dialog.NO = "no";
    Dialog.YES = "yes";
    Dialog.OK = "ok";

    class FontClip extends Clip {
        constructor(skin = null, sheet = null) {
            super();
            this._valueArr = '';
            this._indexMap = null;
            this._sheet = null;
            this._direction = "horizontal";
            this._spaceX = 0;
            this._spaceY = 0;
            this._align = "left";
            this._wordsW = 0;
            this._wordsH = 0;
            if (skin)
                this.skin = skin;
            if (sheet)
                this.sheet = sheet;
        }
        loadComplete(url, img) {
            super.loadComplete(url, img);
            this.callLater(this.changeValue);
        }
        get index() {
            return this._index;
        }
        set index(value) {
            this._index = value;
        }
        get sheet() {
            return this._sheet;
        }
        set sheet(value) {
            value += "";
            this._sheet = value;
            var arr = value.split(" ");
            this._clipX = String(arr[0]).length;
            this.clipY = arr.length;
            this._indexMap = {};
            for (var i = 0; i < this._clipY; i++) {
                var line = arr[i].split("");
                for (var j = 0, n = line.length; j < n; j++) {
                    this._indexMap[line[j]] = i * this._clipX + j;
                }
            }
        }
        get value() {
            if (!this._valueArr)
                return "";
            return this._valueArr;
        }
        set value(value) {
            value += "";
            this._valueArr = value;
            this.callLater(this.changeValue);
        }
        get direction() {
            return this._direction;
        }
        set direction(value) {
            this._direction = value;
            this.callLater(this.changeValue);
        }
        get spaceX() {
            return this._spaceX;
        }
        set spaceX(value) {
            this._spaceX = value;
            if (this._direction === "horizontal")
                this.callLater(this.changeValue);
        }
        get spaceY() {
            return this._spaceY;
        }
        set spaceY(value) {
            this._spaceY = value;
            if (!(this._direction === "horizontal"))
                this.callLater(this.changeValue);
        }
        set align(v) {
            this._align = v;
            this.callLater(this.changeValue);
        }
        get align() {
            return this._align;
        }
        changeValue() {
            if (!this._sources)
                return;
            if (!this._valueArr)
                return;
            this.graphics.clear(true);
            let texture;
            texture = this._sources[0];
            if (!texture)
                return;
            var isHorizontal = (this._direction === "horizontal");
            if (isHorizontal) {
                this._wordsW = this._valueArr.length * (texture.sourceWidth + this.spaceX);
                this._wordsH = texture.sourceHeight;
            }
            else {
                this._wordsW = texture.sourceWidth;
                this._wordsH = (texture.sourceHeight + this.spaceY) * this._valueArr.length;
            }
            let dX = 0;
            if (this._isWidthSet) {
                switch (this._align) {
                    case "center":
                        dX = 0.5 * (this._width - this._wordsW);
                        break;
                    case "right":
                        dX = this._width - this._wordsW;
                        break;
                    default:
                        dX = 0;
                }
            }
            for (let i = 0, sz = this._valueArr.length; i < sz; i++) {
                let index = this._indexMap[this._valueArr.charAt(i)];
                texture = this._sources[index];
                if (!texture)
                    continue;
                if (isHorizontal)
                    this.graphics.drawImage(texture, dX + i * (texture.sourceWidth + this.spaceX), 0, texture.sourceWidth, texture.sourceHeight);
                else
                    this.graphics.drawImage(texture, 0 + dX, i * (texture.sourceHeight + this.spaceY), texture.sourceWidth, texture.sourceHeight);
            }
            if (!this._isWidthSet) {
                this._widget.resetLayoutX();
                this.callLater(this._sizeChanged);
            }
            if (!this._isHeightSet) {
                this._widget.resetLayoutY();
                this.callLater(this._sizeChanged);
            }
        }
        _setWidth(value) {
            super._setWidth(value);
            this.callLater(this.changeValue);
        }
        _setHeight(value) {
            super._setHeight(value);
            this.callLater(this.changeValue);
        }
        measureWidth() {
            return this._wordsW;
        }
        measureHeight() {
            return this._wordsH;
        }
        destroy(destroyChild = true) {
            this._valueArr = null;
            this._indexMap = null;
            this.graphics.clear(true);
            super.destroy(destroyChild);
        }
    }

    class LayoutBox extends Box {
        constructor() {
            super(...arguments);
            this._space = 0;
            this._align = "none";
            this._itemChanged = false;
        }
        addChild(child) {
            child.on(Laya.Event.RESIZE, this, this.onResize);
            this._setItemChanged();
            return super.addChild(child);
        }
        onResize(e) {
            this._setItemChanged();
        }
        addChildAt(child, index) {
            child.on(Laya.Event.RESIZE, this, this.onResize);
            this._setItemChanged();
            return super.addChildAt(child, index);
        }
        removeChildAt(index) {
            this.getChildAt(index).off(Laya.Event.RESIZE, this, this.onResize);
            this._setItemChanged();
            return super.removeChildAt(index);
        }
        refresh() {
            this._setItemChanged();
        }
        changeItems() {
            this._itemChanged = false;
        }
        get space() {
            return this._space;
        }
        set space(value) {
            this._space = value;
            this._setItemChanged();
        }
        get align() {
            return this._align;
        }
        set align(value) {
            this._align = value;
            this._setItemChanged();
        }
        sortItem(items) {
            if (items)
                items.sort(function (a, b) { return a.y - b.y; });
        }
        _setItemChanged() {
            if (!this._itemChanged) {
                this._itemChanged = true;
                this.callLater(this.changeItems);
            }
        }
    }

    class HBox extends LayoutBox {
        sortItem(items) {
            if (items)
                items.sort(function (a, b) { return a.x - b.x; });
        }
        _setHeight(value) {
            super._setHeight(value);
            this.callLater(this.changeItems);
        }
        changeItems() {
            this._itemChanged = false;
            var items = [];
            var maxHeight = 0;
            for (let i = 0, n = this.numChildren; i < n; i++) {
                let item = this.getChildAt(i);
                if (item) {
                    items.push(item);
                    maxHeight = this._isHeightSet ? this._height : Math.max(maxHeight, item.height * item.scaleY);
                }
            }
            this.sortItem(items);
            let left = 0;
            for (let i = 0, n = items.length; i < n; i++) {
                let item = items[i];
                item.x = left;
                left += item.width * item.scaleX + this._space;
                if (this._align == HBox.TOP) {
                    item.y = 0;
                }
                else if (this._align == HBox.MIDDLE) {
                    item.y = (maxHeight - item.height * item.scaleY) * 0.5;
                }
                else if (this._align == HBox.BOTTOM) {
                    item.y = maxHeight - item.height * item.scaleY;
                }
            }
            this._sizeChanged();
        }
    }
    HBox.NONE = "none";
    HBox.TOP = "top";
    HBox.MIDDLE = "middle";
    HBox.BOTTOM = "bottom";

    class HSlider extends Slider {
        constructor(skin = null) {
            super(skin);
            this.isVertical = false;
        }
    }

    class Panel extends Box {
        constructor() {
            super();
            this._usedCache = null;
            this._elasticEnabled = false;
            this._scrollType = 0;
            this.width = this.height = 100;
        }
        destroy(destroyChild = true) {
            super.destroy(destroyChild);
            this._content && this._content.destroy(destroyChild);
            this._vScrollBar && this._vScrollBar.destroy(destroyChild);
            this._hScrollBar && this._hScrollBar.destroy(destroyChild);
            this._vScrollBar = null;
            this._hScrollBar = null;
            this._content = null;
        }
        destroyChildren() {
            this._content.destroyChildren();
        }
        createChildren() {
            this._content = new Box();
            this._content.hideFlags = Laya.HideFlags.HideAndDontSave;
            super.addChild(this._content);
        }
        addChild(child) {
            child.on(Laya.Event.RESIZE, this, this.onResize);
            this._setScrollChanged();
            return this._content.addChild(child);
        }
        onResize() {
            this._setScrollChanged();
        }
        addChildAt(child, index) {
            child.on(Laya.Event.RESIZE, this, this.onResize);
            this._setScrollChanged();
            return this._content.addChildAt(child, index);
        }
        removeChild(child) {
            child.off(Laya.Event.RESIZE, this, this.onResize);
            this._setScrollChanged();
            if (child._parent == this && this._children) {
                let index = this._children.indexOf(child);
                if (index != -1) {
                    this._children.splice(index, 1);
                    child._setParent(null);
                }
                return child;
            }
            else
                return this._content.removeChild(child);
        }
        removeChildAt(index) {
            this.getChildAt(index).off(Laya.Event.RESIZE, this, this.onResize);
            this._setScrollChanged();
            return this._content.removeChildAt(index);
        }
        removeChildren(beginIndex = 0, endIndex = 0x7fffffff) {
            this._content.removeChildren(beginIndex, endIndex);
            this._setScrollChanged();
            return this;
        }
        getChildAt(index) {
            return this._content.getChildAt(index);
        }
        getChildByName(name) {
            return this._content.getChildByName(name);
        }
        getChildIndex(child) {
            return this._content.getChildIndex(child);
        }
        get numChildren() {
            return this._content.numChildren;
        }
        changeScroll() {
            this._scrollChanged = false;
            var contentW = this.contentWidth || 1;
            var contentH = this.contentHeight || 1;
            var vscroll = this._vScrollBar;
            var hscroll = this._hScrollBar;
            var vShow = vscroll && contentH > this._height;
            var hShow = hscroll && contentW > this._width;
            var showWidth = vShow ? this._width - vscroll.width : this._width;
            var showHeight = hShow ? this._height - hscroll.height : this._height;
            if (vscroll) {
                vscroll.height = this._height - (hShow ? hscroll.height : 0);
                vscroll.scrollSize = Math.max(this._height * 0.033, 1);
                vscroll.thumbPercent = showHeight / contentH;
                vscroll.setScroll(0, contentH - showHeight, vscroll.value);
            }
            if (hscroll) {
                hscroll.width = this._width - (vShow ? vscroll.width : 0);
                hscroll.scrollSize = Math.max(this._width * 0.033, 1);
                hscroll.thumbPercent = showWidth / contentW;
                hscroll.setScroll(0, contentW - showWidth, hscroll.value);
            }
        }
        _sizeChanged() {
            super._sizeChanged();
            this.setContentSize(this._width, this._height);
        }
        get contentWidth() {
            var max = 0;
            for (var i = this._content.numChildren - 1; i > -1; i--) {
                var comp = this._content.getChildAt(i);
                max = Math.max(comp._x + comp.width * comp.scaleX - comp.pivotX, max);
            }
            return max;
        }
        get contentHeight() {
            let max = 0;
            for (let i = this._content.numChildren - 1; i > -1; i--) {
                let comp = this._content.getChildAt(i);
                max = Math.max(comp._y + comp.height * comp.scaleY - comp.pivotY, max);
            }
            return max;
        }
        setContentSize(width, height) {
            let content = this._content;
            content.width = width;
            content.height = height;
            content._style.scrollRect || (content.scrollRect = Laya.Rectangle.create());
            content._style.scrollRect.setTo(0, 0, width, height);
            content.scrollRect = content.scrollRect;
        }
        _setWidth(value) {
            super._setWidth(value);
            this._setScrollChanged();
        }
        _setHeight(value) {
            super._setHeight(value);
            this._setScrollChanged();
        }
        get scrollType() {
            return this._scrollType;
        }
        set scrollType(value) {
            this._scrollType = value;
            if (this._scrollType == exports.ScrollType.None) {
                if (this._hScrollBar) {
                    this._hScrollBar.destroy();
                    this._hScrollBar = null;
                }
                if (this._vScrollBar) {
                    this._vScrollBar.destroy();
                    this._vScrollBar = null;
                }
            }
            else if (this._scrollType == exports.ScrollType.Horizontal) {
                if (this._vScrollBar) {
                    this._vScrollBar.destroy();
                    this._vScrollBar = null;
                }
                if (this._hScrollBar)
                    this._hScrollBar.skin = this._hScrollBarSkin;
                else
                    this.createHScrollBar();
            }
            else if (this._scrollType == exports.ScrollType.Vertical) {
                if (this._hScrollBar) {
                    this._hScrollBar.destroy();
                    this._hScrollBar = null;
                }
                if (this._vScrollBar)
                    this._vScrollBar.skin = this._vScrollBarSkin;
                else
                    this.createVScrollBar();
            }
            else {
                if (this._hScrollBar)
                    this._hScrollBar.skin = this._hScrollBarSkin;
                else
                    this.createHScrollBar();
                if (this._vScrollBar)
                    this._vScrollBar.skin = this._vScrollBarSkin;
                else
                    this.createVScrollBar();
            }
        }
        createHScrollBar() {
            let scrollBar = this._hScrollBar = new HScrollBar();
            scrollBar.hideFlags = Laya.HideFlags.HideAndDontSave;
            scrollBar.on(Laya.Event.CHANGE, this, this.onScrollBarChange, [scrollBar]);
            scrollBar.target = this._content;
            scrollBar.elasticDistance = this._elasticEnabled ? 200 : 0;
            scrollBar.bottom = 0;
            scrollBar._skinBaseUrl = this._skinBaseUrl;
            scrollBar.skin = this._hScrollBarSkin;
            scrollBar.on(Laya.Event.LOADED, this, this._setScrollChanged);
            super.addChild(scrollBar);
            this._setScrollChanged();
        }
        createVScrollBar() {
            let scrollBar = this._vScrollBar = new VScrollBar();
            scrollBar.hideFlags = Laya.HideFlags.HideAndDontSave;
            scrollBar.on(Laya.Event.CHANGE, this, this.onScrollBarChange, [scrollBar]);
            scrollBar.target = this._content;
            scrollBar.elasticDistance = this._elasticEnabled ? 200 : 0;
            scrollBar.right = 0;
            scrollBar._skinBaseUrl = this._skinBaseUrl;
            scrollBar.skin = this._vScrollBarSkin;
            scrollBar.on(Laya.Event.LOADED, this, this._setScrollChanged);
            super.addChild(scrollBar);
            this._setScrollChanged();
        }
        get vScrollBarSkin() {
            return this._vScrollBarSkin;
        }
        set vScrollBarSkin(value) {
            if (value == "")
                value = null;
            if (this._vScrollBarSkin != value) {
                this._vScrollBarSkin = value;
                if (this._scrollType == 0)
                    this.scrollType = exports.ScrollType.Vertical;
                else if (this._scrollType == exports.ScrollType.Horizontal)
                    this.scrollType = exports.ScrollType.Both;
                else
                    this.scrollType = this._scrollType;
            }
        }
        get hScrollBarSkin() {
            return this._hScrollBarSkin;
        }
        set hScrollBarSkin(value) {
            if (value == "")
                value = null;
            if (this._hScrollBarSkin != value) {
                this._hScrollBarSkin = value;
                if (this._scrollType == 0)
                    this.scrollType = exports.ScrollType.Horizontal;
                else if (this._scrollType == exports.ScrollType.Vertical)
                    this.scrollType = exports.ScrollType.Both;
                this.scrollType = this._scrollType;
            }
        }
        get vScrollBar() {
            return this._vScrollBar;
        }
        get hScrollBar() {
            return this._hScrollBar;
        }
        get content() {
            return this._content;
        }
        onScrollBarChange(scrollBar) {
            var rect = this._content._style.scrollRect;
            if (rect) {
                var start = Math.round(scrollBar.value);
                scrollBar.isVertical ? rect.y = start : rect.x = start;
                this._content.scrollRect = rect;
            }
        }
        scrollTo(x = 0, y = 0) {
            if (this.vScrollBar)
                this.vScrollBar.value = y;
            if (this.hScrollBar)
                this.hScrollBar.value = x;
        }
        refresh() {
            this.changeScroll();
        }
        set cacheAs(value) {
            super.cacheAs = value;
            this._usedCache = null;
            if (value !== "none") {
                this._hScrollBar && this._hScrollBar.on(Laya.Event.START, this, this.onScrollStart);
                this._vScrollBar && this._vScrollBar.on(Laya.Event.START, this, this.onScrollStart);
            }
            else {
                this._hScrollBar && this._hScrollBar.off(Laya.Event.START, this, this.onScrollStart);
                this._vScrollBar && this._vScrollBar.off(Laya.Event.START, this, this.onScrollStart);
            }
        }
        get cacheAs() {
            return super.cacheAs;
        }
        get elasticEnabled() {
            return this._elasticEnabled;
        }
        set elasticEnabled(value) {
            this._elasticEnabled = value;
            if (this._vScrollBar) {
                this._vScrollBar.elasticDistance = value ? 200 : 0;
            }
            if (this._hScrollBar) {
                this._hScrollBar.elasticDistance = value ? 200 : 0;
            }
        }
        onScrollStart() {
            this._usedCache || (this._usedCache = super.cacheAs);
            super.cacheAs = "none";
            this._hScrollBar && this._hScrollBar.once(Laya.Event.END, this, this.onScrollEnd);
            this._vScrollBar && this._vScrollBar.once(Laya.Event.END, this, this.onScrollEnd);
        }
        onScrollEnd() {
            super.cacheAs = this._usedCache;
        }
        _setScrollChanged() {
            if (!this._scrollChanged) {
                this._scrollChanged = true;
                this.callLater(this.changeScroll);
            }
        }
    }

    class ProgressBar extends UIComponent {
        constructor(skin = null) {
            super();
            this._value = 0.5;
            this.skin = skin;
        }
        destroy(destroyChild = true) {
            super.destroy(destroyChild);
            this._bg && this._bg.destroy(destroyChild);
            this._bar && this._bar.destroy(destroyChild);
            this._bg = this._bar = null;
            this.changeHandler = null;
        }
        createChildren() {
            this._bg = new Image();
            this._bg.left = 0;
            this._bg.right = 0;
            this._bg.top = 0;
            this._bg.bottom = 0;
            this._bg.hideFlags = Laya.HideFlags.HideAndDontSave;
            this.addChild(this._bg);
            this._bar = new Image();
            this._bar.hideFlags = Laya.HideFlags.HideAndDontSave;
            this._bar.top = 0;
            this._bar.bottom = 0;
            this.addChild(this._bar);
        }
        get skin() {
            return this._skin;
        }
        set skin(value) {
            if (this._skin == value)
                return;
            this._setSkin(value);
        }
        _setSkin(url) {
            this._skin = url;
            if (url) {
                return Laya.AssetDb.inst.resolveURL(url).then(url => {
                    if (this._skinBaseUrl)
                        url = Laya.URL.formatURL(url, this._skinBaseUrl);
                    return Promise.all([
                        this._bg._setSkin(url),
                        this._bar._setSkin(Laya.Utils.replaceFileExtension(url, "$bar.png", true))
                    ]).then(() => this._skinLoaded());
                });
            }
            else {
                this._bg.skin = null;
                this._bar.skin = null;
                this._skinLoaded();
                return Promise.resolve();
            }
        }
        _skinLoaded() {
            if (this._destroyed)
                return;
            this.callLater(this.changeValue);
            this._sizeChanged();
            this.event(Laya.Event.LOADED);
        }
        measureWidth() {
            return this._bg.width;
        }
        measureHeight() {
            return this._bg.height;
        }
        get value() {
            return this._value;
        }
        set value(num) {
            if (this._value != num) {
                num = num > 1 ? 1 : num < 0 ? 0 : num;
                this._value = num;
                this.callLater(this.changeValue);
                this.event(Laya.Event.CHANGE);
                this.changeHandler && this.changeHandler.runWith(num);
            }
        }
        changeValue() {
            if (this.sizeGrid) {
                let grid = this.sizeGrid.split(",");
                let left = parseInt(grid[3]);
                if (isNaN(left))
                    left = 0;
                let right = parseInt(grid[1]);
                if (isNaN(right))
                    right = 0;
                let max = this.width - left - right;
                let sw = max * this._value;
                this._bar.width = left + right + sw;
                this._bar.visible = this._bar.width > left + right;
            }
            else {
                this._bar.width = this.width * this._value;
            }
        }
        get bar() {
            return this._bar;
        }
        get bg() {
            return this._bg;
        }
        get sizeGrid() {
            return this._bg.sizeGrid;
        }
        set sizeGrid(value) {
            this._bg.sizeGrid = this._bar.sizeGrid = value;
        }
        set_width(value) {
            super.set_width(value);
            this.callLater(this.changeValue);
        }
        set_dataSource(value) {
            this._dataSource = value;
            if (typeof (value) == 'number' || typeof (value) == 'string')
                this.value = Number(value);
            else
                super.set_dataSource(value);
        }
    }

    class Radio extends Button {
        constructor(skin = null, label = "") {
            super(skin, label);
            this.toggle = false;
            this._autoSize = false;
        }
        preinitialize() {
            super.preinitialize();
            this.toggle = false;
            this._autoSize = false;
        }
        initialize() {
            super.initialize();
            this.createText();
            this._text.align = "left";
            this._text.valign = "top";
            this._text.width = null;
            this.on(Laya.Event.CLICK, this, this.onClick);
        }
        onClick(e) {
            this.selected = true;
        }
        get value() {
            return this._value != null ? this._value : this.label;
        }
        set value(obj) {
            this._value = obj;
        }
    }

    class UIGroup extends Box {
        constructor(labels = null, skin = null) {
            super();
            this._selectedIndex = -1;
            this._direction = "horizontal";
            this._space = 0;
            this._items = [];
            this.skin = skin;
            this.labels = labels;
        }
        preinitialize() {
            this.mouseEnabled = true;
        }
        destroy(destroyChild = true) {
            super.destroy(destroyChild);
            this._items && (this._items.length = 0);
            this._items = null;
            this.selectHandler = null;
        }
        addItem(item, autoLayout = true) {
            let display = item;
            let index = this._items.length;
            display.name = "item" + index;
            this.addChild(display);
            this.initItems();
            if (autoLayout && index > 0) {
                let preItem = this._items[index - 1];
                if (this._direction == "horizontal") {
                    display.x = preItem._x + preItem.width + this._space;
                }
                else {
                    display.y = preItem._y + preItem.height + this._space;
                }
            }
            else {
                if (autoLayout) {
                    display.x = 0;
                    display.y = 0;
                }
            }
            return index;
        }
        delItem(item, autoLayout = true) {
            var index = this._items.indexOf(item);
            if (index != -1) {
                let display = item;
                this.removeChild(display);
                for (let i = index + 1, n = this._items.length; i < n; i++) {
                    let child = this._items[i];
                    child.name = "item" + (i - 1);
                    if (autoLayout) {
                        if (this._direction == "horizontal") {
                            child.x -= display.width + this._space;
                        }
                        else {
                            child.y -= display.height + this._space;
                        }
                    }
                }
                this.initItems();
                if (this._selectedIndex > -1) {
                    let newIndex = this._selectedIndex < this._items.length ? this._selectedIndex : (this._selectedIndex - 1);
                    this._selectedIndex = -1;
                    this.selectedIndex = newIndex;
                }
            }
        }
        onAfterDeserialize() {
            super.onAfterDeserialize();
            if (!this._labels)
                this.initItems();
        }
        _afterInited() {
            this.initItems();
        }
        initItems() {
            this._items.length = 0;
            for (let i = 0; i < 10000; i++) {
                let item = this.getChildByName("item" + i);
                if (item == null)
                    break;
                this._items.push(item);
                item.selected = (i === this._selectedIndex);
                item.clickHandler = Laya.Handler.create(this, this.itemClick, [i], false);
            }
        }
        itemClick(index) {
            this.selectedIndex = index;
        }
        get selectedIndex() {
            return this._selectedIndex;
        }
        set selectedIndex(value) {
            if (this._selectedIndex != value) {
                this.setSelect(this._selectedIndex, false);
                this._selectedIndex = value;
                this.setSelect(value, true);
                this.event(Laya.Event.CHANGE);
                this.selectHandler && this.selectHandler.runWith(this._selectedIndex);
            }
        }
        setSelect(index, selected) {
            if (this._items && index > -1 && index < this._items.length)
                this._items[index].selected = selected;
        }
        get skin() {
            return this._skin;
        }
        set skin(value) {
            if (value == "")
                value = null;
            if (this._skin == value)
                return;
            this._setSkin(value);
        }
        _setSkin(url) {
            this._skin = url;
            if (url) {
                if (this._skinBaseUrl)
                    url = Laya.URL.formatURL(url, this._skinBaseUrl);
                if (Laya.Loader.getRes(url)) {
                    this._skinLoaded();
                    return Promise.resolve();
                }
                else
                    return Laya.ILaya.loader.load(url, Laya.Loader.IMAGE).then(tex => this._skinLoaded());
            }
            else {
                this._skinLoaded();
                return Promise.resolve();
            }
        }
        _skinLoaded() {
            this._setLabelChanged();
            this.event(Laya.Event.LOADED);
        }
        get labels() {
            return this._labels;
        }
        set labels(value) {
            if (value == "")
                value = null;
            if (this._labels != value) {
                this._labels = value;
                let i = 0;
                let n = this.numChildren;
                while (i < n) {
                    let item = this.getChildAt(i);
                    if (item.hasHideFlag(Laya.HideFlags.HideAndDontSave) && item.name && item.name.startsWith("item")) {
                        this.removeChildAt(i);
                        n--;
                    }
                    else
                        i++;
                }
                this._setLabelChanged();
                if (this._labels) {
                    let a = this._labels.split(",");
                    for (let i = 0, n = a.length; i < n; i++) {
                        let item = this.createItem(this._skin, a[i]);
                        item.name = "item" + i;
                        item.hideFlags = Laya.HideFlags.HideAndDontSave;
                        this.addChild(item);
                    }
                }
                this.initItems();
            }
        }
        createItem(skin, label) {
            return null;
        }
        get labelColors() {
            return this._labelColors;
        }
        set labelColors(value) {
            if (this._labelColors != value) {
                this._labelColors = value;
                this._setLabelChanged();
            }
        }
        get labelStroke() {
            return this._labelStroke;
        }
        set labelStroke(value) {
            if (this._labelStroke != value) {
                this._labelStroke = value;
                this._setLabelChanged();
            }
        }
        get labelStrokeColor() {
            return this._labelStrokeColor;
        }
        set labelStrokeColor(value) {
            if (this._labelStrokeColor != value) {
                this._labelStrokeColor = value;
                this._setLabelChanged();
            }
        }
        get strokeColors() {
            return this._strokeColors;
        }
        set strokeColors(value) {
            if (this._strokeColors != value) {
                this._strokeColors = value;
                this._setLabelChanged();
            }
        }
        get labelSize() {
            return this._labelSize;
        }
        set labelSize(value) {
            if (this._labelSize != value) {
                this._labelSize = value;
                this._setLabelChanged();
            }
        }
        get stateNum() {
            return this._stateNum;
        }
        set stateNum(value) {
            if (this._stateNum != value) {
                this._stateNum = value;
                this._setLabelChanged();
            }
        }
        get labelBold() {
            return this._labelBold;
        }
        set labelBold(value) {
            if (this._labelBold != value) {
                this._labelBold = value;
                this._setLabelChanged();
            }
        }
        get labelFont() {
            return this._labelFont;
        }
        set labelFont(value) {
            if (this._labelFont != value) {
                this._labelFont = value;
                this._setLabelChanged();
            }
        }
        get labelPadding() {
            return this._labelPadding;
        }
        set labelPadding(value) {
            if (this._labelPadding != value) {
                this._labelPadding = value;
                this._setLabelChanged();
            }
        }
        get direction() {
            return this._direction;
        }
        set direction(value) {
            this._direction = value;
            this._setLabelChanged();
        }
        get space() {
            return this._space;
        }
        set space(value) {
            this._space = value;
            this._setLabelChanged();
        }
        changeLabels() {
            this._labelChanged = false;
            if (this._items) {
                var left = 0;
                for (var i = 0, n = this._items.length; i < n; i++) {
                    var btn = this._items[i];
                    this._skin && (btn.skin = this._skin);
                    this._labelColors && (btn.labelColors = this._labelColors);
                    this._labelSize && (btn.labelSize = this._labelSize);
                    this._labelStroke && (btn.labelStroke = this._labelStroke);
                    this._labelStrokeColor && (btn.labelStrokeColor = this._labelStrokeColor);
                    this._strokeColors && (btn.strokeColors = this._strokeColors);
                    this._labelBold && (btn.labelBold = this._labelBold);
                    this._labelPadding && (btn.labelPadding = this._labelPadding);
                    this._labelAlign && (btn.labelAlign = this._labelAlign);
                    this._stateNum && (btn.stateNum = this._stateNum);
                    this._labelFont && (btn.labelFont = this._labelFont);
                    if (this._direction === "horizontal") {
                        btn.y = 0;
                        btn.x = left;
                        left += btn.width + this._space;
                    }
                    else {
                        btn.x = 0;
                        btn.y = left;
                        left += btn.height + this._space;
                    }
                }
            }
            this._sizeChanged();
        }
        commitMeasure() {
            this.runCallLater(this.changeLabels);
        }
        get items() {
            return this._items;
        }
        get selection() {
            return this._selectedIndex > -1 && this._selectedIndex < this._items.length ? this._items[this._selectedIndex] : null;
        }
        set selection(value) {
            this.selectedIndex = this._items.indexOf(value);
        }
        set_dataSource(value) {
            this._dataSource = value;
            if (typeof (value) == 'number' || typeof (value) == 'string')
                this.selectedIndex = parseInt(value);
            else if (value instanceof Array)
                this.labels = value.join(",");
            else
                super.set_dataSource(value);
        }
        _setLabelChanged() {
            if (!this._labelChanged) {
                this._labelChanged = true;
                this.callLater(this.changeLabels);
            }
        }
    }

    class RadioGroup extends UIGroup {
        createItem(skin, label) {
            let btn = new Radio();
            btn._skinBaseUrl = this._skinBaseUrl;
            if (skin)
                btn.skin = skin;
            btn.label = label;
            return btn;
        }
    }

    class ScaleBox extends Box {
        constructor() {
            super(...arguments);
            this._oldW = 0;
            this._oldH = 0;
        }
        onEnable() {
            Laya.ILaya.stage.on("resize", this, this.onResize);
            this.onResize();
        }
        onDisable() {
            Laya.ILaya.stage.off("resize", this, this.onResize);
        }
        onResize() {
            if (this.width > 0 && this.height > 0) {
                let stage = Laya.ILaya.stage;
                let scale = Math.min(stage.width / this._oldW, stage.height / this._oldH);
                super.width = stage.width;
                super.height = stage.height;
                this.scale(scale, scale);
            }
        }
        set_width(value) {
            super.set_width(value);
            this._oldW = value;
        }
        set_height(value) {
            super.set_height(value);
            this._oldH = value;
        }
    }

    class Tab extends UIGroup {
        createItem(skin, label) {
            let btn = new Button();
            btn._skinBaseUrl = this._skinBaseUrl;
            if (skin)
                btn.skin = skin;
            btn.label = label;
            return btn;
        }
    }

    class TextInput extends Label {
        constructor(text) {
            super();
            if (text != null)
                this.text = text;
            this.skin = this.skin;
        }
        preinitialize() {
            this.mouseEnabled = true;
        }
        createChildren() {
            this.graphics = new AutoBitmap();
            this._tf = new Laya.Input();
            this._tf.hideFlags = Laya.HideFlags.HideAndDontSave;
            this._tf.padding = Styles.inputLabelPadding;
            this._tf._onPostLayout = () => this._onPostLayout();
            this._tf.on(Laya.Event.INPUT, () => this.event(Laya.Event.INPUT));
            this._tf.on(Laya.Event.ENTER, () => this.event(Laya.Event.ENTER));
            this._tf.on(Laya.Event.BLUR, () => this.event(Laya.Event.BLUR));
            this._tf.on(Laya.Event.FOCUS, () => this.event(Laya.Event.FOCUS));
            this.addChild(this._tf);
        }
        initialize() {
            this.width = 128;
            this.height = 22;
        }
        get skin() {
            return this._skin;
        }
        set skin(value) {
            if (value == "")
                value = null;
            if (this._skin == value)
                return;
            this._setSkin(value);
        }
        _setSkin(url) {
            this._skin = url;
            if (url) {
                if (this._skinBaseUrl)
                    url = Laya.URL.formatURL(url, this._skinBaseUrl);
                let source = Laya.Loader.getRes(url);
                if (source) {
                    this._skinLoaded(source);
                    return Promise.resolve();
                }
                else
                    return Laya.ILaya.loader.load(url, Laya.Loader.IMAGE).then(tex => this._skinLoaded(tex));
            }
            else {
                this._skinLoaded(null);
                return Promise.resolve();
            }
        }
        _skinLoaded(source) {
            this._graphics.source = source;
            this._sizeChanged();
            this.event(Laya.Event.LOADED);
        }
        get sizeGrid() {
            return this._graphics && this._graphics.sizeGrid ? this._graphics.sizeGrid.join(",") : null;
        }
        set sizeGrid(value) {
            if (value)
                this._graphics.sizeGrid = UIUtils.fillArray(Styles.defaultSizeGrid, value, Number);
            else
                this._graphics.sizeGrid = null;
        }
        _setWidth(value) {
            super._setWidth(value);
            this._graphics && (this._graphics.width = value);
        }
        _setHeight(value) {
            super._setHeight(value);
            this._graphics && (this._graphics.height = value);
        }
        get multiline() {
            return this._tf.multiline;
        }
        set multiline(value) {
            this._tf.multiline = value;
        }
        set editable(value) {
            this._tf.editable = value;
        }
        get editable() {
            return this._tf.editable;
        }
        select() {
            this._tf.select();
        }
        get restrict() {
            return this._tf.restrict;
        }
        set restrict(pattern) {
            this._tf.restrict = pattern;
        }
        get prompt() {
            return this._tf.prompt;
        }
        set prompt(value) {
            this._tf.prompt = value;
        }
        get promptColor() {
            return this._tf.promptColor;
        }
        set promptColor(value) {
            this._tf.promptColor = value;
        }
        get maxChars() {
            return this._tf.maxChars;
        }
        set maxChars(value) {
            this._tf.maxChars = value;
        }
        get focus() {
            return this._tf.focus;
        }
        set focus(value) {
            this._tf.focus = value;
        }
        get type() {
            return this._tf.type;
        }
        set type(value) {
            this._tf.type = value;
        }
        setSelection(startIndex, endIndex) {
            this._tf.setSelection(startIndex, endIndex);
        }
    }

    class TextArea extends TextInput {
        constructor(text) {
            super(text);
            this._scrollType = 0;
        }
        _onPostLayout() {
            super._onPostLayout();
            this.callLater(this.changeScroll);
        }
        destroy(destroyChild = true) {
            this._vScrollBar && this._vScrollBar.destroy();
            this._hScrollBar && this._hScrollBar.destroy();
            this._vScrollBar = null;
            this._hScrollBar = null;
            super.destroy(destroyChild);
        }
        initialize() {
            this.width = 180;
            this.height = 150;
            this._tf.wordWrap = true;
            this.multiline = true;
        }
        _setWidth(value) {
            super._setWidth(value);
            this.callLater(this.changeScroll);
        }
        _setHeight(value) {
            super._setHeight(value);
            this.callLater(this.changeScroll);
        }
        get scrollType() {
            return this._scrollType;
        }
        set scrollType(value) {
            this._scrollType = value;
            if (this._scrollType == exports.ScrollType.None) {
                if (this._hScrollBar) {
                    this._hScrollBar.destroy();
                    this._hScrollBar = null;
                }
                if (this._vScrollBar) {
                    this._vScrollBar.destroy();
                    this._vScrollBar = null;
                }
            }
            else if (this._scrollType == exports.ScrollType.Horizontal) {
                if (this._vScrollBar) {
                    this._vScrollBar.destroy();
                    this._vScrollBar = null;
                }
                if (this._hScrollBar)
                    this._hScrollBar.skin = this._hScrollBarSkin;
                else
                    this.createHScrollBar();
            }
            else if (this._scrollType == exports.ScrollType.Vertical) {
                if (this._hScrollBar) {
                    this._hScrollBar.destroy();
                    this._hScrollBar = null;
                }
                if (this._vScrollBar)
                    this._vScrollBar.skin = this._vScrollBarSkin;
                else
                    this.createVScrollBar();
            }
            else {
                if (this._hScrollBar)
                    this._hScrollBar.skin = this._hScrollBarSkin;
                else
                    this.createHScrollBar();
                if (this._vScrollBar)
                    this._vScrollBar.skin = this._vScrollBarSkin;
                else
                    this.createVScrollBar();
            }
        }
        createHScrollBar() {
            this._hScrollBar = new HScrollBar();
            this._hScrollBar.hideFlags = Laya.HideFlags.HideAndDontSave;
            this._hScrollBar._skinBaseUrl = this._skinBaseUrl;
            this._hScrollBar.skin = this._hScrollBarSkin;
            this.addChild(this._hScrollBar);
            this._hScrollBar.on(Laya.Event.CHANGE, this, this.onHBarChanged);
            this._hScrollBar.on(Laya.Event.LOADED, this, this.changeScroll);
            this._hScrollBar.mouseWheelEnable = false;
            this._hScrollBar.touchScrollEnable = false;
            this._hScrollBar.target = this._tf;
            this.callLater(this.changeScroll);
        }
        createVScrollBar() {
            this._vScrollBar = new VScrollBar();
            this._vScrollBar.hideFlags = Laya.HideFlags.HideAndDontSave;
            this._vScrollBar._skinBaseUrl = this._skinBaseUrl;
            this._vScrollBar.skin = this._vScrollBarSkin;
            this.addChild(this._vScrollBar);
            this._vScrollBar.on(Laya.Event.CHANGE, this, this.onVBarChanged);
            this._vScrollBar.on(Laya.Event.LOADED, this, this.changeScroll);
            this._vScrollBar.touchScrollEnable = false;
            this._vScrollBar.target = this._tf;
            this.callLater(this.changeScroll);
        }
        get vScrollBarSkin() {
            return this._vScrollBarSkin;
        }
        set vScrollBarSkin(value) {
            if (value == "")
                value = null;
            if (this._vScrollBarSkin != value) {
                this._vScrollBarSkin = value;
                if (this._scrollType == 0)
                    this.scrollType = exports.ScrollType.Vertical;
                else if (this._scrollType == exports.ScrollType.Horizontal)
                    this.scrollType = exports.ScrollType.Both;
                else
                    this.scrollType = this._scrollType;
            }
        }
        get hScrollBarSkin() {
            return this._hScrollBarSkin;
        }
        set hScrollBarSkin(value) {
            if (value == "")
                value = null;
            if (this._hScrollBarSkin != value) {
                this._hScrollBarSkin = value;
                if (this._scrollType == 0)
                    this.scrollType = exports.ScrollType.Horizontal;
                else if (this._scrollType == exports.ScrollType.Vertical)
                    this.scrollType = exports.ScrollType.Both;
                this.scrollType = this._scrollType;
            }
        }
        onVBarChanged(e) {
            if (this._tf.scrollY != this._vScrollBar.value) {
                this._tf.scrollY = this._vScrollBar.value;
            }
        }
        onHBarChanged(e) {
            if (this._tf.scrollX != this._hScrollBar.value) {
                this._tf.scrollX = this._hScrollBar.value;
            }
        }
        get vScrollBar() {
            return this._vScrollBar;
        }
        get hScrollBar() {
            return this._hScrollBar;
        }
        get maxScrollY() {
            return this._tf.maxScrollY;
        }
        get scrollY() {
            return this._tf.scrollY;
        }
        get maxScrollX() {
            return this._tf.maxScrollX;
        }
        get scrollX() {
            return this._tf.scrollX;
        }
        changeScroll() {
            let vShow = this._vScrollBar && this._tf.maxScrollY > 0;
            let hShow = this._hScrollBar && this._tf.maxScrollX > 0;
            let padding = this._tf.padding;
            let showWidth = vShow ? this._width - this._vScrollBar.width - padding[2] : this._width;
            let showHeight = hShow ? this._height - this._hScrollBar.height - padding[3] : this._height;
            this._tf.size(showWidth, showHeight);
            if (this._vScrollBar) {
                this._vScrollBar.x = this._width - this._vScrollBar.width - padding[2];
                this._vScrollBar.y = padding[1];
                this._vScrollBar.height = this._height - (hShow ? this._hScrollBar.height : 0) - padding[1] - padding[3];
                this._vScrollBar.scrollSize = 1;
                this._vScrollBar.thumbPercent = showHeight / Math.max(this._tf.textHeight, showHeight);
                this._vScrollBar.setScroll(1, this._tf.maxScrollY, this._tf.scrollY);
                this._vScrollBar.visible = vShow;
            }
            if (this._hScrollBar) {
                this._hScrollBar.x = padding[0];
                this._hScrollBar.y = this._height - this._hScrollBar.height - padding[3];
                this._hScrollBar.width = this._width - (vShow ? this._vScrollBar.width : 0) - padding[0] - padding[2];
                this._hScrollBar.scrollSize = Math.max(showWidth * 0.033, 1);
                this._hScrollBar.thumbPercent = showWidth / Math.max(this._tf.textWidth, showWidth);
                this._hScrollBar.setScroll(0, this.maxScrollX, this.scrollX);
                this._hScrollBar.visible = hShow;
            }
        }
        scrollTo(y) {
            this.commitMeasure();
            this._tf.scrollY = y;
        }
    }

    class TipManager extends UIComponent {
        constructor() {
            super();
            this._tipBox = new UIComponent();
            this._tipBox.addChild(this._tipText = new Laya.Text());
            this._tipText.x = this._tipText.y = 5;
            this._tipText.color = TipManager.tipTextColor;
            this._defaultTipHandler = this._showDefaultTip;
            Laya.ILaya.stage.on(UIEvent.SHOW_TIP, this, this._onStageShowTip);
            Laya.ILaya.stage.on(UIEvent.HIDE_TIP, this, this._onStageHideTip);
            this.zOrder = 1100;
        }
        _onStageHideTip(e) {
            Laya.ILaya.timer.clear(this, this._showTip);
            this.closeAll();
            this.removeSelf();
        }
        _onStageShowTip(data) {
            Laya.ILaya.timer.once(TipManager.tipDelay, this, this._showTip, [data], true);
        }
        _showTip(tip) {
            if (typeof (tip) == 'string') {
                var text = String(tip);
                if (Boolean(text)) {
                    this._defaultTipHandler(text);
                }
            }
            else if (tip instanceof Laya.Handler) {
                tip.run();
            }
            else if (tip instanceof Function) {
                tip.apply();
            }
            {
                Laya.ILaya.stage.on(Laya.Event.MOUSE_MOVE, this, this._onStageMouseMove);
                Laya.ILaya.stage.on(Laya.Event.MOUSE_DOWN, this, this._onStageMouseDown);
            }
            this._onStageMouseMove(null);
        }
        _onStageMouseDown(e) {
            this.closeAll();
        }
        _onStageMouseMove(e) {
            this._showToStage(this, TipManager.offsetX, TipManager.offsetY);
        }
        _showToStage(dis, offX = 0, offY = 0) {
            var rec = dis.getBounds();
            dis.x = Laya.ILaya.stage.mouseX + offX;
            dis.y = Laya.ILaya.stage.mouseY + offY;
            if (dis._x + rec.width > Laya.ILaya.stage.width) {
                dis.x -= rec.width + offX;
            }
            if (dis._y + rec.height > Laya.ILaya.stage.height) {
                dis.y -= rec.height + offY;
            }
        }
        closeAll() {
            Laya.ILaya.timer.clear(this, this._showTip);
            Laya.ILaya.stage.off(Laya.Event.MOUSE_MOVE, this, this._onStageMouseMove);
            Laya.ILaya.stage.off(Laya.Event.MOUSE_DOWN, this, this._onStageMouseDown);
            this.removeChildren();
        }
        showDislayTip(tip) {
            this.addChild(tip);
            this._showToStage(this);
            Laya.ILaya.stage.addChild(this);
        }
        _showDefaultTip(text) {
            this._tipText.text = text;
            var g = this._tipBox.graphics;
            g.clear(true);
            g.drawRect(0, 0, this._tipText.width + 10, this._tipText.height + 10, TipManager.tipBackColor);
            this.addChild(this._tipBox);
            this._showToStage(this);
            Laya.ILaya.stage.addChild(this);
        }
        get defaultTipHandler() {
            return this._defaultTipHandler;
        }
        set defaultTipHandler(value) {
            this._defaultTipHandler = value;
        }
    }
    TipManager.offsetX = 10;
    TipManager.offsetY = 15;
    TipManager.tipTextColor = "#ffffff";
    TipManager.tipBackColor = "#111111";
    TipManager.tipDelay = 200;

    class Tree extends Box {
        constructor() {
            super();
            this._spaceLeft = 10;
            this._spaceBottom = 0;
            this._keepStatus = true;
            this.width = this.height = 200;
        }
        destroy(destroyChild = true) {
            super.destroy(destroyChild);
            this._list && this._list.destroy(destroyChild);
            this._list = null;
            this._source = null;
            this._renderHandler = null;
        }
        createChildren() {
            this._list = new List();
            this._list.hideFlags = Laya.HideFlags.HideAndDontSave;
            this._list.left = 0;
            this._list.right = 0;
            this._list.top = 0;
            this._list.bottom = 0;
            this._list._skinBaseUrl = this._skinBaseUrl;
            this.addChild(this._list);
            this._list.renderHandler = Laya.Handler.create(this, this.renderItem, null, false);
            this._list.repeatX = 1;
            this._list.on(Laya.Event.CHANGE, this, this.onListChange);
        }
        onListChange(e = null) {
            this.event(Laya.Event.CHANGE);
        }
        get keepStatus() {
            return this._keepStatus;
        }
        set keepStatus(value) {
            this._keepStatus = value;
        }
        get array() {
            return this._list.array;
        }
        set array(value) {
            if (this._keepStatus && this._list.array && value) {
                this.parseOpenStatus(this._list.array, value);
            }
            this._source = value;
            this._list.array = this.getArray();
        }
        get source() {
            return this._source;
        }
        get list() {
            return this._list;
        }
        get itemRender() {
            return this._list.itemRender;
        }
        set itemRender(value) {
            this._list.itemRender = value;
        }
        get scrollBarSkin() {
            return this._list.vScrollBarSkin;
        }
        set scrollBarSkin(value) {
            this._list.vScrollBarSkin = value;
        }
        get scrollBar() {
            return this._list.scrollBar;
        }
        get mouseHandler() {
            return this._list.mouseHandler;
        }
        set mouseHandler(value) {
            this._list.mouseHandler = value;
        }
        get renderHandler() {
            return this._renderHandler;
        }
        set renderHandler(value) {
            this._renderHandler = value;
        }
        get spaceLeft() {
            return this._spaceLeft;
        }
        set spaceLeft(value) {
            this._spaceLeft = value;
        }
        get spaceBottom() {
            return this._list.spaceY;
        }
        set spaceBottom(value) {
            this._list.spaceY = value;
        }
        get selectedIndex() {
            return this._list.selectedIndex;
        }
        set selectedIndex(value) {
            this._list.selectedIndex = value;
        }
        get selectedItem() {
            return this._list.selectedItem;
        }
        set selectedItem(value) {
            this._list.selectedItem = value;
        }
        getArray() {
            var arr = [];
            for (let key in this._source) {
                let item = this._source[key];
                if (this.getParentOpenStatus(item)) {
                    item.x = this._spaceLeft * this.getDepth(item);
                    arr.push(item);
                }
            }
            return arr;
        }
        getDepth(item, num = 0) {
            if (item.nodeParent == null)
                return num;
            else
                return this.getDepth(item.nodeParent, num + 1);
        }
        getParentOpenStatus(item) {
            var parent = item.nodeParent;
            if (parent == null) {
                return true;
            }
            else {
                if (parent.isOpen) {
                    if (parent.nodeParent != null)
                        return this.getParentOpenStatus(parent);
                    else
                        return true;
                }
                else {
                    return false;
                }
            }
        }
        renderItem(cell, index) {
            var item = cell.dataSource;
            if (item) {
                cell.left = item.x;
                var arrow = cell.getChildByName("arrow");
                if (arrow) {
                    if (item.hasChild) {
                        arrow.visible = true;
                        arrow.index = item.isOpen ? 1 : 0;
                        arrow.__cellIndex = index;
                        arrow.off(Laya.Event.CLICK, this, this.onArrowClick);
                        arrow.on(Laya.Event.CLICK, this, this.onArrowClick);
                    }
                    else {
                        arrow.visible = false;
                    }
                }
                var folder = cell.getChildByName("folder");
                if (folder) {
                    if (folder.clipY == 2) {
                        folder.index = item.isDirectory ? 0 : 1;
                    }
                    else {
                        folder.index = item.isDirectory ? item.isOpen ? 1 : 0 : 2;
                    }
                }
                this._renderHandler && this._renderHandler.runWith([cell, index]);
            }
        }
        onArrowClick(e) {
            var arrow = e.currentTarget;
            var index = arrow.__cellIndex;
            this._list.array[index].isOpen = !this._list.array[index].isOpen;
            this.event(Laya.Event.OPEN);
            this._list.array = this.getArray();
        }
        setItemState(index, isOpen) {
            if (!this._list.array[index])
                return;
            this._list.array[index].isOpen = isOpen;
            this._list.array = this.getArray();
        }
        fresh() {
            this._list.array = this.getArray();
            this.repaint();
        }
        set_dataSource(value) {
            this._dataSource = value;
            super.set_dataSource(value);
        }
        set xml(value) {
            var arr = [];
            this.parseXml(value, arr, null, true);
            this.array = arr;
        }
        parseXml(xml, source, nodeParent, isRoot) {
            var obj;
            var list = xml.elements();
            var childCount = list.length;
            if (!isRoot) {
                obj = {};
                var list2 = xml.attributes;
                for (let key in list2) {
                    var value = list2[key];
                    obj[key] = value == "true" ? true : value == "false" ? false : value;
                }
                obj.nodeParent = nodeParent;
                if (childCount > 0)
                    obj.isDirectory = true;
                obj.hasChild = childCount > 0;
                source.push(obj);
            }
            for (var i = 0; i < childCount; i++) {
                var node = list[i];
                this.parseXml(node, source, obj, false);
            }
        }
        parseOpenStatus(oldSource, newSource) {
            for (var i = 0, n = newSource.length; i < n; i++) {
                var newItem = newSource[i];
                if (newItem.isDirectory) {
                    for (var j = 0, m = oldSource.length; j < m; j++) {
                        var oldItem = oldSource[j];
                        if (oldItem.isDirectory && this.isSameParent(oldItem, newItem) && newItem.label == oldItem.label) {
                            newItem.isOpen = oldItem.isOpen;
                            break;
                        }
                    }
                }
            }
        }
        isSameParent(item1, item2) {
            if (item1.nodeParent == null && item2.nodeParent == null)
                return true;
            else if (item1.nodeParent == null || item2.nodeParent == null)
                return false;
            else {
                if (item1.nodeParent.label == item2.nodeParent.label)
                    return this.isSameParent(item1.nodeParent, item2.nodeParent);
                else
                    return false;
            }
        }
        get selectedPath() {
            if (this._list.selectedItem) {
                return this._list.selectedItem.path;
            }
            return null;
        }
        filter(key) {
            if (Boolean(key)) {
                var result = [];
                this.getFilterSource(this._source, result, key);
                this._list.array = result;
            }
            else {
                this._list.array = this.getArray();
            }
        }
        getFilterSource(array, result, key) {
            key = key.toLocaleLowerCase();
            for (let item of array) {
                if (!item.isDirectory && String(item.label).toLowerCase().indexOf(key) > -1) {
                    item.x = 0;
                    result.push(item);
                }
                if (item.child && item.child.length > 0) {
                    this.getFilterSource(item.child, result, key);
                }
            }
        }
    }

    class VBox extends LayoutBox {
        constructor() {
            super(...arguments);
            this.isSortItem = false;
        }
        _setWidth(value) {
            super._setWidth(value);
            this.callLater(this.changeItems);
        }
        changeItems() {
            this._itemChanged = false;
            let items = [];
            let maxWidth = 0;
            for (let i = 0, n = this.numChildren; i < n; i++) {
                let item = this.getChildAt(i);
                if (item) {
                    items.push(item);
                    maxWidth = this._isWidthSet ? this._width : Math.max(maxWidth, item.width * item.scaleX);
                }
            }
            if (this.isSortItem) {
                this.sortItem(items);
            }
            let top = 0;
            for (let i = 0, n = items.length; i < n; i++) {
                let item = items[i];
                item.y = top;
                top += item.height * item.scaleY + this._space;
                if (this._align == VBox.LEFT) {
                    item.x = 0;
                }
                else if (this._align == VBox.CENTER) {
                    item.x = (maxWidth - item.width * item.scaleX) * 0.5;
                }
                else if (this._align == VBox.RIGHT) {
                    item.x = maxWidth - item.width * item.scaleX;
                }
            }
            this._sizeChanged();
        }
    }
    VBox.NONE = "none";
    VBox.LEFT = "left";
    VBox.CENTER = "center";
    VBox.RIGHT = "right";

    class ViewStack extends Box {
        constructor() {
            super();
            this._setIndexHandler = Laya.Handler.create(this, this.setIndex, null, false);
            this._items = [];
        }
        setItems(views) {
            this.removeChildren();
            var index = 0;
            for (var i = 0, n = views.length; i < n; i++) {
                var item = views[i];
                if (item) {
                    item.name = "item" + index;
                    this.addChild(item);
                    index++;
                }
            }
            this.initItems();
        }
        addItem(view) {
            view.name = "item" + this._items.length;
            this.addChild(view);
            this.initItems();
        }
        onAfterDeserialize() {
            super.onAfterDeserialize();
            this.initItems();
        }
        _afterInited() {
            this.initItems();
        }
        initItems() {
            this._items.length = 0;
            for (var i = 0; i < 10000; i++) {
                var item = this.getChildByName("item" + i);
                if (item == null) {
                    break;
                }
                this._items.push(item);
                item.visible = (i == this._selectedIndex);
            }
        }
        get selectedIndex() {
            return this._selectedIndex;
        }
        set selectedIndex(value) {
            if (this._selectedIndex != value) {
                this.setSelect(this._selectedIndex, false);
                this._selectedIndex = value;
                this.setSelect(this._selectedIndex, true);
            }
        }
        setSelect(index, selected) {
            if (this._items && index > -1 && index < this._items.length) {
                this._items[index].visible = selected;
            }
        }
        get selection() {
            return this._selectedIndex > -1 && this._selectedIndex < this._items.length ? this._items[this._selectedIndex] : null;
        }
        set selection(value) {
            this.selectedIndex = this._items.indexOf(value);
        }
        get setIndexHandler() {
            return this._setIndexHandler;
        }
        set setIndexHandler(value) {
            this._setIndexHandler = value;
        }
        setIndex(index) {
            this.selectedIndex = index;
        }
        get items() {
            return this._items;
        }
        set_dataSource(value) {
            this._dataSource = value;
            if (typeof (value) == 'number' || typeof (value) == 'string') {
                this.selectedIndex = parseInt(value);
            }
            else {
                for (var prop in this._dataSource) {
                    if (prop in this) {
                        this[prop] = this._dataSource[prop];
                    }
                }
            }
        }
    }

    class VSlider extends Slider {
    }

    class OpenDataContextView extends UIComponent {
        constructor() {
            super();
            this._fps = 30;
            this._width = this._height = 200;
            let tex = new Laya.Texture(new Laya.Texture2D(this._width, this._height, Laya.TextureFormat.R8G8B8A8, false, false, false));
            tex.bitmap.lock = true;
            this.texture = tex;
        }
        get fps() {
            return this._fps;
        }
        set fps(value) {
            if (this._fps != value) {
                this._fps = value;
                if (Laya.LayaEnv.isPlaying && this.activeInHierarchy
                    && window.wx && window.sharedCanvas) {
                    Laya.ILaya.timer.clear(this, this._onLoop);
                    Laya.ILaya.timer.loop(1000 / value, this, this._onLoop);
                }
            }
        }
        _onActive() {
            if (!Laya.LayaEnv.isPlaying)
                return;
            if (window.wx && window.sharedCanvas)
                Laya.ILaya.timer.loop(1000 / this._fps, this, this._onLoop);
        }
        _onInActive() {
            if (!Laya.LayaEnv.isPlaying)
                return;
            this.postMsg({ type: "close" });
            Laya.ILaya.timer.clear(this, this._onLoop);
        }
        _onLoop() {
            let tex = this.texture;
            let canvas = window.sharedCanvas;
            if (tex.width != canvas.width || tex.height != canvas.height) {
                tex.bitmap.destroy();
                tex.bitmap = new Laya.Texture2D(canvas.width, canvas.height, Laya.TextureFormat.R8G8B8A8, false, false, false);
                tex.bitmap.lock = true;
            }
            tex.bitmap.setImageData(canvas, true, false);
        }
        _setWidth(value) {
            super._setWidth(value);
            if (window.sharedCanvas)
                window.sharedCanvas.width = value;
            this.callLater(this.updateViewPort);
        }
        _setHeight(value) {
            super._setHeight(value);
            if (window.sharedCanvas)
                window.sharedCanvas.height = value;
            this.callLater(this.updateViewPort);
        }
        set x(value) {
            super.x = value;
            this.callLater(this.updateViewPort);
        }
        get x() {
            return super.x;
        }
        set y(value) {
            super.y = value;
            this.callLater(this.updateViewPort);
        }
        get y() {
            return super.y;
        }
        updateViewPort() {
            let stage = Laya.ILaya.stage;
            let sx = stage._canvasTransform.getScaleX() * this.globalScaleX * stage.transform.getScaleX();
            let sy = stage._canvasTransform.getScaleY() * this.globalScaleY * stage.transform.getScaleY();
            this.postMsg({
                type: "updateViewPort",
                box: {
                    x: this.x * sx,
                    y: this.y * sy,
                    width: this.width * sx,
                    height: this.height * sy,
                }
            });
        }
        postMsg(msg) {
            if (window.wx && window.wx.getOpenDataContext) {
                var openDataContext = window.wx.getOpenDataContext();
                openDataContext.postMessage(msg);
            }
        }
    }

    let c = Laya.ClassUtils.regClass;
    c("AutoBitmap", AutoBitmap);
    c("Box", Box);
    c("Button", Button);
    c("CheckBox", CheckBox);
    c("Clip", Clip);
    c("ColorPicker", ColorPicker);
    c("ComboBox", ComboBox);
    c("Dialog", Dialog);
    c("DialogManager", DialogManager);
    c("FontClip", FontClip);
    c("HBox", HBox);
    c("HScrollBar", HScrollBar);
    c("HSlider", HSlider);
    c("Image", Image);
    c("Label", Label);
    c("LayoutBox", LayoutBox);
    c("List", List);
    c("Panel", Panel);
    c("ProgressBar", ProgressBar);
    c("Radio", Radio);
    c("RadioGroup", RadioGroup);
    c("ScaleBox", ScaleBox);
    c("ScrollBar", ScrollBar);
    c("Slider", Slider);
    c("Tab", Tab);
    c("TextArea", TextArea);
    c("TextInput", TextInput);
    c("TipManager", TipManager);
    c("Tree", Tree);
    c("UIGroup", UIGroup);
    c("UIUtils", UIUtils);
    c("VBox", VBox);
    c("View", View);
    c("ViewStack", ViewStack);
    c("VScrollBar", VScrollBar);
    c("VSlider", VSlider);
    c("UIComponent", UIComponent);
    c("OpenDataContextView", OpenDataContextView);

    exports.AutoBitmap = AutoBitmap;
    exports.Box = Box;
    exports.Button = Button;
    exports.CheckBox = CheckBox;
    exports.Clip = Clip;
    exports.ColorPicker = ColorPicker;
    exports.ComboBox = ComboBox;
    exports.Dialog = Dialog;
    exports.DialogManager = DialogManager;
    exports.FontClip = FontClip;
    exports.HBox = HBox;
    exports.HScrollBar = HScrollBar;
    exports.HSlider = HSlider;
    exports.Image = Image;
    exports.Label = Label;
    exports.LayoutBox = LayoutBox;
    exports.List = List;
    exports.OpenDataContextView = OpenDataContextView;
    exports.Panel = Panel;
    exports.ProgressBar = ProgressBar;
    exports.Radio = Radio;
    exports.RadioGroup = RadioGroup;
    exports.ScaleBox = ScaleBox;
    exports.ScrollBar = ScrollBar;
    exports.Slider = Slider;
    exports.Styles = Styles;
    exports.Tab = Tab;
    exports.TextArea = TextArea;
    exports.TextInput = TextInput;
    exports.TipManager = TipManager;
    exports.Tree = Tree;
    exports.UIComponent = UIComponent;
    exports.UIConfig = UIConfig;
    exports.UIEvent = UIEvent;
    exports.UIGroup = UIGroup;
    exports.UIUtils = UIUtils;
    exports.VBox = VBox;
    exports.VScrollBar = VScrollBar;
    exports.VSlider = VSlider;
    exports.View = View;
    exports.ViewStack = ViewStack;

})(window.Laya = window.Laya || {}, Laya);
//# sourceMappingURL=laya.ui.js.map
