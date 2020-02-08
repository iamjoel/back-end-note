package main

func main() {
  var a int = 3 // 方式1
  var b = 4 // 方式2 根据值自行判定变量类型
  c := 5 // 方式3 省略var, 注意 :=左侧的变量不应该是已经声明过的，否则会导致编译错误。
  // var d string = "xxx" 变量声名了不使用，也会报错 XD
  var d, e = 7, 8 // 解构赋值
  println(a, b, c, d, e)
}