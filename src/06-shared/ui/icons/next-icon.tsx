interface NextIconProps {
    className?: string
    onClick?: () => void
}

export const NextIcon = ({ className, onClick }: NextIconProps) => {
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
                d="M7 1L5.6 2.5L13 10l-7.4 7.5L7 19l9-9z"
            />
        </svg>
    )
}
