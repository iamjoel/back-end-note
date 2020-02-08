#!/usr/bin/python
#coding:utf-8
print dir(list);
arr = [];
arr.append(123);# 追加
arr.append(345);
print arr; #[123, 345]
print len(arr); #2
arr.pop(); # append 的反操作
print arr; #123
arr.pop();

for i in range(10):
    arr.append(i);

# 遍历时需要读取下标 enumerate
for index, value in enumerate(['a', 'b', 'c']):
    print 'index: %s, value: %s'% (index, value);

# 同时遍历两个或多个数组
for first, second in zip(['f_a', 'f_b'], ['s_a', 's_b']):
    print 'first: %s, second: %s'%(first, second);

# 删除列表中下标为参数的值
arr.pop(3);
arr.pop(0);
print arr;
print arr.index(1); # 0
# print arr.index(19); # 报错。。。

print 10 * '*', 'filter map reduce', 10 * '*';
arr2 = [i for i in range(6)];
arrSum = reduce(lambda x, y: x + y, arr2, 0);
print arrSum;
arr2 = filter(lambda x: x % 2 == 1, arr2);
print arr2;
arr2 = map(lambda x: x * x, arr2);
print arr2;

