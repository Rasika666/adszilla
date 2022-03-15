import {FC} from 'react';
import {Link} from 'react-router-dom';
import {Ad} from '../../domain/ad';
import {UserType} from "../../utils/adCreateUtil";

export interface AdSideBarProps {
  ad: Ad | undefined,
  userType: UserType,
};

const AdSideBar: FC<AdSideBarProps> = ({ad, userType}) => {
  return (
      <div className="col-xl-4 col-lg-4">
        <div className="sidebar-container">

          {userType === UserType.AD_BUYER && (
              <>
                <Link
                    to="/create-proposal"
                    className="apply-now-button">
                  Create proposal
                  <i className="icon-material-outline-arrow-right-alt"></i>
                </Link>

                <Link
                    to="/update-status"
                    className="apply-now-button">
                  Update status
                  <i className="icon-material-outline-arrow-right-alt"></i>
                </Link>
              </>
          )}

          {userType === UserType.AD_PROVIDER && (
              <>
                <Link
                    to="/ad-content"
                    className="apply-now-button popup-with-zoom-anim ripple-effect button-sliding-icon">
                  Advertisement Content
                  <i className="icon-material-outline-arrow-right-alt"></i>
                </Link>

                <Link
                    to={`/view-proposal/${ad?.id}/all`}
                    className="apply-now-button popup-with-zoom-anim ripple-effect button-sliding-icon">
                  View All Proposals
                  <i className="icon-material-outline-arrow-right-alt"></i>
                </Link>
              </>

          )}


          <div className="sidebar-widget">
            <div className="job-overview">
              <div className="job-overview-headline">Ad Summary</div>
              <div className="job-overview-inner">
                <ul>
                  <li>
                    <i className="icon-material-outline-location-on"></i>
                    <span>Location</span>
                    {ad?.targetArea?.nearAreas?.map(area => (<h5>{area}</h5>))}

                  </li>
                  <li>
                    <i className="icon-material-outline-business-center"></i>
                    <span>Ad Type</span>
                    <h5>{ad?.overview?.adType}</h5>
                  </li>
                  <li>
                    <i className="icon-line-awesome-eye"></i>
                    <span>Expected View Count</span>
                    <h5>1M</h5>
                  </li>
                  <li>
                    <i className="icon-material-outline-local-atm"></i>
                    <span>Budget</span>
                    <h5>youtube: {ad?.budget?.youtubeBudget}</h5>
                    <h5>facebook: {ad?.budget?.facebookBudget}</h5>
                    <h5>Instagram: {ad?.budget?.instagramBudget}</h5>
                  </li>
                  <li>
                    <i className="icon-material-outline-access-time"></i>
                    <span>Date Posted</span>
                    <h5>2 days ago</h5>
                  </li>
                </ul>
              </div>
            </div>
          </div>


        </div>
      </div>
  );
};

export default AdSideBar;