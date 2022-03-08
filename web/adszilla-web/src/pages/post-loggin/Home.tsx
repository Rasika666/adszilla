import React from 'react';
import {useSelector} from 'react-redux';
import {Link} from 'react-router-dom';
import Wrapper from '../../components/layouts/Wrapper';
import {RootState} from '../../redux/post-loggin/reducers/rootReducer';

import HomeHeader from './home/HomeHeader';
import JobCategoryCard from './home/JobCategoryCard';
import FeaturedAdsCard from "./home/FeaturedAdsCard";
import SimpleFooter from "../../components/common/SimpleFooter";

const Home = () => {

  const ads = useSelector((state: RootState) => state.ads.ads);

  return (
      <Wrapper>
        <div className="full-page-content-container" data-simplebar>
          <HomeHeader/>
          <div className="section margin-top-65">
            <div className="container">
              <div className="row">
                <div className="col-xl-12">

                  <div className="section-headline centered margin-bottom-15">
                    <h3>Popular Ads Categories</h3>
                  </div>
                  <div className="categories-container">
                    <JobCategoryCard title="Web & Software Dev"
                                     discription="Software Engineer, Web / Mobile Developer & More"
                                     icon="icon-line-awesome-file-code-o" count={100}/>
                    <JobCategoryCard title="Data Science & Analitycs"
                                     discription="Data Specialist / Scientist, Data Analyst & More"
                                     icon="icon-line-awesome-file-code-o" count={100}/>
                    <JobCategoryCard title="Accounting & Consulting"
                                     discription="Auditor, Accountant, Fnancial Analyst & More"
                                     icon="icon-line-awesome-suitcase" count={100}/>
                    <JobCategoryCard title="Writing & Translations"
                                     discription="Copywriter, Creative Writer, Translator & More"
                                     icon="icon-line-awesome-pencil" count={100}/>
                    <JobCategoryCard title="Sales & Marketing" discription="Brand Manager, Marketing Coordinator & More"
                                     icon="icon-line-awesome-pie-chart" count={100}/>
                    <JobCategoryCard title="Web & Software Dev"
                                     discription="Software Engineer, Web / Mobile Developer & More"
                                     icon="icon-line-awesome-file-code-o" count={100}/>
                    <JobCategoryCard title="Web & Software Dev"
                                     discription="Software Engineer, Web / Mobile Developer & More"
                                     icon="icon-line-awesome-file-code-o" count={100}/>
                    <JobCategoryCard title="Web & Software Dev"
                                     discription="Software Engineer, Web / Mobile Developer & More"
                                     icon="icon-line-awesome-file-code-o" count={100}/>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="section gray margin-top-45 padding-top-65 padding-bottom-75">
            <div className="container">
              <div className="row">
                <div className="col-xl-12">
                  <div className="section-headline margin-top-0 margin-bottom-35">
                    <h3>Featured Ads</h3>
                    <Link to="/ad-details/:" className="headline-link">Browse All Ads</Link>
                  </div>
                  <div className="listings-container compact-list-layout margin-top-35">
                    {
                      ads.map(ad =>
                          <FeaturedAdsCard ad={ad}/>
                      )
                    }
                  </div>
                </div>
              </div>
            </div>


          </div>
        </div>
        <div className="clearfix"></div>
        <SimpleFooter/>
      </Wrapper>
  );
};

export default Home;