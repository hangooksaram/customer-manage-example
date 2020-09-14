const musicdataRoutes = require("../routes/musicdata.routes");

module.exports = (sequelize, Sequelize) => {
    const Musicdata = sequelize.define("musicdata", {
        title : {
            type : Sequelize.STRING
        },
        genre : {
            type : Sequelize.STRING
        },
        rate : {
            type : NUMBER
        }
    });


        return Musicdata
}