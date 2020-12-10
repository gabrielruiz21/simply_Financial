'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Video extends Model {}
  Video.init({
    topic:{
      type: DataTypes.STRING,
      validate: {        
        notEmpty: true,
      }
    },
    image:{
      type: DataTypes.STRING,
      validate: {        
        notEmpty: true,
      }
    },
    description:{
      type: DataTypes.STRING,
      validate: {        
        notEmpty: true,
      }
    },
    url:{
      type: DataTypes.STRING,
      validate: {        
        notEmpty: true,
      }
    },
  }, 
  {
    sequelize,
    modelName: 'video'
  });
  
  Video.associate = (models) => {
    models.Video.belongsTo(models.Post);
  };

  return Video;
};