import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Building2, MapPin, Stethoscope, Briefcase, Handshake, ArrowRight, Heart, Users } from "lucide-react";
import { useStateConfig } from "@/hooks/useStateConfig";

interface ClinicalPartner {
  name: string;
  type: string;
  region: string;
  programs: string[];
}

interface CareerPartner {
  name: string;
  industry: string;
  roles: string;
  region: string;
}

// Partner data organized by state
const partnersByState: Record<string, { clinical: ClinicalPartner[]; career: CareerPartner[] }> = {
  WA: {
    clinical: [
      {
        name: "Evergreen Health Center",
        type: "Skilled Nursing Facility",
        region: "Seattle, WA",
        programs: ["CNA", "HHA", "Medication Aide"],
      },
      {
        name: "Pacific Medical Group",
        type: "Multi-Specialty Clinic",
        region: "Bellevue, WA",
        programs: ["Medical Assistant", "Phlebotomy", "EKG"],
      },
      {
        name: "Cascade Rehabilitation",
        type: "Rehabilitation Center",
        region: "Tacoma, WA",
        programs: ["CNA", "PCT"],
      },
      {
        name: "Puget Sound Home Health",
        type: "Home Health Agency",
        region: "King County, WA",
        programs: ["HHA", "CNA"],
      },
      {
        name: "Northwest Cardiac Care",
        type: "Cardiology Practice",
        region: "Seattle, WA",
        programs: ["EKG", "Medical Assistant"],
      },
      {
        name: "Community Care Partners",
        type: "Assisted Living",
        region: "Snohomish County, WA",
        programs: ["CNA", "Medication Aide", "HHA"],
      },
    ],
    career: [
      {
        name: "Swedish Health Services",
        industry: "Hospital System",
        roles: "CNA, PCT, Medical Assistant, Unit Secretary",
        region: "Seattle Metro",
      },
      {
        name: "Kaiser Permanente",
        industry: "Integrated Healthcare",
        roles: "Medical Assistant, Phlebotomist, EKG Tech",
        region: "Washington State",
      },
      {
        name: "BrightSpring Health Services",
        industry: "Home Health & Hospice",
        roles: "HHA, CNA, Care Coordinator",
        region: "King & Pierce County",
      },
      {
        name: "Virginia Mason Franciscan Health",
        industry: "Hospital System",
        roles: "CNA, PCT, Patient Services",
        region: "Puget Sound Region",
      },
      {
        name: "Multicare Health System",
        industry: "Healthcare Network",
        roles: "Medical Assistant, Patient Care Tech",
        region: "Pierce County",
      },
      {
        name: "SeaMar Community Health",
        industry: "Community Health Center",
        roles: "Medical Assistant, Phlebotomist",
        region: "Western Washington",
      },
    ],
  },
  OR: {
    clinical: [
      {
        name: "Providence Portland Medical",
        type: "Hospital System",
        region: "Portland, OR",
        programs: ["CNA", "PCT", "Medical Assistant"],
      },
      {
        name: "Legacy Health",
        type: "Multi-Specialty Clinic",
        region: "Portland, OR",
        programs: ["Phlebotomy", "EKG", "Medical Assistant"],
      },
    ],
    career: [
      {
        name: "OHSU Health",
        industry: "Academic Medical Center",
        roles: "CNA, Medical Assistant, Phlebotomist",
        region: "Portland Metro",
      },
    ],
  },
  CA: {
    clinical: [
      {
        name: "Cedars-Sinai Training Center",
        type: "Hospital System",
        region: "Los Angeles, CA",
        programs: ["CNA", "PCT", "Medical Assistant"],
      },
    ],
    career: [
      {
        name: "Kaiser Permanente California",
        industry: "Integrated Healthcare",
        roles: "CNA, Medical Assistant, Phlebotomist",
        region: "Southern California",
      },
    ],
  },
  TX: {
    clinical: [
      {
        name: "Houston Methodist Training",
        type: "Hospital System",
        region: "Houston, TX",
        programs: ["CNA", "PCT", "Medical Assistant"],
      },
    ],
    career: [
      {
        name: "Texas Medical Center",
        industry: "Healthcare Network",
        roles: "CNA, Medical Assistant, Patient Care Tech",
        region: "Houston Metro",
      },
    ],
  },
};

const Partners = () => {
  const { currentState } = useStateConfig();
  
  const statePartners = partnersByState[currentState.id] || partnersByState.WA;
  const clinicalPartners = statePartners.clinical;
  const careerPartners = statePartners.career;

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-16 lg:py-24 bg-gradient-to-br from-primary/5 via-card to-accent/5 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
        
        <div className="container-academy relative">
          <div className="flex items-center gap-2 mb-4">
            <div className="h-1 w-12 bg-accent rounded-full" />
            <span className="text-sm font-medium text-accent">Our Network</span>
          </div>
          <h1 className="text-3xl lg:text-5xl font-bold text-foreground">
            Our Partners
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl">
            Aliko Academy partners with healthcare organizations throughout {currentState.name} State 
            to provide quality clinical training and career opportunities for our graduates.
          </p>
          
          {/* Quick stats */}
          <div className="mt-8 flex flex-wrap gap-6">
            <div className="flex items-center gap-2 text-muted-foreground">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Stethoscope className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="font-semibold text-foreground">{clinicalPartners.length}+</p>
                <p className="text-xs">Clinical Sites</p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                <Briefcase className="h-5 w-5 text-accent" />
              </div>
              <div>
                <p className="font-semibold text-foreground">{careerPartners.length}+</p>
                <p className="text-xs">Hiring Partners</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-16">
        <div className="container-academy space-y-16">
          {/* Clinical Partners - Blue/Primary themed section */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/10 rounded-3xl" />
            <div className="relative p-8 lg:p-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center shadow-lg">
                  <Heart className="h-7 w-7 text-primary-foreground" />
                </div>
                <div>
                  <Badge className="bg-primary/10 text-primary border-primary/20 mb-1">Clinical Training</Badge>
                  <h2 className="text-2xl font-bold text-foreground">Clinical Practice Partners</h2>
                  <p className="text-sm text-muted-foreground">Hands-on training locations for student clinical hours</p>
                </div>
              </div>
              <p className="text-muted-foreground mb-8 max-w-3xl">
                Our clinical partners provide hands-on training environments where students 
                develop practical skills under professional supervision.
              </p>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                {clinicalPartners.map((partner) => (
                  <Card 
                    key={partner.name} 
                    className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-background border-2 border-primary/10 hover:border-primary/30"
                  >
                    <CardHeader className="pb-3">
                      <div className="flex items-start gap-3">
                        <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center shrink-0">
                          <Stethoscope className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <CardTitle className="text-lg text-foreground">{partner.name}</CardTitle>
                          <p className="text-sm text-primary font-medium">{partner.type}</p>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <MapPin className="h-4 w-4 text-primary/60" />
                        <span>{partner.region}</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {partner.programs.map((program) => (
                          <Badge 
                            key={program} 
                            variant="secondary" 
                            className="text-xs bg-primary/10 text-primary border-0"
                          >
                            {program}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="mt-8 p-4 rounded-xl bg-background/80 border border-primary/20">
                <p className="text-sm text-muted-foreground italic">
                  <strong className="text-primary">Disclaimer:</strong> Clinical placements are coordinated based on 
                  availability, program requirements, and student readiness. Placement at a 
                  specific partner facility is not guaranteed.
                </p>
              </div>
            </div>
          </div>

          {/* Career Network Partners - Orange/Accent themed section */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-accent/10 rounded-3xl" />
            <div className="relative p-8 lg:p-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-accent to-accent/80 flex items-center justify-center shadow-lg">
                  <Users className="h-7 w-7 text-accent-foreground" />
                </div>
                <div>
                  <Badge className="bg-accent/10 text-accent border-accent/20 mb-1">Employment Network</Badge>
                  <h2 className="text-2xl font-bold text-foreground">Career Network Partners</h2>
                  <p className="text-sm text-muted-foreground">Employers who actively hire our graduates</p>
                </div>
              </div>
              <p className="text-muted-foreground mb-8 max-w-3xl">
                These healthcare employers actively recruit Aliko Academy graduates and participate 
                in our career development initiatives.
              </p>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                {careerPartners.map((partner) => (
                  <Card 
                    key={partner.name} 
                    className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-background border-2 border-accent/10 hover:border-accent/30"
                  >
                    <CardHeader className="pb-3">
                      <div className="flex items-start gap-3">
                        <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-accent/20 to-accent/10 flex items-center justify-center shrink-0">
                          <Briefcase className="h-5 w-5 text-accent" />
                        </div>
                        <div>
                          <CardTitle className="text-lg text-foreground">{partner.name}</CardTitle>
                          <p className="text-sm text-accent font-medium">{partner.industry}</p>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <MapPin className="h-4 w-4 text-accent/60" />
                        <span>{partner.region}</span>
                      </div>
                      <div>
                        <p className="text-sm">
                          <span className="font-medium text-accent">Hiring for: </span>
                          <span className="text-muted-foreground">{partner.roles}</span>
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="mt-8 p-4 rounded-xl bg-background/80 border border-accent/20">
                <p className="text-sm text-muted-foreground italic">
                  <strong className="text-accent">Disclaimer:</strong> Aliko Academy does not guarantee employment. 
                  Career services support graduates in their job search through resume assistance, 
                  interview preparation, and employer connections.
                </p>
              </div>
            </div>
          </div>

          {/* Become a Partner */}
          <Card className="bg-gradient-to-r from-primary to-primary/90 text-primary-foreground overflow-hidden relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
            <CardContent className="pt-8 pb-8 relative">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                    <Handshake className="h-7 w-7" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2">Become a Partner</h3>
                    <p className="opacity-90 max-w-xl">
                      Interested in partnering with Aliko Academy for clinical education or workforce 
                      development? We welcome inquiries from healthcare organizations seeking to support 
                      the next generation of healthcare professionals.
                    </p>
                  </div>
                </div>
                <Button asChild variant="secondary" size="lg" className="shrink-0 shadow-lg">
                  <Link to="/contact">
                    Contact Us
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </Layout>
  );
};

export default Partners;