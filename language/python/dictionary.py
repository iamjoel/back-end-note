#!/usr/bin/python
#coding:utf-8
hehe = '123';
obj = {'name': 'joel', 'sex': 'male', hehe: 'just hehe'};# 键值在创建时就可以是变量，这个比js强大
obj['age'] = 18;
other = 'otherMsg';
obj[other] = 'he is so cool!'; # worked~ like javascript

for key,value in obj.items():
    print key + ' is ' + str(value);# str() 将 int转化为str