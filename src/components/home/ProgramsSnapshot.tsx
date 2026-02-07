import { Link } from "react-router-dom";
import { programs } from "@/data/programs";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, MapPin, Calendar } from "lucide-react";

export function ProgramsSnapshot() {
  // Sort to show featured programs first, then by enrollment status
  const sortedPrograms = [...programs].sort((a, b) => {
    if (a.featured && !b.featured) return -1;
    if (!a.featured && b.featured) return 1;
    if (a.enrollmentStatus === "open" && b.enrollmentStatus !== "open") return -1;
    if (a.enrollmentStatus !== "open" && b.enrollmentStatus === "open") return 1;
    return 0;
  });

  return (
    <section className="py-16 lg:py-24">
      <div className="container-academy">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
            Healthcare Training Programs
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose from 9 industry-aligned programs designed to launch your healthcare career.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {sortedPrograms.map((program) => (
            <Card
              key={program.id}
              className="flex flex-col hover:shadow-lg transition-shadow"
            >
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between gap-2">
                  <CardTitle className="text-lg leading-tight">
                    {program.name}
                  </CardTitle>
                  {program.featured && (
                    <Badge variant="secondary" className="shrink-0 text-xs">
                      Featured
                    </Badge>
                  )}
                </div>
                <p className="text-sm text-muted-foreground">
                  {program.credential}
                </p>
              </CardHeader>
              <CardContent className="flex-1 space-y-3">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock className="h-4 w-4 shrink-0" />
                  <span>{program.duration} • {program.hours.total} hours</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4 shrink-0" />
                  <span>{program.modality} • {program.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 shrink-0 text-muted-foreground" />
                  <Badge
                    variant={program.enrollmentStatus === "open" ? "default" : "secondary"}
                    className={
                      program.enrollmentStatus === "open"
                        ? "bg-accent text-accent-foreground hover:bg-accent/90"
                        : ""
                    }
                  >
                    {program.enrollmentStatus === "open"
                      ? `Starts ${program.startDate}`
                      : "Enrollment Closed"}
                  </Badge>
                </div>
              </CardContent>
              <CardFooter className="pt-0">
                <Button
                  asChild
                  className="w-full"
                  variant={program.enrollmentStatus === "open" ? "default" : "outline"}
                >
                  <Link to={`/programs/${program.id}`}>
                    {program.enrollmentStatus === "open" ? "Apply Now" : "View Details"}
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button asChild variant="outline" size="lg">
            <Link to="/programs">View All Programs</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
