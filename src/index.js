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
    // Only run seeds in development
    if (process.env.NODE_ENV === 'development') {
      const courseSeeder = require('./database/seeds/course-seeder');
      await courseSeeder.seed({ strapi });
    }
  },
};
