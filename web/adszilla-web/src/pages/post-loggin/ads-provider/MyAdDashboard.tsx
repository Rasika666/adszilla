import {useSelector} from 'react-redux';
import AdsProfile from "../../../components/ads/AdsProfile";
import ProfileWrapper from "../../../components/layouts/ProfileWrapper";
import {RootState} from '../../../redux/post-loggin/reducers/rootReducer';
import {UserType} from '../../../utils/adCreateUtil';

const MyAdDashboard = () => {

  const ads = useSelector((state: RootState) => state.ads.ads);

  return (
      <ProfileWrapper userType={UserType.AD_PROVIDER}>

        <div className="col-xl-12 center-block">
          <div className="listings-container margin-top-35">

            {ads.map(ad => <AdsProfile key={ad.id} userType={UserType.AD_PROVIDER} ad={ad}/>)}

          </div>
        </div>


      </ProfileWrapper>
  );
};

export default MyAdDashboard;