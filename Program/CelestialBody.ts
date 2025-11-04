namespace SolarSystem {
    export class CelestialBody extends Actor {
        public size: number;
        public orbitalPeriod: number;
        public rotationalSpeed: number;
        public info: Info;


        public constructor(_name: string, _size: number, _orbitalPeriod: number) {
            super(_name,);
        }

        public process(): void {
            this.move();
            this.draw();
            this.rotate();
        }
        
        private rotate(): void {

        }
        private move(): void {

        }

        private draw(): void {

        }
    }
}