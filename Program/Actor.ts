namespace SolarSystem {
    export class Actor {
        public name: string;
        public globalPosition: Vector2;
        public info: Info;
        public path: Path2D;



        public constructor(_name: string, _matrices?: Matrix2[]) {
            this.name = _name;
            this.matrices = _matrices;

        }

        public isclicked(_clickedPos: Vector2): boolean {
            const global: DOMPoint = new DOMPoint(_event.offsetX, _event.offsetY);
            console.log("Global:", global);
            for (const actor of actors) {
                const inverse: DOMMatrix = actor.transform!.inverse();
                const local: DOMPoint = inverse.transformPoint(global);
                const hit: boolean = crc2.isPointInPath(actor.path, local.x, local.y);
                if (hit) {
                    return true;
                }
            }
            return false;
        }

        public process(): void {
            //To be overridden in subclasses
        }

    }
}