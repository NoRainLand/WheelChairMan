/*
 * @Author: NoRain 
 * @Date: 2023-02-07 17:53:21 
 * @Last Modified by: NoRain
 * @Last Modified time: 2023-02-10 20:52:50
 */
/**页面资源地址 */
export default class SceneUrl {
    /**地址前缀 */
    static readonly SceneUrlBase: string = "resources/prefab/"
    /**地址后缀 */
    static readonly sceneUrlSuffix: string = ".lh";



    /**加载页面 */
    static LoadView: string = 'LoadView';

    /**调试页面 */
    static DebugView: string = "DebugView";

    /**确认面板 */
    static SureDialog: string = "SureDialog";

    /**提示面板 */
    static TipsView: string = "TipsView";

    /**设置面板 */
    static SettingView: string = "SettingView";
}