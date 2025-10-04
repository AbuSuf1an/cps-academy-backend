'use strict';

/**
 * course router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::course.course', {
  config: {
    find: {
      auth: false, // Allow public access to course list
    },
    findOne: {
      auth: false, // Allow public access to individual courses
    },
    create: {
      auth: {
        scope: ['admin'], // Only admin can create courses
      },
    },
    update: {
      auth: {
        scope: ['admin'], // Only admin can update courses
      },
    },
    delete: {
      auth: {
        scope: ['admin'], // Only admin can delete courses
      },
    },
  },
});
