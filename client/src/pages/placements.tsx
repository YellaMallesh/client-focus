import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { StatsSection } from "@/components/stats-section";
import { PartnerLogos } from "@/components/partner-logos";
import {
  Briefcase,
  MapPin,
  Calendar,
  Building2,
  ArrowRight,
  Users,
  TrendingUp,
  Award,
} from "lucide-react";

const recentPlacements = [
  {
    id: "1",
    name: "Rahul Sharma",
    role: "Software Developer",
    company: "Zepto",
    course: "MERN Stack",
    salary: "6 LPA",
    initials: "RS",
  },
  {
    id: "2",
    name: "Priya Patel",
    role: "Data Analyst",
    company: "VBLP Technologies",
    course: "Data Science",
    salary: "5.5 LPA",
    initials: "PP",
  },
  {
    id: "3",
    name: "Amit Kumar",
    role: "Cloud Engineer",
    company: "Hashtag",
    course: "AWS",
    salary: "7 LPA",
    initials: "AK",
  },
  {
    id: "4",
    name: "Sneha Reddy",
    role: "QA Engineer",
    company: "BPO Convergences",
    course: "Selenium",
    salary: "4.5 LPA",
    initials: "SR",
  },
  {
    id: "5",
    name: "Vikram Singh",
    role: "Python Developer",
    company: "JD Overseas",
    course: "Python",
    salary: "5 LPA",
    initials: "VS",
  },
  {
    id: "6",
    name: "Ananya Iyer",
    role: "UI/UX Designer",
    company: "Ushnik Technologies",
    course: "UI/UX Design",
    salary: "5.5 LPA",
    initials: "AI",
  },
];

const currentOpenings = [
  {
    id: "1",
    title: "Java Developer",
    company: "TechCorp Solutions",
    location: "Hyderabad",
    experience: "0-2 years",
    type: "Full-time",
  },
  {
    id: "2",
    title: "Python Developer",
    company: "DataMind Analytics",
    location: "Bangalore",
    experience: "1-3 years",
    type: "Full-time",
  },
  {
    id: "3",
    title: "React Developer",
    company: "WebSoft India",
    location: "Remote",
    experience: "0-1 years",
    type: "Full-time",
  },
  {
    id: "4",
    title: "QA Engineer",
    company: "QualityFirst",
    location: "Hyderabad",
    experience: "0-2 years",
    type: "Full-time",
  },
  {
    id: "5",
    title: "Data Analyst",
    company: "InsightPro",
    location: "Pune",
    experience: "1-2 years",
    type: "Full-time",
  },
];

const futureOpportunities = [
  {
    id: "1",
    title: "Cloud Solutions Architect",
    company: "Major Cloud Provider",
    expectedDate: "Q1 2025",
    skills: ["AWS", "Azure", "DevOps"],
  },
  {
    id: "2",
    title: "Machine Learning Engineer",
    company: "AI Startup",
    expectedDate: "Q2 2025",
    skills: ["Python", "TensorFlow", "Deep Learning"],
  },
  {
    id: "3",
    title: "Full Stack Developer",
    company: "E-commerce Giant",
    expectedDate: "Q1 2025",
    skills: ["React", "Node.js", "MongoDB"],
  },
];

export default function Placements() {
  return (
    <div className="flex flex-col" data-testid="page-placements">
      {/* Hero */}
      <section className="py-16 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <Badge variant="secondary" className="mb-4">
              Placements
            </Badge>
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              Your Career <span className="text-gradient">Starts Here</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Join 5000+ successful alumni working at top companies. We provide
              100% placement assistance to help you land your dream job.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-card border-y">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <StatsSection />
        </div>
      </section>

      {/* Tabs Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="openings" className="space-y-8">
            <TabsList className="grid w-full max-w-lg mx-auto grid-cols-3">
              <TabsTrigger
                value="openings"
                data-testid="tab-current-openings"
              >
                Current Openings
              </TabsTrigger>
              <TabsTrigger
                value="recent"
                data-testid="tab-recent-placements"
              >
                Recent Placements
              </TabsTrigger>
              <TabsTrigger
                value="future"
                data-testid="tab-future-opportunities"
              >
                Upcoming
              </TabsTrigger>
            </TabsList>

            <TabsContent value="openings" className="space-y-6">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold mb-2">Current Job Openings</h2>
                <p className="text-muted-foreground">
                  Active opportunities from our hiring partners
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                {currentOpenings.map((job) => (
                  <Card
                    key={job.id}
                    className="overflow-visible hover-elevate"
                    data-testid={`job-card-${job.id}`}
                  >
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start gap-4">
                        <div className="space-y-2">
                          <h3 className="font-semibold text-lg">{job.title}</h3>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Building2 className="h-4 w-4" />
                            <span>{job.company}</span>
                          </div>
                          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <MapPin className="h-4 w-4" />
                              <span>{job.location}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Briefcase className="h-4 w-4" />
                              <span>{job.experience}</span>
                            </div>
                          </div>
                        </div>
                        <Badge variant="secondary">{job.type}</Badge>
                      </div>
                      <div className="mt-4">
                        <Link href="/contact">
                          <Button
                            size="sm"
                            variant="outline"
                            className="w-full"
                          >
                            Apply Now
                          </Button>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="recent" className="space-y-6">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold mb-2">Recent Placements</h2>
                <p className="text-muted-foreground">
                  Our students who recently got placed
                </p>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {recentPlacements.map((placement) => (
                  <Card
                    key={placement.id}
                    className="overflow-visible"
                    data-testid={`placement-card-${placement.id}`}
                  >
                    <CardContent className="p-6 text-center space-y-4">
                      <Avatar className="w-16 h-16 mx-auto">
                        <AvatarFallback className="bg-primary/10 text-primary text-lg font-semibold">
                          {placement.initials}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="font-semibold">{placement.name}</h3>
                        <p className="text-sm text-primary">{placement.role}</p>
                      </div>
                      <div className="space-y-1">
                        <div className="flex items-center justify-center gap-2 text-sm">
                          <Building2 className="h-4 w-4 text-muted-foreground" />
                          <span>{placement.company}</span>
                        </div>
                        <Badge variant="outline" className="text-xs">
                          {placement.course}
                        </Badge>
                      </div>
                      <div className="pt-2 border-t">
                        <span className="text-lg font-bold text-primary">
                          {placement.salary}
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="future" className="space-y-6">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold mb-2">Upcoming Opportunities</h2>
                <p className="text-muted-foreground">
                  Prepare for future hiring drives
                </p>
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                {futureOpportunities.map((opportunity) => (
                  <Card
                    key={opportunity.id}
                    className="overflow-visible"
                    data-testid={`future-card-${opportunity.id}`}
                  >
                    <CardContent className="p-6 space-y-4">
                      <Badge variant="secondary">{opportunity.expectedDate}</Badge>
                      <div>
                        <h3 className="font-semibold text-lg">
                          {opportunity.title}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {opportunity.company}
                        </p>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {opportunity.skills.map((skill) => (
                          <Badge key={skill} variant="outline" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                      <Link href="/courses">
                        <Button variant="outline" size="sm" className="w-full">
                          Start Learning
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Partners */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <Badge variant="secondary" className="mb-4">
              Our Network
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Placement Partners
            </h2>
            <p className="text-muted-foreground">
              Trusted by leading companies for their hiring needs
            </p>
          </div>
          <PartnerLogos />
        </div>
      </section>

      {/* How We Help */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              How We Help You Get Placed
            </h2>
            <p className="text-muted-foreground">
              Our comprehensive placement support ensures your success
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Users,
                title: "Resume Building",
                description: "Professional resume preparation with ATS optimization",
              },
              {
                icon: TrendingUp,
                title: "Mock Interviews",
                description: "Practice sessions with industry experts",
              },
              {
                icon: Building2,
                title: "Company Connect",
                description: "Direct connections with hiring managers",
              },
              {
                icon: Award,
                title: "Lifetime Support",
                description: "Placement assistance even after course completion",
              },
            ].map((item, index) => (
              <Card key={index} className="overflow-visible text-center">
                <CardContent className="p-6 space-y-4">
                  <div className="w-14 h-14 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
                    <item.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Ready to Launch Your Career?
          </h2>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Join iFocus and get access to our extensive network of hiring
            partners and 100% placement support.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact">
              <Button size="lg" variant="secondary" className="gap-2">
                Get Started
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Link href="/courses">
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10"
              >
                Explore Courses
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
