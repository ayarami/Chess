import { _decorator, Component, Node, Vec3, Vec2 } from "cc";
const { ccclass, property } = _decorator;

@ccclass("Area")
export abstract class Area {
    public direction: Vec2 | null = null;

    abstract intersectPoint (location: Vec3, point: Vec3): boolean;
}
