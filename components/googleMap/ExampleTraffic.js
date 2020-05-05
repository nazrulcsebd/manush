import React, { useState } from 'react'
import { GoogleMap, Marker, InfoWindow, } from '@react-google-maps/api'
import { markerPosition } from "./MapData";


const divStyle = {
  background: `white`,
  border: `1px solid #ccc`,
  padding: 15
}

const ExampleTraffic = (props) => {

  const [selectedPointer, setSelectedPointer] = useState(null);

  console.log("styles=> ", props);
  const onClick = (...args) => {
    console.log('onClick args: ', args)
  }

  console.log(markerPosition);


  return (
    <GoogleMap
      id='example-map'
      mapContainerStyle={{ height: "100vh", width: "100vw" }}
      zoom={13}
      center={{
        lat: 23.684994,
        lng: 90.356331
      }}
      clickableIcons={true}
    //onClick={onClick}
    >
      {
        markerPosition.map((pointer, index) => (
          <Marker
            //onLoad={onLoad}
            clickable={true}
            key={index}
            position={{ lat: pointer.lat, lng: pointer.lng }}
            onClick={() => {
              setSelectedPointer(pointer);
            }}
          />
        ))
      }

      {selectedPointer !== null && (
        <InfoWindow
          position={{ lat: selectedPointer.lat, lng: selectedPointer.lng }}
          onCloseClick={() => {
            setSelectedPointer(null);
          }}
        >
          <div style={divStyle}>
            <h4>{selectedPointer.message}</h4>
          </div>
        </InfoWindow>
      )}
    </GoogleMap>
  );
}
export default ExampleTraffic;