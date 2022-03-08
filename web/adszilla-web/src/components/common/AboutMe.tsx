import { TableRow } from '@mui/material';
import React from 'react';

interface AboutMeProps {
  description: String[]
}

const AboutMe = ({ description: descriptions }: AboutMeProps) => {
  return (
    <div className="col-xl-8 col-lg-8 content-right-offset">
      <div className="single-page-section">
        <h2 className="margin-bottom-25">About Me</h2>
        {
          descriptions.map((value) =>
            <p>{value}</p>
          )
        }
      </div>
    </div>
  );
};

export default AboutMe;