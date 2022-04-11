const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Category extends Model {}

Category.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    category_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    products: [
      //example is in an object in insomia but post,js is outside of an object and only in an array
      //if its in the object {} it may need the datatypes information  
        
        'id',
        'product_name',
        'price',
        'stock',
        'category_id'
    
    ]
//or do this! but these sections are part of the product init and since we are connecting them?
//     id: {
//       type: DataTypes.INTEGER,
//       primaryKey: true,
//       autoIncrement: true
//     },
//     product_name: {
//       type: DataTypes.STRING,
//       allowNull: false
//     },
//     price: {
//       type: DataTypes.DECIMAL,
//       allowNull: false
//     },
//     stock: {
//     type: DataTypes.STRING,
//     allowNull: false
//     },
//     category_id: {
//     type: DataTypes.INTEGER,
//     allowNull: false
// }
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
