'use strict';

/**
 * user-profile controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::user-profile.user-profile', ({ strapi }) => ({
  // Custom find method with population
  async find(ctx) {
    const { data, meta } = await super.find(ctx, {
      populate: {
        user: true,
        avatar: true,
      },
    });

    return { data, meta };
  },

  // Custom findOne method with population
  async findOne(ctx) {
    const { data, meta } = await super.findOne(ctx, {
      populate: {
        user: true,
        avatar: true,
      },
    });

    return { data, meta };
  },

  // Custom method to find profile by user ID
  async findByUser(ctx) {
    const { userId } = ctx.params;
    
    const profile = await strapi.entityService.findMany('api::user-profile.user-profile', {
      filters: {
        user: userId,
      },
      populate: {
        user: true,
        avatar: true,
      },
    });

    return { data: profile };
  },
}));
