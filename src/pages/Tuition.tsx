import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { programs } from "@/data/programs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { CheckCircle, CreditCard, Building2, Users, DollarSign, BookOpen, Wallet } from "lucide-react";

const Tuition = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-16 lg:py-24 bg-gradient-to-br from-primary/5 via-card to-accent/5 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
        
        <div className="container-academy relative">
          <div className="flex items-center gap-2 mb-4">
            <div className="h-1 w-12 bg-accent rounded-full" />
            <span className="text-sm font-medium text-accent">Invest in Your Future</span>
          </div>
          <h1 className="text-3xl lg:text-5xl font-bold text-foreground">
            Tuition & Payment Plans
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl">
            Transparent pricing with flexible payment options. Invest in your healthcare career 
            with confidence.
          </p>
          
          {/* Quick visual */}
          <div className="mt-8 flex flex-wrap gap-6">
            <div className="flex items-center gap-2 text-muted-foreground">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Wallet className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="font-semibold text-foreground">Flexible</p>
                <p className="text-xs">Payment Plans</p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                <BookOpen className="h-5 w-5 text-accent" />
              </div>
              <div>
                <p className="font-semibold text-foreground">All-Inclusive</p>
                <p className="text-xs">Materials Included</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container-academy space-y-12">
          {/* Tuition Table */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <div className="h-1 w-8 bg-primary rounded-full" />
              <span className="text-sm font-medium text-primary">Program Costs</span>
            </div>
            <h2 className="text-2xl font-bold text-foreground mb-6">Program Tuition</h2>
            <Card className="overflow-hidden">
              <div className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground px-6 py-3">
                <div className="flex items-center gap-2">
                  <DollarSign className="h-5 w-5" />
                  <span className="font-medium">Healthcare Training Programs</span>
                </div>
              </div>
              <CardContent className="p-0">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-muted/50">
                      <TableHead className="font-semibold">Program</TableHead>
                      <TableHead className="font-semibold">Duration</TableHead>
                      <TableHead className="font-semibold">Total Hours</TableHead>
                      <TableHead className="text-right font-semibold">Tuition</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {programs.map((program, index) => (
                      <TableRow key={program.id} className={index % 2 === 0 ? 'bg-background' : 'bg-muted/30'}>
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
                        <TableCell className="text-right font-semibold text-primary">
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
            <div className="flex items-center gap-2 mb-2">
              <div className="h-1 w-8 bg-accent rounded-full" />
              <span className="text-sm font-medium text-accent">Everything You Need</span>
            </div>
            <h2 className="text-2xl font-bold text-foreground mb-6">What's Included</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: "Course Materials", desc: "All textbooks, workbooks, and digital learning resources", color: "primary" as const },
                { title: "Lab Equipment", desc: "Access to all lab equipment and practice supplies", color: "accent" as const },
                { title: "Clinical Placement", desc: "Coordination of clinical training at partner facilities", color: "primary" as const },
                { title: "Exam Preparation", desc: "Practice tests and certification exam prep materials", color: "accent" as const },
                { title: "LMS Access", desc: "Online learning platform access throughout your program", color: "primary" as const },
                { title: "Career Services", desc: "Resume assistance and job search support", color: "accent" as const },
              ].map((item, index) => (
                <Card key={item.title} className={`group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-l-4 ${
                  item.color === 'primary' ? 'border-l-primary' : 'border-l-accent'
                }`}>
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${
                        item.color === 'primary' ? 'bg-primary/10' : 'bg-accent/10'
                      }`}>
                        <CheckCircle className={`h-5 w-5 ${item.color === 'primary' ? 'text-primary' : 'text-accent'}`} />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">{item.title}</h3>
                        <p className="text-sm text-muted-foreground">{item.desc}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Payment Options */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <div className="h-1 w-8 bg-primary rounded-full" />
              <span className="text-sm font-medium text-primary">Flexible Options</span>
            </div>
            <h2 className="text-2xl font-bold text-foreground mb-6">Payment Options</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-t-4 border-t-primary">
                <CardHeader>
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <CreditCard className="h-7 w-7 text-primary" />
                  </div>
                  <CardTitle>Pay in Full</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Pay your tuition in full before your program start date and focus on your studies.
                  </p>
                  <ul className="text-sm space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Simple, one-time payment</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>No payment tracking needed</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-t-4 border-t-accent">
                <CardHeader>
                  <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                    <Users className="h-7 w-7 text-accent" />
                  </div>
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

              <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-t-4 border-t-primary">
                <CardHeader>
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Building2 className="h-7 w-7 text-primary" />
                  </div>
                  <CardTitle>Sponsor / Agency Pay</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Employer or workforce agency sponsoring your training? We work with sponsors.
                  </p>
                  <ul className="text-sm space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Employer reimbursement</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>WorkSource eligible</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Refund Policy */}
          <Card className="bg-gradient-to-br from-muted/50 to-muted/30 border-l-4 border-l-accent" id="refund">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                  <Wallet className="h-5 w-5 text-accent" />
                </div>
                Refund Policy
              </CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground">
              <p className="mb-4">
                We understand that circumstances change. Our refund policy is designed to be fair 
                and transparent:
              </p>
              <ul className="space-y-2 mb-4">
                {[
                  "Full refund if withdrawn before program start date",
                  "Prorated refund during the first 50% of the program",
                  "No refund after 50% of program completion",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-accent mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p>
                For complete details, please review our{" "}
                <Link to="/policies#refund" className="text-primary hover:underline font-medium">
                  full refund and cancellation policy
                </Link>.
              </p>
            </CardContent>
          </Card>

          {/* CTA */}
          <div className="relative text-center bg-gradient-to-br from-primary/10 via-card to-accent/10 rounded-2xl p-8 lg:p-12 overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full blur-2xl" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl" />
            <div className="relative">
              <p className="text-muted-foreground mb-6">
                Have questions about payment options or need financial guidance?
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild size="lg" className="shadow-lg">
                  <Link to="/contact">Contact Admissions</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/admissions">Apply Now</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Tuition;
