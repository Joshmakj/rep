import React, { useState, useEffect } from "react";
import '../components/Componetcss/Captcha.css';
import { FiRefreshCw } from "react-icons/fi";
const Captcha = ({ onChange }) => {
  const [question, setQuestion] = useState("");
  const [correctAnswer, setCorrectAnswer] = useState(null);
  const [userAnswer, setUserAnswer] = useState("");

  const generateCaptcha = () => {
    const num1 = Math.floor(Math.random() * 10);
    const num2 = Math.floor(Math.random() * 10);
    const operators = ["+", "-"];
    const operator = operators[Math.floor(Math.random() * operators.length)];
    let answer;

    switch (operator) {
      case "+": answer = num1 + num2; break;
      case "-": answer = num1 - num2; break;
    }

    setQuestion(`${num1} ${operator} ${num2} = ?`);
    setCorrectAnswer(answer);
    setUserAnswer("");
  };

  useEffect(() => {
    generateCaptcha();
  }, []);

  const handleChange = (e) => {
    setUserAnswer(e.target.value);
    onChange(e.target.value, correctAnswer); 
  };

  return (
    <div className="captcha-container">
      <label className="captcha-label">{question} *</label>
      <input
        type="number"
        value={userAnswer}
        onChange={handleChange}
        required
      />
     


<button
  type="button"
  onClick={generateCaptcha}
  className="captchabutton flex items-center justify-center p-2 rounded-full transition-transform duration-200 hover:rotate-90"
  aria-label="Refresh CAPTCHA"
>
  <FiRefreshCw className="w-5 h-5" />
</button>

    </div>
  );
};

export default Captcha;
