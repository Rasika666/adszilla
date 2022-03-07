import React, {useState} from 'react';
import {Link} from "react-router-dom";

const ProfileSideBarBuyer = () => {

  const [isMyAdsActive, setMyAdsActive] = useState<boolean>(true)
  const [isNotificationsActive, setNotificationsActive] = useState<boolean>(false)
  const [isCreateActive, setCreateActive] = useState<boolean>(false)

  const handleMyAdsActive = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    setMyAdsActive(true);
    setNotificationsActive(false);
    setCreateActive(false);
  }

  const handleNotificationsActive = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    setMyAdsActive(false);
    setNotificationsActive(true);
    setCreateActive(false);

  }

  const handleReviewsActive = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    setMyAdsActive(false);
    setNotificationsActive(false);
    setCreateActive(false);

  }

  const handleCreateActive = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    setMyAdsActive(false);
    setNotificationsActive(false);
    setCreateActive(true);

  }


  return (
      <div className="dashboard-sidebar">
        <div className="dashboard-sidebar-inner" data-simplebar>
          <div className="dashboard-nav-container">

            <div className="dashboard-nav">
              <div className="dashboard-nav-inner">

                <ul data-submenu-title="Profile">
                  <li className={isMyAdsActive ? 'active' : ''}>
                    <Link to="/ad-buyer-dashboard"><i className="icon-material-outline-dashboard"></i> My Ads</Link>
                  </li>
                </ul>



                <ul data-submenu-title="Account">
                  <li>
                    <a href="dashboard-settings.html"><i className="icon-material-outline-settings"></i> Settings</a>
                  </li>
                  <li>
                    <a href="index-logged-out.html"><i className="icon-material-outline-power-settings-new"></i> Logout</a>
                  </li>
                </ul>

              </div>
            </div>

          </div>
        </div>
      </div>
  );
};

export default ProfileSideBarBuyer;