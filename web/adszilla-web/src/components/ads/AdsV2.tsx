import React, { PropsWithChildren } from 'react';
import { Link } from 'react-router-dom';
import { Ad } from '../../domain/ad';



const AdsV2 = () => {
  return (
      <Link to={""} className="job-listing">
        <div className="job-listing-details">
          <div className="job-listing-company-logo">
            <img src="images/company-logo-02.png" alt=""/>
          </div>
          <div className="job-listing-description">
            <h4 className="job-listing-company">{}</h4>
            <h3 className="job-listing-title">{}</h3>
          </div>
        </div>

        <div className="job-listing-footer">
          <span className="bookmark-icon"></span>
          <ul>
            <li><i className="icon-material-outline-location-on"></i>{}</li>
            <li><i className="icon-material-outline-business-center"></i> Full Time</li>
            <li><i className="icon-material-outline-account-balance-wallet"></i>Rs {}</li>
            <li><i className="icon-material-outline-access-time"></i> 2 days ago</li>
          </ul>
        </div>
      </Link>
  );
};

export default AdsV2;