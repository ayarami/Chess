import { _decorator, Component, Node } from "cc";
const { ccclass, property } = _decorator;

@ccclass("InternetNode")
export class InternetNode extends Component {
    
    hasAuth (): boolean {
        return false;
    }

    start () {
        // Your initialization goes here.
    }
}
