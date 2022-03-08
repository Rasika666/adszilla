import React from 'react';
import {UserType} from "../../../../utils/adCreateUtil";
import ProfileWrapper from "../../../../components/layouts/ProfileWrapper";
import {Link, useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import {RootState} from "../../../../redux/post-loggin/reducers/rootReducer";
import {proposal} from "../../../../dummy/data/poposals";



const AllProposalForAd = () => {

  const {adId} = useParams();


  const proposals = useSelector((state: RootState) => state.proposals.proposals.filter(p => p.adId === adId));


  return (
      <div>
        <ProfileWrapper userType={UserType.AD_PROVIDER}>
          <div className="col-xl-12">
            <div className="dashboard-box margin-top-0">

              <div className="headline">
                <h3><i className="icon-material-outline-supervisor-account"></i> There are {proposals.length} Proposals for Ad Id {adId}</h3>

              </div>

              <div className="container" style={{marginTop: "25px", paddingBottom: "25px"}}>
                <table className="basic-table">

                  <tbody>
                  <tr>
                    <th>Proposer</th>
                    <th>Ad Id</th>
                    <th>Youtube Budget</th>
                    <th>Delivery Days</th>
                    <th>Actions</th>
                  </tr>


                  {proposals.map(p => (
                      <tr>
                        <td data-label="Column 1"><Link to={""}>{p.userId}</Link></td>
                        <td data-label="Column 2"><Link to={`/ad-details/${p.adId}/provider/profile`}>{p.adId}</Link></td>
                        <td data-label="Column 3">{p.proposedBudget.budget}</td>
                        <td data-label="Column 4">{p.deliveryDays}</td>
                        <td data-label="Column 5">
                          <Link to={""} className="button gray ripple-effect ico"
                                title="view proposal"
                                data-tippy-placement="top"><i className="icon-feather-eye"></i></Link> &nbsp;

                          <a href="#" className="button gray ripple-effect ico" title="Remove Bid"
                             data-tippy-placement="top"><i className="icon-feather-trash-2"></i></a>

                        </td>
                      </tr>
                  ))}

                  </tbody>
                </table>

              </div>

            </div>
          </div>
        </ProfileWrapper>
      </div>
  );
};

export default AllProposalForAd;