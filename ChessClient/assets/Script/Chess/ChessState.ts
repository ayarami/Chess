import { _decorator, Component, Node, Vec2 } from "cc";
import { PlayerFlag, EChessJob } from "../Global/Defines";
import { ModelTouchReceiver } from "../ModelTouchReceiver";
const { ccclass, property } = _decorator;

@ccclass("ChessState")
export class ChessState extends Component {
    
    @property({type: PlayerFlag})
    playerFlag: number = PlayerFlag.White;

    @property({type: EChessJob})
    chessJob: string = EChessJob.Sword;

    @property
    attackRadius: number = 1;

    @property
    attackAngel: number = 60;

    @property
    moveTarget: Vec2 = new Vec2(0,0);

    private _ModelTouchReceiver: ModelTouchReceiver = null;

    start () {
        // Your initialization goes here.
        
    }



    // update (deltaTime: number) {
    //     // Your update function goes here.
    // }
}
