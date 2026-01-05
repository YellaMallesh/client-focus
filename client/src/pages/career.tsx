import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { UpcomingBatches } from "@/components/upcoming-batches";
import { courseCategories, allCourses } from "@shared/schema";
import {
  ArrowRight,
  CheckCircle,
  Rocket,
  Target,
  TrendingUp,
  Award,
  BookOpen,
  Users,
  Briefcase,
  Code2,
  Globe,
  Database,
  Brain,
  Shield,
  Cloud,
  TestTube,
  BarChart3,
  Megaphone,
  Palette,
} from "lucide-react";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Code2,
  Globe,
  Database,
  Brain,
  Shield,
  Cloud,
  TestTube,
  BarChart3,
  Megaphone,
  Palette,
};

const careerPaths = [
  {
    title: "Software Development",
    description: "Build applications and systems",
    courses: ["Java", "Python", "MERN Stack", "React.js"],
    salary: "4-15 LPA",
    growth: "22% YoY",
  },
  {
    title: "Data Science & AI",
    description: "Analyze data and build AI models",
    courses: ["Data Science", "Machine Learning", "Deep Learning"],
    salary: "6-20 LPA",
    growth: "35% YoY",
  },
  {
    title: "Cloud & DevOps",
    description: "Manage cloud infrastructure",
    courses: ["AWS", "Azure", "DevOps", "GCP"],
    salary: "5-18 LPA",
    growth: "28% YoY",
  },
  {
    title: "Quality Assurance",
    description: "Ensure software quality",
    courses: ["Selenium", "Automation Testing", "Manual Testing"],
    salary: "3-12 LPA",
    growth: "15% YoY",
  },
];

const learningSteps = [
  {
    step: 1,
    title: "Choose Your Path",
    description: "Select a career track based on your interests and goals",
    icon: Target,
  },
  {
    step: 2,
    title: "Enroll in Course",
    description: "Join our industry-expert led training program",
    icon: BookOpen,
  },
  {
    step: 3,
    title: "Learn & Practice",
    description: "Master skills through hands-on projects",
    icon: Code2,
  },
  {
    step: 4,
    title: "Get Certified",
    description: "Earn industry-recognized certification",
    icon: Award,
  },
  {
    step: 5,
    title: "Get Placed",
    description: "Land your dream job with our placement support",
    icon: Briefcase,
  },
];

export default function Career() {
  return (
    <div className="flex flex-col" data-testid="page-career">
      {/* Hero */}
      <section className="py-16 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <Badge variant="secondary" className="mb-4">
              Career
            </Badge>
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              Shape Your <span className="text-gradient">Future</span> With Us
            </h1>
            <p className="text-lg text-muted-foreground">
              Explore career paths, discover in-demand skills, and find the right
              course to accelerate your journey in tech.
            </p>
          </div>
        </div>
      </section>

      {/* Career Paths */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <Badge variant="secondary" className="mb-4">
              Career Paths
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Popular Career Tracks
            </h2>
            <p className="text-muted-foreground">
              Choose a path that aligns with your interests and career goals
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {careerPaths.map((path, index) => (
              <Card
                key={index}
                className="overflow-visible hover-elevate"
                data-testid={`career-path-${index}`}
              >
                <CardContent className="p-6 space-y-4">
                  <div className="flex justify-between items-start gap-4">
                    <div>
                      <h3 className="font-serif text-xl font-semibold">
                        {path.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {path.description}
                      </p>
                    </div>
                    <Badge variant="secondary" className="flex-shrink-0">
                      <TrendingUp className="h-3 w-3 mr-1" />
                      {path.growth}
                    </Badge>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {path.courses.map((course) => (
                      <Badge key={course} variant="outline" className="text-xs">
                        {course}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex items-center justify-between pt-4 border-t">
                    <div>
                      <p className="text-xs text-muted-foreground">Salary Range</p>
                      <p className="font-semibold text-primary">{path.salary}</p>
                    </div>
                    <Link href="/courses">
                      <Button variant="outline" size="sm" className="gap-1">
                        Explore
                        <ArrowRight className="h-3 w-3" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Journey */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <Badge variant="secondary" className="mb-4">
              Your Journey
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              How It Works
            </h2>
            <p className="text-muted-foreground">
              A simple 5-step process to launch your tech career
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {learningSteps.map((item) => (
              <Card key={item.step} className="overflow-visible relative">
                <CardContent className="p-6 text-center space-y-3">
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">
                    {item.step}
                  </div>
                  <div className="pt-4">
                    <div className="w-12 h-12 mx-auto rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                      <item.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-sm">{item.title}</h3>
                    <p className="text-xs text-muted-foreground mt-1">
                      {item.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Course Categories */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <Badge variant="secondary" className="mb-4">
              Explore
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Browse by Category
            </h2>
            <p className="text-muted-foreground">
              Find courses in your area of interest
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {courseCategories.map((category) => {
              const Icon = iconMap[category.icon];
              const count = allCourses.filter(
                (c) => c.category === category.id
              ).length;
              return (
                <Link
                  key={category.id}
                  href={`/courses?category=${category.id}`}
                >
                  <Card
                    className="overflow-visible hover-elevate cursor-pointer"
                    data-testid={`career-category-${category.id}`}
                  >
                    <CardContent className="p-4 text-center space-y-2">
                      <div className="w-10 h-10 mx-auto rounded-lg bg-primary/10 flex items-center justify-center">
                        {Icon && <Icon className="h-5 w-5 text-primary" />}
                      </div>
                      <div>
                        <h3 className="font-medium text-sm">{category.name}</h3>
                        <p className="text-xs text-muted-foreground">
                          {count} courses
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Upcoming Batches */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <Badge variant="secondary" className="mb-4">
              Enroll Now
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Upcoming Batches
            </h2>
            <p className="text-muted-foreground">
              Reserve your seat in our upcoming batches
            </p>
          </div>
          <UpcomingBatches />
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Start Your Journey Today
          </h2>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Get personalized career guidance from our experts. Schedule a free
            counseling session to discover the right path for you.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact">
              <Button size="lg" variant="secondary" className="gap-2">
                Free Career Counseling
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Link href="/courses">
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10"
              >
                Explore All Courses
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
