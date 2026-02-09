import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import logo from "@/assets/logo.png";

const navigation = [
  { name: "Programs", href: "/programs" },
  { name: "Admissions", href: "/admissions" },
  { name: "Tuition", href: "/tuition" },
  { name: "Partners", href: "/partners" },
  { name: "Enterprise", href: "/enterprise" },
  { name: "Career Services", href: "/career-services" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-card border-b border-border sticky top-0 z-50">
      <nav className="container-academy flex items-center justify-between py-4">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="Aliko Academy Health" className="h-14 md:h-16 w-auto" />
          <div className="flex flex-col">
            <span className="text-sm font-bold text-foreground tracking-wide hidden sm:block">
              ALIKO ACADEMY
            </span>
            <span className="px-2 py-0.5 rounded-md bg-primary text-primary-foreground text-xs font-bold uppercase tracking-wider shadow-sm w-fit">
              Health
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex lg:items-center lg:gap-6">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:flex lg:items-center lg:gap-4">
          <Link to="/student-login" className="text-sm font-bold text-accent hover:text-accent/80">
            Student Login
          </Link>
          <Button asChild>
            <Link to="/apply">Apply Now</Link>
          </Button>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          className="lg:hidden -m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-foreground"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6" aria-hidden="true" />
          ) : (
            <Menu className="h-6 w-6" aria-hidden="true" />
          )}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={cn(
          "lg:hidden border-t border-border overflow-hidden transition-all duration-300",
          mobileMenuOpen ? "max-h-[500px]" : "max-h-0"
        )}
      >
        <div className="container-academy py-4 space-y-4">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className="block text-base font-medium text-foreground hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <div className="pt-4 border-t border-border space-y-3">
            <Link
              to="/student-login"
              className="block text-base font-bold text-accent hover:text-accent/80"
              onClick={() => setMobileMenuOpen(false)}
            >
              Student Login
            </Link>
            <Button asChild className="w-full">
              <Link to="/apply" onClick={() => setMobileMenuOpen(false)}>
                Apply Now
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
