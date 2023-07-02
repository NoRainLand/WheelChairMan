(function () {
    let config = JSON.parse(`{"resolution":{"designWidth":1920,"designHeight":1080,"scaleMode":"fixedwidth","screenMode":"horizontal","backgroundColor":"rgba(128, 128, 128, 1)","alignV":"top","alignH":"left"},"2D":{"useRetinalCanvas":true,"FPS":60,"isAntialias":true,"isAlpha":false,"webGL2D_MeshAllocMaxMem":true,"defaultFont":"Arial","defaultFontSize":20},"3D":{"lightClusterCount":{"x":12,"y":12,"z":12},"enableStaticBatch":true,"enableDynamicBatch":true,"defaultPhysicsMemory":16,"enableUniformBufferObject":true,"pixelRatio":1,"enableMultiLight":true,"maxLightCount":16,"maxMorphTargetCount":32,"useBVHCull":false,"BVH_max_SpatialCount":7,"BVH_limit_size":32,"BVH_Min_Build_nums":10},"splash":{"backgroundColor":"rgba(134, 206, 203, 1)","image":"bin/splash/NoRainLand.png","fit":"center","duration":0.1,"enabled":true},"stat":true,"spineVersion":"3.8","vConsole":false,"alertGlobalError":false,"physicsDebug":false,"pkgs":[],"startupScene":"resources/scene/GameEntry.ls"}`);

    Object.assign(Laya.Config, config["2D"]);

    let config3D = config["3D"];
    Object.assign(Laya.Config3D, config3D);

    let v3 = config3D.lightClusterCount;
    Laya.Config3D.lightClusterCount = new Laya.Vector3(v3.x, v3.y, v3.z);

    Laya.init(config.resolution).then(() => {
        if ((Laya.Browser.onMobile || Laya.Browser.onIPad) && config.vConsole) {
            let script = document.createElement("script");
            script.src = "https://cdn.bootcss.com/vConsole/3.3.0/vconsole.min.js";
            script.onload = () => {
                window.vConsole = new VConsole();
            };
            document.body.appendChild(script);
        }

        if (config.alertGlobalError)
            Laya.alertGlobalError(true);
        if (config.debug || Laya.Browser.getQueryString("debug") == "true")
            Laya.enableDebugPanel();
        if (config.stat)
            Laya.Stat.show();

        if (Laya.Physics) {
            Laya.Physics.enable();
            if (config.physicsDebug && Laya.PhysicsDebugDraw)
                Laya.PhysicsDebugDraw.enable();
        }

        if (config.useSafeFileExtensions)
            Laya.URL.initMiniGameExtensionOverrides();

        if (Laya.ClassUtils.getClass("SpineSkeleton"))
            Laya.SpineTemplet.RuntimeVersion = config.spineVersion || "3.8";

        if (config.workerLoaderLib)
            Laya.WorkerLoader.workerPath = config.workerLoaderLib;

        let progressCallback = new Laya.BatchProgress((progress) => {
            if (window && window.onSplashProgress)
                window.onSplashProgress(progress);
        });
        let loadSceneProgress = config.startupScene ? progressCallback.createCallback(0.5) : null;

        let promises = [Laya.loader.loadPackage("", null, progressCallback.createCallback())];
        if (config.pkgs) {
            for (let pkg of config.pkgs) {
                let manifestPath = (pkg.path.length > 0 ? (pkg.path + "/") : pkg.path) + "fileconfig.json";
                if (pkg.hash)
                    Laya.URL.version[manifestPath] = pkg.hash;
                if (pkg.path.length > 0 && pkg.autoLoad)
                    promises.push(Laya.loader.loadPackage(pkg.path, pkg.remoteUrl, progressCallback.createCallback()));
            }
        }
        Promise.all(promises).then(() => {
            if (config.startupScene) {
                Laya.Scene.open(config.startupScene, true, null, null, Laya.Handler.create(null, loadSceneProgress, null, false)).then(() => {
                    if (window && window.hideSplashScreen)
                        window.hideSplashScreen();
                });
            }
            else {
                if (window && window.hideSplashScreen)
                    window.hideSplashScreen();
            }
        });
    });
})();
