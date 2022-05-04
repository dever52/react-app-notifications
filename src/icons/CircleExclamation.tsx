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
                cy={690.68}
                r={42.95}
                style={{
                    fill: "#fff",
                    stroke: "#1d1d1b",
                    strokeMiterlimit: 10,
                }}
            />
            <rect
                x={411.71}
                y={175.7}
                width={85.91}
                height={381.55}
                rx={38.21}
                ry={38.21}
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
