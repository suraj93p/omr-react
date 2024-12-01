import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import QuestionsPage from "./components/QuestionsPage";
import ReviewPage from "./components/ReviewPage";

const App = () => {
    const [numQuestions, setNumQuestions] = useState(0);
    const [questions, setQuestions] = useState([]);

    useEffect(() => {
        if (numQuestions > 0) {
            setQuestions(Array.from({ length: numQuestions }, () => ""));
        }
    }, [numQuestions]);

    return (
        <Router>
            <Routes>
                <Route path="/" element={<LandingPage setNumQuestions={setNumQuestions} />} />
                <Route
                    path="/questions"
                    element={
                        <QuestionsPage
                            questions={questions}
                            setQuestions={setQuestions}
                        />
                    }
                />
                <Route path="/review" element={<ReviewPage questions={questions} setQuestions={setQuestions} />} />
            </Routes>
        </Router>
    );
};

export default App;
