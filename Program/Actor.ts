namespace SolarSystem {
    export class Actor{

    public name: string;
    public matrices: Matrix[];
    public globalPosition: Vector2;
    public info: Info;

    public constructor(_name:string,_matrices?:Matrix[]){}

    public isclicked():boolean{}

    public process():void{}



    }
}