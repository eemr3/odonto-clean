'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'patients',
      [
        {
          name: 'John Doe',
          email: 'doej@email.com',
          phone: '11987765666',
          document: '12345678901',
        },
        {
          name: 'Luara Silva',
          email: 'laura@email.com',
          phone: '11987765666',
          document: '12345678902',
        },
        {
          name: 'Carlos Silva',
          email: 'carlos@email.com',
          phone: '11987765666',
          document: '12345678903',
        },
        {
          name: 'Pedro Silva',
          email: 'pedro@email.com',
          phone: '11987765666',
          document: '12345678904',
        },
        {
          name: 'Luiza Silva',
          email: 'luiza@email.com',
          phone: '11987765666',
          document: '12345678905',
        },
      ],
      {},
    );
  },

  async down(queryInterface, _Sequelize) {
    await queryInterface.bulkDelete('patients', null, {});
  },
};
