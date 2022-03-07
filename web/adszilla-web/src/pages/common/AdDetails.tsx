import React, {FC, useState} from 'react';
import {useSelector} from 'react-redux';
import {useParams} from 'react-router-dom';
import AdHeader from '../../components/common/AdHeader';
import AdSideBar from '../../components/common/AdSideBar';
import SimpleFooter from '../../components/common/SimpleFooter';
import Wrapper from "../../components/layouts/Wrapper";
import {RootState} from '../../redux/post-loggin/reducers/rootReducer';
import {UserType} from '../../utils/adCreateUtil';
import GMap from "../../components/map/Map";
import Marker from "../../components/map/Marker";
import {Status, Wrapper as GWrapper} from "@googlemaps/react-wrapper";
import Stepper from "../../components/common/Stepper";

const render = (status: Status) => {
  return <h1>{status}</h1>;
};

const steps = ['Proposal verified', 'Agreement Verified', 'Amount Verification', 'Publish Verification', 'Finished'];

export interface AdDetailsProps {
  userType: UserType,
};

const AdDetails: FC<AdDetailsProps> = ({userType}) => {

  const {adId} = useParams();

  const ads = useSelector((state: RootState) => state.ads.ads);
  const [clicks, setClicks] = useState<google.maps.LatLng[]>([]);
  const [zoom, setZoom] = useState(8);
  const [center, setCenter] = useState<google.maps.LatLngLiteral>({
    lat: 7.395849721904666,
    lng: 80.4607023280474,
  });
  const [activeStep, setActiveStep] = useState(0);

  const onIdle = (m: google.maps.Map) => {
    console.log("onIdle");
    setZoom(m.getZoom()!);
    setCenter(m.getCenter()!.toJSON());
  };

  const adDetail = ads.find(ad => ad.id == adId);

  return (

      <Wrapper>
        <div className="full-page-content-container" data-simplebar>
          <AdHeader ad={adDetail}/>
          <div className="container">
            <div className="row">
              <div className="col-xl-8 col-lg-8 content-right-offset">
                <div className="single-page-section">

                  <div className="row">
                    <div className="col-xl-12">
                      <h3 className="margin-bottom-25">Ad Description</h3>
                      <p>{adDetail?.overview?.adDescription}</p>
                    </div>
                  </div>

                  <div className="row margin-top-50">
                    <div className="col-xl-12" style={{minHeight: "500px"}}>
                      <h3 className="margin-bottom-25">Target Area</h3>
                      <GWrapper apiKey={""} render={render}>
                        <GMap
                            center={center}
                            onIdle={onIdle}
                            zoom={zoom}
                            style={{flexGrow: "1", height: "100%"}}
                        >
                          {clicks.map((latLng, i) => (
                              <Marker key={i} position={latLng}/>
                          ))}
                        </GMap>
                      </GWrapper>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-xl-6">
                      <h3 className="margin-bottom-25 margin-top-100">Additional Details</h3>

                    </div>
                    <div className="col-xl-6">
                      <h3 className="margin-bottom-25 margin-top-100">Ad Status</h3>
                      <Stepper activeStep={activeStep}
                               steps={steps}
                               orientation={"vertical"}/>
                    </div>
                  </div>


                </div>
              </div>
              <AdSideBar ad={adDetail} userType={userType}/>
            </div>

            <div className="clearfix"></div>
            <SimpleFooter/>
          </div>
        </div>
      </Wrapper>


  );
};

export default AdDetails;