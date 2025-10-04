'use strict';

/**
 * course service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::course.course', ({ strapi }) => ({
  // Custom method to find courses with deep population
  async findWithModules(ctx) {
    const query = {
      ...ctx.query,
      populate: {
        thumbnail: true,
        modules: {
          populate: {
            classes: {
              populate: {
                topics: true,
              },
            },
          },
        },
      },
      filters: {
        ...ctx.query.filters,
        isPublic: true,
      },
    };

    return await strapi.entityService.findMany('api::course.course', query);
  },

  // Custom method to find one course with deep population
  async findOneWithModules(ctx) {
    const query = {
      ...ctx.query,
      populate: {
        thumbnail: true,
        modules: {
          populate: {
            classes: {
              populate: {
                topics: true,
              },
            },
          },
        },
      },
    };

    return await strapi.entityService.findOne('api::course.course', ctx.params.id, query);
  },
}));
