namespace SolarSystem {
    export class Infobox{
        public info: Info;
        public position: Vector2;

        public constructor(_position: Vector2, _info: Info){}

        public clickRecieved():void{}
        public assembleInfoText():string{};
    }
}