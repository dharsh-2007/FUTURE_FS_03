import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from "lucide-react";
import LioraLogo from "@/components/brand/LioraLogo";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="[&_span]:text-background">
              <LioraLogo size="md" />
            </div>
            <p className="text-background/70 text-sm leading-relaxed">
              Where Every Meal Shines. Experience the warmth and joy of home-cooked meals in a cozy atmosphere.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-background/70 hover:text-primary transition-colors" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-background/70 hover:text-primary transition-colors" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-background/70 hover:text-primary transition-colors" aria-label="Twitter">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-display text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-background/70 hover:text-primary transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/menu" className="text-background/70 hover:text-primary transition-colors text-sm">
                  Our Menu
                </Link>
              </li>
              <li>
                <Link to="/#about" className="text-background/70 hover:text-primary transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/#contact" className="text-background/70 hover:text-primary transition-colors text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Menu Categories */}
          <div className="space-y-4">
            <h3 className="font-display text-lg font-semibold">Menu</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/menu#cool-drinks" className="text-background/70 hover:text-primary transition-colors text-sm">
                  Cool Drinks
                </Link>
              </li>
              <li>
                <Link to="/menu#desserts" className="text-background/70 hover:text-primary transition-colors text-sm">
                  Desserts
                </Link>
              </li>
              <li>
                <Link to="/menu#veg" className="text-background/70 hover:text-primary transition-colors text-sm">
                  Veg Dishes
                </Link>
              </li>
              <li>
                <Link to="/menu#non-veg" className="text-background/70 hover:text-primary transition-colors text-sm">
                  Non-Veg Dishes
                </Link>
              </li>
              <li>
                <Link to="/menu#tea-coffee" className="text-background/70 hover:text-primary transition-colors text-sm">
                  Tea & Coffee
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-display text-lg font-semibold">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-background/70 text-sm">
                <Phone className="w-4 h-4 text-primary" />
                <a href="tel:91xxxxxxxxxx" className="hover:text-primary transition-colors">
                  91+xxxxxxxxxx
                </a>
              </li>
              <li className="flex items-center gap-3 text-background/70 text-sm">
                <Mail className="w-4 h-4 text-primary" />
                <a href="mailto:hello@liora.com" className="hover:text-primary transition-colors">
                  hello@liora.com
                </a>
              </li>
              <li className="flex items-start gap-3 text-background/70 text-sm">
                <MapPin className="w-4 h-4 text-primary mt-0.5" />
                <span>T. Nagar, Chennai, Tamil Nadu 600017</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-background/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-background/60 text-sm text-center md:text-left">
              © {currentYear} Liora Restaurant. All rights reserved.
            </p>
            <p className="text-background/60 text-sm">
              Phone: <a href="tel:91xxxxxxxxxx" className="hover:text-primary transition-colors">91+xxxxxxxxxx</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
