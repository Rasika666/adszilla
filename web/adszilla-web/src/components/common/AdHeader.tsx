import React from 'react';

const AdHeader = () => {
  return (
    <div className="single-page-header" data-background-image="images/single-job.jpg">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="single-page-header-inner">
            <div className="left-side">
              <div className="header-image"><a href="single-company-profile.html"><img src="images/company-logo-03a.png" alt=""></img></a></div>
              <div className="header-details">
                <h3>Restaurant General Manager</h3>
                <h5>About the Employer</h5>
                <ul>
                  <li><a href="single-company-profile.html"><i className="icon-material-outline-business"></i> King</a></li>
                  <li><div className="star-rating" data-rating="4.9"></div></li>
                  <li><img className="flag" src="images/flags/gb.svg" alt=""></img> United Kingdom</li>
                  <li><div className="verified-badge-with-title">Verified</div></li>
                </ul>
              </div>
            </div>
            <div className="right-side">
              <div className="salary-box">
                <div className="salary-type">Annual Salary</div>
                <div className="salary-amount">$35k - $38k</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default AdHeader;