import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  FileText, 
  Users, 
  Search, 
  Handshake,
  ArrowRight,
  CheckCircle
} from "lucide-react";

const services = [
  {
    icon: FileText,
    title: "Resume Assistance",
    description: "Get professional guidance on crafting a healthcare-focused resume that highlights your training, certifications, and clinical experience.",
    features: [
      "Resume review and feedback",
      "Healthcare-specific formatting",
      "Skills and certification highlighting",
      "Cover letter guidance",
    ],
  },
  {
    icon: Users,
    title: "Interview Preparation",
    description: "Practice common healthcare interview questions and learn strategies to present yourself confidently to potential employers.",
    features: [
      "Mock interview sessions",
      "Common question preparation",
      "Professional presentation tips",
      "Salary negotiation basics",
    ],
  },
  {
    icon: Search,
    title: "Job Search Guidance",
    description: "Learn effective job search strategies and get access to resources specifically for healthcare career seekers.",
    features: [
      "Job board navigation",
      "Application best practices",
      "Networking strategies",
      "Follow-up techniques",
    ],
  },
  {
    icon: Handshake,
    title: "Employer Connections",
    description: "Benefit from our relationships with healthcare employers throughout the region who actively recruit our graduates.",
    features: [
      "Career fairs and events",
      "Employer presentations",
      "Job opportunity notifications",
      "Industry networking",
    ],
  },
];

const CareerServices = () => {
  return (
    <Layout>
      <section className="py-12 lg:py-16 bg-card">
        <div className="container-academy">
          <h1 className="text-3xl lg:text-4xl font-bold text-foreground">
            Career Services
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl">
            Your success doesn't end at graduation. Our career services team is dedicated 
            to helping you transition from student to employed healthcare professional.
          </p>
        </div>
      </section>

      <section className="py-12 lg:py-16">
        <div className="container-academy">
          {/* Services Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {services.map((service) => (
              <Card key={service.title}>
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-accent shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Career Network Link */}
          <Card className="bg-primary text-primary-foreground mb-16">
            <CardContent className="pt-6">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2">Career Network Partners</h3>
                  <p className="opacity-90">
                    Explore our network of healthcare employers who actively recruit Aliko Academy graduates.
                  </p>
                </div>
                <Button asChild variant="secondary" className="shrink-0">
                  <Link to="/partners">
                    View Partners
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* How It Works */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-foreground mb-8">How Career Services Works</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardContent className="pt-6 text-center">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                    <span className="text-xl font-bold text-accent">1</span>
                  </div>
                  <h3 className="font-semibold mb-2">Complete Training</h3>
                  <p className="text-sm text-muted-foreground">
                    Focus on your studies and certification. Career services support begins 
                    in the final weeks of your program.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6 text-center">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                    <span className="text-xl font-bold text-accent">2</span>
                  </div>
                  <h3 className="font-semibold mb-2">Meet Your Advisor</h3>
                  <p className="text-sm text-muted-foreground">
                    Schedule a one-on-one session to discuss your career goals, review your 
                    resume, and create a job search plan.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6 text-center">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                    <span className="text-xl font-bold text-accent">3</span>
                  </div>
                  <h3 className="font-semibold mb-2">Launch Your Career</h3>
                  <p className="text-sm text-muted-foreground">
                    Apply to positions, attend interviews, and leverage our employer network 
                    to find the right opportunity.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Disclaimer & CTA */}
          <Card className="bg-secondary/30">
            <CardContent className="pt-6">
              <p className="text-sm text-muted-foreground mb-6">
                <strong>Note:</strong> While Aliko Academy provides comprehensive career services 
                and maintains strong employer relationships, we do not guarantee employment. 
                Career outcomes depend on individual effort, market conditions, and employer hiring decisions.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild>
                  <Link to="/contact">Contact Career Services</Link>
                </Button>
                <Button asChild variant="outline">
                  <Link to="/programs">Explore Programs</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </Layout>
  );
};

export default CareerServices;
