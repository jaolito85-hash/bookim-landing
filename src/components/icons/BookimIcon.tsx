import React from 'react';

interface BookimIconProps {
    size?: number;
    backgroundColor?: string;
    faceColor?: string;
    className?: string;
}

export function BookimIcon({
    size = 200,
    backgroundColor = '#2D4057',
    faceColor = '#F8F9FA',
    className = ''
}: BookimIconProps) {
    const strokeWidth = size * 0.04; // 4% of size for consistent stroke
    const padding = size * 0.15; // 15% padding for safe area

    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 200 200"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            {/* Rounded square container */}
            <rect
                width="200"
                height="200"
                rx="40"
                fill={backgroundColor}
            />

            {/* Face background */}
            <rect
                x="30"
                y="30"
                width="140"
                height="140"
                rx="28"
                fill={faceColor}
            />

            {/* Left glasses frame */}
            <circle
                cx="70"
                cy="90"
                r="22"
                stroke={backgroundColor}
                strokeWidth={strokeWidth}
                fill="none"
            />

            {/* Right glasses frame */}
            <circle
                cx="130"
                cy="90"
                r="22"
                stroke={backgroundColor}
                strokeWidth={strokeWidth}
                fill="none"
            />

            {/* Bridge of glasses */}
            <path
                d="M 92 90 Q 100 85 108 90"
                stroke={backgroundColor}
                strokeWidth={strokeWidth}
                fill="none"
                strokeLinecap="round"
            />

            {/* Left temple */}
            <path
                d="M 48 90 L 40 90"
                stroke={backgroundColor}
                strokeWidth={strokeWidth}
                strokeLinecap="round"
            />

            {/* Right temple */}
            <path
                d="M 152 90 L 160 90"
                stroke={backgroundColor}
                strokeWidth={strokeWidth}
                strokeLinecap="round"
            />

            {/* Left eye */}
            <circle
                cx="70"
                cy="90"
                r="6"
                fill={backgroundColor}
            />

            {/* Right eye */}
            <circle
                cx="130"
                cy="90"
                r="6"
                fill={backgroundColor}
            />

            {/* Smile */}
            <path
                d="M 80 120 Q 100 130 120 120"
                stroke={backgroundColor}
                strokeWidth={strokeWidth}
                fill="none"
                strokeLinecap="round"
            />
        </svg>
    );
}
