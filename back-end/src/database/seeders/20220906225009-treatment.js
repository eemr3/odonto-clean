'use strict';

module.exports = {
  async up(queryInterface, _Sequelize) {
    await queryInterface.bulkInsert(
      'treatments',
      [
        {
          treatment: 'Obturação',
          payment_method: 'À vista',
          in_cash: 350,
          patient_id: 1,
          start_date: '2022-09-02',
        },
        {
          treatment: 'Canal Ciso',
          payment_method: 'À vista',
          in_cash: 500,
          patient_id: 2,
          start_date: '2022-09-11',
        },
        {
          treatment: 'Obturação',
          payment_method: 'À vista',
          in_cash: 230,
          patient_id: 3,
          start_date: '2022-09-25',
        },
        {
          treatment: 'Obturação',
          payment_method: 'À vista',
          in_cash: 100,
          patient_id: 4,
          start_date: '2022-09-26',
        },
        {
          treatment: 'Obturação',
          payment_method: 'À vista',
          in_cash: 200,
          patient_id: 5,
          start_date: '2022-10-02',
        },
      ],
      {},
    );
  },

  async down(queryInterface, _Sequelize) {
    await queryInterface.bulkDelete('treatments', null, {});
  },
};
