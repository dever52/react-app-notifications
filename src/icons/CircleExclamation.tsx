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
                data-name="Ebene 2"
            />
            <g data-name="Ebene 3">
                <circle
                    cx={454.67}
                    cy={741.33}
                    r={85.94}
                    style={{
                        fill: "#fff",
                        stroke: "#1d1d1b",
                        strokeMiterlimit: 10,
                    }}
                />
                <rect
                    x={368.72}
                    y={82.06}
                    width={171.89}
                    height={512}
                    rx={85.94}
                    style={{
                        fill: "#fff",
                        stroke: "#1d1d1b",
                        strokeMiterlimit: 10,
                    }}
                />
            </g>
        </svg>
    );
};

export default CircleExclamation;
