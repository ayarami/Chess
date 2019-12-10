import { _decorator, Component, Node, Vec3, Vec2, director } from "cc";
import { Area } from "./Area";
const { ccclass, property } = _decorator;

@ccclass("SectionArea")
export class SectionArea extends Area {
    
    @property
    radius: number = 1;

    @property
    angle: number = 360;

    constructor (radius: number, angle: number) {
        super();
        this.radius = radius;
        this.angle = angle;
    }

    intersectPoint (location: Vec3, point: Vec3): boolean {
        var pointProjection: Vec2 = new Vec2(point.x, point.z);
        var locationProjection: Vec2 = new Vec2(location.x, location.z);
        var halfAngle = this.angle / 2;
        var targetDirection = pointProjection.subtract(locationProjection);
        if (targetDirection.length() > this.radius) {
            return false;
        }
        var angleBetweenTargetAndDirection = targetDirection.angle(this.direction);
        if (angleBetweenTargetAndDirection <= halfAngle) {
            return true;
        }
        else
            return false;

        return false;
    }
}
