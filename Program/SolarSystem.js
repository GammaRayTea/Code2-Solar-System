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
        constructor(..._args) {
            if (_args.length === 2)
                this.set(_args[0], _args[1]);
            else if (_args.length === 1) {
                this.set(_args[0].x, _args[0].y);
            }
        }
        static getDifference(..._args) {
            const vector = new Vector2(0, 0);
            if (_args.length === 2) {
                vector.set(_args[0].x - _args[1].x, _args[0].y - _args[1].y);
            }
            else if (_args.length === 3) {
                vector.set(_args[0].x - _args[1], _args[0].y - _args[2]);
            }
            return vector;
        }
        static random(_minLength, _maxLength) {
            const length = _minLength + Math.random() * (_maxLength - _minLength);
            const direction = Math.random() * 2 * Math.PI;
            const vector = new Vector2(Math.cos(direction), Math.sin(direction));
            vector.scale(length);
            return vector;
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
        set(..._args) {
            if (_args.length === 1) {
                this.x = _args[0].x;
                this.y = _args[0].y;
            }
            else if (_args.length === 2) {
                this.x = _args[0];
                this.y = _args[1];
            }
        }
        normalise() {
            const length = this.length;
            this.set(this.x / length, this.y / length);
        }
        copy() {
            return new Vector2(this.x, this.y);
        }
    }
    SolarSystem.Vector2 = Vector2;
})(SolarSystem || (SolarSystem = {}));
var SolarSystem;
(function (SolarSystem) {
    ;
    class Infobox {
        info;
        position;
        static generate(_info, _position) {
            const table = document.createElement("table");
            table.classList.add("info-popup");
            const header = document.createElement("tr");
            const headerCell = document.createElement("th");
            headerCell.colSpan = 2;
            if (_info.title) {
                headerCell.textContent = _info.title;
            }
            else {
                headerCell.textContent = "Unknown";
            }
            header.appendChild(headerCell);
            table.appendChild(header);
            if (_info.infotext) {
                const descRow = document.createElement("tr");
                const descCell = document.createElement("td");
                descCell.colSpan = 2;
                headerCell.textContent = _info.infotext;
                descRow.appendChild(descCell);
                table.appendChild(descRow);
            }
            for (const [key, value] of Object.entries(_info.data || {})) {
                const row = document.createElement("tr");
                const keyCell = document.createElement("td");
                const valueCell = document.createElement("td");
                keyCell.textContent = key;
                valueCell.textContent = String(value);
                row.appendChild(keyCell);
                row.appendChild(valueCell);
                table.appendChild(row);
            }
            table.style.position = "absolute";
            table.style.left = `${_position.x}px`;
            table.style.top = `${_position.y}px`;
            document.body.appendChild(table);
        }
    }
    SolarSystem.Infobox = Infobox;
})(SolarSystem || (SolarSystem = {}));
var SolarSystem;
(function (SolarSystem) {
    class Actor {
        name;
        transform;
        // public globalPosition: Vector2;
        info;
        constructor(_name) {
            this.name = _name;
        }
        isclicked(_clickedPos) {
            const global = new DOMPoint(_clickedPos.x, _clickedPos.y);
            console.log("Global:", global);
            for (const actor of SolarSystem.actors) {
                const inverse = actor.transform.inverse();
                const local = inverse.transformPoint(global);
                const localVector2 = new SolarSystem.Vector2(local.x, local.y);
                if () {
                    return true;
                }
            }
            return false;
        }
        process() {
            //To be overridden in subclasses
        }
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
        constructor(_name, _size, _orbitalPeriod) {
            super(_name);
        }
        process() {
            this.move();
            this.draw();
            this.rotate();
        }
        rotate() {
        }
        move() {
        }
        draw() {
        }
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
    window.addEventListener("load", handleLoad);
    SolarSystem.actors = [];
    let timescale;
    const clickedPos = new SolarSystem.Vector2(0, 0);
    let infobox;
    let clickedActive = false;
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
        for (let actor of SolarSystem.actors) {
            actor.process(delaytimescale);
            if (clickedActive) {
                if (actor.isclicked(clickedPos)) {
                    SolarSystem.Infobox.generate(actor.info, clickedPos);
                }
            }
        }
    }
    function hndlclick(_event) {
        clickedPos.set(_event.clientX - SolarSystem.crc2.canvas.offsetLeft, _event.clientY - SolarSystem.crc2.canvas.offsetTop);
        clickedActive = true;
    }
})(SolarSystem || (SolarSystem = {}));
var SolarSystem;
(function (SolarSystem) {
    class Matrix2 {
        matrix;
        constructor(_value) {
            if (typeof _value === 'undefined') {
                this.matrix = this.identity();
            }
            else if (_value instanceof SolarSystem.Vector2) {
                this.matrix = this.identity();
                this.matrix[0][0] = _value.x;
                this.matrix[1][0] = _value.y;
                this.matrix[2][0] = _value.w;
            }
            else {
                this.matrix = _value;
            }
        }
        identity() {
            return [
                [1, 0, 0],
                [0, 1, 0],
                [0, 0, 1]
            ];
        }
        getmatrix() {
            return this.matrix;
        }
        getempty() {
            return [[], [], []];
        }
        static add(matrix1, matrix2) {
            let result = [0][0];
            for (let i = 0; i < 3; i++) {
                for (let j = 0; j < 3; j++) {
                    result[i][j] = matrix1.m[i][j] + matrix2.m[i][j];
                }
            }
            return new Matrix2(result);
        }
        static subtract(matrix1, matrix2) {
            let result = Matrix2;
            for (let i = 0; i < 3; i++) {
                for (let j = 0; j < 3; j++) {
                    result[i][j] = matrix1.m[i][j] - matrix2.m[i][j];
                }
            }
            return new Matrix2(result);
        }
        static multiply(matrix1, matrix2) {
            let result = Matrix2;
            for (let i = 0; i < 3; i++) {
                for (let j = 0; j < 3; j++) {
                    result[i][j] = 0;
                    for (let k = 0; k < 3; k++) {
                        result[i][j] += matrix1.m[i][k] * matrix2.m[k][j];
                    }
                }
            }
            return new Matrix2(result);
        }
        static multiplyByValue(matrix, value) {
            let result = Matrix2;
            for (let i = 0; i < 3; i++) {
                for (let j = 0; j < 3; j++) {
                    result[i][j] = matrix.m[i][j] * value;
                }
            }
            return new Matrix2(result);
        }
    }
    SolarSystem.Matrix2 = Matrix2;
})(SolarSystem || (SolarSystem = {}));
var SolarSystem;
(function (SolarSystem) {
    class Spaceship extends SolarSystem.Actor {
        destination;
        info;
        constructor(_name, _position, _matrices) {
            super(_name, _matrices);
            this.path = this.createShipPath();
        }
        determineDestination() {
        }
        process() {
            this.move();
            this.draw();
        }
        move() {
        }
        draw() {
        }
        createShipPath() {
            let path = new Path2D();
            path.moveTo(15, 0);
            path.lineTo(-10, -10);
            path.lineTo(-5, 0);
            path.lineTo(-10, 10);
            path.closePath();
            return path;
        }
    }
    SolarSystem.Spaceship = Spaceship;
})(SolarSystem || (SolarSystem = {}));
//# sourceMappingURL=SolarSystem.js.map