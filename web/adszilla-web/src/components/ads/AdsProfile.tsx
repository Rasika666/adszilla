import {FC} from 'react';
import {Ad} from '../../domain/ad';
import {UserType} from '../../utils/adCreateUtil';
import {Link} from "react-router-dom";

export interface AdsProfileProps {
  userType: UserType,
  ad: Ad,
};

const AdsProfile: FC<AdsProfileProps> = ({ userType, ad }) => {

  const url = userType === UserType.AD_PROVIDER ? `/ad-details/${ad.id}/provider/profile` : `/ad-details/${ad.id}/buyer/profile`

  return (
    <Link to={url} className="job-listing">

      <div className="job-listing-details">
        <div className="job-listing-company-logo">
          <img src="https://source.unsplash.com/random/" alt="" />
        </div>


        <div className="job-listing-description">
          <h4 className="job-listing-company">{ad?.overview?.adCategory}<span className="verified-badge" title="Verified Employer"
            data-tippy-placement="top"></span></h4>
          <h3 className="job-listing-title">{ad?.overview?.adTitle}</h3>
          <p className="job-listing-text">{ad?.overview?.adDescription}</p>
        </div>

        <span className="bookmark-icon"></span>
      </div>

      <div className="job-listing-footer">
        <ul>
          <li><i className="icon-material-outline-location-on"></i>
            {ad?.targetArea?.nearAreas?.map(area => area)}
          </li>

          <li><i className="icon-material-outline-account-balance-wallet"></i>Rs: {ad?.budget?.youtubeBudget}</li>
          <li><i className="icon-material-outline-access-time"></i> 2 days ago</li>
        </ul>
      </div>
    </Link>
  );
};

export default AdsProfile;