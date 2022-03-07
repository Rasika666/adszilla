import React from 'react';
import AdsProfile from "../../../components/ads/AdsProfile";
import ProfileWrapperBuyer from '../../../components/layouts/ProfileWrapperBuyer';
import { Ad } from '../../../domain/ad';
import { UserType } from '../../../utils/adCreateUtil';

const AdBuyerDashboard = () => {
  return (
      <ProfileWrapperBuyer>

        <div className="col-xl-12 center-block">
          <div className="listings-container margin-top-35">
            <AdsProfile userType={UserType.AD_BUYER} ad={{} as Ad}/>
            <AdsProfile userType={UserType.AD_BUYER} ad={{} as Ad}/>
            <AdsProfile userType={UserType.AD_BUYER} ad={{} as Ad}/>
          </div>
        </div>


      </ProfileWrapperBuyer>
  );
};

export default AdBuyerDashboard;