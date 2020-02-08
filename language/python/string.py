#!/usr/bin/python
#coding:utf-8
# 注意！ 在python中单引号和双引号字符串是完全相同的
print 'aaa'
print "bbb"
# 在一个字符串中，行末的单独一个反斜杠表示字符串在下一行继续，而不是开始一个新的行,即输出时，仍然输出时并不换行
print "This is the first sentence.\
This is the second sentence."

print 20 * '*'; # 输出20个*


print '''This is a multi-line string. This is the first line.
This is the second line.
"What's your name?," I asked.
He said "Bond, James Bond."
'''


# Unicode是书写国际文本的标准方法。
# 如果你想要用你的母语如北印度语或阿拉伯语写文本，那么你需要有一个支持Unicode的编辑器。
# 类似地，Python允许你处理Unicode文本——你只需要在字符串前加上前缀u或U。例如，u"This is a Unicode string."。
# 记住，在你处理文本文件的时候使用Unicode字符串，特别是当你知道这个文件含有用非英语的语言写的文本。
print u'中文的东东'

# \ 与其他语言一样的转义
print 'aaa\nbbb\bccc'

# 用空格来连接字符串
s = 'abc' 'def' 'hij';
print s;
