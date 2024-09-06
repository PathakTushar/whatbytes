"use client";
import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, PointElement, CategoryScale, LinearScale, Title, Tooltip, Legend } from 'chart.js';
import annotationPlugin from 'chartjs-plugin-annotation';
import { MdOutlineAutoGraph } from "react-icons/md";

ChartJS.register(LineElement, PointElement, CategoryScale, LinearScale, Title, Tooltip, Legend, annotationPlugin);

const ComparisonGraph = ({ percentile = 90, averagePercentile = 72 }) => {
    const data = {
        labels: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
        datasets: [
            {
                label: 'Percentile Distribution',
                data: [5, 10, 20, 35, 50, 75, 60, 45, 30, 20, 10],
                fill: false,
                borderColor: 'rgba(75, 192, 192, 1)',
                tension: 0.4,
                pointRadius: 0,
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                display: false,
            },
            annotation: {
                annotations: {
                    userPercentile: {
                        type: 'line',
                        xMin: percentile,
                        xMax: percentile,
                        borderColor: `${percentile >= averagePercentile ? "rgba(92, 214, 92,1)" : "rgba(255, 99, 132, 1)"}`,
                        borderWidth: 2,
                    },
                    userPercentileLabel: {
                        type: 'label',
                        xValue: percentile,
                        yValue: 85,
                        content: [`Your Percentile:`, `${percentile}%`],
                        backgroundColor: `${percentile >= averagePercentile ? "rgba(92, 214, 92, 0.8)" : "rgba(255, 99, 132, 0.8)"}`,
                        color: 'white',
                        padding: 4,
                        font: {
                            size: 12,
                            weight: 'bold',
                        },
                    },
                    averagePercentile: {
                        type: 'line',
                        xMin: averagePercentile,
                        xMax: averagePercentile,
                        borderColor: 'rgba(54, 162, 235, 1)',
                        borderWidth: 2,
                    },
                    averagePercentileLabel: {
                        type: 'label',
                        xValue: averagePercentile,
                        yValue: 85,
                        content: [`Average:`, `${averagePercentile}%`],
                        backgroundColor: 'rgba(54, 162, 235, 0.8)',
                        color: 'white',
                        padding: 4,
                        font: {
                            size: 12,
                            weight: 'bold',
                        },
                    },
                },
            },
            tooltip: {
                callbacks: {
                    label: function(context) {
                        return `Percentile: ${context.parsed.x}, Students: ${context.parsed.y}`;
                    },
                },
            },
        },
        scales: {
            x: {
                type: 'linear',
                min: 0,
                max: 100,
                title: {
                    display: true,
                    text: 'Percentile',
                },
            },
            y: {
                beginAtZero: true,
                max: 100,
                title: {
                    display: true,
                    text: 'Number of Students',
                },
            },
        },
    };

    return (
        <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-bold">Comparison Graph</h2>
                <div className="p-2 rounded-full bg-gray-200">
                    <MdOutlineAutoGraph size={24} color='#cc0000' />
                </div>
            </div>
            <p className="text-slate-700 mb-4">
                You scored <span className="font-bold">{percentile}% percentile</span> which is 
                {percentile < averagePercentile ? ' lower ' : ' higher '} 
                than the average percentile of <span className="font-bold">{averagePercentile}%</span> of all the engineers who took this assessment.
            </p>
            <Line data={data} options={options} />
        </div>
    );
};

export default ComparisonGraph;