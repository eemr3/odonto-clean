'use strict';

module.exports = {
  async up(queryInterface, _Sequelize) {
    await queryInterface.bulkInsert(
      'payments',
      [
        {
          title: 'Obturação',
          payment_method: 'avista',
          in_cash: 350,
          patient_id: 1,
          start_date: '2022-09-02',
        },
        {
          title: 'Obturação',
          payment_method: 'avista',
          in_cash: 500,
          patient_id: 2,
          start_date: '2022-09-05',
        },
        {
          title: 'Obturação',
          payment_method: 'avista',
          in_cash: 230,
          patient_id: 3,
          start_date: '2022-09-25',
        },
        {
          title: 'Obturação',
          payment_method: 'avista',
          in_cash: 100,
          patient_id: 4,
          start_date: '2022-09-26',
        },
        {
          title: 'Obturação',
          payment_method: 'avista',
          in_cash: 200,
          patient_id: 5,
          start_date: '2022-10-02',
        },
      ],
      {},
    );
  },

  async down(queryInterface, _Sequelize) {
    await queryInterface.bulkDelete('payments', null, {});
  },
};
