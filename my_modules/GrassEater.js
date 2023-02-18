class GrassEater extends LivingCreature{
    constructor(x, y, id) {
        super(x,y,id)
        this.energy = 8
    }


    getNewCoordinates() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];

    }


    mul() {
        var emptyCells = this.chooseCell(0);
        var newCell = random(emptyCells);

        if (newCell && this.energy >= 12) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = this.id;

            var newGrassEater = new GrassEater(newX, newY, this.id);
            grassEaterArr.push(newGrassEater);
            this.energy = 8;
        }
    }

    move() {

        var emptyCells = this.chooseCell(0);
        var newCell = random(emptyCells);

        if (newCell && this.energy > 0) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = this.id
            matrix[this.y][this.x] = 0

            this.x = newX
            this.y = newY

            this.energy--
        }
        this.die()
    }

    eat() {

        var emptyCells = this.chooseCell(1);
        var newCell = random(emptyCells);
        var PoizonCells = this.chooseCell(4)
        var LastCell = random(PoizonCells)

        if (newCell && this.energy > 0) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = this.id
            matrix[this.y][this.x] = 0

            this.x = newX
            this.y = newY
            this.energy++

            for (var i in grassArr) {
                if (newX == grassArr[i].x && newY == grassArr[i].y) {
                    grassArr.splice(i, 1)
                    break
                }
            }
            this.mul()
        }
        else if (LastCell && this.energy > 0) {
            for (var i in grassEaterArr) {
                if (this.x == grassEaterArr[i].x && this.y == grassEaterArr[i].y) {
                    grassEaterArr.splice(i, 1)
                    break
                }
            }
            matrix[this.y][this.x] = 0
        }

        else {
            this.move()
        }
    }

    die() {
        if (this.energy <= 0) {
            for (var i in grassEaterArr) {
                if (this.x == grassEaterArr[i].x && this.y == grassEaterArr[i].y) {
                    grassEaterArr.splice(i, 1)
                    break
                }
            }
            matrix[this.y][this.x] = 0
        }

    }
}





