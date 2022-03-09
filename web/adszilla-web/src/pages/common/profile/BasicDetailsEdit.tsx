import { FormControl, TextField } from '@mui/material';
import React from 'react';

const BasicDetailsEdit = () => {
    return (

        <div className="col-xl-12">
            <div className="dashboard-box margin-top-0">

                <div className="headline">
                    <h3><i className="icon-material-outline-account-circle"></i> My Account</h3>
                </div>

                <div className="content with-padding padding-bottom-0">

                    <div className="row">

                        <div className="col-auto">
                            <div className="avatar-wrapper" data-tippy-placement="bottom" title="Change Avatar">
                                <img className="profile-pic" src="images/user-avatar-placeholder.png" alt="" />
                                <div className="upload-button"></div>
                                <input className="file-upload" type="file" accept="image/*" />
                            </div>
                        </div>

                        <div className="col">
                            <div className="row">

                                <div className="col-xl-6">
                                    <div className="submit-field">
                                        <FormControl fullWidth>
                                            <TextField label="Name" id="fullWidth" />
                                        </FormControl>
                                    </div>
                                </div>

                                <div className="col-xl-6">
                                    <div className="submit-field">
                                        <FormControl fullWidth>
                                            <TextField label="Email" id="fullWidth" disabled />
                                        </FormControl>
                                    </div>
                                </div>
                                <br />

                                <div className="col-xl-6">
                                    <div className="submit-field">
                                        <FormControl fullWidth>
                                            <TextField label="Youtube Channel Name" id="fullWidth" />
                                        </FormControl>
                                    </div>
                                </div>

                                <div className="col-xl-6">
                                    <div className="submit-field">
                                        <FormControl fullWidth>
                                            <TextField label="Subscriber count" id="fullWidth" />
                                        </FormControl>
                                    </div>
                                </div>
                                <br />
                                <div className="col-xl-6">
                                    <div className="submit-field">
                                        <FormControl fullWidth>
                                            <TextField label="Youtube channel URL" id="fullWidth" />
                                        </FormControl>
                                    </div>
                                </div>

                                <div className="col-xl-6">
                                    <div className="submit-field">
                                        <FormControl fullWidth>
                                            <TextField label="Email" id="fullWidth" />
                                        </FormControl>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default BasicDetailsEdit;