namespace SolarSystem {
    export class CelestialBody extends Actor {
        public size: number;
        public orbitRotation: number = 0;
        public axisRotation: number = 0;
        public info: CelestialBodyInfo;
        public path!: Path2D;



        public constructor(_name: string, _size: number, _info: CelestialBodyInfo) {
            super(_name,);
            this.size = _size;
            this.info = _info;
            this.createPath(this.size);
        }

        public process(): void {
            this.move();
            this.draw();
        }

        private move(): void {
            this.orbitRotation += 360 / this.orbitRotation;
            this.axisRotation += 360 / this.axisRotation;
        }

        public draw(): void {
            crc2.save();
            crc2.rotate(this.orbitRotation);
            crc2.translate(0, this.positionOffset);
            crc2.rotate(this.axisRotation | 0);
            crc2.stroke(this.path);
            crc2.restore();
        }

        public createPath(_planetSize: number): void {
            let newPath: Path2D = new Path2D();
            newPath.moveTo(0, 0);
            newPath.arc(0, 0, _planetSize, 0, 2 * Math.PI);
            newPath.arc(0, _planetSize / 2, _planetSize / 2, 0, 2 * Math.PI);
            newPath.closePath();
            this.path = newPath;
        }
    }
}