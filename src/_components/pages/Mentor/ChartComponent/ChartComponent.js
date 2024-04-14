import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const ChartComponent = ({ data }) => {
    const chartRef = useRef(null);
    const chartInstance = useRef(null);

    useEffect(() => {
        if (chartRef && chartRef.current) {
            const ctx = chartRef.current.getContext("2d");

            if (chartInstance.current) {
                chartInstance.current.destroy();
            }

            chartInstance.current = new Chart(ctx, {
                type: "doughnut",
                data: data,
                options: {
                    plugins: {
                        tooltip: {
                            callbacks: {
                                // label: function (context) {
                                //     return `${context.label}: ${context.raw}`;
                                // },
                                label: function (context) {
                                    const total = context.dataset.data.reduce(
                                        (acc, curr) => acc + curr,
                                        0
                                    );
                                    const percentage = (
                                        (context.raw / total) *
                                        100
                                    ).toFixed(2);
                                    return `${context.label}: ${percentage}%`;
                                },
                            },
                        },
                    },
                },
            });
        }

        return () => {
            if (chartInstance.current) {
                chartInstance.current.destroy();
            }
        };
    }, [data]);

    return <canvas ref={chartRef} />;
};

export default ChartComponent;
