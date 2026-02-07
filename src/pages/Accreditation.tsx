import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, CheckCircle, BookOpen, Scale } from "lucide-react";

const Accreditation = () => {
  return (
    <Layout>
      <section className="py-12 lg:py-16 bg-card">
        <div className="container-academy">
          <h1 className="text-3xl lg:text-4xl font-bold text-foreground">
            Accreditation & Compliance
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl">
            Aliko Academy maintains rigorous quality standards and is committed to meeting 
            all regulatory requirements for healthcare education in Washington State.
          </p>
        </div>
      </section>

      <section className="py-12 lg:py-16">
        <div className="container-academy space-y-12">
          {/* Accreditation Status */}
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Shield className="h-6 w-6 text-primary" />
                  <CardTitle>Accreditation-Ready Framework</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Aliko Academy operates under a governance framework designed to align with 
                  accreditation standards set by recognized healthcare education accrediting bodies.
                </p>
                <p className="text-muted-foreground">
                  Our curriculum, facilities, and administrative processes are structured to 
                  meet the rigorous requirements of organizations such as ACHC (Accreditation 
                  Commission for Health Care).
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Scale className="h-6 w-6 text-primary" />
                  <CardTitle>State Alignment</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Our programs are designed to align with Washington State training requirements 
                  for healthcare professionals.
                </p>
                <p className="text-muted-foreground">
                  Graduates are prepared to meet certification and licensing requirements 
                  established by state regulatory agencies, including the Washington State 
                  Department of Health.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Quality Framework */}
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-6">Our Quality Framework</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <CardContent className="pt-6">
                  <CheckCircle className="h-8 w-8 text-accent mb-4" />
                  <h3 className="font-semibold mb-2">Qualified Instructors</h3>
                  <p className="text-sm text-muted-foreground">
                    All instructors meet or exceed state requirements for healthcare educator 
                    qualifications, with relevant certifications and clinical experience.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <CheckCircle className="h-8 w-8 text-accent mb-4" />
                  <h3 className="font-semibold mb-2">Current Curriculum</h3>
                  <p className="text-sm text-muted-foreground">
                    Program content is regularly reviewed and updated to reflect current 
                    industry standards, best practices, and certification requirements.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <CheckCircle className="h-8 w-8 text-accent mb-4" />
                  <h3 className="font-semibold mb-2">Equipped Facilities</h3>
                  <p className="text-sm text-muted-foreground">
                    Our lab facilities are equipped with industry-standard equipment and 
                    supplies to provide realistic hands-on training experiences.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <CheckCircle className="h-8 w-8 text-accent mb-4" />
                  <h3 className="font-semibold mb-2">Clinical Partnerships</h3>
                  <p className="text-sm text-muted-foreground">
                    Formal agreements with healthcare facilities ensure quality clinical 
                    training experiences supervised by qualified professionals.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <CheckCircle className="h-8 w-8 text-accent mb-4" />
                  <h3 className="font-semibold mb-2">Student Support</h3>
                  <p className="text-sm text-muted-foreground">
                    Comprehensive student services including academic advising, tutoring, 
                    and career support to promote student success.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <CheckCircle className="h-8 w-8 text-accent mb-4" />
                  <h3 className="font-semibold mb-2">Continuous Improvement</h3>
                  <p className="text-sm text-muted-foreground">
                    Regular program evaluation, student feedback, and outcome tracking 
                    drive ongoing improvements to our educational offerings.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Certifications */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <BookOpen className="h-6 w-6 text-primary" />
                <CardTitle>Certification Preparation</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-6">
                Our programs prepare students for nationally recognized certifications and 
                state-required credentials. Upon successful completion, graduates are eligible 
                to sit for the following exams:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary shrink-0" />
                    <span className="text-sm">Washington State CNA Certification</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary shrink-0" />
                    <span className="text-sm">AAPC CPC Certification</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary shrink-0" />
                    <span className="text-sm">AAMA CMA Certification</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary shrink-0" />
                    <span className="text-sm">ASCP Phlebotomy Certification</span>
                  </li>
                </ul>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary shrink-0" />
                    <span className="text-sm">NHA EKG Technician Certification</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary shrink-0" />
                    <span className="text-sm">NHA CPCT Certification</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary shrink-0" />
                    <span className="text-sm">WA State HCA/HHA Certification</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary shrink-0" />
                    <span className="text-sm">AHA BLS Provider Certification</span>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Questions */}
          <div className="text-center">
            <p className="text-muted-foreground mb-4">
              Have questions about our accreditation status or compliance?
            </p>
            <Link to="/contact" className="text-primary hover:underline font-medium">
              Contact our administration team →
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Accreditation;
