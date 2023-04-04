interface ColorIconProps {
    color: string;
}

export const ChevronRightIcon = ({ color }: ColorIconProps) => {
    return (
        <svg
            width="17"
            height="17"
            viewBox="0 0 17 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g mask="url(#mask0_28_48833)">
                <path
                    d="M6.65817 12.75L5.6665 11.7583L8.92484 8.5L5.6665 5.24167L6.65817 4.25L10.9082 8.5L6.65817 12.75Z"
                    fill={color}
                />
            </g>
        </svg>
    );
};
