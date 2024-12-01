import React from "react";
import jsPDF from "jspdf";

const ReviewPage = ({ questions, setQuestions }) => {
    const handleCheckboxChange = (index, field) => {
        const updatedQuestions = [...questions];
        updatedQuestions[index] = {
            ...updatedQuestions[index],
            [field]: !updatedQuestions[index]?.[field],
        };
        setQuestions(updatedQuestions);
    };

    const handleDownload = () => {
        const doc = new jsPDF();
        doc.setFontSize(12);

        let y = 10; // Start Y position

        questions.forEach((question, index) => {
            if (y > 280) { // If the content reaches the bottom of the page
                doc.addPage();
                y = 10; // Reset Y position for the new page
            }
            const correct = question?.correct ? "Yes" : "No";
            const incorrect = question?.incorrect ? "Yes" : "No";
            doc.text(
                `Question ${index + 1}: Selected Option: ${question?.selectedOption || "None"}`,
                10,
                y
            );
            doc.text(`Correct: ${correct}, Incorrect: ${incorrect}`, 10, y + 5);
            y += 15; // Move Y position for the next question
        });

        doc.save("review-data.pdf");
    };

    return (
        <div style={{ padding: "20px" }}>
            <h1>Review Page</h1>
            {questions.map((question, index) => (
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
                                disabled
                                checked={question?.selectedOption === option}
                            />
                            {option}
                        </label>
                    ))}
                    <input
                        type="checkbox"
                        style={{ marginLeft: "10px" }}
                        checked={question?.correct || false}
                        onChange={() => handleCheckboxChange(index, "correct")}
                    />
                    <span style={{ marginLeft: "5px" }}>Correct</span>
                    <input
                        type="checkbox"
                        style={{ marginLeft: "20px" }}
                        checked={question?.incorrect || false}
                        onChange={() => handleCheckboxChange(index, "incorrect")}
                    />
                    <span style={{ marginLeft: "5px" }}>Incorrect</span>
                </div>
            ))}
            <button onClick={handleDownload} style={{ marginTop: "20px" }}>
                Download Review Data
            </button>
        </div>
    );
};

export default ReviewPage;
