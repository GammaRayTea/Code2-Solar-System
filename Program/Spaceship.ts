namespace SolarSystem {
    export class Spaceship extends Actor {
        public destination: Vector2;
        public info: Info;

        public constructor(_name: string, _position: Vector2, _matrices: Matrix2[]) {
            super(_name, _matrices);
            this.path = this.createShipPath();

        }
        public determineDestination(): void {

        }
        public process(): void {
            this.move();
            this.draw();
        }

        public move(): void {

        }
        public draw(): void {

        }

        private createShipPath(): Path2D {
            let path: Path2D = new Path2D();
            path.moveTo(15, 0);
            path.lineTo(-10, -10);
            path.lineTo(-5, 0);
            path.lineTo(-10, 10);
            path.closePath();
            return path;
        }
    }
}