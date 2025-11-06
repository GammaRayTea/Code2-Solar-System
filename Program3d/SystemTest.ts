namespace FirstFudge {
  import ƒ = FudgeCore;
  document.addEventListener("DOMContentLoaded", hndLoad);

  export let mesh: ƒ.Mesh;
  export let material: ƒ.Material;

  let sun: Body;
  let mercury: Body;
  let venus: Body;
  let earth: Body;
  let mars: Body;
  let jupiter: Body;
  let saturn: Body;
  let uranus: Body;
  let neptune: Body;

  let moon: Body;

  let simspeed: number = 500;

  let viewport: ƒ.Viewport;


  function hndLoad(): void {
    const canvas: HTMLCanvasElement = document.querySelector("canvas")!;
    const cmpCamera: ƒ.ComponentCamera = new ƒ.ComponentCamera();
    mesh = new ƒ.MeshSphere("Sphere");
    material = new ƒ.Material("Material", ƒ.ShaderLit);

    sun = new Body("Sun", 360/300,5);
    

    mercury = new Body("Mercury", (360/88)*simspeed, 1);
    mercury.mtxLocal.translateX(5);

    venus = new Body("Venus", (360/256)*simspeed, 1);
    venus.mtxLocal.translateX(8);

    earth = new Body("Earth", (360/356)*simspeed,2);
    earth.mtxLocal.translateX(10);
   
    moon = new Body("Moon", (360/30)*simspeed,0.6);
    moon.mtxLocal.translateX(2);
    earth.addChild(moon);
    
    mars = new Body("Mars", (360/687)*simspeed,1.7);
    mars.mtxLocal.translateX(14);
    //mars.getComponent(ƒ.ComponentTransform).mtxLocal.rotateY(60, true);
    //mars.getComponent(ƒ.ComponentMesh).mtxPivot.rotateY(-3 * 60);

    jupiter = new Body("Jupiter",(360/4333)*simspeed,2);
    jupiter.mtxLocal.translateX(18);

    saturn = new Body("Saturn",(360/10759)*simspeed,3);
    saturn.mtxLocal.translateX(24);

    uranus = new Body("Uranus",(360/30687)*simspeed,3);
    uranus.mtxLocal.translateX(27);

    neptune = new Body("Neptune",(360/60190)*simspeed,4);
    neptune.mtxLocal.translateX(33);


    let system = new ƒ.Node("System");
    system.addChild(sun);
    system.addChild(mercury);
    system.addChild(venus);
    system.addChild(earth);
    system.addChild(mars);
    system.addChild(jupiter);
    system.addChild(saturn);
    system.addChild(uranus);
    system.addChild(neptune);

    viewport = new ƒ.Viewport();
    viewport.initialize("Viewport", system, cmpCamera, canvas);

    cmpCamera.mtxPivot.translateY(100);
    //cmpCamera.mtxPivot.translateZ(-20);
    //cmpCamera.mtxPivot.rotateY(180);
    cmpCamera.mtxPivot.rotateX(90);


    ƒ.Loop.start();
    ƒ.Loop.addEventListener(ƒ.EVENT.LOOP_FRAME, update);
  }

  function update(): void {
    sun.update();
    mercury.update();
    venus.update();
    earth.update();
    mars.update();
    moon.update();
    jupiter.update();
    saturn.update();
    uranus.update();
    neptune.update();
    viewport.draw();
  }
}