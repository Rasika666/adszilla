import React, {useRef, useState} from 'react';
import AdsOverview, {setAdOverview} from "./ads-creation-pages/AdsOverview";
import Stepper from "../../../components/common/Stepper"
import ProfileWrapper from "../../../components/layouts/ProfileWrapper";
import AdsMarketingChannel from "./ads-creation-pages/AdsMarketingChannel";
import AdsContent from "./ads-creation-pages/AdsContent";
import AdsTargetArea from "./ads-creation-pages/AdsTargetArea";
import AdsBudget from "./ads-creation-pages/AdsBudget";
import AdsPublish from "./ads-creation-pages/AdsPublish";
import AdsCreationFinish from "./ads-creation-pages/AdsCreationFinish";
import ProfileWrapperBuyer from '../../../components/layouts/ProfileWrapperBuyer';
import Wrapper from '../../../components/layouts/Wrapper';


const steps = ['Overview', 'Marketing Channel', 'Target Area', 'Content', 'Budget', 'Publish'];

const ProposalCreation = () => {

  const adsOverviewRef = useRef<setAdOverview>(null);


  const [activeStep, setActiveStep] = useState(0);
  const [skipped, setSkipped] = useState(new Set<number>());

  const isStepOptional = (step: number) => {
    return false;
  };

  const isStepSkipped = (step: number) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
    console.log(activeStep)
    console.log(adsOverviewRef.current)

    if (activeStep === 0) adsOverviewRef.current?.updateOverview()


  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };


  return (
    <Wrapper>
      <div className="full-page-content-container" data-simplebar>
        <div className="container">
        <div className="col-xl-12">

            <Stepper activeStep={activeStep}
                     skipped={skipped}
                     isStepSkipped={isStepSkipped}
                     isStepOptional={isStepOptional}
                     steps={steps}/>


            {activeStep === steps.length ? (
                <>
                  <AdsCreationFinish />
                </>
            ) : (
                <>
                  {activeStep === 0 && <AdsOverview ref={adsOverviewRef}/>}
                  {activeStep === 1 && <AdsMarketingChannel/>}
                  {activeStep === 2 && <AdsTargetArea/>}
                  {activeStep === 3 && <AdsContent/>}
                  {activeStep === 4 && <AdsBudget/>}
                  {activeStep === 5 && <AdsPublish/>}
                </>
            )}
        </div>

        <div className="col-xl-12 d-flex justify-content-between">

          {activeStep === 0 ? (
              <button className="button gray" disabled={activeStep === 0} onClick={handleBack}>
                Back
              </button>
          ) : (
              <button className="button blue ripple-effect button-sliding-icon" onClick={handleBack}>
                <i className="icon-feather-arrow-left"></i>
                Back
              </button>
          )}

          {activeStep >= steps.length  ? (
              <button className="button blue" onClick={handleReset}>
                Reset
              </button>
          ) : (
              <button className="button blue ripple-effect button-sliding-icon" onClick={handleNext}>
                {activeStep === steps.length - 1 ? (
                    <>
                      Finish
                    </>
                ) : (
                    <>
                      Next
                      <i className="icon-feather-arrow-right"></i>
                    </>)}
              </button>
          )}

        </div>
        </div>
      </div>
      </Wrapper>


  );
};

export default ProposalCreation;