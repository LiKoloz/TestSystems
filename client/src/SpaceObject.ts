import {SpaceSystem} from './SpaceSystem'

export class SpaceObject
{
        private _type:  string = '';
        private _name: string = '';
        private  _age = 0;
        private _diameter = 0;
        private _weight = 0;
        public Id!: number;
        public spaceSystem!: SpaceSystem[];

    constructor(type: string, name: string, age: number, diameter: number, weight: number){
        this._type = type;
        this._age = age;
        this._diameter = diameter;
        this._weight = weight;
    }

        public get type():string
        {
            return this._type;
        }
        public set type(s: string)
        {
            this._type = s;
        }

        public get name():string
        {
            return this._name;
        }
        public set name(s: string)
        {
            this._name = s;
        }

        public get age():number
        {
            return this._age;
        }
        public set age(a: number)
        {
            this._age = a;
        }

        public get diameter():number
        {
            return this._diameter;
        }
        public set diameter(a: number)
        {
            this._diameter = a;
        }

        public get weight():number
        {
            return this._weight;
        }
        public set weight(a: number)
        {
            this._weight = a;
        }
}