import React from 'react';
import AdsProfile from "../../../components/ads/AdsProfile";
import ProfileWrapperBuyer from '../../../components/layouts/ProfileWrapperBuyer';
import {UserType} from '../../../utils/adCreateUtil';
import {useSelector} from "react-redux";
import {RootState} from "../../../redux/post-loggin/reducers/rootReducer";

const AdBuyerDashboard = () => {
  const ads = useSelector((state: RootState) => state.ads.ads);

  return (
      <ProfileWrapperBuyer>

        <div className="col-xl-12 center-block">
          <div className="listings-container margin-top-35">
            {ads.map(ad => <AdsProfile key={ad.id} userType={UserType.AD_BUYER} ad={ad}/>)}
          </div>
        </div>


      </ProfileWrapperBuyer>
  );
};

export default AdBuyerDashboard;