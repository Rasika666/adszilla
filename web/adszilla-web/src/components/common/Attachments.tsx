import { TableRow } from '@mui/material';
import React from 'react';
import { FormState } from '../../utils/adCreateUtil';

interface AttachmentsProps {
  action: FormState
}

const Attachments = ({ action }: AttachmentsProps) => {
  return (
    <div className="submit-field">
      <h5>Attachments</h5>

      <div className="attachments-container margin-top-0 margin-bottom-0">
        <div className="attachment-box ripple-effect">
          <span>Proof 01</span>
          <i>PDF</i>
          {
            action === FormState.EDIT ? <button className="remove-attachment" data-tippy-placement="top" title="Remove"></button>
              : <div></div>
          }

        </div>
        <div className="attachment-box ripple-effect">
          <span>Contract</span>
          <i>PDF</i>
          {
            action === FormState.EDIT ? <button className="remove-attachment" data-tippy-placement="top" title="Remove"></button>
              : <div></div>
          }
        </div>
      </div>
      <div className="clearfix"></div>


      {
        action !== FormState.EDIT
          ? <div className="uploadButton margin-top-0">
            <input className="uploadButton-input" type="file" accept="image/*, application/pdf" id="upload" multiple />
            <label className="uploadButton-button ripple-effect" >Download Files</label>
          </div>
          : <div className="uploadButton margin-top-0">
            <input className="uploadButton-input" type="file" accept="image/*, application/pdf" id="upload" multiple />
            <label className="uploadButton-button ripple-effect" >Upload Files</label>
            <span className="uploadButton-file-name">Maximum file size: 10 MB</span>
          </div>
      }


    </div>
  );
};

export default Attachments;