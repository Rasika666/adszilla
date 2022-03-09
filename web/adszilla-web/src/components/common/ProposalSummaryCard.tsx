import { TableRow } from '@mui/material';
import React from 'react';

interface ProposalSummaryCardProps {
  description: String
}

const ProposalSummaryCard = ({ description: description }: ProposalSummaryCardProps) => {
  return (
    <div className="col-xl-8 col-lg-8 content-right-offset">
      <div className="single-page-section">
        <h2 className="margin-bottom-25">Proposal Summary</h2>
        <p>{description}</p>
        <br />
        <h3 className="margin-bottom-25">Budget</h3>
        <p>Rs 25000 /=</p>
      </div>
    </div>
  );
};

export default ProposalSummaryCard;