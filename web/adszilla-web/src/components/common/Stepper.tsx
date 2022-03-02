import React, {FC} from 'react';
import {Step, StepLabel, Stepper as MuiStepper, Typography} from "@mui/material";

export interface StepperParam {
  skipped: Set<number>;
  activeStep: number;
  isStepOptional: (step: number) => boolean;
  isStepSkipped: (step: number) => boolean;
  steps: string[]
};


const Stepper: FC<StepperParam> = ({
                                     skipped,
                                     activeStep,
                                     isStepOptional,
                                     isStepSkipped,
                                     steps,
                                   }) => {


  return (
      <MuiStepper activeStep={activeStep}>

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
      </MuiStepper>
  );
};

export default Stepper;