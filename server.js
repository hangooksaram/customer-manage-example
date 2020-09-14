const express    = require('express');
const dbconfig   = require('./config/database.js')();
const bodyparser = require('body-parser')
const cors = require('cors');
const connection = dbconfig.init();

const app = express();

var corsOptions = {
  origin : "http://localhost:3000"
};

app.use(cors(corsOptions))

app.use(bodyparser.json());

app.use(bodyparser.urlencoded({extended : true}));

const db = require('./models');

db.sequelize.sync();
// configuration 
app.set('port', process.env.PORT || 5000);

// routing


require('./routes/musicdata.routes')(app);

app.listen(app.get('port'), () => {
  console.log('포트 넘버 : ' + app.get('port') + "에서 실행 중");
});