import React from "react";
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import './MapPage.css';

export interface MapPagesProps {}

const MapPage = () => {

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "suaChaveGoogle"
    })

    const position = {
        lat: -6.838972,
        lng: -45.404611,
    }

    return <div className="map">
        {isLoaded ? (
            <GoogleMap
                mapContainerStyle={{width: '100%', height: '100%'}}
                center={position}
                zoom={15}
            >
                    <Marker position={position} options={{
                    label: {
                    text: "Posição Indicada",
                    className: "map-marker"
                        },
                    }}
                />
            </GoogleMap>
        ) : <></>
        }
    </div>

}

export default MapPage
