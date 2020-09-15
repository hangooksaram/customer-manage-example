// Musicdata 모델 생성
module.exports = (sequelize, Sequelize) => {
    const Musicdata = sequelize.define("musicdata", {
        title : {
            type : Sequelize.STRING
        },
        genre : {
            type : Sequelize.STRING
        },
        rate : {
            type : Sequelize.INTEGER
        },
       
    }, { timestamps: false});


        return Musicdata
}