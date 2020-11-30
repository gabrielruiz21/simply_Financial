'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class QuizSection extends Model {}
  QuizSection.init({
    questions:{
        type: DataTypes.STRING,
        validate: {        
            notEmpty: true,
    }
    },
    choices:{
        type: DataTypes.STRING,
        validate: {        
            notEmpty: true,
        }
    },
    answer:{
        type: DataTypes.STRING,
        validate: {        
            notEmpty: true,
        }
    },
  }, 
  {
    sequelize,
    modelName: 'quizSection'
  });
  
  QuizSection.associate = (models) => {
    models.QuizSection.belongsTo(models.Quiz);
  };

  return QuizSection;
};