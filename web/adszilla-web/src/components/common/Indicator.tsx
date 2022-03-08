import { TableRow } from '@mui/material';
import React from 'react';

interface IndicatorProps {
  value: String,
  discription: String
}

const Indicator = ({ value, discription }: IndicatorProps) => {
  return (
    <div className="indicator">
      <strong>{value}</strong>
      <div className="indicator-bar" data-indicator-percentage="88"><span></span></div>
      <span>{discription}</span>
    </div>
  );
};

export default Indicator;