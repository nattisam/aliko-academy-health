import { useParams, Link, Navigate } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { programs } from "@/data/programs";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Clock, 
  MapPin, 
  Calendar, 
  DollarSign, 
  CheckCircle, 
  BookOpen,
  Award,
  ArrowLeft
} from "lucide-react";

const ProgramDetail = () => {
  const { programId } = useParams<{ programId: string }>();
  const program = programs.find((p) => p.id === programId);

  if (!program) {
    return <Navigate to="/programs" replace />;
  }

  return (
    <Layout>
      {/* Header */}
      <section className="py-12 lg:py-16 bg-card border-b border-border">
        <div className="container-academy">
          <Link 
            to="/programs" 
            className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-6"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Programs
          </Link>

          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                {program.featured && (
                  <Badge variant="secondary">Featured Program</Badge>
                )}
                <Badge 
                  className={
                    program.enrollmentStatus === "open"
                      ? "bg-accent text-accent-foreground"
                      : ""
                  }
                >
                  {program.enrollmentStatus === "open" ? "Enrollment Open" : "Enrollment Closed"}
                </Badge>
              </div>
              <h1 className="text-3xl lg:text-4xl font-bold text-foreground">
                {program.name}
              </h1>
              <p className="mt-4 text-lg text-muted-foreground max-w-3xl">
                {program.description}
              </p>
            </div>

            <Card className="lg:w-80 shrink-0">
              <CardHeader>
                <CardTitle className="text-lg">Program Quick Facts</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <p className="text-sm font-medium">{program.duration}</p>
                    <p className="text-xs text-muted-foreground">{program.hours.total} total hours</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <p className="text-sm font-medium">{program.modality}</p>
                    <p className="text-xs text-muted-foreground">{program.location}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <DollarSign className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <p className="text-sm font-medium">${program.tuition.toLocaleString()}</p>
                    <p className="text-xs text-muted-foreground">Total tuition</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Calendar className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <p className="text-sm font-medium">
                      {program.enrollmentStatus === "open" 
                        ? `Starts ${program.startDate}` 
                        : "Check Schedule"}
                    </p>
                    <p className="text-xs text-muted-foreground">Next cohort</p>
                  </div>
                </div>
                <Button asChild className="w-full" size="lg">
                  <Link to="/admissions">
                    {program.enrollmentStatus === "open" ? "Apply Now" : "Join Waitlist"}
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 lg:py-16">
        <div className="container-academy">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-12">
              {/* Career Pathways */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <Award className="h-6 w-6 text-primary" />
                  Career Pathways
                </h2>
                <p className="text-muted-foreground mb-4">
                  Graduates of this program find employment in various healthcare settings:
                </p>
                <ul className="grid sm:grid-cols-2 gap-3">
                  {program.careerPathways.map((pathway) => (
                    <li key={pathway} className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-accent shrink-0" />
                      <span className="text-sm">{pathway}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Curriculum */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <BookOpen className="h-6 w-6 text-primary" />
                  Curriculum Overview
                </h2>
                <p className="text-muted-foreground mb-6">
                  This program provides comprehensive training through a combination of theory, 
                  hands-on lab practice, and clinical experience.
                </p>
                <div className="grid sm:grid-cols-3 gap-4">
                  <Card>
                    <CardContent className="pt-6 text-center">
                      <p className="text-3xl font-bold text-primary">{program.hours.theory}</p>
                      <p className="text-sm text-muted-foreground mt-1">Theory Hours</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="pt-6 text-center">
                      <p className="text-3xl font-bold text-primary">{program.hours.lab}</p>
                      <p className="text-sm text-muted-foreground mt-1">Lab Hours</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="pt-6 text-center">
                      <p className="text-3xl font-bold text-primary">{program.hours.clinical}</p>
                      <p className="text-sm text-muted-foreground mt-1">Clinical Hours</p>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Admission Requirements */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  Admission Requirements
                </h2>
                <ul className="space-y-3">
                  {program.requirements.map((req) => (
                    <li key={req} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Certification */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  Certification Pathway
                </h2>
                <Card className="bg-secondary/50">
                  <CardContent className="pt-6">
                    <p className="text-muted-foreground">
                      Upon successful completion of this program, you will be prepared to take:
                    </p>
                    <p className="mt-2 font-semibold text-foreground">
                      {program.certification}
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Tuition Card */}
              <Card>
                <CardHeader>
                  <CardTitle>Tuition & Fees</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between items-center pb-4 border-b border-border">
                    <span>Program Tuition</span>
                    <span className="font-semibold">${program.tuition.toLocaleString()}</span>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    <p className="mb-2">Tuition includes:</p>
                    <ul className="space-y-1">
                      <li>• All course materials</li>
                      <li>• Lab supplies and equipment</li>
                      <li>• Clinical placement coordination</li>
                      <li>• Certification exam preparation</li>
                    </ul>
                  </div>
                  <Button asChild variant="outline" className="w-full">
                    <Link to="/tuition">View Payment Options</Link>
                  </Button>
                </CardContent>
              </Card>

              {/* Start Date Card */}
              <Card className="border-accent">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calendar className="h-5 w-5 text-accent" />
                    Next Start Date
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold text-foreground mb-2">
                    {program.startDate}
                  </p>
                  <Badge
                    className={
                      program.enrollmentStatus === "open"
                        ? "bg-accent text-accent-foreground"
                        : ""
                    }
                  >
                    {program.enrollmentStatus === "open" ? "Enrollment Open" : "Enrollment Closed"}
                  </Badge>
                  <Button asChild className="w-full mt-4">
                    <Link to="/admissions">Apply Now</Link>
                  </Button>
                </CardContent>
              </Card>

              {/* Contact Card */}
              <Card>
                <CardHeader>
                  <CardTitle>Questions?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Our admissions team is here to help you get started.
                  </p>
                  <Button asChild variant="outline" className="w-full">
                    <Link to="/contact">Contact Admissions</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ProgramDetail;
