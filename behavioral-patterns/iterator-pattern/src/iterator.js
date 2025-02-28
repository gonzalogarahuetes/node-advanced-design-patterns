class Iterator {
    constructor(list = []) {
        this.list = list;
        this.currentPosition = 0;
    }

    start() {
        return this.list[this.currentPosition];
    }

    hasNext() {
        return this.currentPosition + 2 <= this.list.length;
    }

    next() {
        if (!this.hasNext()) {
            this.currentPosition = 0;
            return this.list[this.currentPosition];
        }
        this.currentPosition += 1;
        return this.list[this.currentPosition];
    }

    prev() {
        if (this.currentPosition === 0) {
            this.currentPosition = this.list.length - 1;
            return this.list[this.currentPosition];
        }
        this.currentPosition -= 1;
        return this.list[this.currentPosition];
    }

    first() {
        this.currentPosition = 0;
        return this.list[this.currentPosition];
    }

    last() {
        this.currentPosition = this.list.length - 1;
        return this.list[this.currentPosition];
    }
}

module.exports = Iterator;