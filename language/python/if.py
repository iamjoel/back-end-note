#!/usr/bin/python
#coding:utf-8
from random import randint
num = randint(1, 10);
# print num;
answer = int(raw_input('输入一个数字: '));
times = 0;
while True:
    times += 1;
    if num == answer:
        print '猜对啦';
        break;
    elif answer > num:
        print '猜大啦～'
    else:
        print '猜小啦';

    answer = int(raw_input('输入一个数字: '));

# 单行 if
luck = ('好' if times < 4 else '不好');
print '你运气', luck;