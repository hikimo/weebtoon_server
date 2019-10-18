'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', [
      {
        email: 'rangga@hiki.dev',
        name: 'hikimo',
        password: '$2b$10$rRVW9hPnhpjZUPCzOp0tWOfzg8Z4iMiLA6XXgLPdbiH2N2l3kcKya', // anjirr (because of i'm always forgot this bastard)
        photo: 'https://img14.androidappsapk.co/300/e/9/e/air.iwantaxiibigold.png'
      },
      {
        email: 'teto@kasane.in',
        name: 'teto',
        password: '$2b$10$jZ0yWeCDQYE/UwbmDEba0.IVJK5pDRnojR2MVBzXgQYj.lud4PCrS', // lovemeforeva
        photo: 'https://i.pinimg.com/originals/5c/17/63/5c1763179eeaf5137e85767fdead7ac3.png'
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {});
  }
};
