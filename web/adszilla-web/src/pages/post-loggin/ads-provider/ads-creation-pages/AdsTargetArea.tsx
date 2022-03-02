import React, {useState} from 'react';
import {Status, Wrapper} from "@googlemaps/react-wrapper";
import Marker from "../../../../components/map/Marker";
import GMap from "../../../../components/map/Map"


const render = (status: Status) => {
  return <h1>{status}</h1>;
};

const AdsTargetArea = () => {

  const [clicks, setClicks] = useState<google.maps.LatLng[]>([]);
  const [zoom, setZoom] = useState(8);
  const [center, setCenter] = useState<google.maps.LatLngLiteral>({
    lat: 7.395849721904666,
    lng: 80.4607023280474,
  });

  const onClick = (e: google.maps.MapMouseEvent) => {
    // avoid directly mutating state
    setClicks([...clicks, e.latLng!]);
  };

  const onIdle = (m: google.maps.Map) => {
    console.log("onIdle");
    setZoom(m.getZoom()!);
    setCenter(m.getCenter()!.toJSON());
  };

  return (
      <div className="dashboard-box margin-top-30 margin-bottom-30 row d-flex justify-content-center">
        <div className="headline col-xl-12">
          <h3><i className="icon-feather-folder-plus"></i> Select Target Area</h3>
        </div>

        <div className="content with-padding padding-bottom-10 col-xl-12">
          <div className="row">
            <div className="col-xl-8" style={{minHeight:"500px"}}>

              <Wrapper apiKey={""} render={render}>
                <GMap
                    center={center}
                    onClick={onClick}
                    onIdle={onIdle}
                    zoom={zoom}
                    style={{flexGrow: "1", height: "100%"}}
                >
                  {clicks.map((latLng, i) => (
                      <Marker key={i} position={latLng}/>
                  ))}
                </GMap>
              </Wrapper>s

            </div>
            <div className="col-xl-4 align-self-end">
              <button className="button full-width blue" onClick={() => setClicks([])}>Clear</button>
            </div>


          </div>
        </div>
      </div>
  );
};


export default AdsTargetArea;