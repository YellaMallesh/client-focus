import { useParams, Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CourseCard } from "@/components/course-card";
import { allCourses, courseCategories } from "@shared/schema";
import {
  Clock,
  BarChart,
  Users,
  Award,
  CheckCircle,
  ArrowLeft,
  Calendar,
  Monitor,
  FileText,
  Briefcase,
} from "lucide-react";

export default function CourseDetail() {
  const { id } = useParams<{ id: string }>();
  const course = allCourses.find((c) => c.id === id);

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Course Not Found</h1>
          <Link href="/courses">
            <Button>Back to Courses</Button>
          </Link>
        </div>
      </div>
    );
  }

  const category = courseCategories.find((c) => c.id === course.category);
  const relatedCourses = allCourses
    .filter((c) => c.category === course.category && c.id !== course.id)
    .slice(0, 3);

  const curriculum = [
    {
      title: "Module 1: Introduction & Fundamentals",
      content: `Introduction to ${course.name}, setting up development environment, basic concepts and terminology.`,
    },
    {
      title: "Module 2: Core Concepts",
      content: `Deep dive into core concepts, best practices, and industry standards for ${course.name}.`,
    },
    {
      title: "Module 3: Hands-on Projects",
      content: `Real-world project work to apply learned concepts. Build portfolio-worthy projects.`,
    },
    {
      title: "Module 4: Advanced Topics",
      content: `Advanced techniques, optimization, and professional development practices.`,
    },
    {
      title: "Module 5: Interview Preparation",
      content: `Mock interviews, resume building, and placement assistance for ${course.name} roles.`,
    },
  ];

  const highlights = [
    "Live interactive sessions",
    "Real-world projects",
    "Industry-expert trainers",
    "Certification on completion",
    "Placement assistance",
    "Lifetime access to materials",
  ];

  return (
    <div className="flex flex-col" data-testid={`page-course-${id}`}>
      {/* Hero */}
      <section className="py-16 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/courses"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-6"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Courses
          </Link>
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              <div className="flex flex-wrap items-center gap-2">
                {category && (
                  <Badge variant="secondary">{category.name}</Badge>
                )}
                {course.popular && (
                  <Badge className="bg-accent text-accent-foreground">
                    Popular
                  </Badge>
                )}
                {course.new && (
                  <Badge variant="outline" className="border-primary text-primary">
                    New
                  </Badge>
                )}
                <Badge variant="outline">{course.level}</Badge>
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold">{course.name}</h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {course.description}. Master the skills needed to succeed in today's
                competitive tech industry with hands-on training and expert guidance.
              </p>
              <div className="flex flex-wrap items-center gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-primary" />
                  <span>{course.duration}</span>
                </div>
                <div className="flex items-center gap-2">
                  <BarChart className="h-5 w-5 text-primary" />
                  <span>{course.level}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-primary" />
                  <span>100+ Students</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="h-5 w-5 text-primary" />
                  <span>Certificate Included</span>
                </div>
              </div>
            </div>
            <div>
              <Card className="overflow-visible sticky top-24">
                <CardContent className="p-6 space-y-6">
                  <div className="text-center space-y-2">
                    <p className="text-3xl font-bold">Get Started Today</p>
                    <p className="text-sm text-muted-foreground">Free counseling available</p>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-sm">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      <span>Next batch: January 2025</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <Monitor className="h-4 w-4 text-muted-foreground" />
                      <span>Online & Offline available</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <FileText className="h-4 w-4 text-muted-foreground" />
                      <span>Comprehensive study materials</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <Briefcase className="h-4 w-4 text-muted-foreground" />
                      <span>Placement support included</span>
                    </div>
                  </div>
                  <Link href="/contact" className="block">
                    <Button className="w-full" size="lg" data-testid="button-enquire-course">
                      Enquire Now
                    </Button>
                  </Link>
                  <Link href="/contact" className="block">
                    <Button variant="outline" className="w-full">
                      Get Free Counseling
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Course Highlights */}
      <section className="py-12 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-6">Course Highlights</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-4 rounded-lg bg-muted/50"
              >
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-sm font-medium">{highlight}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-6">Course Curriculum</h2>
          <Card className="overflow-visible">
            <Accordion type="single" collapsible className="w-full">
              {curriculum.map((module, index) => (
                <AccordionItem
                  key={index}
                  value={`module-${index}`}
                  className="px-6"
                >
                  <AccordionTrigger className="text-left">
                    <div className="flex items-center gap-4">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-sm font-semibold text-primary">
                        {index + 1}
                      </div>
                      <span className="font-medium">{module.title}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pl-12">
                    <p className="text-muted-foreground">{module.content}</p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Card>
        </div>
      </section>

      {/* Related Courses */}
      {relatedCourses.length > 0 && (
        <section className="py-16 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold mb-6">Related Courses</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedCourses.map((course) => (
                <CourseCard key={course.id} course={course} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-lg opacity-90 mb-8">
            Join our next batch and take the first step towards your dream career.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact">
              <Button size="lg" variant="secondary">
                Enquire Now
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10"
              >
                Schedule Demo Class
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
