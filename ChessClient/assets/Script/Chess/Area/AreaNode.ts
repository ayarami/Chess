import { _decorator, Component, Node, Vec2, Material, ModelComponent, Vec3, Color } from "cc";
const { ccclass, property, requireComponent } = _decorator;

@ccclass("AreaNode")
@requireComponent(ModelComponent)
export class AreaNode extends Component {

    private _maxDistance: number = 5;

    private _minDistance: number = 0;
    
    @property
    get maxDistance (): number {
        return this._maxDistance;
    }
    set maxDistance (value: number) {
        if (!this._material) {
            this._material = this.node.getComponent(ModelComponent).getSharedMaterial(0);
        }
        this._maxDistance = value;
        this._material.setProperty('maxDistance', this._maxDistance / 5);
    }

    @property
    get minDistance (): number {
        return this._minDistance;
    }
    set minDistance (value: number) {
        if (!this._material) {
            this._material = this.node.getComponent(ModelComponent).getSharedMaterial(0);
        }
        this._minDistance = value;
        this._material.setProperty('minDistance', this._minDistance / 5);
    }

    private _angle: number = 30;

    @property
    get angle (): number {
        return this._angle;
    }
    set angle (value: number) {
        if (!this._material) {
            this._material = this.node.getComponent(ModelComponent).getSharedMaterial(0);
        }
        this._angle = value;
        this._material.setProperty('angle', this._angle);
    }

    private _areaColor: Color = new Color(255,0,0,128);

    @property
    get areaColor (): Color {
        return this._areaColor;
    }
    set areaColor (value: Color) {
        if (!this._material) {
            this._material = this.node.getComponent(ModelComponent).getSharedMaterial(0);
        }
        this._areaColor = value;
        this._material.setProperty('color', this._areaColor);
    }

    private _direction: Vec3 = new Vec3(0,0,0);

    @property
    get direction(): Vec3 {
        return this.node.eulerAngles;
    }

    private _material: Material = null;

    constructor () {
        super();
    }

    start () {

        // Your initialization goes here.
    }

    // update (deltaTime: number) {
    //     // Your update function goes here.
    // }
}
