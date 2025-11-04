namespace SolarSystem {
    export class Spaceship extends Actor {
        public destination?: CelestialBody;
        public info: Info;
        private rotation: number;

        public constructor(_name: string, _position: Vector2, _matrices: Matrix2[]) {
            super(_name, _matrices);
            this.path = this.createShipPath();

        }
        public determineDestination(_destination: CelestialBody): void {
            this.destination = _destination;
        }
        
        public process(): void {
            this.move();
            this.draw();
        }

        public move(): void {

        }
        public draw(): void {
            crc2.save();
            crc2.translate(this.positionOffset.x, this.positionOffset.y);
            crc2.rotate(this.rotation);
            this.transform = crc2.getTransform();
            crc2.stroke(path);
            crc2.restore();
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