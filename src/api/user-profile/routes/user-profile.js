'use strict';

/**
 * user-profile router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::user-profile.user-profile', {
  config: {
    find: {
      auth: {
        scope: ['admin'], // Only admin can list all profiles
      },
    },
    findOne: {
      auth: true, // Authenticated users can view individual profiles
    },
    create: {
      auth: true, // Authenticated users can create profiles
    },
    update: {
      auth: true, // Authenticated users can update profiles
    },
    delete: {
      auth: {
        scope: ['admin'], // Only admin can delete profiles
      },
    },
  },
});
