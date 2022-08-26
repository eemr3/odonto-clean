'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('payments', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      payment_method: Sequelize.STRING,
      installment_amount: Sequelize.INTEGER,
      value_of_plots: Sequelize.DECIMAL,
      total_payment: Sequelize.DECIMAL,
      start_date: {
        type: Sequelize.DATEONLY,
        default: Sequelize.NOW,
      },
      patient_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'patients',
          key: 'id',
        },
      },
    });
  },

  async down(queryInterface, _Sequelize) {
    await queryInterface.dropTable('payments');
  },
};
