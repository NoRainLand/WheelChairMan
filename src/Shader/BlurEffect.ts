import PostProcessEffect = Laya.PostProcessEffect;
import Shader3D = Laya.Shader3D;
import VertexMesh = Laya.VertexMesh;
import SubShader = Laya.SubShader;
import ShaderPass = Laya.ShaderPass;
import RenderState = Laya.RenderState;
import ShaderData = Laya.ShaderData;
import Vector4 = Laya.Vector4;
import PostProcessRenderContext = Laya.PostProcessRenderContext;
import CommandBuffer = Laya.CommandBuffer;
import Viewport = Laya.Viewport;
import RenderTexture = Laya.RenderTexture;
import RenderTargetFormat = Laya.RenderTargetFormat;
import FilterMode = Laya.FilterMode;
import Material = Laya.Material;
import BaseTexture = Laya.BaseTexture;

export class BlurEffect extends PostProcessEffect {
    static BLUR_TYPE_GaussianBlur: number = 0;
    static BLUR_TYPE_Simple: number = 1;
    static SHADERVALUE_MAINTEX: number = Shader3D.propertyNameToID("u_MainTex");
    static SHADERVALUE_TEXELSIZE: number = Shader3D.propertyNameToID("u_MainTex_TexelSize");
    static SHADERVALUE_DOWNSAMPLEVALUE: number = Shader3D.propertyNameToID("u_DownSampleValue");

    static init() {
        let BlurVS = `
            #include "Lighting.glsl";
            #if defined(GL_FRAGMENT_PRECISION_HIGH)// 原来的写法会被我们自己的解析流程处理，而我们的解析是不认内置宏的，导致被删掉，所以改成 if defined 了
                precision highp float;
            #else
                precision mediump float;
            #endif
            attribute vec4 a_PositionTexcoord;
            varying vec2 v_Texcoord0;

            void main() {
                gl_Position = vec4(a_PositionTexcoord.xy, 0.0, 1.0);
                v_Texcoord0 = a_PositionTexcoord.zw;
                gl_Position = remapGLPositionZ(gl_Position);
            }
        `;

        let BlurHorizentalFS = `
            #if defined(GL_FRAGMENT_PRECISION_HIGH)// 原来的写法会被我们自己的解析流程处理，而我们的解析是不认内置宏的，导致被删掉，所以改成 if defined 了
                precision highp float;
            #else
                precision mediump float;
            #endif

            varying vec2 v_Texcoord0;
            uniform sampler2D u_MainTex;
            uniform vec4 u_MainTex_TexelSize;
            uniform float u_DownSampleValue;

            void main()
            {
                vec4 color = vec4(0.0,0.0,0.0,0.0);
                vec2 uv = v_Texcoord0;
                vec2 uvOffset = vec2(1.0,0.0)*u_MainTex_TexelSize.xy*u_DownSampleValue;
                uv = uv - uvOffset*3.0;
                //高斯参数
                color+=0.0205*texture2D(u_MainTex,uv);
                uv+=uvOffset;
                color+=0.0855*texture2D(u_MainTex,uv);
                uv+=uvOffset;
                color+=0.232*texture2D(u_MainTex,uv);
                uv+=uvOffset;
                color+=0.324*texture2D(u_MainTex,uv);
                uv+=uvOffset;
                color+=0.232*texture2D(u_MainTex,uv);
                uv+=uvOffset;
                color+=0.0855*texture2D(u_MainTex,uv);
                uv+=uvOffset;
                color+=0.0205*texture2D(u_MainTex,uv);

                gl_FragColor = color;
            }
        `;

        let BlurVerticalFS = `
            #if defined(GL_FRAGMENT_PRECISION_HIGH)// 原来的写法会被我们自己的解析流程处理，而我们的解析是不认内置宏的，导致被删掉，所以改成 if defined 了
                precision highp float;
            #else
                precision mediump float;
            #endif

            varying vec2 v_Texcoord0;
            uniform sampler2D u_MainTex;
            uniform vec4 u_MainTex_TexelSize;
            uniform float u_DownSampleValue;

            void main()
            {
                vec4 color = vec4(0.0,0.0,0.0,0.0);
                vec2 uv = v_Texcoord0;
                vec2 uvOffset = vec2(0.0,1.0)*u_MainTex_TexelSize.xy*u_DownSampleValue;
                uv = uv - uvOffset*3.0;
                //高斯参数
                color+=0.0205*texture2D(u_MainTex,uv);
                uv+=uvOffset;
                color+=0.0855*texture2D(u_MainTex,uv);
                uv+=uvOffset;
                color+=0.232*texture2D(u_MainTex,uv);
                uv+=uvOffset;
                color+=0.324*texture2D(u_MainTex,uv);
                uv+=uvOffset;
                color+=0.232*texture2D(u_MainTex,uv);
                uv+=uvOffset;
                color+=0.0855*texture2D(u_MainTex,uv);
                uv+=uvOffset;
                color+=0.0205*texture2D(u_MainTex,uv);

                gl_FragColor = color;
            }
        `;

        let BlurDownSampleFS = `
            #if defined(GL_FRAGMENT_PRECISION_HIGH)// 原来的写法会被我们自己的解析流程处理，而我们的解析是不认内置宏的，导致被删掉，所以改成 if defined 了
                precision highp float;
            #else
                precision mediump float;
            #endif

            varying vec2 v_Texcoord0;
            uniform sampler2D u_MainTex;
            uniform vec4 u_MainTex_TexelSize;

            void main()
            {
                vec4 color = vec4(0.0,0.0,0.0,0.0);
                color += texture2D(u_MainTex,v_Texcoord0+u_MainTex_TexelSize.xy*vec2(1.0,0.0));
                color += texture2D(u_MainTex,v_Texcoord0+u_MainTex_TexelSize.xy*vec2(-1.0,0.0));
                color += texture2D(u_MainTex,v_Texcoord0+u_MainTex_TexelSize.xy*vec2(0.0,-1.0));
                color += texture2D(u_MainTex,v_Texcoord0+u_MainTex_TexelSize.xy*vec2(0.0,1.0));
                gl_FragColor = color/4.0;
                //gl_FragColor = vec4(1.0,0.0,0.0,1.0);
            }
        `;

        let BlurDownSampleVS = `
            #include "Lighting.glsl";
            #if defined(GL_FRAGMENT_PRECISION_HIGH)// 原来的写法会被我们自己的解析流程处理，而我们的解析是不认内置宏的，导致被删掉，所以改成 if defined 了
                precision highp float;
            #else
                precision mediump float;
            #endif
            attribute vec4 a_PositionTexcoord;
            varying vec2 v_Texcoord0;

            void main() {
                gl_Position = vec4(a_PositionTexcoord.xy, 0.0, 1.0);
                v_Texcoord0 = a_PositionTexcoord.zw;
                gl_Position = remapGLPositionZ(gl_Position);
            }
        `;

        let BlurEdgeAdd = `
            #if defined(GL_FRAGMENT_PRECISION_HIGH)// 原来的写法会被我们自己的解析流程处理，而我们的解析是不认内置宏的，导致被删掉，所以改成 if defined 了
                precision highp float;
            #else
                precision mediump float;
            #endif

            varying vec2 v_Texcoord0;
            uniform sampler2D u_MainTex;
            uniform sampler2D u_sourceTexture0;

            void main()
            {
                vec2 uv = v_Texcoord0;
                vec4 mainColor = texture2D(u_MainTex,uv);
                vec4 sourceColor = texture2D(u_sourceTexture0,uv);
                float factor = step(sourceColor.x+sourceColor.y+sourceColor.z,0.001);
                vec4 color = mix(sourceColor,mainColor,factor);
                gl_FragColor =color;
            }
        `;

        let BlurEdgeSub = `
            #if defined(GL_FRAGMENT_PRECISION_HIGH)// 原来的写法会被我们自己的解析流程处理，而我们的解析是不认内置宏的，导致被删掉，所以改成 if defined 了
                precision highp float;
            #else
                precision mediump float;
            #endif

            varying vec2 v_Texcoord0;
            uniform sampler2D u_sourceTexture0;
            uniform sampler2D u_sourceTexture1;

            void main()
            {
                vec2 uv = v_Texcoord0;
                vec4 blurColor = texture2D(u_sourceTexture0,uv);
                vec4 clearColor = texture2D(u_sourceTexture1,uv);
                float factor = step(clearColor.x+clearColor.y+clearColor.z,0.001);
                vec4 color = blurColor*factor;
                color = (1.0-step(color.x+color.y+color.z,0.15))*vec4(1.0,0.0,0.0,1.0);
                gl_FragColor = color;
            }
        `;

        //初始化shader
        var attributeMap: any = {
            'a_PositionTexcoord': VertexMesh.MESH_POSITION0
        };
        var uniformMap = {
            'u_MainTex': Shader3D.PERIOD_MATERIAL,
            'u_MainTex_TexelSize': Shader3D.PERIOD_MATERIAL,
            'u_DownSampleValue': Shader3D.PERIOD_MATERIAL,
            'u_sourceTexture0': Shader3D.PERIOD_MATERIAL,
            'u_sourceTexture1': Shader3D.PERIOD_MATERIAL
        }
        var shader: Shader3D = Shader3D.add("blurEffect");
        //subShader0  降采样
        var subShader: SubShader = new SubShader(attributeMap, uniformMap);
        shader.addSubShader(subShader);
        var shaderpass: ShaderPass = subShader.addShaderPass(BlurDownSampleVS, BlurDownSampleFS);
        var renderState: RenderState = shaderpass.renderState;
        renderState.depthTest = RenderState.DEPTHTEST_ALWAYS;
        renderState.depthWrite = false;
        renderState.cull = RenderState.CULL_NONE;
        renderState.blend = RenderState.BLEND_DISABLE;
        //subShader1 垂直反向模糊
        subShader = new SubShader(attributeMap, uniformMap);
        shader.addSubShader(subShader);
        shaderpass = subShader.addShaderPass(BlurVS, BlurVerticalFS);
        renderState = shaderpass.renderState;
        renderState.depthTest = RenderState.DEPTHTEST_ALWAYS;
        renderState.depthWrite = false;
        renderState.cull = RenderState.CULL_NONE;
        renderState.blend = RenderState.BLEND_DISABLE;
        //subShader2 水平方向模糊
        subShader = new SubShader(attributeMap, uniformMap);
        shader.addSubShader(subShader);
        shaderpass = subShader.addShaderPass(BlurVS, BlurHorizentalFS);
        renderState = shaderpass.renderState;
        renderState.depthTest = RenderState.DEPTHTEST_ALWAYS;
        renderState.depthWrite = false;
        renderState.cull = RenderState.CULL_NONE;
        renderState.blend = RenderState.BLEND_DISABLE;
        //subShader3 subTexture
        subShader = new SubShader(attributeMap, uniformMap);
        shader.addSubShader(subShader);
        shaderpass = subShader.addShaderPass(BlurVS, BlurEdgeSub);
        renderState = shaderpass.renderState;
        renderState.depthTest = RenderState.DEPTHTEST_ALWAYS;
        renderState.depthWrite = false;
        renderState.cull = RenderState.CULL_NONE;
        renderState.blend = RenderState.BLEND_DISABLE;
        //subShader4 addTexture
        subShader = new SubShader(attributeMap, uniformMap);
        shader.addSubShader(subShader);
        shaderpass = subShader.addShaderPass(BlurVS, BlurEdgeAdd);
        renderState = shaderpass.renderState;
        renderState.depthTest = RenderState.DEPTHTEST_ALWAYS;
        renderState.depthWrite = false;
        renderState.cull = RenderState.CULL_NONE;
        renderState.blend = RenderState.BLEND_DISABLE;

    }

    /**@internal */
    private _shader: Shader3D = null;
    /**@internal */
    private _shaderData: ShaderData = new ShaderData();
    /**@internal */
    private _downSampleNum: number = 1;
    /**@internal */
    private _blurSpreadSize: number = 1;
    /**@internal */
    private _blurIterations: number = 2;
    /**@internal */
    private _texSize: Vector4 = new Vector4(1.0, 1.0, 1.0, 1.0);
    /**@internal */
    private _tempRenderTexture: any[];

    constructor() {
        super();
        this._shader = Shader3D.find("blurEffect");
        this._tempRenderTexture = new Array(13);
    }

    /**
     * @return 强度。
     */
    get downSampleNum(): number {
        return this._downSampleNum;
    }

    /**
     * 降采样,值范围为0-6。
     * @param value 强度。
     */
    set downSampleNum(value: number) {
        this._downSampleNum = Math.min(6, Math.max(value, 0.0));
    }

    /**
     * 采样间隔  过大会失真1-10
     * @return 。
     */
    get blurSpreadSize(): number {
        return this._blurSpreadSize;
    }

    /**
     * @param value 
     */
    set blurSpreadSize(value: number) {
        this._blurSpreadSize = Math.min(10, Math.max(value, 1.0));
    }

    /**
     * 迭代次数  越大性能消耗越大 效果越好
     * @return 。
     */
    get blurIterations(): number {
        return this._blurIterations;
    }

    /**
     * @param value。
     */
    set blurIterations(value: number) {
        this._blurIterations = Math.min(Math.max(value, 0.0), 6.0);
    }

    /**
     * @inheritDoc
     * @override
     * @internal
     */
    render(context: PostProcessRenderContext): void {
        var cmd: CommandBuffer = context.command;
        var viewport: Viewport = context.camera.viewport;
        var scaleFactor: number = 1.0 / (1 << Math.floor(this._downSampleNum));
        var tw: number = Math.floor(viewport.width * scaleFactor);
        var th: number = Math.floor(viewport.height * scaleFactor);
        this._texSize.setValue(1.0 / tw, 1.0 / th, tw, th);
        //赋值
        this._shaderData.setNumber(BlurEffect.SHADERVALUE_DOWNSAMPLEVALUE, this.blurSpreadSize);
        this._shaderData.setVector(BlurEffect.SHADERVALUE_TEXELSIZE, this._texSize);
        //降采样
        var downSampleTexture: RenderTexture = RenderTexture.createFromPool(tw, th, RenderTargetFormat.R8G8B8, RenderTargetFormat.None);
        downSampleTexture.filterMode = FilterMode.Bilinear;
        this._tempRenderTexture[0] = downSampleTexture;
        var lastDownTexture: RenderTexture = context.source;
        cmd.blitScreenTriangle(lastDownTexture, downSampleTexture, null, this._shader, this._shaderData, 0);
        lastDownTexture = downSampleTexture;
        //迭代次数
        for (var i: number = 0; i < this._blurIterations; i++) {
            //vertical
            var blurTexture: RenderTexture = RenderTexture.createFromPool(tw, th, RenderTargetFormat.R8G8B8, RenderTargetFormat.None);
            blurTexture.filterMode = FilterMode.Bilinear;
            cmd.blitScreenTriangle(lastDownTexture, blurTexture, null, this._shader, this._shaderData, 1);
            lastDownTexture = blurTexture;
            this._tempRenderTexture[i * 2 + 1] = blurTexture;
            //Horizental
            blurTexture = RenderTexture.createFromPool(tw, th, RenderTargetFormat.R8G8B8, RenderTargetFormat.None);
            blurTexture.filterMode = FilterMode.Bilinear;
            cmd.blitScreenTriangle(lastDownTexture, blurTexture, null, this._shader, this._shaderData, 2);
            lastDownTexture = blurTexture;
            this._tempRenderTexture[i * 2 + 2] = blurTexture;
        }
        context.source = lastDownTexture;
        var maxTexture = this._blurIterations * 2 + 1;
        //释放渲染纹理
        for (i = 0; i < maxTexture; i++) {
            RenderTexture.recoverToPool(this._tempRenderTexture[i]);
        }
        context.deferredReleaseTextures.push(lastDownTexture);
    }
}


export class BlurMaterial extends Material {
    static SHADERVALUE_MAINTEX: number = Shader3D.propertyNameToID("u_MainTex");
    static SHADERVALUE_TEXELSIZE: number = Shader3D.propertyNameToID("u_MainTex_TexelSize");
    static SHADERVALUE_DOWNSAMPLEVALUE: number = Shader3D.propertyNameToID("u_DownSampleValue");
    static SHADERVALUE_SOURCETEXTURE0: number = Shader3D.propertyNameToID("u_sourceTexture0");
    static ShADERVALUE_SOURCETEXTURE1: number = Shader3D.propertyNameToID("u_sourceTexture1");

    private texelSize: Vector4 = new Vector4();
    private doSamplevalue: number = 0;

    constructor(texelSize: Vector4, offset: number) {
        super();
        this.setShaderName("blurEffect");
        this._shaderValues.setNumber(BlurMaterial.SHADERVALUE_DOWNSAMPLEVALUE, offset);
        this._shaderValues.setVector(BlurMaterial.SHADERVALUE_TEXELSIZE, texelSize);
    }

    sourceTexture(sourceTexture0: BaseTexture, sourceTexture1: BaseTexture) {
        this._shaderValues.setTexture(BlurMaterial.SHADERVALUE_SOURCETEXTURE0, sourceTexture0);
        this._shaderValues.setTexture(BlurMaterial.ShADERVALUE_SOURCETEXTURE1, sourceTexture1);
    }



}

// import { BlurEffect, BlurMaterial } from "./BlurEffect";
// import CommandBuffer = Laya.CommandBuffer;
// import Camera = Laya.Camera;
// import BaseRender = Laya.BaseRender;
// import Material = Laya.Material;
// import Viewport = Laya.Viewport;
// import RenderTexture = Laya.RenderTexture;
// import Vector4 = Laya.Vector4;
// import FilterMode = Laya.FilterMode;
// import RenderTextureFormat = Laya.RenderTextureFormat;
// import RenderTextureDepthFormat = Laya.RenderTextureDepthFormat;
// import CameraEventFlags = Laya.CameraEventFlags;



//     private commandBuffer:CommandBuffer;
//     private cameraEventFlag:CameraEventFlags = CameraEventFlags.BeforeImageEffect;
//     private postProcess = new Laya.PostProcess();
// 自己的其他代码

//         BlurEffect.init();
//         var unlitMaterial = new Laya.UnlitMaterial();
// unlitMaterial.albedoColor = new Vector4(255,0,0,255);
//         var renders:BaseRender[]  = [];
//         var materials:Material[] = [];
//         let obj1 = this.scene3d.getChildByName('Model').getChildByName(`SpiningScreen1`).getChildAt(1) as Laya.MeshSprite3D;
//         renders.push(obj1.meshRenderer);
//         materials.push(unlitMaterial);

//         this.commandBuffer = this.createDrawMeshCommandBuffer(this.camera,renders,materials);
//         //将commandBuffer加入渲染流程
//         this.camera.addCommandBuffer(this.cameraEventFlag,this.commandBuffer);
// }

//     createDrawMeshCommandBuffer(camera:Camera,renders:BaseRender[],materials:Material[]):CommandBuffer{
// var buf:CommandBuffer = new CommandBuffer();
// //当需要在流程中拿摄像机渲染效果的时候 设置true
// camera.enableBuiltInRenderTexture = true;
// //创建和屏幕一样大的Rendertexture
// var viewPort:Viewport = camera.viewport;
// var renderTexture = RenderTexture.createFromPool(viewPort.width,viewPort.height,RenderTextureFormat.R8G8B8A8,RenderTextureDepthFormat.DEPTHSTENCIL_NONE);
// //将RenderTexture设置为渲染目标
// buf.setRenderTarget(renderTexture);
// //清楚渲染目标的颜色为黑色，不清理深度
// buf.clearRenderTarget(true,false,new Vector4(0,0,0,0));

// //将传入的Render渲染到纹理上
// for(var i = 0,n = renders.length;i<n;i++){
// buf.drawRender(renders[i],materials[i],0);
// }
// //创建新的RenderTexture
// var subRendertexture = RenderTexture.createFromPool(viewPort.width,viewPort.height,RenderTextureFormat.R8G8B8A8,RenderTextureDepthFormat.DEPTHSTENCIL_NONE);
// //将renderTexture的结果复制到subRenderTexture
// buf.blitScreenQuad(renderTexture,subRendertexture);
// //设置模糊的参数
// var downSampleFactor:number = 2;
// var downSampleWidth:number = viewPort.width/downSampleFactor;
// var downSampleheigh:number = viewPort.height/downSampleFactor;
// var texSize:Vector4 = new Vector4(1.0/viewPort.width,1.0/viewPort.height,viewPort.width,downSampleheigh);
// //创建模糊材质
// var blurMaterial:BlurMaterial = new BlurMaterial(texSize,1);

// //创建降采样RenderTexture1
// var downRenderTexture = RenderTexture.createFromPool(downSampleWidth,downSampleheigh,RenderTextureFormat.R8G8B8,RenderTextureDepthFormat.DEPTHSTENCIL_NONE);
// //降采样  使用blurMaterial材质的0SubShader将Rendertexture渲染到DownRendertexture
// buf.blitScreenQuadByMaterial(renderTexture,downRenderTexture,null,blurMaterial,0);

// //创建降采样RenderTexture2
// var blurTexture:RenderTexture = RenderTexture.createFromPool(downSampleWidth,downSampleheigh,RenderTextureFormat.R8G8B8,RenderTextureDepthFormat.DEPTHSTENCIL_NONE);
// blurTexture.filterMode = FilterMode.Bilinear;

// // Horizontal blur 使用blurMaterial材质的1SubShader
// buf.blitScreenQuadByMaterial(downRenderTexture,blurTexture,null,blurMaterial,1);
// //vertical blur 使用blurMaterial材质的2SubShader
// buf.blitScreenQuadByMaterial(blurTexture,downRenderTexture,null,blurMaterial,2);

// //在命令流里面插入设置图片命令流，在调用的时候会设置blurMaterial的图片数据
// buf.setShaderDataTexture(blurMaterial._shaderValues,BlurMaterial.SHADERVALUE_SOURCETEXTURE0,downRenderTexture);
// buf.setShaderDataTexture(blurMaterial._shaderValues,BlurMaterial.ShADERVALUE_SOURCETEXTURE1,subRendertexture);

// //caculate edge计算边缘图片
// buf.blitScreenQuadByMaterial(blurTexture,renderTexture,null,blurMaterial,3);
// //重新传入图片
// buf.setShaderDataTexture(blurMaterial._shaderValues,BlurMaterial.SHADERVALUE_SOURCETEXTURE0,renderTexture);
// //将camera渲染结果复制到subRendertexture，使用blurMaterial的4通道shader
// buf.blitScreenQuadByMaterial(null,subRendertexture,null,blurMaterial,4);
// //将subRenderTexture重新赋值到camera的渲染结果上面
// buf.blitScreenQuadByMaterial(subRendertexture,null);
// return buf;
// }
// 贴出来了


