import { SpaceObject } from "./SpaceObject";

export class SpaceSystem
{
    private SpaceObjects: SpaceObject[] = [];
    private Name: string = '';
    private Age = 0;
    private CenterOfGravity!: SpaceObject;
    public id!: number;

    constructor(name: string, age: number, centerOfGravity: SpaceObject, objects?: SpaceObject[]){
        this.Name = name;
        this.Age = age;
        this.CenterOfGravity = centerOfGravity;
        if(objects != null) this.SpaceObjects = objects;
    }

    public get name():string
        {
            return this.Name;
        }
        public set name(s: string)
        {
            this.Name = s;
        }

        public get age():number
        {
            return this.Age;
        }
        public set age(a: number)
        {
            this.Age = a;
        }

        public get centerOfGravity():SpaceObject
        {
            return this.CenterOfGravity;
        }
        public set centerOfGravity(s: SpaceObject)
        {
            this.CenterOfGravity = s;
        }

        public get spaceObjects():SpaceObject[]
        {
            return this.SpaceObjects;
        }
        public set CenterOspaceObjectsfGravity(s: SpaceObject[])
        {
            this.SpaceObjects = this.SpaceObjects.concat(s);
        }
}