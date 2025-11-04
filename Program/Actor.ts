namespace SolarSystem {
    export abstract class Actor {
        public name: string;
        public transform!: DOMMatrix;
        // public globalPosition: Vector2;
        public info!: Info;
       



        public constructor(_name: string) {
            this.name = _name;
            

        }

        public isclicked(_clickedPos: Vector2): boolean {
            const global: DOMPoint = new DOMPoint(_clickedPos.x, _clickedPos.y);
            console.log("Global:", global);
            for (const actor of actors) {
                const inverse: DOMMatrix = actor.transform!.inverse();
                const local: DOMPoint = inverse.transformPoint(global);
                const localVector2: Vector2 = new Vector2(local.x,local.y);


                if () {
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