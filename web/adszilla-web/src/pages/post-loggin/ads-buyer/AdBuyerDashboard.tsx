import React from 'react';
import AdsProfile from "../../../components/ads/AdsProfile";
import ProfileWrapperBuyer from '../../../components/layouts/ProfileWrapperBuyer';

const AdBuyerDashboard = () => {
  return (
      <ProfileWrapperBuyer>

        <div className="col-xl-12 center-block">
          <div className="listings-container margin-top-35">
            <AdsProfile/>
            <AdsProfile/>
            <AdsProfile/>
          </div>
        </div>


      </ProfileWrapperBuyer>
  );
};

export default AdBuyerDashboard;