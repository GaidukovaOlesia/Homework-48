import Sum from "./components/sum.js";
import { Sub } from "./components/sub.js";
import { Mult } from "./components/mult.js";
import { Div } from "./components/div.js";

const add = new Sum(10, 20);
console.log(add.sum());

const sub = new Sub(35, 10);
console.log(sub.sub());

const mult = new Mult(3, 4);
console.log(mult.mult());

const div = new Div(50, 5);
console.log(div.div());