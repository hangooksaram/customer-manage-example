// Musicdata 모델 생성
module.exports = (sequelize, Sequelize) => {
    const Musicdata = sequelize.define("musicdata", {
        title : {
            type : Sequelize.STRING
        },
        timing : {
            type : Sequelize.STRING
        },
        rate : {
            type : Sequelize.INTEGER
        },
        comment : {
            type : Sequelize.STRING
        }
       
    }, { timestamps: false});


        return Musicdata
}