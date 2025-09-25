import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  variant?: "default" | "muted" | "gradient";
}

const Section = ({ children, className, id, variant = "default" }: SectionProps) => {
  const variantClasses = {
    default: "bg-background",
    muted: "bg-gradient-subtle",
    gradient: "bg-gradient-primary"
  };

  return (
    <section 
      id={id}
      className={cn(
        "py-16 px-4 sm:px-6 lg:px-8",
        variantClasses[variant],
        className
      )}
    >
      <div className="max-w-7xl mx-auto">
        {children}
      </div>
    </section>
  );
};

export default Section;