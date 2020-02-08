var config = require('./setting.js');
var sqlData = require('./sql/sql.js');
var fs = require('fs');
var moment = require('moment');
//express框架
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var jwt = require('jwt-simple');
//form提交的中间件
app.use(bodyParser.urlencoded({extended: false}));
//JSON提交的中间件
app.use(bodyParser.json());
//静态文件使用
app.use(express.static(__dirname + '/public'));
//设置监听端口号
app.set('port', Number(config.systemSetting.PORT_NUMBER));
//数据库
var mysql = require('mysql');

//日志输出配置
var log4js = require('log4js');
log4js.configure({
    appenders: [
        {
            "type": "file",
            "filename": "logs/access.log",
            "pattern": "-yyyy-MM-dd",
            "category": "file",
            "maxLogSize": 1024 * 1024 * 20,
            "backups": 50
        },
        {
            "type": "console"
        }
    ],
    replaceConsole: true
});
var logger = log4js.getLogger('file');
logger.setLevel('INFO');

//node集群
//var cluster = require('cluster');
var httpsServer = require('http').createServer(app);
//var numCPUs = require('os').cpus().length;


//if (cluster.isMaster) {
//    // Fork workers.
//    for (var i = 0; i < numCPUs; i++) {
//        cluster.fork();
//    }
//
//    cluster.on('listening',function(worker,address){
//        logger.info('listening: worker ' + worker.process.pid +', Address: '+address.address+":"+address.port);
//    });
//
//    cluster.on('exit', function(worker, code, signal) {
//        logger.info('worker ' + worker.process.pid + ' died');
//        cluster.fork();
//    });
//
//} else {
//监听服务器端口
    httpsServer.listen(app.get('port'), function () {
        //logger.info("Express server listening on port " + app.get('port') + "    worker.id:" + cluster.worker.id);
    });
//}

//解决跨域问题
app.all('*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By", ' 3.2.1');
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});

//设置token
app.set('jwtTokenSecret', config.systemSetting.token);
//***********************************************
//*              api区域                        *
//***********************************************
app.post('/getToken',function(req,res){
    logger.info(req.body.userName+" run method getToken.");
    mysqlAccess('select count(1) as result from userinfo where userName = "'+ req.body.userName+'" and password="'+req.body.passWord+'";', function (err, rows, fields) {
        var expires = moment().add(config.systemSetting.tokenExp,'Hour').valueOf();
        if(rows[0].result>0){
            var token = jwt.encode({
                iss: req.body.userName,
                exp: expires
            }, app.get('jwtTokenSecret'));
            res.send({
                token : token,
                expires: expires,
                user: req.body.userName
            });
        }else{
            res.send({
                token : null,
                expires: expires,
                user: req.body.userName
            });
        }
    })
});

app.post('/login', function (req, res) {
    var sendData = {
        data:null,
        tokenCheck:null,
        error:null
    };
    if(checkToken(req.body.token)){
        mysqlAccess("select * from userinfo", function (err, rows) {
            sendData.tokenCheck = true;
            sendData.data = rows;
            sendData.error = err;
            res.send(sendData);
        });
    }else{
        sendData.tokenCheck = false;
        sendData.error = config.errorInfo.tokenErr;
        res.send(sendData);
    }
});


//***********************************************
//*            function区域                     *
//***********************************************
function mysqlAccess(sql, callback) {
    //建立连接
    var connection = new mysql.createConnection({
        host: config.systemSetting.DB_INFO.HOST,
        user: config.systemSetting.DB_INFO.USER,
        password: config.systemSetting.DB_INFO.PASSWORD,
        database: config.systemSetting.DB_INFO.DATABASE
    });
    connection.connect();
    connection.query(sql, function (err, rows, fields) {
        if (err) throw err;
        callback(err, rows);
    });
    //关闭连接
    connection.end();
}

function checkToken(token){
    if(token){
        try {
            var decoded = jwt.decode(token, app.get('jwtTokenSecret'));
            // handle token here
            if(decoded.iss != null&& new Date(decoded.exp) > new Date()) {
                return true;
            }else{
                return false;
            }
        } catch (err) {
            return false;
        }
    }else{
        return false;
    }
}

//function sqlmaker(sql, replace, value) {
//    var completeSql = sql;
//    if (replace.length == value.length) {
//        for (var i = 0; i < replace.length; i++) {
//            completeSql = completeSql.replace('@' + replace[i], '"' + value[i] + '"');
//        }
//    } else {
//        logger.info("sql err:" + completeSql);
//    }
//    logger.info(completeSql);
//    return completeSql;
//}
