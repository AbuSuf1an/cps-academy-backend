'use strict';

/**
 * Course seeder with sample data
 */

module.exports = {
  async seed({ strapi }) {
    console.log('Seeding courses...');

    // Create sample courses
    const courses = await Promise.all([
      strapi.entityService.create('api::course.course', {
        data: {
          title: 'Complete Web Development Bootcamp',
          slug: 'complete-web-development-bootcamp',
          description: `
            <p>Master modern web development with this comprehensive bootcamp. Learn HTML, CSS, JavaScript, React, Node.js, and build real-world projects.</p>
            <h3>What you'll learn:</h3>
            <ul>
              <li>HTML5 and CSS3 fundamentals</li>
              <li>JavaScript ES6+ features</li>
              <li>React.js for frontend development</li>
              <li>Node.js and Express for backend</li>
              <li>Database design with MongoDB</li>
              <li>Deployment and DevOps basics</li>
            </ul>
          `,
          level: 'Beginner',
          isPublic: true,
          publishedAt: new Date(), // Publish the course
        },
      }),
      strapi.entityService.create('api::course.course', {
        data: {
          title: 'Advanced React Patterns',
          slug: 'advanced-react-patterns',
          description: `
            <p>Deep dive into advanced React concepts, performance optimization, and modern patterns used in production applications.</p>
            <h3>What you'll learn:</h3>
            <ul>
              <li>Advanced React hooks and patterns</li>
              <li>Performance optimization techniques</li>
              <li>State management with Context and Redux</li>
              <li>Testing strategies and best practices</li>
              <li>Code splitting and lazy loading</li>
              <li>Server-side rendering with Next.js</li>
            </ul>
          `,
          level: 'Advanced',
          isPublic: true,
          publishedAt: new Date(), // Publish the course
        },
      }),
      strapi.entityService.create('api::course.course', {
        data: {
          title: 'Full-Stack JavaScript Mastery',
          slug: 'full-stack-javascript-mastery',
          description: `
            <p>Build complete applications with modern JavaScript frameworks and backend technologies. Master the full development stack.</p>
            <h3>What you'll learn:</h3>
            <ul>
              <li>Modern JavaScript (ES2023+)</li>
              <li>React and Vue.js frameworks</li>
              <li>Node.js and Express.js backend</li>
              <li>Database design and optimization</li>
              <li>API design and documentation</li>
              <li>Authentication and security</li>
            </ul>
          `,
          level: 'Intermediate',
          isPublic: true,
        },
      }),
    ]);

    console.log(`Created ${courses.length} courses`);

    // Create modules for the first course
    const webDevCourse = courses[0];
    const modules = await Promise.all([
      strapi.entityService.create('api::module.module', {
        data: {
          title: 'HTML & CSS Fundamentals',
          description: `
            <p>Learn the building blocks of web development with HTML and CSS.</p>
            <h3>Module Overview:</h3>
            <p>This module covers the essential HTML elements and CSS properties needed to create beautiful, responsive web pages.</p>
          `,
          order: 1,
          course: webDevCourse.id,
        },
      }),
      strapi.entityService.create('api::module.module', {
        data: {
          title: 'JavaScript Basics',
          description: `
            <p>Master the fundamentals of JavaScript programming language.</p>
            <h3>Module Overview:</h3>
            <p>Learn variables, functions, objects, and control structures in JavaScript.</p>
          `,
          order: 2,
          course: webDevCourse.id,
        },
      }),
      strapi.entityService.create('api::module.module', {
        data: {
          title: 'React Introduction',
          description: `
            <p>Introduction to React.js library for building user interfaces.</p>
            <h3>Module Overview:</h3>
            <p>Learn component-based architecture and React fundamentals.</p>
          `,
          order: 3,
          course: webDevCourse.id,
        },
      }),
    ]);

    console.log(`Created ${modules.length} modules`);

    // Create classes for the first module
    const htmlModule = modules[0];
    const classes = await Promise.all([
      strapi.entityService.create('api::class.class', {
        data: {
          title: 'HTML Structure and Elements',
          description: `
            <p>Learn about HTML document structure and essential elements.</p>
            <h3>Class Content:</h3>
            <ul>
              <li>HTML document structure</li>
              <li>Common HTML elements</li>
              <li>Semantic HTML</li>
              <li>Forms and inputs</li>
            </ul>
          `,
          videoUrl: 'https://example.com/video1',
          duration: 45,
          isFreePreview: true,
          order: 1,
          module: htmlModule.id,
        },
      }),
      strapi.entityService.create('api::class.class', {
        data: {
          title: 'CSS Styling and Layout',
          description: `
            <p>Master CSS for styling and layout of web pages.</p>
            <h3>Class Content:</h3>
            <ul>
              <li>CSS selectors and properties</li>
              <li>Box model and positioning</li>
              <li>Flexbox and Grid layout</li>
              <li>Responsive design principles</li>
            </ul>
          `,
          videoUrl: 'https://example.com/video2',
          duration: 60,
          isFreePreview: true,
          order: 2,
          module: htmlModule.id,
        },
      }),
    ]);

    console.log(`Created ${classes.length} classes`);

    // Create topics for the first class
    const htmlClass = classes[0];
    const topics = await Promise.all([
      strapi.entityService.create('api::topic.topic', {
        data: {
          title: 'HTML Document Structure',
          order: 1,
          class: htmlClass.id,
        },
      }),
      strapi.entityService.create('api::topic.topic', {
        data: {
          title: 'Head and Body Elements',
          order: 2,
          class: htmlClass.id,
        },
      }),
      strapi.entityService.create('api::topic.topic', {
        data: {
          title: 'Common HTML Tags',
          order: 3,
          class: htmlClass.id,
        },
      }),
    ]);

    console.log(`Created ${topics.length} topics`);
    console.log('Course seeding completed!');
  },
};
