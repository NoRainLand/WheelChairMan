const { regClass, property } = Laya;
/**测试 */
@regClass()
export default class TestPhy extends Laya.Script {
    @property()
    player1: Laya.CharacterController;
    @property()
    player2: Laya.CharacterController;

    constructor() { super() }
    onStart(): void {
        this.player1.move(new Laya.Vector3(0, 0, 0.1));
    }


}