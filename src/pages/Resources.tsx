import { Layout } from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  FileText,
  Shield,
  RefreshCw,
  HelpCircle,
  CheckCircle,
  ExternalLink,
  ClipboardList,
  ArrowRight,
} from "lucide-react";

const licenseSteps = [
  {
    step: 1,
    title: "Complete an Approved CNA Training Program",
    description:
      "Enroll in and successfully complete a state-approved Nursing Assistant Certified (NAC) training program that meets Washington State's minimum hour requirements.",
  },
  {
    step: 2,
    title: "Pass the State Certification Exam",
    description:
      "Register for and pass both the written (or oral) knowledge test and the skills evaluation administered by the Washington State testing authority.",
  },
  {
    step: 3,
    title: "Submit Background Check",
    description:
      "Complete a Washington State Patrol background check and FBI fingerprint check as required by the Department of Health for healthcare workers.",
  },
  {
    step: 4,
    title: "Apply to the Department of Health",
    description:
      "Submit your application, exam results, background check clearance, and required fees to the Washington State Department of Health for credential issuance.",
  },
  {
    step: 5,
    title: "Receive Your CNA Credential",
    description:
      "Once approved, your CNA credential will be active and searchable on the DOH Provider Credential Search. Maintain your license by meeting renewal requirements.",
  },
];

const renewalSteps = [
  "Complete required continuing education hours (minimum 12 hours per renewal period)",
  "Maintain active employment performing nursing assistant duties (minimum 200 hours during renewal period, or 400 hours if first renewal)",
  "Submit renewal application and fees to the Washington State Department of Health before your credential expiration date",
  "Complete a new background check if required",
  "If your credential has lapsed, you may need to retake the certification exam or complete a refresher course",
];

const faqs = [
  {
    question: "How long does CNA training take?",
    answer:
      "Our CNA training program is 4-8 weeks depending on the schedule you choose (day, evening, or weekend). The program includes 120 hours of instruction covering theory, lab skills, and clinical experience.",
  },
  {
    question: "What are the requirements to enroll?",
    answer:
      "You need a high school diploma or GED, must pass a background check, provide immunization records, and complete a physical exam. No prior healthcare experience is required.",
  },
  {
    question: "Is Aliko Academy an official CNA testing site?",
    answer:
      "Yes! Aliko Academy is an official Washington State CNA testing site. You can complete your training and take your state certification exam right at our facility, making the process convenient and seamless.",
  },
  {
    question: "What is the cost of CNA training?",
    answer:
      "CNA training tuition is $1,300 plus a $50 registration fee ($1,350 total). This includes all course materials, textbooks, lab equipment access, clinical placement, and exam preparation. Payment plans and sponsor/agency payment options are available.",
  },
  {
    question: "What schedules are available?",
    answer:
      "We offer three schedule options: Day Classes (Mon-Fri 10am-4:30pm with clinical 6am-2:30pm), Evening Classes (Mon-Thu 6pm-10pm, Sat-Sun 2pm-8:30pm), and Weekend Classes. Choose the option that best fits your lifestyle.",
  },
  {
    question: "How do I renew my CNA license?",
    answer:
      "CNA licenses in Washington State must be renewed annually. You need to complete at least 12 hours of continuing education and have worked a minimum of 200 hours as a CNA during the renewal period. We offer continuing education courses to help you meet these requirements.",
  },
  {
    question: "Can I transfer my CNA certification from another state?",
    answer:
      "Yes, Washington State allows CNA certification by endorsement from other states. You will need to apply through the Department of Health, provide proof of your current certification, pass a background check, and may need to complete additional state-specific training.",
  },
  {
    question: "What career opportunities are available after certification?",
    answer:
      "CNA graduates can work in hospitals, nursing homes, long-term care facilities, home health agencies, rehabilitation centers, assisted living facilities, and hospice care. Many CNAs also use this as a stepping stone to nursing or other healthcare careers.",
  },
  {
    question: "Do you offer job placement assistance?",
    answer:
      "Yes! Our Career Services team provides resume assistance, interview preparation, job search guidance, and employer connections. We have partnerships with healthcare facilities throughout the Seattle area. Visit our Career Hub at career.alikohub.com for current job listings.",
  },
  {
    question: "What is included in the tuition?",
    answer:
      "Tuition covers all textbooks and course materials, lab equipment and supplies access, clinical placement coordination, LMS (Learning Management System) access, exam preparation resources, and career services support. There are no hidden fees.",
  },
];

const Resources = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-16 lg:py-24 bg-gradient-to-br from-primary/5 via-card to-accent/5 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />

        <div className="container-academy relative">
          <div className="flex items-center gap-2 mb-4">
            <div className="h-1 w-12 bg-accent rounded-full" />
            <span className="text-sm font-medium text-accent">
              Student Resources
            </span>
          </div>
          <h1 className="text-3xl lg:text-5xl font-bold text-primary">
            Resources & FAQ
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl">
            Everything you need to know about CNA licensing, certification
            renewal, and getting started with your healthcare career in
            Washington State.
          </p>
        </div>
      </section>

      <section className="py-12 lg:py-16">
        <div className="container-academy space-y-16">
          {/* CNA License Requirements */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <ClipboardList className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-foreground">
                  CNA License Requirements
                </h2>
                <p className="text-sm text-muted-foreground">
                  Steps to obtain your CNA license in Washington State
                </p>
              </div>
            </div>

            <div className="grid gap-4">
              {licenseSteps.map((item) => (
                <Card
                  key={item.step}
                  className="group hover:shadow-lg transition-all duration-300 border-l-4 border-l-primary"
                >
                  <CardContent className="flex items-start gap-4 pt-6">
                    <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold shrink-0">
                      {item.step}
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">
                        {item.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="mt-6 bg-primary/5 border-primary/20">
              <CardContent className="flex items-start gap-3 pt-6">
                <Shield className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-foreground mb-1">
                    Background Check Information
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    All applicants must complete a Washington State Patrol
                    background check and FBI fingerprint check. Certain criminal
                    convictions may disqualify you from obtaining a CNA
                    credential. Contact the Department of Health for specific
                    questions about eligibility.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* CNA License Renewal */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                <RefreshCw className="h-5 w-5 text-accent" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-foreground">
                  CNA License Renewal
                </h2>
                <p className="text-sm text-muted-foreground">
                  Process and timelines for renewing your CNA certification
                </p>
              </div>
            </div>

            <Card>
              <CardContent className="pt-6 space-y-4">
                <p className="text-muted-foreground">
                  Washington State CNA credentials must be renewed annually. To
                  maintain your active status, complete the following:
                </p>
                <ul className="space-y-3">
                  {renewalSteps.map((step, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{step}</span>
                    </li>
                  ))}
                </ul>
                <div className="pt-4 border-t border-border">
                  <p className="text-sm text-muted-foreground">
                    <strong>Need continuing education credits?</strong> Aliko
                    Academy offers{" "}
                    <Link
                      to="/programs/continuing-education"
                      className="text-primary hover:underline font-medium"
                    >
                      Continuing Education courses for CNAs
                    </Link>{" "}
                    to help you meet your renewal requirements.
                  </p>
                </div>
              </CardContent>
            </Card>

            <div className="mt-4 flex gap-4">
              <Button asChild variant="outline" size="sm">
                <a
                  href="https://doh.wa.gov"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="h-4 w-4 mr-2" />
                  WA Department of Health
                </a>
              </Button>
            </div>
          </div>

          {/* FAQ */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <HelpCircle className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-foreground">
                  Frequently Asked Questions
                </h2>
                <p className="text-sm text-muted-foreground">
                  Common questions about CNA training, certification, and
                  careers
                </p>
              </div>
            </div>

            <Accordion type="single" collapsible className="space-y-2">
              {faqs.map((faq, i) => (
                <AccordionItem
                  key={i}
                  value={`faq-${i}`}
                  className="border border-border rounded-lg px-4 data-[state=open]:border-primary/30 transition-colors"
                >
                  <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* CTA */}
          <div className="relative text-center bg-gradient-to-br from-primary/10 via-card to-accent/10 rounded-2xl p-8 lg:p-12 overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full blur-2xl" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl" />
            <div className="relative">
              <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
                Still Have Questions?
              </h2>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                Our admissions team is ready to help you get started on your
                healthcare career journey.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild size="lg" className="shadow-lg">
                  <Link to="/contact">
                    Contact Us
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/apply">Apply Now</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Resources;
