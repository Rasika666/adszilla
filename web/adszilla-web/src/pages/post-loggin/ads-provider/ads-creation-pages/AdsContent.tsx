import React, {useEffect} from 'react';
import {useDispatch} from "react-redux";
import {setAdCurrentPageAction} from "../../../../redux/post-loggin/actions/ad-creation-actions/adCreateAction";
import {AdCreatePage} from "../../../../domain/typeDef";

const AdsContent = () => {
  const dispatch = useDispatch();

  const updateCurrentPage = () => {
    dispatch(setAdCurrentPageAction(AdCreatePage.CONTENT));
  };

  useEffect(() => {
    updateCurrentPage();
  }, [])


  return (
      <div className="dashboard-box margin-top-30 margin-bottom-30 row d-flex justify-content-center">
        <div className="headline col-xl-12">
          <h3><i className="icon-feather-folder-plus"></i>Upload Ads</h3>
        </div>

        <div className="content with-padding padding-bottom-10 col-xl-8">


          <div className="row">



          </div>
        </div>
      </div>
  );
};

export default AdsContent;