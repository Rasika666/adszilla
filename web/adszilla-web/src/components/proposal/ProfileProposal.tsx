import React from 'react';

const ProfileProposal = () => {
  return (
      <li>
        <div className="freelancer-overview manage-candidates">
          <div className="freelancer-overview-inner">

            <div className="freelancer-avatar">
              <div className="verified-badge"></div>
              <a href="#"><img src="images/user-avatar-big-02.jpg" alt="" /></a>
            </div>

            <div className="freelancer-name">
              <h4><a href="#">David Peterson <img className="flag" src="images/flags/de.svg" alt=""
                                                  title="Germany" data-tippy-placement="top" /></a></h4>

              <span className="freelancer-detail-item"><a href="#"><i className="icon-feather-mail"></i> david@example.com</a></span>

              <div className="freelancer-rating">
                <div className="star-rating" data-rating="5.0"></div>
              </div>

              <ul className="dashboard-task-info bid-info">
                <li><strong>$3,200</strong><span>Fixed Price</span></li>
                <li><strong>14 Days</strong><span>Delivery Time</span></li>
              </ul>

              <div className="buttons-to-right always-visible margin-top-25 margin-bottom-0">
                <a href="#small-dialog-1" className="popup-with-zoom-anim button ripple-effect"><i
                    className="icon-material-outline-check"></i> Accept Offer</a>
                <a href="#small-dialog-2" className="popup-with-zoom-anim button dark ripple-effect"><i
                    className="icon-feather-mail"></i> Send Message</a>
                <a href="#" className="button gray ripple-effect ico" title="Remove Bid"
                   data-tippy-placement="top"><i className="icon-feather-trash-2"></i></a>
              </div>
            </div>
          </div>
        </div>
      </li>
  );
};

export default ProfileProposal;