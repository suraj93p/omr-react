import React from "react";
import { useNavigate } from "react-router-dom";

const QuestionsPage = ({ questions, setQuestions }) => {
    const navigate = useNavigate();

    const handleOptionChange = (index, value) => {
        const updatedQuestions = [...questions];
        updatedQuestions[index] = value;
        setQuestions(updatedQuestions);
    };

    const handleReview = () => {
        navigate("/review");
    };

    return (
        <div style={{ padding: "20px" }}>
            <h1>Questions Page</h1>
            {questions.map((answer, index) => (
                <div
                    key={index}
                    style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}
                >
                    <span style={{ marginRight: "10px" }}>Question {index + 1}:</span>
                    {["A", "B", "C", "D", "E"].map((option) => (
                        <label key={option} style={{ marginRight: "10px" }}>
                            <input
                                type="radio"
                                name={`question-${index}`}
                                value={option}
                                checked={answer === option}
                                onChange={() => handleOptionChange(index, option)}
                            />
                            {option}
                        </label>
                    ))}
                </div>
            ))}
            <button onClick={handleReview} style={{ marginTop: "20px" }}>
                Review
            </button>
        </div>
    );
};

export default QuestionsPage;
