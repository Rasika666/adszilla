import React, { PropsWithChildren } from 'react';
import { Ad } from '../../domain/ad';

type AdHeaderProps = PropsWithChildren<{ ad: Ad}>

const AdHeader = ({ad} :AdHeaderProps) => {
  return (
    <div className="single-page-header" data-background-image="images/single-job.jpg">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="single-page-header-inner">
            <div className="left-side">
              <div className="header-image"><a href="single-company-profile.html"><img src="images/company-logo-03a.png" alt=""></img></a></div>
              <div className="header-details">
                <h3>{ad.overview.adTitle}</h3>
                <h5>{ad.overview.adDescription}</h5>
                <ul>
                  <li><a href="single-company-profile.html"><i className="icon-material-outline-business"></i>{ad.targetArea.areas[0]}</a></li>
                  <li><div className="star-rating" data-rating="4.9"></div></li>
                  <li><div className="verified-badge-with-title">Verified</div></li>
                </ul>
              </div>
            </div>
            <div className="right-side">
              <div className="salary-box">
                <div className="salary-type">Budget</div>
                <div className="salary-amount">Rs {ad.budget.budgetPerDuration}/=</div>
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