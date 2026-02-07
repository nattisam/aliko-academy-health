import { Link } from "react-router-dom";
import { programs } from "@/data/programs";
import { examPrepPrograms } from "@/data/examPrepPrograms";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, MapPin, Calendar, BookOpen, ArrowRight, Sparkles } from "lucide-react";

export function ProgramsSnapshot() {
  // Sort to show featured programs first, then by enrollment status, and limit to 3 for homepage
  const sortedPrograms = [...programs].sort((a, b) => {
    if (a.featured && !b.featured) return -1;
    if (!a.featured && b.featured) return 1;
    if (a.enrollmentStatus === "open" && b.enrollmentStatus !== "open") return -1;
    if (a.enrollmentStatus !== "open" && b.enrollmentStatus === "open") return 1;
    return 0;
  }).slice(0, 3); // Show only 3 featured programs on homepage

  const featuredExamPrep = examPrepPrograms.filter(p => p.featured).slice(0, 2);

  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container-academy">
        {/* Healthcare Training Programs */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            Certificate Programs
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
            Healthcare Training Programs
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Certificate programs delivered by Aliko Academy – Health, designed to launch your healthcare career.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {sortedPrograms.map((program) => (
            <Card
              key={program.id}
              className={`group flex flex-col transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
                program.featured ? "ring-2 ring-primary/20" : ""
              }`}
            >
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between gap-2">
                  <CardTitle className="text-lg leading-tight group-hover:text-primary transition-colors">
                    {program.name}
                  </CardTitle>
                  {program.featured && (
                    <Badge className="shrink-0 text-xs bg-accent text-accent-foreground">
                      <Sparkles className="h-3 w-3 mr-1" />
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
                  <Clock className="h-4 w-4 shrink-0 text-primary/60" />
                  <span>{program.duration} • {program.hours.total} hours</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4 shrink-0 text-primary/60" />
                  <span>{program.modality} • {program.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 shrink-0 text-primary/60" />
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
                  className="w-full group/btn"
                  variant={program.enrollmentStatus === "open" ? "default" : "outline"}
                >
                  <Link to={`/programs/${program.id}`}>
                    {program.enrollmentStatus === "open" ? "Apply Now" : "View Details"}
                    <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button asChild variant="outline" size="lg" className="group">
            <Link to="/programs">
              View All Programs
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>

        {/* Exam Review & Preparation Section */}
        <div className="mt-24 pt-16 border-t border-border">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-semibold mb-4">
              <BookOpen className="h-4 w-4" />
              Supplemental Education
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
              Exam Review & Preparation
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Strengthen your knowledge and boost your confidence with comprehensive exam preparation courses.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {featuredExamPrep.map((program) => (
              <Card
                key={program.id}
                className="group flex flex-col transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border-accent/20"
              >
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between gap-2">
                    <CardTitle className="text-lg leading-tight group-hover:text-primary transition-colors">
                      {program.name}
                    </CardTitle>
                    <Badge variant="outline" className="shrink-0 text-xs border-accent text-accent">
                      Exam Prep
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {program.description}
                  </p>
                </CardHeader>
                <CardContent className="flex-1 space-y-3">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4 shrink-0 text-accent/60" />
                    <span>{program.duration} • {program.hours.total} hours</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4 shrink-0 text-accent/60" />
                    <span>{program.modality}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 shrink-0 text-accent/60" />
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
                    className="w-full group/btn"
                    variant={program.enrollmentStatus === "open" ? "default" : "outline"}
                  >
                    <Link to={`/exam-prep/${program.id}`}>
                      {program.enrollmentStatus === "open" ? "Enroll Now" : "View Details"}
                      <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Button asChild variant="outline" size="lg" className="group">
              <Link to="/exam-prep">
                View All Exam Prep Courses
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>

          <div className="mt-8 p-4 rounded-lg bg-muted/50 border border-border max-w-2xl mx-auto">
            <p className="text-xs text-muted-foreground text-center">
              These courses are review and preparation programs only. Completion does not guarantee exam success, 
              certification, or licensure. Offered in collaboration with Aliko Consultancy, an academic and 
              career advisory partner.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
