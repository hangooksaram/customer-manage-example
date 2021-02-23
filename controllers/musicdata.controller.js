const db = require("../models");
const Musicdata = db.musicdatas;
const Op = db.Sequelize.Op;

// 새로운 music data 생성
exports.create = (req, res) => {
  if (!req.body.title) {
    res.status(400).send({
      message: "content can not be empty!",
    });
    return;
  }

  const musicdata = {
    title: req.body.title,
    timing: req.body.timing,
    rate: req.body.rate,
    comment: req.body.comment,
    link: req.body.link,
  };

  Musicdata.create(musicdata)
    .then((data) => {
      res.send(data);
    })
    .catch((error) => {
      res.status(500).send({
        message: "this is error" + error.message,
      });
    });
};

exports.findAll = (req, res) => {
  const title = req.query.title;
  var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;

  Musicdata.findAll({ where: condition })
    .then((data) => {
      res.send(data);
    })
    .catch((error) => {
      res.status(500).send({
        message: error.message,
      });
    });
};

exports.delete = (req, res) => {
  const id = req.params.id;
  Musicdata.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          msg: "성공적으로 삭제되었습니다.",
        });
      } else {
        res.send({
          msg: "${id}번 음악을 삭제할수 없습니다",
        });
      }
    })
    .catch((e) => {
      res.status(500).send({
        msg: e.message,
      });
    });
};

exports.update = (req, res) => {
  const id = req.params.id;

  Musicdata.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({ msg: "업데이트 성공" });
      } else {
        res.send({
          num: console.log(num),
        });
        console.log(num);
      }
    })
    .catch((e) => {
      res.status(500).send({
        msg: e + "업데이트 에러",
      });
    });
};

exports.findOne = (req, res) => {
  const id = req.params.id;

  Musicdata.findByPk(id)
    .then((data) => {
      res.send(data);
    })
    .catch((error) => {
      res.status(500).send({
        message: id + "iss on error fuck you",
      });
    });
};
