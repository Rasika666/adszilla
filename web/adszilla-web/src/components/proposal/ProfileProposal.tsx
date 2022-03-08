import React, {FC} from 'react';
import {Link} from "react-router-dom";
import {Proposal} from "../../domain/proposal";
import {useSelector} from "react-redux";
import {RootState} from "../../redux/post-loggin/reducers/rootReducer";
import {UserType} from "../../utils/adCreateUtil";

export interface ProfileProposalProps {
  proposal: Proposal,
  userType: UserType,
}


const ProfileProposal: FC<ProfileProposalProps> = ({proposal, userType}) => {

  const ad = useSelector((state: RootState) => state.ads.ads.find(a => proposal.adId === a.id));
  const user = useSelector((state: RootState) => state.users.users.find(u => proposal.userId === u.userId));

  const urlViewProfile = userType === UserType.AD_PROVIDER ?
      `/view-proposal/${proposal.id}/provider` : `/view-proposal/${proposal.id}/buyer`



  return (
      <li>
        <div className="freelancer-overview manage-candidates">
          <div className="freelancer-overview-inner">

            <div className="freelancer-avatar">
              <div className="verified-badge"></div>
              <a href="#"><img src="images/user-avatar-big-02.jpg" alt=""/></a>
            </div>

            <div className="freelancer-name">
              <h4><a href="#">{user?.userName}</a></h4>
              <span className="freelancer-detail-item">Wants to to buy Ad</span>
              <p className="freelancer-detail-item">
                <Link to={`/ad-details/${ad?.id}/provider/profile`}><i className="icon-brand-adversal"></i>{ad?.id}
                </Link>
              </p>

              <div className="freelancer-rating">
                <div className="star-rating" data-rating={user?.rate}></div>
              </div>

              <ul className="dashboard-task-info bid-info">
                <li><strong>${proposal.proposedBudget.budget}</strong><span>Fixed Price</span></li>
                <li><strong>{proposal.deliveryDays} Days</strong><span>Delivery Time</span></li>
              </ul>

              <div className="buttons-to-right always-visible margin-top-25 margin-bottom-0">
                <a href="#small-dialog-1" className="popup-with-zoom-anim button ripple-effect"><i
                    className="icon-material-outline-check"></i> Accept Offer</a>

                {userType === UserType.AD_PROVIDER && (
                    <Link to={`/view-proposal/all/${ad?.id}`} className="popup-with-zoom-anim button dark ripple-effect"><i
                        className="icon-feather-list"></i> View All Proposals for the Ad</Link>
                )}


                <a href="#" className="button gray ripple-effect ico" title="Remove Bid"
                   data-tippy-placement="top"><i className="icon-feather-trash-2"></i></a>
                <Link to={urlViewProfile} className="button gray ripple-effect ico"
                      title="view proposal"
                      data-tippy-placement="top"><i className="icon-feather-eye"></i></Link>
              </div>
            </div>
          </div>
        </div>
      </li>
  );
};

export default ProfileProposal;