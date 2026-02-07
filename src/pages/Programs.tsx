import { useState } from "react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { programs, type EnrollmentStatus } from "@/data/programs";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Clock, MapPin, Calendar, DollarSign } from "lucide-react";

type ModalityFilter = "all" | "Hybrid" | "Online" | "In-Person";
type StatusFilter = "all" | EnrollmentStatus;

const Programs = () => {
  const [modalityFilter, setModalityFilter] = useState<ModalityFilter>("all");
  const [statusFilter, setStatusFilter] = useState<StatusFilter>("all");

  const filteredPrograms = programs
    .filter((program) => {
      if (modalityFilter !== "all" && program.modality !== modalityFilter) return false;
      if (statusFilter !== "all" && program.enrollmentStatus !== statusFilter) return false;
      return true;
    })
    .sort((a, b) => {
      // Featured first, then open enrollment
      if (a.featured && !b.featured) return -1;
      if (!a.featured && b.featured) return 1;
      if (a.enrollmentStatus === "open" && b.enrollmentStatus !== "open") return -1;
      if (a.enrollmentStatus !== "open" && b.enrollmentStatus === "open") return 1;
      return 0;
    });

  return (
    <Layout>
      <section className="py-12 lg:py-16 bg-card">
        <div className="container-academy">
          <h1 className="text-3xl lg:text-4xl font-bold text-foreground">
            Healthcare Training Programs
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl">
            Explore our comprehensive healthcare training programs designed to prepare you for 
            certification and a rewarding career in the healthcare industry.
          </p>
        </div>
      </section>

      <section className="py-8">
        <div className="container-academy">
          {/* Filters */}
          <div className="flex flex-wrap gap-4 mb-8 pb-8 border-b border-border">
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium text-muted-foreground">Modality:</span>
              <Select value={modalityFilter} onValueChange={(v) => setModalityFilter(v as ModalityFilter)}>
                <SelectTrigger className="w-[140px]">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All</SelectItem>
                  <SelectItem value="Hybrid">Hybrid</SelectItem>
                  <SelectItem value="Online">Online</SelectItem>
                  <SelectItem value="In-Person">In-Person</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium text-muted-foreground">Enrollment:</span>
              <Select value={statusFilter} onValueChange={(v) => setStatusFilter(v as StatusFilter)}>
                <SelectTrigger className="w-[140px]">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All</SelectItem>
                  <SelectItem value="open">Open</SelectItem>
                  <SelectItem value="closed">Closed</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="ml-auto text-sm text-muted-foreground">
              {filteredPrograms.length} program{filteredPrograms.length !== 1 ? "s" : ""}
            </div>
          </div>

          {/* Program Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPrograms.map((program) => (
              <Card key={program.id} className="flex flex-col hover:shadow-lg transition-shadow">
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between gap-2">
                    <CardTitle className="text-lg leading-tight">{program.name}</CardTitle>
                    {program.featured && (
                      <Badge variant="secondary" className="shrink-0 text-xs">Featured</Badge>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground">{program.credential}</p>
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
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <DollarSign className="h-4 w-4 shrink-0" />
                    <span>${program.tuition.toLocaleString()} tuition</span>
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
        </div>
      </section>
    </Layout>
  );
};

export default Programs;
