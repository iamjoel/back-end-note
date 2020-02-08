#!/usr/bin/python
#coding:utf-8

import sys

print 'The command line arguments are:'
for i in sys.argv:
    print i

print '\n\nThe PYTHONPATH is', sys.path, '\n'

# from..import语句

# 如果你想要直接输入argv变量到你的程序中（避免在每次使用它时打sys.），那么你可以使用from sys import argv语句。如果你想要输入所有sys模块使用的名字，那么你可以使用from sys import *语句。这对于所有模块都适用。
# 注意：一般说来，应该避免使用from..import而使用import语句，因为这样可以使你的程序更加易读，也可以避免名称的冲突。


# 每个模块都有一个名称，在模块中可以通过语句来找出模块的名称。
# 这在一个场合特别有用——就如前面所提到的，当一个模块被第一次输入的时候，这个模块的主块将被运行。假如我们只想在程序本身被使用的时候运行主块，而在它被别的模块输入的时候不运行主块，我们该怎么做呢？这可以通过模块的__name__属性完成。
if __name__ == '__main__':
    print 'This program is being run by itself'
else:
    print 'I am being imported from another module'

# http://sebug.net/paper/books/python_hb/node8.html#SECTION008110000000000000000
# 在一个模块被导入时，PVM会在后台从一系列路径中搜索该模块，其搜索过程如下：
# 1、在当前目录下搜索该模块；
# 2、在环境变量PYTHONPATH中指定的路径列表中依次搜索；
# 3、在python安装路径中搜索
# 事实上，PVM通过变量sys.path中包含的路径来搜索，这个变量里面包含的路径列表就是上面提到的这些路径信息
