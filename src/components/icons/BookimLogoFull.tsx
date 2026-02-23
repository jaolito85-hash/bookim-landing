import React from 'react';
import { BookimIcon } from './BookimIcon';

interface BookimLogoProps {
    className?: string;
    iconClassName?: string;
    textClassName?: string;
    textColor?: string;
}

export function BookimLogoFull({
    className = "flex items-center space-x-2",
    iconClassName = "h-8 w-8",
    textClassName = "text-xl",
    textColor = "#2D4057" // Brand Blue
}: BookimLogoProps) {
    return (
        <div className={className}>
            <BookimIcon className={iconClassName} />
            <span
                style={{
                    fontFamily: "'Outfit', sans-serif", // Enforcing Outfit as requested
                    fontWeight: 700,
                    color: textColor,
                    letterSpacing: '-0.02em',
                    lineHeight: 1
                }}
                className={textClassName}
            >
                Bookim
            </span>
        </div>
    );
}
