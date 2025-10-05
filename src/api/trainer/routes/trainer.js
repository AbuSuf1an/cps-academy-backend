'use strict';

/**
 * trainer router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::trainer.trainer', {
  config: {
    find: {
      auth: false, // Allow public access to trainer list
    },
    findOne: {
      auth: false, // Allow public access to individual trainers
    },
    create: {
      auth: {
        scope: ['admin'], // Only admin can create trainers
      },
    },
    update: {
      auth: {
        scope: ['admin'], // Only admin can update trainers
      },
    },
    delete: {
      auth: {
        scope: ['admin'], // Only admin can delete trainers
      },
    },
  },
});