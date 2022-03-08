import { TableRow } from '@mui/material';
import React from 'react';

interface IndicatorProps {
  value: String,
  description: String
}

const Indicator = ({ value, description: description }: IndicatorProps) => {
  return (
    <div className="indicator">
      <strong>{value}</strong>
      <div className="indicator-bar" data-indicator-percentage="88"><span></span></div>
      <span>{description}</span>
    </div>
  );
};

export default Indicator;