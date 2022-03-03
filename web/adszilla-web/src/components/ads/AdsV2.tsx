import React from 'react';

const AdsV2 = () => {
  return (
      <a href="adDetails" className="job-listing">


        <div className="job-listing-details">

          <div className="job-listing-company-logo">
            <img src="images/company-logo-02.png" alt=""/>
          </div>

          <div className="job-listing-description">
            <h4 className="job-listing-company">Coffee</h4>
            <h3 className="job-listing-title">Terrain Cafe Barista</h3>
          </div>
        </div>


        <div className="job-listing-footer">
          <span className="bookmark-icon"></span>
          <ul>
            <li><i className="icon-material-outline-location-on"></i> San Francissco</li>
            <li><i className="icon-material-outline-business-center"></i> Full Time</li>
            <li><i className="icon-material-outline-account-balance-wallet"></i> $35000-$38000</li>
            <li><i className="icon-material-outline-access-time"></i> 2 days ago</li>
          </ul>
        </div>
      </a>
  );
};

export default AdsV2;