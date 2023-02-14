/*
 * @Author: NoRain 
 * @Date: 2023-02-10 11:04:51 
 * @Last Modified by: NoRain
 * @Last Modified time: 2023-02-14 18:16:17
 */
/**文字工具类 */
export default class StringUtil {


    /**小数转百分比，默认保留两位小数 */
    static num2percentage(num: number, d: number = 2): string {
        num = num * 100;
        return num.toFixed(d) + "%";
    }
    /**获取随机整数  */
    static randNum(min, max): number {
        let range = max - min;
        let rand = Math.random();
        let num = min + Math.round(rand * range);
        return num;
    }
    /**随机排序数组 */
    static shuffle(arr) {
        let i = arr.length, t, j;
        while (--i) {
            j = Math.floor(Math.random() * i);
            t = arr[i];
            arr[i] = arr[j];
            arr[j] = t;
        }
    }
    /**
     * RGB转16色
     * @param str RGB(23, 245, 56)
     * @returns string
     */
    static colorHex(str: string) {
        //十六进制颜色值的正则表达式
        let reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
        // 如果是rgb颜色表示
        if (/^(rgb|RGB)/.test(str)) {
            let aColor = str.replace(/(?:\(|\)|rgb|RGB)*/g, "").split(",");
            let strHex = "#";
            for (let i = 0; i < aColor.length; i++) {
                let hex = Number(aColor[i]).toString(16);
                if (hex.length < 2) {
                    hex = '0' + hex;
                }
                strHex += hex;
            }
            if (strHex.length !== 7) {
                strHex = str;
            }
            return strHex;
        } else if (reg.test(str)) {
            let aNum = str.replace(/#/, "").split("");
            if (aNum.length === 6) {
                return str;
            } else if (aNum.length === 3) {
                let numHex = "#";
                for (let i = 0; i < aNum.length; i += 1) {
                    numHex += (aNum[i] + aNum[i]);
                }
                return numHex;
            }
        }
        return str;
    };


    private static _colorDic = {};

    /**
     * 16色 转 RGB
     * @param str #34538b
     * @returns v3
     */
    static colorRgb(str: string): Array<number> {
        str = str.toLowerCase();
        let color = this._colorDic[str];
        if (color) {
            return color;
        }
        //十六进制颜色值的正则表达式
        var reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
        // 如果是16进制颜色
        if (str && reg.test(str)) {
            if (str.length === 4) {
                var sColorNew = "#";
                for (var i = 1; i < 4; i += 1) {
                    sColorNew += str.slice(i, i + 1).concat(str.slice(i, i + 1));
                }
                str = sColorNew;
            }
            //处理六位的颜色值
            var sColorChange = [];
            for (var i = 1; i < 7; i += 2) {
                sColorChange.push(parseInt("0x" + str.slice(i, i + 2)));
            }
            // return "RGB(" + sColorChange.join(",") + ")";
            this._colorDic[str] = sColorChange;
            return sColorChange;
        } else {
            console.log('转换错误');
            return [0, 0, 0];
        }

    }

}