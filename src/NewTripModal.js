import React, { useState } from "react"
import {AiOutlineClose} from "react-icons/ai"
import {FaBars} from "react-icons/fa"

const NewTripModal = () => {

    const [streetAddress, setStreetAddress] = useState('')
    const [city, setCity] = useState('')
    const [state, setState] = useState('')
    const [zipCode, setZipCode] = useState('')
    const [customerName, setCustomerName] = useState('')
    const [customerPhone, setCustomerPhone] = useState('')

    const openNewTripModal = () => {
        const newTripModal = document.getElementById("new-trip")
        newTripModal.classList.add("display-block")
    }
    
    const closeNewTripModal = () => {
        const newTripModal = document.getElementById("new-trip")
        newTripModal.classList.remove("display-block")
    }

    const sendNewTripRequest = (e) => {
        e.preventDefault()
        
        console.log(streetAddress, city, state, zipCode, customerName, customerPhone)
    }

    return (
<>
        <div class="topnav" id="myTopnav">
                <a href="#home" class="active">Home</a>
                <a href="#newTrip" onClick={openNewTripModal}>New Trip</a>
                <a href="#contact">New Driver</a>
                <a href="#about">Logout</a>
                <FaBars className="min-menu" />
            </div>

        <div id="new-trip" className="new-trip-modal">
        <div className="new-trip-modal-content">
        <AiOutlineClose onClick={closeNewTripModal} className="close-modal" />
            <h1>Enter new Trip Here</h1>
            <input className="new-trip-input" type="text" placeholder="Street Address" onChange={(e) => setStreetAddress(e.target.value)} />
            <input className="new-trip-input" type="text" placeholder="City" onChange={(e) => setCity(e.target.value)} />
            <input className="new-trip-input" type="text" placeholder="State" onChange={(e) => setState(e.target.value)} />
            <input className="new-trip-input" type="text" placeholder="Zip Code" onChange={(e) => setZipCode(e.target.value)} />
            <input className="new-trip-input" type="text" placeholder="Customer Name" onChange={(e) => setCustomerName(e.target.value)} />
            <input className="new-trip-input" type="text" placeholder="Customer Phone" onChange={(e) => setCustomerPhone(e.target.value)} />
            <input className="create-trip-btn" type="submit" value="Create Trip" onClick={(e) => sendNewTripRequest(e)} />
        </div>
    </div>
    </>
    )
}

export default NewTripModal