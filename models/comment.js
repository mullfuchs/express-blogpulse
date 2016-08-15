'use strict';
module.exports = function(sequelize, DataTypes) {
  var comment = sequelize.define('comment', {
    author: DataTypes.STRING,
    content: DataTypes.TEXT,
    postId: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        models.comment.belongsTo(models.post);
      }
    }
  });
  return comment;
};