import React from "react"
import GoogleMapReact from "google-map-react"
import {AiFillCar} from "react-icons/ai"
import {HiLocationMarker} from "react-icons/hi"
import axios from "axios"
import "./Map.css"


const Map = () => {

    
    const center = {lat: 40.204220, lng: -74.010520}
    const zoom = 15

    // const searchLocation = async () => {
    //     await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=24%20Sussex%20Drive%20Ottawa%20ON&key=${APIKEY}`)
    //     .then(res => console.log(res.data.results[0].geometry.location))
    // }

    return (
        <div className="map-container">
            <GoogleMapReact
          // bootstrapURLKeys={{ key: APIKEY}}
          defaultCenter={center}
          defaultZoom={zoom}
        >
          <HiLocationMarker
            className="office-location"
            lat={40.204220}
            lng={-74.010520}
          />
          <AiFillCar
          className="car-icon busy"
            lat={40.214220}
            lng={-74.010520}
          />

        <AiFillCar
          className="car-icon available"
            lat={40.209220}
            lng={-74.010520}
          />

        <AiFillCar
          className="car-icon busy"
            lat={40.204220}
            lng={-74.016520}
          />

        <AiFillCar
          className="car-icon available"
            lat={40.204220}
            lng={-74.018520}
          />

        <AiFillCar
          className="car-icon available"
            lat={40.200320}
            lng={-74.010520}
          />
        </GoogleMapReact>
        </div>
    )
}

export default Map