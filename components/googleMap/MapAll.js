import React, { useState, useEffect } from 'react'
import {
    GoogleMap,
    Polyline,
    Polygon,
    Rectangle,
    Circle,
    Marker,
    OverlayView,
    InfoWindow,
    useLoadScript
} from '@react-google-maps/api'

const libraries = ["visualization"];
const FLIGHT_PLAN_COORDS = [
    { lat: 37.772, lng: -122.214 },
    { lat: 21.291, lng: -157.821 },
    { lat: -18.142, lng: 178.431 },
    { lat: -27.467, lng: 153.027 },
]

const BRISBANE_COORDS = [
    { lat: -27.467, lng: 153.027 },
    { lat: -23.467, lng: 152.027 },
    { lat: -28.567, lng: 149.627 },
    { lat: -27.467, lng: 153.027 },
]

const SAN_FRANCISCO_COORDS = [
    { lat: 37.772, lng: -122.214 },
    { lat: 39.772, lng: -121.214 },
    { lat: 35.772, lng: -120.214 },
    { lat: 37.772, lng: -122.214 },
]

const RECTANGLE_BOUNDS = {
    north: 38.685,
    south: 33.671,
    east: -115.234,
    west: -118.251,
}

const POLYLINE_OPTIONS = {
    strokeColor: '#FF0000',
    strokeOpacity: 1.0,
    strokeWeight: 2,
}

// const ExampleShapesPropTypes = {
//     styles: PropTypes.shape({
//         container: PropTypes.object.isRequired,
//     }).isRequired,
// }

const mapCenter = {
    lat: 0,
    lng: -180,
}

const MARKER_POSITION = {
    lat: 37.772,
    lng: -122.214,
}

const OVERLAY_VIEW_POSITION = {
    lat: 35.772,
    lng: -120.214,
}

const INFO_WINDOW_POSITION = {
    lat: 33.772,
    lng: -117.214,
}

const brisbanePolygonOptions = {
    fillColor: '#00FF00',
    fillOpacity: 1,
    strokeColor: '#22FF22',
    strokeOpacity: 1,
    strokeWeight: 2,
    clickable: false,
    draggable: false,
    editable: false,
    geodesic: false,
    paths: BRISBANE_COORDS,
    zIndex: 1,
}

const sfPolygonOptions = {
    fillColor: '#FF5500',
    fillOpacity: 1,
    strokeColor: '#FF7700',
    strokeOpacity: 1,
    strokeWeight: 2,
    clickable: false,
    draggable: false,
    editable: false,
    geodesic: false,
    paths: SAN_FRANCISCO_COORDS,
    zIndex: 1,
}

const circleOptions = {
    strokeColor: '#FF0000',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#FF0000',
    fillOpacity: 0.35,
    center: {
        lat: 34.052,
        lng: -118.243,
    },
    radius: 300000,
    clickable: false,
    draggable: false,
    editable: false,
    visible: true,
    zIndex: 1,
}

const textareaStyle = {
    minHeight: '6rem',
    maxHeight: '12rem',
    width: '100%',
    minWidth: '15rem',
    maxWidth: '40rem',
}

const infoWindowStyle = {
    background: `white`,
    border: `1px solid #ccc`,
    padding: 15,
}

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

const divStyle = {
    background: `white`,
    border: `1px solid #ccc`,
    padding: 15
}

function MapAll() {
    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: "AIzaSyBO25j-_g4bo0Fw63-oyz_wigIsmQ8qoJA",
        region: "BD",
        libraries: libraries
    })


    const [selectedPointer, setSelectedPointer] = useState({
        polylineVisible: true,
        polylineOptions: JSON.stringify(POLYLINE_OPTIONS),
    });

    const onCheckboxChange = () => {
        setSelectedPointer({ ...selectedPointer, polylineVisible: !selectedPointer.polylineVisible });
    }

    const onTextAreaChange = ({ target: { value } }) => {
        setSelectedPointer({ ...selectedPointer, polylineOptions: value });
    }

    const onClick = () => {
        console.info('I have been clicked!')
    }

    const onLoad = React.useCallback(
        function onLoad(mapInstance) {

        }
    )

    let polylineOptions;

    try {
        polylineOptions = JSON.parse(selectedPointer.polylineOptions)
    } catch (e) {
        polylineOptions = POLYLINE_OPTIONS
    }

    const renderMap = () => {
        return (
            <div className='map'>
                <div className='map-settings'>
                    <hr className='mt-0 mb-3' />

                    <div className='custom-control custom-checkbox mb-3'>
                        <input
                            id='show-polyline-checkbox'
                            className='custom-control-input'
                            type='checkbox'
                            checked={selectedPointer.polylineVisible}
                            onChange={onCheckboxChange}
                        />
                        <label
                            className='custom-control-label'
                            htmlFor='show-polyline-checkbox'
                        >
                            Show flight path
                </label>
                    </div>

                    <div className='form-group mb-4'>
                        <label htmlFor='polyline-options-input'>
                            Polyline options (valid JSON):
                </label>

                        <textarea
                            id='polyline-options-input'
                            className='form-control'
                            type='text'
                            value={selectedPointer.polylineOptions}
                            style={textareaStyle}
                            onChange={onTextAreaChange}
                        />
                    </div>
                </div>

                <div className='map-container'>
                    <GoogleMap
                        id='shapes-example'
                        mapContainerStyle={{ height: "300vh", width: "100vw" }}
                        zoom={2}
                        center={mapCenter}
                    >
                        {selectedPointer.polylineVisible && (
                            <Polyline path={FLIGHT_PLAN_COORDS} options={polylineOptions} />
                        )}

                        <Polygon path={BRISBANE_COORDS} options={brisbanePolygonOptions} />

                        <Polygon path={SAN_FRANCISCO_COORDS} options={sfPolygonOptions} />

                        <Rectangle bounds={RECTANGLE_BOUNDS} />

                        <Circle options={circleOptions} />

                        <Marker position={MARKER_POSITION} />

                        <OverlayView
                            position={OVERLAY_VIEW_POSITION}
                            mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
                        >
                            <div style={infoWindowStyle}>
                                <h1>OverlayView</h1>
                                
                                <button onClick={onClick} type='button'>
                                    I have been clicked
                    </button>
                            </div>
                        </OverlayView>

                        <InfoWindow position={INFO_WINDOW_POSITION}>
                            <div style={infoWindowStyle}>
                                <h1>InfoWindow</h1>
                            </div>
                        </InfoWindow>
                    </GoogleMap>
                </div>
            </div>
        )
    }

    if (loadError) {
        return <div>Map cannot be loaded right now, sorry.</div>
    }

    return isLoaded ? renderMap() : null

}

export default MapAll;