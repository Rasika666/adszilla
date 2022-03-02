import React, {useState} from 'react';
import HeaderV2 from "../../../components/common/HeaderV2";
import SimpleFooter from "../../../components/common/SimpleFooter";
import ProfileSideBar from "../../../components/common/ProfileSideBar";
import AdsOverview from "./ads-creation-pages/AdsOverview";
import {Box, Button, Step, StepLabel, Stepper, Typography} from "@mui/material";


const steps = ['Select campaign settings', 'Create an ad group', 'Create an ad'];

const AdsCreation = () => {


  const [activeStep, setActiveStep] = useState(0);
  const [skipped, setSkipped] = useState(new Set<number>());

  const isStepOptional = (step: number) => {
    return step === 1;
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
      <div id="wrapper">
        <HeaderV2/>

        <div className="clearfix"></div>

        <div className="dashboard-container">

          <ProfileSideBar />

          <div className="dashboard-content-container" data-simplebar>

            <div className="dashboard-content-inner">








              <div className="row">

                <div className="col-xl-12">


                  <Box sx={{ width: '100%' }}>
                    <Stepper activeStep={activeStep}>

                      {steps.map((label, index) => {
                        const stepProps: { completed?: boolean } = {};
                        const labelProps: {
                          optional?: React.ReactNode;
                        } = {};
                        if (isStepOptional(index)) {
                          labelProps.optional = (
                              <Typography variant="caption">Optional</Typography>
                          );
                        }
                        if (isStepSkipped(index)) {
                          stepProps.completed = false;
                        }
                        return (
                            <Step key={label} {...stepProps}>
                              <StepLabel {...labelProps}>{label}</StepLabel>
                            </Step>
                        );
                      })}
                    </Stepper>

                    {activeStep === steps.length ? (
                        <React.Fragment>
                          <Typography sx={{ mt: 2, mb: 1 }}>
                            All steps completed - you&apos;re finished
                          </Typography>
                          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                            <Box sx={{ flex: '1 1 auto' }} />
                            <Button onClick={handleReset}>Reset</Button>
                          </Box>
                        </React.Fragment>
                    ) : (
                        <React.Fragment>
                          <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography>
                          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                            <Button
                                color="inherit"
                                disabled={activeStep === 0}
                                onClick={handleBack}
                                sx={{ mr: 1 }}
                            >
                              Back
                            </Button>
                            <Box sx={{ flex: '1 1 auto' }} />
                            {isStepOptional(activeStep) && (
                                <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                                  Skip
                                </Button>
                            )}
                            <Button onClick={handleNext}>
                              {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                            </Button>
                          </Box>
                        </React.Fragment>
                    )}
                  </Box>



                  <AdsOverview />
                </div>

                <div className="col-xl-12">
                  <a href="#" className="button ripple-effect big margin-top-30"><i
                      className="icon-feather-plus"></i> Post a Job</a>
                </div>

              </div>

              <div className="dashboard-footer-spacer"></div>

              <SimpleFooter />

            </div>
          </div>

        </div>


      </div>
  );
};

export default AdsCreation;