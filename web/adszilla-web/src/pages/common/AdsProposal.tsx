import React, {FC} from 'react';


import {useSelector} from "react-redux";
import {UserType} from "../../utils/adCreateUtil";
import {RootState} from "../../redux/post-loggin/reducers/rootReducer";
import ProfileWrapper from "../../components/layouts/ProfileWrapper";
import {StyledOption, CustomSelect} from "../../components/common/CustomSelect";
import ProfileProposal from "../../components/proposal/ProfileProposal";



export interface AdsProposalProps{
  userType: UserType,
};


const AdsProposal: FC<AdsProposalProps> = ({userType}) => {

  const proposals = useSelector((state: RootState) => state.proposals.proposals);

  return (
      <ProfileWrapper userType={userType}>
        <div className="col-xl-12">
          <div className="dashboard-box margin-top-0">

            <div className="headline">
              <h3><i className="icon-material-outline-supervisor-account"></i> 3 Proposals</h3>
              <div className="sort-by">
                <CustomSelect defaultValue={10}>
                  <StyledOption value={10}>Highest First</StyledOption>
                  <StyledOption value={20}>Lowest First</StyledOption>
                  <StyledOption value={30}>Latest First</StyledOption>
                </CustomSelect>
              </div>
            </div>

            <div className="content">
              <ul className="dashboard-box-list">

                {proposals.map(proposal => <ProfileProposal key={proposal.id} proposal={proposal} userType={userType}/>)}

              </ul>
            </div>
          </div>
        </div>
      </ProfileWrapper>
  );
};

export default AdsProposal;