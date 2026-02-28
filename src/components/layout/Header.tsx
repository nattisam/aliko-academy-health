import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import logo from "@/assets/logo-new.png";

const institutionalDropdown = [
  { name: "Overview", href: "/institutional-training" },
  { name: "Public Health & Emergency Response", href: "/institutional-training/public-health" },
  { name: "Digital Health & Health Technology", href: "/institutional-training/digital-health" },
  { name: "Clinical & Advanced Workforce", href: "/institutional-training/clinical" },
  { name: "Occupational & Corporate Health", href: "/institutional-training/corporate" },
  { name: "WASH & Environmental Health", href: "/institutional-training/wash" },
  { name: "Executive & Policy Programs", href: "/institutional-training/executive" },
];

const navigation = [
  { name: "Home", href: "/" },
  { name: "Programs", href: "/programs" },
  { name: "Institutional Training", href: "/institutional-training", dropdown: institutionalDropdown },
  { name: "Schedule", href: "/schedule" },
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
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="bg-[hsl(216,50%,16%)] border-b border-border/50 sticky top-0 z-50 backdrop-blur-sm">
      <nav className="container-academy flex items-center justify-between py-3">
        {/* Logo + Desktop Navigation */}
        <div className="flex items-center gap-4 xl:gap-5 2xl:gap-8">
          <Link to="/" className="flex-shrink-0">
            <img src={logo} alt="Aliko Academy Health" className="h-12 xl:h-14 2xl:h-16 w-auto object-contain" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden xl:flex xl:items-center xl:gap-3.5 2xl:gap-5">
            {navigation.map((item) =>
              item.dropdown ? (
                <div key={item.name} className="relative" ref={dropdownRef}>
                  <button
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                    className="flex items-center gap-0.5 text-[13px] 2xl:text-sm font-semibold text-white hover:text-teal transition-colors whitespace-nowrap relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-teal after:transition-all hover:after:w-full"
                  >
                    {item.name}
                    <ChevronDown className={cn("h-3 w-3 transition-transform", dropdownOpen && "rotate-180")} />
                  </button>
                  {dropdownOpen && (
                    <div className="absolute top-full left-0 mt-2 w-72 bg-white rounded-lg shadow-xl border border-border/60 py-2 z-50">
                      {item.dropdown.map((sub) => (
                        <Link
                          key={sub.href}
                          to={sub.href}
                          onClick={() => setDropdownOpen(false)}
                          className="block px-4 py-2.5 text-sm text-foreground hover:bg-muted hover:text-primary transition-colors"
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-[13px] 2xl:text-sm font-semibold text-white hover:text-teal transition-colors whitespace-nowrap relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-teal after:transition-all hover:after:w-full"
                >
                  {item.name}
                </Link>
              )
            )}
          </div>
        </div>

        {/* Desktop CTA */}
        <div className="hidden xl:flex xl:items-center xl:gap-2 2xl:gap-3 flex-shrink-0">
          <Link to="/student-login" className="px-3 py-1.5 rounded-md bg-accent text-white font-semibold text-[13px] 2xl:text-sm hover:bg-accent/90 transition-colors whitespace-nowrap">
            Student Login
          </Link>
          <Button asChild size="sm" className="bg-[hsl(0,72%,45%)] text-white hover:bg-[hsl(0,72%,38%)] text-[13px] 2xl:text-sm whitespace-nowrap">
            <Link to="/apply">Apply Now</Link>
          </Button>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          className="xl:hidden -m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-primary"
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
          "xl:hidden border-t border-border overflow-hidden transition-all duration-300 bg-white",
          mobileMenuOpen ? "max-h-[700px]" : "max-h-0"
        )}
      >
        <div className="container-academy py-4 space-y-4">
          {navigation.map((item) =>
            item.dropdown ? (
              <div key={item.name}>
                <button
                  onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
                  className="flex items-center justify-between w-full text-base font-medium text-foreground hover:text-teal transition-colors"
                >
                  {item.name}
                  <ChevronDown className={cn("h-4 w-4 transition-transform", mobileDropdownOpen && "rotate-180")} />
                </button>
                <div
                  className={cn(
                    "overflow-hidden transition-all duration-200 pl-4 border-l-2 border-primary/20",
                    mobileDropdownOpen ? "max-h-96 mt-2 space-y-2" : "max-h-0"
                  )}
                >
                  {item.dropdown.map((sub) => (
                    <Link
                      key={sub.href}
                      to={sub.href}
                      className="block text-sm text-muted-foreground hover:text-primary transition-colors py-1"
                      onClick={() => { setMobileMenuOpen(false); setMobileDropdownOpen(false); }}
                    >
                      {sub.name}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={item.name}
                to={item.href}
                className="block text-base font-medium text-foreground hover:text-teal transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            )
          )}
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
