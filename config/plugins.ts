export default () => ({
  'users-permissions': {
    config: {
      register: {
        allowedFields: ['username', 'email', 'password'],
      },
      jwt: {
        expiresIn: '7d',
      },
    },
  },
});
