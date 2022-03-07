import React from 'react';

const HomeHeader = () => {
  return (
    <div className="intro-banner" data-background-image="images/home-background.jpg">
        <div className="container">

            <div className="row">
                <div className="col-md-12">
                    <div className="banner-headline">
                        <h3>
                            <strong>Post Ads or be buy Ads, any time.</strong>
                            <br />
                            <span>Thousands of small businesses use <strong className="color">AdZilla</strong> to turn their ideas into reality.</span>
                        </h3>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-md-12">
                    <div className="intro-banner-search-form margin-top-95">

                        <div className="intro-search-field with-autocomplete">
                            <label className="field-title ripple-effect">Where?</label>
                            <div className="input-with-icon">
                                <input className="search-input" type="text" placeholder="Search the Target Area" />
                                <i className="icon-material-outline-location-on"></i>
                            </div>
                        </div>

                        <div className="intro-search-field">
                            <label className="field-title ripple-effect">What Category you want?</label>
                            <input className="search-input" type="text" placeholder="Ad Title or Keywords /" />
                        </div>

                        <div className="intro-search-button">
                            <button className="button ripple-effect" >Search</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-md-12">
                    <ul className="intro-stats margin-top-45 hide-under-992px">
                        <li>
                            <strong className="counter">1,586</strong>
                            <span>Ads Posted</span>
                        </li>
                        <li>
                            <strong className="counter">3,543</strong>
                            <span>Publish Ads</span>
                        </li>
                        <li>
                            <strong className="counter">1,232</strong>
                            <span>Active Ad Buyers</span>
                        </li>
                    </ul>
                </div>
            </div>

        </div>
    </div>
  );
};

export default HomeHeader;