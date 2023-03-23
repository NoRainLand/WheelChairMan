import Vector3 = Laya.Vector3;
import Sprite3D = Laya.Sprite3D;
import Quaternion = Laya.Quaternion;
import Pool = Laya.Pool;
import Vector4 = Laya.Vector4;
import Vector2 = Laya.Vector2;
import Handler = Laya.Handler;
import Rigidbody3D = Laya.Rigidbody3D;
import Material = Laya.Material;
import MeshSprite3D = Laya.MeshSprite3D;
import Animator = Laya.Animator;
import PhysicsCollider = Laya.PhysicsCollider;
import CharacterController = Laya.CharacterController;
// import SkinnedMeshSprite3D = Laya.SkinnedMeshSprite3D;
const { regClass, property } = Laya;
/**测试 */
@regClass()
export default class TestPhy extends Laya.Script {

    @property()
    bullet: Laya.Prefab;


    constructor() { super() }

    bullet2: Sprite3D;
    onAdded(): void {

    }


    onStart(): void {
        if (this.bullet) {
            this.bullet2 = this.bullet.create() as Sprite3D;
            this.owner.addChild(this.bullet2);
            console.log('------1--------');
            console.log(this.bullet2);
        } else {
            console.log(this.bullet);
            console.log('-----------2-------');
        }
    }

    onUpdate(): void {
        this.bullet2.transform.translate(new Vector3(0.01, 0, 0));
    }

}