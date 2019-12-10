import { Vec3, Node, Enum } from "cc";

export enum ModelTouchEvent {
    TouchStart  =   'TouchStart',
    TouchMove   =   'TouchMove',
    TouchEnd    =   'TouchEnd',
    TouchCancel =   'TouchCancel'
}

export class EventModelData {
    public hitpoint: Vec3 | null = null;
    public node: Node = null;
    public _eventCode: string | null = null;
    constructor (hitpoint: Vec3 | null, node: Node) {
        this.hitpoint = hitpoint;
        this.node = node;
    }
}

export var PlayerFlag = Enum({
    White   :   0,
    Black   :   1
})

export var EChessJob = Enum({
    Sword : 'Sword',
    Spear : 'Spear',
    Arrow : 'Arrow'
})

export enum EClientMsg {
    SelectedChess   =    'SelectedChess'
}

export enum EChessAnim {
    SelectedChessAnim       = 'SelectedChessAnim',
    UnselectedChessAnim     = 'UnselectedChessAnim'
}