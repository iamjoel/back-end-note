#!/usr/bin/python
#coding:utf-8
def sayHi():
    print 'hi';

sayHi();

# 只有在形参表末尾的那些参数可以有默认参数值，
# 即你不能在声明函数形参的时候，
# 先声明有默认值的形参而后声明没有默认值的形参。
def greet(name, word = 'hi'): # word is optional
    print word + ',' + name;

greet('joel', 'hello');
greet('jack');

print 10 * '*', '返回值', 10 * '*';
def returnNone():
    pass;

print returnNone(); # None

def returnNone2():
    1 + 3;

print returnNone2(); # None

def returnNone3():
    return None;

print returnNone3(); # None

def add(a, b):
    return a + b;

print add(3,5); # 8


print 10 * '*', '变量的作用域', 10 * '*';
x = 3;

def func():
    x = 5;

func(); # not change global x
print 'x is still', x; #3

def func2():
    global x;# tell it's the global x
    x = 10;

func2(); # change global x
print 'x change to', x; #10

print 20 * '*';
x = 0;
def func3():
    x = 1;
    y = 'y~~~';
    def func4():
        print x; # 0, global is put before this line
        global x; # always the outest.
        x = 2;
        print y;# can read from outerside
    print x; #1
    func4();
    print x; #1

func3();
print 'x change to', x; # 2

# 如果你的某个函数有许多参数，
# 而你只想指定其中的一部分，
# 那么你可以通过命名来为这些参数赋值——这被称作 关键参数
# ——我们使用名字（关键字）而不是位置（我们前面所一直使用的方法）来给函数指定实参。
print 10 * '*', '关键参数', 10 * '*';
def keyParamFunc(a, b=5, c=10):
    print 'a is', a, 'and b is', b, 'and c is', c

keyParamFunc(3, 7)
keyParamFunc(25, c=24)
keyParamFunc(c=50, a=100)


print 10 * '*', '函数文档', 10 * '*';
def printMax(x, y):
    '''函数描述： Prints the maximum of two numbers.

    The two values must be integers.'''
    x = int(x) # convert to integers, if possible
    y = int(y)

    if x > y:
        print x, 'is maximum'
    else:
        print y, 'is maximum'

printMax(3, 5)
print printMax.__doc__

# lamda 匿名函数,有点类似闭包
print 10 * '*', 'lambda', 10 * '*';
print (lambda a,b: a+b)(1,3); #4
print map(lambda x: x * x, [1,2,3]); # [1, 4, 9]

a,b,c = (lambda: (1,3,5))();
print a,b,c;
