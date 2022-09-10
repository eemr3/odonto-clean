'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('treatments', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      treatment: Sequelize.STRING,
      payment_method: Sequelize.STRING,
      in_cash: Sequelize.DECIMAL,
      start_date: {
        type: Sequelize.DATEONLY,
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
    await queryInterface.dropTable('treatments');
  },
};
