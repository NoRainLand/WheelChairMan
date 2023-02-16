/*
 * @Author: NoRain 
 * @Date: 2023-02-10 09:48:50 
 * @Last Modified by: NoRain
 * @Last Modified time: 2023-02-16 16:53:10
 */

import ProjectConfig from "../Config/ProjectConfig";
import { DataTableEnum } from "../Enum/DataTableEnum";
import { EventEnum } from "../Enum/EventEnum";
import { LocalEnum } from "../Enum/LocalEnum";
import { LocalizationEnum } from "../Enum/LocalizationEnum";
import EventMgr from "../Mgr/EventMgr";
import LocalMgr from "../Mgr/LocalMgr";
import ResLoader from "../Util/ResLoader";
import TextResource = Laya.TextResource;
import ProgressCallback = Laya.ProgressCallback;
import Loader = Laya.Loader;
import Handler = Laya.Handler;
/**本地化管理类 */
export default class LocalizationMgr {

    /**本地化对象map */
    private static $TextResourceMap: Map<number, Object> = new Map();

    /**当前语言 */
    private static $language: number;

    /**本地化表 */
    private static $dataTableMap: Map<number, Object>;

    /**持久化标志 */
    private static readonly $sign: string = "language_"


    /**初始化 */
    static init(onProgress?: Handler, complete?: Handler) {

        let txtRes: TextResource = ResLoader.getResById(DataTableEnum.Localization);
        this.$dataTableMap = ResLoader.strParser(txtRes.data);
        
        for (let [key, value] of this.$dataTableMap) {
            let data = ResLoader.getResById(value["pathId"]);
            let dic = data.data[0].dic;
            this.$TextResourceMap.set(key, dic);
        }

    }

    /**获取语言对应国旗 */
    static getFlagSkinIdById(id: LocalizationEnum): number {
        let data = this.$dataTableMap.get(id);
        return data && data["flagId"];
    }
    /**获取语言描述 */
    static getLanguageMsgById(id: LocalizationEnum): string {
        let data = this.$dataTableMap.get(id);
        return data && data["msg"];
    }
    /**获取语言对应key */
    static getLanguageKeyById(id: LocalizationEnum): string {
        let data = this.$dataTableMap.get(id);
        return data && data["key"];
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
    static get Language(): LocalizationEnum {
        if (!this.$language) {
            let language = LocalMgr.getItem(LocalEnum.LANGUAGE);
            if (language) {
                this.$language = Number(language.substring(language.indexOf("_") + 1));
            } else {
                this.$language = ProjectConfig.defaultLanguage;
                LocalMgr.setItem(LocalEnum.LANGUAGE, this.$sign + this.$language);
            }
        }
        return this.$language;
    }

    /**修改当前语言 */
    static set Language(language: LocalizationEnum) {
        this.$language = language;
        LocalMgr.setItem(LocalEnum.LANGUAGE, this.$sign + this.$language);
        EventMgr.event(EventEnum.LANGUAGECHANGE);
    }



}