import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { programs } from "@/data/programs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Calendar, Clock, ArrowRight, CheckCircle, Users, Sparkles } from "lucide-react";

const Schedule = () => {
  // Sort programs by start date
  const sortedPrograms = [...programs].sort((a, b) => {
    // Simple date comparison - in production would use proper date parsing
    return a.startDate.localeCompare(b.startDate);
  });

  const openPrograms = sortedPrograms.filter((p) => p.enrollmentStatus === "open");
  const closedPrograms = sortedPrograms.filter((p) => p.enrollmentStatus === "closed");

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-16 lg:py-24 bg-gradient-to-br from-primary/5 via-card to-accent/5 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
        
        <div className="container-academy relative">
          <div className="flex items-center gap-2 mb-4">
            <div className="h-1 w-12 bg-accent rounded-full" />
            <span className="text-sm font-medium text-accent">Plan Your Journey</span>
          </div>
          <h1 className="text-3xl lg:text-5xl font-bold text-foreground">
            Start Dates & Schedule
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl">
            View upcoming cohort start dates and enrollment status for all our healthcare training programs.
          </p>
          
          {/* Quick stats */}
          <div className="mt-8 flex flex-wrap gap-6">
            <div className="flex items-center gap-2 text-muted-foreground">
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                <Sparkles className="h-5 w-5 text-accent" />
              </div>
              <div>
                <p className="font-semibold text-foreground">{openPrograms.length}</p>
                <p className="text-xs">Open Enrollments</p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Calendar className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="font-semibold text-foreground">Cohort-Based</p>
                <p className="text-xs">Structured Learning</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container-academy space-y-12">
          {/* Open Enrollment */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                <Sparkles className="h-5 w-5 text-accent" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-foreground">Open for Enrollment</h2>
                <Badge className="bg-accent text-accent-foreground mt-1">
                  {openPrograms.length} Programs Available
                </Badge>
              </div>
            </div>
            <Card className="overflow-hidden">
              <div className="bg-gradient-to-r from-accent to-accent/80 text-accent-foreground px-6 py-3">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5" />
                  <span className="font-medium">Enroll Now — Limited Seats Available</span>
                </div>
              </div>
              <CardContent className="p-0">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-muted/50">
                      <TableHead className="font-semibold">Program</TableHead>
                      <TableHead className="font-semibold">Duration</TableHead>
                      <TableHead className="font-semibold">Modality</TableHead>
                      <TableHead className="font-semibold">Start Date</TableHead>
                      <TableHead className="text-right font-semibold">Action</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {openPrograms.map((program, index) => (
                      <TableRow key={program.id} className={`${index % 2 === 0 ? 'bg-background' : 'bg-muted/30'} hover:bg-accent/5 transition-colors`}>
                        <TableCell className="font-medium">
                          <Link 
                            to={`/programs/${program.id}`}
                            className="hover:text-primary transition-colors"
                          >
                            {program.name}
                          </Link>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <Clock className="h-4 w-4 text-muted-foreground" />
                            {program.duration}
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge variant="outline">{program.modality}</Badge>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <Calendar className="h-4 w-4 text-accent" />
                            <span className="font-medium text-accent">{program.startDate}</span>
                          </div>
                        </TableCell>
                        <TableCell className="text-right">
                          <Button asChild size="sm" className="shadow-sm bg-accent text-accent-foreground hover:bg-accent/90">
                            <Link to="/admissions">
                              Apply Now
                              <ArrowRight className="ml-1 h-3 w-3" />
                            </Link>
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </div>

          {/* Closed Enrollment */}
          {closedPrograms.length > 0 && (
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Calendar className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-foreground">Upcoming Cohorts</h2>
                  <Badge variant="secondary" className="mt-1">{closedPrograms.length} Programs</Badge>
                </div>
              </div>
              <Card className="overflow-hidden">
                <div className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground px-6 py-3">
                  <div className="flex items-center gap-2">
                    <Clock className="h-5 w-5" />
                    <span className="font-medium">Coming Soon — Join the Waitlist</span>
                  </div>
                </div>
                <CardContent className="p-0">
                  <Table>
                    <TableHeader>
                      <TableRow className="bg-muted/50">
                        <TableHead className="font-semibold">Program</TableHead>
                        <TableHead className="font-semibold">Duration</TableHead>
                        <TableHead className="font-semibold">Modality</TableHead>
                        <TableHead className="font-semibold">Status</TableHead>
                        <TableHead className="text-right font-semibold">Action</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {closedPrograms.map((program, index) => (
                        <TableRow key={program.id} className={`${index % 2 === 0 ? 'bg-background' : 'bg-muted/30'} hover:bg-primary/5 transition-colors`}>
                          <TableCell className="font-medium">
                            <Link 
                              to={`/programs/${program.id}`}
                              className="hover:text-primary transition-colors"
                            >
                              {program.name}
                            </Link>
                          </TableCell>
                          <TableCell>
                            <div className="flex items-center gap-2">
                              <Clock className="h-4 w-4 text-muted-foreground" />
                              {program.duration}
                            </div>
                          </TableCell>
                          <TableCell>
                            <Badge variant="outline">{program.modality}</Badge>
                          </TableCell>
                          <TableCell>
                            <Badge variant="secondary">Coming Soon</Badge>
                          </TableCell>
                          <TableCell className="text-right">
                            <Button asChild size="sm" variant="outline">
                              <Link to={`/programs/${program.id}`}>View Details</Link>
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Info Card */}
          <Card className="bg-gradient-to-br from-muted/50 to-muted/30 border-l-4 border-l-primary">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Users className="h-5 w-5 text-primary" />
                </div>
                About Our Cohort Schedule
              </CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground">
              <p className="mb-4">
                Aliko Academy operates on a cohort-based schedule, with new classes starting on 
                specific dates throughout the year. This approach ensures:
              </p>
              <ul className="space-y-2 mb-4">
                {[
                  "Structured learning with dedicated instructor support",
                  "Peer collaboration and networking opportunities",
                  "Coordinated clinical placement scheduling",
                  "Clear timelines for program completion and certification",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p>
                <Link to="/contact" className="text-primary hover:underline font-medium">
                  Contact our admissions team
                </Link>{" "}
                if you have questions about upcoming start dates or need assistance with enrollment.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </Layout>
  );
};

export default Schedule;
