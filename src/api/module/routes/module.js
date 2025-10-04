'use strict';

/**
 * module router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::module.module', {
  config: {
    find: {
      auth: false, // Allow public access to module list
    },
    findOne: {
      auth: false, // Allow public access to individual modules
    },
    create: {
      auth: {
        scope: ['admin'], // Only admin can create modules
      },
    },
    update: {
      auth: {
        scope: ['admin'], // Only admin can update modules
      },
    },
    delete: {
      auth: {
        scope: ['admin'], // Only admin can delete modules
      },
    },
  },
});
