'use strict';

/**
 * course controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::course.course', ({ strapi }) => ({
  // Custom find method with deep population
  async find(ctx) {
    const { data, meta } = await super.find(ctx, {
      populate: {
        thumbnail: true,
        modules: {
          populate: {
            classes: {
              populate: {
                topics: true,
              },
            },
          },
        },
      },
      filters: {
        isPublic: true, // Only show public courses
      },
    });

    // Transform data to remove sensitive fields and structure for frontend
    const transformedData = data.map(course => ({
      id: course.id,
      title: course.attributes.title,
      slug: course.attributes.slug,
      description: course.attributes.description,
      level: course.attributes.level,
      thumbnail: course.attributes.thumbnail?.data?.attributes?.url || null,
      isPublic: course.attributes.isPublic,
      modules: course.attributes.modules?.data?.map(module => ({
        id: module.id,
        title: module.attributes.title,
        description: module.attributes.description,
        order: module.attributes.order,
        classes: module.attributes.classes?.data?.map(classItem => ({
          id: classItem.id,
          title: classItem.attributes.title,
          description: classItem.attributes.description,
          videoUrl: classItem.attributes.videoUrl,
          duration: classItem.attributes.duration,
          isFreePreview: classItem.attributes.isFreePreview,
          order: classItem.attributes.order,
          topics: classItem.attributes.topics?.data?.map(topic => ({
            id: topic.id,
            title: topic.attributes.title,
            order: topic.attributes.order,
          })) || [],
        })) || [],
      })) || [],
    }));

    return { data: transformedData, meta };
  },

  // Custom findOne method with deep population
  async findOne(ctx) {
    const { data, meta } = await super.findOne(ctx, {
      populate: {
        thumbnail: true,
        modules: {
          populate: {
            classes: {
              populate: {
                topics: true,
              },
            },
          },
        },
      },
    });

    if (!data) {
      return ctx.notFound('Course not found');
    }

    // Check if course is public or user has access
    if (!data.attributes.isPublic) {
      return ctx.forbidden('Access denied to private course');
    }

    // Transform data similar to find method
    const transformedData = {
      id: data.id,
      title: data.attributes.title,
      slug: data.attributes.slug,
      description: data.attributes.description,
      level: data.attributes.level,
      thumbnail: data.attributes.thumbnail?.data?.attributes?.url || null,
      isPublic: data.attributes.isPublic,
      modules: data.attributes.modules?.data?.map(module => ({
        id: module.id,
        title: module.attributes.title,
        description: module.attributes.description,
        order: module.attributes.order,
        classes: module.attributes.classes?.data?.map(classItem => ({
          id: classItem.id,
          title: classItem.attributes.title,
          description: classItem.attributes.description,
          videoUrl: classItem.attributes.videoUrl,
          duration: classItem.attributes.duration,
          isFreePreview: classItem.attributes.isFreePreview,
          order: classItem.attributes.order,
          topics: classItem.attributes.topics?.data?.map(topic => ({
            id: topic.id,
            title: topic.attributes.title,
            order: topic.attributes.order,
          })) || [],
        })) || [],
      })) || [],
    };

    return { data: transformedData, meta };
  },
}));
