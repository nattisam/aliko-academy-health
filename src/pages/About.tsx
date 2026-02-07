import { Layout } from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Target, Eye, Heart, Users } from "lucide-react";

const About = () => {
  return (
    <Layout>
      <section className="py-12 lg:py-16 bg-card">
        <div className="container-academy">
          <h1 className="text-3xl lg:text-4xl font-bold text-foreground">
            About Aliko Academy
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl">
            Empowering the next generation of healthcare professionals through quality education, 
            hands-on training, and career-focused support.
          </p>
        </div>
      </section>

      <section className="py-12 lg:py-16">
        <div className="container-academy space-y-16">
          {/* Mission, Vision, Values */}
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <Target className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  To provide accessible, high-quality healthcare education that prepares students 
                  for successful careers and certifications while meeting the workforce needs of 
                  our community.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Eye className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  To be the premier healthcare training institution in Washington State, recognized 
                  for excellence in education, graduate outcomes, and community partnerships.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Heart className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Our Values</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-muted-foreground space-y-2">
                  <li><strong>Excellence</strong> in education and training</li>
                  <li><strong>Integrity</strong> in all our practices</li>
                  <li><strong>Compassion</strong> for students and patients</li>
                  <li><strong>Community</strong> partnership and service</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Our Story */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">Our Commitment</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Aliko Academy was founded with a clear purpose: to bridge the gap between aspiring 
                  healthcare workers and the growing demand for qualified professionals in our community.
                </p>
                <p>
                  We believe that quality healthcare education should be accessible, practical, and 
                  directly aligned with industry needs. Our programs combine rigorous academic 
                  instruction with extensive hands-on training to ensure graduates are truly prepared 
                  for their careers.
                </p>
                <p>
                  Through partnerships with healthcare facilities throughout Washington State, we 
                  provide students with real-world clinical experiences that build confidence and 
                  competence.
                </p>
              </div>
            </div>
            <Card className="bg-primary text-primary-foreground">
              <CardContent className="pt-6">
                <div className="space-y-6">
                  <div>
                    <p className="text-4xl font-bold">9</p>
                    <p className="text-primary-foreground/80">Healthcare Programs</p>
                  </div>
                  <div>
                    <p className="text-4xl font-bold">1000+</p>
                    <p className="text-primary-foreground/80">Graduates Trained</p>
                  </div>
                  <div>
                    <p className="text-4xl font-bold">50+</p>
                    <p className="text-primary-foreground/80">Partner Organizations</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Leadership */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <Users className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-bold text-foreground">Leadership Team</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardContent className="pt-6 text-center">
                  <div className="w-20 h-20 rounded-full bg-secondary mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl font-bold text-muted-foreground">AA</span>
                  </div>
                  <h3 className="font-semibold">Academy Director</h3>
                  <p className="text-sm text-muted-foreground mt-1">Executive Leadership</p>
                  <p className="text-sm text-muted-foreground mt-3">
                    Oversees all academy operations, strategic planning, and regulatory compliance.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6 text-center">
                  <div className="w-20 h-20 rounded-full bg-secondary mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl font-bold text-muted-foreground">PD</span>
                  </div>
                  <h3 className="font-semibold">Program Director</h3>
                  <p className="text-sm text-muted-foreground mt-1">Academic Leadership</p>
                  <p className="text-sm text-muted-foreground mt-3">
                    Manages curriculum development, instructor coordination, and academic standards.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6 text-center">
                  <div className="w-20 h-20 rounded-full bg-secondary mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl font-bold text-muted-foreground">SS</span>
                  </div>
                  <h3 className="font-semibold">Student Services Director</h3>
                  <p className="text-sm text-muted-foreground mt-1">Student Success</p>
                  <p className="text-sm text-muted-foreground mt-3">
                    Leads admissions, career services, and student support initiatives.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center bg-card rounded-lg p-8 lg:p-12">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Ready to Join Our Community?
            </h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Take the first step toward your healthcare career. Explore our programs 
              or contact us to learn more about how Aliko Academy can help you achieve 
              your goals.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg">
                <Link to="/programs">View Programs</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
