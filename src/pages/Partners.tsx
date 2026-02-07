import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, MapPin, Stethoscope, Briefcase } from "lucide-react";

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
      <section className="py-12 lg:py-16 bg-card">
        <div className="container-academy">
          <h1 className="text-3xl lg:text-4xl font-bold text-foreground">
            Our Partners
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl">
            Aliko Academy partners with healthcare organizations throughout Washington State 
            to provide quality clinical training and career opportunities for our graduates.
          </p>
        </div>
      </section>

      <section className="py-12 lg:py-16">
        <div className="container-academy space-y-16">
          {/* Clinical Partners */}
          <div>
            <div className="flex items-center gap-3 mb-2">
              <Stethoscope className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-bold text-foreground">Clinical Practice Partners</h2>
            </div>
            <p className="text-muted-foreground mb-8 max-w-3xl">
              Our clinical partners provide hands-on training environments where students 
              develop practical skills under professional supervision.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {clinicalPartners.map((partner) => (
                <Card key={partner.name}>
                  <CardHeader>
                    <div className="flex items-start gap-3">
                      <Building2 className="h-5 w-5 text-primary shrink-0 mt-1" />
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
                        <Badge key={program} variant="secondary">
                          {program}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="mt-8 bg-secondary/30 border-accent/30">
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
              <Briefcase className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-bold text-foreground">Career Network Partners</h2>
            </div>
            <p className="text-muted-foreground mb-8 max-w-3xl">
              These healthcare employers actively recruit Aliko Academy graduates and participate 
              in our career development initiatives.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {careerPartners.map((partner) => (
                <Card key={partner.name}>
                  <CardHeader>
                    <div className="flex items-start gap-3">
                      <Building2 className="h-5 w-5 text-primary shrink-0 mt-1" />
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

            <Card className="mt-8 bg-secondary/30 border-accent/30">
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
          <Card className="bg-card">
            <CardHeader>
              <CardTitle>Become a Partner</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Interested in partnering with Aliko Academy for clinical education or workforce 
                development? We welcome inquiries from healthcare organizations seeking to support 
                the next generation of healthcare professionals.
              </p>
              <Link 
                to="/contact" 
                className="text-primary hover:underline font-medium"
              >
                Contact us to learn more →
              </Link>
            </CardContent>
          </Card>
        </div>
      </section>
    </Layout>
  );
};

export default Partners;
