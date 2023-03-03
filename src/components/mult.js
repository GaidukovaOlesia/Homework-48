import { Calculator } from "./calculator.js";

class Mult extends Calculator{
    constructor(x, y) {
        super(x, y);
    }
    mult() {
        return this.x * this.y
    }
}

export { Mult };