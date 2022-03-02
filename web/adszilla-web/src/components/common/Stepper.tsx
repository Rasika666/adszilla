import React, {FC, useEffect} from 'react';
import 'bs-stepper/dist/css/bs-stepper.min.css';

const Stepper: FC = () => {

  useEffect(() => {


  }, [])


  return (
      <div id="ads-creation-stepper" className="bs-stepper">
        <div className="bs-stepper-header">
          <div className="step" data-target="#test-l-1">
            <button className="step-trigger">
              <span className="bs-stepper-circle">1</span>
              <span className="bs-stepper-label">Email</span>
            </button>
          </div>
          <div className="line"></div>
          <div className="step" data-target="#test-l-2">
            <button className="step-trigger">
              <span className="bs-stepper-circle">2</span>
              <span className="bs-stepper-label">Password</span>
            </button>
          </div>
          <div className="line"></div>
          <div className="step" data-target="#test-l-3">
            <button className="step-trigger">
              <span className="bs-stepper-circle">3</span>
              <span className="bs-stepper-label">Validate</span>
            </button>
          </div>
        </div>
      </div>
  );
};

export default Stepper;