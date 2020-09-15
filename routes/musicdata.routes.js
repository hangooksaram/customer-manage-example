//라우터 설정
module.exports = app => {
    const musicdatas = require('../controllers/musicdata.controller.js');

    var router = require('express').Router();

    router.post('/musicdatas', musicdatas.create);

    router.get('/musicdatas', musicdatas.findAll)

    app.use('/', router)
}