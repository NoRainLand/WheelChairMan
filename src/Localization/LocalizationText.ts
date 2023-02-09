/*
 * @Author: NoRain 
 * @Date: 2023-02-09 16:11:40 
 * @Last Modified by: NoRain
 * @Last Modified time: 2023-02-09 16:14:55
 */
const { regClass, property } = Laya;
/**本地化文本 */
export default class LocalizationText extends Laya.Script {
    @property()
    localizationKey: string;

    constructor() {
        super();
    }

    onStart(): void {
        
    }
    onDisable(): void {
        
    }
}