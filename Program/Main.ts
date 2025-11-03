namespace SolarSystem {
    window.addEventListener("load", handleLoad);
    export let crc2: CanvasRenderingContext2D;
    const actors: Actor[] = [];
    let timescale: number;
    const clickedPos: Vector2 = new Vector2(0, 0);
    let infobox: Infobox;
    let clicked: boolean = false;
    let delaytimescale: number = 1;



    function handleLoad(_event: Event): void {
        let canvas: HTMLCanvasElement | null = document.getElementById("simulationcanvas") as HTMLCanvasElement;
        if (!canvas) {
            return;
        }
        crc2 = canvas.getContext("2d") as CanvasRenderingContext2D;
        crc2.fillStyle = "black";

        canvas.addEventListener("mousedown", hndlclick);
        window.setInterval(update, 20);
    }

    function update() {
        let deltaTime = getDeltaTime();
        for (let actor of actors) {
            actor.process(delaytimescale);
            if(clicked){
                actor.isclicked(clickedPosq);
            }
        }
    }

    function hndlclick(_event: MouseEvent): void {
        clickedPos.set(_event.clientX - crc2.canvas.offsetLeft, _event.clientY - crc2.canvas.offsetTop);
        clicked = true;
    }
}