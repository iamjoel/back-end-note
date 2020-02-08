#!/usr/bin/python
#coding:utf-8

# 元组 其内容是不可变的

u = 1,2,3; # 定义
print u;
print len(u);
b = 1, 3, (3, 5); # 可嵌套
print b;

# 序列拆封
a = 3;
b = 4;
a, b = (b,a);
print a, b;

def triple(x, y, z):
    return (3 * x, 3 * y, 3 * z);

a, b, c = triple(1, 2, 3);
print a, b, c; #3, 6, 9

a, b, c = 1, 2, 3;
print a, b, c; #1, 2, 3