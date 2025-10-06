'use strict';

/**
 * user-progress controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::user-progress.user-progress', ({ strapi }) => ({
  // Custom method to mark content as completed
  async markCompleted(ctx) {
    const { contentType, contentId, moduleId, courseId } = ctx.request.body;
    const user = ctx.state.user;

    if (!user) {
      return ctx.unauthorized('You must be authenticated to track progress');
    }

    try {
      // Find existing progress or create new one
      let progress = await strapi.entityService.findMany('api::user-progress.user-progress', {
        filters: {
          user: user.id,
          contentType,
          contentId,
          module: moduleId,
          course: courseId,
        },
      });

      if (progress.length > 0) {
        // Update existing progress
        progress = await strapi.entityService.update('api::user-progress.user-progress', progress[0].id, {
          data: {
            isCompleted: true,
            completedAt: new Date(),
            lastAccessedAt: new Date(),
          },
        });
      } else {
        // Create new progress entry
        progress = await strapi.entityService.create('api::user-progress.user-progress', {
          data: {
            user: user.id,
            course: courseId,
            module: moduleId,
            contentType,
            contentId,
            isCompleted: true,
            completedAt: new Date(),
            lastAccessedAt: new Date(),
          },
        });
      }

      ctx.body = { data: progress };
    } catch (error) {
      ctx.throw(500, 'Failed to update progress');
    }
  },

  // Get user progress for a course
  async getProgressByCourse(ctx) {
    const { courseId } = ctx.params;
    const user = ctx.state.user;

    if (!user) {
      return ctx.unauthorized('You must be authenticated to view progress');
    }

    try {
      const progress = await strapi.entityService.findMany('api::user-progress.user-progress', {
        filters: {
          user: user.id,
          course: courseId,
        },
        populate: ['course', 'module'],
      });

      ctx.body = { data: progress };
    } catch (error) {
      ctx.throw(500, 'Failed to fetch progress');
    }
  },
}));