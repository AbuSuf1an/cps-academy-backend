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

  // Custom /me endpoint
  async me(ctx) {
    try {
      const userId = ctx.state.user.id;

      // Get the authenticated user
      const user = await strapi.plugins['users-permissions'].services.user.fetch(userId, {
        populate: ['role'],
      });

      if (!user) {
        return ctx.notFound('User not found');
      }

      // Get the user's profile
      const profiles = await strapi.entityService.findMany('api::user-profile.user-profile', {
        filters: {
          user: userId,
        },
        populate: {
          avatar: true,
          enrolledCourses: {
            populate: {
              thumbnail: true,
              modules: {
                populate: {
                  classes: true,
                },
              },
            },
          },
        },
      });

      const profile = profiles[0] || null;

      // Sanitize user data (remove sensitive fields)
      const sanitizedUser = {
        id: user.id,
        username: user.username,
        email: user.email,
        confirmed: user.confirmed,
        blocked: user.blocked,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt,
        role: user.role ? {
          id: user.role.id,
          name: user.role.name,
          type: user.role.type,
        } : null,
      };

      // Sanitize profile data
      const sanitizedProfile = profile ? {
        id: profile.id,
        role: profile.role,
        displayName: profile.displayName,
        avatar: profile.avatar,
        enrolledCourses: profile.enrolledCourses || [],
        createdAt: profile.createdAt,
        updatedAt: profile.updatedAt,
      } : null;

      return {
        user: sanitizedUser,
        profile: sanitizedProfile,
      };
    } catch (error) {
      console.error('Error in /me endpoint:', error);
      return ctx.internalServerError('Unable to fetch user data');
    }
  },
}));
