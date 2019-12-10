import { _decorator, Component, Node, director, AnimationComponent } from "cc";
import { EClientMsg, EChessAnim } from "./Global/Defines";
import { _G } from "./Global/GlobalVariables";
const { ccclass, property } = _decorator;

@ccclass("SelectChess")
export class SelectChess extends Component {
    /* class member could be defined like this */
    // dummy = '';

    /* use `property` decorator if your want the member to be serializable */
    // @property
    // serializableDummy = 0;

    start () {
        director.on(EClientMsg.SelectedChess, this.selectChess, this);
    }

    selectChess (chessNode: Node) {
        if (_G.selectedChess != chessNode) {
            
        }
        if (chessNode.name == 'ChessBoard' || chessNode == null || _G.selectedChess != chessNode) {
            if (_G.selectedChess) {
                this.unselectChess();
            }
        }
        if (chessNode && chessNode.name != 'ChessBoard') {
            _G.selectedChess = chessNode;
            _G.selectedChess.getComponent(AnimationComponent).crossFade(EChessAnim.SelectedChessAnim, 0.1);
        }
    }

    unselectChess () {
        _G.selectedChess.getComponent(AnimationComponent).crossFade(EChessAnim.UnselectedChessAnim, 0.1);
    }

    // update (deltaTime: number) {
    //     // Your update function goes here.
    // }
}
