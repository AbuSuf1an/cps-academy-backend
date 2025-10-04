# CPS Academy - Backend (Strapi)

This is the Strapi backend for the CPS Academy learning platform.

## Collection Types

### Course
- **title**: Course title (text)
- **slug**: URL-friendly identifier (UID from title)
- **description**: Rich text description
- **level**: Enum (Beginner, Intermediate, Advanced)
- **thumbnail**: Media upload
- **isPublic**: Boolean (public visibility)
- **modules**: One-to-many relation to Module

### Module
- **title**: Module title (text)
- **description**: Rich text description
- **order**: Integer (sorting order)
- **course**: Many-to-one relation to Course
- **classes**: One-to-many relation to Class

### Class
- **title**: Class title (text)
- **description**: Rich text description
- **videoUrl**: Video URL (text)
- **duration**: Duration in minutes (integer)
- **isFreePreview**: Boolean (free preview access)
- **order**: Integer (sorting order)
- **module**: Many-to-one relation to Module
- **topics**: One-to-many relation to Topic

### Topic
- **title**: Topic title (text)
- **order**: Integer (sorting order)
- **class**: Many-to-one relation to Class

### UserProfile
- **role**: Enum (NormalUser, Student, SocialMediaManager, Developer)
- **displayName**: Display name (text)
- **avatar**: Avatar image (media)
- **user**: One-to-one relation to User (Users & Permissions plugin)

## API Endpoints

### Public Endpoints (No Authentication Required)
- `GET /api/courses` - List all public courses with deep population
- `GET /api/courses/:id` - Get course details with deep population
- `GET /api/modules` - List all modules
- `GET /api/modules/:id` - Get module details
- `GET /api/classes` - List all classes
- `GET /api/classes/:id` - Get class details
- `GET /api/topics` - List all topics
- `GET /api/topics/:id` - Get topic details

### Protected Endpoints (Authentication Required)
- `POST /api/courses` - Create course (Admin only)
- `PUT /api/courses/:id` - Update course (Admin only)
- `DELETE /api/courses/:id` - Delete course (Admin only)
- `POST /api/user-profiles` - Create user profile
- `PUT /api/user-profiles/:id` - Update user profile
- `GET /api/user-profiles/user/:userId` - Get profile by user ID

## Features

### Deep Population
The Course API includes deep population that returns:
- Course details
- All modules with their classes and topics
- Thumbnail media URLs
- Proper data structure for frontend consumption

### Role-Based Access Control
- **NormalUser**: Can view public content
- **Student**: Can access enrolled courses
- **SocialMediaManager**: Read-only access to course content
- **Developer**: Full access to system endpoints

### Data Seeding
Sample data is automatically seeded in development mode including:
- 3 sample courses
- Multiple modules and classes
- Topics for demonstration

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run develop
   ```

3. **Access admin panel:**
   - URL: http://localhost:1337/admin
   - Create your admin account on first run

4. **API Documentation:**
   - Available at http://localhost:1337/documentation

## Environment Variables

Create a `.env` file with:
```env
DATABASE_URL=sqlite://./tmp/data.db
APP_KEYS=your-app-keys
API_TOKEN_SALT=your-api-token-salt
ADMIN_JWT_SECRET=your-admin-jwt-secret
JWT_SECRET=your-jwt-secret
HOST=0.0.0.0
PORT=1337
PUBLIC_URL=http://localhost:1337
FRONTEND_URL=http://localhost:3000
```

## Database

By default, uses SQLite for development. For production, configure PostgreSQL:

```env
DATABASE_URL=postgresql://username:password@localhost:5432/cps_academy
```