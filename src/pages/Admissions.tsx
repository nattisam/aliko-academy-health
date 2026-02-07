import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  ClipboardList, 
  FileText, 
  CreditCard, 
  Mail, 
  CheckCircle,
  ArrowRight
} from "lucide-react";

const steps = [
  {
    icon: ClipboardList,
    title: "1. Choose Your Program",
    description: "Browse our programs and select the one that aligns with your career goals. Review requirements, schedule, and tuition.",
  },
  {
    icon: FileText,
    title: "2. Submit Application",
    description: "Complete the online application form with your personal information, education history, and program selection.",
  },
  {
    icon: CheckCircle,
    title: "3. Provide Documents",
    description: "Submit required documents including ID, high school diploma/GED, and any program-specific requirements.",
  },
  {
    icon: CreditCard,
    title: "4. Complete Payment",
    description: "Pay your tuition deposit or full amount through our secure payment process. Payment plans available.",
  },
  {
    icon: Mail,
    title: "5. Receive Confirmation",
    description: "Get your enrollment confirmation with program details, start date, orientation information, and LMS access.",
  },
];

const requiredDocuments = [
  "Government-issued photo ID (driver's license or passport)",
  "High school diploma or GED certificate",
  "Social Security card or number",
  "Immunization records (for clinical programs)",
  "Background check authorization",
  "Physical exam clearance (for clinical programs)",
];

const Admissions = () => {
  return (
    <Layout>
      <section className="py-12 lg:py-16 bg-card">
        <div className="container-academy">
          <h1 className="text-3xl lg:text-4xl font-bold text-foreground">
            How to Apply
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl">
            Start your healthcare career journey with a simple enrollment process. 
            Our admissions team is here to guide you every step of the way.
          </p>
          <div className="mt-8">
            <Button asChild size="lg">
              <Link to="/contact">
                Start Your Application
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-16">
        <div className="container-academy">
          {/* Enrollment Steps */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-foreground mb-8">Enrollment Process</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {steps.map((step) => (
                <Card key={step.title}>
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <step.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{step.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{step.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Required Documents */}
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-6">Required Documents</h2>
              <Card>
                <CardContent className="pt-6">
                  <ul className="space-y-3">
                    {requiredDocuments.map((doc) => (
                      <li key={doc} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                        <span>{doc}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-6 text-sm text-muted-foreground">
                    Additional documents may be required based on your selected program. 
                    Our admissions team will provide a complete checklist after you submit 
                    your initial application.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-6">What to Expect</h2>
              <div className="space-y-4">
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="font-semibold mb-2">Application Review</h3>
                    <p className="text-sm text-muted-foreground">
                      Applications are typically reviewed within 2-3 business days. 
                      You'll receive an email confirming your eligibility.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="font-semibold mb-2">Enrollment Agreement</h3>
                    <p className="text-sm text-muted-foreground">
                      Once approved, you'll receive an enrollment agreement outlining 
                      program details, policies, and your responsibilities as a student.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="font-semibold mb-2">Orientation</h3>
                    <p className="text-sm text-muted-foreground">
                      Before your start date, you'll attend an orientation session 
                      to meet instructors, tour facilities, and access your LMS account.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-16 text-center bg-card rounded-lg p-8 lg:p-12">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Contact our admissions team to begin your application or ask any questions 
              about our programs and enrollment process.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg">
                <Link to="/contact">Contact Admissions</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/programs">View Programs</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Admissions;
