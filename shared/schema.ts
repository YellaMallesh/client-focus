import { sql } from "drizzle-orm";
import { pgTable, text, varchar, integer, timestamp, boolean } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

// Course Categories
export const courseCategories = [
  { id: "programming", name: "Programming", icon: "Code2" },
  { id: "web-technologies", name: "Web Technologies", icon: "Globe" },
  { id: "database", name: "Database", icon: "Database" },
  { id: "data-science", name: "Data Science", icon: "Brain" },
  { id: "cyber-security", name: "Cyber Security", icon: "Shield" },
  { id: "cloud-computing", name: "Cloud Computing", icon: "Cloud" },
  { id: "software-testing", name: "Software Testing", icon: "TestTube" },
  { id: "data-analytics", name: "Data Analytics", icon: "BarChart3" },
  { id: "digital-marketing", name: "Digital Marketing", icon: "Megaphone" },
  { id: "designing", name: "Designing", icon: "Palette" },
] as const;

export type CourseCategory = typeof courseCategories[number];

// Course Type
export interface Course {
  id: string;
  name: string;
  category: string;
  description: string;
  duration: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  popular?: boolean;
  new?: boolean;
}

// All courses data
export const allCourses: Course[] = [
  // Programming
  { id: "java", name: "Java", category: "programming", description: "Master object-oriented programming with Java", duration: "3 months", level: "Beginner" },
  { id: "python", name: "Python", category: "programming", description: "Learn Python for automation, web dev, and data science", duration: "2 months", level: "Beginner", popular: true },
  { id: "c-cpp", name: "C & C++", category: "programming", description: "Foundation programming languages for system development", duration: "3 months", level: "Beginner" },
  { id: "csharp", name: "C#", category: "programming", description: "Build Windows applications and games with C#", duration: "3 months", level: "Intermediate" },
  { id: "javascript", name: "JavaScript", category: "programming", description: "The language of the web for interactive applications", duration: "2 months", level: "Beginner", popular: true },
  { id: "data-structures", name: "Data Structures", category: "programming", description: "Master algorithms and data structures for interviews", duration: "2 months", level: "Intermediate" },
  { id: "r-language", name: "Program in R", category: "programming", description: "Statistical computing and graphics with R", duration: "2 months", level: "Intermediate" },

  // Web Technologies
  { id: "html-css", name: "HTML/CSS", category: "web-technologies", description: "Build responsive web pages from scratch", duration: "1 month", level: "Beginner" },
  { id: "reactjs", name: "React.js", category: "web-technologies", description: "Build modern single-page applications", duration: "2 months", level: "Intermediate", popular: true },
  { id: "angular", name: "Angular", category: "web-technologies", description: "Enterprise-grade frontend framework", duration: "3 months", level: "Intermediate" },
  { id: "php", name: "PHP", category: "web-technologies", description: "Server-side scripting for web development", duration: "2 months", level: "Beginner" },
  { id: "mean-stack", name: "MEAN Stack", category: "web-technologies", description: "Full-stack development with MongoDB, Express, Angular, Node", duration: "4 months", level: "Advanced", new: true },
  { id: "mern-stack", name: "MERN Stack", category: "web-technologies", description: "Full-stack development with MongoDB, Express, React, Node", duration: "4 months", level: "Advanced", popular: true },

  // Database
  { id: "oracle", name: "Oracle", category: "database", description: "Enterprise database management and SQL", duration: "2 months", level: "Intermediate" },
  { id: "mysql", name: "MySQL", category: "database", description: "Open-source relational database management", duration: "2 months", level: "Beginner" },
  { id: "mongodb", name: "MongoDB", category: "database", description: "NoSQL database for modern applications", duration: "2 months", level: "Intermediate" },
  { id: "sql-server", name: "SQL Server", category: "database", description: "Microsoft's enterprise database solution", duration: "2 months", level: "Intermediate" },
  { id: "postgresql", name: "PostgreSQL", category: "database", description: "Advanced open-source relational database", duration: "2 months", level: "Intermediate" },

  // Data Science
  { id: "ai", name: "Artificial Intelligence", category: "data-science", description: "Build intelligent systems and AI applications", duration: "4 months", level: "Advanced", new: true },
  { id: "data-science-python", name: "Data Science with Python", category: "data-science", description: "Complete data science workflow with Python", duration: "4 months", level: "Intermediate", popular: true },
  { id: "deep-learning", name: "Deep Learning", category: "data-science", description: "Neural networks and deep learning architectures", duration: "3 months", level: "Advanced" },
  { id: "machine-learning", name: "Machine Learning with Python", category: "data-science", description: "Build predictive models and ML pipelines", duration: "3 months", level: "Advanced", popular: true },

  // Cyber Security
  { id: "soc", name: "SOC", category: "cyber-security", description: "Security Operations Center training", duration: "3 months", level: "Intermediate" },
  { id: "splunk", name: "Splunk", category: "cyber-security", description: "SIEM tool for security monitoring", duration: "2 months", level: "Intermediate" },
  { id: "penetration-testing", name: "Penetration & Vulnerability Testing", category: "cyber-security", description: "Ethical hacking and security assessment", duration: "3 months", level: "Advanced", new: true },

  // Cloud Computing
  { id: "aws", name: "AWS", category: "cloud-computing", description: "Amazon Web Services cloud platform", duration: "3 months", level: "Intermediate", popular: true },
  { id: "azure", name: "Microsoft Azure", category: "cloud-computing", description: "Microsoft's cloud computing platform", duration: "3 months", level: "Intermediate" },
  { id: "gcp", name: "Google Cloud Platform", category: "cloud-computing", description: "Google's cloud infrastructure and services", duration: "3 months", level: "Intermediate" },
  { id: "devops", name: "DevOps", category: "cloud-computing", description: "CI/CD, containerization, and automation", duration: "3 months", level: "Advanced", popular: true },

  // Software Testing
  { id: "manual-testing", name: "Manual Testing", category: "software-testing", description: "Fundamentals of software quality assurance", duration: "2 months", level: "Beginner" },
  { id: "automation-testing", name: "Automation Testing", category: "software-testing", description: "Automated testing frameworks and tools", duration: "3 months", level: "Intermediate", popular: true },
  { id: "etl", name: "ETL Testing", category: "software-testing", description: "Extract, Transform, Load testing", duration: "2 months", level: "Intermediate" },
  { id: "loadrunner", name: "LoadRunner", category: "software-testing", description: "Performance testing with LoadRunner", duration: "2 months", level: "Intermediate" },
  { id: "selenium", name: "Selenium", category: "software-testing", description: "Web application automation testing", duration: "2 months", level: "Intermediate", popular: true },
  { id: "tosca", name: "TOSCA", category: "software-testing", description: "Model-based test automation", duration: "2 months", level: "Intermediate" },

  // Data Analytics
  { id: "advanced-excel", name: "Advanced Excel", category: "data-analytics", description: "Master Excel for data analysis", duration: "1 month", level: "Beginner" },
  { id: "sql-analytics", name: "SQL for Analytics", category: "data-analytics", description: "SQL queries for business intelligence", duration: "2 months", level: "Beginner" },
  { id: "power-bi", name: "Power BI", category: "data-analytics", description: "Business intelligence and data visualization", duration: "2 months", level: "Intermediate", popular: true },
  { id: "tableau", name: "Tableau", category: "data-analytics", description: "Visual analytics platform", duration: "2 months", level: "Intermediate", popular: true },

  // Digital Marketing
  { id: "wordpress", name: "WordPress", category: "digital-marketing", description: "Build websites with WordPress CMS", duration: "1 month", level: "Beginner" },
  { id: "seo", name: "SEO", category: "digital-marketing", description: "Search engine optimization strategies", duration: "2 months", level: "Beginner", popular: true },
  { id: "smm", name: "Social Media Marketing", category: "digital-marketing", description: "Marketing on social media platforms", duration: "2 months", level: "Beginner" },
  { id: "google-ads", name: "Google Ads", category: "digital-marketing", description: "Pay-per-click advertising mastery", duration: "1 month", level: "Intermediate" },
  { id: "content-marketing", name: "Content Marketing", category: "digital-marketing", description: "Content strategy and creation", duration: "1 month", level: "Beginner" },

  // Designing
  { id: "graphic-design", name: "Graphic Design", category: "designing", description: "Visual communication and design principles", duration: "3 months", level: "Beginner", popular: true },
  { id: "ui-ux", name: "UI/UX Design", category: "designing", description: "User interface and experience design", duration: "3 months", level: "Intermediate", popular: true },
  { id: "adobe-photoshop", name: "Adobe Photoshop", category: "designing", description: "Photo editing and digital imaging", duration: "2 months", level: "Beginner" },
  { id: "web-designing", name: "Web Designing", category: "designing", description: "Creative web design and prototyping", duration: "2 months", level: "Beginner" },
  { id: "figma", name: "Figma", category: "designing", description: "Collaborative interface design tool", duration: "1 month", level: "Beginner", new: true },
];

// Services
export interface Service {
  id: string;
  name: string;
  description: string;
  icon: string;
}

export const services: Service[] = [
  { id: "mobile-dev", name: "Mobile Application Development", description: "Custom iOS and Android applications built with modern frameworks", icon: "Smartphone" },
  { id: "web-dev", name: "Web Development", description: "Full-stack web solutions using latest technologies", icon: "Globe" },
  { id: "staffing", name: "Staffing Solutions", description: "Find the right talent for your organization", icon: "Users" },
  { id: "payroll", name: "Payroll Management", description: "Streamlined payroll processing and compliance", icon: "Wallet" },
  { id: "digital-marketing-service", name: "Digital Marketing", description: "Comprehensive digital marketing strategies", icon: "TrendingUp" },
  { id: "corporate-training", name: "Corporate Training", description: "Customized training programs for enterprises", icon: "Building2" },
  { id: "campus-training", name: "Campus Training", description: "Industry-ready training for students", icon: "GraduationCap" },
  { id: "workshops", name: "Workshops", description: "Hands-on workshops on trending technologies", icon: "Wrench" },
  { id: "internships", name: "Internships", description: "Real-world project experience for students", icon: "Briefcase" },
  { id: "csr-programs", name: "CSR Skill Programs", description: "Corporate Social Responsibility initiatives for community skill development and empowerment", icon: "Heart" },
  { id: "govt-programs", name: "Government Skill Programs", description: "Partnership programs with government bodies for employment-focused skill development", icon: "Landmark" },
];

// Placement Partners
export const placementPartners = [
  "Zepto",
  "VBLP Technologies",
  "Hashtag",
  "BPO Convergences",
  "JD Overseas",
  "Ushnik Technologies",
];

// Companies & Clients
export interface CompanyClient {
  id: string;
  name: string;
  type: "corporate" | "startup" | "educational";
}

export const companiesAndClients: CompanyClient[] = [
  { id: "1", name: "Zepto", type: "startup" },
  { id: "2", name: "VBLP Technologies", type: "corporate" },
  { id: "3", name: "Hashtag", type: "corporate" },
  { id: "4", name: "BPO Convergences", type: "corporate" },
  { id: "5", name: "JD Overseas", type: "corporate" },
  { id: "6", name: "Ushnik Technologies", type: "startup" },
];

// Upcoming Batch
export interface UpcomingBatch {
  id: string;
  courseName: string;
  startDate: string;
  duration: string;
  seatsAvailable: number;
  mode: "Online" | "Offline" | "Hybrid";
}

// Testimonials
export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  quote: string;
  avatarInitials: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Priya Sharma",
    role: "Software Developer",
    company: "Zepto",
    quote: "iFocus helped me transition from a non-tech background to a software developer role. The hands-on training and placement support were excellent.",
    avatarInitials: "PS"
  },
  {
    id: "2",
    name: "Rahul Kumar",
    role: "Data Analyst",
    company: "VBLP Technologies",
    quote: "The Data Analytics course at iFocus gave me practical skills that I use daily. The trainers are industry experts who really care about student success.",
    avatarInitials: "RK"
  },
  {
    id: "3",
    name: "Anjali Patel",
    role: "Cloud Engineer",
    company: "Hashtag",
    quote: "AWS certification training at iFocus was comprehensive and well-structured. I cleared my certification on the first attempt!",
    avatarInitials: "AP"
  },
];

// Contact Form
export interface ContactForm {
  id?: string;
  name: string;
  email: string;
  phone: string;
  course?: string;
  message: string;
}

export const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  course: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

// Stats
export const stats = [
  { label: "Students Trained", value: "5000+" },
  { label: "Placement Rate", value: "95%" },
  { label: "Hiring Partners", value: "100+" },
  { label: "Expert Trainers", value: "50+" },
];

// Why Choose Us
export const whyChooseUs = [
  { title: "Expert Trainers", description: "Learn from industry professionals with years of experience", icon: "Award" },
  { title: "Hands-on Projects", description: "Work on real-world projects to build your portfolio", icon: "Rocket" },
  { title: "Placement Support", description: "100% placement assistance with mock interviews", icon: "Target" },
  { title: "Flexible Batches", description: "Weekend and weekday batches to suit your schedule", icon: "Calendar" },
];
