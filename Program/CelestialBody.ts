namespace SolarSystem {
    export class CelestialBody extends Actor{

        public size: number;
        public orbitalPeriod: number;
        public rotationalSpeed: number;
        public info: Info;


        public constructor(_name: string, _size: number, _orbitalPeriod: number, _matrices: Matrix) {
            super(_name, _matrices);
        }
        public draw():void{}
        public move():void{}
        public rotate():void{}
        public process():void{}
    }
}