import { Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Smartphone, Globe, Users, Wallet, TrendingUp, Building2, GraduationCap, Wrench, Briefcase } from "lucide-react";
import type { Service } from "@shared/schema";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Smartphone,
  Globe,
  Users,
  Wallet,
  TrendingUp,
  Building2,
  GraduationCap,
  Wrench,
  Briefcase,
};

interface ServiceCardProps {
  service: Service;
}

export function ServiceCard({ service }: ServiceCardProps) {
  const Icon = iconMap[service.icon];

  return (
    <Card
      className="group overflow-visible hover-elevate transition-all duration-300"
      data-testid={`card-service-${service.id}`}
    >
      <CardContent className="p-6 space-y-4">
        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
          {Icon && <Icon className="h-6 w-6 text-primary" />}
        </div>
        <div>
          <h3 className="font-serif font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
            {service.name}
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {service.description}
          </p>
        </div>
        <Link href={`/services#${service.id}`}>
          <Button
            variant="ghost"
            size="sm"
            className="px-0 group/btn text-primary"
            data-testid={`button-learn-more-${service.id}`}
          >
            Learn More
            <ArrowRight className="h-4 w-4 ml-1 group-hover/btn:translate-x-1 transition-transform" />
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
}
