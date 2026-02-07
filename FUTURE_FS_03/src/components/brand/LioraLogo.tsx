import { cn } from "@/lib/utils";

interface LioraLogoProps {
  size?: "sm" | "md" | "lg";
  showTagline?: boolean;
  className?: string;
}

const LioraLogo = ({ size = "md", showTagline = false, className }: LioraLogoProps) => {
  const sizes = {
    sm: {
      icon: "w-8 h-8",
      flame: "w-5 h-5",
      text: "text-lg",
      tagline: "text-[8px]",
    },
    md: {
      icon: "w-10 h-10 md:w-12 md:h-12",
      flame: "w-6 h-6 md:w-7 md:h-7",
      text: "text-xl md:text-2xl",
      tagline: "text-[10px] md:text-xs",
    },
    lg: {
      icon: "w-16 h-16",
      flame: "w-10 h-10",
      text: "text-3xl",
      tagline: "text-sm",
    },
  };

  const currentSize = sizes[size];

  return (
    <div className={cn("flex items-center gap-2", className)}>
      {/* Logo Icon - Flame/Light symbol */}
      <div
        className={cn(
          currentSize.icon,
          "relative rounded-full bg-gradient-to-br from-primary via-primary to-accent flex items-center justify-center shadow-warm overflow-hidden"
        )}
      >
        {/* Inner glow effect */}
        <div className="absolute inset-0 bg-gradient-to-t from-transparent to-white/20 rounded-full" />
        
        {/* Flame icon */}
        <svg
          viewBox="0 0 24 24"
          fill="none"
          className={cn(currentSize.flame, "relative z-10")}
        >
          {/* Main flame */}
          <path
            d="M12 2C12 2 8 8 8 12C8 16 10 18 12 20C14 18 16 16 16 12C16 8 12 2 12 2Z"
            fill="hsl(var(--primary-foreground))"
            className="drop-shadow-sm"
          />
          {/* Inner flame */}
          <path
            d="M12 6C12 6 10 10 10 12C10 14 11 15 12 16C13 15 14 14 14 12C14 10 12 6 12 6Z"
            fill="hsl(var(--primary))"
            opacity="0.6"
          />
          {/* Flame highlight */}
          <ellipse
            cx="12"
            cy="13"
            rx="1.5"
            ry="2"
            fill="hsl(var(--secondary))"
            opacity="0.8"
          />
        </svg>
      </div>

      {/* Text */}
      <div className="flex flex-col">
        <span
          className={cn(
            currentSize.text,
            "font-display font-bold text-foreground tracking-tight"
          )}
        >
          Liora
        </span>
        {showTagline && (
          <span
            className={cn(
              currentSize.tagline,
              "text-muted-foreground tracking-wide"
            )}
          >
            Where Every Meal Shines
          </span>
        )}
      </div>
    </div>
  );
};

export default LioraLogo;
