/*
 * @Author: NoRain 
 * @Date: 2023-02-07 17:53:21 
 * @Last Modified by: NoRain
 * @Last Modified time: 2023-02-09 20:17:16
 */
/**页面资源地址 */
export default class SceneUrl {
    /**地址前缀 */
    static readonly SceneUrlBase: string = "resources/Prefab/"
    /**地址后缀 */
    static readonly sceneUrlSuffix: string = ".lh";



    /**加载页面 */
    static LoadView: string = 'LoadView';

    /**调试页面 */
    static DebugView: string = "DebugView";
}