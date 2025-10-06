'use strict';

const masterCompetitiveProgrammingCourse = require('./master-competitive-programming');

async function seedDatabase() {
  console.log('🌱 Starting database seeding...');

  try {
    // Check if course already exists
    const existingCourse = await strapi.entityService.findMany('api::course.course', {
      filters: { slug: masterCompetitiveProgrammingCourse.slug },
    });

    if (existingCourse.length > 0) {
      console.log('📚 Course already exists, skipping...');
      return;
    }

    // Create the course
    console.log('📚 Creating Master Competitive Programming course...');
    
    const courseData = {
      title: masterCompetitiveProgrammingCourse.title,
      slug: masterCompetitiveProgrammingCourse.slug,
      description: masterCompetitiveProgrammingCourse.description,
      shortDescription: masterCompetitiveProgrammingCourse.shortDescription,
      level: masterCompetitiveProgrammingCourse.level,
      price: masterCompetitiveProgrammingCourse.price,
      originalPrice: masterCompetitiveProgrammingCourse.originalPrice,
      currency: masterCompetitiveProgrammingCourse.currency,
      duration: masterCompetitiveProgrammingCourse.duration,
      language: masterCompetitiveProgrammingCourse.language,
      instructor: masterCompetitiveProgrammingCourse.instructor,
      instructorTitle: masterCompetitiveProgrammingCourse.instructorTitle,
      isPublic: masterCompetitiveProgrammingCourse.isPublic,
      isFeatured: masterCompetitiveProgrammingCourse.isFeatured,
      enrollmentCount: masterCompetitiveProgrammingCourse.enrollmentCount,
      rating: masterCompetitiveProgrammingCourse.rating,
      reviewCount: masterCompetitiveProgrammingCourse.reviewCount,
      tags: masterCompetitiveProgrammingCourse.tags,
      whatYouWillLearn: masterCompetitiveProgrammingCourse.whatYouWillLearn,
      requirements: masterCompetitiveProgrammingCourse.requirements,
      publishedAt: new Date(),
    };

    const course = await strapi.entityService.create('api::course.course', {
      data: courseData,
    });

    console.log(`✅ Created course: ${course.title} (ID: ${course.id})`);

    // Create modules, classes, lessons, and contests
    for (const moduleData of masterCompetitiveProgrammingCourse.modules) {
      console.log(`📁 Creating module: ${moduleData.title}`);
      
      const module = await strapi.entityService.create('api::module.module', {
        data: {
          title: moduleData.title,
          description: moduleData.description,
          shortDescription: moduleData.shortDescription,
          order: moduleData.order,
          status: moduleData.status,
          duration: moduleData.duration,
          course: course.id,
          publishedAt: new Date(),
        },
      });

      // Create classes for this module
      if (moduleData.classes) {
        for (const classData of moduleData.classes) {
          console.log(`  🎥 Creating class: ${classData.title}`);
          
          await strapi.entityService.create('api::class.class', {
            data: {
              title: classData.title,
              description: classData.description,
              shortDescription: classData.shortDescription,
              videoUrl: classData.videoUrl,
              videoId: classData.videoId,
              duration: classData.duration,
              status: classData.status,
              difficulty: classData.difficulty,
              order: classData.order,
              module: module.id,
              publishedAt: new Date(),
            },
          });
        }
      }

      // Create lessons for this module
      if (moduleData.lessons) {
        for (const lessonData of moduleData.lessons) {
          console.log(`  📖 Creating lesson: ${lessonData.title}`);
          
          await strapi.entityService.create('api::lesson.lesson', {
            data: {
              title: lessonData.title,
              description: lessonData.description,
              content: lessonData.content,
              duration: lessonData.duration,
              difficulty: lessonData.difficulty,
              status: lessonData.status,
              order: lessonData.order,
              module: module.id,
              publishedAt: new Date(),
            },
          });
        }
      }

      // Create contests for this module
      if (moduleData.contests) {
        for (const contestData of moduleData.contests) {
          console.log(`  🏆 Creating contest: ${contestData.title}`);
          
          await strapi.entityService.create('api::contest.contest', {
            data: {
              title: contestData.title,
              description: contestData.description,
              instructions: contestData.instructions,
              duration: contestData.duration,
              maxPoints: contestData.maxPoints,
              difficulty: contestData.difficulty,
              status: contestData.status,
              contestType: contestData.contestType,
              order: contestData.order,
              module: module.id,
              publishedAt: new Date(),
            },
          });
        }
      }
    }

    console.log('🎉 Database seeding completed successfully!');
    
  } catch (error) {
    console.error('❌ Error seeding database:', error);
    throw error;
  }
}

module.exports = seedDatabase;