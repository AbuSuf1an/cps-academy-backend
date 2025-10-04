'use strict';

/**
 * topic controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::topic.topic', ({ strapi }) => ({
  // Custom find method with population
  async find(ctx) {
    const { data, meta } = await super.find(ctx, {
      populate: {
        class: {
          populate: {
            module: {
              populate: {
                course: true,
              },
            },
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
        class: {
          populate: {
            module: {
              populate: {
                course: true,
              },
            },
          },
        },
      },
    });

    return { data, meta };
  },
}));
