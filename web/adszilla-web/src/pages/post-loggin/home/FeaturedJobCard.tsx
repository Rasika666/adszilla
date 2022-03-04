import React, { PropsWithChildren } from 'react';
import { Link } from 'react-router-dom';
import { Ad } from '../../../domain/ad';

type FeaturedJobCardProps = PropsWithChildren<{ ad: Ad}>

const FeaturedJobCard = ({ad} : FeaturedJobCardProps) => {
  return (
    <Link to={`/ad-details/${ad.id}`} className="job-listing with-apply-button">
		<div className="job-listing-details">

			<div className="job-listing-company-logo">
				<img src="images/company-logo-01.png" alt="" />
			</div>

			<div className="job-listing-description">
				<h3 className="job-listing-title">{ad.overview.adTitle}</h3>

			<div className="job-listing-footer">
				<ul>
					<li><i className="icon-material-outline-business"></i> {ad.targetArea.areas[0]} <div className="verified-badge" title="Verified Employer" data-tippy-placement="top"></div></li>
					<li><i className="icon-material-outline-business-center"></i> Full Time</li>
					<li><i className="icon-material-outline-access-time"></i> 2 days ago</li>
				</ul>
			</div>
		</div>

		<span className="list-apply-button ripple-effect">Apply Now</span>
</div>
	</Link>
  );
};

export default FeaturedJobCard;