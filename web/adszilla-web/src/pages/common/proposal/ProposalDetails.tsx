import React, {FC} from 'react';
import Wrapper from "../../../components/layouts/Wrapper";
import {UserType} from "../../../utils/adCreateUtil";
import ProfileHeader from "../../../components/common/ProfileHeader";
import SimpleFooter from "../../../components/common/SimpleFooter";


interface ProposalDetails {
  userType: UserType
};


const ProposalDetails: FC<ProposalDetails> = ({userType}) => {
  return (
      <Wrapper>
        <div className="full-page-content-container" data-simplebar>

          <ProfileHeader/>

          <div className="container grid-layout margin-top-35">



          </div>


          <div className="clearfix"></div>

          <SimpleFooter/>

        </div>
      </Wrapper>
  );
};

export default ProposalDetails;