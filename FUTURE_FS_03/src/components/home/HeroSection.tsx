import { motion } from "framer-motion";
import { Phone, ChevronDown, UtensilsCrossed, Clock, Star, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import LioraLogo from "@/components/brand/LioraLogo";
import { Link } from "react-router-dom";

const stats = [
  { icon: UtensilsCrossed, value: "60+", label: "Menu Items" },
  { icon: Clock, value: "30 min", label: "Avg Delivery" },
  { icon: Star, value: "4.8", label: "Rating" },
];

const HeroSection = () => {
  const scrollToMenu = () => {
    const menuSection = document.getElementById("menu-preview");
    menuSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 md:pt-20">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary via-background to-secondary/50" />
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none">
        <motion.div
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 left-10 text-8xl"
        >
          🍽️
        </motion.div>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          className="absolute top-40 right-20 text-6xl"
        >
          ☕
        </motion.div>
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-40 left-1/4 text-7xl"
        >
          🥗
        </motion.div>
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
          className="absolute bottom-20 right-1/3 text-5xl"
        >
          🍰
        </motion.div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, type: "spring" }}
            className="mb-8 flex justify-center"
          >
            <LioraLogo size="lg" showTagline />
          </motion.div>

          {/* Location */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="flex items-center justify-center gap-1.5 text-muted-foreground text-sm tracking-wide mb-6"
          >
            <MapPin className="w-4 h-4 text-primary" />
            T. Nagar, Chennai, Tamil Nadu
          </motion.p>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6"
          >
            Where Every Meal{" "}
            <span className="text-gradient">Shines</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Step into warmth, leave with joy. Experience the meaning of "Light"
            through our carefully crafted dishes that bring comfort and delight
            to every table.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2 text-lg px-8 py-6 shadow-warm"
            >
              <a
                href="https://wa.me/91xxxxxxxxxx"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Phone className="w-5 h-5" />
                Order on WhatsApp
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground text-lg px-8 py-6"
            >
              <Link to="/menu">Explore Menu</Link>
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-16 grid grid-cols-3 gap-6 max-w-lg mx-auto"
          >
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="w-10 h-10 mx-auto mb-2 rounded-full bg-primary/10 flex items-center justify-center">
                  <stat.icon className="w-5 h-5 text-primary" />
                </div>
                <p className="font-display text-2xl font-bold text-foreground">
                  {stat.value}
                </p>
                <p className="text-muted-foreground text-xs">{stat.label}</p>
              </div>
            ))}
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="mt-12 cursor-pointer"
            onClick={scrollToMenu}
          >
            <ChevronDown className="w-8 h-8 mx-auto text-muted-foreground" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
