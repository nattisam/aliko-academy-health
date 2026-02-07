import { 
  ClipboardList, 
  FileEdit, 
  Monitor, 
  Stethoscope, 
  Award, 
  Briefcase 
} from "lucide-react";

const steps = [
  {
    icon: ClipboardList,
    title: "Choose Program",
    description: "Explore our 9 healthcare programs and find the right fit for your career goals.",
  },
  {
    icon: FileEdit,
    title: "Enroll Online",
    description: "Complete your application and enrollment documents through our simple process.",
  },
  {
    icon: Monitor,
    title: "Access LMS",
    description: "Get immediate access to your learning materials and course schedule.",
  },
  {
    icon: Stethoscope,
    title: "Hands-On Training",
    description: "Complete theory, lab, and clinical hours with experienced instructors.",
  },
  {
    icon: Award,
    title: "Certification",
    description: "Prepare for and pass your state or national certification exam.",
  },
  {
    icon: Briefcase,
    title: "Career Support",
    description: "Access resume help, interview prep, and job search assistance.",
  },
];

export function HowItWorks() {
  return (
    <section className="py-16 lg:py-24 bg-card">
      <div className="container-academy">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
            How It Works
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Your path from enrollment to certification in six clear steps.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={step.title} className="relative">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <step.icon className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-sm font-semibold text-accent">
                      Step {index + 1}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
