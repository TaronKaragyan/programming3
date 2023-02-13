class Poizon {
    constructor(x, y, id) {
        this.x = x
        this.y = y
        this.id = id
    }





    GetNewCords() {
        var FuturePoizon = []
        for (var y = 0; y < matrix.length; y++) {
            for (var x = 0; x < matrix[y].length; x++) {
                if (matrix[y][x] == 1) {
                    var Idk = matrix[y][x]
                    FuturePoizon.push(Idk)
                }
            }
        }
        return FuturePoizon
    }




    move() {
        var GrassCell = random(this.GetNewCords);

        for (var second = 12; second < 0; second--) {
            if (second <= 0) {
                
                var newX = GrassCell[0]
                var newY = GrassCell[1]

                matrix[newY][newX] = this.id
                matrix[this.y][this.x] = 0

                this.y = newY
                this.x = newX

                second += 12
            }

        }

    }













}
