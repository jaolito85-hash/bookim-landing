import { cn } from "@/lib/utils"

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode
}

export function Container({ className, children, ...props }: ContainerProps) {
    return (
        <div
            className={cn(
                "mx-auto w-full max-w-[1200px] px-6 md:px-12 lg:px-0",
                className
            )}
            {...props}
        >
            {children}
        </div>
    )
}
