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
        bannerImage: true,
        instructorImage: true,
        modules: {
          populate: {
            classes: {
              populate: {
                topics: true,
                thumbnail: true,
                attachments: true,
              },
              sort: 'order:asc',
            },
            lessons: {
              populate: {
                attachments: true,
              },
              sort: 'order:asc',
            },
            contests: {
              populate: {
                attachments: true,
              },
              sort: 'order:asc',
            },
          },
          sort: 'order:asc',
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
        bannerImage: true,
        instructorImage: true,
        modules: {
          populate: {
            classes: {
              populate: {
                topics: true,
                thumbnail: true,
                attachments: true,
              },
              sort: 'order:asc',
            },
            lessons: {
              populate: {
                attachments: true,
              },
              sort: 'order:asc',
            },
            contests: {
              populate: {
                attachments: true,
              },
              sort: 'order:asc',
            },
          },
          sort: 'order:asc',
        },
        enrolledUsers: {
          populate: {
            user: {
              fields: ['id', 'username', 'email'],
            },
          },
        },
      },
    };

    return await strapi.entityService.findOne('api::course.course', ctx.params.id, query);
  },

  // Custom method to find course by slug with full population
  async findBySlug(slug, userId = null) {
    const query = {
      populate: {
        thumbnail: true,
        bannerImage: true,
        instructorImage: true,
        modules: {
          populate: {
            classes: {
              populate: {
                topics: true,
                thumbnail: true,
                attachments: true,
              },
              sort: 'order:asc',
            },
            lessons: {
              populate: {
                attachments: true,
              },
              sort: 'order:asc',
            },
            contests: {
              populate: {
                attachments: true,
              },
              sort: 'order:asc',
            },
          },
          sort: 'order:asc',
        },
      },
      filters: {
        slug: slug,
        isPublic: true,
      },
    };

    const courses = await strapi.entityService.findMany('api::course.course', query);
    
    if (courses.length === 0) {
      return null;
    }

    const course = courses[0];

    // If userId is provided, get user progress
    if (userId) {
      const userProgress = await strapi.entityService.findMany('api::user-progress.user-progress', {
        filters: {
          user: userId,
          course: course.id,
        },
      });

      // Add progress information to course content
      if (userProgress.length > 0) {
        const progressMap = {};
        userProgress.forEach(progress => {
          const key = `${progress.contentType}-${progress.contentId}`;
          progressMap[key] = progress;
        });

        // Add progress to classes, lessons, and contests
        course.modules?.forEach(module => {
          module.classes?.forEach(classItem => {
            const key = `class-${classItem.id}`;
            classItem.progress = progressMap[key] || null;
          });
          
          module.lessons?.forEach(lesson => {
            const key = `lesson-${lesson.id}`;
            lesson.progress = progressMap[key] || null;
          });
          
          module.contests?.forEach(contest => {
            const key = `contest-${contest.id}`;
            contest.progress = progressMap[key] || null;
          });
        });
      }
    }

    return course;
  },
}));
