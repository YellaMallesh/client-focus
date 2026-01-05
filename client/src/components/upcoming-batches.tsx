import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Calendar, Users, Monitor, Laptop, Building } from "lucide-react";
import type { UpcomingBatch } from "@shared/schema";

const sampleBatches: UpcomingBatch[] = [
  {
    id: "1",
    courseName: "MERN Stack Development",
    startDate: "Jan 15, 2025",
    duration: "4 months",
    seatsAvailable: 8,
    mode: "Online",
  },
  {
    id: "2",
    courseName: "Data Science with Python",
    startDate: "Jan 20, 2025",
    duration: "4 months",
    seatsAvailable: 12,
    mode: "Hybrid",
  },
  {
    id: "3",
    courseName: "AWS Cloud Practitioner",
    startDate: "Jan 22, 2025",
    duration: "3 months",
    seatsAvailable: 5,
    mode: "Offline",
  },
  {
    id: "4",
    courseName: "Selenium Automation",
    startDate: "Jan 25, 2025",
    duration: "2 months",
    seatsAvailable: 15,
    mode: "Online",
  },
  {
    id: "5",
    courseName: "Power BI & Tableau",
    startDate: "Feb 1, 2025",
    duration: "2 months",
    seatsAvailable: 10,
    mode: "Hybrid",
  },
];

const modeIcons = {
  Online: Monitor,
  Offline: Building,
  Hybrid: Laptop,
};

export function UpcomingBatches() {
  return (
    <div
      className="rounded-lg border bg-card overflow-hidden"
      data-testid="upcoming-batches"
    >
      <Table>
        <TableHeader>
          <TableRow className="bg-muted/50">
            <TableHead className="font-semibold">Course</TableHead>
            <TableHead className="font-semibold">Start Date</TableHead>
            <TableHead className="font-semibold">Duration</TableHead>
            <TableHead className="font-semibold">Mode</TableHead>
            <TableHead className="font-semibold text-center">Seats</TableHead>
            <TableHead className="font-semibold text-right">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {sampleBatches.map((batch, index) => {
            const ModeIcon = modeIcons[batch.mode];
            return (
              <TableRow
                key={batch.id}
                className={index % 2 === 0 ? "bg-background" : "bg-muted/30"}
                data-testid={`batch-row-${batch.id}`}
              >
                <TableCell className="font-medium">{batch.courseName}</TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    {batch.startDate}
                  </div>
                </TableCell>
                <TableCell>{batch.duration}</TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <ModeIcon className="h-4 w-4 text-muted-foreground" />
                    <Badge variant="outline" className="text-xs">
                      {batch.mode}
                    </Badge>
                  </div>
                </TableCell>
                <TableCell className="text-center">
                  <div className="flex items-center justify-center gap-1">
                    <Users className="h-4 w-4 text-muted-foreground" />
                    <span
                      className={
                        batch.seatsAvailable <= 5
                          ? "text-destructive font-medium"
                          : ""
                      }
                    >
                      {batch.seatsAvailable}
                    </span>
                  </div>
                </TableCell>
                <TableCell className="text-right">
                  <Link href="/contact">
                    <Button size="sm" data-testid={`button-enroll-${batch.id}`}>
                      Enroll Now
                    </Button>
                  </Link>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
}
