import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { programs } from "@/data/programs";
import {
  Building2,
  HeartPulse,
  Home,
  Users,
  HandCoins,
  GraduationCap,
  CheckCircle,
  FileText,
  ArrowRight,
  Phone,
  Mail,
  Briefcase,
  Shield,
} from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const organizationTypes = [
  { value: "hospital", label: "Hospital / Health System", icon: HeartPulse },
  { value: "homecare", label: "Home Care Agency", icon: Home },
  { value: "company", label: "Company / Employer", icon: Building2 },
  { value: "nonprofit", label: "Non-Profit Organization", icon: HandCoins },
  { value: "government", label: "Government Agency", icon: Shield },
  { value: "staffing", label: "Staffing Agency", icon: Briefcase },
  { value: "other", label: "Other", icon: Users },
];

const sponsorshipTypes = [
  { value: "full-tuition", label: "Full Tuition Coverage" },
  { value: "partial-tuition", label: "Partial Tuition Coverage" },
  { value: "scholarship-fund", label: "Scholarship Fund" },
  { value: "cohort-sponsorship", label: "Cohort Sponsorship (Group Enrollment)" },
  { value: "workforce-development", label: "Workforce Development Partnership" },
];

const benefits = [
  {
    icon: GraduationCap,
    title: "Job-Ready Graduates",
    description: "Professionals trained to meet your organization's exact standards.",
    gradient: "from-primary/15 to-primary/5",
    iconBg: "bg-primary",
    border: "border-primary/20",
  },
  {
    icon: HandCoins,
    title: "Tax Advantages",
    description: "Potential deductions for educational sponsorship investments.",
    gradient: "from-accent/15 to-accent/5",
    iconBg: "bg-accent",
    border: "border-accent/20",
  },
  {
    icon: Users,
    title: "Talent Pipeline",
    description: "A steady flow of qualified healthcare workers when you need them.",
    gradient: "from-primary/15 to-primary/5",
    iconBg: "bg-primary",
    border: "border-primary/20",
  },
  {
    icon: Shield,
    title: "Community Impact",
    description: "Recognized as a leader investing in healthcare workforce development.",
    gradient: "from-accent/15 to-accent/5",
    iconBg: "bg-accent",
    border: "border-accent/20",
  },
];

export default function Enterprise() {
  const { toast } = useToast();
  const [selectedPrograms, setSelectedPrograms] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const toggleProgram = (programId: string) => {
    setSelectedPrograms((prev) =>
      prev.includes(programId) ? prev.filter((id) => id !== programId) : [...prev, programId]
    );
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Request Submitted!",
        description: "Our enterprise team will contact you within 1-2 business days.",
      });
    }, 1500);
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-primary-foreground py-16 lg:py-20">
        <div className="container-academy">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/15 border border-white/20 mb-5">
              <Building2 className="h-4 w-4" />
              <span className="text-sm font-medium">Enterprise Partners</span>
            </div>
            <h1 className="text-3xl lg:text-5xl font-bold leading-tight">
              Sponsor Healthcare Training.{" "}
              <span className="text-accent">Build Your Workforce.</span>
            </h1>
            <p className="mt-4 text-base lg:text-lg text-white/85 max-w-2xl">
              Cover tuition for your employees or community members — and gain a pipeline
              of certified, job-ready healthcare professionals.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-background">
        <div className="container-academy">
          <div className="text-center mb-10">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary mb-2">Partnership Benefits</span>
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground">
              Why Organizations Partner With Us
            </h2>
            <p className="mt-2 text-muted-foreground max-w-xl mx-auto">
              Reduce hiring costs, strengthen your team, and make a lasting community impact.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((b) => (
              <div
                key={b.title}
                className={`relative rounded-xl border ${b.border} bg-gradient-to-br ${b.gradient} p-6 text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300`}
              >
                <div className={`mx-auto w-12 h-12 rounded-full ${b.iconBg} flex items-center justify-center mb-4 shadow-md`}>
                  <b.icon className="h-5 w-5 text-white" />
                </div>
                <h3 className="font-bold text-foreground mb-2">{b.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{b.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-14 bg-card">
        <div className="container-academy">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <span className="inline-block text-xs font-semibold uppercase tracking-widest text-accent mb-2">Get Started</span>
              <h2 className="text-2xl lg:text-3xl font-bold text-foreground">
                Request a Partnership
              </h2>
              <p className="mt-1.5 text-sm text-muted-foreground">
                Fill out the form and our team will respond within 1–2 business days.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-10">
              {/* Section 1: Organization Info */}
              <Card className="border-border/50 shadow-sm">
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center gap-2 text-base">
                    <Building2 className="h-4 w-4 text-primary" />
                    Organization Details
                  </CardTitle>
                </CardHeader>
                <CardContent className="grid sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <Label htmlFor="org-name" className="text-sm font-medium">Organization Name *</Label>
                    <Input id="org-name" placeholder="e.g., Seattle General Hospital" required className="h-11 text-base" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="org-type" className="text-sm font-medium">Organization Type *</Label>
                    <Select required>
                      <SelectTrigger id="org-type" className="h-11 text-base">
                        <SelectValue placeholder="Select type" />
                      </SelectTrigger>
                      <SelectContent>
                        {organizationTypes.map((t) => (
                          <SelectItem key={t.value} value={t.value}>
                            {t.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="org-website" className="text-sm font-medium">Website</Label>
                    <Input id="org-website" placeholder="https://" type="url" className="h-11 text-base" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="org-size" className="text-sm font-medium">Number of Employees</Label>
                    <Select>
                      <SelectTrigger id="org-size" className="h-11 text-base">
                        <SelectValue placeholder="Select range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1-10">1 – 10</SelectItem>
                        <SelectItem value="11-50">11 – 50</SelectItem>
                        <SelectItem value="51-200">51 – 200</SelectItem>
                        <SelectItem value="201-500">201 – 500</SelectItem>
                        <SelectItem value="500+">500+</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2 sm:col-span-2">
                    <Label htmlFor="org-address" className="text-sm font-medium">Address *</Label>
                    <Input id="org-address" placeholder="Street, City, State, ZIP" required className="h-11 text-base" />
                  </div>
                </CardContent>
              </Card>

              {/* Section 2: Contact Person */}
              <Card className="border-border/50 shadow-sm">
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center gap-2 text-base">
                    <Users className="h-4 w-4 text-primary" />
                    Contact Person
                  </CardTitle>
                </CardHeader>
                <CardContent className="grid sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <Label htmlFor="contact-first" className="text-sm font-medium">First Name *</Label>
                    <Input id="contact-first" required className="h-11 text-base" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="contact-last" className="text-sm font-medium">Last Name *</Label>
                    <Input id="contact-last" required className="h-11 text-base" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="contact-title" className="text-sm font-medium">Job Title *</Label>
                    <Input id="contact-title" placeholder="e.g., HR Director" required className="h-11 text-base" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="contact-email" className="text-sm font-medium">Email *</Label>
                    <Input id="contact-email" type="email" required className="h-11 text-base" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="contact-phone" className="text-sm font-medium">Phone *</Label>
                    <Input id="contact-phone" type="tel" placeholder="(xxx) xxx-xxxx" required className="h-11 text-base" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="contact-preferred" className="text-sm font-medium">Preferred Contact Method</Label>
                    <Select>
                      <SelectTrigger id="contact-preferred" className="h-11 text-base">
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="email">Email</SelectItem>
                        <SelectItem value="phone">Phone</SelectItem>
                        <SelectItem value="either">Either</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </CardContent>
              </Card>

              {/* Section 3: Sponsorship Details */}
              <Card className="border-accent/30 shadow-sm bg-accent/[0.02]">
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center gap-2 text-base">
                    <HandCoins className="h-4 w-4 text-accent" />
                    Sponsorship Details
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <Label htmlFor="sponsorship-type" className="text-sm font-medium">Sponsorship Type *</Label>
                      <Select required>
                        <SelectTrigger id="sponsorship-type" className="h-11 text-base">
                          <SelectValue placeholder="Select type" />
                        </SelectTrigger>
                        <SelectContent>
                          {sponsorshipTypes.map((s) => (
                            <SelectItem key={s.value} value={s.value}>
                              {s.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="num-students" className="text-sm font-medium">Students to Sponsor *</Label>
                      <Input id="num-students" type="number" min="1" placeholder="e.g., 5" required className="h-11 text-base" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="budget" className="text-sm font-medium">Estimated Budget</Label>
                      <Select>
                        <SelectTrigger id="budget" className="h-11 text-base">
                          <SelectValue placeholder="Select range" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="under-5k">Under $5,000</SelectItem>
                          <SelectItem value="5k-15k">$5,000 – $15,000</SelectItem>
                          <SelectItem value="15k-50k">$15,000 – $50,000</SelectItem>
                          <SelectItem value="50k-100k">$50,000 – $100,000</SelectItem>
                          <SelectItem value="over-100k">$100,000+</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="preferred-start" className="text-sm font-medium">Preferred Start Date</Label>
                      <Input id="preferred-start" type="month" min="2026-03" className="h-11 text-base" />
                    </div>
                  </div>

                  {/* Program Selection */}
                  <div className="space-y-2">
                    <Label className="text-sm font-medium">Programs of Interest *</Label>
                    <div className="grid sm:grid-cols-2 gap-2.5">
                      {programs.map((p) => (
                        <label
                          key={p.id}
                          className={`flex items-center gap-3 p-3 rounded-lg border cursor-pointer transition-colors text-base ${
                            selectedPrograms.includes(p.id)
                              ? "border-primary bg-primary/5"
                              : "border-border/60 hover:border-primary/40"
                          }`}
                        >
                          <Checkbox
                            checked={selectedPrograms.includes(p.id)}
                            onCheckedChange={() => toggleProgram(p.id)}
                          />
                          <div>
                            <span className="font-medium text-foreground">{p.name}</span>
                            <span className="block text-sm text-muted-foreground">
                              {p.duration} · ${p.tuition.toLocaleString()}
                            </span>
                          </div>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label className="text-sm font-medium">Are sponsored students your current employees?</Label>
                    <Select>
                      <SelectTrigger className="h-11 text-base">
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="yes-all">Yes, all are employees</SelectItem>
                        <SelectItem value="yes-some">Some are employees</SelectItem>
                        <SelectItem value="no">No, external candidates</SelectItem>
                        <SelectItem value="mix">A mix of both</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </CardContent>
              </Card>

              {/* Section 4: Additional Info */}
              <Card className="border-border/50 shadow-sm">
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center gap-2 text-base">
                    <FileText className="h-4 w-4 text-primary" />
                    Additional Info
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="goals" className="text-sm font-medium">Primary goals for this sponsorship</Label>
                    <Textarea id="goals" rows={3} placeholder="e.g., Fill CNA staffing gaps, upskill employees..." className="text-base" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="requirements" className="text-sm font-medium">Specific training requirements</Label>
                    <Textarea id="requirements" rows={3} placeholder="e.g., Custom schedule, on-site training..." className="text-base" />
                  </div>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <Label className="text-sm font-medium">How did you hear about us?</Label>
                      <Select>
                        <SelectTrigger className="h-11 text-base">
                          <SelectValue placeholder="Select" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="referral">Referral</SelectItem>
                          <SelectItem value="website">Website / Search</SelectItem>
                          <SelectItem value="social-media">Social Media</SelectItem>
                          <SelectItem value="event">Event / Conference</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Agreement & Submit */}
              <div className="space-y-5">
                <label className="flex items-start gap-3 cursor-pointer">
                  <Checkbox required className="mt-0.5" />
                  <span className="text-xs text-muted-foreground leading-relaxed">
                    I confirm I'm authorized to represent this organization. Submitting this form
                    does not constitute a binding agreement — our team will follow up to discuss details.
                  </span>
                </label>

                <Button
                  type="submit"
                  size="default"
                  className="w-full sm:w-auto"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Submit Request"}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-10 bg-background">
        <div className="container-academy text-center">
          <p className="text-sm text-muted-foreground mb-3">Questions? Reach our enterprise team directly.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5 text-sm text-muted-foreground">
            <a href="mailto:enterprise@alikoacademy.com" className="flex items-center gap-1.5 hover:text-primary transition-colors">
              <Mail className="h-3.5 w-3.5" /> enterprise@alikoacademy.com
            </a>
            <a href="tel:+12065551234" className="flex items-center gap-1.5 hover:text-primary transition-colors">
              <Phone className="h-3.5 w-3.5" /> (206) 555-1234
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}