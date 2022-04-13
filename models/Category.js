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
    }
    //how do I set up an array of objects for products??
    // products: {
    // product_id: {
    //   type: DataTypes.INTEGER,
    //   references: {
    //     model: 'product',
    //     key: 'id'
    //   }
    // },
    // product_name: {
    //   type: DataTypes.STRING,
    //   references: {
    //     model: 'product',
    //     key: 'product_name'
    //   }
   // },
  //   product_price: {
  //     type: DataTypes.INTEGER,
  //     references: {
  //       model: 'product',
  //       key: 'price'
  //     }
  //   },
  //  product_stock: {
  //     type: DataTypes.INTEGER,
  //     refereces: {
  //       model: 'product',
  //       key: 'stock'
  //     }
  //   },
  //   category_id: {
  //     type: DataTypes.INTEGER,
  //     references: {
  //       model: 'category',
  //       key: 'id'
  //     }
  //   }
    },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
  }
);

module.exports = Category;
