// commonjs
const {add, mul} = require("./js/mathUtils.js")

console.log(add(20, 30));
console.log(mul(20, 30));

// es6
import { name, age, height } from "./js/info.js";

console.log(name)
console.log(age)
console.log(height)


// 依赖css文件
require("./css/normal.css")