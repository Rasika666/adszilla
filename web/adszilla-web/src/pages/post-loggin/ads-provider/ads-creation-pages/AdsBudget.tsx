import React, {forwardRef, useEffect, useImperativeHandle, useState} from 'react';
import {
  adBudgetAction,
  setAdCurrentPageAction
} from "../../../../redux/post-loggin/actions/ad-creation-actions/adCreateAction";
import {AdCreatePage} from "../../../../domain/typeDef";
import {useDispatch, useSelector} from "react-redux";
import {FormControl, InputAdornment, TextField} from "@mui/material";
import {AdsBudget as Budget} from "../../../../domain/ad";
import {RootState} from "../../../../redux/post-loggin/reducers/rootReducer";


export interface setAdBudget {
  updateBudget: () => void,
};


const AdsBudget = forwardRef<setAdBudget, {}>((props, ref) => {

  const dispatch = useDispatch();
  const adBudgetState = useSelector((state: RootState) => state.ads.budget);

  const [youtubeBudget, setYoutubeBudget] = useState<number | null>(adBudgetState.budget.youtubeBudget);
  const [facebookBudget, setFacebookBudget] = useState<number | null>(adBudgetState.budget.facebookBudget);
  const [twitterBudget, setTwitterBudget] = useState<number | null>(adBudgetState.budget.twitterBudget);
  const [instagramBudget, setInstagramBudget] = useState<number | null>(adBudgetState.budget.instagramBudget);

  const updateCurrentPage = () => {
    dispatch(setAdCurrentPageAction(AdCreatePage.BUDGET));
  };

  const updateBudget = () => {
    const budget: Budget = {
      facebookBudget: facebookBudget,
      instagramBudget: instagramBudget,
      twitterBudget: twitterBudget,
      youtubeBudget: youtubeBudget,
    };

    dispatch(adBudgetAction(budget));
  };

  useImperativeHandle(ref,
      () => ({
        updateBudget: updateBudget
      })
  );

  useEffect(() => {
    updateCurrentPage();
  }, []);

  return (
      <div className="dashboard-box margin-top-30 margin-bottom-30 row d-flex justify-content-center">
        <div className="headline col-xl-12">
          <h3><i className="icon-feather-folder-plus"></i>Budget for Social Media</h3>
        </div>

        <div className="content with-padding padding-bottom-10 col-xl-6">
          <div className="row">

            <div className="col-xl-12">
              <div className="submit-field d-flex align-items-center justify-content-around">
                <label>Youtube Budget</label>
                <FormControl>
                  <TextField
                      value={youtubeBudget}
                      type="number"
                      onChange={(e) => setYoutubeBudget(Number(e.target.value))}
                      InputProps={{
                        startAdornment: <InputAdornment position="start">Rs:</InputAdornment>,
                      }}
                      label="Your Budget"
                  />
                </FormControl>
              </div>
            </div>

            <div className="col-xl-12">
              <div className="submit-field d-flex align-items-center justify-content-around">
                <label>Facebook Budget</label>
                <FormControl>
                  <TextField
                      value={facebookBudget}
                      type="number"
                      onChange={(e) => setFacebookBudget(Number(e.target.value))}
                      InputProps={{
                        startAdornment: <InputAdornment position="start">Rs:</InputAdornment>,
                      }}
                      label="Your Budget"
                  />
                </FormControl>
              </div>
            </div>

            <div className="col-xl-12">
              <div className="submit-field d-flex align-items-center justify-content-around">
                <label>Instagram Budget</label>
                <FormControl>
                  <TextField
                      value={instagramBudget}
                      type="number"
                      onChange={(e) => setInstagramBudget(Number(e.target.value))}
                      InputProps={{
                        startAdornment: <InputAdornment position="start">Rs:</InputAdornment>,
                      }}
                      label="Your Budget"
                  />
                </FormControl>
              </div>
            </div>

            <div className="col-xl-12">
              <div className="submit-field d-flex align-items-center justify-content-around">
                <label>Twitter Budget</label>
                <FormControl>
                  <TextField
                      value={twitterBudget}
                      type="number"
                      onChange={(e) => setTwitterBudget(Number(e.target.value))}
                      InputProps={{
                        startAdornment: <InputAdornment position="start">Rs:</InputAdornment>,
                      }}
                      label="Your Budget"
                  />
                </FormControl>
              </div>
            </div>

          </div>
        </div>


        <div className="headline col-xl-12">
          <h3><i className="icon-feather-folder-plus"></i>Budget for Web site</h3>
        </div>

        <div className="content with-padding padding-bottom-10 col-xl-8">
          <div className="row">


          </div>
        </div>
      </div>
  );
});

export default AdsBudget;