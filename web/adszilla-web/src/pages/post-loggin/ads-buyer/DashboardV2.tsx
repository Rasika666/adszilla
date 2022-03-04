import React from 'react';
import SimpleFooter from "../../../components/common/SimpleFooter";
import Pagination from "../../../components/common/Pagination";
import FilterSideBarV2 from "../../../components/common/FilterSideBarV2";
import AdsV2 from "../../../components/ads/AdsV2";
import Wrapper from "../../../components/layouts/Wrapper";
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/post-loggin/reducers/rootReducer';


const DashboardV2 = () => {

  const ads = useSelector((state: RootState) => state.ads.ads);
  
  return (
      <Wrapper>
        <FilterSideBarV2/>

        <div className="full-page-content-container" data-simplebar>
          <div className="full-page-content-inner">
            <h3 className="page-title">Search Results</h3>
            <div className="listings-container grid-layout margin-top-35">
            {
                    ads.map(ad =>
                      <AdsV2 ad={ad} />
                      )
                  }
            </div>

            <div className="clearfix"></div>

            <div className="pagination-container margin-top-20 margin-bottom-20">
              <Pagination/>
            </div>

            <div className="clearfix"></div>

            <SimpleFooter/>
          </div>
        </div>
      </Wrapper>
  );
};

export default DashboardV2;