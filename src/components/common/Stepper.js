import React, { useEffect, useState } from 'react'
import Title from './Title'

const Stepper = () => {
  const [stepper, setStepper] = useState({
    circles: null,
    progressBar: null,
    buttons: null
  });
  const [currentStep, setCurrentStep] = useState(1);

  useEffect(() => {
    setStepper({
      circles: document.querySelectorAll(".circle"),
      progressBar: document.querySelector(".indicator"),
      buttons: document.querySelectorAll(".buttons")
    });
  }, []);

  const updateSteps = (e) => {
    setCurrentStep((prevStep) =>
      e.target.id === "next" ? prevStep + 1 : prevStep - 1
    );
  };

  useEffect(() => {
    if (stepper.circles && stepper.progressBar && stepper.buttons) {
      stepper.circles.forEach((circle, index) => {
        circle.classList.toggle("active", index < currentStep);
      });
      stepper.progressBar.style.width = `${((currentStep - 1) /
        (stepper.circles.length - 1)) *
        100}%`;
      stepper.buttons[0].disabled = currentStep === 1;
      stepper.buttons[1].disabled = currentStep === stepper.circles.length;
    }
  }, [currentStep, stepper]);

  const stepperCard = (() => {
    switch (currentStep) {
      case 1:
        return <Title title='Card 1'/>;
      case 2:
        return <Title title='Card 2'/>;
      case 3:
        return <Title title='Card 3'/>;
      case 4:
        return <Title title='Card 4'/>;
      case 5:
        return <Title title='Card 5'/>;
      default:
        return null;
    }
  })();

  return (
    <div className="stepper-container">
      <div className="stepper-steps">
        <button className="buttons" id="prev" onClick={updateSteps}>
          &laquo;
        </button>
        <div className="steps">
          <span className="circle active">1</span>
          <span className="circle">2</span>
          <span className="circle">3</span>
          <span className="circle">4</span>
          <span className="circle">5</span>
          <div className="progress-bar">
            <span className="indicator"></span>
          </div>
        </div>
        <button className="buttons" id="next" onClick={updateSteps}>
          &raquo;
        </button>
      </div>
      <div>{stepperCard}</div>
    </div>
  );
};

export default Stepper;
