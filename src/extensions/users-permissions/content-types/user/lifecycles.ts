/**
 * Lifecycle callbacks for the User model
 */

export default {
  async afterCreate(event) {
    const { result } = event;
    
    try {
      // Auto-confirm user for development (skip email confirmation)
      if (!result.confirmed) {
        await strapi.plugins['users-permissions'].services.user.edit(result.id, {
          confirmed: true,
        });
        console.log(`User ${result.email} auto-confirmed`);
      }

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
      console.error('Error in user lifecycle:', error);
    }
  },
};