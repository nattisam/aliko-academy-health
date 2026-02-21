import { Link } from "react-router-dom";
import { useStateConfig } from "@/hooks/useStateConfig";
import { Mail, Phone, MapPin, Clock, ArrowRight } from "lucide-react";
import logo from "@/assets/logo-new.png";

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
      <div className="h-1.5 bg-gradient-to-r from-primary via-teal to-accent" />
      
      {/* Main Footer — Deep Blue */}
      <div className="bg-footer-bg relative">
        <div className="container-academy py-12 lg:py-16 relative z-10">
          {/* CTA Section */}
          <div className="mb-12 p-6 md:p-8 rounded-2xl bg-gradient-to-r from-primary/20 via-teal/10 to-primary/20 border border-teal/20">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                  Ready to Start Your Healthcare Career?
                </h3>
                <p className="text-white/70 text-sm md:text-base">
                  Join our next cohort and take the first step towards a rewarding future.
                </p>
              </div>
              <Link 
                to="/apply"
                className="group flex items-center gap-2 px-6 py-3 bg-teal text-teal-foreground font-semibold rounded-lg hover:bg-teal/90 transition-all duration-300 shadow-lg whitespace-nowrap"
              >
                Apply Now
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Footer Links */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
            {Object.entries(footerLinks).map(([key, links]) => (
              <div key={key}>
                <h3 className="text-sm font-semibold uppercase tracking-wider mb-4 text-accent">{key}</h3>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link.name}>
                      <Link
                        to={link.href}
                        className="text-sm text-white/70 hover:text-accent transition-colors duration-200"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Contact Info */}
          <div className="mt-12 pt-8 border-t border-white/10">
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <Link to="/" className="inline-block mb-4 bg-white rounded-xl p-3">
                    <img src={logo} alt="Aliko Academy" className="h-12 w-auto" />
                </Link>
                <p className="text-sm text-white/70 max-w-xs">
                  Industry-aligned healthcare training with clear cohort start dates. Your pathway to a rewarding healthcare career.
                </p>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-white mb-4 flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-accent" />
                  Contact Us
                </h4>
                <div className="space-y-2 text-sm text-white/70">
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
                <h4 className="text-sm font-semibold text-white mb-4 flex items-center gap-2">
                  <Clock className="h-4 w-4 text-accent" />
                  Office Hours
                </h4>
                <div className="space-y-2 text-sm text-white/70">
                  <p>{currentState.officeHours.weekday}</p>
                  <p>{currentState.officeHours.saturday}</p>
                  <p>{currentState.officeHours.sunday}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-12 pt-8 border-t border-white/10">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-sm text-white/80">
                © {new Date().getFullYear()} <span className="text-accent">Aliko Academy</span>. All rights reserved.
              </p>
              <p className="text-xs text-white/60 text-center md:text-right max-w-xl">
                Aliko Academy is designed to align with {currentState.name} State training requirements and maintains an accreditation-ready governance framework.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
