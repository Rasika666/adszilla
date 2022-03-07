import React from 'react';
import {Link} from "react-router-dom";

const AdsCreationFinish = () => {
  return (
      <div className="dashboard-box margin-top-30 margin-bottom-30">
        <div className="headline">
          <h3><i className="icon-feather-folder-plus"></i> Ad Creation Process Finish</h3>
        </div>


        <div className="content with-padding padding-bottom-10">
          <div className="row">
            <div className="col-xl-12 d-flex justify-content-center">
              <Link className="button gray" to="/my-ads">
                Go to My Ads
              </Link>
            </div>
          </div>
        </div>
      </div>
  );
};

export default AdsCreationFinish;