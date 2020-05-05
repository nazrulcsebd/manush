import React, { useState, useEffect } from 'react'
import { GoogleMap, HeatmapLayer, Marker, InfoBox, InfoWindow, StandaloneSearchBox, useLoadScript } from '@react-google-maps/api'
import useSWR from 'swr'
import fetch from 'unfetch'

import { Spinner } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const fetcher = url => fetch("http://localhost:10001/api/Map/GetMapData").then(r => r.json());

const libraries = ["visualization", "geometry", "places"];

const markerPosition = [
    {
        lat: 22.862257,
        lng: 89.545974,
        message: "Khalishpur"
    },
    {
        lat: 22.853746,
        lng: 89.534611,
        message: "BRDC Road"
    }
];

const infoWindowPositionNMessage = [
    {
        latitude: 22.862257,
        longitude: 89.545974,
        message: "Khalishpur"
    },
    {
        latitude: 22.853746,
        longitude: 89.534611,
        message: "BRDC Road"
    }
];

const divStyle = {
    background: `white`,
    //border: `1px solid #ccc`,
    padding: 15
}

const center = {
    // lat: 22.862257,
    // lng: 89.545974
    lat: 23.684994,
    lng: 90.356331
}

function GoogleMaps(props) {

    const { data } = useSWR('http://localhost:10001/api/Map/GetMapData', fetcher); //{ refreshInterval: 100000 },

    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: "AIzaSyBO25j-_g4bo0Fw63-oyz_wigIsmQ8qoJA",
        region: "BD",
        libraries: libraries
    })

    //const refs = {};

    const [selectedPointer, setSelectedPointer] = useState(null);
    const [centerLocation, setCenterLocation] = useState({ ...center });
    const [heatmapLayerData, setheatmapLayerData] = useState([]);

    useEffect(() => {
        console.log("server data ", data);

        if (isLoaded && data !== undefined) {
            var jsonArray = [];
            data.map((obj, index) => {
                jsonArray.push(
                    { location: new google.maps.LatLng(obj.latitude, obj.longitude), weight: 0.5 * index },
                );
            });

            setheatmapLayerData(jsonArray);

            console.log("jsonArray ", jsonArray);
        }

    }, [data, isLoaded]);


    const onLoad = React.useCallback(
        function onLoad(mapInstance) {
            //console.log("mapInstance ", mapInstance);           

        }
    )

    let searchBox = null;
    const onSearchLoad = ref => searchBox = ref;

    const onPlacesChanged = () => {
        var places = searchBox.getPlaces();
        console.log("geometry places", places[0].geometry);

        if (places[0].geometry !== undefined) {
            let lat = places[0].geometry.location.lat();
            let lng = places[0].geometry.location.lng();
            console.log("places", places, "lat ", lat, "lng ", lng);

            setCenterLocation({
                lat: lat,
                lng: lng
            });
        }
    }


    const renderMap = () => {
        // wrapping to a function is useful in case you want to access `window.google`
        // to eg. setup options or create latLng object, it won't be available otherwise
        // feel free to render directly if you don't need that

        return <GoogleMap
            mapContainerStyle={{ height: "100%", width: "100%" }} //height: "50vh", width: "65vw"
            zoom={15}
            center={centerLocation}
            onLoad={onLoad}
        >
            {/* {
                infoWindowPositionNMessage.map((msg, index) => (
                    <InfoWindow
                        //onLoad={onLoad}
                        clickable={true}
                        key={index}
                        position={{ lat: msg.lat, lng: msg.lng }}
                    >
                        <div key={`msg${index}`} style={divStyle}>
                            <h4>{msg.message}</h4>
                        </div>
                    </InfoWindow>
                ))
            } */}

            <StandaloneSearchBox
                onLoad={onSearchLoad}
                onPlacesChanged={
                    onPlacesChanged
                }
            >

                <div class="container">
                    <br />
                    <div className="row justify-content-center">
                        <div className="col-12 col-md-8 col-lg-8">
                            <div className="card card-sm">
                                <div className="card-body row no-gutters align-items-center" style={{ padding: "4px" }}>
                                    <div className="col-auto" style={{ paddingLeft: "3px" }}>
                                        <FontAwesomeIcon className="h4" icon={faSearch} style={{ color: "#0E9FD5", marginTop: "15px" }} />
                                    </div>

                                    <div className="col" style={{ paddingLeft: "13px" }}>
                                        <input className="form-control form-control-sm form-control-borderless" type="search" placeholder="Type area name" />
                                    </div>

                                    {/* <div className="col-auto">
                                        <button className="btn btn-md btn-success" style={{
                                            height: "33px", paddingTop: "2px", background: "#0E9FD5", border: "0"
                                        }} type="button">Search</button>
                                    </div> */}

                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </StandaloneSearchBox>

            {
                data != undefined && data.map((pointer, index) => (
                    <Marker
                        //onLoad={onLoad}
                        clickable={true}
                        key={index}
                        position={{ lat: pointer.latitude, lng: pointer.longitude }}
                        onClick={() => {
                            setSelectedPointer(pointer);
                        }}
                    />
                ))
            }

            {
                selectedPointer !== null && (
                    <InfoWindow
                        position={{ lat: selectedPointer.latitude, lng: selectedPointer.longitude }}
                        onCloseClick={() => {
                            setSelectedPointer(null);
                        }}
                    >
                        <div style={divStyle}>
                            <h4>{selectedPointer.message}</h4>
                        </div>
                    </InfoWindow>
                )
            }

            <HeatmapLayer data={heatmapLayerData}
            />

        </GoogleMap >

    }

    if (loadError) {
        return <div>Map cannot be loaded right now, sorry.</div>
    }

    return isLoaded ? renderMap() :
        <>
            <div style={{ textAlign: "center" }}>
                <Spinner animation="border" variant="info" />
            </div>
        </>
}

export default GoogleMaps;

