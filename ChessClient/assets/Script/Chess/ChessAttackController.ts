import { _decorator, Component, Node } from "cc";
import { AreaNode } from "./Area/AreaNode";
const { ccclass, property } = _decorator;

@ccclass("ChessAttackController")
export class ChessAttackController extends Component {

    @property(AreaNode)
    AreaNodeComponent: AreaNode = null;

    start () {
        // Your initialization goes here.
    }

    // update (deltaTime: number) {
    //     // Your update function goes here.
    // }
}
