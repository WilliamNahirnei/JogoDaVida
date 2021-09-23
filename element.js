class element {
    constructor(id, x, y, status) {
        this.id = id
        this.setX(x)
        this.setY(y)
        this.setStatus(status)
        this.setNumberOfLivingNeighbors(0)
    }

    setX(x) {
        this.x = x
    }
    setY(y) {
        this.y = y
    }
    setStatus(status) {
        this.status = status
    }
    setNumberOfLivingNeighbors(numberOfLivingNeighbors) {
        this.numberOfLivingNeighbors = numberOfLivingNeighbors
    }
    getX() {
        return this.x
    }
    getY() {
        return this.y
    }
    getStatus() {
        return this.status
    }
    getNumberOfLivingNeighbors() {
        return this.numberOfLivingNeighbors
    }

    async checkNeighbors(board) {
        let numberOfLivingNeighbors = 0
        let x_start = 0
        let x_end = board.length - 1
        let y_start = 0
        let y_end = board.length - 1
        if (await this.getX() > 0)
            x_start = this.getX() - 1
        if (await this.getY() > 0)
            y_start = this.getY() - 1
        if (await this.getX() < board.length - 1)
            x_end = this.getX() + 1
        if (await this.getY() < board.length - 1)
            y_end = this.getY() + 1

        for (let x = x_start; x <= x_end; x++) {
            for (let y = y_start; y <= y_end; y++) {

                if (x != this.x || y != this.y){
                    if (await board[x][y].getStatus() == true){
                        numberOfLivingNeighbors += 1
                    }
                }
            }
        }
        this.setNumberOfLivingNeighbors(numberOfLivingNeighbors)
    }
    calculateNewStatus() {
        if (this.getNumberOfLivingNeighbors() < 2 || this.getNumberOfLivingNeighbors() > 3)
            return false
        if (this.getNumberOfLivingNeighbors() == 3)
            return true
        else
            return this.getStatus()


    }
}
