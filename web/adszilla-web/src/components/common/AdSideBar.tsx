import React from 'react';

const AdSideBar = () => {
  return (
<   div className="col-xl-4 col-lg-4">
			<div className="sidebar-container">

				<a href="#small-dialog" className="apply-now-button popup-with-zoom-anim">Apply Now <i className="icon-material-outline-arrow-right-alt"></i></a>
					
				<div className="sidebar-widget">
					<div className="job-overview">
						<div className="job-overview-headline">Job Summary</div>
						<div className="job-overview-inner">
							<ul>
								<li>
									<i className="icon-material-outline-location-on"></i>
									<span>Location</span>
									<h5>London, United Kingdom</h5>
								</li>
								<li>
									<i className="icon-material-outline-business-center"></i>
									<span>Job Type</span>
									<h5>Full Time</h5>
								</li>
								<li>
									<i className="icon-material-outline-local-atm"></i>
									<span>Salary</span>
									<h5>$35k - $38k</h5>
								</li>
								<li>
									<i className="icon-material-outline-access-time"></i>
									<span>Date Posted</span>
									<h5>2 days ago</h5>
								</li>
							</ul>
						</div>
					</div>
				</div>

				<div className="sidebar-widget">
					<h3>Bookmark or Share</h3>

					<button className="bookmark-button margin-bottom-25">
						<span className="bookmark-icon"></span>
						<span className="bookmark-text">Bookmark</span>
						<span className="bookmarked-text">Bookmarked</span>
					</button>

					<div className="copy-url">
						<input id="copy-url" type="text" value="" className="with-border" />
						<button className="copy-url-button ripple-effect" data-clipboard-target="#copy-url" title="Copy to Clipboard" data-tippy-placement="top"><i className="icon-material-outline-file-copy"></i></button>
					</div>

					<div className="share-buttons margin-top-25">
						<div className="share-buttons-trigger"><i className="icon-feather-share-2"></i></div>
						<div className="share-buttons-content">
							<span>Interesting? <strong>Share It!</strong></span>
							<ul className="share-buttons-icons">
								<li><a href="#" data-button-color="#3b5998" title="Share on Facebook" data-tippy-placement="top"><i className="icon-brand-facebook-f"></i></a></li>
								<li><a href="#" data-button-color="#1da1f2" title="Share on Twitter" data-tippy-placement="top"><i className="icon-brand-twitter"></i></a></li>
								<li><a href="#" data-button-color="#dd4b39" title="Share on Google Plus" data-tippy-placement="top"><i className="icon-brand-google-plus-g"></i></a></li>
								<li><a href="#" data-button-color="#0077b5" title="Share on LinkedIn" data-tippy-placement="top"><i className="icon-brand-linkedin-in"></i></a></li>
							</ul>
						</div>
					</div>
				</div>

			</div>
      </div>
  );
};

export default AdSideBar;