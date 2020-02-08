# Mongo
[官网](https://mongodb.com/)

## 安装
```
brew install mongodb
sudo mkdir -p /data/db
chmod 777 /data/db/
```

## 运行
`mongod`

## Mongo 中表多对多的设计
在一张表中放个数组，里面放另一张表id。如：
```
Team 里面存一个 teammates: [] 存 User 的 _id 或其它索引值，这样就知道一个 Team 有哪些 User 
User 可以反查 Team 的 find({teammates: _id})，这样就知道一个 User 在哪些 Team
```