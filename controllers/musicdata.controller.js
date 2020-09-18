const db = require('../models');
const Musicdata = db.musicdatas;
const Op = db.Sequelize.Op;

// 새로운 music data 생성
exports.create = (req, res) => {
    if (!req.body.title) {
        res.status(400).send({
            message: "content can not be empty!"
        });
        return;
    }

    const musicdata = {
        title: req.body.title,
        genre: req.body.genre,
        rate: req.body.rate
    }

    Musicdata.create(musicdata)
        .then(data => {
            res.send(data);
        })
        .catch(error => {
            res.status(500).send({
                message: "this is error" + error.message
            })
        })
}

exports.findAll = (req, res) => {
    const title = req.query.title;
    var condition = title ? { title : { [Op.like] : `%${title}%`}} : null;

    Musicdata.findAll({where : condition})
        .then(data => {
            res.send(data);
        })
        .catch(error => {
            res.status(500).send({
                message:
                error.message
            })
        })
};

/*exports.findOne = (req, res) => {
    const id = req.params.id;

    Musicdata.findByPk(id)
        .then(data => {
            res.send(data);
        })
        .catch(error => {
            res.status(500).send({
                message : id + "iss on error fuck you"
            })
        })
}*/