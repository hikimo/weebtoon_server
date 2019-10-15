'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('mangas', [
      {
        name: 'overlord',
        is_hot: true,
        banner: '../',
        cover: 'https://img14.androidappsapk.co/300/e/9/e/air.iwantaxiibigold.png',
        created_by: 1
      },
      {
        name: 'goblin slayer',
        is_hot: true,
        banner: '../',
        cover: 'https://img14.androidappsapk.co/300/e/9/e/air.iwantaxiibigold.png',
        created_by: 1
      },
      {
        name: 'uchi no ko',
        is_hot: true,
        banner: '../',
        cover: 'https://img14.androidappsapk.co/300/e/9/e/air.iwantaxiibigold.png',
        created_by: 1
      },
      {
        name: 'boruto',
        is_hot: false,
        banner: '../',
        cover: 'https://img14.androidappsapk.co/300/e/9/e/air.iwantaxiibigold.png',
        created_by: 1
      },
      {
        name: 'kishuku gakko',
        is_hot: false,
        banner: '../',
        cover: 'https://img14.androidappsapk.co/300/e/9/e/air.iwantaxiibigold.png',
        created_by: 1
      },
      {
        name: 'RE:zero kara',
        is_hot: false,
        banner: '../',
        cover: 'https://img14.androidappsapk.co/300/e/9/e/air.iwantaxiibigold.png',
        created_by: 1
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('mangas', null, {});
  }
};
