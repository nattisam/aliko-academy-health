import { Layout } from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const StudentLogin = () => {
  return (
    <Layout>
      <section className="py-16 lg:py-24">
        <div className="container-academy">
          <div className="max-w-md mx-auto text-center">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Student Portal</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-muted-foreground">
                  Access your course materials, assignments, and progress through our 
                  Learning Management System (LMS).
                </p>
                
                <Button asChild size="lg" className="w-full">
                  <a 
                    href="https://lms.alikoacademy.edu" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    Go to Student Portal
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>

                <div className="pt-4 border-t border-border">
                  <p className="text-sm text-muted-foreground mb-2">
                    Need help logging in?
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Contact Student Services at{" "}
                    <a href="tel:2065550100" className="text-primary hover:underline">
                      (206) 555-0100
                    </a>
                    {" "}or{" "}
                    <a href="mailto:support@alikoacademy.edu" className="text-primary hover:underline">
                      support@alikoacademy.edu
                    </a>
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default StudentLogin;
