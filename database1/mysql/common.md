# 常用 SQL
### 对于 一对多的 列表查询
```
select *
 from a
  left join b on a.bId = b.id
  where ...
```

### 对于 多对多的 列表查询
方法1
```
id1,id2... = select id from a where ...

select * from a_b_relation as r
  join b on  b.id = r.bId
  where r.aId in (id1,id2...)
```

方法2
```
id1,id2... = select id from a where ...

select * from a
  left join a_b_relation as r on a.id = r.aId
  left join b on r.bId = b.id
  where a.id in (id1,id2...)
```

如果要带搜索条件，条件在关联表里：
```
select distinct * from a
  left join a_b_relation as r on a.id = r.aId
  left join b on r.bId = b.id
where b.name like 'xxx'
```

记得用 `distinct` 去重复。拿总条数：
```
select count(DISTINCT a.id) from a
  left join a_b_relation as r on a.id = r.aId
  left join b on r.bId = b.id
where b.name like 'xxx'
```

## 表中名称相同 但 id 不同的数据
```
select any_value(t1.id) as t1Id, t1.name as t1Name, any_value(t2.id) as t2Id, any_value(t2.name) as t2Name
from student as t1
            inner join student as t2 on t1.name = t2.name
where t1.name = t2.name
  and t1.id <> t2.id
group by t1.name
order by any_value(t1.id) desc;
```

说明：
1. MySQL5.7之后，sql_mode中ONLY_FULL_GROUP_BY模式默认设置为打开状态。
2. ONLY_FULL_GROUP_BY的语义就是确定select target list中的所有列的值都是明确语义，简单的说来，在此模式下，target list中的值要么是来自于聚合函数（sum、avg、max等）的结果，要么是来自于group by list中的表达式的值
3. MySQL提供了any_value()函数来抑制ONLY_FULL_GROUP_BY值被拒绝
