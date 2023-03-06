// 360扇形裁剪

export class ClipSprite360 extends Laya.Sprite {
    public renderTexture = null;

    constructor(rt?) {
        super();
        this.renderTexture = rt;
        this.customRenderEnable = true;
    }

    // 填充起始角度 0 ~ 360
    // 以右边为0
    fillStart = 0;

    // 填充比例 0 ~ 1
    fillAmount = 1;

    isReverse = false;

    public customRender(context: Laya.Context, x: number, y: number) {
        if (!this.renderTexture) {
            return;
        }
        if (this.fillAmount == 0) {
            return;
        }
        let uvsrc = this.renderTexture._uv;
        let width = this.width || this.renderTexture.sourceWidth;
        let height = this.height || this.renderTexture.sourceHeight;

        // 满填充，直接使用普通sprite的绘制方式
        if (this.fillAmount == 1) {
            context['_drawTextureM'](this.renderTexture as any, x, y, width, height, null, 1, uvsrc);
            return;
        }

        let ops = context['_transedPoints'];
        context.transformQuad(x, y, width, height, 0, context['_curMat'], ops);

        let mesh = context['_mesh'];
        let submit = context['_curSubmit'];

        let preKey = submit._key;
        let imgid = this.renderTexture.bitmap.id;
        var sameKey = imgid >= 0 && preKey.submitType === Laya.SubmitBase.KEY_DRAWTEXTURE && preKey.other === imgid;
        sameKey && (sameKey = sameKey && context['isSameClipInfo'](submit));
        context['_lastTex'] = this.renderTexture;
        let vertices = this.getAllVertices(ops, uvsrc);
        let count = vertices.length / 4;
        context['_drawCount'] += count;

        if (mesh.vertNum + 4 * count > Laya.Context['_MAXVERTNUM']) {
            mesh = context['_mesh'] = Laya.MeshQuadTexture.getAMesh(context['isMain']);
            context.meshlist.push(mesh);
            sameKey = false;
        }

        this.addQuad(mesh, vertices);
        if (!sameKey) {
            context['_submits'][context['_submits']._length++] = context['_curSubmit'] = submit = Laya.SubmitTexture.create(context, mesh, Laya.Value2D.create(Laya.ShaderDefines2D.TEXTURE2D, 0));
            submit.shaderValue.textureHost = this.renderTexture;
            submit._key.other = imgid;
            context['_copyClipInfo'](submit, context['_globalClipMatrix']);
        }
        submit._numEle += 6 * count;
        mesh.indexNum += 6 * count;
        mesh.vertNum += 4 * count;
        return true;
    }


    // 精灵顶点示意图
    // v1 top v2
    // _______
    // |\   /|
    // | \ / | right
    // |  \  |
    // | / \ |
    // |/   \|
    // ------- 
    // v4 bottom v3

    getAllVertices(ops, uvsrc) {
        let v1 = { x: ops[0], y: ops[1], u: uvsrc[0], v: uvsrc[1] };
        let v2 = { x: ops[2], y: ops[3], u: uvsrc[2], v: uvsrc[3] };
        let v3 = { x: ops[4], y: ops[5], u: uvsrc[4], v: uvsrc[5] };
        let v4 = { x: ops[6], y: ops[7], u: uvsrc[6], v: uvsrc[7] };

        // 精灵图片中间那个点
        let xCenter = (v1.x + v2.x) / 2;
        let yCenter = (v2.y + v3.y) / 2;
        let uCenter = (v1.u + v2.u) / 2;
        let vCenter = (v2.v + v3.v) / 2;
        let verCenter = { x: xCenter, y: yCenter, u: uCenter, v: vCenter };

        let startAngle = this.angleLimit0_360(this.fillStart);
        let endAngle = this.angleLimit0_360(this.isReverse ? (startAngle - this.fillAmount * 360) : (startAngle + this.fillAmount * 360));

        if (endAngle < startAngle) {
            endAngle += 360;
        }

        let vStart = this.getVerticeByAngle(startAngle, v1, v2, v3, v4, verCenter);
        let vEnd = this.getVerticeByAngle(endAngle, v1, v2, v3, v4, verCenter);

        let angleAndVertices = [
            { angle: 45, v: v2 },
            { angle: 135, v: v1 },
            { angle: 225, v: v4 },
            { angle: 315, v: v3 },

            { angle: 45 + 360, v: v2 },
            { angle: 135 + 360, v: v1 },
            { angle: 225 + 360, v: v4 },
            { angle: 315 + 360, v: v3 }
        ];

        let list = [vStart];
        for (let i = 0; i < angleAndVertices.length; i++) {
            let tmp = angleAndVertices[i];
            if (tmp.angle > startAngle && tmp.angle < endAngle) {
                list.push(tmp.v);
            }
        }
        list.push(vEnd);

        let vertices = [];
        for (let i = 0; i < list.length - 1; i++) {
            let tmp1 = list[i];
            let tmp2 = list[i + 1];
            vertices.push(tmp1);
            vertices.push(tmp2);
            vertices.push(verCenter);
            vertices.push(verCenter);
        }

        return vertices;
    }

    angleLimit0_360(angle) {
        angle = angle % 360;
        if (angle < 0)
            angle += 360;
        return angle;
    }

    getVerticeByAngle(angle, v1, v2, v3, v4, vCenter) {
        angle = this.angleLimit0_360(angle);

        let rad = angle / 180 * Math.PI;
        if (
            (angle > 45 && angle < 135) ||
            (angle > 225 && angle < 315)
        ) {
            let halfh = (v3.y - v2.y) / 2;
            let halfv = (v3.v - v2.v) / 2;
            let tan = Math.tan(rad);
            if (angle > 225) {
                tan = -tan;
            }
            let x = vCenter.x + halfh / tan;
            let y = angle > 225 ? v3.y : v1.y;

            let u = vCenter.u + halfv / tan;
            let v = angle > 225 ? (vCenter.v + halfv) : (vCenter.v - halfv);

            return { x: x, y: y, u: u, v: v };
        } else {
            let halfw = (v2.x - v1.x) / 2;
            let x = (angle > 90 && angle < 270) ? v1.x : v2.x;

            let y = vCenter.y;
            if (angle < 90 || angle > 270) {
                y -= Math.tan(rad) * halfw;
            } else if (angle) {
                y += Math.tan(rad) * halfw;
            }

            let halfu = (v2.u - v1.u) / 2;
            let u = (angle > 90 && angle < 270) ? v1.u : v2.u;
            let v = vCenter.v;
            if (angle < 90 || angle > 270) {
                v -= Math.tan(rad) * halfu;
            } else {
                v += Math.tan(rad) * halfu;
            }

            return { x: x, y: y, u: u, v: v };
        }
    }

    addQuad(mesh, vertices) {
        let count = vertices.length / 4;
        let color = 0xffffffff;
        var vb = mesh._vb;
        var vpos = (vb._byteLength >> 2);
        vb.setByteLength((vpos + Laya.MeshQuadTexture.const_stride * count) << 2);
        var vbdata = vb._floatArray32 || vb.getFloat32Array();
        var vbu32Arr = vb._uint32Array;
        var cpos = vpos;
        var useTexVal = 0xff;

        for (let i = 0; i < vertices.length; i++) {
            vbdata[cpos++] = vertices[i].x;
            vbdata[cpos++] = vertices[i].y;
            vbdata[cpos++] = vertices[i].u;
            vbdata[cpos++] = vertices[i].v;
            vbu32Arr[cpos++] = color;
            vbu32Arr[cpos++] = useTexVal;
        }
        vb._upload = true;
    }
}