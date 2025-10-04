/**
 * Lifecycle callbacks for the UserProfile model
 */

export default {
  async beforeUpdate(event) {
    const { data, where } = event.params;
    
    // Check if role is being updated to Student
    if (data.role === 'Student') {
      try {
        // Get current user profile to check existing role
        const currentProfile = await strapi.entityService.findOne(
          'api::user-profile.user-profile',
          where.id,
          {
            populate: ['enrolledCourses'],
          }
        );
        
        // Only validate if user is being upgraded to Student (not already a Student)
        if (currentProfile && currentProfile.role !== 'Student') {
          // Validate that user has enrolled courses
          const enrolledCourses = (currentProfile as any).enrolledCourses;
          if (!enrolledCourses || enrolledCourses.length === 0) {
            throw new Error('Cannot upgrade to Student role: User must be enrolled in at least one course');
          }
          
          console.log(`User ${currentProfile.id} upgraded to Student with ${enrolledCourses.length} enrolled courses`);
        }
      } catch (error) {
        console.error('Error validating Student role upgrade:', error);
        throw error;
      }
    }
  },

  async afterUpdate(event) {
    const { result } = event;
    
    if (result.role === 'Student') {
      console.log(`UserProfile ${result.id} successfully upgraded to Student role`);
    }
  },
};