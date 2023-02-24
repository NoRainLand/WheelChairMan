import { DataTableEnum } from "../Enum/DataTableEnum";
import ResUrl from "../Url/ResUrl";
import PrefabImpl = Laya.PrefabImpl;
import Text = Laya.Text;
import Box = Laya.Box;
import Scene = Laya.Scene;
import Label = Laya.Label;
import Image = Laya.Image;
import TextInput = Laya.TextInput;
import Sprite = Laya.Sprite;
import List = Laya.List;
import Handler = Laya.Handler;
import TextResource = Laya.TextResource;
/*
 * @Author: NoRain 
 * @Date: 2023-02-12 15:09:35 
 * @Last Modified by: NoRain
 * @Last Modified time: 2023-02-24 23:18:52
 */
/**资源加载器 */
export default class ResLoader {

    private static _instance: ResLoader;
    public static get instance(): ResLoader {
        return this._instance ? this._instance : this._instance = new ResLoader();
    }


    /**
     * 基础加载器
     * @param url 资源地址,必须是一个string或者string[]
     * @param onCompleted 加载完成回调
     * @param _onProgress 加载进度
     */
    load(url: string | string[], onCompleted?: Handler, _onProgress?: Handler): Promise<any> {
        if (!url || url.length == 0) {
            onCompleted && onCompleted.run();
            _onProgress && (_onProgress.args = [1], _onProgress.run());
        } else {
            if (url instanceof Array) {
                url.filter((item) => { item != "" }); //清理空值
            }
            return Laya.loader.load(url, onCompleted, _onProgress);
        }
    }
    /**获取缓存 */
    getRes(url: string): any {
        if (url) {
            return Laya.loader.getRes(url);
        }
    }

    /**获取克隆 */
    getResClose(url: string): any {
        if (url) {
            let obj = Laya.loader.getRes(url);
            if (obj && obj.create) {
                return obj.create();
            }
        }
        return null;
    }



    /**总资源加载数量 */
    private $total_num: number = 0;
    /**当前已经完成加载数量 */
    private $now_num: number = 0;
    /**完成回调 */
    private $onCompleted: Handler;
    /**进度 */
    private $onProgress: Handler;
    /**是否进行预加载了 */
    private isLoad: boolean = false;

    /**游戏所有资源地址 */
    private $dicAssetsPath: Map<number, Object> = new Map();

    /**加载完成一个 */
    private $load_one_onCompleted() {
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
    preloadRes(onCompleted: Handler, _onProgress: Handler) {
        if (!this.isLoad) {
            this.isLoad = true;
            this.$onCompleted = onCompleted;
            this.$onProgress = _onProgress;
            this.load(ResUrl.AssetPath).then((path: TextResource) => {


                this.$dicAssetsPath = this.stringParser(path.data, true);
                console.log(this.$dicAssetsPath)
                for (let [, value] of this.$dicAssetsPath) {
                    if (value && value["preload"] == 1) {
                        this.$total_num++;
                        this.load(value["path"], Handler.create(this, this.$load_one_onCompleted));
                    }
                }


            }).catch((err) => {
                console.warn("无法加载配置文件");
            })
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
    stringParser(shotString: string, $isUrl: boolean = false): Map<number, Object> {
        if (shotString) {
            let arr: string[] = shotString.split("\n");
            let shotArr, keyList: Array<string>, typeList: Array<string>, map = new Map();
            for (let i = 0; i < arr.length; i++) {
                let str = arr[i];
                if (str.length) {
                    if ($isUrl) {
                        shotArr = str.replace("\r", "").split("\\").join("/").replace("assets/", "").split("\t");
                    } else {
                        shotArr = str.replace("\r", "").split("\\n").join("\n").split("\t");
                    }
                    if (i == 2) {
                        keyList = shotArr;
                        keyList = keyList.filter((item) => { return item != "$" });
                    } else if (i == 3) {
                        typeList = shotArr;
                        typeList = typeList.filter((item) => { return item != "#" });
                    } else if (i > 3) {
                        shotArr = shotArr.filter((item) => { return item != "" });
                        if (shotArr[0] != "#") {
                            let data = {}, id: number;
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
    getDataTableById(assetsId: DataTableEnum): Map<number, Object> {
        let data = this.getResById(assetsId);
        if (data && data.data) {
            let obj = this.stringParser(data.data);
            return obj;
        }
        return null;
    }


    /**通过唯一Id获取资源 */
    getResById(assetsId: number): any {
        let obj = this.$dicAssetsPath.get(assetsId);
        if (obj && obj["path"]) {
            return this.getRes(obj['path']);
        }
    }


    /**通过唯一id获取url */
    getUrlById(assetsId: number): string {
        let obj = this.$dicAssetsPath.get(assetsId);
        if (obj && obj["path"]) {
            return obj["path"];
        }
    }







}