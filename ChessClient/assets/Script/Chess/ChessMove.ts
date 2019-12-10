import { _decorator, Component, Node, Vec3, Vec2, tween, tweenUtil } from "cc";
const { ccclass, property } = _decorator;

@ccclass("ChessMove")
export class ChessMove extends Component {
    @property(Vec3)
    targetPosition: Vec3 = null;

    private moveing: boolean = false;
    private location: Vec3 = null;

    move (targetPos: Vec2) {
        this.targetPosition = new Vec3(targetPos.x, 0, targetPos.y);
        this.location = this.node.position;
        this.moveing = true;
        tweenUtil(this.location)
            .to(3, this.targetPosition, {easing: 'Sinusoidal-InOut'})
            .call(() => { this.moveing = false })
            .repeat(0)
            .start();
    }

    test () {
        this.move(new Vec2(2,0));
    }

    update (deltaTime: number) {
        // Your update function goes here.
        if (this.moveing) {
            this.node.position = this.location;
        }
    }
}
