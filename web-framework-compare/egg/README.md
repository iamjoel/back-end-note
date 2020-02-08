# Egg.js
> 企业级的 Node.js Web 基础框架。

[官网](https://eggjs.org/zh-cn/)

## 特点
* 业界领先的『微内核 + 插件机制』，专为团队架构师量身打造的『框架定制』能力。
* 内建的安全机制与多进程管理模型。
* 高可用，高质量，严格遵循 Semver 规则，测试覆盖率 100%（travis/appveyor)。
* 同时支持 koa 1.x 和 2.x 生态，支持 ES 2017 Async Await。
* 沉淀自阿里各行各业不同领域最佳实践的插件，涵盖了常见的业务开发场景，稳定支撑了 15 和 16 年天猫双11大促，顶级流量压力。
* 渐进式，极具伸缩性，既适合个人小项目快速开发，也适合企业级的团队开发协作。

## 里程碑
* 2013 年蚂蚁的 chair 框架，可以视为 Egg.js 的前身。
* 2017 年 03 月 21 日，Egg.js 正式发布 1.0.0 。

## 开发
可以用脚手架 `egg-init` 来创建项目。

```
egg-init --type simple
```

## 中间件
https://eggjs.org/zh-cn/basics/middleware.html

全局使用的中间件要在 config.default.js 中配置。
```
middleware: [ 'gzip' ],
// 配置 gzip 中间件的配置
gzip: {
  match 字符串或函数
  ignore
  threshold: 1024, // 小于 1k 的响应体不压缩
},
```



在某个接口中用
```
const gzip = app.middlewares.gzip({ threshold: 1024 });
app.get('/needgzip', gzip, app.controller.handler);
```


任何 Koa 的中间件都可以直接被框架使用。

## 配置
config.环境.js

config.default.js 为默认的配置文件，所有环境都会加载这个配置文件，一般也会作为开发环境的默认配置文件。

当指定 env 时会同时加载对应的配置文件，并覆盖默认配置文件的同名配置。如 prod 环境会加载 config.prod.js 和 config.default.js 文件，config.prod.js 会覆盖 config.default.js 的同名配置。

## 插件
* [egg cors](https://github.com/eggjs/egg-cors) 跨域处理。
* [egg validate](https://github.com/eggjs/egg-validate) 数据格式验证。

## 资源
* [Egg.js 1.0.0 正式发布 - 企业级 Node.js 框架](https://zhuanlan.zhihu.com/p/25860846)
* [直播 egg 文档产生的过程](https://cnodejs.org/topic/5870e9da04dcf9a706a745f0)