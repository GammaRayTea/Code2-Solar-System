namespace SolarSystem {
    export class CelestialBody extends Actor {
        public size: number;
        public orbitRotation: number = 0;
        public axisRotation: number = 0;
        public info: Info;
        public path!: Path2D;



        public constructor(_name: string, _size: number, _info: Info) {
            super(_name,);
            this.size = _size;
            this.info = _info;
            for (const dataPair of _info.data!) {
                this.info.data!.push(dataPair)
            }
            this.createPath(this.size);
        }

        public process(): void {
            this.move();
            this.draw();
        }

        private move(): void {
            this.orbitRotation= 360/this.info.data!["orbitalPeriod"]
        }
        
        public draw(): void {
            crc2.save();
            crc2.rotate(this.orbitRotation);
            crc2.translate(0, this.positionalOffset.y);
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