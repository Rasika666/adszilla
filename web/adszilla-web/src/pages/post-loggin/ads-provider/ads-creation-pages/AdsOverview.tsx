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
  const dispatch = useDispatch();

  const adOverviewState = useSelector((state: RootState) => state.ads.overview);

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
  );

  useEffect(() => {
    updateCurrentPage();
  }, [])

  return (
      <div className="dashboard-box margin-top-30 margin-bottom-30 row d-flex justify-content-center">
        <div className="headline col-xl-12">
          <h3><i className="icon-feather-folder-plus"></i> Ads Basic Details</h3>
        </div>

        <div className="content with-padding padding-bottom-10 col-xl-8">

          <div className="row">

            <div className="col-xl-6">
              <div className="submit-field">
                <FormControl fullWidth>
                  <TextField label="Ad Title" id="fullWidth" value={adTitle}
                             onChange={(e) => setAdTitle(e.target.value)}/>
                </FormControl>
              </div>
            </div>

            <div className="col-xl-6">
              <div className="submit-field">
                <FormControl fullWidth>
                  <InputLabel id="AdType">Ad Type</InputLabel>
                  <Select
                      defaultValue={""}
                      labelId="AdType"
                      label="AdType"
                      value={adType}
                      onChange={(e) => setAdType(e.target.value)}
                  >
                    <MenuItem value={"Banner"}>Banner</MenuItem>
                    <MenuItem value={"video"}>Video</MenuItem>
                  </Select>
                </FormControl>
              </div>
            </div>

            <div className="col-xl-6">
              <div className="submit-field">
                <FormControl fullWidth>
                  <InputLabel id="AdCategory">Ad Category</InputLabel>
                  <Select
                      defaultValue={""}
                      labelId="AdCategory"
                      label="AdCategory"
                      value={adCategory}
                      onChange={(e) => setAdCategory(e.target.value)}
                  >
                    <MenuItem value={"1"}>Accounting and Finance</MenuItem>
                    <MenuItem value={"2"}>Clerical & Data Entry</MenuItem>
                    <MenuItem value={"3"}>Counseling</MenuItem>
                    <MenuItem value={"4"}>Court Administration</MenuItem>
                    <MenuItem value={"5"}>Human Resources</MenuItem>
                    <MenuItem value={"6"}>Investigative</MenuItem>
                    <MenuItem value={"7"}>Public Relations</MenuItem>
                    <MenuItem value={"8"}>Law Enforcement</MenuItem>

                  </Select>
                </FormControl>

              </div>
            </div>

            <div className="col-xl-6">
              <div className="submit-field">

                <FormControl fullWidth>
                  <Autocomplete
                      value={adTags}
                      multiple
                      limitTags={2}
                      options={Tags}
                      getOptionLabel={(option) => option.tag}
                      defaultValue={[]}
                      onChange={(event, newValue) => setAdTags([...newValue])}
                      renderInput={(params) => (
                          <TextField {...params} label="Tags" placeholder="Tags"/>
                      )}
                  />
                </FormControl>
              </div>
            </div>

            <div className="col-xl-12">
              <div className="submit-field">
                <FormControl fullWidth>
                  <TextField
                      label="Description"
                      multiline
                      rows={5}
                      variant="outlined"
                      value={adDescription}
                      onChange={(e) => setAdDescription(e.target.value)}
                  />
                </FormControl>

              </div>
            </div>

          </div>
        </div>
      </div>
  );
});

export default AdsOverview;