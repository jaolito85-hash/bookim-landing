import * as React from "react"
import { cn } from "@/lib/utils"

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
    variant?: 'default' | 'outline' | 'secondary' | 'accent' | 'success';
}

function Badge({ className, variant = "default", ...props }: BadgeProps) {
    const variants = {
        default: "border-transparent bg-[var(--bookim-primary)] text-white hover:bg-[var(--bookim-primary)]/80",
        secondary: "border-transparent bg-[var(--bookim-bg-tertiary)] text-[var(--bookim-text-primary)] hover:bg-[var(--bookim-bg-tertiary)]/80",
        outline: "text-[var(--bookim-text-primary)] border-[var(--bookim-border)]",
        accent: "border-transparent bg-[var(--bookim-primary)]/10 text-[var(--bookim-primary)]",
        success: "border-transparent bg-[var(--bookim-primary)]/10 text-[var(--bookim-primary)]",
    }

    return (
        <div
            className={cn(
                "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 uppercase tracking-wide",
                variants[variant],
                className
            )}
            {...props}
        />
    )
}

export { Badge }
