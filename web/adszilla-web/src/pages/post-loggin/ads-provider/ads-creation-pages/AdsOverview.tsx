import React from 'react';

const AdsOverview = () => {
  return (
      <div className="dashboard-box margin-top-30 margin-bottom-30 row d-flex justify-content-center">
        <div className="headline col-xl-12">
          <h3><i className="icon-feather-folder-plus"></i> Ads Basic Details</h3>
        </div>

        <div className="content with-padding padding-bottom-10 col-xl-8">


            <div className="row">

              <div className="col-xl-6 border-top">
                <div className="submit-field">
                  <h5>Ad Title</h5>
                  <input type="text" className="with-border" />
                </div>
              </div>

              <div className="col-xl-6">
                <div className="submit-field">
                  <h5>Ad Type</h5>
                  <select className="selectpicker with-border" data-size="7" title="Ad Type">
                    <option>Banner</option>
                    <option>Video</option>
                  </select>
                </div>
              </div>

              <div className="col-xl-6">
                <div className="submit-field">
                  <h5>Job Category</h5>
                  <select className="selectpicker with-border" data-size="7" title="Category">
                    <option>Accounting and Finance</option>
                    <option>Clerical & Data Entry</option>
                    <option>Counseling</option>
                    <option>Court Administration</option>
                    <option>Human Resources</option>
                    <option>Investigative</option>
                    <option>IT and Computers</option>
                    <option>Law Enforcement</option>
                    <option>Management</option>
                    <option>Miscellaneous</option>
                    <option>Public Relations</option>
                  </select>
                </div>
              </div>

              <div className="col-xl-6">
                <div className="submit-field">
                  <h5>Tags <span>(optional)</span> <i className="help-icon" data-tippy-placement="right"
                                                      title="Maximum of 10 tags"></i></h5>
                  <div className="keywords-container">
                    <div className="keyword-input-container">
                      <input type="text" className="keyword-input with-border"
                             placeholder="e.g. job title, responsibilites"/>
                      <button className="keyword-input-button ripple-effect"><i
                          className="icon-material-outline-add"></i></button>
                    </div>
                    <div className="keywords-list"></div>
                    <div className="clearfix"></div>
                  </div>

                </div>
              </div>

              <div className="col-xl-12">
                <div className="submit-field">
                  <h5>Description</h5>
                  <textarea cols={30} rows={5} className="with-border"></textarea>
                </div>
              </div>

            </div>
        </div>
      </div>
  );
};

export default AdsOverview;