import React, { PropsWithChildren } from 'react';
import { Link } from 'react-router-dom';
import { Ad } from '../../domain/ad';


type AdsV2Props = PropsWithChildren<{ ad: Ad}>

const AdsV2 = ({ad} :AdsV2Props) => {
  return (
      <Link to={`/ad-details/${ad.id}`} className="job-listing">
        <div className="job-listing-details">
          <div className="job-listing-company-logo">
            <img src="images/company-logo-02.png" alt=""/>
          </div>
          <div className="job-listing-description">
            <h4 className="job-listing-company">{ad.overview.adTitle}</h4>
            <h3 className="job-listing-title">{ad.overview.adDescription}</h3>
          </div>
        </div>

        <div className="job-listing-footer">
          <span className="bookmark-icon"></span>
          <ul>
            <li><i className="icon-material-outline-location-on"></i>{ad.targetArea.areas[0]}</li>
            <li><i className="icon-material-outline-business-center"></i> Full Time</li>
            <li><i className="icon-material-outline-account-balance-wallet"></i>Rs {ad.budget.budgetPerDuration}</li>
            <li><i className="icon-material-outline-access-time"></i> 2 days ago</li>
          </ul>
        </div>
      </Link>
  );
};

export default AdsV2;