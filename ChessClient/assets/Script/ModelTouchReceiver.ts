import { _decorator, Component, Node, Touch, Vec3, director } from "cc";
import { ModelTouchEvent, EventModelData, EClientMsg } from "./Global/Defines";
const { ccclass, property } = _decorator;

@ccclass("ModelTouchReceiver")
export class ModelTouchReceiver extends Component {
    /* class member could be defined like this */
    // dummy = '';

    /* use `property` decorator if your want the member to be serializable */
    // @property
    // serializableDummy = 0;

    @property(Node)
    ReceiveNode: Node = null;

    @property
    ReceiveTouchStart: boolean = false;

    @property
    ReceiveTouchMove: boolean = false;

    @property
    ReceiveTouchEnd: boolean = false;

    @property
    ReceiveTouchCancel: boolean = false;

    @property
    set _ReceiveTouchStart (value: boolean) {
        if (!CC_EDITOR) {
            if (value) {
                this.ReceiveNode.on(ModelTouchEvent.TouchStart, this._touchStart, this);
            }
            else {
                this.ReceiveNode.off(ModelTouchEvent.TouchStart, this._touchStart, this);
            }
        }
        this.ReceiveTouchStart = value;
    }
    get _ReceiveTouchStart (): boolean {
        return this.ReceiveTouchStart;
    }

    @property
    set _ReceiveTouchMove (value: boolean) {
        if (!CC_EDITOR) {
            if (value) {
                this.ReceiveNode.on(ModelTouchEvent.TouchMove, this._touchMove, this);
            }
            else {
                this.ReceiveNode.off(ModelTouchEvent.TouchMove, this._touchMove, this);
            }
        }
        this.ReceiveTouchMove = value;
    }
    get _ReceiveTouchMove (): boolean {
        return this.ReceiveTouchMove;
    }

    @property
    set _ReceiveTouchEnd (value: boolean) {
        if (!CC_EDITOR) {
            if (value) {
                this.ReceiveNode.on(ModelTouchEvent.TouchEnd, this._touchEnd, this);
            }
            else {
                this.ReceiveNode.off(ModelTouchEvent.TouchEnd, this._touchEnd, this);
            }
        }
        this.ReceiveTouchEnd = value;
    }
    get _ReceiveTouchEnd (): boolean {
        return this.ReceiveTouchEnd;
    }

    @property
    set _ReceiveTouchCancel (value: boolean) {
        if (!CC_EDITOR) {
            if (value) {
                this.ReceiveNode.on(ModelTouchEvent.TouchCancel, this._touchCancel, this);
            }
            else {
                this.ReceiveNode.off(ModelTouchEvent.TouchCancel, this._touchCancel, this);
            }
        }
        this.ReceiveTouchCancel = value;
    }
    get _ReceiveTouchCancel (): boolean {
        return this.ReceiveTouchCancel;
    }

    onLoad () {
        if (!this.ReceiveNode) {
            this.ReceiveNode = this.node as Node;
        }
    }

    start () {
        // Your initialization goes here.
        this._ReceiveTouchStart = this.ReceiveTouchStart;
        this._ReceiveTouchMove = this.ReceiveTouchMove;
        this._ReceiveTouchEnd = this.ReceiveTouchEnd;
        this._ReceiveTouchCancel = this.ReceiveTouchCancel;
    }

    _touchStart (data: EventModelData) {
    }

    _touchMove (data: EventModelData) {

    }

    _touchEnd (data: EventModelData) {
        if (data.node == this.ReceiveNode) {
            director.emit(EClientMsg.SelectedChess, this.node);
        }
    }

    _touchCancel (data: EventModelData) {
        
    }

    // update (deltaTime: number) {
    //     // Your update function goes here.
    // }
}
