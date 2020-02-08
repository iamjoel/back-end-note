#!/usr/bin/python
#coding:utf-8

# 如果一个 Python 函数，类方法，或属性的名字
# 以两个下划线开始 (但不是结束)，它是私有的；
# 其它所有的都是公有的。
# Python 没有类方法保护 的概念 (只能用于它们自已的类和子类中)。
# 类方法或者是私有 (只能在它们自已的类中使用) 或者是公有 (任何地方都可使用)。

# 虽然ptyhon 不支持方法的重载，但，其实没必要 见 http://www.zhihu.com/question/20053359
# 以及python作者搞的重载 http://www.artima.com/weblogs/viewpost.jsp?thread=101605
class Animal:
    """Animal的文档的描述字符串"""
    typeName = 'animal'; # 静态方法
    def __init__(self, name = 'unknow', say='呜呜呜'):#构造函数
        self.name = name; # self相当于this，实例对象只能在self上定义
        self.say = say;
    def describe(self): # 实例方法
        return self.say + '~ My name is ' + self.name + '. I\'m a ' + Animal.typeName;
    def __secret(self): # 私有变量，不会被继承
        print 'haha you find me!';
    @staticmethod # 2.4 后的版本需要加这个
    def haha(): # 类方法 第一个参数不能加 self。因为其不能访问self
        print Animal.typeName + ' haha';

an = Animal('Nacy'); #创建实例不能带 new，否则报错！
an.haha(); # 也可以调用
Animal.haha();
print an.describe();
an._Animal__secret();# 访问私有变量
print Animal.typeName, an.name, an.typeName;# animal Nacy animal
an.typeName = 'change';
print Animal.typeName, an.typeName;# animal, change

# python 支持多继承
class Cat(Animal): # 继承，python不会主动的调父类的构造函数
    """docstring for Cat"""
    def __init__(self, name):
        Animal.__init__(self, name, '喵喵喵喵');

cat = Cat('Xiao hua');
print cat.describe();


