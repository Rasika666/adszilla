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

  const form = (
      <div
          style={{
            padding: "1rem",
            flexBasis: "250px",
            height: "100%",
            overflow: "hidden",

          }}
      >
        <label htmlFor="zoom">Zoom</label>
        <input
            type="number"
            id="zoom"
            name="zoom"
            value={zoom}
            onChange={(event) => setZoom(Number(event.target.value))}
        />
        <br/>
        <label htmlFor="lat">Latitude</label>
        <input
            type="number"
            id="lat"
            name="lat"
            value={center.lat}
            onChange={(event) =>
                setCenter({...center, lat: Number(event.target.value)})
            }
        />
        <br/>
        <label htmlFor="lng">Longitude</label>
        <input
            type="number"
            id="lng"
            name="lng"
            value={center.lng}
            onChange={(event) =>
                setCenter({...center, lng: Number(event.target.value)})
            }
        />
        <h3>{clicks.length === 0 ? "Click on map to add markers" : "Clicks"}</h3>
        {clicks.map((latLng, i) => (
            <pre key={i}>{JSON.stringify(latLng.toJSON(), null, 2)}</pre>
        ))}
        <button onClick={() => setClicks([])}>Clear</button>
      </div>
  );

  return (
      <div className="dashboard-box margin-top-30 margin-bottom-30 row d-flex justify-content-center">
        <div className="headline col-xl-12">
          <h3><i className="icon-feather-folder-plus"></i> Select Target Area</h3>
        </div>

        <div className="content with-padding padding-bottom-10 col-xl-8">
          <div className="row">
            <div className="col-xl-12" style={{minHeight:"500px"}}>

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
              </Wrapper>

            </div>


          </div>
        </div>
      </div>
  );
};


export default AdsTargetArea;