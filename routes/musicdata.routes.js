//라우터 설정
module.exports = (app) => {
  const musicdatas = require("../controllers/musicdata.controller.js");

  var router = require("express").Router();

  router.post("/musicdatas", musicdatas.create);

  router.get("/musicdatas", musicdatas.findAll);

  router.get("/musicdatas/:id", musicdatas.findOne);

  router.delete("/musicdatas/:id", musicdatas.delete);

  router.put("/musicdatas/:id", musicdatas.update);

  app.use("/", router);
};
