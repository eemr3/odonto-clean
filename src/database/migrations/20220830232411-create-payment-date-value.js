'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('payment_date_values', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      installment_amount: Sequelize.INTEGER,
      value_of_plots: Sequelize.DECIMAL,
      // total_payment: Sequelize.DECIMAL,
      installment_date: Sequelize.DATEONLY,
      payment_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'payments',
          key: 'id',
        },
      },
    });
  },
  async down(queryInterface, _Sequelize) {
    await queryInterface.dropTable('payment_date_values');
  },
};
