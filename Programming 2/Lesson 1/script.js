var matrix = [];


function generateMatrix(size) {
    var matrix = []
    for (var y = 0; y < size; y++) {
        matrix[y] = []
        for (var x = 0; x < size; x++) {
            var randomElement = random([0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 3, 4])
            matrix[y][x] = randomElement
        }


    }
    return matrix



}



var grassArr = []
var grassEaterArr = []
var hanterArr = []
var PoizonArr = []

var side = 15

function setup() {
    matrix = generateMatrix(50)
    frameRate(5)
    createCanvas(matrix[0].length * side, matrix.length * side)
    background("gray")
    createObjects()

}

function draw() {
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                fill("green")
            } else if (matrix[y][x] == 2) {
                fill("yellow")
            } else if (matrix[y][x] == 3) {
                fill("red")
            } else if (matrix[y][x] == 4) {
                fill("blue")
            } else {
                fill("gray")
            }
            rect(x * side, y * side, side, side)
        }
    }

    for (var i = 0; i < grassArr.length; i++) {
        grassArr[i].mul()
    }

    for (var i = 0; i < grassEaterArr.length; i++) {
        grassEaterArr[i].eat()

    }
    for (var i = 0; i < hanterArr.length; i++) {
        hanterArr[i].eat()

    }
    for (var i = 0; i < PoizonArr.length; i++) {
        PoizonArr[i].move()

    }

}

function createObjects() {

    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                var g = new Grass(x, y, 1)
                grassArr.push(g)
            } else if (matrix[y][x] == 2) {
                var ge = new GrassEater(x, y, 2)
                grassEaterArr.push(ge)
            } else if (matrix[y][x] == 3) {
                var ged = new hanter(x, y, 3)
                hanterArr.push(ged)
            } else if (matrix[y][x] == 4) {
                var gedo = new Poizon(x, y, 4)
                PoizonArr.push(gedo)
            }
        }
    }
}