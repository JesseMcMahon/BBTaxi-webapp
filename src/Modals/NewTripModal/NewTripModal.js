import React, { useState } from "react"
import {AiOutlineClose} from "react-icons/ai"
import "./NewTripModal.css"
import axios from "axios"

const NewTripModal = () => {


    const [streetAddress, setStreetAddress] = useState('')
    const [city, setCity] = useState('')
    const [state, setState] = useState('')
    const [customerName, setCustomerName] = useState('')
    const [customerPhone, setCustomerPhone] = useState('')
    const [newTripCoordinates, setNewTripCoordinates] = useState([])
    
    const closeNewTripModal = () => {
        const newTripModal = document.getElementById("new-trip")
        newTripModal.classList.remove("display-block")
        const clearTripForm = document.getElementById("new-trip-form").reset()
    }

  
        const searchLocation = async (e) => {
            e.preventDefault()
            await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${streetAddress}${city}${state}&key=${APIKEY}`)
            .then(res => setNewTripCoordinates(res.data.results[0].geometry.location))
            .then( console.log(streetAddress, city, state, customerName, customerPhone, newTripCoordinates))
            .then(closeNewTripModal())
       
    }

    return (
<>
        <div id="new-trip" className="new-trip-modal">
        <div className="new-trip-modal-content">
        <AiOutlineClose onClick={closeNewTripModal} className="close-modal" />
            <h1>Enter new Trip Here</h1>
            <form id="new-trip-form" onSubmit={(e) => searchLocation(e)}>
            <input className="new-trip-input" type="text" placeholder="Street Address" onChange={(e) => setStreetAddress(e.target.value)} />
            <input className="new-trip-input" type="text" placeholder="City" onChange={(e) => setCity(e.target.value)} />
            <input className="new-trip-input" type="text" placeholder="State" onChange={(e) => setState(e.target.value)} />
            <input className="new-trip-input" type="text" placeholder="Customer Name" onChange={(e) => setCustomerName(e.target.value)} />
            <input className="new-trip-input" type="text" placeholder="Customer Phone" onChange={(e) => setCustomerPhone(e.target.value)} />
            <input className="create-trip-btn" type="submit" value="Create Trip" />
            </form>
        </div>
    </div>
    </>
    )
}

export default NewTripModal