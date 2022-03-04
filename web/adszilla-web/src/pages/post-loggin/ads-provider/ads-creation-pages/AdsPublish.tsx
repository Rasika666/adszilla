import React, {useEffect} from 'react';
import {useDispatch} from "react-redux";
import {setAdCurrentPageAction} from "../../../../redux/post-loggin/actions/ad-creation-actions/adCreateAction";
import {AdCreatePage} from "../../../../domain/typeDef";
import {Checkbox, FormControlLabel} from "@mui/material";

const AdsPublish = () => {

  const dispatch = useDispatch();

  const updateCurrentPage = () => {
    dispatch(setAdCurrentPageAction(AdCreatePage.PUBLISH));
  };

  useEffect(() => updateCurrentPage(), []);


  return (
      <div className="dashboard-box margin-top-30 margin-bottom-30 row d-flex justify-content-center">

        <div className="content with-padding padding-bottom-10 col-xl-8 padding-bottom-50 padding-top-50">
          <div className="row d-flex justify-content-center">
            <div className="col-xl-12">
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                It has survived not only five centuries, but also the leap into electronic typesetting,
                remaining essentially unchanged.
              </p>

            </div>
            <div className="col-xl-6 margin-top-50">

              <div className="checkbox">
                <FormControlLabel
                    control={<Checkbox
                                       name="adCreateAgreement"
                                       />}
                    label=" Agree to Continue"/>

              </div>

              <button className="button full-width blue  margin-top-25" >Publish</button>
            </div>
          </div>
        </div>

      </div>
  );
};

export default AdsPublish;