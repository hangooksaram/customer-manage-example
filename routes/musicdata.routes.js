module.exports = app => {
    const musicdatas = require('../controllers/musicdata.controller.js');

    var router = require('express').Router();

    router.post('/', musicdatas.create);

    router.get('/', musicdatas.findAll)

    app.use('/musicdatas', router)
}