import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { programs } from "@/data/programs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Calendar } from "lucide-react";

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
      <section className="py-12 lg:py-16 bg-card">
        <div className="container-academy">
          <h1 className="text-3xl lg:text-4xl font-bold text-foreground">
            Start Dates & Schedule
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl">
            View upcoming cohort start dates and enrollment status for all our healthcare training programs.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="container-academy space-y-12">
          {/* Open Enrollment */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <h2 className="text-2xl font-bold text-foreground">Open for Enrollment</h2>
              <Badge className="bg-accent text-accent-foreground">
                {openPrograms.length} Programs
              </Badge>
            </div>
            <Card>
              <CardContent className="p-0">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Program</TableHead>
                      <TableHead>Duration</TableHead>
                      <TableHead>Modality</TableHead>
                      <TableHead>Start Date</TableHead>
                      <TableHead className="text-right">Action</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {openPrograms.map((program) => (
                      <TableRow key={program.id}>
                        <TableCell className="font-medium">
                          <Link 
                            to={`/programs/${program.id}`}
                            className="hover:text-primary transition-colors"
                          >
                            {program.name}
                          </Link>
                        </TableCell>
                        <TableCell>{program.duration}</TableCell>
                        <TableCell>{program.modality}</TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <Calendar className="h-4 w-4 text-accent" />
                            <span>{program.startDate}</span>
                          </div>
                        </TableCell>
                        <TableCell className="text-right">
                          <Button asChild size="sm">
                            <Link to="/admissions">Apply Now</Link>
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
                <h2 className="text-2xl font-bold text-foreground">Upcoming Cohorts</h2>
                <Badge variant="secondary">{closedPrograms.length} Programs</Badge>
              </div>
              <Card>
                <CardContent className="p-0">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Program</TableHead>
                        <TableHead>Duration</TableHead>
                        <TableHead>Modality</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead className="text-right">Action</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {closedPrograms.map((program) => (
                        <TableRow key={program.id}>
                          <TableCell className="font-medium">
                            <Link 
                              to={`/programs/${program.id}`}
                              className="hover:text-primary transition-colors"
                            >
                              {program.name}
                            </Link>
                          </TableCell>
                          <TableCell>{program.duration}</TableCell>
                          <TableCell>{program.modality}</TableCell>
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
          <Card className="bg-secondary/30">
            <CardHeader>
              <CardTitle>About Our Cohort Schedule</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground">
              <p className="mb-4">
                Aliko Academy operates on a cohort-based schedule, with new classes starting on 
                specific dates throughout the year. This approach ensures:
              </p>
              <ul className="space-y-2 list-disc list-inside">
                <li>Structured learning with dedicated instructor support</li>
                <li>Peer collaboration and networking opportunities</li>
                <li>Coordinated clinical placement scheduling</li>
                <li>Clear timelines for program completion and certification</li>
              </ul>
              <p className="mt-4">
                <Link to="/contact" className="text-primary hover:underline">
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
