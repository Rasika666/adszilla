import React from 'react';
import ProfileWrapper from "../../../components/layouts/ProfileWrapper";
import AdsProfile from "../../../components/ads/AdsProfile";

const MyAdDashboard = () => {
  return (
      <ProfileWrapper>

        <div className="col-xl-12 center-block">
          <div className="listings-container margin-top-35">

            <AdsProfile/>
            <AdsProfile/>
            <AdsProfile/>
          </div>
        </div>


      </ProfileWrapper>
  );
};

export default MyAdDashboard;