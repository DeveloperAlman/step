import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Get hired 😊",
  "Work and enjoy 😊",
  "Invest your new income 🤑",
];

function App() {
  // useState syntax
  // [value, setValue] where value can change and setValue write logic to how change
  const [step, setStep] = useState(1);
  const [indicator, setIndicator] = useState(1);

  const [isOpen, setIsOpen] = useState(true);

  function handlePrevious() {
    if (step > 1) setStep((s) => s - 1);
    if (indicator > 1) setIndicator((i) => i - 1);
  }

  function handleNext() {
    if (step < messages.length) setStep((s) => s + 1);
    if (indicator < messages.length) setIndicator((i) => i + 1);
  }

  function showModal() {
    setIsOpen((open) => !open);
  }

  return (
    <>
      <button className="close" onClick={showModal}>
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
            <div className={step >= 4 ? "active" : ""}>4</div>
            <div className={step >= 5 ? "active" : ""}>5</div>
          </div>

          <div className="message">
            Step {indicator}: {messages[step - 1]}
          </div>

          <div className="buttons">
            <button
              onClick={handlePrevious}
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
            >
              Previous
            </button>
            <button
              onClick={handleNext}
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </>
  );
}
export default App;
