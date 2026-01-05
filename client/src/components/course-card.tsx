import { Link } from "wouter";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock, ArrowRight } from "lucide-react";
import type { Course } from "@shared/schema";
import { courseCategories } from "@shared/schema";

interface CourseCardProps {
  course: Course;
}

export function CourseCard({ course }: CourseCardProps) {
  const category = courseCategories.find((c) => c.id === course.category);

  return (
    <Card
      className="group overflow-visible hover-elevate transition-all duration-300"
      data-testid={`card-course-${course.id}`}
    >
      <CardContent className="p-6 space-y-4">
        <div className="flex items-start justify-between gap-2">
          <div className="flex-1">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              {category && (
                <Badge variant="secondary" className="text-xs">
                  {category.name}
                </Badge>
              )}
              {course.popular && (
                <Badge className="text-xs bg-accent text-accent-foreground">
                  Popular
                </Badge>
              )}
              {course.new && (
                <Badge variant="outline" className="text-xs border-primary text-primary">
                  New
                </Badge>
              )}
            </div>
            <h3 className="font-serif font-semibold text-lg group-hover:text-primary transition-colors">
              {course.name}
            </h3>
          </div>
        </div>
        <p className="text-sm text-muted-foreground line-clamp-2">
          {course.description}
        </p>
        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1.5">
            <Clock className="h-4 w-4" />
            <span>{course.duration}</span>
          </div>
          <Badge variant="outline" className="text-xs">
            {course.level}
          </Badge>
        </div>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <Link href={`/courses/${course.id}`} className="w-full">
          <Button
            variant="outline"
            className="w-full group/btn"
            data-testid={`button-view-course-${course.id}`}
          >
            View Details
            <ArrowRight className="h-4 w-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
