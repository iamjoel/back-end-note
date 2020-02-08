# 学习 Go语言笔记
> Go 编程语言是一个开源项目，它使程序员更具生产力。
> 
> Go 语言具有很强的表达能力，它简洁、清晰而高效。得益于其并发机制， 用它编写的程序能够非常有效地利用多核与联网的计算机，其新颖的类型系统则使程序结构变得灵活而模块化。 Go 代码编译成机器码不仅非常迅速，还具有方便的垃圾收集机制和强大的运行时反射机制。 它是一个快速的、静态类型的编译型语言，感觉却像动态类型的解释型语言。

[官网](golang.org) 已被墙。。。 [GitHub](https://github.com/golang/go)。

## 安装
Mac的安装
1 下载安装包,并安装。不翻墙安装包点[这里](https://www.golangtc.com/download)。

2 加入环境变量vim ~/.bashrc  
添加下面的代码：  
```
export GOPATH=$HOME/gopath
export PATH=$PATH:$HOME/go/bin:$GOPATH/bin
```

3 在新的命令行输入 `go`。  
会输出下面的内容，则表示安装成功  
```
Go is a tool for managing Go source code.

...
```

## 运行
`go run 文件`

## 语法
* 定义变量: var 
* 定义常量: const
* 数据类型
  * 布尔值: bool
  * 数字
    * int
    * float
    * uint8,uint16, float32,complex64 ...
  * char
  * string
    * ""
    * \`\`: 支持换行。
  * 指针
  * 复合类型
    * 数组。长度不可变。
    * 切片。长度可变。
    * 结构体
    * Map。和 js 的 Object 类似。
* 类型转换
* 操作符
* 控制流程
  * 条件
  * 循环
    * for
    * range
* 注释。和 js 的注释一模一样。
* 函数
  * 声名
  * 调用
  * 返回多个值。
* 接口
* 包
* 错误处理
* 并发

## 工具
* GVM： Go多版本管理工具。

## 资源
* [文档](http://docscn.studygolang.com/doc/)
* [build web application with golang](https://github.com/astaxie/build-web-application-with-golang/blob/master/zh/preface.md)
* [Go 菜鸟教程](http://www.runoob.com/go)
* [Golang 中国](https://www.golangtc.com/)
* [GoCN forum](https://gocn.io/)

