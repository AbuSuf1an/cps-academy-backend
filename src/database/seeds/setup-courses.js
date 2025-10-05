/**
 * Simple script to publish all draft courses and set up permissions
 */

module.exports = {
  async seed({ strapi }) {
    console.log('🔧 Setting up course API and publishing courses...');

    try {
      // First, let's check if there are any existing courses (both published and draft)
      const allCourses = await strapi.db.query('api::course.course').findMany({
        where: {},
        populate: false,
      });

      console.log(`Found ${allCourses.length} existing courses`);

      // Publish any unpublished courses
      for (const course of allCourses) {
        if (!course.publishedAt) {
          await strapi.db.query('api::course.course').update({
            where: { id: course.id },
            data: {
              publishedAt: new Date(),
            },
          });
          console.log(`✅ Published course: ${course.title}`);
        } else {
          console.log(`✓ Course already published: ${course.title}`);
        }
      }

      // If no courses exist, create sample ones
      if (allCourses.length === 0) {
        console.log('No courses found, creating sample courses...');
        
        const sampleCourse = await strapi.db.query('api::course.course').create({
          data: {
            title: 'Sample Web Development Course',
            slug: 'sample-web-development-course',
            description: 'A sample course to test the API functionality.',
            level: 'Beginner',
            isPublic: true,
            publishedAt: new Date(),
          },
        });

        console.log(`✅ Created and published sample course: ${sampleCourse.title}`);
      }

      // Set up public role permissions
      const publicRole = await strapi.db.query('plugin::users-permissions.role').findOne({
        where: { type: 'public' }
      });

      if (publicRole) {
        // Check if permissions exist, if not create them
        const findPermission = await strapi.db.query('plugin::users-permissions.permission').findOne({
          where: {
            role: publicRole.id,
            action: 'api::course.course.find'
          }
        });

        const findOnePermission = await strapi.db.query('plugin::users-permissions.permission').findOne({
          where: {
            role: publicRole.id,
            action: 'api::course.course.findOne'
          }
        });

        if (findPermission) {
          await strapi.db.query('plugin::users-permissions.permission').update({
            where: { id: findPermission.id },
            data: {
              enabled: true,
              subject: 'api::course.course',
            }
          });
        } else {
          await strapi.db.query('plugin::users-permissions.permission').create({
            data: {
              action: 'api::course.course.find',
              subject: 'api::course.course',
              properties: {},
              conditions: [],
              role: publicRole.id,
              enabled: true,
            }
          });
        }

        if (findOnePermission) {
          await strapi.db.query('plugin::users-permissions.permission').update({
            where: { id: findOnePermission.id },
            data: {
              enabled: true,
              subject: 'api::course.course',
            }
          });
        } else {
          await strapi.db.query('plugin::users-permissions.permission').create({
            data: {
              action: 'api::course.course.findOne',
              subject: 'api::course.course',
              properties: {},
              conditions: [],
              role: publicRole.id,
              enabled: true,
            }
          });
        }

        console.log('✅ Public role permissions configured for course API');
      }

      console.log('🎉 Course setup completed successfully!');

    } catch (error) {
      console.error('❌ Error setting up courses:', error);
    }
  },
};
