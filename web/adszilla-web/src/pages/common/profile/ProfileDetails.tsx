import React, {FC} from 'react';
import Wrapper from "../../../components/layouts/Wrapper";
import {UserType} from "../../../utils/adCreateUtil";
import ProfileHeader from "../../../components/common/ProfileHeader";
import SimpleFooter from "../../../components/common/SimpleFooter";
import ProfileView from '../../../components/common/ProfileView';


interface ProfileDetails {
  userType: UserType
};


const ProfileDetails: FC<ProfileDetails> = ({userType}) => {
  return (
      <Wrapper>
        <div className="full-page-content-container" data-simplebar>

          <ProfileHeader/>
        
          <div className="container grid-layout margin-top-35">
          <ProfileView userType={userType}/>
          </div>


          <div className="clearfix"></div>

          <SimpleFooter/>

        </div>
      </Wrapper>
  );
};

export default ProfileDetails;