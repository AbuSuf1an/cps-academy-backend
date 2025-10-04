/**
 * Lifecycle callbacks for the User model
 */

export default {
  async afterCreate(event) {
    const { result } = event;
    
    try {
      // Auto-create UserProfile with NormalUser role
      await strapi.entityService.create('api::user-profile.user-profile', {
        data: {
          role: 'NormalUser',
          displayName: result.username || result.email.split('@')[0],
          user: result.id,
        },
      });
      
      console.log(`UserProfile created for user ${result.email}`);
    } catch (error) {
      console.error('Error creating UserProfile:', error);
    }
  },
};