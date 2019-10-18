'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('chapters', [
      {
        title: 'Chapter 1',
        chapter: 1,
        manga_id: 1,
        img: 'https://avt.mkklcdnv3.com/avatar_225/756-overlord_manga.jpg'
      },
      {
        title: 'Chapter 2',
        chapter: 2,
        manga_id: 1,
        img: 'https://avt.mkklcdnv3.com/avatar_225/756-overlord_manga.jpg'
      },
      {
        title: 'Chapter 1',
        chapter: 1,
        manga_id: 2,
        img: 'https://avt.mkklcdnv3.com/avatar_225/16959-goblin_slayer.jpg'
      },
      {
        title: 'Chapter 1',
        chapter: 1,
        manga_id: 3,
        img: 'https://avt.mkklcdnv3.com/avatar_225/17199-for_my_daughter_i_might_even_be_able_to_defeat_the_demon_king.jpg'
      },
      {
        title: 'Chapter 1',
        chapter: 1,
        manga_id: 4,
        img: 'https://avt.mkklcdnv3.com/avatar_225/16679-boruto_naruto_next_generations.jpg'
      },
      {
        title: 'Chapter 1',
        chapter: 1,
        manga_id: 5,
        img: 'https://avt.mkklcdnv3.com/avatar_225/16547-kishuku_gakkou_no_juliet.jpg'
      },
      {
        title: 'Chapter 1',
        chapter: 1,
        manga_id: 6,
        img: 'https://avt.mkklcdnv3.com/avatar_225/16816-rezero_kara_hajimeru_isekai_seikatsu_daisanshou_truth_of_zero.jpg'
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('chapters', null, {});
  }
};
