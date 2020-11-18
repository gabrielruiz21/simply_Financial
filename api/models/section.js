'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Section extends Model {}
  Section.init({
    content:{
      type: DataTypes.STRING,
      validate: {        
        notEmpty: true,
      }
    },
  }, 
  {
    sequelize,
    modelName: 'section'
  });
  
  Section.associate = (models) => {
    models.Section.belongsTo(models.Post);
  };

  return Section;
};