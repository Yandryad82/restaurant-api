'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('tables', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      capacity: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      available: {
        type: Sequelize.BOOLEAN,
        allowNull: false
      },
      
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('tables');
  }
};