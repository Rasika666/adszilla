import React, {forwardRef, useEffect, useImperativeHandle, useState} from 'react';
import Select from '@mui/material/Select';
import {Autocomplete, FormControl, InputLabel, MenuItem, TextField} from "@mui/material";
import {Tags} from "../../../../externalData/TagList";
import {useDispatch, useSelector} from "react-redux";
import {AdsDetails, Tag} from "../../../../domain/ad";
import {
  adOverviewAction,
  setAdCurrentPageAction
} from "../../../../redux/post-loggin/actions/ad-creation-actions/adCreateAction";
import {AdCreatePage} from "../../../../domain/typeDef";
import {RootState} from "../../../../redux/post-loggin/reducers/rootReducer";

export interface setAdOverview {
  updateOverview: () => void,
};


const AdsOverview = forwardRef<setAdOverview, {}>((props, ref) => {

  const adOverviewState = useSelector((state: RootState) => state.ads.overview);

  const dispatch = useDispatch();

  const [adTitle, setAdTitle] = useState<string>(adOverviewState.overview.adTitle);
  const [adType, setAdType] = useState<string>(adOverviewState.overview.adType);
  const [adCategory, setAdCategory] = useState<string>(adOverviewState.overview.adCategory);
  const [adTags, setAdTags] = useState<Tag[]>(adOverviewState.overview.adTags);
  const [adDescription, setAdDescription] = useState<string>(adOverviewState.overview.adDescription);


  const updateCurrentPage = () => {
    dispatch(setAdCurrentPageAction(AdCreatePage.OVERVIEW));
  };

  const updateOverview = () => {

    const overview: AdsDetails = {
      adTitle,
      adCategory,
      adType,
      adDescription,
      adTags,
    };

    dispatch(adOverviewAction(overview));

  };

  useImperativeHandle(ref,
      () => ({
        updateOverview: updateOverview
      })
  )

  useEffect(() => {
    updateCurrentPage();
  }, [])

  return (
      <div className="dashboard-box margin-top-30 margin-bottom-30 row d-flex justify-content-center">
        <div className="headline col-xl-12">
          <h3><i className="icon-feather-folder-plus"></i> Create your poposal</h3>
        </div>

        <div className="content with-padding padding-bottom-10 col-xl-8">

          <div className="row">

            <div className="col-xl-6 border-top">
              <div className="submit-field">
                <FormControl fullWidth>
                  <TextField label="Poposed value" id="fullWidth" value={adTitle}
                             onChange={(e) => setAdTitle(e.target.value)}/>
                </FormControl>
              </div>
            </div>

            <div className="col-xl-12">
              <div className="submit-field">
                <FormControl fullWidth>
                  <TextField
                      label="Aditional Description"
                      multiline
                      rows={5}
                      variant="outlined"
                      value={adDescription}
                      onChange={(e) => setAdDescription(e.target.value)}
                  />
                </FormControl>

              </div>
            </div>

            <div className="checkbox">
				<input type="checkbox" id="chekcbox1" checked />
				<label ><span className="checkbox-icon"></span> I ageed to terms and conditions</label>
			</div>

          </div>
        </div>
      </div>
  );
});

export default AdsOverview;