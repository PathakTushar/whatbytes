"use client";
import Image from "next/image";
import { useState } from "react";
import UpdateScoresModal from "./UpdateScoreModal";

const QuizCard = ({onRender, rank, percentile, currentScore}) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleUpdateClick = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const handleSaveScores = (rank, percentile, currentScore) => {
        onRender(rank, percentile, currentScore);
        setIsModalOpen(false);
    };

    return (
        <div>
            <div className="flex items-center justify-between bg-white shadow-md rounded-lg p-4 w-full">
                <div className="flex items-center space-x-4">
                    <div className="h-16 w-16">
                        <Image
                            src="/htmlnew.png"
                            alt="HTML Logo"
                            width={64}
                            height={64}
                            className="object-contain"
                        />
                    </div>
                    <div>
                        <h2 className="font-semibold text-lg text-black">
                            Hyper Text Markup Language
                        </h2>
                        <p className="text-sm text-gray-500">
                            Questions: 08 | Duration: 15 mins | Submitted on 6 Sept 2024
                        </p>
                    </div>
                </div>

                <button
                    onClick={handleUpdateClick}
                    className="bg-blue-800 text-white text-sm font-semibold py-2 px-4 rounded-lg hover:bg-blue-900"
                >
                    Update
                </button>
            </div>

            <UpdateScoresModal
                isOpen={isModalOpen}
                onClose={handleCloseModal}
                onSave={handleSaveScores}
                rank = {rank}
                percentile = {percentile}
                currentScore = {currentScore}
            />
        </div>
    );
};

export default QuizCard;