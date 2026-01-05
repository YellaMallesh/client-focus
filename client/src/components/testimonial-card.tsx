import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Quote } from "lucide-react";
import type { Testimonial } from "@shared/schema";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <Card
      className="overflow-visible"
      data-testid={`card-testimonial-${testimonial.id}`}
    >
      <CardContent className="p-6 space-y-4">
        <Quote className="h-8 w-8 text-primary/20" />
        <p className="text-muted-foreground leading-relaxed italic">
          "{testimonial.quote}"
        </p>
        <div className="flex items-center gap-3 pt-2">
          <Avatar>
            <AvatarFallback className="bg-primary/10 text-primary font-semibold">
              {testimonial.avatarInitials}
            </AvatarFallback>
          </Avatar>
          <div>
            <p className="font-medium text-sm">{testimonial.name}</p>
            <p className="text-xs text-muted-foreground">
              {testimonial.role} at {testimonial.company}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
