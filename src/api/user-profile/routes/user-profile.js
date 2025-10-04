'use strict';

/**
 * user-profile router
 */

module.exports = {
  routes: [
    // Custom /me endpoint
    {
      method: 'GET',
      path: '/user-profiles/me',
      handler: 'user-profile.me',
      config: {
        auth: true, // Requires authentication
      },
    },
    // Default CRUD routes
    ...require('@strapi/strapi').factories.createCoreRouter('api::user-profile.user-profile', {
      config: {
        find: {
          auth: {
            scope: ['admin'], // Only admin can list all profiles
          },
        },
        findOne: {
          auth: true, // Authenticated users can view individual profiles
        },
        create: {
          auth: true, // Authenticated users can create profiles
        },
        update: {
          auth: true, // Authenticated users can update profiles
        },
        delete: {
          auth: {
            scope: ['admin'], // Only admin can delete profiles
          },
        },
      },
    }).routes,
  ],
};
