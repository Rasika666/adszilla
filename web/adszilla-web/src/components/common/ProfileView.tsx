import React, { useState } from 'react';
import { FormState, UserType } from '../../utils/adCreateUtil';
import AboutMe from './AboutMe';
import BoxListItem from './BoxListItem';
import Indicator from './Indicator';
import ProposalSummaryCard from './ProposalSummaryCard';
import ProfileOverviewItem from './ProfileOverviewItem';
import Attachments from './Attachments';
import { Link } from 'react-router-dom';


interface ProposalSummaryProps {
  userType: UserType
};

const ProfileView = ({ userType }: ProposalSummaryProps) => {
  const [formState, setFormState] = useState(FormState.VIEW);

  return (
    <div className="container">
      <div className="row">
        <div className="col-xl-4 col-lg-4">
          <div className="sidebar-container">
            <h3 className="margin-bottom-25">Youtube Info</h3>
            <div className="profile-overview">
              <ProfileOverviewItem value="Games" description="Channel Name" />
              <ProfileOverviewItem value="15000" description="View count per Video" />
              <ProfileOverviewItem value="1458700" description="Total subscribers" />
            </div>
          </div>
        </div>

      </div>
      {userType === UserType.AD_PROVIDER ?
        <div className="row">

          <AboutMe
            description={Array("Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment",
              "Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line.")} />

          <div className="col-xl-4 col-lg-4">

            <div className="sidebar-container">

              <div className="sidebar-widget">
                 <Link to={'/edit-profile'} className="apply-now-button popup-with-zoom-anim margin-bottom-50">Update Profile </Link>
                
                <div className="freelancer-indicators">

                  <Indicator value="88%" description="Job Success"></Indicator>
                  <Indicator value="88%" description="Job Success"></Indicator>

                </div>
              </div>
              <Attachments action={formState} />
            </div>
          </div>
          <div className="col-xl-8 col-lg-8 content-right-offset">
            <div className="boxed-list margin-bottom-60">
              <div className="boxed-list-headline">
                <h3><i className="icon-material-outline-thumb-up"></i> Work History and Feedback</h3>
              </div>
              <ul className="boxed-list-ul">
                <BoxListItem title="Seyaln Bank Ad" description="Rated as freelancer"
                  subDescription="Excellent programmer - fully carried out my project in a very professional manner."
                  rating="5.0" />
                <BoxListItem title="Seyaln Bank Ad" description="Rated as freelancer"
                  subDescription="Excellent programmer - fully carried out my project in a very professional manner."
                  rating="5.0" />
                <BoxListItem title="Seyaln Bank Ad" description="Rated as freelancer"
                  subDescription="Excellent programmer - fully carried out my project in a very professional manner."
                  rating="5.0" />
                <BoxListItem title="Seyaln Bank Ad" description="Rated as freelancer"
                  subDescription="Excellent programmer - fully carried out my project in a very professional manner."
                  rating="5.0" />
              </ul>

              <div className="clearfix"></div>
              <div className="pagination-container margin-top-40 margin-bottom-10">
                <nav className="pagination">
                  <ul>
                    <li><a href="#" className="ripple-effect current-page">1</a></li>
                    <li><a href="#" className="ripple-effect">2</a></li>
                    <li className="pagination-arrow"><a href="#" className="ripple-effect"><i
                      className="icon-material-outline-keyboard-arrow-right"></i></a></li>
                  </ul>
                </nav>
              </div>
              <div className="clearfix"></div>
            </div>
          </div>
        </div>
        : <div>
        </div>
      }
    </div>
  );
};

export default ProfileView;