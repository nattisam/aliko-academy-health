import { Shield, CheckCircle, Users } from "lucide-react";

export function TrustStrip() {
  return (
    <section className="py-12 bg-primary">
      <div className="container-academy">
        <div className="grid md:grid-cols-3 gap-8 text-primary-foreground">
          <div className="flex items-start gap-4">
            <Shield className="h-8 w-8 shrink-0 opacity-90" />
            <div>
              <h3 className="font-semibold mb-1">Compliance Ready</h3>
              <p className="text-sm opacity-80">
                Designed to align with Washington State training requirements and ACHC standards.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <CheckCircle className="h-8 w-8 shrink-0 opacity-90" />
            <div>
              <h3 className="font-semibold mb-1">Quality Assured</h3>
              <p className="text-sm opacity-80">
                Accreditation-ready governance framework with continuous improvement processes.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <Users className="h-8 w-8 shrink-0 opacity-90" />
            <div>
              <h3 className="font-semibold mb-1">Industry Connected</h3>
              <p className="text-sm opacity-80">
                Clinical partnerships and career network to support your professional growth.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
