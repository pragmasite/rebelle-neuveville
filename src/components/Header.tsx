import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Globe, Phone, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/useLanguage";

const Header = () => {
  const { t, lang, otherLangs } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: t.nav.aboutUs, href: "#a-propos" },
    { label: t.nav.services, href: "#services" },
    { label: t.nav.gallery, href: "#galerie" },
    { label: t.nav.hours, href: "#horaires" },
    { label: t.nav.contact, href: "#contact" },
  ];

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-soft"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        <a href="#" className="flex flex-col">
          <span
            className={`font-serif text-xl font-bold ${
              isScrolled ? "text-primary" : "text-white"
            }`}
          >
            ReBelle
          </span>
          <span
            className={`text-xs tracking-widest ${
              isScrolled ? "text-muted-foreground" : "text-white/70"
            }`}
          >
            {t.nav.profession}
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm transition-colors ${
                isScrolled
                  ? "text-foreground hover:text-primary"
                  : "text-white/80 hover:text-white"
              }`}
            >
              {link.label}
            </a>
          ))}

          {/* Language Selector */}
          <div className="flex items-center gap-2 border-l border-white/20 pl-4">
            <Globe className={`h-4 w-4 ${isScrolled ? "text-muted-foreground" : "text-white/70"}`} />
            <div className="flex gap-2">
              {[
                { lang: "fr", label: "FR" },
                { lang: "de", label: "DE" },
                { lang: "en", label: "EN" },
              ].map((item) => (
                <Link
                  key={item.lang}
                  to={item.lang === "fr" ? "/" : `/${item.lang}`}
                  className={`text-xs font-medium transition-colors ${
                    lang === item.lang
                      ? isScrolled
                        ? "text-primary"
                        : "text-white"
                      : isScrolled
                      ? "text-muted-foreground hover:text-foreground"
                      : "text-white/50 hover:text-white/80"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <Button asChild size="sm">
            <a href="tel:+41792260220">
              <Phone className="h-4 w-4 mr-2" />
              {t.nav.call}
            </a>
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className={`md:hidden ${isScrolled ? "text-foreground" : "text-white"}`}
        >
          {isMobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md border-b">
          <div className="container mx-auto px-4 py-4 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block text-sm text-foreground hover:text-primary"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}

            <div className="border-t pt-4">
              <div className="flex items-center gap-2 mb-3">
                <Globe className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm font-medium">Langue / Sprache</span>
              </div>
              <div className="flex gap-2">
                {[
                  { lang: "fr", label: "Français" },
                  { lang: "de", label: "Deutsch" },
                  { lang: "en", label: "English" },
                ].map((item) => (
                  <Link
                    key={item.lang}
                    to={item.lang === "fr" ? "/" : `/${item.lang}`}
                    className={`text-xs font-medium transition-colors px-3 py-2 rounded ${
                      lang === item.lang
                        ? "bg-primary text-primary-foreground"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            <Button asChild className="w-full">
              <a href="tel:+41792260220">
                <Phone className="h-4 w-4 mr-2" />
                {t.nav.call}
              </a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
