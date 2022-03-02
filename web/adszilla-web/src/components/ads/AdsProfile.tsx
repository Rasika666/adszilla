import React from 'react';

const AdsProfile = () => {
  return (
      <a href="single-job-page.html" className="job-listing">


        <div className="job-listing-details">
          <div className="job-listing-company-logo">
            <img src="images/company-logo-01.png" alt="" />
          </div>


          <div className="job-listing-description">
            <h4 className="job-listing-company">Hexagon <span className="verified-badge" title="Verified Employer"
                                                              data-tippy-placement="top"></span></h4>
            <h3 className="job-listing-title">Bilingual Event Support Specialist</h3>
            <p className="job-listing-text">Leverage agile frameworks to provide a robust synopsis for high level
              overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall
              value.</p>
          </div>

          <span className="bookmark-icon"></span>
        </div>

        <div className="job-listing-footer">
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

export default AdsProfile;