"use client";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Container from "./components/Container";
import QuizCard from "./components/QuizCard";
import QuizStatistics from "./components/QuizStatistics";
import DoughnutChart from "./components/DoughnutChart";
import SkillWise from "./components/SkillWise";
import ComparisonGraph from "./components/ComparisonGraph";

export default function Home() {
  const [rank, setRank] = useState(1);
  const [percentile, setPercentile] = useState(30);
  const [currentScore, setCurrentScore] = useState(10);

  const onRender = (rank, percentile, currentScore) => {
    setRank(rank);
    setPercentile(percentile);
    setCurrentScore(currentScore);
  };

  return (
    <div>
      <Navbar />
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 ">
          {/* Left section with 2/3 width */}
          <div className="lg:col-span-3 space-y-6">
            <QuizCard rank={rank} onRender={onRender} percentile={percentile} currentScore={currentScore} />
            <QuizStatistics rank={rank} percentile={percentile} currentScore={currentScore} />
            <ComparisonGraph percentile={percentile} />
          </div>

          {/* Right section with 1/3 width */}
          <div className="lg:col-span-2 space-y-6">
            <SkillWise />
            <DoughnutChart correctAnswers={currentScore} totalQuestions={15} />
          </div>
        </div>
      </Container>
    </div>
  );
}
