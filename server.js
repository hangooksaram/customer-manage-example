const express    = require('express');
const dbconfig   = require('./config/database.js')();
const connection = dbconfig.init();

const app = express();

// configuration 
app.set('port', process.env.PORT || 5000);

// routing
app.get('/musicdata', (req, res) => { 
  connection.query('SELECT * from musicdata', (error, rows) => {
    if (error) throw error;
    res.header("Access-Control-Allow-Origin", "*")
    res.send(rows);
  });
});


app.listen(app.get('port'), () => {
  console.log('포트 넘버 : ' + app.get('port') + "에서 실행 중");
});