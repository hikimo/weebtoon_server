'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('mangas', [
      {
        name: 'overlord',
        is_hot: true,
        banner: '../',
        cover: 'https://avt.mkklcdnv3.com/avatar_225/756-overlord_manga.jpg',
        created_by: 1
      },
      {
        name: 'goblin slayer',
        is_hot: true,
        banner: '../',
        cover: 'https://avt.mkklcdnv3.com/avatar_225/16959-goblin_slayer.jpg',
        created_by: 1
      },
      {
        name: 'uchi no ko',
        is_hot: false,
        banner: '../',
        cover: 'https://avt.mkklcdnv3.com/avatar_225/17199-for_my_daughter_i_might_even_be_able_to_defeat_the_demon_king.jpg',
        created_by: 1
      },
      {
        name: 'boruto',
        is_hot: false,
        banner: '../',
        cover: 'https://avt.mkklcdnv3.com/avatar_225/16679-boruto_naruto_next_generations.jpg',
        created_by: 1
      },
      {
        name: 'kishuku gakko',
        is_hot: true,
        banner: 'https://images4.alphacoders.com/953/953550.png',
        cover: 'https://avt.mkklcdnv3.com/avatar_225/16547-kishuku_gakkou_no_juliet.jpg',
        created_by: 1
      },
      {
        name: 'RE:zero kara',
        is_hot: false,
        banner: '../',
        cover: 'https://avt.mkklcdnv3.com/avatar_225/16816-rezero_kara_hajimeru_isekai_seikatsu_daisanshou_truth_of_zero.jpg',
        created_by: 1
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('mangas', null, {});
  }
};
