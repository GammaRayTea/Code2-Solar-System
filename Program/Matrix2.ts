namespace SolarSystem {
    export class Matrix2 {
        public matrix: number[][];

        constructor(_value?: number[][] | Vector2) {
            if (typeof _value === 'undefined') {
                this.matrix = this.identity();
            } else if (_value instanceof Vector2) {
                this.matrix = this.identity();
                this.matrix[0][0] = _value.x;
                this.matrix[1][0] = _value.y;
                this.matrix[2][0] = _value.w;
            } else {
                this.matrix = _value;
            }
        }
        public identity(): number[][] {
            return [
                [1, 0, 0],
                [0, 1, 0],
                [0, 0, 1]];
        }

        public getmatrix(): number[][] {
            return this.matrix
        }

        public getempty(): number[][] {
            return [[], [], []]
        }


        public static add(matrix1: Matrix2, matrix2: Matrix2): Matrix2 {
            let result: number[][] = [0][0];
            for (let i = 0; i < 3; i++) {
                for (let j = 0; j < 3; j++) {
                    result[i][j] = matrix1.m[i][j] + matrix2.m[i][j]
                }
            }
            return new Matrix2(result);
        }

        public static subtract(matrix1: Matrix2, matrix2: Matrix2): Matrix2 {
            let result = Matrix2;
            for (let i = 0; i < 3; i++) {
                for (let j = 0; j < 3; j++) {
                    result[i][j] = matrix1.m[i][j] - matrix2.m[i][j]
                }
            }
            return new Matrix2(result);
        }

        public static multiply(matrix1: Matrix2, matrix2: Matrix2): Matrix2 {
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

        public static multiplyByValue(matrix: Matrix2, value: number): Matrix2 {
            let result = Matrix2;
            for (let i = 0; i < 3; i++) {
                for (let j = 0; j < 3; j++) {
                    result[i][j] = matrix.m[i][j] * value
                }
            }
            return new Matrix2(result);
        }

    }
}