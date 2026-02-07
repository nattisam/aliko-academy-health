import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Building2, MapPin, Stethoscope, Briefcase, Handshake, ArrowRight } from "lucide-react";

const clinicalPartners = [
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
];

const careerPartners = [
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
];

const Partners = () => {
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
            Aliko Academy partners with healthcare organizations throughout Washington State 
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
          {/* Clinical Partners */}
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <Stethoscope className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-foreground">Clinical Practice Partners</h2>
                <p className="text-sm text-muted-foreground">Hands-on training locations</p>
              </div>
            </div>
            <p className="text-muted-foreground mb-8 max-w-3xl mt-4">
              Our clinical partners provide hands-on training environments where students 
              develop practical skills under professional supervision.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {clinicalPartners.map((partner, index) => (
                <Card key={partner.name} className={`group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-l-4 ${
                  index % 2 === 0 ? 'border-l-primary' : 'border-l-accent'
                }`}>
                  <CardHeader className="pb-3">
                    <div className="flex items-start gap-3">
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${
                        index % 2 === 0 ? 'bg-primary/10' : 'bg-accent/10'
                      }`}>
                        <Building2 className={`h-5 w-5 ${index % 2 === 0 ? 'text-primary' : 'text-accent'}`} />
                      </div>
                      <div>
                        <CardTitle className="text-lg">{partner.name}</CardTitle>
                        <p className="text-sm text-muted-foreground">{partner.type}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      <span>{partner.region}</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {partner.programs.map((program) => (
                        <Badge key={program} variant="secondary" className="text-xs">
                          {program}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="mt-8 bg-muted/50 border-accent/30">
              <CardContent className="pt-6">
                <p className="text-sm text-muted-foreground italic">
                  <strong>Disclaimer:</strong> Clinical placements are coordinated based on 
                  availability, program requirements, and student readiness. Placement at a 
                  specific partner facility is not guaranteed.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Career Network Partners */}
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                <Briefcase className="h-6 w-6 text-accent" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-foreground">Career Network Partners</h2>
                <p className="text-sm text-muted-foreground">Employers who hire our graduates</p>
              </div>
            </div>
            <p className="text-muted-foreground mb-8 max-w-3xl mt-4">
              These healthcare employers actively recruit Aliko Academy graduates and participate 
              in our career development initiatives.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {careerPartners.map((partner, index) => (
                <Card key={partner.name} className={`group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-l-4 ${
                  index % 2 === 0 ? 'border-l-accent' : 'border-l-primary'
                }`}>
                  <CardHeader className="pb-3">
                    <div className="flex items-start gap-3">
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${
                        index % 2 === 0 ? 'bg-accent/10' : 'bg-primary/10'
                      }`}>
                        <Building2 className={`h-5 w-5 ${index % 2 === 0 ? 'text-accent' : 'text-primary'}`} />
                      </div>
                      <div>
                        <CardTitle className="text-lg">{partner.name}</CardTitle>
                        <p className="text-sm text-muted-foreground">{partner.industry}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      <span>{partner.region}</span>
                    </div>
                    <div>
                      <p className="text-sm">
                        <span className="font-medium">Roles: </span>
                        <span className="text-muted-foreground">{partner.roles}</span>
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="mt-8 bg-muted/50 border-accent/30">
              <CardContent className="pt-6">
                <p className="text-sm text-muted-foreground italic">
                  <strong>Disclaimer:</strong> Aliko Academy does not guarantee employment. 
                  Career services support graduates in their job search through resume assistance, 
                  interview preparation, and employer connections.
                </p>
              </CardContent>
            </Card>
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
