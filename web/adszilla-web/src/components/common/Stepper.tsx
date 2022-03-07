import React, {FC} from 'react';
import {Step, StepLabel, Stepper as MuiStepper, Typography} from "@mui/material";
import {Orientation} from "@mui/material/Stepper/Stepper";

export interface StepperParam {
  skipped?: Set<number>;
  activeStep: number;
  isStepOptional?: (step: number) => boolean;
  isStepSkipped?: (step: number) => boolean;
  steps: string[],
  orientation: Orientation | undefined
};


const Stepper: FC<StepperParam> = ({
                                     skipped,
                                     activeStep,
                                     isStepOptional,
                                     isStepSkipped,
                                     steps,
                                     orientation
                                   }) => {


  return (
      <MuiStepper activeStep={activeStep} orientation={orientation}>

        {steps.map((label, index) => {
          const stepProps: { completed?: boolean } = {};
          const labelProps: {
            optional?: React.ReactNode;
          } = {};
          if (isStepOptional != undefined && isStepOptional(index)) {
            labelProps.optional = (
                <Typography variant="caption">Optional</Typography>
            );
          }
          if (isStepSkipped != undefined && isStepSkipped(index)) {
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