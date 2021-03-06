import React from 'react';
import ProfileWrapper from "../../../components/layouts/ProfileWrapper";
import ProfileProposal from "../../../components/proposal/ProfileProposal";

const AdsProposal = () => {
  return (
      <ProfileWrapper>
        <div className="col-xl-12">
          <div className="dashboard-box margin-top-0">

            <div className="headline">
              <h3><i className="icon-material-outline-supervisor-account"></i> 3 Proposals</h3>
              <div className="sort-by">
                <select className="selectpicker hide-tick">
                  <option>Highest First</option>
                  <option>Lowest First</option>
                  <option>Fastest First</option>
                </select>
              </div>
            </div>

            <div className="content">
              <ul className="dashboard-box-list">

                <ProfileProposal/>
                <ProfileProposal/>
                <ProfileProposal/>


              </ul>
            </div>
          </div>
        </div>
      </ProfileWrapper>
  );
};

export default AdsProposal;