import React, {useEffect} from 'react';
import {Checkbox, FormControlLabel} from "@mui/material";
import {setAdCurrentPageAction} from "../../../../redux/post-loggin/actions/ad-creation-actions/adCreateAction";
import {AdCreatePage} from "../../../../domain/typeDef";
import {useDispatch} from "react-redux";

const AdsMarketingChannel = () => {
  const dispatch = useDispatch();



  useEffect(()=> {
    dispatch(setAdCurrentPageAction(AdCreatePage.CHANNEL));
  }, [])


  return (
      <div className="dashboard-box margin-top-30 margin-bottom-30 row d-flex justify-content-center">

        <div className="headline col-xl-12">
          <h3><i className="icon-feather-folder-plus"></i> Social Media</h3>
        </div>

        <div className="content with-padding padding-bottom-10 col-xl-8">
          <div className="row">

            <div className="col-xl-12">
              <div className="row">

                <div className="col-xl-4">
                  <FormControlLabel control={<Checkbox/>} label=" Youtube Channel"/>
                </div>
                <div className="col-xl-4">
                  <FormControlLabel control={<Checkbox/>} label=" facebook Pages"/>
                </div>
                <div className="col-xl-4">
                  <FormControlLabel control={<Checkbox/>} label=" Instagram page"/>
                </div>
                <div className="col-xl-4">
                  <FormControlLabel control={<Checkbox/>} label=" Twitter page"/>
                </div>

              </div>

            </div>

          </div>
        </div>

        <div className="headline col-xl-12">
          <h3><i className="icon-feather-folder-plus"></i> Web Sites</h3>
        </div>

        <div className="content with-padding padding-bottom-10 col-xl-8">
          <div className="row">

            <div className="col-xl-12">
              <div className="row">

                <div className="col-xl-4">
                  <FormControlLabel control={<Checkbox/>} label=" Gossip Site"/>
                </div>
                <div className="col-xl-4">
                  <FormControlLabel control={<Checkbox/>} label=" Blog"/>
                </div>
                <div className="col-xl-4">
                  <FormControlLabel control={<Checkbox/>} label=" News Site"/>
                </div>

              </div>

            </div>

          </div>
        </div>


      </div>
  );
};

export default AdsMarketingChannel;