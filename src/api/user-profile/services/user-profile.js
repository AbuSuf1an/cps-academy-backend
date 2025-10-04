'use strict';

/**
 * user-profile service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::user-profile.user-profile', ({ strapi }) => ({
  // Custom method to find or create profile for user
  async findOrCreateForUser(userId, defaultData = {}) {
    let profile = await strapi.entityService.findMany('api::user-profile.user-profile', {
      filters: {
        user: userId,
      },
    });

    if (!profile || profile.length === 0) {
      profile = await strapi.entityService.create('api::user-profile.user-profile', {
        data: {
          user: userId,
          role: 'NormalUser',
          displayName: defaultData.displayName || 'User',
          ...defaultData,
        },
      });
    } else {
      profile = profile[0];
    }

    return profile;
  },

  // Custom method to update user role
  async updateUserRole(profileId, role) {
    return await strapi.entityService.update('api::user-profile.user-profile', profileId, {
      data: {
        role,
      },
    });
  },
}));
