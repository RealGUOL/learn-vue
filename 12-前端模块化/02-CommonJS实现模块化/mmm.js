if (moduleA.flag) {
  console.log("小明是天才，哈哈哈哈哈")

  console.log(moduleA.sum(1, 2))
}


const { sum } = require("./aaa.js")
// 导入aaa模块
var aaa = require("./aaa.js")
var flag = aaa.flag
var sum = aaa.sum

sum(1, 2)