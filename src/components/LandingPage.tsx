import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LandingPage = ({ setNumQuestions }) => {
    const [inputValue, setInputValue] = useState(0);
    const navigate = useNavigate();

    const handleLandingSubmit = () => {
        setNumQuestions(inputValue);
        navigate("/questions");
    };

    return (
        <div style={{ padding: "20px" }}>
            <h1>OMR Sheet Setup</h1>
            <label>
                Number of Questions:
                <input
                    type="number"
                    min="0"
                    value={inputValue}
                    onChange={(e) => setInputValue(Number(e.target.value))}
                />
            </label>
            <button onClick={handleLandingSubmit}>Submit</button>
        </div>
    );
};

export default LandingPage
