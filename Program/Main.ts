namespace SolarSystem {
    window.addEventListener("load", handleLoad);
    export let crc2: CanvasRenderingContext2D;
    let actors: Actor[];
    let timescale: number;


    function handleLoad(_event: Event): void {
        let canvas: HTMLCanvasElement | null = document.getElementById("simulationcanvas") as HTMLCanvasElement;
        if (!canvas) {
            return;
        }
        crc2 = canvas.getContext("2d") as CanvasRenderingContext2D;
        crc2.fillStyle = "black";
    }

}