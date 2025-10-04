'use strict';

/**
 * module controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::module.module', ({ strapi }) => ({
  // Custom find method with population
  async find(ctx) {
    const { data, meta } = await super.find(ctx, {
      populate: {
        course: true,
        classes: {
          populate: {
            topics: true,
          },
        },
      },
    });

    return { data, meta };
  },

  // Custom findOne method with population
  async findOne(ctx) {
    const { data, meta } = await super.findOne(ctx, {
      populate: {
        course: true,
        classes: {
          populate: {
            topics: true,
          },
        },
      },
    });

    return { data, meta };
  },
}));
