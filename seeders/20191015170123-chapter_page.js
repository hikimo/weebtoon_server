'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('chapter_pages', [
      {
        page: 1,
        name: '1',
        img: 'https://s5.mkklcdnv5.com/mangakakalot/g2/goblin_slayer/chapter_1/1.jpg',
        chapter_id: 5
      },
      {
        page: 2,
        name: '2',
        img: 'https://s5.mkklcdnv5.com/mangakakalot/g2/goblin_slayer/chapter_1/2.jpg',
        chapter_id: 5
      },
      {
        page: 3,
        name: '3',
        img: 'https://s5.mkklcdnv5.com/mangakakalot/g2/goblin_slayer/chapter_1/3.jpg',
        chapter_id: 5
      },
      {
        page: 4,
        name: '4',
        img: 'https://s5.mkklcdnv5.com/mangakakalot/g2/goblin_slayer/chapter_1/4.jpg',
        chapter_id: 5
      },
      {
        page: 5,
        name: '5',
        img: 'https://s5.mkklcdnv5.com/mangakakalot/g2/goblin_slayer/chapter_1/5.jpg',
        chapter_id: 5
      },
      {
        page: 6,
        name: '6',
        img: 'https://s5.mkklcdnv5.com/mangakakalot/g2/goblin_slayer/chapter_1/6.jpg',
        chapter_id: 5
      },
      {
        page: 7,
        name: '7',
        img: 'https://s5.mkklcdnv5.com/mangakakalot/g2/goblin_slayer/chapter_1/7.jpg',
        chapter_id: 5
      },
      {
        page: 8,
        name: '8',
        img: 'https://s5.mkklcdnv5.com/mangakakalot/g2/goblin_slayer/chapter_1/8.jpg',
        chapter_id: 5
      },
      {
        page: 9,
        name: '9',
        img: 'https://s5.mkklcdnv5.com/mangakakalot/g2/goblin_slayer/chapter_1/9.jpg',
        chapter_id: 5
      },
      {
        page: 10,
        name: '10',
        img: 'https://s5.mkklcdnv5.com/mangakakalot/g2/goblin_slayer/chapter_1/10.jpg',
        chapter_id: 5
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('chapter_pages', null, {});
  }
};
