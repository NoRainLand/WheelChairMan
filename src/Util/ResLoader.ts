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
 * @Last Modified time: 2023-02-16 20:09:46
 */
/**资源加载器 */
export default class ResLoader {

    /**
     * 基础加载器
     * @param url 资源地址,必须是一个string或者string[]
     * @param onCompleted 加载完成回调
     * @param _onProgress 加载进度
     */
    static load(url: string | string[], onCompleted?: Handler, _onProgress?: Handler): Promise<any> {
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
    static getRes(url: string): any {
        if (url) {
            return Laya.loader.getRes(url);
        }
    }

    /**获取克隆 */
    static getResClose(url: string): any {
        if (url) {
            let obj = Laya.loader.getRes(url);
            if (obj && obj.create) {
                return obj.create();
            }
        }
        return null;
    }



    /**总资源加载数量 */
    private static $total_num: number = 0;
    /**当前已经完成加载数量 */
    private static $now_num: number = 0;
    /**完成回调 */
    private static $onCompleted: Handler;
    /**进度 */
    private static $onProgress: Handler;
    /**是否进行预加载了 */
    private static isLoad: boolean = false;

    /**游戏所有资源地址 */
    private static $dicAssetsPath: Map<number, Object> = new Map();

    /**加载完成一个 */
    private static $load_one_onCompleted() {
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
    static preloadRes(onCompleted: Handler, _onProgress: Handler) {
        if (!this.isLoad) {
            this.isLoad = true;
            this.$onCompleted = onCompleted;
            this.$onProgress = _onProgress;
            this.load(ResUrl.AssetPath).then((path: TextResource) => {


                this.$dicAssetsPath = this.strParser(path.data);
                // console.log(this.$dicAssetsPath)
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
     * @param data 数据
     * @returns 返回一个以id作为key的map
     */
    static strParser(data: string): Map<number, Object> {
        if (data) {
            let arr: string[] = data.split("\n");
            let str = arr.find((item) => {
                return item.indexOf("$") != -1;
            })
            let arr2 = str.replace("\r", "").replace("$", "").split("\t");
            arr2 = arr2.filter((item) => { return item != "" })
            let map = new Map();

            arr.forEach((item, index) => {
                if (item[0] != "#" && item[0] != "$" && item != "") {//移除注释空行
                    let arr3 = item.replace("\r", "").split("\\").join("/").replace("assets/", "").split("\t");
                    arr3 = arr3.filter((item) => { return item != "" });
                    let data = {};
                    for (let i = 0; i < arr2.length; i++) {
                        if (isNaN(Number(arr3[i]))) {
                            data[arr2[i]] = arr3[i];
                        } else {
                            data[arr2[i]] = Number(arr3[i]);
                        }
                    }
                    map.set(Number(data["id"]), data);
                }
            })
            return map;
        }
    }

    /**通过唯一id获取数据表 */
    static getDataTableById(assetsId: DataTableEnum): Map<number, Object> {
        let data = this.getResById(assetsId);
        if (data && data.data) {
            let obj = this.strParser(data.data);
            return obj;
        }
        return null;
    }


    /**通过唯一Id获取资源 */
    static getResById(assetsId: number): any {
        let obj = this.$dicAssetsPath.get(assetsId);
        if (obj && obj["path"]) {
            return this.getRes(obj['path']);
        }
    }


    /**通过唯一id获取url */
    static getUrlById(assetsId: number): string {
        let obj = this.$dicAssetsPath.get(assetsId);
        if (obj && obj["path"]) {
            return obj["path"];
        }
    }







}