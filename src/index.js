'use strict';

module.exports = {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  register(/*{ strapi }*/) {},

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  async bootstrap({ strapi }) {
    console.log('🚀 Starting application bootstrap...');
    
    // Seed database with course data
    if (process.env.NODE_ENV === 'development') {
      try {
        const seedCourses = require('./database/seeds/seed-courses');
        await seedCourses();
      } catch (error) {
        console.error('Failed to seed courses:', error);
      }
    }
  },
};
