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
    <header className="bg-[hsl(216,50%,16%)] border-b border-border/50 sticky top-0 z-50 backdrop-blur-sm">
      <nav className="container-academy flex items-center justify-between py-3">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src={logo} alt="Aliko Academy Health" className="h-16 md:h-20 w-auto object-contain" />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex lg:items-center lg:gap-6">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className="text-sm font-bold text-white hover:text-teal transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-teal after:transition-all hover:after:w-full"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:flex lg:items-center lg:gap-4">
          <Link to="/student-login" className="text-sm font-bold text-accent hover:text-white transition-colors">
            Student Login
          </Link>
          <Button asChild className="bg-teal text-white hover:bg-teal/90">
            <Link to="/apply">Apply Now</Link>
          </Button>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          className="lg:hidden -m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-primary"
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
          "lg:hidden border-t border-border overflow-hidden transition-all duration-300 bg-white",
          mobileMenuOpen ? "max-h-[500px]" : "max-h-0"
        )}
      >
        <div className="container-academy py-4 space-y-4">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className="block text-base font-medium text-foreground hover:text-teal transition-colors"
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
