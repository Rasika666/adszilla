import React from 'react';
import HeaderV2 from "../common/HeaderV2";
import ProfileSideBar from "../common/ProfileSideBar";
import ProfileSideBarBuyer from '../common/ProfileSideBarBuyer';
import SimpleFooter from "../common/SimpleFooter";

const ProfileWrapperBuyer = (props: any) => {
  return (
      <div id="wrapper">
        <HeaderV2/>
        <div className="clearfix"></div>
        <div className="dashboard-container">
          <ProfileSideBarBuyer />
          <div className="dashboard-content-container" data-simplebar>
            <div className="dashboard-content-inner">
              <div className="row">

                {props.children}


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

export default ProfileWrapperBuyer;