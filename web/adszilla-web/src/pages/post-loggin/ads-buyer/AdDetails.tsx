import React from 'react';
import AdDescription from '../../../components/common/Adescription';
import AdHeader from '../../../components/common/AdHeader';
import AdSideBar from '../../../components/common/AdSideBar';
import FilterSideBarV2 from "../../../components/common/FilterSideBarV2";
import Wrapper from "../../../components/layouts/Wrapper";

const AdDetails = () => {
  return (

      <Wrapper>
        <div className="full-page-content-container" data-simplebar>
            <AdHeader/>
            <div className="container">
	<            div className="row">
               <div className="col-xl-8 col-lg-8 content-right-offset">
             <   AdDescription />
               </div>
             <AdSideBar />
            </div>
          </div>
        </div>
      </Wrapper>


  );
};

export default AdDetails;