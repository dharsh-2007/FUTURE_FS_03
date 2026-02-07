import { motion } from "framer-motion";
import { Heart, Sparkles, Users, Flame } from "lucide-react";

const features = [
  {
    icon: Sparkles,
    title: "Fresh Ingredients",
    description:
      "We source only the freshest ingredients to bring authentic flavors to your plate.",
  },
  {
    icon: Heart,
    title: "Made with Love",
    description:
      "Every dish is prepared with care and passion, just like a home-cooked meal.",
  },
  {
    icon: Users,
    title: "Family Friendly",
    description:
      "A warm, welcoming space for families to gather and create lasting memories.",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image / Visual Side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative order-2 lg:order-1"
          >
            <div className="aspect-square max-w-md mx-auto lg:max-w-none relative">
              {/* Decorative Background */}
              <div className="absolute inset-4 bg-primary/10 rounded-3xl transform rotate-3" />
              <div className="absolute inset-4 bg-accent/10 rounded-3xl transform -rotate-3" />

              {/* Main Content */}
              <div className="relative bg-card rounded-3xl p-8 md:p-12 shadow-warm h-full flex flex-col justify-center">
                <div className="text-center">
                  <motion.div
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    className="w-20 h-20 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-6"
                  >
                    <Flame className="w-10 h-10 text-primary" />
                  </motion.div>
                  <h3 className="font-display text-4xl md:text-5xl font-bold text-primary mb-4">
                    Liora
                  </h3>
                  <p className="text-muted-foreground text-lg italic mb-2">
                    /lee-OR-ah/
                  </p>
                  <p className="text-foreground text-xl font-medium">
                    Meaning: "Light" or "My Light"
                  </p>
                  <div className="mt-6 pt-6 border-t border-border">
                    <p className="text-muted-foreground text-sm">
                      Hebrew Origin • A name that embodies warmth, hope, and
                      radiance
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-1 lg:order-2"
          >
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
              Our Story
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-2 mb-6">
              About Liora
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                The name{" "}
                <strong className="text-foreground">Liora</strong> means
                "Light" — and that's exactly what we aim to bring to every
                dining experience. Just as light brings warmth and joy, we
                believe every meal should illuminate your day.
              </p>
              <p>
                Founded with a passion for authentic flavors and heartfelt
                hospitality, Liora is more than just a restaurant. It's a place
                where families gather, friends reconnect, and every guest is
                treated like family.
              </p>
              <p>
                Our kitchen is driven by a simple philosophy: use fresh
                ingredients, cook with love, and serve with a smile. From our
                sizzling non-veg specialties to our aromatic teas, every item on
                our menu is crafted to bring comfort and delight.
              </p>
            </div>

            {/* Features */}
            <div className="grid sm:grid-cols-3 gap-6 mt-10">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="text-center sm:text-left"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto sm:mx-0 mb-3">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-1">
                    {feature.title}
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
