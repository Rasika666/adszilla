import React, { FC } from 'react';
import { Ad } from '../../domain/ad';

export interface AdHeaderProbs {
  ad: Ad | undefined
};

const AdHeader: FC<AdHeaderProbs> = ({ ad }) => {
  return (
    <div className="single-page-header" data-background-image="images/details.jpeg">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="single-page-header-inner">
              <div className="left-side">

                <div className="header-details">
                  <h3>{ad?.overview?.adTitle}</h3>
                  <ul>
                    <li><div> <i className="icon-line-awesome-list-ul"></i>{ad?.overview?.adCategory}</div></li>
                    <li><div> <i className="icon-line-awesome-file-video-o"></i>{ad?.overview?.adType}</div></li>
                    <li><div > <i className="icon-feather-tag"></i>{ad?.overview?.adTags?.map(tag => '#' + tag.tag + ' ')}</div></li>
                    <li><div className="verified-badge-with-title">Verified</div></li>
                  </ul>
                </div>
              </div>
              <div className="right-side">
                <div className="salary-box">
                  <div className="salary-type">Budget for Youtube</div>
                  <div className="salary-amount">Rs {ad?.budget?.youtubeBudget}/=</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdHeader;