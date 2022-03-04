import { StyledStepper } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import AdDescription from '../../../components/common/Adescription';
import AdHeader from '../../../components/common/AdHeader';
import AdSideBar from '../../../components/common/AdSideBar';
import Wrapper from "../../../components/layouts/Wrapper";
import { RootState } from '../../../redux/post-loggin/reducers/rootReducer';

const AdDetails = () => {

  const ads = useSelector((state: RootState) => state.ads.ads);

  let { addId } = useParams();
  
  return (

      <Wrapper>
        <div className="full-page-content-container" data-simplebar>
            <AdHeader ad={ads[Number(addId)]}/>
            <div className="container">
	            <div className="row">
               <div className="col-xl-8 col-lg-8 content-right-offset">
                  <AdDescription ad={ads[Number(addId)]}/>
               </div>
             <AdSideBar ad={ads[Number(addId)]}/>
            </div>
          </div>
        </div>
      </Wrapper>


  );
};

export default AdDetails;