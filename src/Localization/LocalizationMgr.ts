/*
 * @Author: NoRain 
 * @Date: 2023-02-10 09:48:50 
 * @Last Modified by: NoRain
 * @Last Modified time: 2023-02-22 21:25:08
 */

import ProjectConfig from "../Config/ProjectConfig";
import { DataTableEnum } from "../Enum/DataTableEnum";
import { EventEnum } from "../Enum/EventEnum";
import { LanguageEnum } from "../Enum/LanguageEnum";
import { LocalizationEnum } from "../Enum/LocalizationEnum";
import { LocalStorageEnum } from "../Enum/LocalStorageEnum";
import EventMgr from "../Mgr/EventMgr";
import LocalStorageMgr from "../Mgr/LocalMgr";
import ResLoader from "../Util/ResLoader";
import TextResource = Laya.TextResource;
import ProgressCallback = Laya.ProgressCallback;
import Loader = Laya.Loader;
import Handler = Laya.Handler;
/**本地化管理类 */
export default class LocalizationMgr {



    /**当前语言 */
    private static $language: number;

    /**本地配资源置化表 */
    private static $localizationResMap: Map<number, Object>;

    /**本地化数据表 */
    private static $localizationMap: Map<number, Object>;

    /**本地化数据表 */
    private static $localizationKeyMap: Map<string, Object>;

    /**持久化标志 */
    private static readonly $sign: string = "language_"


    /**初始化 */
    static init() {


        this.$localizationResMap = ResLoader.getDataTableById(DataTableEnum.LocalizationRes);

        this.$localizationMap = ResLoader.getDataTableById(DataTableEnum.Localization);

        this.$localizationKeyMap = new Map();
        for (let [key, value] of this.$localizationMap) {
            this.$localizationKeyMap.set(value["key"], value);
        }


    }

    /**获取语言对应国旗 */
    static getFlagSkinIdById(id: LanguageEnum): number {
        let data = this.$localizationResMap.get(id);
        return data && data["flagId"];
    }
    /**获取语言描述 */
    static getLanguageMsgById(id: LanguageEnum): string {
        let data = this.$localizationResMap.get(id);
        return data && data["msg"];
    }


    /**通过key获取对应语言 */
    static $getLocalizationByKey(key: string, ...keys: string[]): string {


        let language = LanguageEnum[this.Language];
        let value = this.$localizationKeyMap.get(key)?.[language];
        if (value) {
            if (keys && keys.length) {
                for (let i = 0; i < keys.length; i++) {
                    let item = this.$localizationKeyMap.get(keys[i])?.[language];
                    item = item ? item : keys[i];
                    value = value.replace("$", item);
                }
            }
        }
        return value;
    }


    /**通过枚举获取对应语言 */
    static getLocalizationByEnum(lenum: LocalizationEnum, ...lenums: LocalizationEnum[]): string {
        let language = LanguageEnum[this.Language];
        let value = this.$localizationMap.get(lenum)?.[language];
        if (value) {
            if (lenums && lenums.length) {
                for (let i = 0; i < lenums.length; i++) {
                    let item = this.$localizationMap.get(lenums[i])?.[language];
                    item = item ? item : lenums[i];
                    value = value.replace("$", item);
                }
            }
        }
        return value;
    }


    /**获取当前语言 */
    static get Language(): LanguageEnum {
        if (!this.$language) {
            let language = LocalStorageMgr.getItem(LocalStorageEnum.LANGUAGE);
            if (language) {
                this.$language = Number(language.substring(language.indexOf("_") + 1));
            } else {
                this.$language = ProjectConfig.defaultLanguage;
                LocalStorageMgr.setItem(LocalStorageEnum.LANGUAGE, this.$sign + this.$language);
            }
        }
        return this.$language;
    }

    /**修改当前语言 */
    static set Language(language: LanguageEnum) {
        this.$language = language;
        LocalStorageMgr.setItem(LocalStorageEnum.LANGUAGE, this.$sign + this.$language);
        EventMgr.event(EventEnum.LANGUAGECHANGE);
    }



}