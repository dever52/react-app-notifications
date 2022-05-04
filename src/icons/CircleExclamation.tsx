import * as React from 'react';

const CircleExclamation = (props: any) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 909.33 909.33"
            {...props}
        >
            <circle
                cx={454.67}
                cy={454.67}
                r={454.17}
                style={{
                    stroke: "#1d1d1b",
                    strokeMiterlimit: 10,
                }}
            />
            <circle
                cx={454.67}
                cy={715.64}
                r={68.24}
                style={{
                    fill: "#fff",
                    stroke: "#1d1d1b",
                    strokeMiterlimit: 10,
                }}
            />
            <rect
                x={386.43}
                y={125.46}
                width={136.47}
                height={459.72}
                rx={68.24}
                ry={68.24}
                style={{
                    fill: "#fff",
                    stroke: "#1d1d1b",
                    strokeMiterlimit: 10,
                }}
            />
        </svg>
    );
};

export default CircleExclamation;
