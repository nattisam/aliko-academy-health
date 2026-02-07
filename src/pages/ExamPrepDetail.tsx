import { useParams, Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { examPrepPrograms, EXAM_PREP_DISCLAIMER, COLLABORATION_NOTE } from "@/data/examPrepPrograms";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, MapPin, Calendar, DollarSign, AlertCircle, BookOpen, Users, CheckCircle } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";

const ExamPrepDetail = () => {
  const { programId } = useParams<{ programId: string }>();
  const program = examPrepPrograms.find((p) => p.id === programId);

  if (!program) {
    return (
      <Layout>
        <div className="container-academy py-16 text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Program Not Found</h1>
          <p className="text-muted-foreground mb-8">
            The exam prep program you're looking for doesn't exist.
          </p>
          <Button asChild>
            <Link to="/exam-prep">View All Exam Prep Programs</Link>
          </Button>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-12 lg:py-16 bg-card border-b border-border">
        <div className="container-academy">
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <Badge variant="outline">Exam Preparation</Badge>
            <Badge variant="secondary">Non-Credential</Badge>
            {program.featured && <Badge className="bg-accent text-accent-foreground">Featured</Badge>}
          </div>
          <h1 className="text-3xl lg:text-4xl font-bold text-foreground">
            {program.name}
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl">
            {program.description}
          </p>

          {/* Compliance Disclaimer */}
          <Alert className="mt-6 border-accent/50 bg-accent/10">
            <AlertCircle className="h-4 w-4 text-accent" />
            <AlertDescription className="text-sm text-muted-foreground">
              {EXAM_PREP_DISCLAIMER}
            </AlertDescription>
          </Alert>

          {/* Quick Stats */}
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="flex items-center gap-3 p-4 bg-background rounded-lg border border-border">
              <Clock className="h-5 w-5 text-primary" />
              <div>
                <p className="text-xs text-muted-foreground">Duration</p>
                <p className="font-semibold text-foreground">{program.duration}</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-4 bg-background rounded-lg border border-border">
              <BookOpen className="h-5 w-5 text-primary" />
              <div>
                <p className="text-xs text-muted-foreground">Total Hours</p>
                <p className="font-semibold text-foreground">{program.hours.total} hours</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-4 bg-background rounded-lg border border-border">
              <MapPin className="h-5 w-5 text-primary" />
              <div>
                <p className="text-xs text-muted-foreground">Modality</p>
                <p className="font-semibold text-foreground">{program.modality}</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-4 bg-background rounded-lg border border-border">
              <DollarSign className="h-5 w-5 text-primary" />
              <div>
                <p className="text-xs text-muted-foreground">Tuition</p>
                <p className="font-semibold text-foreground">${program.tuition.toLocaleString()}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="container-academy">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left Column - Details */}
            <div className="lg:col-span-2 space-y-8">
              {/* Topics Covered */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Topics Covered</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="grid sm:grid-cols-2 gap-3">
                    {program.topicsCovered.map((topic, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{topic}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Target Audience */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl flex items-center gap-2">
                    <Users className="h-5 w-5" />
                    Who Should Enroll
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {program.targetAudience.map((audience, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-primary" />
                        <span className="text-muted-foreground">{audience}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Requirements */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Prerequisites</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {program.requirements.map((req, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-muted-foreground shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{req}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Collaboration Note */}
              <div className="p-6 bg-muted/30 rounded-lg border border-border">
                <h3 className="font-semibold text-foreground mb-2">Collaboration Partner</h3>
                <p className="text-sm text-muted-foreground italic">
                  {COLLABORATION_NOTE}
                </p>
              </div>
            </div>

            {/* Right Column - CTA Card */}
            <div>
              <Card className="sticky top-24">
                <CardHeader>
                  <CardTitle className="text-xl">Enrollment Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-5 w-5 text-muted-foreground" />
                    <div>
                      <p className="text-sm text-muted-foreground">Next Start Date</p>
                      <Badge
                        variant={program.enrollmentStatus === "open" ? "default" : "secondary"}
                        className={
                          program.enrollmentStatus === "open"
                            ? "bg-accent text-accent-foreground"
                            : ""
                        }
                      >
                        {program.enrollmentStatus === "open"
                          ? program.startDate
                          : "Enrollment Closed"}
                      </Badge>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-border">
                    <p className="text-2xl font-bold text-foreground">
                      ${program.tuition.toLocaleString()}
                    </p>
                    <p className="text-sm text-muted-foreground">Course Fee</p>
                  </div>

                  <Button
                    asChild
                    className="w-full"
                    size="lg"
                    disabled={program.enrollmentStatus !== "open"}
                  >
                    <Link to="/admissions">
                      {program.enrollmentStatus === "open" ? "Enroll Now" : "Join Waitlist"}
                    </Link>
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    Questions? <Link to="/contact" className="text-primary hover:underline">Contact us</Link>
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Disclaimer */}
      <section className="py-8 bg-muted/30 border-t border-border">
        <div className="container-academy">
          <Alert className="border-accent/50 bg-accent/10">
            <AlertCircle className="h-4 w-4 text-accent" />
            <AlertDescription className="text-sm text-muted-foreground">
              <strong>Important:</strong> {EXAM_PREP_DISCLAIMER} Success on certification 
              exams depends on individual preparation, prior education, and exam readiness.
            </AlertDescription>
          </Alert>
        </div>
      </section>
    </Layout>
  );
};

export default ExamPrepDetail;
