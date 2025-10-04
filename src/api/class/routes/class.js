'use strict';

/**
 * class router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::class.class', {
  config: {
    find: {
      auth: false, // Allow public access to class list
    },
    findOne: {
      auth: false, // Allow public access to individual classes
    },
    create: {
      auth: {
        scope: ['admin'], // Only admin can create classes
      },
    },
    update: {
      auth: {
        scope: ['admin'], // Only admin can update classes
      },
    },
    delete: {
      auth: {
        scope: ['admin'], // Only admin can delete classes
      },
    },
  },
});
