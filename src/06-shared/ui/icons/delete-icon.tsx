interface DeleteIconProps {
    className?: string
    onClick?: () => void
    dataTestId?: string
}

export const DeleteIcon = ({
    className,
    onClick,
    dataTestId,
}: DeleteIconProps) => {
    return (
        <svg
            data-testid={dataTestId ?? 'delete-icon'}
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
            onClick={onClick}
        >
            <path
                d="M8.3341 7.08335L14.1674 12.9167M8.3341 12.9167L14.1091 7.08335M6.25077 4.58335L3.37827 8.99169C3.23973 9.20415 3.163 9.45096 3.15668 9.70452C3.15035 9.95808 3.21467 10.2084 3.34244 10.4275L6.25077 15.4167H15.7174C15.897 15.4167 16.0748 15.3813 16.2406 15.3126C16.4065 15.2438 16.5572 15.1431 16.6841 15.0161C16.811 14.8891 16.9117 14.7384 16.9803 14.5724C17.0489 14.4065 17.0842 14.2287 17.0841 14.0492V5.95002C17.0842 5.77048 17.0489 5.59267 16.9803 5.42676C16.9117 5.26086 16.811 5.1101 16.6841 4.9831C16.5572 4.85611 16.4065 4.75536 16.2406 4.68663C16.0748 4.6179 15.897 4.58252 15.7174 4.58252L6.25077 4.58335Z"
                stroke="currentColor"
                strokeWidth="1.33333"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}
