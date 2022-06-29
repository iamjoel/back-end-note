# 常见命令
## 命令行登录 & 退出

```bash
mysql -u root -p # 登录
quit ## 退出
```

## 数据库

### 查看所有数据库

```bash
show databases;
```

### 选择数据库

```bash
use 数据库名;
```

### 创建数据库

```bash
create database 数据库名;
```

## 表

### 查看当前库下所有表

```bash
show tables;
```

### 查看表结构

```bash
desc 表名;
```

### 一对多表查询

```bash
select *
 from a
  left join b on a.bId = b.id
```

### 多对多表查询

方法1:

```bash
id1,id2... = select id from a where ...

select * from a_b_relation as r
  join b on  b.id = r.bId
  where r.aId in (id1,id2...)
```

方法2:

```bash
select * from a
  left join a_b_relation as r on a.id = r.aId
  left join b on r.bId = b.id
  where a.id in (id1,id2...)
```
