# iFocus Info Solutions - Design Guidelines

## Design Approach
**Hybrid Approach**: Professional EdTech aesthetic (inspired by Coursera, LinkedIn Learning) with modern SaaS trust-building elements (Stripe, HubSpot). Emphasizes credibility, course clarity, and conversion.

## Core Design Principles
1. **Trust & Authority**: Professional, clean layouts that establish educational credibility
2. **Clear Navigation**: Multiple course categories require intuitive categorization
3. **Conversion-Focused**: Guide users toward enrollment, contact, and placement information
4. **Content Hierarchy**: Balance between training programs, services, and placement success

---

## Typography System
- **Primary Font**: Inter or DM Sans (Google Fonts) - modern, professional readability
- **Accent Font**: Space Grotesk for headings - distinctive but professional
- **Hierarchy**:
  - Hero Headlines: 3xl-6xl, font-bold
  - Section Titles: 2xl-4xl, font-semibold
  - Course/Service Cards: xl-2xl, font-medium
  - Body Text: base-lg, font-normal
  - Captions/Meta: sm-base, font-normal

## Spacing System
**Tailwind Units**: Use 4, 6, 8, 12, 16, 20 for consistent rhythm
- Section padding: py-16 to py-24
- Card spacing: p-6 to p-8
- Element gaps: gap-4, gap-6, gap-8
- Container max-width: max-w-7xl

---

## Layout Architecture

### Homepage Structure (8-10 sections)
1. **Hero Section** (80vh): Large background image showing modern classroom/training environment with students engaged. Overlay with primary headline "Transform Your Tech Career" + enrollment CTA + trust indicators (placement stats: "95% Placement Rate" / "500+ Alumni Hired")

2. **Course Categories Grid** (6 columns → 3 tablet → 2 mobile): Visual cards with icons for each major category (Programming, Web Tech, Database, Data Science, Cybersecurity, Cloud, Testing, Analytics, Digital Marketing, Design). Hover effects reveal course count.

3. **Featured Courses Carousel**: 3-4 cards visible, showcasing top programs with badges ("Most Popular", "New Batch Starting"). Include course duration, batch start date, brief description.

4. **Services Overview** (3-column grid): Corporate Training, Staffing Solutions, Mobile/Web Development with supporting icons and 2-3 line descriptions. Each card links to Services page.

5. **Placement Success**: Split section - left side shows placement statistics (grid of key metrics), right side displays recent placement logos in organized grid. Include "View All Placements" CTA.

6. **Placement Partner Logos**: Clean 6-column grid (responsive) featuring Zepto, VBLP, Hashtag, etc. with subtle grayscale hover effect.

7. **Upcoming Batches Table**: Clean, scannable table showing Course Name | Start Date | Duration | Seats Available with "Enroll Now" buttons.

8. **Testimonials**: 3-column grid with student photos, quotes, current company logos. Authentic imagery reinforces success stories.

9. **Why Choose iFocus**: 4-column icon grid highlighting differentiators (Expert Trainers, Hands-on Projects, Placement Support, Flexible Batches).

10. **CTA Section**: Strong enrollment drive with contact form preview or direct "Schedule Free Counseling" button.

### Navigation
- **Header**: Sticky, subtle shadow on scroll. Logo left, primary nav center (Home, Courses mega-menu, Services, Placements, Career, Contact), "Enroll Now" CTA button right.
- **Mega Menu** for Courses: Organized by category columns, quick access to all programs.
- **Footer**: 4-column layout (Courses, Services, Company, Contact) + newsletter signup + social links + placement partner mini-grid.

### Internal Pages
- **All Courses**: Filter sidebar (category, duration, format) + card grid with search
- **Individual Course**: Hero with course title/image → Curriculum accordion → Batch schedule → Instructor info → Related courses
- **Services**: Individual service pages with case studies, process flow, contact forms
- **Placements**: Three tabs (Current Openings, Recent Placements gallery, Upcoming Opportunities) with filtering
- **About**: Team grid, timeline/milestones, values cards, facilities images
- **Contact**: Split layout - form left, map + contact details right

---

## Component Library

### Cards
- **Course Cards**: Image top, category badge, title, duration/batch info, pricing, CTA button. Subtle shadow, border on hover.
- **Service Cards**: Icon, heading, description, "Learn More" link. Hover lift effect.
- **Placement Cards**: Company logo, student name/photo, role, testimonial quote.

### Forms
- Clean input fields with floating labels, clear focus states
- Multi-step enrollment forms with progress indicators
- Inline validation with helpful error messages

### CTAs
- Primary: Solid background, white text, medium rounded corners (rounded-lg)
- Secondary: Outlined style
- Blurred background for buttons over hero images (backdrop-blur-md bg-white/20)

### Badges/Pills
- Course categories, "New", "Popular", batch status indicators
- Small rounded-full pills with category-specific accent styling

### Data Display
- Upcoming batches: Clean table with alternating row backgrounds
- Statistics: Large numbers with descriptive labels in grid cards
- Partner logos: Organized grid with consistent sizing, grayscale by default

---

## Images Strategy

### Required Images
1. **Hero Image**: Modern training classroom, diverse students collaborating on laptops (landscape, high-quality)
2. **Course Category Icons**: Use Font Awesome Pro or Heroicons for consistency
3. **Service Icons**: Custom or Heroicons matching course icon style
4. **Placement Photos**: Real student headshots (professional, consistent styling)
5. **About/Facilities**: Classroom photos, infrastructure, training labs
6. **Instructor Photos**: Professional headshots for course pages

### Icon Library
**Heroicons** (via CDN) - consistent, modern, perfect for EdTech aesthetic

---

## Accessibility
- Focus states: Visible 2px outline on all interactive elements
- Form labels: Always visible or properly floating
- Color contrast: WCAG AA minimum on all text
- Semantic HTML structure throughout
- Alt text for all meaningful images

---

## Key Design Differentiators
- **Data-Driven Trust**: Prominent placement statistics and partner logos
- **Batch Urgency**: Visible upcoming batch dates create enrollment momentum
- **Organized Complexity**: Clean categorization makes extensive course catalog navigable
- **Professional Credibility**: Polished, corporate-friendly aesthetic suitable for B2B training
- **Multi-Path Navigation**: Clear paths for students, corporates, and job seekers

This creates a comprehensive, conversion-optimized training institute website balancing extensive course offerings with professional service credibility.