import React, { useState } from "react"
import {AiOutlineClose} from "react-icons/ai"
import "./NewDriverModal.css"
import Axios from 'axios'

const NewDriverModal = () => {

    const [phoneNum, setPhoneNum] = useState('')
    const [lastName, setLastName] = useState('')
    const [firstName, setFirstName] = useState('')
    const [email, setEmail] = useState('')
    const [birthdate, setBirthdate] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirmation, setPasswordConfirmation] = useState('')
    const [licenseNumber, setLicenseNumber] = useState('')
    const [expirationDate, setExpirationDate] = useState('')

    const closeNewDriverModal = () => {
        const newDriverModal = document.getElementById("new-driver")
        newDriverModal.classList.remove("display-block")
    }

    const sendNewDriverRequest = (e) => {
        e.preventDefault()
        const driver = {first_name: firstName, last_name: lastName, phone_number: phoneNum, email, birthdate, password, password_confirmation: passwordConfirmation, license_number: licenseNumber, expiration_date: expirationDate}
        console.log(driver)
        Axios.post('http://localhost:3001/api/v1/drivers', driver)
        .then(resp => console.log(resp))
    }

    return (
<>

        <div id="new-driver" className="new-driver-modal">
        <div className="new-driver-modal-content">
        <AiOutlineClose onClick={closeNewDriverModal} className="close-modal" />
            <h1>Enter new driver Here</h1>
            <input className="new-driver-input" type="text" placeholder="First Name" onChange={(e) => setFirstName(e.target.value)} />
            <input className="new-driver-input" type="text" placeholder="Last Name" onChange={(e) => setLastName(e.target.value)} />
            <input className="new-driver-input" type="text" placeholder="Driver Phone" onChange={(e) => setPhoneNum(e.target.value)} />
            <input className="new-driver-input" type="text" placeholder="Driver Email" onChange={(e) => setEmail(e.target.value)} />
            <input className="new-driver-input" type="text" placeholder="Driver Birthdate" onChange={(e) => setBirthdate(e.target.value)} />
            <input className="new-driver-input" type="text" placeholder="Driver License #" onChange={(e) => setLicenseNumber(e.target.value)} />
            <input className="new-driver-input" type="text" placeholder="License Expiration Date" onChange={(e) => setExpirationDate(e.target.value)} />
            <input className="new-driver-input" type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
            <input className="new-driver-input" type="password" placeholder="Confirm Password" onChange={(e) => setPasswordConfirmation(e.target.value)} />
            <input className="create-driver-btn" type="submit" value="Create Driver" onClick={(e) => sendNewDriverRequest(e)} />
        </div>
    </div>
    </>
    )
}

export default NewDriverModal