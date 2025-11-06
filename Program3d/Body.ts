namespace FirstFudge {
    import ƒ = FudgeCore;


    export class Body extends ƒ.Node {
        rotSpeed: number;
        public constructor(_name: string, _speed: number, _size: number, _distance: number ) {
            super(_name);
            this.addComponent(new ƒ.ComponentMesh(mesh));
            this.addComponent(new ƒ.ComponentMaterial(material));
            this.addComponent(new ƒ.ComponentTransform());
            this.rotSpeed = _speed;
            this.getComponent(ƒ.ComponentMesh).mtxPivot.scale(new ƒ.Vector3(_size, _size, _size));
            this.mtxLocal.translateX(_distance);
        }

        public update(): void {

            const angle: number = this.rotSpeed * ƒ.Loop.timeFrameGame / 1000;

            this.getComponent(ƒ.ComponentTransform).mtxLocal.rotateY(angle, true);
            this.getComponent(ƒ.ComponentMesh).mtxPivot.rotateY(-3 * angle);
        }
    }
}