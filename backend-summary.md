# 后端概览
## 术语
### 无状态
HTTP 是无状态的。 用户登录后，服务器收到用户 HTTP 请求后，希望知道用户的信息。现在一般的做法是在 HTTP 的 header 中放 token。 服务器通过 token 拿用户的信息。

### 中间件
在调用一些接口前或后，做一些同样的事，可以用中间件。 比如，记日志，控制用户访问的权限。

可以用多个中间件。参考 [洋葱圈模型](https://eggjs.org/zh-cn/intro/egg-and-koa.html#midlleware)

### 持久化
将数据写入文件或数据库的过程。

## 数据库
关系型数据库：MySQL 。  

需要安装:
* [MySQL](https://dev.mysql.com/downloads/)
* [DataGrip](https://www.jetbrains.com/datagrip/) 数据库管理工具。

相关知识
* 数据库设计。
* SQL 语句。
  * 查询。 单表查询，多表查询。
  * 新增。
  * 编辑。
  * 删除。
* 其他概念： 约束，事务，索引。

## 编程语言
Node.js

框架
* [egg](https://eggjs.org/zh-cn/)。 了解如下概念：
  * 路由(Router)
  * 控制器(Controller)
  * 服务(Service)
  * 日志
  * 定时任务



