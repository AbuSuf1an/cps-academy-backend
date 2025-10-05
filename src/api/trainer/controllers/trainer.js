'use strict';

/**
 * trainer controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::trainer.trainer', ({ strapi }) => ({
  // Override find to only return active trainers, sorted by displayOrder
  async find(ctx) {
    const { query } = ctx;

    // Add filters for active trainers and sorting
    const modifiedQuery = {
      ...query,
      filters: {
        ...query.filters,
        isActive: true,
      },
      sort: query.sort || ['displayOrder:asc', 'id:asc'],
    };

    ctx.query = modifiedQuery;

    // Call the default core controller
    const { data, meta } = await super.find(ctx);
    
    return { data, meta };
  },
}));