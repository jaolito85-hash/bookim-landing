import { cn } from "@/lib/utils"

interface MockupPhoneProps extends React.HTMLAttributes<HTMLDivElement> {
    children?: React.ReactNode;
    imgSrc?: string;
}

export function MockupPhone({ className, children, imgSrc, ...props }: MockupPhoneProps) {
    return (
        <div className={cn("relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px] shadow-xl", className)} {...props}>
            <div className="w-[148px] h-[18px] bg-gray-800 top-0 rounded-b-[1rem] left-1/2 -translate-x-1/2 absolute z-10"></div>
            <div className="h-[46px] w-[3px] bg-gray-800 absolute -start-[17px] top-[124px] rounded-s-lg"></div>
            <div className="h-[46px] w-[3px] bg-gray-800 absolute -start-[17px] top-[178px] rounded-s-lg"></div>
            <div className="h-[64px] w-[3px] bg-gray-800 absolute -end-[17px] top-[142px] rounded-e-lg"></div>
            <div className="rounded-[2rem] overflow-hidden w-[272px] h-[572px] bg-white dark:bg-gray-800 relative">
                {imgSrc ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={imgSrc} className="w-full h-full object-cover" alt="App Screenshot" />
                ) : (
                    <div className="w-full h-full bg-[var(--bookim-bg-tertiary)] flex items-center justify-center text-[var(--bookim-text-muted)]">
                        {children || "App Screen"}
                    </div>
                )}
            </div>
        </div>
    )
}
