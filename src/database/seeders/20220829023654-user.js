'use strict';

module.exports = {
  async up(queryInterface, _Sequelize) {
    await queryInterface.bulkInsert(
      'users',
      [
        {
          name: 'Érica',
          email: 'erica@email.com',
          password: '$2a$10$uuOBmhn66fIckoURoiir2uUZZwTZBVJPBKeQEpRutQfqDzeb4MLAq', //123456
          image_url: 'http://localhost:3333/images/erica_dentista.jpg',
        },
      ],
      {},
    );
  },

  async down(queryInterface, _Sequelize) {
    await queryInterface.bulkDelete('users', null, {});
  },
};
