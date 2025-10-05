'use strict';

/**
 * Trainer seeder with sample data
 */

module.exports = {
  async seed({ strapi }) {
    console.log('Seeding trainers...');

    // Check if trainers already exist
    const existingTrainers = await strapi.db.query('api::trainer.trainer').findMany();
    
    if (existingTrainers.length > 0) {
      console.log('Trainers already exist, skipping seeding');
      return;
    }

    // Create sample trainers
    const trainers = await Promise.all([
      strapi.db.query('api::trainer.trainer').create({
        data: {
          name: 'Ahmed Rahman',
          company: 'Google',
          position: 'Senior Software Engineer',
          achievement1: 'ICPC World Finals 2019 - 15th Place',
          achievement2: 'Codeforces Rating: 2650 (Grandmaster)',
          achievement3: 'Google Code Jam 2020 - Top 100',
          codeforcesHandle: 'ahmed_coder',
          codeforcesRating: 2650,
          codeforcesRank: 'Grandmaster',
          displayOrder: 1,
          isActive: true,
          bio: 'Experienced competitive programmer with 8+ years in the field. Passionate about teaching algorithmic problem solving.',
        },
      }),

      strapi.db.query('api::trainer.trainer').create({
        data: {
          name: 'Sarah Khan',
          company: 'Microsoft',
          position: 'Principal Software Engineer',
          achievement1: 'ICPC World Finals 2018 - 8th Place',
          achievement2: 'Codeforces Rating: 2480 (Grandmaster)',
          achievement3: 'ACM-ICPC Asia Regional Champion 2017',
          codeforcesHandle: 'sarah_codes',
          codeforcesRating: 2480,
          codeforcesRank: 'Grandmaster',
          displayOrder: 2,
          isActive: true,
          bio: 'Former ICPC World Finalist now working at Microsoft. Specializes in dynamic programming and graph algorithms.',
        },
      }),

      strapi.db.query('api::trainer.trainer').create({
        data: {
          name: 'Mohammad Ali',
          institution: 'Stanford University',
          position: 'PhD Student & Teaching Assistant',
          achievement1: 'Codeforces Rating: 2250 (Master)',
          achievement2: 'IOI 2016 Gold Medal',
          achievement3: 'Published 5+ research papers in competitive programming',
          codeforcesHandle: 'mohammad_ali',
          codeforcesRating: 2250,
          codeforcesRank: 'Master',
          displayOrder: 3,
          isActive: true,
          bio: 'PhD student researching algorithmic optimization. Former International Olympiad in Informatics gold medalist.',
        },
      }),

      strapi.db.query('api::trainer.trainer').create({
        data: {
          name: 'Fatima Hassan',
          company: 'Meta',
          position: 'Software Engineer',
          achievement1: 'Codeforces Rating: 2150 (Master)',
          achievement2: 'Google Hash Code 2021 - Global Top 50',
          achievement3: 'Facebook Hacker Cup 2020 - Round 3 Qualifier',
          codeforcesHandle: 'fatima_dev',
          codeforcesRating: 2150,
          codeforcesRank: 'Master',
          displayOrder: 4,
          isActive: true,
          bio: 'Software engineer at Meta with expertise in data structures and algorithms. Active mentor in competitive programming.',
        },
      }),

      strapi.db.query('api::trainer.trainer').create({
        data: {
          name: 'David Chen',
          company: 'Amazon',
          position: 'Senior SDE',
          achievement1: 'Codeforces Rating: 1950 (Candidate Master)',
          achievement2: 'TopCoder Algorithm Rating: 2100',
          achievement3: '3x ACM-ICPC Regional Finalist',
          codeforcesHandle: 'david_algorithms',
          codeforcesRating: 1950,
          codeforcesRank: 'Candidate Master',
          displayOrder: 5,
          isActive: true,
          bio: 'Senior software engineer with strong background in competitive programming. Enjoys teaching complex algorithms.',
        },
      }),

      strapi.db.query('api::trainer.trainer').create({
        data: {
          name: 'Aisha Patel',
          institution: 'MIT',
          position: 'Research Scientist',
          achievement1: 'Codeforces Rating: 1850 (Candidate Master)',
          achievement2: 'MIT Graduate - Computer Science PhD',
          achievement3: 'Author of "Advanced Algorithms in Competitive Programming"',
          codeforcesHandle: 'aisha_research',
          codeforcesRating: 1850,
          codeforcesRank: 'Candidate Master',
          displayOrder: 6,
          isActive: true,
          bio: 'Research scientist at MIT focusing on algorithmic complexity. Published author and competitive programming coach.',
        },
      }),
    ]);

    console.log(`✅ Created ${trainers.length} trainers`);

    // Set up public role permissions for trainers API
    console.log('Setting up trainer API permissions...');
    
    const publicRole = await strapi.db.query('plugin::users-permissions.role').findOne({
      where: { type: 'public' }
    });

    if (publicRole) {
      // Check and create find permission
      const findPermission = await strapi.db.query('plugin::users-permissions.permission').findOne({
        where: {
          role: publicRole.id,
          action: 'api::trainer.trainer.find'
        }
      });

      const findOnePermission = await strapi.db.query('plugin::users-permissions.permission').findOne({
        where: {
          role: publicRole.id,
          action: 'api::trainer.trainer.findOne'
        }
      });

      if (findPermission) {
        await strapi.db.query('plugin::users-permissions.permission').update({
          where: { id: findPermission.id },
          data: { enabled: true }
        });
      } else {
        await strapi.db.query('plugin::users-permissions.permission').create({
          data: {
            action: 'api::trainer.trainer.find',
            subject: null,
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
          data: { enabled: true }
        });
      } else {
        await strapi.db.query('plugin::users-permissions.permission').create({
          data: {
            action: 'api::trainer.trainer.findOne',
            subject: null,
            properties: {},
            conditions: [],
            role: publicRole.id,
            enabled: true,
          }
        });
      }

      console.log('✅ Public role permissions configured for trainer API');
    }

    console.log('🎉 Trainer seeding completed successfully!');
  },
};