import React from 'react';
import { Link } from 'react-router-dom';

const HeaderV2 = () => {
  return (
    <header id="header-container" className="fullwidth not-sticky">
      <div id="header">
        <div className="container">

          <div className="left-side">

            <div id="logo">
              <a href="index.html"><img src="images/logo.png" alt="" /></a>
            </div>

            <nav id="navigation">
              <ul id="responsive">

                <li><Link to="/">Home</Link></li>
                <li><Link to="/my-ads">Ad Producer</Link></li>
                <li><Link to="/ad-buyer-dashboard">Ad Buyer</Link></li>

              </ul>
            </nav>
            <div className="clearfix"></div>

          </div>


          <div className="right-side">
            <div className="header-widget hide-on-mobile">
              <div className="header-notifications">
                <div className="header-notifications-trigger">
                  <a href="#"><i className="icon-feather-bell"></i><span>4</span></a>
                </div>
                <div className="header-notifications-dropdown">
                  <div className="header-notifications-headline">
                    <h4>Notifications</h4>
                    <button className="mark-as-read ripple-effect-dark" title="Mark all as read"
                      data-tippy-placement="left">
                      <i className="icon-feather-check-square"></i>
                    </button>
                  </div>

                  <div className="header-notifications-content">
                    <div className="header-notifications-scroll" data-simplebar>
                      <ul>
                        <li className="notifications-not-read">
                          <a href="dashboard-manage-candidates.html">
                            <span className="notification-icon"><i
                              className="icon-material-outline-group"></i></span>
                            <span className="notification-text">
                              <strong>Michael Shannah</strong> applied for a job <span
                                className="color">Full Stack Software Engineer</span>
                            </span>
                          </a>
                        </li>

                        <li>
                          <a href="dashboard-manage-bidders.html">
                            <span className="notification-icon"><i
                              className=" icon-material-outline-gavel"></i></span>
                            <span className="notification-text">
                              <strong>Gilbert Allanis</strong> placed a bid on your <span
                                className="color">iOS App Development</span> project
                            </span>
                          </a>
                        </li>
                        <li>
                          <a href="dashboard-manage-jobs.html">
                            <span className="notification-icon"><i
                              className="icon-material-outline-autorenew"></i></span>
                            <span className="notification-text">
                              Your job listing <span
                                className="color">Full Stack PHP Developer</span> is expiring.
                            </span>
                          </a>
                        </li>
                        <li>
                          <a href="dashboard-manage-candidates.html">
                            <span className="notification-icon"><i
                              className="icon-material-outline-group"></i></span>
                            <span className="notification-text">
                              <strong>Sindy Forrest</strong> applied for a job <span
                                className="color">Full Stack Software Engineer</span>
                            </span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>

                </div>

              </div>


              <div className="header-notifications">
                <div className="header-notifications-trigger">
                  <a href="#"><i className="icon-feather-mail"></i><span>3</span></a>
                </div>


                <div className="header-notifications-dropdown">

                  <div className="header-notifications-headline">
                    <h4>Messages</h4>
                    <button className="mark-as-read ripple-effect-dark" title="Mark all as read"
                      data-tippy-placement="left">
                      <i className="icon-feather-check-square"></i>
                    </button>
                  </div>

                  <div className="header-notifications-content">
                    <div className="header-notifications-scroll" data-simplebar>
                      <ul>
                        <li className="notifications-not-read">
                          <a href="dashboard-messages.html">
                            <span className="notification-avatar status-online"><img
                              src="images/user-avatar-small-03.jpg" alt="" /></span>
                            <div className="notification-text">
                              <strong>David Peterson</strong>
                              <p className="notification-msg-text">Thanks for reaching out. I'm quite busy right now
                                on many...</p>
                              <span className="color">4 hours ago</span>
                            </div>
                          </a>
                        </li>

                        <li className="notifications-not-read">
                          <a href="dashboard-messages.html">
                            <span className="notification-avatar status-offline"><img
                              src="images/user-avatar-small-02.jpg" alt="" /></span>
                            <div className="notification-text">
                              <strong>Sindy Forest</strong>
                              <p className="notification-msg-text">Hi Tom! Hate to break it to you, but I'm actually
                                on vacation until...</p>
                              <span className="color">Yesterday</span>
                            </div>
                          </a>
                        </li>

                        <li className="notifications-not-read">
                          <a href="dashboard-messages.html">
                            <span className="notification-avatar status-online"><img
                              src="images/user-avatar-placeholder.png" alt="" /></span>
                            <div className="notification-text">
                              <strong>Marcin Kowalski</strong>
                              <p className="notification-msg-text">I received payment. Thanks for cooperation!</p>
                              <span className="color">Yesterday</span>
                            </div>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <a href="dashboard-messages.html"
                    className="header-notifications-button ripple-effect button-sliding-icon">View All Messages<i
                      className="icon-material-outline-arrow-right-alt"></i></a>
                </div>
              </div>

            </div>

            <div className="header-widget">

              <div className="header-notifications user-menu">
                <div className="header-notifications-trigger">
                  <a href="#">
                    <div className="user-avatar status-online"><img src="images/user-avatar-small-01.jpg" alt="" />
                    </div>
                  </a>
                </div>
                <div className="header-notifications-dropdown">

                  <div className="user-status">
                    <div className="user-details">
                      <div className="user-avatar status-online"><img src="images/user-avatar-small-01.jpg" alt="" />
                      </div>
                      <div className="user-name">
                        Tom Smith <span>Freelancer</span>
                      </div>
                    </div>

                    <div className="status-switch" id="snackbar-user-status">
                      <label className="user-online current-status">Online</label>
                      <label className="user-invisible">Invisible</label>
                      <span className="status-indicator" aria-hidden="true"></span>
                    </div>
                  </div>

                  <ul className="user-menu-small-nav">
                    <li><a href="dashboard.html"><i className="icon-material-outline-dashboard"></i> Dashboard</a>
                    </li>
                    <li><a href="dashboard-settings.html"><i
                      className="icon-material-outline-settings"></i> Settings</a></li>
                    <li><a href="index-logged-out.html"><i
                      className="icon-material-outline-power-settings-new"></i> Logout</a></li>
                  </ul>

                </div>
              </div>

            </div>

            <span className="mmenu-trigger">
              <button className="hamburger hamburger--collapse" type="button">
                <span className="hamburger-box">
                  <span className="hamburger-inner"></span>
                </span>
              </button>
            </span>

          </div>

        </div>
      </div>

    </header>
  );
};

export default HeaderV2;