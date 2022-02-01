var name = "小明"
var age = 18
var flag = true

function sum(num1, num2) {
  return num1 + num2
}

if(flag) {
  console.log(sum(10, 20))
}

// 导出方式一
export {
  flag, sum
}

// 导出方式二
export var num1 = 1000
export var height = 1.88

// 导出方式三：函数/类
export function mul(num1, num2) {
  return num1* num2
}

export class Person {
  run() {
    console.log("在奔跑")
  }
}

// 导出方式四：export default
// 只能导出一个
const address = "上海市"
export default address