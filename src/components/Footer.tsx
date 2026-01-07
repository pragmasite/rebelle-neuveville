import { motion } from "framer-motion";
import { useLanguage } from "@/hooks/useLanguage";

const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Branding */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <a href="#" className="flex flex-col mb-4">
              <span className="font-serif text-2xl font-bold text-white">ReBelle</span>
              <span className="text-xs tracking-widest text-white/70 mt-1">
                {t.footer.tagline}
              </span>
            </a>
            <p className="text-white/70 text-sm leading-relaxed">
              {t.footer.description}
            </p>
          </motion.div>

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="font-serif text-lg mb-4 text-white">
              {t.footer.navigation}
            </h3>
            <nav className="space-y-2">
              <a
                href="#a-propos"
                className="block text-white/70 hover:text-white transition-colors text-sm"
              >
                {t.nav.aboutUs}
              </a>
              <a
                href="#services"
                className="block text-white/70 hover:text-white transition-colors text-sm"
              >
                {t.nav.services}
              </a>
              <a
                href="#galerie"
                className="block text-white/70 hover:text-white transition-colors text-sm"
              >
                {t.nav.gallery}
              </a>
              <a
                href="#horaires"
                className="block text-white/70 hover:text-white transition-colors text-sm"
              >
                {t.nav.hours}
              </a>
              <a
                href="#contact"
                className="block text-white/70 hover:text-white transition-colors text-sm"
              >
                {t.nav.contact}
              </a>
            </nav>
          </motion.div>

          {/* Contact Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="font-serif text-lg mb-4 text-white">
              {t.contact.label}
            </h3>
            <div className="space-y-2">
              <a
                href="tel:+41792260220"
                className="block text-white/70 hover:text-white transition-colors text-sm"
              >
                +41 79 226 02 20
              </a>
              <a
                href="mailto:contact@rebelle.ch"
                className="block text-white/70 hover:text-white transition-colors text-sm"
              >
                contact@rebelle.ch
              </a>
              <p className="text-white/70 text-sm">
                Rue du Collège 12
                <br />
                2520 La Neuveville
              </p>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8">
          <motion.div
            className="text-center text-white/60 text-sm"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p>
              ReBelle © {currentYear}. {t.footer.copyright}
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
