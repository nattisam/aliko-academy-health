import { Link } from "react-router-dom";
import { useStateConfig } from "@/hooks/useStateConfig";

const footerLinks = {
  programs: [
    { name: "View All Programs", href: "/programs" },
    { name: "CNA Training", href: "/programs/cna" },
    { name: "Medical Billing & Coding", href: "/programs/medical-billing" },
    { name: "Start Dates & Schedule", href: "/schedule" },
  ],
  admissions: [
    { name: "How to Apply", href: "/admissions" },
    { name: "Tuition & Payment", href: "/tuition" },
    { name: "Financial Assistance", href: "/tuition#assistance" },
    { name: "Contact Admissions", href: "/contact" },
  ],
  about: [
    { name: "About Aliko Academy", href: "/about" },
    { name: "Accreditation & Compliance", href: "/accreditation" },
    { name: "Career Services", href: "/career-services" },
    { name: "Partners", href: "/partners" },
  ],
  policies: [
    { name: "Student Handbook", href: "/policies" },
    { name: "Refund Policy", href: "/policies#refund" },
    { name: "Privacy Policy", href: "/policies#privacy" },
    { name: "ADA Accommodations", href: "/policies#ada" },
  ],
};

export function Footer() {
  const { currentState } = useStateConfig();

  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="container-academy py-12 lg:py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
          {/* Programs */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">Programs</h3>
            <ul className="space-y-3">
              {footerLinks.programs.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Admissions */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">Admissions</h3>
            <ul className="space-y-3">
              {footerLinks.admissions.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* About */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">About</h3>
            <ul className="space-y-3">
              {footerLinks.about.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Policies */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">Policies</h3>
            <ul className="space-y-3">
              {footerLinks.policies.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/20">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex flex-col mb-4">
                <span className="text-lg font-bold">ALIKO ACADEMY</span>
                <span className="text-xs tracking-widest text-primary-foreground/70">HEALTH</span>
              </div>
              <p className="text-sm text-primary-foreground/70">
                Industry-aligned healthcare training with clear cohort start dates.
              </p>
            </div>
            <div>
              <h4 className="text-sm font-semibold mb-3">Contact Us</h4>
              <div className="space-y-2 text-sm text-primary-foreground/70">
                <p>{currentState.contact.address}</p>
                <p>{currentState.contact.city}, {currentState.contact.state} {currentState.contact.zip}</p>
                <p>Phone: {currentState.contact.phone}</p>
                <p>Email: {currentState.contact.email}</p>
              </div>
            </div>
            <div>
              <h4 className="text-sm font-semibold mb-3">Office Hours</h4>
              <div className="space-y-2 text-sm text-primary-foreground/70">
                <p>{currentState.officeHours.weekday}</p>
                <p>{currentState.officeHours.saturday}</p>
                <p>{currentState.officeHours.sunday}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-primary-foreground/70">
              © {new Date().getFullYear()} Aliko Academy. All rights reserved.
            </p>
            <p className="text-xs text-primary-foreground/50 text-center md:text-right max-w-xl">
              Aliko Academy is designed to align with {currentState.name} State training requirements and maintains an accreditation-ready governance framework. Program outcomes vary by individual effort and market conditions.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
