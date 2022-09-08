'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('treatment_date_values', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      installment_amount: Sequelize.INTEGER,
      value_of_plots: Sequelize.DECIMAL,
      installment_date: Sequelize.DATEONLY,
      treatment_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'treatments',
          key: 'id',
        },
      },
    });
  },
  async down(queryInterface, _Sequelize) {
    await queryInterface.dropTable('treatment_date_values');
  },
};
