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
 * @Last Modified time: 2023-02-13 21:15:50
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
                url.filter(Boolean); //清理空值
            }
            return Laya.loader.load(url, onCompleted, _onProgress);
        }
    }
    /**获取缓存 */
    static getRes(url: string): any {
        if (!url) {
            return Laya.loader.getRes(url);
        }
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
    private static $dicAssetsPath = [];

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
                let arr: string[] = path.data.split("\n");
                let str = arr.find((item) => {
                    return item.indexOf("$") != -1;
                })
                str = str.replace("\r", "");
                str = str.replace("$", "");
                let arr2 = str.split("\t");
                arr2 = arr2.filter((item) => { return item != "" })
                console.log(arr2);
                arr.forEach((item, index) => {
                    if (item[0] != "#" && item[0] != "$" && item != "") {//移除注释空行
                        let arr3 = item.replace("\r", "").split("\\").join("/").replace("assets", "").split("\t");
                        arr3 = arr3.filter((item) => { return item != "" });
                        let data = {};
                        for (let i = 0; i < arr2.length; i++) {
                            data[arr2[i]] = arr3[i];
                        }
                        this.$dicAssetsPath.push(data);
                    }
                })

                // console.log(this.$dicAssetsPath)
            })

        }
    }






}