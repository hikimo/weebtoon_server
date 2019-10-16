'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('mangas', [
      {
        name: 'overlord',
        is_hot: true,
        banner: 'https://archive-media-1.nyafuu.org/w/image/1516/50/1516500271175.jpg',
        cover: 'https://www-animeherald-com.exactdn.com/wp-content/uploads/2017/01/Overlord-The-Dark-Warrior-Visual-001-20170115.jpg',
        created_by: 1
      },
      {
        name: 'goblin slayer',
        is_hot: true,
        banner: 'https://images6.alphacoders.com/951/951038.png',
        cover: 'https://avt.mkklcdnv3.com/avatar_225/16959-goblin_slayer.jpg',
        created_by: 1
      },
      {
        name: 'uchi no ko',
        is_hot: false,
        banner: 'https://i.pinimg.com/originals/e1/25/16/e125165325e34372a43b5f72aa59b48b.jpg',
        cover: 'https://avt.mkklcdnv3.com/avatar_225/17199-for_my_daughter_i_might_even_be_able_to_defeat_the_demon_king.jpg',
        created_by: 1
      },
      {
        name: 'boruto',
        is_hot: false,
        banner: 'https://rukminim1.flixcart.com/image/832/832/jms25jk0/poster/y/f/e/medium-athah-anime-boruto-boruto-uzumaki-13-19-inches-wall-original-imaf9hcrzzjvf9hj.jpeg?q=70',
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
        banner: 'http://i.imgur.com/rshfruj.jpg',
        cover: 'https://avt.mkklcdnv3.com/avatar_225/16816-rezero_kara_hajimeru_isekai_seikatsu_daisanshou_truth_of_zero.jpg',
        created_by: 1
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('mangas', null, {});
  }
};
