"use client";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import Image from "next/image";
import { GoGoal } from "react-icons/go";

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = ({ correctAnswers = 12, totalQuestions = 15 }) => {
    const incorrectAnswers = totalQuestions - correctAnswers;

    const data = {
        datasets: [
            {
                label: '# of Answers',
                data: [correctAnswers, incorrectAnswers],
                backgroundColor: ['#007bff', '#ADD8E6'], 
                borderColor: ['#FFFFFF'],
                borderWidth: 1,
            },
        ],
    };

    const options = {
        responsive: true,
        cutout: '70%',
        plugins: {
            legend: {
                position: 'bottom',
            },
            tooltip: {
                callbacks: {
                    label: function (tooltipItem) {
                        let label = tooltipItem.label || '';
                        if (label) {
                            label += ': ';
                        }
                        label += Math.round(tooltipItem.raw);
                        label += ` (${((tooltipItem.raw / totalQuestions) * 100).toFixed(1)}%)`;
                        return label;
                    },
                },
            },
        },
    };

    return (
        <div className="w-full lg:w-3/4 mx-auto flex justify-center items-center">
            <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-xs md:max-w-sm lg:max-w-md xl:max-w-lg">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-lg font-bold">Question Analysis</h2>
                    <h2 className="text-lg font-bold text-blue-700">
                        {correctAnswers}/{totalQuestions}
                    </h2>
                </div>
                <div className="mb-4 text-lg text-slate-700">
                    <span className="text-slate-800 font-semibold">
                        You scored {correctAnswers} questions correct out of {totalQuestions}. 
                    </span> 
                    However, it still needs some improvements.
                </div>
                <div className="flex justify-center relative">
                    <Doughnut data={data} options={options} />
                    <div className="absolute justify-center top-1/3" >
                        <GoGoal size={32} color="#cc0000" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DoughnutChart;
