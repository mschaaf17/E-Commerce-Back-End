const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Category extends Model {}

Category.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    category_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    //how do I set up an array of objects?
    products: [
    {
      type: DataTypes.INTEGER,
      references: {
        model: 'product',
        key: 'id'
      }
    },
    {
      type: DataTypes.STRING,
      references: {
        model: 'product',
        key: 'product_name'
      }
    },
    {
      type: DataTypes.INTEGER,
      references: {
        model: 'product',
        key: 'price'
      }
    },
    {
      type: DataTypes.INTEGER,
      refereces: {
        model: 'product',
        key: 'stock'
      }
    },
    {
      type: DataTypes.INTEGER,
      references: {
        model: 'category',
        key: 'id'
      }
    }
  ],
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
  }
);

module.exports = Category;
