import React from "react"
import GoogleMapReact from "google-map-react"
import {AiFillCar} from "react-icons/ai"
import "./Map.css"


const Map = () => {

    const APIKEY = "AIzaSyCm0pAbt_pPb9NQ6EM1zX93njP9tUbBbu8"
    const AnyReactComponent = ({ text }) => <div>{text}</div>;
    const center = {lat: 39.9946558, lng: -75.1543919}
    const zoom = 11

    return (
        <div className="map-container">
            <GoogleMapReact
          bootstrapURLKeys={{ key: APIKEY}}
          defaultCenter={center}
          defaultZoom={zoom}
        >
          <AiFillCar
          className="car-icon busy"
            lat={39.965413}
            lng={-75.337844}
          />

        <AiFillCar
          className="car-icon available"
            lat={39.955413}
            lng={-75.337844}
          />

        <AiFillCar
          className="car-icon busy"
            lat={39.975413}
            lng={-75.336844}
          />

        <AiFillCar
          className="car-icon available"
            lat={39.955413}
            lng={-75.333844}
          />

        <AiFillCar
          className="car-icon available"
            lat={39.955413}
            lng={-75.374844}
          />
        </GoogleMapReact>
        </div>
    )
}

export default Map