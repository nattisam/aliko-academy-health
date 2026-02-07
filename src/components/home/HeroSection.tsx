import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
  return (
    <section className="bg-card py-16 lg:py-24">
      <div className="container-academy">
        <div className="max-w-3xl">
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground leading-tight">
            Start Your Healthcare Career with{" "}
            <span className="text-primary">Confidence</span>
          </h1>
          <p className="mt-6 text-lg lg:text-xl text-muted-foreground max-w-2xl">
            Industry-aligned healthcare training with clear cohort start dates. 
            Join thousands of graduates building rewarding careers in healthcare.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="text-base">
              <Link to="/programs">
                View Programs
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-base">
              <Link to="/admissions">Apply Now</Link>
            </Button>
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-accent" />
              <span>9 Healthcare Programs</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-accent" />
              <span>Flexible Schedules</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-accent" />
              <span>Career Support</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
