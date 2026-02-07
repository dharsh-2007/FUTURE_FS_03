import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, Phone, LogOut, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { supabase } from "@/integrations/supabase/client";
import { useCart } from "@/contexts/CartContext";
import CartDrawer from "@/components/cart/CartDrawer";
import LioraLogo from "@/components/brand/LioraLogo";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Menu", path: "/menu" },
  { name: "About", path: "/#about" },
  { name: "Contact", path: "/#contact" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { isAuthenticated, getTotalItems } = useCart();
  const totalItems = getTotalItems();

  const handleNavClick = (path: string) => {
    setIsMenuOpen(false);
    if (path.startsWith("/#")) {
      const elementId = path.replace("/#", "");
      if (location.pathname === "/") {
        const element = document.getElementById(elementId);
        element?.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    navigate("/");
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/">
            <LioraLogo size="md" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => handleNavClick(link.path)}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary relative",
                  location.pathname === link.path
                    ? "text-primary after:absolute after:bottom-[-4px] after:left-0 after:right-0 after:h-0.5 after:bg-primary"
                    : "text-muted-foreground"
                )}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Right side buttons */}
          <div className="hidden md:flex items-center gap-3">
            <CartDrawer />
            
            {isAuthenticated ? (
              <Button
                variant="ghost"
                size="icon"
                onClick={handleSignOut}
                title="Sign out"
              >
                <LogOut className="w-5 h-5" />
              </Button>
            ) : (
              <Button asChild variant="outline">
                <Link to="/auth">
                  <User className="w-4 h-4 mr-2" />
                  Sign In
                </Link>
              </Button>
            )}

            <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2">
              <a href="https://wa.me/91xxxxxxxxxx" target="_blank" rel="noopener noreferrer">
                <Phone className="w-4 h-4" />
                Order on WhatsApp
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border animate-fade-in">
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => handleNavClick(link.path)}
                  className={cn(
                    "text-base font-medium py-2 transition-colors hover:text-primary",
                    location.pathname === link.path ? "text-primary" : "text-muted-foreground"
                  )}
                >
                  {link.name}
                </Link>
              ))}
              <div className="flex items-center gap-3 mt-4 pt-4 border-t border-border">
                <CartDrawer />
                
                {isAuthenticated ? (
                  <Button variant="ghost" onClick={handleSignOut} className="gap-2">
                    <LogOut className="w-4 h-4" />
                    Sign Out
                  </Button>
                ) : (
                  <Button asChild variant="outline" className="flex-1">
                    <Link to="/auth">
                      <User className="w-4 h-4 mr-2" />
                      Sign In
                    </Link>
                  </Button>
                )}
              </div>

              <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2 mt-2">
                <a href="https://wa.me/91xxxxxxxxxx" target="_blank" rel="noopener noreferrer">
                  <Phone className="w-4 h-4" />
                  Order on WhatsApp
                </a>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
