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
    
    // Set up courses and permissions
    if (process.env.NODE_ENV === 'development') {
      const courseSetup = require('./database/seeds/setup-courses');
      await courseSetup.seed({ strapi });
    }
  },
};
