'use strict';

/**
 * user-progress router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

const defaultRouter = createCoreRouter('api::user-progress.user-progress');

const customRoutes = {
  routes: [
    {
      method: 'POST',
      path: '/user-progress/mark-completed',
      handler: 'user-progress.markCompleted',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'GET',
      path: '/user-progress/course/:courseId',
      handler: 'user-progress.getProgressByCourse',
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};

module.exports = {
  routes: [
    ...defaultRouter.routes,
    ...customRoutes.routes,
  ],
};