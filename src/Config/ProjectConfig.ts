/*
 * @Author: NoRain 
 * @Date: 2023-02-06 17:07:29 
 * @Last Modified by: NoRain
 * @Last Modified time: 2023-02-11 15:56:47
 */
/**项目数据 */
export default class ProjectConfig {

    /**项目名称 */
    static readonly projectName: string = "WheelChairMan";

    /**游戏名称 */
    static readonly gameName: string = "WheelChairMan";

    /**项目版本 */
    static readonly projectVersion: string = "1.0.0";

    /**项目版本序号 */
    static readonly projectVersionIndex: number = 1;


    /**是否为测试版本 */
    static readonly isDebug: boolean = true;


    /**语言列表 */
    static readonly LanguageList = [
        "ChineseSimplified",
        "English"
    ]


    /**本地化语言列表 */
    static readonly LocalizationLanguageList = [
        "简体中文",
        "English"
    ]

    /**当前语言
     * ChineseSimplified
     * English
     * 
     */
    static get Language(): string {
        return this.LanguageList[0];
    }


    /**支持 */
    static readonly support: string = "https://github.com/NoRainLand/WheelChairMan";



   
}
