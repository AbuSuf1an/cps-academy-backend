'use strict';

/**
 * class controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::class.class', ({ strapi }) => ({
  // Custom find method with population
  async find(ctx) {
    const { data, meta } = await super.find(ctx, {
      populate: {
        module: {
          populate: {
            course: true,
          },
        },
        topics: true,
      },
    });

    return { data, meta };
  },

  // Custom findOne method with population
  async findOne(ctx) {
    const { data, meta } = await super.findOne(ctx, {
      populate: {
        module: {
          populate: {
            course: true,
          },
        },
        topics: true,
      },
    });

    return { data, meta };
  },
}));
