var express = require('express');
var mysql = require('mysql');
var router = express.Router();

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'android',
    database: 'articles',

});
var conn = connection.connect();
console.log(conn);

/* POST users listing. */
router.post('/', function (req, res, next) {
    var data = {
        DATE: req.body.date,
        TIME: req.body.time,
        IMAGE: req.body.image

    }
    connection.query('insert into ANDROIDAPP set ?', data, function (err, result) {
        if (err) {
            console.log(err);
            var sendResult = {
                success: false,
                data: err
            };
            res.setHeader('Content-Type', 'application/json');
            res.send(JSON.stringify(sendResult));
        }
        else {
            console.log(result);
            var sendResult = {
                success: true,
                data: "Uploaded"
            };
            res.setHeader('Content-Type', 'application/json');
            res.send(JSON.stringify(sendResult));

        }


    });
});

module.exports = router;
