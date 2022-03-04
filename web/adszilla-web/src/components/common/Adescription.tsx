import React, { PropsWithChildren } from 'react';
import { Ad } from '../../domain/ad';

type AdDescriptionProps = PropsWithChildren<{ ad: Ad}>

const AdDescription = ({ad} :AdDescriptionProps) => {
  return (
    <div className="single-page-section">
    <h3 className="margin-bottom-25">Ad Description</h3>
    <p>{ad.overview.adDescription}</p>
  </div>
  );
};

export default AdDescription;