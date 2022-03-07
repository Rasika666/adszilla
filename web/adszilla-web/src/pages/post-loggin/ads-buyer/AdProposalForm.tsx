import React from 'react';
import Wrapper from "../../../components/layouts/Wrapper";
import CommonCardWrapper from "../../../components/layouts/CommonCardWrapper";
import {Autocomplete, FormControl, InputAdornment, TextField} from "@mui/material";
import {channelCategory} from "../../../externalData/chennelCategoty";
import SimpleFooter from "../../../components/common/SimpleFooter";

const AdProposalForm = () => {
  return (
      <Wrapper>
        <div className="container margin-top-50">
          <div className="row d-flex">

            <div className="col-xl-6">
              <CommonCardWrapper header={{isHeaderVisibility: true, text: " Ad Details"}}>
                <div className="submit-field">
                  <FormControl fullWidth>
                    <TextField label="Ad Id"/>
                  </FormControl>
                </div>

                <div className="submit-field">
                  <FormControl fullWidth>
                    <TextField label="Ad Category"/>
                  </FormControl>
                </div>

                <div className="submit-field">
                  <FormControl fullWidth>
                    <TextField label="Ad type"/>
                  </FormControl>
                </div>

              </CommonCardWrapper>
            </div>

            <div className="col-xl-6">
              <CommonCardWrapper header={{isHeaderVisibility: true, text: " Youtube Channel details"}}>

                <div className="submit-field">
                  <FormControl fullWidth>
                    <TextField label="Channel Name"/>
                  </FormControl>
                </div>

                <div className="submit-field">
                  <FormControl fullWidth>
                    <TextField label="Total Subscribers"/>
                  </FormControl>
                </div>

                <div className="submit-field">
                  <FormControl fullWidth>
                    <Autocomplete
                        limitTags={2}
                        options={channelCategory}
                        getOptionLabel={(option) => option.category}
                        renderInput={(params) => (
                            <TextField {...params} label="Channel Category" placeholder="Channel Category"/>
                        )}
                    />
                  </FormControl>
                </div>

                <div className="submit-field">
                  <FormControl fullWidth>
                    <TextField label="Url"/>
                  </FormControl>
                </div>

              </CommonCardWrapper>
            </div>

            <div className="col-xl-6">
              <CommonCardWrapper header={{isHeaderVisibility: true, text: " Additional"}}>
                <div className="submit-field">
                  <FormControl fullWidth>
                    <TextField
                        label="Additional description"
                        multiline
                        rows={5}
                        variant="outlined"
                    />
                  </FormControl>
                </div>
              </CommonCardWrapper>
            </div>

            <div className="col-xl-6">
              <CommonCardWrapper header={{isHeaderVisibility: true, text: " My budget"}}>
                <div className="submit-field">
                  <FormControl fullWidth>
                    <TextField
                        type="number"
                        InputProps={{
                          startAdornment: <InputAdornment position="start">Rs:</InputAdornment>,
                        }}
                        label="Your Budget"
                    />
                  </FormControl>

                </div>
              </CommonCardWrapper>
            </div>


            <div className="col-xl-6">
            </div>

            <div className="col-xl-12">
              <button className="button full-width blue  margin-top-25">Send the Proposal</button>
            </div>

            <div className="clearfix"></div>

            <SimpleFooter/>
          </div>
        </div>
      </Wrapper>
  );
};

export default AdProposalForm;