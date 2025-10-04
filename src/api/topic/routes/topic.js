'use strict';

/**
 * topic router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::topic.topic', {
  config: {
    find: {
      auth: false, // Allow public access to topic list
    },
    findOne: {
      auth: false, // Allow public access to individual topics
    },
    create: {
      auth: {
        scope: ['admin'], // Only admin can create topics
      },
    },
    update: {
      auth: {
        scope: ['admin'], // Only admin can update topics
      },
    },
    delete: {
      auth: {
        scope: ['admin'], // Only admin can delete topics
      },
    },
  },
});
