#!/usr/bin/env node

const path = require('path');

// Load Strapi instance
async function runSeeds() {
  try {
    console.log('Starting Strapi seeding process...');
    
    // Initialize Strapi
    const Strapi = require('@strapi/strapi');
    const strapi = Strapi({
      dir: process.cwd(),
    });

    await strapi.load();
    
    console.log('Strapi loaded, running seeders...');
    
    // Load and run the course seeder
    const courseSeeder = require('./src/database/seeds/course-seeder');
    await courseSeeder.seed({ strapi });
    
    console.log('✅ Seeding completed successfully!');
    
    await strapi.destroy();
    process.exit(0);
  } catch (error) {
    console.error('❌ Seeding failed:', error);
    process.exit(1);
  }
}

runSeeds();