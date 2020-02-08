# egg mysql
[文档](https://github.com/eggjs/egg-mysql)

## 增
```
// insert
const result = yield app.mysql.insert('posts', { title: 'Hello World' });
const insertSuccess = result.affectedRows === 1;
```

## 查
```
// get 一条
const post = yield app.mysql.get('posts', { id: 12 });
// query
const results = yield app.mysql.select('posts',{
  where: { status: 'draft' },
  orders: [['created_at','desc'], ['id','desc']],
  limit: 10,
  offset: 0
});
```

## 改
```
// update by primary key ID, and refresh
const row = {
  id: 123,
  name: 'fengmk2',
  otherField: 'other field value',
  modifiedAt: app.mysql.literals.now, // `now()` on db server
};
const result = yield app.mysql.update('posts', row);
const updateSuccess = result.affectedRows === 1;
```

## 删
```
const result = yield app.mysql.delete('table-name', {
  name: 'fengmk2'
})
```

