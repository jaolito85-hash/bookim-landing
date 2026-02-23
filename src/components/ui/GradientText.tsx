import { cn } from "@/lib/utils"

export function GradientText({ className, children, ...props }: React.HTMLAttributes<HTMLSpanElement>) {
    return (
        <span
            className={cn(
                "bg-[image:var(--bookim-gradient-hero)] bg-clip-text text-transparent",
                className
            )}
            {...props}
        >
            {children}
        </span>
    )
}
