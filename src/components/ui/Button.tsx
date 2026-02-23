import * as React from "react"
// Imports removed as cva and slot are not used in this implementation
import { cn } from "@/lib/utils"

// Note: Ensure @radix-ui/react-slot and class-variance-authority are installed
// I will installing them in the next step if they are missing.
// For now I will use a simple implementation without CVA if I don't want to install extra deps,
// BUT the prompt said "Shadcn/ui style" often implies these. 
// The user directive didn't explicitly ask for shadcn/ui but the stack uses tailwind.
// I'll stick to a simpler implementation without CVA/Slot for now to avoid extra deps unless required, 
// OR I'll install them. The task list didn't include them.
// I'll implement Button without CVA/Slot for simplicity and to match the dependency list I installed.

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'ghost' | 'outline';
    size?: 'sm' | 'md' | 'lg';
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = 'primary', size = 'md', ...props }, ref) => {

        // Base styles
        const baseStyles = "inline-flex items-center justify-center whitespace-nowrap rounded-xl text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98]";

        // Variants
        const variants = {
            primary: "bg-[var(--bookim-primary)] text-white hover:brightness-110 hover:translate-y-[-2px] hover:shadow-lg transition-all",
            secondary: "bg-[var(--bookim-primary)]/10 text-[var(--bookim-primary)] hover:bg-[var(--bookim-primary)]/20",
            outline: "border border-[var(--bookim-border)] bg-transparent hover:border-[var(--bookim-primary)] hover:bg-[var(--bookim-primary)]/5 text-[var(--bookim-text-primary)]",
            ghost: "hover:bg-[var(--bookim-bg-tertiary)] text-[var(--bookim-text-secondary)] hover:text-[var(--bookim-text-primary)]",
        };

        // Sizes
        const sizes = {
            sm: "h-9 px-4 py-2 text-xs",
            md: "h-11 px-6 py-2.5",
            lg: "h-14 px-8 text-base",
        };

        const combinedClassName = cn(
            baseStyles,
            variants[variant],
            sizes[size],
            className
        );

        return (
            <button
                ref={ref}
                className={combinedClassName}
                {...props}
            />
        );
    }
)
Button.displayName = "Button"

export { Button }
