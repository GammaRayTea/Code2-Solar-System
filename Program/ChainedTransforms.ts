namespace SolarSystem {
  type Transform = { path: Path2D, angle: number, distance: number, transform?: DOMMatrix };

  
  let crc2: CanvasRenderingContext2D;
  let t1: Transform;
  let t2: Transform;
  
  function hndClick(_event: MouseEvent): void {
    const global: DOMPoint = new DOMPoint(_event.offsetX, _event.offsetY);
    console.log("Global:", global);
    for (const arrow of arrows) {
      const inverse: DOMMatrix = arrow.transform!.inverse();
      const local: DOMPoint = inverse.transformPoint(global);
      const hit: boolean = crc2.isPointInPath(arrow.path, local.x, local.y);
      console.log(hit, "Local:", local);
    }
  }
}