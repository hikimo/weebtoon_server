'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('mangas', [
      {
        name: 'overlord',
        desc: 'A salaryman who called into another world and be a supreme being as a ruler of conpiracy',
        is_hot: true,
        is_favorite: true,
        favorites: 450,
        banner: 'https://archive-media-1.nyafuu.org/w/image/1516/50/1516500271175.jpg',
        cover: 'https://www-animeherald-com.exactdn.com/wp-content/uploads/2017/01/Overlord-The-Dark-Warrior-Visual-001-20170115.jpg',
        created_by: 1
      },
      {
        name: 'goblin slayer',
        desc: 'From Yen Press: A young priestess has formed her first adventuring party, but almost immediately they find themselves in distress.',
        is_hot: true,
        is_favorite: true,
        favorites: 96,
        banner: 'https://images6.alphacoders.com/951/951038.png',
        cover: 'https://avt.mkklcdnv3.com/avatar_225/16959-goblin_slayer.jpg',
        created_by: 1
      },
      {
        name: 'Uchi no Musume no Tame Naraba, Ore wa Moshikashitara Maou mo Taoseru Kamo Shirenai',
        desc: 'From Konobuta: He met a girl. A young girl branded with the mark of a criminal. That was the beginning of everything.',
        is_hot: false,
        is_favorite: true,
        favorites: 90,
        banner: 'https://i.pinimg.com/originals/e1/25/16/e125165325e34372a43b5f72aa59b48b.jpg',
        cover: 'https://avt.mkklcdnv3.com/avatar_225/17199-for_my_daughter_i_might_even_be_able_to_defeat_the_demon_king.jpg',
        created_by: 1
      },
      {
        name: 'boruto',
        desc: 'A new generation of ninja are ready to take the stage, led by Naruto\'s own son, Boruto!',
        is_hot: false,
        is_favorite: false,
        favorites: 45,
        banner: 'https://rukminim1.flixcart.com/image/832/832/jms25jk0/poster/y/f/e/medium-athah-anime-boruto-boruto-uzumaki-13-19-inches-wall-original-imaf9hcrzzjvf9hj.jpeg?q=70',
        cover: 'https://avt.mkklcdnv3.com/avatar_225/16679-boruto_naruto_next_generations.jpg',
        created_by: 1
      },
      {
        name: 'kishuku gakkou no Juliet',
        desc: '"To Love, or not to Love" Juliet Percia and Inudzuka Romeo are archenemies. They lead two high-school dormitories from to two rivalling countries. However, Percia and Inudzuka long for love and peace for their budding relationship...',
        is_hot: true,
        is_favorite: true,
        favorites: 120,
        banner: 'https://images4.alphacoders.com/953/953550.png',
        cover: 'https://avt.mkklcdnv3.com/avatar_225/16547-kishuku_gakkou_no_juliet.jpg',
        created_by: 1
      },
      {
        name: 'Re:Zero kara Hajimeru Isekai Seikatsu',
        desc: 'Suddenly a high-school student Subaru Natsuki has been summoned to another world on the way back from the convenience store.',
        is_hot: false,
        is_favorite: false,
        favorites: 54,
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
