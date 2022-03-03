import React, {useState} from 'react';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import {Autocomplete, FormControl, InputLabel, MenuItem, TextField} from "@mui/material";
import {Tags} from "../../../../externalData/TagList";

const AdsOverview = () => {




  return (
      <div className="dashboard-box margin-top-30 margin-bottom-30 row d-flex justify-content-center">
        <div className="headline col-xl-12">
          <h3><i className="icon-feather-folder-plus"></i> Ads Basic Details</h3>
        </div>

        <div className="content with-padding padding-bottom-10 col-xl-8">


            <div className="row">

              <div className="col-xl-6 border-top">
                <div className="submit-field">
                  <FormControl fullWidth>
                    <TextField label="Ad Title" id="fullWidth" />
                  </FormControl>
                </div>
              </div>

              <div className="col-xl-6">
                <div className="submit-field">
                  <FormControl fullWidth>
                    <InputLabel id="AdType">Ad Type</InputLabel>
                    <Select
                        labelId="AdType"
                        label="AdType">
                      <MenuItem value={"banner"}>Banner</MenuItem>
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
                        labelId="AdCategory"
                        label="AdCategory">
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
                        multiple
                        limitTags={2}
                        options={Tags}
                        getOptionLabel={(option) => option.title}
                        defaultValue={[]}
                        renderInput={(params) => (
                            <TextField {...params} label="Tags" placeholder="Tags" />
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
                    />
                  </FormControl>

                </div>
              </div>

            </div>
        </div>
      </div>
  );
};

export default AdsOverview;