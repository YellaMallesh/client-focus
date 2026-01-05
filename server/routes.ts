import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { contactFormSchema, allCourses, courseCategories, services, testimonials, placementPartners, stats, whyChooseUs } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  
  // Get all courses
  app.get("/api/courses", (req, res) => {
    const { category, level, search } = req.query;
    
    let filteredCourses = [...allCourses];
    
    if (category && typeof category === "string" && category !== "all") {
      filteredCourses = filteredCourses.filter(c => c.category === category);
    }
    
    if (level && typeof level === "string" && level !== "all") {
      filteredCourses = filteredCourses.filter(c => c.level === level);
    }
    
    if (search && typeof search === "string") {
      const searchLower = search.toLowerCase();
      filteredCourses = filteredCourses.filter(c => 
        c.name.toLowerCase().includes(searchLower) ||
        c.description.toLowerCase().includes(searchLower)
      );
    }
    
    res.json(filteredCourses);
  });

  // Get single course
  app.get("/api/courses/:id", (req, res) => {
    const course = allCourses.find(c => c.id === req.params.id);
    if (!course) {
      return res.status(404).json({ error: "Course not found" });
    }
    res.json(course);
  });

  // Get course categories
  app.get("/api/categories", (req, res) => {
    res.json(courseCategories);
  });

  // Get services
  app.get("/api/services", (req, res) => {
    res.json(services);
  });

  // Get testimonials
  app.get("/api/testimonials", (req, res) => {
    res.json(testimonials);
  });

  // Get placement partners
  app.get("/api/partners", (req, res) => {
    res.json(placementPartners);
  });

  // Get stats
  app.get("/api/stats", (req, res) => {
    res.json(stats);
  });

  // Get why choose us
  app.get("/api/why-choose-us", (req, res) => {
    res.json(whyChooseUs);
  });

  // Submit contact form
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = contactFormSchema.parse(req.body);
      const submission = await storage.createContactSubmission(validatedData);
      res.status(201).json({ 
        success: true, 
        message: "Contact form submitted successfully",
        id: submission.id 
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ 
          error: "Validation failed", 
          details: error.errors 
        });
      }
      res.status(500).json({ error: "Internal server error" });
    }
  });

  // Get contact submissions (admin endpoint)
  app.get("/api/contact", async (req, res) => {
    const submissions = await storage.getContactSubmissions();
    res.json(submissions);
  });

  return httpServer;
}
