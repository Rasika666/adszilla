import React from 'react';
import BasicDetailsEdit from './BasicDetailsEdit';
import AdditionalDetailsEdit from './AdditionalDetailsEdit';
import PasswordEdit from './PasswordEdit';
import ProfileWrapper from '../../../components/layouts/ProfileWrapper';
import { UserType } from '../../../utils/adCreateUtil';
import { Link } from 'react-router-dom';

const ProfileEdit = () => {
  return (
    <ProfileWrapper userType={UserType.AD_BUYER}>

      <div className="row">

        <BasicDetailsEdit />
        <AdditionalDetailsEdit />
        <PasswordEdit />

        <div className="col-xl-12">
          <Link to={'/buyer-profile'} className="button ripple-effect big margin-top-30">Save Changes</Link>
        </div>
      </div>

    </ProfileWrapper>
  );
};

export default ProfileEdit;