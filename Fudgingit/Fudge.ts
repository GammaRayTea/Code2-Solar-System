namespace FUDGe {
    window.addEventListener("load", start); // call start when load completed

    window.setInterval(start, 20);
    let i: number = 0;

    function start(): void {
        // eslint-disable-next-line @typescript-eslint/typedef
        const ƒ = FudgeCore;
        // eslint-disable-next-line @typescript-eslint/typedef
        const mesh = new ƒ.MeshSphere("Sphere");                                    // create a simple mesh representing a cube
        // eslint-disable-next-line @typescript-eslint/typedef
        const material = new ƒ.Material("Texture", FudgeCore.ShaderLitTextured); // create a material with the default texture for testing

        // eslint-disable-next-line @typescript-eslint/typedef  
        const node = new ƒ.Node("fatsch"); // create a node as the scene graph
        node.addComponent(new ƒ.ComponentMesh(mesh)); // refer the mesh to the node
        node.addComponent(new ƒ.ComponentMaterial(material)); // refer the material to the node
        node.getComponent(ƒ.ComponentMesh).mtxPivot.rotate(new ƒ.Vector3(-30, i, -15)); // rotate the mesh


        // eslint-disable-next-line @typescript-eslint/typedef
        const cmpCamera = new ƒ.ComponentCamera(); // setup a camera
        cmpCamera.mtxPivot.translateZ(-2); // move the camera back

        // eslint-disable-next-line @typescript-eslint/typedef
        const viewport = new ƒ.Viewport(); // create a viewport to manage rendering of the graph to the canvas via the camera
        viewport.initialize("Viewport", node, cmpCamera, document.querySelector("canvas")!);

        viewport.draw(); // render

        if (i > 100)
            i = 0;
        i += 2;
    }
}