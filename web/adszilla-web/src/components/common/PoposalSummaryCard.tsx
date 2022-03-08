import { TableRow } from '@mui/material';
import React from 'react';

interface PoposalSummaryCardProps {
  discription: String
}

const PoposalSummaryCard = ({ discription }: PoposalSummaryCardProps) => {
  return (
    <div className="col-xl-8 col-lg-8 content-right-offset">
      <div className="single-page-section">
        <h2 className="margin-bottom-25">Poposal Summary</h2>
        <p>{discription}</p>
        <br />
        <h3 className="margin-bottom-25">Budget</h3>
        <p>Rs 25000 /=</p>
      </div>
    </div>
  );
};

export default PoposalSummaryCard;