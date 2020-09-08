const { TextareaAutosize } = require("@material-ui/core");

module.exports = (sequelize, DataTypes) => 
{ return sequelize.define('musicdata', { 
    title: {type: DataTypes.STRING(20), allowNull: false,}, 
    genre: { type: DataTypes.STRING(100), allowNull: false, }, 
    rate: { type: DataTypes.INTEGER(10), allowNull: false, }, }); 
}
