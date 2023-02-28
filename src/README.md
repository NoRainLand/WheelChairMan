# 开发说明

$by NoRainLand$

2023/2/6

## 1，命名规范

    1，脚本文件

    使用大驼峰命名法，普遍以 描述+文件类型 命名，比如 ProjectConfig.ts  SoundMgr.ts

    2，资源文件

    相对比较随意，推荐拼音+数字，比如  jinbi1.png  jinbi2.png

    3，节点命名

    小驼峰命名发，节点类型+描述 命名，比如  imgGold  txtRank btnStart

    4，公共变量

    小驼峰命名法，通常是 描述+描述，比如  playerIndex  myHead lastImg

    5，枚举

    大写字母

    6，公共变量

    小驼峰命名法，适当使用数字，比如  local2World()  time4Stop  getPos1() getPos2() monsterV3

    7，私有变量

    排除节点，小驼峰命名法，使用 描述+描述，比如  myPos  nextPlayer 注意

    8，特殊情况

    如果公共变量使用了 \$符号作为前缀，

    第一，表明该变量调用时候应该注意，尽量不要在外部调用，

    第二，这是一个get/set的临时存储变量，不应该被直接调用。

## 2，文件夹说明

    这里主要说的是src目录下的文件夹

    Config 项目的配置

    Data 游戏开发的数据

    Enum 枚举

    Game 游戏主逻辑

        Scene 游戏页面逻辑

    Mgr 游戏各种管理器

    Scene3d 3d场景

    Shader 着色器

    UIBase 页面基类

    Url 资源路径

    Util 工具集合

    Localization 本地化工具

## 3，开发流程

    正常开发即可。

## 4，坑点雷点

    这个可是大工程，慢慢积攒。

    1,UI图片导入之后需要设定为SpriteTexture.

    2,@pro 暴露出去的属性如果是bool值,必须默认设定为false

    3,无法切断(UnpackPrefab)预设.

    4,不要在构造函数内调用Scene.open

    5,预设属性可能修改失败,实在不行就去.lh文件手动修改吧.

    6,
