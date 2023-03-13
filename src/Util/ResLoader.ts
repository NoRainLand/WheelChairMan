import DataTable from "../DataTable/DataTable";
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
 * @Last Modified time: 2023-03-13 20:41:39
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
    getResCloneByUrl(url: string): any {
        if (url) {
            let obj = Laya.loader.getRes(url);
            if (obj && obj.create) {
                return obj.create();
            }
        }
        return null;
    }
    /**获取克隆 */
    getResCloneById(id: number): any {
        if (id) {
            let url = this.getUrlById(id);
            if (url) {
                let obj = Laya.loader.getRes(url);
                if (obj?.create) {
                    return obj?.create?.();
                } else if (obj?.clone) {
                    return obj?.clone?.();
                } else {
                    console.log('无法获取克隆')
                    return obj;
                }

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
            for (let [, value] of DataTable.AssetsPathDataTableMap) {
                value.path = value.path.replace('assets\\', '').replace(/\\/g, '/');
                if (value && value.preload == 1) {
                    this.$total_num++;
                    this.load(value.path, Handler.create(this, this.$load_one_onCompleted));
                }
            }
        }
    }



    /**通过唯一Id获取资源 */
    getResById(assetsId: number): any {
        let obj = DataTable.AssetsPathDataTableMap.get(assetsId);
        if (obj && obj.path) {
            return this.getRes(obj.path);
        }
    }


    /**通过唯一id获取url */
    getUrlById(assetsId: number): string {
        let obj = DataTable.AssetsPathDataTableMap.get(assetsId);
        if (obj && obj.path) {
            return obj.path;
        }
    }







}