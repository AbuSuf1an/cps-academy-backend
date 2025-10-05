// Script to set up permissions for course API
const axios = require('axios');

async function setupPermissions() {
  console.log('🔧 Setting up course API permissions...');
  
  // This would normally be done through the Strapi admin or via a seeder
  // For now, let's inform the user what needs to be done
  
  console.log(`
📋 To fix the 404 error, you need to:

1. Start Strapi: cd /Users/abusufian/dev/projects/cps-academy/backend && npm run develop
2. Go to: http://localhost:1337/admin
3. Navigate to: Settings → Users & Permissions Plugin → Roles → Public
4. In the "Permissions" section, find "Course" and enable:
   - find (allows GET /api/courses)
   - findOne (allows GET /api/courses/:id)
5. Save the changes

Alternatively, create some courses in the admin panel at:
Content Manager → Course → Create new entry

The 404 error is happening because either:
- No published courses exist in the database
- The public role doesn't have permission to access the course API endpoints
`);
}

setupPermissions();