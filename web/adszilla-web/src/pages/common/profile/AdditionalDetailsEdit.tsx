import React from 'react';

const AdditionalDetailsEdit = () => {
    return (
        <div className="col-xl-12">
            <div className="dashboard-box">

                <div className="headline">
                    <h3><i className="icon-material-outline-face"></i> My Profile</h3>
                </div>

                <div className="content">
                    <ul className="fields-ul">
                        <li>
                            <div className="row">

                                <div className="col-xl-6">
                                    <div className="submit-field">
                                        <h5>Social media type <i className="help-icon" data-tippy-placement="right" title="Add up to 10 skills"></i></h5>
                                        <div className="keywords-container">
                                            <div className="keyword-input-container">
                                                <input type="text" className="keyword-input with-border" placeholder="e.g. Youtube" />
                                                <button className="keyword-input-button ripple-effect"><i className="icon-material-outline-add"></i></button>
                                            </div>
                                            <div className="keywords-list">
                                                <span className="keyword"><span className="keyword-remove"></span><span className="keyword-text">Youtube</span></span>
                                                <span className="keyword"><span className="keyword-remove"></span><span className="keyword-text">Facebook</span></span>
                                            </div>
                                            <div className="clearfix"></div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-xl-6">
                                    <div className="submit-field">
                                        <h5>Attachments</h5>

                                        <div className="attachments-container margin-top-0 margin-bottom-0">
                                            <div className="attachment-box ripple-effect">
                                                <span>Proof Document 01</span>
                                                <i>PDF</i>
                                                <button className="remove-attachment" data-tippy-placement="top" title="Remove"></button>
                                            </div>
                                            <div className="attachment-box ripple-effect">
                                                <span>Proof Document 02</span>
                                                <i>PDF</i>
                                                <button className="remove-attachment" data-tippy-placement="top" title="Remove"></button>
                                            </div>
                                        </div>
                                        <div className="clearfix"></div>

                                        <div className="uploadButton margin-top-0">
                                            <input className="uploadButton-input" type="file" accept="image/*, application/pdf" id="upload" multiple />
                                            <label className="uploadButton-button ripple-effect" >Upload Files</label>
                                            <span className="uploadButton-file-name">Maximum file size: 10 MB</span>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </li>
                        
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default AdditionalDetailsEdit;