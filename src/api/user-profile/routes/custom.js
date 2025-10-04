'use strict';

/**
 * Custom routes for user-profile
 */

module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/user-profiles/user/:userId',
      handler: 'user-profile.findByUser',
      config: {
        auth: true,
        policies: [],
        middlewares: [],
      },
    },
  ],
};
