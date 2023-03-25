'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.order.belongsTo(models.table, { foreignKey: 'tableId' });
      models.order.hasMany(models.order_details, { foreignKey: 'orderId' });
      models.order.belongsTo(models.users, { foreignKey: 'userId' });
    }
  }
  order.init({
    tableId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    total: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'order',
  });
  return order;
};