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
          <h1 className="text-3xl lg:text-5xl font-bold text-primary">
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
              <div className="w-10 h-10 rounded-lg bg-teal/10 flex items-center justify-center">
                <Sparkles className="h-5 w-5 text-teal" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-teal">Open for Enrollment</h2>
                <Badge variant="outline" className="border-teal text-teal mt-1">
                  {openPrograms.length} Programs Available
                </Badge>
              </div>
            </div>
            <Card className="overflow-hidden">
              <div className="bg-teal/10 border-b border-teal/20 px-6 py-2.5">
                <div className="flex items-center gap-2 text-teal">
                  <CheckCircle className="h-4 w-4" />
                  <span className="text-sm font-medium">Enroll Now — Limited Seats Available</span>
                </div>
              </div>
              <CardContent className="p-0">
                <Table>
                  <TableHeader>
                     <TableRow className="bg-muted/50">
                      <TableHead className="font-bold text-base">Program</TableHead>
                      <TableHead className="font-bold text-base">Duration</TableHead>
                      <TableHead className="font-bold text-base">Modality</TableHead>
                      <TableHead className="font-bold text-base">Start Date</TableHead>
                      <TableHead className="text-right font-bold text-base">Action</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {openPrograms.map((program, index) => (
                      <TableRow key={program.id} className={`${index % 2 === 0 ? 'bg-background' : 'bg-muted/30'} hover:bg-accent/5 transition-colors`}>
                        <TableCell className="font-bold text-base">
                          <Link 
                            to={`/programs/${program.id}`}
                            className="hover:text-primary transition-colors"
                          >
                            {program.name}
                          </Link>
                        </TableCell>
                        <TableCell className="text-base">
                          <div className="flex items-center gap-2">
                            <Clock className="h-4 w-4 text-muted-foreground" />
                            {program.duration}
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge variant="outline">{program.modality}</Badge>
                        </TableCell>
                        <TableCell className="text-base">
                          <div className="flex items-center gap-2">
                            <Calendar className="h-4 w-4 text-teal" />
                            <span className="font-bold text-teal">{program.startDate}</span>
                          </div>
                        </TableCell>
                        <TableCell className="text-right">
                          <Button asChild size="sm" className="shadow-sm">
                            <Link to="/apply">
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

          {/* CNA Class Schedule */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                <Clock className="h-5 w-5 text-accent" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-foreground">CNA Class Schedules</h2>
                <p className="text-sm text-muted-foreground">Choose the schedule that fits your lifestyle</p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {/* Weekday Morning */}
              <Card className="border-2 border-primary/20 hover:border-primary/40 transition-colors">
                <CardHeader className="pb-3">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-2">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg text-primary">CNA Weekday – Morning</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 p-3 rounded-lg bg-muted/50">
                      <Calendar className="h-4 w-4 text-primary shrink-0" />
                      <span className="font-medium">8:00 AM – 12:00 PM</span>
                    </div>
                    <Badge variant="outline" className="border-primary/30 text-primary">Morning Class</Badge>
                  </div>
                </CardContent>
              </Card>

              {/* Weekday Evening */}
              <Card className="border-2 border-accent/20 hover:border-accent/40 transition-colors">
                <CardHeader className="pb-3">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-2">
                    <Clock className="h-6 w-6 text-accent" />
                  </div>
                  <CardTitle className="text-lg text-accent">CNA Weekday – Evening</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 p-3 rounded-lg bg-muted/50">
                      <Calendar className="h-4 w-4 text-accent shrink-0" />
                      <span className="font-medium">5:00 PM – 9:00 PM</span>
                    </div>
                    <Badge variant="outline" className="border-accent/30 text-accent">Night Class</Badge>
                  </div>
                </CardContent>
              </Card>

              {/* Weekend */}
              <Card className="border-2 border-primary/20 hover:border-primary/40 transition-colors">
                <CardHeader className="pb-3">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-2">
                    <Calendar className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg text-primary">CNA Weekend</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 p-3 rounded-lg bg-muted/50">
                      <Calendar className="h-4 w-4 text-primary shrink-0" />
                      <span className="font-medium">8:00 AM – 12:00 PM</span>
                    </div>
                    <Badge variant="outline" className="border-primary/30 text-primary">Morning Class</Badge>
                    <div className="flex items-center gap-2 p-3 rounded-lg bg-muted/50">
                      <Clock className="h-4 w-4 text-muted-foreground shrink-0" />
                      <span className="font-medium">12:00 PM – 1:00 PM</span>
                    </div>
                    <Badge variant="outline">Lunch Break</Badge>
                    <div className="flex items-center gap-2 p-3 rounded-lg bg-muted/50">
                      <Calendar className="h-4 w-4 text-primary shrink-0" />
                      <span className="font-medium">1:00 PM – 5:00 PM</span>
                    </div>
                    <Badge variant="outline" className="border-primary/30 text-primary">Afternoon Class</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* CNA 20-Day Calendar */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Calendar className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-foreground">CNA Program – 20-Day Calendar</h2>
                <p className="text-sm text-muted-foreground">Complete program breakdown by day</p>
              </div>
            </div>

            <Card className="overflow-hidden">
              <div className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground px-6 py-3">
                <div className="flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  <span className="font-medium">20-Day Training Schedule</span>
                </div>
              </div>
              <CardContent className="p-0 overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-muted/50">
                      <TableHead className="font-semibold text-center min-w-[150px]">Day 1 (4 hrs)</TableHead>
                      <TableHead className="font-semibold text-center min-w-[150px]">Day 2 (4 hrs)</TableHead>
                      <TableHead className="font-semibold text-center min-w-[150px]">Day 3 (4 hrs)</TableHead>
                      <TableHead className="font-semibold text-center min-w-[150px]">Day 4 (4 hrs)</TableHead>
                      <TableHead className="font-semibold text-center min-w-[150px]">Day 5 (4 hrs)</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="text-center align-top">Ch.1 & Ch.2</TableCell>
                      <TableCell className="text-center align-top">Ch.2 & Ch.3</TableCell>
                      <TableCell className="text-center align-top">Exam Ch1–3<br/>Ch.4<br/>Skills Ch4</TableCell>
                      <TableCell className="text-center align-top">Exam Ch4<br/>Ch.5</TableCell>
                      <TableCell className="text-center align-top">Ch.6<br/>Skills Ch5–6</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>

                <Table>
                  <TableHeader>
                    <TableRow className="bg-muted/50">
                      <TableHead className="font-semibold text-center min-w-[150px]">Day 6 (4 hrs)</TableHead>
                      <TableHead className="font-semibold text-center min-w-[150px]">Day 7 (4 hrs)</TableHead>
                      <TableHead className="font-semibold text-center min-w-[150px]">Day 8 (5 hrs)</TableHead>
                      <TableHead className="font-semibold text-center min-w-[150px]">Day 9 (5 hrs)</TableHead>
                      <TableHead className="font-semibold text-center min-w-[150px]">Day 10 (5 hrs)</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="text-center align-top">Exam Ch5–6<br/>Ch.7<br/>Skills Ch7</TableCell>
                      <TableCell className="text-center align-top">Ch.8<br/>Skills Ch8<br/>Exam Ch7–8</TableCell>
                      <TableCell className="text-center align-top">Ch.9 & Ch.10<br/>Skills Ch9–10<br/>Exam Ch9–10</TableCell>
                      <TableCell className="text-center align-top">Skill Practice</TableCell>
                      <TableCell className="text-center align-top">Skill Practice</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>

                <Table>
                  <TableHeader>
                    <TableRow className="bg-accent/10">
                      <TableHead className="font-semibold text-center min-w-[150px]">Day 11 (5 hrs)</TableHead>
                      <TableHead className="font-semibold text-center min-w-[150px]">Day 12 (5 hrs)</TableHead>
                      <TableHead className="font-semibold text-center min-w-[150px]">Day 13 (5 hrs)</TableHead>
                      <TableHead className="font-semibold text-center min-w-[150px]">Day 14 (5 hrs)</TableHead>
                      <TableHead className="font-semibold text-center min-w-[150px]">Day 15 (5 hrs)</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="text-center align-top font-medium text-accent">Full Skills Practice</TableCell>
                      <TableCell className="text-center align-top font-medium text-accent">Full Skills Practice</TableCell>
                      <TableCell className="text-center align-top font-medium text-accent">Full Skills Practice</TableCell>
                      <TableCell className="text-center align-top font-medium text-accent">Full Skills Practice</TableCell>
                      <TableCell className="text-center align-top font-medium text-accent">Full Skills Practice</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>

                <Table>
                  <TableHeader>
                    <TableRow className="bg-primary/10">
                      <TableHead className="font-semibold text-center min-w-[150px]">Day 16 (8 hrs)</TableHead>
                      <TableHead className="font-semibold text-center min-w-[150px]">Day 17 (8 hrs)</TableHead>
                      <TableHead className="font-semibold text-center min-w-[150px]">Day 18 (8 hrs)</TableHead>
                      <TableHead className="font-semibold text-center min-w-[150px]">Day 19 (8 hrs)</TableHead>
                      <TableHead className="font-semibold text-center min-w-[150px]">Day 20 (8 hrs)</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="text-center align-top font-medium text-primary">Clinical</TableCell>
                      <TableCell className="text-center align-top font-medium text-primary">Clinical</TableCell>
                      <TableCell className="text-center align-top font-medium text-primary">Clinical</TableCell>
                      <TableCell className="text-center align-top font-medium text-primary">Clinical</TableCell>
                      <TableCell className="text-center align-top font-medium text-primary">Clinical</TableCell>
                    </TableRow>
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
                  <h2 className="text-2xl font-bold text-destructive">Upcoming Cohorts</h2>
                  <Badge variant="destructive" className="mt-1">{closedPrograms.length} Programs</Badge>
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
                        <TableHead className="font-semibold text-sm">Program</TableHead>
                        <TableHead className="font-semibold text-sm">Duration</TableHead>
                        <TableHead className="font-semibold text-sm">Modality</TableHead>
                        <TableHead className="font-semibold text-sm">Status</TableHead>
                        <TableHead className="text-right font-semibold text-sm">Action</TableHead>
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
                            <Badge variant="destructive">Coming Soon</Badge>
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
