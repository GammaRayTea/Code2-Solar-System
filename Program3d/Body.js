"use strict";
var FirstFudge;
(function (FirstFudge) {
    var ƒ = FudgeCore;
    class Body extends ƒ.Node {
        rotSpeed;
        constructor(_name, _speed, _size, _distance) {
            super(_name);
            this.addComponent(new ƒ.ComponentMesh(FirstFudge.mesh));
            this.addComponent(new ƒ.ComponentMaterial(FirstFudge.material));
            this.addComponent(new ƒ.ComponentTransform());
            this.rotSpeed = _speed;
            this.getComponent(ƒ.ComponentMesh).mtxPivot.scale(new ƒ.Vector3(_size, _size, _size));
            this.mtxLocal.translateX(_distance);
        }
        update() {
            const angle = this.rotSpeed * ƒ.Loop.timeFrameGame / 1000;
            this.getComponent(ƒ.ComponentTransform).mtxLocal.rotateY(angle, true);
            this.getComponent(ƒ.ComponentMesh).mtxPivot.rotateY(-3 * angle);
        }
    }
    FirstFudge.Body = Body;
})(FirstFudge || (FirstFudge = {}));
//# sourceMappingURL=Body.js.map