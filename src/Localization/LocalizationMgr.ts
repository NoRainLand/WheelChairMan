/*
 * @Author: NoRain 
 * @Date: 2023-02-10 09:48:50 
 * @Last Modified by: NoRain
 * @Last Modified time: 2023-02-11 16:13:25
 */

import ProjectConfig from "../Config/ProjectConfig";
import { EventEnum } from "../Enum/EventEnum";
import { LocalEnum } from "../Enum/LocalEnum";
import EventMgr from "../Mgr/EventMgr";
import LocalMgr from "../Mgr/LocalMgr";
import LocalizationUrl from "./LocalizationUrl";
import TextResource = Laya.TextResource;
import ProgressCallback = Laya.ProgressCallback;
import Loader = Laya.Loader;
import Handler = Laya.Handler;
/**本地化管理类 */
export default class LocalizationMgr {

    /**本地化对象map */
    private static $TextResourceMap: Map<string, Object> = new Map();

    /**当前语言 */
    private static $language: string;

    static init(onProgress?: Handler, complete?: Handler) {

        this.$language = this.Language;



        Laya.loader.load(LocalizationUrl.Json, complete, onProgress).then((value) => {
            for (let i = 0; i < value.length; i++) {
                let language = value[i].data[0].language;
                let dic = value[i].data[0].dic;
                this.$TextResourceMap.set(language, dic);
            }
        })
    }

    /**通过key获取对应语言 */
    static getLocalizationByKey(key: string): string {
        let dic = this.$TextResourceMap.get(this.Language);
        if (dic && dic[key]) {
            return dic[key];
        } else {
            return null;
        }
    }

    /**获取当前语言 */
    static get Language(): string {
        if(!this.$language){
            let language = LocalMgr.getItem(LocalEnum.LANGUAGE);
            if (language) {
                this.$language = language;
            } else {
                this.$language = ProjectConfig.Language;
                LocalMgr.setItem(LocalEnum.LANGUAGE, this.$language);
            }
        }
        return this.$language;
    }

    /**修改当前语言 */
    static set Language(language: string) {
        this.$language = language;
        LocalMgr.setItem(LocalEnum.LANGUAGE, this.$language);
        EventMgr.event(EventEnum.LANGUAGECHANGE);
    }

}