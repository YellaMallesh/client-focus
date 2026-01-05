# iFocus Info Solutions Website

## Overview
A comprehensive IT training institute website for iFocus Info Solutions, featuring course listings, services, placement information, and contact functionality.

## Project Structure
```
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   │   ├── header.tsx          # Navigation with mega menu
│   │   │   ├── footer.tsx          # Site footer
│   │   │   ├── course-card.tsx     # Course display card
│   │   │   ├── service-card.tsx    # Service display card
│   │   │   ├── testimonial-card.tsx # Testimonial card
│   │   │   ├── stats-section.tsx   # Statistics display
│   │   │   ├── partner-logos.tsx   # Partner logos grid
│   │   │   ├── upcoming-batches.tsx # Batch schedule table
│   │   │   └── theme-toggle.tsx    # Dark/light mode toggle
│   │   ├── pages/          # Route pages
│   │   │   ├── home.tsx            # Homepage
│   │   │   ├── about.tsx           # About us page
│   │   │   ├── courses.tsx         # Course listing page
│   │   │   ├── course-detail.tsx   # Individual course page
│   │   │   ├── services.tsx        # Services page
│   │   │   ├── placements.tsx      # Placements page
│   │   │   ├── career.tsx          # Career guidance page
│   │   │   └── contact.tsx         # Contact form page
│   │   ├── lib/            # Utilities
│   │   │   ├── queryClient.ts      # React Query setup
│   │   │   ├── theme.tsx           # Theme provider
│   │   │   └── utils.ts            # Utility functions
│   │   ├── App.tsx         # Main application
│   │   └── index.css       # Tailwind styles
├── server/                 # Backend Express server
│   ├── routes.ts           # API endpoints
│   └── storage.ts          # In-memory storage
└── shared/                 # Shared types and data
    └── schema.ts           # Data models and static data
```

## Key Features
- **Multi-page website** with responsive design
- **Course catalog** with 50+ courses across 10 categories
- **Mega navigation menu** for easy course discovery
- **Dark/light mode** toggle
- **Contact form** with validation
- **Placement information** with tabs for current/recent/future opportunities
- **Service listings** with detailed descriptions

## Tech Stack
- **Frontend**: React, TypeScript, Tailwind CSS, Shadcn UI, Wouter, React Query
- **Backend**: Express.js, In-memory storage
- **Build**: Vite

## API Endpoints
- `GET /api/courses` - Get all courses (with optional filters)
- `GET /api/courses/:id` - Get single course
- `GET /api/categories` - Get course categories
- `GET /api/services` - Get all services
- `GET /api/testimonials` - Get testimonials
- `GET /api/partners` - Get placement partners
- `GET /api/stats` - Get statistics
- `POST /api/contact` - Submit contact form

## Running the Application
The application runs on port 5000 with `npm run dev`.

## Recent Changes
- Initial implementation of full website with all pages
- Implemented contact form with backend storage
- Added dark mode support
- Created responsive navigation with mega menu
