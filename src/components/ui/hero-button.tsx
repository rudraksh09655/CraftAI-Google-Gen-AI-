import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const heroButtonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-base font-semibold ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        primary: "bg-gradient-to-r from-primary to-primary-glow text-primary-foreground shadow-warm hover:shadow-deep transform hover:scale-105 transition-all duration-300",
        secondary: "bg-gradient-to-r from-secondary to-[hsl(215_60%_45%)] text-secondary-foreground shadow-deep hover:shadow-warm transform hover:scale-105 transition-all duration-300",
        accent: "bg-gradient-to-r from-accent to-[hsl(35_80%_75%)] text-accent-foreground craft-glow hover:shadow-warm transform hover:scale-105 transition-all duration-300",
        outline: "border-2 border-primary text-primary hover:bg-gradient-to-r hover:from-primary hover:to-primary-glow hover:text-primary-foreground hover:border-transparent transition-all duration-300",
        ghost: "text-foreground hover:bg-gradient-to-r hover:from-primary/10 hover:to-accent/10 transition-all duration-300"
      },
      size: {
        default: "h-12 px-6 py-3",
        sm: "h-10 px-4 py-2 text-sm",
        lg: "h-14 px-8 py-4 text-lg",
        xl: "h-16 px-10 py-5 text-xl"
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

export interface HeroButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof heroButtonVariants> {
  asChild?: boolean;
}

const HeroButton = React.forwardRef<HTMLButtonElement, HeroButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(heroButtonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
HeroButton.displayName = "HeroButton";

export { HeroButton, heroButtonVariants };