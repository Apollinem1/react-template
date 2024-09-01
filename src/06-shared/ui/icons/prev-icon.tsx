interface PrevIconProps {
    className?: string;
    onClick?: () => void;
}

export const PrevIcon = ({className, onClick}: PrevIconProps) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 20 20"
            className={className}
            onClick={onClick}
        >
            <path
                fill="currentColor"
                d="m4 10l9 9l1.4-1.5L7 10l7.4-7.5L13 1z"
            />
        </svg>
    )
}
