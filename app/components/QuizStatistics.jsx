"use client";
import { FaTrophy, FaClipboardCheck, FaCheckCircle } from "react-icons/fa"; // Importing icons

const QuizStatistics = ({ rank = 4, percentile = 90, currentScore = 12 }) => {
    return (
        <div className="bg-white shadow-lg rounded-lg p-6 w-full">
            <h2 className="text-lg font-semibold mb-4">Quiz Statistics</h2>

            <div className="flex justify-between items-center border-t border-b py-6 space-x-4">
                <div className="flex space-x-4 items-center" >
                    <FaTrophy className="text-2xl md:text-4xl text-yellow-500 mb-2" />
                    <div className="flex flex-col items-center">
                        <p className="text-2xl font-bold">{rank}</p>
                        <p className="text-gray-500 text-sm">YOUR RANK</p>
                    </div>
                </div>


                <div className="flex space-x-4 items-center">
                    <FaClipboardCheck className="text-xl md:text-4xl text-gray-500 mb-2" />
                    <div className="flex flex-col items-center">
                        <p className="text-xl md:text-2xl font-bold">{percentile}%</p>
                        <p className="text-gray-500 text-sm">PERCENTILE</p>
                    </div>
                </div>


                <div className="flex space-x-4 items-center">
                    <FaCheckCircle className="text-2xl md:text-4xl text-green-500 mb-2" />
                    <div className="flex flex-col items-center">
                        <p className="text-xl md:text-2xl font-bold">{currentScore}/15</p>
                        <p className="text-gray-500 text-sm">CORRECT ANSWERS</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default QuizStatistics;
