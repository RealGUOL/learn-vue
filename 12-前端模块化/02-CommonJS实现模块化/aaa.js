var name = "小明"
var age = 22

function sum(num1, num2) {
  return num1 + num2
}

var flag = true

if(flag) {
  console.log(sum(10, 20))
}

// 需要由底层支撑来解析(webpack, node)
module.exports = {
  flag: flag,
  sum: sum
}