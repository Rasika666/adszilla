import React, {FC, PropsWithChildren} from 'react';
import { Link } from 'react-router-dom';
import { Ad } from '../../../domain/ad';

export interface FeaturedAdsCardProps {
  ad: Ad,
}

const FeaturedAdsCard: FC<FeaturedAdsCardProps> = ({ad}) => {
  return (
    <Link to={`/ad-details/${ad.id}/buyer/profile`} className="job-listing with-apply-button">
		<div className="job-listing-details">

			<div className="job-listing-company-logo">
				<img src="https://source.unsplash.com/random/300×300" alt="" />
			</div>

			<div className="job-listing-description">
				<h3 className="job-listing-title">{ad.overview.adTitle}</h3>

			<div className="job-listing-footer">
				<ul>
					<li><i className="icon-material-outline-business"></i> Verified<div className="verified-badge" title="Verified Employer" data-tippy-placement="top"></div></li>
					<li><i className="icon-feather-tag"></i> {ad?.overview?.adTags?.map(tag => `#${tag.tag} `)}</li>
					<li><i className="icon-material-outline-access-time"></i> 2 days ago</li>
				</ul>
			</div>
		</div>

		<span className="list-apply-button ripple-effect">View Now</span>
</div>
	</Link>
  );
};

export default FeaturedAdsCard;