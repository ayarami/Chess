import { _decorator, Component, Node, log, Vec3 } from "cc";
import { SectionArea } from "./Area/SectionArea";
import { Area } from "./Area/Area";
const { ccclass, property } = _decorator;

@ccclass("ChessAttack")
export class ChessAttack extends Component {

    //@property({type: ChessAttackAreaType})

    @property
    radius: number = 0;

    @property
    angle: number = 360;

    @property({type: Vec3, readonly: true})
    protected direction: Vec3 | null = null;

    private area: Area = null;

    start () {
        // Your initialization goes here.
        this.area = new SectionArea(this.radius, this.angle);
    }

    intersect (location: Vec3, point: Vec3): boolean {
        return this.area.intersectPoint(location, point);
    }

    // update (deltaTime: number) {
    //     // Your update function goes here.
    // }
}
