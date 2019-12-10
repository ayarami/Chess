import { _decorator, Component, Node, geometry, CameraComponent, Touch, PhysicsSystem, Vec3, Event, PhysicsRayResult, __internal} from "cc";
import { ModelTouchEvent, EventModelData } from "./Global/Defines";
const { ccclass, property } = _decorator;

@ccclass("ModelTouch")
export class ModelTouch extends Component {
    @property(CameraComponent)
    camera: CameraComponent = null;

    

    private targetNode = null;

    getTouchRay (touch: Touch) {
        const ray = new geometry.ray();
        const camera = this.camera;
        const touchPos = touch.getLocation();
        camera.screenPointToRay(touchPos.x, touchPos.y, ray);
        return ray;
    }

    start () {
        this.node.on(Node.EventType.TOUCH_START, (touch: Touch , event: Event) => {

            var ray = this.getTouchRay(touch);

            PhysicsSystem.instance.raycastClosest(ray, -1, 100,false);
            var result: PhysicsRayResult = PhysicsSystem.instance.raycastClosestResult;

            //console.log(PhysicsSystem.instance.raycastClosestResult);
            if (result.collider) {
                var node: Node = result.collider.node as Node;
                var hitpoint: Vec3 = result.hitPoint;

                var data: EventModelData = new EventModelData(hitpoint, node);
                node.emit(ModelTouchEvent.TouchStart, data);
                this.targetNode = node;
            }
        }, this);

        this.node.on(Node.EventType.TOUCH_MOVE, (touch: Touch , event: Event) => {
            var ray = this.getTouchRay(touch);
            
            PhysicsSystem.instance.raycastClosest(ray, -1, 100,false);
            var result: PhysicsRayResult = PhysicsSystem.instance.raycastClosestResult;

            //console.log(PhysicsSystem.instance.raycastClosestResult);

            var node: Node = result.collider.node as Node;
            var hitpoint: Vec3 = result.hitPoint;

            var data: EventModelData = new EventModelData(hitpoint, node);
            this.targetNode.emit(ModelTouchEvent.TouchMove, data);            

        }, this);

        this.node.on(Node.EventType.TOUCH_END, (touch: Touch , event: Event) => {
            var ray = this.getTouchRay(touch);
            
            PhysicsSystem.instance.raycastClosest(ray, -1, 100,false);
            var result: PhysicsRayResult = PhysicsSystem.instance.raycastClosestResult;

            //console.log(PhysicsSystem.instance.raycastClosestResult);

            var node: Node = result.collider.node as Node;
            var hitpoint: Vec3 = result.hitPoint;

            var data: EventModelData = new EventModelData(hitpoint, node);
            this.targetNode.emit(ModelTouchEvent.TouchEnd, data); 

            this.targetNode = null;
        }, this);

        this.node.on(Node.EventType.TOUCH_CANCEL, (touch: Touch , event: Event) => {
            var ray = this.getTouchRay(touch);
            
            PhysicsSystem.instance.raycastClosest(ray, -1, 100,false);
            var result: PhysicsRayResult = PhysicsSystem.instance.raycastClosestResult;

            //console.log(PhysicsSystem.instance.raycastClosestResult);

            var node: Node = result.collider.node as Node;
            var hitpoint: Vec3 = result.hitPoint;

            var data: EventModelData = new EventModelData(hitpoint, node);
            this.targetNode.emit(ModelTouchEvent.TouchCancel, data); 
                       
            this.targetNode = null;
        }, this);
    }
}
