import React, {FC} from 'react';
import HeaderV2 from "../common/HeaderV2";
import ProfileSideBar from "../common/ProfileSideBar";
import SimpleFooter from "../common/SimpleFooter";
import {UserType} from "../../utils/adCreateUtil";
import ProfileSideBarBuyer from "../common/ProfileSideBarBuyer";

export interface ProfileWrapperProps{
  userType: UserType,
};


const ProfileWrapper: FC<ProfileWrapperProps> = ({userType, children}) => {
  return (
      <div id="wrapper">
        <HeaderV2/>
        <div className="clearfix"></div>
        <div className="dashboard-container">
          {userType === UserType.AD_PROVIDER ? <ProfileSideBar /> : <ProfileSideBarBuyer />}
          <div className="dashboard-content-container" data-simplebar>
            <div className="dashboard-content-inner">
              <div className="row">

                {children}


                <div className="col-xl-12"></div>
                <div className="dashboard-footer-spacer"></div>

                <SimpleFooter />

              </div>
            </div>
          </div>


        </div>
      </div>
  );
};

export default ProfileWrapper;