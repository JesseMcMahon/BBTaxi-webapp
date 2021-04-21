import React, { useState } from "react"
import {AiOutlineClose} from "react-icons/ai"
import Axios from "axios"
import "./NewDriverModal.css"

const NewDriverModal = (props) => {

    const [driverFirstName, setDriverFirstName] = useState('')
    const [driverLastName, setDriverLastName] = useState('')
    const [driverPhone, setDriverPhone] = useState('')
    const [driverEmail, setDriverFirstEmail] = useState('')
    const [driverBirthdate, setDriverBirthdate] = useState('')
    const [driverLicenseNumber, setDriverLicenseNumber] = useState('')
    const [driverLicenseExp, setDriverLicenseExp] = useState('')
    
    const closeNewDriverModal = () => {
        const newDriverModal = document.getElementById("new-driver")
        newDriverModal.classList.remove("display-block")
    }

    const sendNewDriverRequest = (e) => {
        e.preventDefault()

            const newDriver = {
                driverFirstName,
                driverLastName,
                driverPhone,
                driverEmail,
                driverBirthdate,
                driverLicenseNumber,
                driverLicenseExp
            }
            Axios.post('http://localhost:3001/api/v1/newDriver', {newDriver})
            .then(resp => {
              if (resp.data.success) {
                localStorage.setItem("token", resp.data.jwt)
                props.handleLogin(resp.data.newDriver)
                // redirect()
              }
              else {
                console.log(resp.data.failure)
              }
             
            })
          
        
        console.log(driverFirstName, driverLastName, driverPhone, driverEmail, driverBirthdate,driverLicenseNumber, driverLicenseExp)
    }

    return (
<>

        <div id="new-driver" className="new-driver-modal">
        <div className="new-driver-modal-content">
        <AiOutlineClose onClick={closeNewDriverModal} className="close-modal" />
            <h1>Enter new driver Here</h1>
            <input className="new-driver-input" type="text" placeholder="Driver First Name" onChange={(e) => setDriverFirstName(e.target.value)} />
            <input className="new-driver-input" type="text" placeholder="Driver Last Name" onChange={(e) => setDriverLastName(e.target.value)} />
            <input className="new-driver-input" type="text" placeholder="Driver Phone" onChange={(e) => setDriverPhone(e.target.value)} />
            <input className="new-driver-input" type="text" placeholder="Driver Email" onChange={(e) => setDriverFirstEmail(e.target.value)} />
            <input className="new-driver-input" type="text" placeholder="Driver Birthdate" onChange={(e) => setDriverBirthdate(e.target.value)} />
            <input className="new-driver-input" type="text" placeholder="Driver License #" onChange={(e) => setDriverLicenseNumber(e.target.value)} />
            <input className="new-driver-input" type="text" placeholder="Driver License Exp." onChange={(e) => setDriverLicenseExp(e.target.value)} />
            <input className="create-driver-btn" type="submit" value="Create Driver" onClick={(e) => sendNewDriverRequest(e)} />
        </div>
    </div>
    </>
    )
}

export default NewDriverModal