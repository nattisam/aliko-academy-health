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
    title: "Trained Workforce",
    description: "Get job-ready healthcare professionals trained to your standards.",
  },
  {
    icon: HandCoins,
    title: "Tax Benefits",
    description: "Potential tax deductions for educational sponsorships and workforce investments.",
  },
  {
    icon: Users,
    title: "Talent Pipeline",
    description: "Build a reliable pipeline of qualified healthcare workers for your organization.",
  },
  {
    icon: Shield,
    title: "Brand Visibility",
    description: "Recognition as a community partner investing in healthcare education.",
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
      <section className="bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-primary-foreground py-20">
        <div className="container-academy">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/15 border border-white/20 mb-6">
              <Building2 className="h-4 w-4" />
              <span className="text-sm font-medium">Enterprise & Organizational Partners</span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
              Invest in Your Workforce.{" "}
              <span className="text-accent">Sponsor Healthcare Training.</span>
            </h1>
            <p className="mt-6 text-lg text-white/80 max-w-2xl">
              Hospitals, home care agencies, companies, and non-profits can sponsor students
              through Aliko Academy Health — covering tuition costs and building a qualified
              healthcare workforce for your organization.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-background">
        <div className="container-academy">
          <h2 className="text-2xl font-bold text-foreground text-center mb-10">
            Why Organizations Partner With Us
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((b) => (
              <Card key={b.title} className="border-border text-center">
                <CardContent className="pt-6">
                  <div className="mx-auto w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <b.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{b.title}</h3>
                  <p className="text-sm text-muted-foreground">{b.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-16 bg-card">
        <div className="container-academy">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-2xl font-bold text-foreground">
                Enterprise Sponsorship Request
              </h2>
              <p className="mt-2 text-muted-foreground">
                Complete the form below and our enterprise team will reach out within 1-2 business days.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-10">
              {/* Section 1: Organization Info */}
              <Card className="border-border">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Building2 className="h-5 w-5 text-primary" />
                    Organization Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="grid sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <Label htmlFor="org-name">Organization Name *</Label>
                    <Input id="org-name" placeholder="e.g., Seattle General Hospital" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="org-type">Organization Type *</Label>
                    <Select required>
                      <SelectTrigger id="org-type">
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
                    <Label htmlFor="org-website">Website</Label>
                    <Input id="org-website" placeholder="https://" type="url" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="org-ein">EIN / Tax ID (for non-profits)</Label>
                    <Input id="org-ein" placeholder="XX-XXXXXXX" />
                  </div>
                  <div className="space-y-2 sm:col-span-2">
                    <Label htmlFor="org-address">Organization Address *</Label>
                    <Input id="org-address" placeholder="Street address, City, State, ZIP" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="org-size">Number of Employees</Label>
                    <Select>
                      <SelectTrigger id="org-size">
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
                  <div className="space-y-2">
                    <Label htmlFor="org-industry">Industry Sector</Label>
                    <Select>
                      <SelectTrigger id="org-industry">
                        <SelectValue placeholder="Select sector" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="healthcare">Healthcare</SelectItem>
                        <SelectItem value="homecare">Home Care / Home Health</SelectItem>
                        <SelectItem value="longterm-care">Long-Term Care</SelectItem>
                        <SelectItem value="staffing">Staffing / Recruitment</SelectItem>
                        <SelectItem value="government">Government / Public Sector</SelectItem>
                        <SelectItem value="nonprofit">Non-Profit / Community</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </CardContent>
              </Card>

              {/* Section 2: Contact Person */}
              <Card className="border-border">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Users className="h-5 w-5 text-primary" />
                    Primary Contact Person
                  </CardTitle>
                </CardHeader>
                <CardContent className="grid sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <Label htmlFor="contact-first">First Name *</Label>
                    <Input id="contact-first" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="contact-last">Last Name *</Label>
                    <Input id="contact-last" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="contact-title">Job Title *</Label>
                    <Input id="contact-title" placeholder="e.g., HR Director" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="contact-department">Department</Label>
                    <Input id="contact-department" placeholder="e.g., Human Resources" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="contact-email">Email Address *</Label>
                    <Input id="contact-email" type="email" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="contact-phone">Phone Number *</Label>
                    <Input id="contact-phone" type="tel" placeholder="(xxx) xxx-xxxx" required />
                  </div>
                  <div className="space-y-2 sm:col-span-2">
                    <Label htmlFor="contact-preferred">Preferred Contact Method</Label>
                    <Select>
                      <SelectTrigger id="contact-preferred">
                        <SelectValue placeholder="Select preference" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="email">Email</SelectItem>
                        <SelectItem value="phone">Phone Call</SelectItem>
                        <SelectItem value="either">Either</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </CardContent>
              </Card>

              {/* Section 3: Sponsorship Details */}
              <Card className="border-border">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <HandCoins className="h-5 w-5 text-accent" />
                    Sponsorship Details
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="sponsorship-type">Sponsorship Type *</Label>
                    <Select required>
                      <SelectTrigger id="sponsorship-type">
                        <SelectValue placeholder="Select sponsorship type" />
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

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <Label htmlFor="num-students">Number of Students to Sponsor *</Label>
                      <Input id="num-students" type="number" min="1" placeholder="e.g., 5" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="budget">Estimated Budget Range</Label>
                      <Select>
                        <SelectTrigger id="budget">
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
                  </div>

                  {/* Program Selection */}
                  <div className="space-y-3">
                    <Label>Programs of Interest *</Label>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {programs.map((p) => (
                        <label
                          key={p.id}
                          className={`flex items-start gap-3 p-3 rounded-lg border cursor-pointer transition-colors ${
                            selectedPrograms.includes(p.id)
                              ? "border-primary bg-primary/5"
                              : "border-border hover:border-primary/40"
                          }`}
                        >
                          <Checkbox
                            checked={selectedPrograms.includes(p.id)}
                            onCheckedChange={() => toggleProgram(p.id)}
                          />
                          <div>
                            <span className="text-sm font-medium text-foreground">{p.name}</span>
                            <span className="block text-xs text-muted-foreground">
                              {p.duration} · ${p.tuition.toLocaleString()}
                            </span>
                          </div>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="preferred-start">Preferred Start Date</Label>
                    <Input id="preferred-start" type="month" min="2026-03" />
                  </div>

                  <div className="space-y-2">
                    <Label>Will sponsored students be your current employees?</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="yes-all">Yes, all are current employees</SelectItem>
                        <SelectItem value="yes-some">Some are current employees</SelectItem>
                        <SelectItem value="no">No, they are external candidates</SelectItem>
                        <SelectItem value="mix">A mix of both</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </CardContent>
              </Card>

              {/* Section 4: Additional Requirements */}
              <Card className="border-border">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <FileText className="h-5 w-5 text-primary" />
                    Additional Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-5">
                  <div className="space-y-2">
                    <Label htmlFor="goals">
                      What are your primary goals for this sponsorship?
                    </Label>
                    <Textarea
                      id="goals"
                      rows={3}
                      placeholder="e.g., Fill CNA staffing gaps, upskill current employees, workforce development initiative..."
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="requirements">
                      Any specific training requirements or customizations needed?
                    </Label>
                    <Textarea
                      id="requirements"
                      rows={3}
                      placeholder="e.g., Custom schedule, on-site training, specific competencies..."
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>How did you hear about Aliko Academy Health?</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="referral">Referral</SelectItem>
                        <SelectItem value="website">Website / Search</SelectItem>
                        <SelectItem value="social-media">Social Media</SelectItem>
                        <SelectItem value="event">Event / Conference</SelectItem>
                        <SelectItem value="partner">Existing Partner</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="additional">Additional Comments</Label>
                    <Textarea id="additional" rows={3} placeholder="Any other information you'd like to share..." />
                  </div>
                </CardContent>
              </Card>

              {/* Agreement & Submit */}
              <div className="space-y-6">
                <label className="flex items-start gap-3 cursor-pointer">
                  <Checkbox required />
                  <span className="text-sm text-muted-foreground leading-relaxed">
                    I confirm that I am authorized to represent this organization and that the information
                    provided is accurate. I understand that submitting this form does not constitute a
                    binding agreement, and that an Aliko Academy Health representative will follow up to
                    discuss partnership details and formal agreements.
                  </span>
                </label>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full sm:w-auto text-base"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Submit Sponsorship Request"}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-12 bg-background">
        <div className="container-academy text-center">
          <h3 className="text-xl font-semibold text-foreground mb-4">
            Have Questions? Speak With Our Enterprise Team
          </h3>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-muted-foreground">
            <a href="mailto:enterprise@alikoacademy.com" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Mail className="h-4 w-4" /> enterprise@alikoacademy.com
            </a>
            <a href="tel:+12065551234" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Phone className="h-4 w-4" /> (206) 555-1234
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}