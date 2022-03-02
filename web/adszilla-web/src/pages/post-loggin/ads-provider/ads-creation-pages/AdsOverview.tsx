import React from 'react';

const AdsOverview = () => {
  return (
      <div className="dashboard-box margin-top-0">
        <div className="headline">
          <h3><i className="icon-feather-folder-plus"></i> Job Submission Form</h3>
        </div>

        <div className="content with-padding padding-bottom-10">
          <div className="row">

            <div className="col-xl-4">
              <div className="submit-field">
                <h5>Job Title</h5>
                <input type="text" className="with-border" />
              </div>
            </div>

            <div className="col-xl-4">
              <div className="submit-field">
                <h5>Job Type</h5>
                <select className="selectpicker with-border" data-size="7" title="Select Job Type">
                  <option>Full Time</option>
                  <option>Freelance</option>
                  <option>Part Time</option>
                  <option>Internship</option>
                  <option>Temporary</option>
                </select>
              </div>
            </div>

            <div className="col-xl-4">
              <div className="submit-field">
                <h5>Job Category</h5>
                <select className="selectpicker with-border" data-size="7" title="Select Category">
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

            <div className="col-xl-4">
              <div className="submit-field">
                <h5>Location</h5>
                <div className="input-with-icon">
                  <div id="autocomplete-container">
                    <input id="autocomplete-input" className="with-border" type="text"
                           placeholder="Type Address" />
                  </div>
                  <i className="icon-material-outline-location-on"></i>
                </div>
              </div>
            </div>

            <div className="col-xl-4">
              <div className="submit-field">
                <h5>Salary</h5>
                <div className="row">
                  <div className="col-xl-6">
                    <div className="input-with-icon">
                      <input className="with-border" type="text" placeholder="Min" />
                      <i className="currency">USD</i>
                    </div>
                  </div>
                  <div className="col-xl-6">
                    <div className="input-with-icon">
                      <input className="with-border" type="text" placeholder="Max" />
                      <i className="currency">USD</i>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-4">
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
                <h5>Job Description</h5>
                <textarea cols={30} rows={5} className="with-border"></textarea>
                <div className="uploadButton margin-top-30">
                  <input className="uploadButton-input" type="file" accept="image/*, application/pdf"
                         id="upload" multiple/>
                  <label className="uploadButton-button ripple-effect" htmlFor="upload">Upload Files</label>
                  <span className="uploadButton-file-name">Images or documents that might be helpful in describing your job</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
  );
};

export default AdsOverview;