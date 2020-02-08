# 优化
## 建索引
主键自带索引。 对数据量的表的外键做索引。 索引加快的查询速度，但新增更新的速度会变慢。

建太多的索引(20+)，也会有问题。

建索引 写法：
```
CREATE INDEX 索引名 ON 
表名 (supplierId);
```

## 冗杂

## 分表分库

## 其他小技巧
### 高效获得记录总数
查询内容和总数，查询一次。
```
select sql_calc_found_rows goods where name = 'a' limit 10;
select found_rows();
```

`sql_calc_found_rows` 告诉 sql 将处理的行数记录下来， `found_rows()` 则 获取到这个记录。