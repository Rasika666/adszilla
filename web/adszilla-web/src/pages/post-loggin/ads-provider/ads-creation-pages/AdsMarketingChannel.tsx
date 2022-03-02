import React from 'react';

const AdsMarketingChannel = () => {
  return (
      <div className="dashboard-box margin-top-30 margin-bottom-30 row d-flex justify-content-center">

        <div className="headline col-xl-12">
          <h3><i className="icon-feather-folder-plus"></i> Social Media</h3>
        </div>

        <div className="content with-padding padding-bottom-10 col-xl-8">
          <div className="row">

            <div className="col-xl-12">
              <div className="row">

                <div className="col-xl-4">
                  <div className="checkbox">
                    <input type="checkbox" id="youtube"/>
                    <label htmlFor="youtube"><span className="checkbox-icon"></span> Youtube Channel</label>
                  </div>
                </div>
                <div className="col-xl-4">
                  <div className="checkbox">
                    <input type="checkbox" id="facebook"/>
                    <label htmlFor="facebook"><span className="checkbox-icon"></span> facebook Pages</label>
                  </div>
                </div>
                <div className="col-xl-4">
                  <div className="checkbox">
                    <input type="checkbox" id="Instagram"/>
                    <label htmlFor="Instagram"><span className="checkbox-icon"></span> Instagram page</label>
                  </div>
                </div>
                <div className="col-xl-4">
                  <div className="checkbox">
                    <input type="checkbox" id="Twitter"/>
                    <label htmlFor="Twitter"><span className="checkbox-icon"></span> Twitter page</label>
                  </div>
                </div>

              </div>

            </div>

          </div>
        </div>

        <div className="headline col-xl-12">
          <h3><i className="icon-feather-folder-plus"></i> Web Sites</h3>
        </div>

        <div className="content with-padding padding-bottom-10 col-xl-8">
          <div className="row">

            <div className="col-xl-12">
              <div className="row">

                <div className="col-xl-4">
                  <div className="checkbox">
                    <input type="checkbox" id="Gossip"/>
                    <label htmlFor="Gossip"><span className="checkbox-icon"></span> Gossip Site</label>
                  </div>
                </div>
                <div className="col-xl-4">
                  <div className="checkbox">
                    <input type="checkbox" id="Blog"/>
                    <label htmlFor="Blog"><span className="checkbox-icon"></span> Blog</label>
                  </div>
                </div>
                <div className="col-xl-4">
                  <div className="checkbox">
                    <input type="checkbox" id="News"/>
                    <label htmlFor="News"><span className="checkbox-icon"></span> News Site</label>
                  </div>
                </div>

              </div>

            </div>

          </div>
        </div>






      </div>
  );
};

export default AdsMarketingChannel;