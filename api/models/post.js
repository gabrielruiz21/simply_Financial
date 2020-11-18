'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Post extends Model {}
  Post.init({
    name:{
      type: DataTypes.STRING,
      validate: {        
        notEmpty: true,
      }
    },
    description: {
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

  }, {
    sequelize,
    modelName: 'post'
  });
  

  Post.associate = (models) => {
    models.Post.hasMany(models.Section)
  };

  return Post;
};