'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Quiz extends Model {}
  Quiz.init({
    topic:{
      type: DataTypes.STRING,
      validate: {        
        notEmpty: true,
      }
    },
    image: {
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

  }, {
    sequelize,
    modelName: 'quiz'
  });
  

  Quiz.associate = (models) => {
    models.Quiz.hasMany(models.QuizSection);
    models.Quiz.belongsTo(models.Post);
  };

  return Quiz;
};