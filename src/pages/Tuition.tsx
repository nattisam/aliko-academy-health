import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { programs } from "@/data/programs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { CheckCircle, CreditCard, Building2, Users } from "lucide-react";

const Tuition = () => {
  return (
    <Layout>
      <section className="py-12 lg:py-16 bg-card">
        <div className="container-academy">
          <h1 className="text-3xl lg:text-4xl font-bold text-foreground">
            Tuition & Payment Plans
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl">
            Transparent pricing with flexible payment options. Invest in your healthcare career 
            with confidence.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="container-academy space-y-12">
          {/* Tuition Table */}
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-6">Program Tuition</h2>
            <Card>
              <CardContent className="p-0">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Program</TableHead>
                      <TableHead>Duration</TableHead>
                      <TableHead>Total Hours</TableHead>
                      <TableHead className="text-right">Tuition</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {programs.map((program) => (
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
                        <TableCell>{program.hours.total} hours</TableCell>
                        <TableCell className="text-right font-semibold">
                          ${program.tuition.toLocaleString()}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </div>

          {/* What's Included */}
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-6">What's Included</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <CheckCircle className="h-6 w-6 text-primary shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-1">Course Materials</h3>
                      <p className="text-sm text-muted-foreground">
                        All textbooks, workbooks, and digital learning resources
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <CheckCircle className="h-6 w-6 text-primary shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-1">Lab Equipment</h3>
                      <p className="text-sm text-muted-foreground">
                        Access to all lab equipment and practice supplies
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <CheckCircle className="h-6 w-6 text-primary shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-1">Clinical Placement</h3>
                      <p className="text-sm text-muted-foreground">
                        Coordination of clinical training at partner facilities
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <CheckCircle className="h-6 w-6 text-primary shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-1">Exam Preparation</h3>
                      <p className="text-sm text-muted-foreground">
                        Practice tests and certification exam prep materials
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <CheckCircle className="h-6 w-6 text-primary shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-1">LMS Access</h3>
                      <p className="text-sm text-muted-foreground">
                        Online learning platform access throughout your program
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <CheckCircle className="h-6 w-6 text-primary shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-1">Career Services</h3>
                      <p className="text-sm text-muted-foreground">
                        Resume assistance and job search support
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Payment Options */}
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-6">Payment Options</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CreditCard className="h-8 w-8 text-primary mb-2" />
                  <CardTitle>Pay in Full</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Pay your tuition in full before your program start date and focus on your studies.
                  </p>
                  <ul className="text-sm space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-accent" />
                      <span>Simple, one-time payment</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-accent" />
                      <span>No payment tracking needed</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Users className="h-8 w-8 text-primary mb-2" />
                  <CardTitle>Payment Plan</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Split your tuition into manageable installments during your program.
                  </p>
                  <ul className="text-sm space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-accent" />
                      <span>Down payment required</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-accent" />
                      <span>Monthly installments</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Building2 className="h-8 w-8 text-primary mb-2" />
                  <CardTitle>Sponsor / Agency Pay</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Employer or workforce agency sponsoring your training? We work with sponsors.
                  </p>
                  <ul className="text-sm space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-accent" />
                      <span>Employer reimbursement</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-accent" />
                      <span>WorkSource eligible</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Refund Policy */}
          <Card className="bg-secondary/30" id="refund">
            <CardHeader>
              <CardTitle>Refund Policy</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground">
              <p className="mb-4">
                We understand that circumstances change. Our refund policy is designed to be fair 
                and transparent:
              </p>
              <ul className="space-y-2 list-disc list-inside mb-4">
                <li>Full refund if withdrawn before program start date</li>
                <li>Prorated refund during the first 50% of the program</li>
                <li>No refund after 50% of program completion</li>
              </ul>
              <p>
                For complete details, please review our{" "}
                <Link to="/policies#refund" className="text-primary hover:underline">
                  full refund and cancellation policy
                </Link>.
              </p>
            </CardContent>
          </Card>

          {/* CTA */}
          <div className="text-center">
            <p className="text-muted-foreground mb-4">
              Have questions about payment options or need financial guidance?
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild>
                <Link to="/contact">Contact Admissions</Link>
              </Button>
              <Button asChild variant="outline">
                <Link to="/admissions">Apply Now</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Tuition;
