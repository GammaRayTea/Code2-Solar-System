"use strict";
var SolarSystem;
(function (SolarSystem) {
    function toDegree(_angleRad) {
        return _angleRad * (Math.PI / 180);
    }
    SolarSystem.toDegree = toDegree;
    function toRadian(_angleDegree) {
        return _angleDegree * (180 / Math.PI);
    }
    SolarSystem.toRadian = toRadian;
    function randomIntInRange(_min, _max) {
        return _min + Math.floor((_max - _min + 1) * Math.random());
    }
    SolarSystem.randomIntInRange = randomIntInRange;
})(SolarSystem || (SolarSystem = {}));
var SolarSystem;
(function (SolarSystem) {
    class Vector2 {
        x;
        y;
        constructor(_x, _y) {
            this.set(_x, _y);
        }
        get length() {
            return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
        }
        set length(_length) {
            this.normalise();
            this.scale(_length);
        }
        add(_summand) {
            this.x += _summand.x;
            this.y += _summand.y;
        }
        scale(_factor) {
            this.y *= _factor;
            this.x *= _factor;
        }
        rotate(_angleDegree) {
            const angleRad = SolarSystem.toRadian(_angleDegree);
            const xNew = this.x * Math.cos(angleRad) - this.y * Math.sin(angleRad);
            const yNew = this.y * Math.cos(angleRad) + this.x * Math.sin(angleRad);
            this.set(xNew, yNew);
        }
        set(_x, _y) {
            this.x = _x;
            this.y = _y;
        }
        normalise() {
            const length = this.length;
            this.set(this.x / length, this.y / length);
        }
        random(_minLength, _maxLength) {
            const length = _minLength + Math.random() * (_maxLength - _minLength);
            const direction = Math.random() * 2 * Math.PI;
            this.set(Math.cos(direction), Math.sin(direction));
            this.scale(length);
        }
        copy() {
            return new Vector2(this.x, this.y);
        }
    }
    SolarSystem.Vector2 = Vector2;
})(SolarSystem || (SolarSystem = {}));
var SolarSystem;
(function (SolarSystem) {
    class Actor {
        name;
        matrices;
        globalPosition;
        info;
        constructor(_name, _matrices) { }
        isclicked() { }
        process() { }
    }
    SolarSystem.Actor = Actor;
})(SolarSystem || (SolarSystem = {}));
var SolarSystem;
(function (SolarSystem) {
    class CelestialBody extends SolarSystem.Actor {
        size;
        orbitalPeriod;
        rotationalSpeed;
        info;
        constructor(_name, _size, _orbitalPeriod, _matrices) {
            super(_name, _matrices);
        }
        draw() { }
        move() { }
        rotate() { }
        process() { }
    }
    SolarSystem.CelestialBody = CelestialBody;
})(SolarSystem || (SolarSystem = {}));
var SolarSystem;
(function (SolarSystem) {
    let crc2;
    let t1;
    let t2;
    function hndClick(_event) {
        const global = new DOMPoint(_event.offsetX, _event.offsetY);
        console.log("Global:", global);
        for (const arrow of arrows) {
            const inverse = arrow.transform.inverse();
            const local = inverse.transformPoint(global);
            const hit = crc2.isPointInPath(arrow.path, local.x, local.y);
            console.log(hit, "Local:", local);
        }
    }
})(SolarSystem || (SolarSystem = {}));
var SolarSystem;
(function (SolarSystem) {
    class Infobox {
        info;
        position;
        constructor(_position, _info) { }
        clickRecieved() { }
        assembleInfoText() { }
        ;
    }
    SolarSystem.Infobox = Infobox;
})(SolarSystem || (SolarSystem = {}));
var SolarSystem;
(function (SolarSystem) {
    window.addEventListener("load", handleLoad);
    const actors = [];
    let timescale;
    const clickedPos = new SolarSystem.Vector2(0, 0);
    let infobox;
    let clicked = false;
    let delaytimescale = 1;
    function handleLoad(_event) {
        let canvas = document.getElementById("simulationcanvas");
        if (!canvas) {
            return;
        }
        SolarSystem.crc2 = canvas.getContext("2d");
        SolarSystem.crc2.fillStyle = "black";
        canvas.addEventListener("mousedown", hndlclick);
        window.setInterval(update, 20);
    }
    function update() {
        let deltaTime = getDeltaTime();
        for (let actor of actors) {
            actor.process(delaytimescale);
            if (clicked) {
                actor.isclicked(clickedPosq);
            }
        }
    }
    function hndlclick(_event) {
        clickedPos.set(_event.clientX - SolarSystem.crc2.canvas.offsetLeft, _event.clientY - SolarSystem.crc2.canvas.offsetTop);
        clicked = true;
    }
})(SolarSystem || (SolarSystem = {}));
var SolarSystem;
(function (SolarSystem) {
    class Spaceship extends SolarSystem.Actor {
        destination;
        info;
        constructor(_name, _position, _matrices) {
            super(_name, _matrices);
        }
        move() { }
        draw() { }
        determineDestination() { }
        process() { }
    }
    SolarSystem.Spaceship = Spaceship;
})(SolarSystem || (SolarSystem = {}));
//# sourceMappingURL=SolarSystem.js.map