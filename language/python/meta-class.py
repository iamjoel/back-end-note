#!/usr/bin/python
#coding:utf-8

# type(name, bases, dict)
#  name：class 的名称
#  bases：class 的父类，是个 tuple 类型
#  dict：class 的 namespace，表现为它的属性

def greet(self, word='hello'):
	print word + ',i am ' + self.name;

def personInit(self, name):
	self.name = name;

Person = type('Person', (), {'type': 'anim', 'greet': greet, '__init__':personInit});

p = Person('joel');
p.greet('hi');

# __metaclass__属性
# 创建一个类的时候，可以给它添加 __metaclass__属性
# class Foo(object): 
#  __metaclass__ = something…
#  […]
# 这样做，Python就会使用指定的元类创建Foo类。

# 自定义元类，默认是 type


# 关于python的元类 https://medium.com/leeon-code/python-ca836e7960e2