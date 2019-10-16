'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', [
      {
        email: 'rangga@hiki.dev',
        name: 'hikimo',
        password: '$2b$10$cpctiNufpQMZV/7Lb5EyNuuV07sI02K6VoqhvU4twSbf9W6H4QITO',
        photo: 'https://img14.androidappsapk.co/300/e/9/e/air.iwantaxiibigold.png'
      },
      {
        email: 'teto@kasane.in',
        name: 'teto',
        password: '$2b$10$RM2j1ghpovofoBCcROXEv.k0xi.zRiEeciikw60y1X0V3nDbupBUS',
        photo: 'https://i.pinimg.com/originals/5c/17/63/5c1763179eeaf5137e85767fdead7ac3.png'
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {});
  }
};
