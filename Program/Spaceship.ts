namespace SolarSystem {
    export class Spaceship extends Actor{

        public destination: Vector2;
        public info: Info;

        public constructor(_name:string, _position: Vector2, _matrices: Matrix[]){
            super(_name,_matrices);
        }

        public move():void{}
        public draw():void{}
        public determineDestination():void{}
        public process():void{}
    }
}