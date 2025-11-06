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

  let phobos: Body;
  let deimos: Body;

  let ganymede: Body;
  let callisto: Body;
  let io: Body;

  let titan: Body;
  let rhea: Body;
  let iaepetus: Body;

  let titania: Body;
  let oberon: Body;
  let umbriel: Body;

  let triton: Body;
  let proteus: Body;



  let simspeed: number = 40;

  let viewport: ƒ.Viewport;


  function hndLoad(): void {
    const canvas: HTMLCanvasElement = document.querySelector("canvas")!;
    const cmpCamera: ƒ.ComponentCamera = new ƒ.ComponentCamera();
    mesh = new ƒ.MeshSphere("Sphere");
    material = new ƒ.Material("Material", ƒ.ShaderLit);

    sun = new Body("Sun", 360/300,10,0);
    
    mercury = new Body("Mercury", (360/88)*simspeed, 4, 10);
    
    venus = new Body("Venus", (360/256)*simspeed, 3.8,20);

    earth = new Body("Earth", (360/356)*simspeed,5,35);
    moon = new Body("Moon", (360/30)*simspeed,2,3);
    moon.mtxLocal.translateX(2);
    earth.addChild(moon);
    
    mars = new Body("Mars", (360/687)*simspeed,4,45);

    phobos = new Body("Phobos", -(360/30)*simspeed,2,4);
    deimos = new Body("Deimos", (360/40)*simspeed,2,7);
    mars.addChild(phobos);
    mars.addChild(deimos);
  
    jupiter = new Body("Jupiter",(360/4333)*simspeed,6,55);
    ganymede = new Body("Ganimede", (360/200)*simspeed,2,3);
    callisto = new Body("Callisto", -(360/50)*simspeed,2,5);
    io = new Body("Io", (360/10)*simspeed,2,7);
    jupiter.addChild(ganymede);
    jupiter.addChild(callisto);
    jupiter.addChild(io);

  
    saturn = new Body("Saturn",(360/10759)*simspeed,3,65);
    titan = new Body("Titan",(360/40)*simspeed,3,4);
    rhea = new Body("Rhea",(360/50)*simspeed,2,3);
    iaepetus = new Body("Iapetus",(360/69)*simspeed,2,6);
    saturn.addChild(titan);
    saturn.addChild(rhea);
    saturn.addChild(iaepetus);

    uranus = new Body("Uranus",(360/30687)*simspeed,5,70);
    titania= new Body("Titania",(360/40)*simspeed,3,4);
    oberon = new Body("Oberon",(360/100)*simspeed,2,6);
    umbriel = new Body("Umbriel",(360/60)*simspeed,3,7);
    uranus.addChild(titania);
    uranus.addChild(oberon);
    uranus.addChild(umbriel);

    neptune = new Body("Neptune",(360/60190)*simspeed,5,80);
    proteus = new Body("Proteus",(360/300)*simspeed,2,4);
    triton = new Body("Triton",(360/10)*simspeed,1,6)
    neptune.addChild(proteus);
    neptune.addChild(triton);

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

    cmpCamera.mtxPivot.translateY(200);
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
    moon.update();

    mars.update();
    phobos.update();
    deimos.update();
    
    jupiter.update();
    ganymede.update();
    callisto.update();
    io.update();

    saturn.update();
    titan.update();
    rhea.update();
    iaepetus.update();

    uranus.update();
    titania.update();
    oberon.update();
    umbriel.update();

    neptune.update();
    triton.update();
    proteus.update();

    viewport.draw();
  }
}