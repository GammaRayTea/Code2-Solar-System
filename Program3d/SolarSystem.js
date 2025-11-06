"use strict";
var FirstFudge;
(function (FirstFudge) {
    var ƒ = FudgeCore;
    class Body extends ƒ.Node {
        constructor(_name) {
            super(_name);
            this.addComponent(new ƒ.ComponentMesh(FirstFudge.mesh));
            this.addComponent(new ƒ.ComponentMaterial(FirstFudge.material));
            this.addComponent(new ƒ.ComponentTransform());
            this.mtxLocal.translateX(1);
        }
        update() {
            const rotSpeed = 360 / 5;
            const angle = rotSpeed * ƒ.Loop.timeFrameGame / 1000;
            this.getComponent(ƒ.ComponentTransform).mtxLocal.rotateY(angle, true);
            this.getComponent(ƒ.ComponentMesh).mtxPivot.rotateY(-3 * angle);
        }
    }
    FirstFudge.Body = Body;
})(FirstFudge || (FirstFudge = {}));
var FirstFudge;
(function (FirstFudge) {
    var ƒ = FudgeCore;
    document.addEventListener("DOMContentLoaded", hndLoad);
    let earth;
    let viewport;
    function hndLoad() {
        const canvas = document.querySelector("canvas");
        const cmpCamera = new ƒ.ComponentCamera();
        FirstFudge.mesh = new ƒ.MeshCube("Cube");
        FirstFudge.material = new ƒ.Material("Material", ƒ.ShaderLit);
        earth = new FirstFudge.Body("Earth");
        viewport = new ƒ.Viewport();
        viewport.initialize("Viewport", earth, cmpCamera, canvas);
        cmpCamera.mtxPivot.translateZ(3);
        cmpCamera.mtxPivot.rotateY(180);
        ƒ.Loop.start();
        ƒ.Loop.addEventListener("loopFrame" /* ƒ.EVENT.LOOP_FRAME */, update);
    }
    function update() {
        earth.update();
        viewport.draw();
    }
})(FirstFudge || (FirstFudge = {}));
//# sourceMappingURL=SolarSystem.js.map