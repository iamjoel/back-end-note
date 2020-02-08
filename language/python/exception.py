#!/usr/bin/python
#coding:utf-8
import sys;
try:
    1/0;
    # raise BaseException('...'); 抛出异常
except :# 所有异常
    print "Unexpected error:", sys.exc_info()[0]
else:
    print 'no except';
finally:
    print 'always excute';
