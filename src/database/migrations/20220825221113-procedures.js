'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('procedures', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      title: Sequelize.STRING,
      price: Sequelize.DECIMAL,
    });
  },

  async down(queryInterface, _Sequelize) {
    await queryInterface.dropTable('procedures');
  },
};
