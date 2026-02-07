import { Link } from "react-router-dom";
import { useStateConfig } from "@/hooks/useStateConfig";
import { Mail, Phone, MapPin, Clock, ArrowRight } from "lucide-react";
import logo from "@/assets/logo.png";

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
    <footer className="relative overflow-hidden">
      {/* Gradient Top Bar */}
      <div className="h-1.5 bg-gradient-to-r from-primary via-accent to-primary" />
      
      {/* Main Footer with Gradient Background */}
      <div className="bg-gradient-to-br from-foreground via-foreground to-[hsl(var(--foreground)/0.95)] relative">
        {/* Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
          <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-primary/3 to-accent/3 rounded-full blur-3xl opacity-50" />
        </div>

        <div className="container-academy py-12 lg:py-16 relative z-10">
          {/* CTA Section */}
          <div className="mb-12 p-6 md:p-8 rounded-2xl bg-gradient-to-r from-primary/20 via-accent/10 to-primary/20 border border-accent/20 backdrop-blur-sm">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-primary-foreground mb-2">
                  Ready to Start Your Healthcare Career?
                </h3>
                <p className="text-primary-foreground/70 text-sm md:text-base">
                  Join our next cohort and take the first step towards a rewarding future.
                </p>
              </div>
              <Link 
                to="/apply"
                className="group flex items-center gap-2 px-6 py-3 bg-accent text-accent-foreground font-semibold rounded-lg hover:bg-accent/90 transition-all duration-300 shadow-lg shadow-accent/20 hover:shadow-xl hover:shadow-accent/30 whitespace-nowrap"
              >
                Apply Now
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Main Footer Content */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
            {/* Programs */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider mb-4 text-accent">Programs</h3>
              <ul className="space-y-3">
                {footerLinks.programs.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-sm text-primary-foreground/70 hover:text-accent transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Admissions */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider mb-4 text-accent">Admissions</h3>
              <ul className="space-y-3">
                {footerLinks.admissions.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-sm text-primary-foreground/70 hover:text-accent transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* About */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider mb-4 text-accent">About</h3>
              <ul className="space-y-3">
                {footerLinks.about.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-sm text-primary-foreground/70 hover:text-accent transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Policies */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider mb-4 text-accent">Policies</h3>
              <ul className="space-y-3">
                {footerLinks.policies.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-sm text-primary-foreground/70 hover:text-accent transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact Info */}
          <div className="mt-12 pt-8 border-t border-primary-foreground/10">
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <img src={logo} alt="Aliko Academy" className="h-10 w-auto brightness-0 invert" />
                  <div className="flex flex-col">
                    <span className="text-lg font-bold text-primary-foreground">ALIKO ACADEMY</span>
                    <span className="px-2 py-0.5 text-xs font-bold tracking-widest bg-gradient-to-r from-primary to-accent text-primary-foreground rounded w-fit">
                      HEALTH
                    </span>
                  </div>
                </div>
                <p className="text-sm text-primary-foreground/70">
                  Industry-aligned healthcare training with clear cohort start dates.
                </p>
              </div>
              <div>
                <h4 className="text-sm font-semibold mb-4 flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                    <MapPin className="h-4 w-4 text-accent" />
                  </div>
                  Contact Us
                </h4>
                <div className="space-y-2 text-sm text-primary-foreground/70">
                  <p>{currentState.contact.address}</p>
                  <p>{currentState.contact.city}, {currentState.contact.state} {currentState.contact.zip}</p>
                  <p className="flex items-center gap-2">
                    <Phone className="h-3.5 w-3.5 text-accent" />
                    <a href={`tel:${currentState.contact.phone}`} className="hover:text-accent transition-colors">
                      {currentState.contact.phone}
                    </a>
                  </p>
                  <p className="flex items-center gap-2">
                    <Mail className="h-3.5 w-3.5 text-accent" />
                    <a href={`mailto:${currentState.contact.email}`} className="hover:text-accent transition-colors">
                      {currentState.contact.email}
                    </a>
                  </p>
                </div>
              </div>
              <div>
                <h4 className="text-sm font-semibold mb-4 flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                    <Clock className="h-4 w-4 text-accent" />
                  </div>
                  Office Hours
                </h4>
                <div className="space-y-2 text-sm text-primary-foreground/70">
                  <p>{currentState.officeHours.weekday}</p>
                  <p>{currentState.officeHours.saturday}</p>
                  <p>{currentState.officeHours.sunday}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-12 pt-8 border-t border-primary-foreground/10">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-sm text-primary-foreground/70">
                © {new Date().getFullYear()} <span className="text-accent">Aliko Academy</span>. All rights reserved.
              </p>
              <p className="text-xs text-primary-foreground/50 text-center md:text-right max-w-xl">
                Aliko Academy is designed to align with {currentState.name} State training requirements and maintains an accreditation-ready governance framework. Program outcomes vary by individual effort and market conditions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
