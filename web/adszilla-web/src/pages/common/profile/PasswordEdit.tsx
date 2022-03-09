import { FormControl, TextField } from '@mui/material';
import React from 'react';

const PasswordEdit = () => {
    return (
        <div className="col-xl-12">
            <div id="test1" className="dashboard-box">

                <div className="headline">
                    <h3><i className="icon-material-outline-lock"></i> Password & Security</h3>
                </div>

                <div className="content with-padding">
                    <div className="row">
                        <div className="col-xl-4">
                            <div className="submit-field">
                                <FormControl fullWidth>
                                    <TextField label="Current Password" />
                                </FormControl>
                            </div>
                        </div>

                        <div className="col-xl-4">
                            <div className="submit-field">
                                <FormControl fullWidth>
                                    <TextField label="New Password" />
                                </FormControl>
                            </div>
                        </div>

                        <div className="col-xl-4">
                            <div className="submit-field">
                                <FormControl fullWidth>
                                    <TextField label="Repeat New Password" />
                                </FormControl>
                            </div>
                        </div>

                        <div className="col-xl-12">
                            <div className="checkbox">
                                <input type="checkbox" id="two-step" checked />
                                <label ><span className="checkbox-icon"></span> Enable Two-Step Verification via Email</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PasswordEdit;