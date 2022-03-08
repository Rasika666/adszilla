import { TableRow } from '@mui/material';
import React from 'react';

interface AboutMeProps {
  title:String,
  description: String,
  subDescription: String,
  rating: String
}

const BoxListItem = ({ title, description: description, subDescription: subDescription, rating }: AboutMeProps) => {
  return (
    <li>
    <div className="boxed-list-item">
      <div className="item-content">
        <h4>{title} <span>{description}</span></h4>
        <div className="item-details margin-top-10">
          <div className="star-rating" data-rating={rating}></div>
          <div className="detail-item"><i className="icon-material-outline-date-range"></i> August 2018</div>
        </div>
        <div className="item-description">
          <p>{subDescription}</p>
        </div>
      </div>
    </div>
  </li>
  );
};

export default BoxListItem;