import React, {FC, PropsWithChildren} from 'react';
import { Link } from 'react-router-dom';
import { Ad } from '../../domain/ad';

export interface AdsV2Props{
  ad: Ad
};

const AdsV2: FC<AdsV2Props> = ({ad}) => {
  return (
      <Link to={`/ad-details/${ad?.id}/buyer/profile`} className="job-listing">
        <div className="job-listing-details">
          <div className="job-listing-company-logo">
            <img src="https://source.unsplash.com/random" alt=""/>
          </div>
          <div className="job-listing-description">
            <h4 className="job-listing-company">{ad?.overview?.adTitle}</h4>
            <h3 className="job-listing-title">{ad?.overview?.adDescription}</h3>
          </div>
        </div>

        <div className="job-listing-footer">
          <span className="bookmark-icon"></span>
          <ul>
            <li><i className="icon-feather-youtube"></i> Youtube</li>
            <li><i className="icon-material-outline-account-balance-wallet"></i>Rs {ad?.budget?.youtubeBudget}</li>
            <li><i className="icon-material-outline-access-time"></i> 2 days ago</li>
          </ul>
        </div>
      </Link>
  );
};

export default AdsV2;