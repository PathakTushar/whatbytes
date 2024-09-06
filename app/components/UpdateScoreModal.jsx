"use client";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";

const UpdateScoresModal = ({ isOpen, onClose, onSave, rank, percentile, currentScore }) => {
    const rankRef = useRef(null);
    const percentileRef = useRef(null);
    const scoreRef = useRef(null);

    const [rankError, setRankError] = useState("");
    const [percentileError, setPercentileError] = useState("");
    const [scoreError, setScoreError] = useState("");

    useEffect(() => {
        if (isOpen) {
            rankRef.current.value = rank;
            percentileRef.current.value = percentile;
            scoreRef.current.value = currentScore;
        }
    }, [isOpen, rank, percentile, currentScore]);

    const validateRank = () => {
        const rankValue = rankRef.current.value;
        console.log(rankValue);
        
        if (!Number.isInteger(Number(rankValue)) || rankValue === "") {
            setRankError("Rank can't be blank!!");
        } else {
            setRankError("");
        }
    };

    const validatePercentile = () => {
        const percentileValue = percentileRef.current.value;
        if (percentileValue === "") {
            setPercentileError("Percentile can't be blank");
        } else if (percentileValue < 0 || percentileValue > 100) {
            setPercentileError("Percentile must be between 0 and 100.");
        } else {
            setPercentileError("");
        }
    };

    const validateScore = () => {
        const scoreValue = scoreRef.current.value;
        if (scoreValue === "") {
            setScoreError("Score can't be blank");
        } else if (scoreValue < 0 || scoreValue > 15) {
            setScoreError("Score must be between 0 and 15.");
        } else {
            setScoreError("");
        }
    };

    const handleSave = () => {
        if (!rankError && !percentileError && !scoreError) {
            onSave(rankRef.current.value, percentileRef.current.value, scoreRef.current.value);
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-20">
            <div className="bg-white rounded-lg shadow-lg p-6 w-[90%] md:w-[40%] relative">
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-2xl font-bold">Update scores</h1>
                    <Image src="/htmlnew.png" alt="Profile" width={36} height={36} />
                </div>

                <div className="mb-6">
                    <div className="flex items-center justify-between">
                        <label className="text-lg font-medium flex items-center">
                            <span className="bg-blue-800 text-white h-6 w-6 rounded-full flex items-center justify-center">1</span>
                            <span className="ml-2">Update your <span className="font-bold">Rank</span></span>
                        </label>
                        <input
                            ref={rankRef}
                            onChange = {validateRank}
                            type="number"
                            className={`border-2 rounded-lg p-2 w-28 focus:outline-none ${rankError ? 'border-red-500' : 'focus:border-blue-400'}`}
                        />
                    </div>
                    {rankError && <p className="text-red-500 text-sm mt-1">{rankError}</p>}
                </div>

                <div className="mb-6">
                    <div className="flex items-center justify-between">
                        <label className="text-lg font-medium flex items-center">
                            <span className="bg-blue-800 text-white h-6 w-6 rounded-full flex items-center justify-center">2</span>
                            <span className="ml-2">Update your <span className="font-bold">Percentile</span></span>
                        </label>
                        <input
                            ref={percentileRef}
                            onChange = {validatePercentile}
                            type="number"
                            className={`border-2 rounded-lg p-2 w-28 focus:outline-none ${percentileError ? 'border-red-500' : 'focus:border-blue-400'}`}
                        />
                    </div>
                    {percentileError && <p className="text-red-500 text-sm mt-1">{percentileError}</p>}
                </div>

                <div className="mb-6">
                    <div className="flex items-center justify-between">
                        <label className="text-lg font-medium flex items-center">
                            <span className="bg-blue-800 text-white h-6 w-6 rounded-full flex items-center justify-center">3</span>
                            <span className="ml-2">Update your <span className="font-bold">Current Score (out of 15)</span></span>
                        </label>
                        <input
                            ref={scoreRef}
                            onChange = {validateScore}
                            type="number"
                            className={`border-2 rounded-lg p-2 w-28 focus:outline-none ${scoreError ? 'border-red-500' : 'focus:border-blue-400'}`}
                        />
                    </div>
                    {scoreError && <p className="text-red-500 text-sm mt-1">{scoreError}</p>}
                </div>

                <div className="flex justify-end space-x-4">
                    <button onClick={onClose} className="text-blue-800 border border-blue-800 py-2 px-4 rounded-lg hover:bg-blue-100">
                        Cancel
                    </button>
                    <button onClick={handleSave} className="bg-blue-800 text-white py-2 px-4 rounded-lg hover:bg-blue-900">
                        Save
                    </button>
                </div>
            </div>
        </div>
    );
};

export default UpdateScoresModal;
