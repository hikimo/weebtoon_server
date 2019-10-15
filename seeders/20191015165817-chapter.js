'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('chapters', [
      {
        title: 'Chapter 1',
        manga_id: 1,
        img: 'https://img14.androidappsapk.co/300/e/9/e/air.iwantaxiibigold.png'
      },
      {
        title: 'Chapter 2',
        manga_id: 1,
        img: 'https://img14.androidappsapk.co/300/e/9/e/air.iwantaxiibigold.png'
      },
      {
        title: 'Chapter 3',
        manga_id: 1,
        img: 'https://img14.androidappsapk.co/300/e/9/e/air.iwantaxiibigold.png'
      },
      {
        title: 'Chapter 4',
        manga_id: 1,
        img: 'https://img14.androidappsapk.co/300/e/9/e/air.iwantaxiibigold.png'
      },
      {
        title: 'Chapter 1',
        manga_id: 2,
        img: 'https://img14.androidappsapk.co/300/e/9/e/air.iwantaxiibigold.png'
      },
      {
        title: 'Chapter 1',
        manga_id: 3,
        img: 'https://img14.androidappsapk.co/300/e/9/e/air.iwantaxiibigold.png'
      },
      {
        title: 'Chapter 1',
        manga_id: 4,
        img: 'https://img14.androidappsapk.co/300/e/9/e/air.iwantaxiibigold.png'
      },
      {
        title: 'Chapter 1',
        manga_id: 5,
        img: 'https://img14.androidappsapk.co/300/e/9/e/air.iwantaxiibigold.png'
      },
      {
        title: 'Chapter 1',
        manga_id: 6,
        img: 'https://img14.androidappsapk.co/300/e/9/e/air.iwantaxiibigold.png'
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('chapters', null, {});
  }
};
