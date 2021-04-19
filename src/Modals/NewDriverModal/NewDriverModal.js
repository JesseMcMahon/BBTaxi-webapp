import React, { useState } from "react"
import {AiOutlineClose} from "react-icons/ai"
import "./NewDriverModal.css"

const NewDriverModal = () => {

    const [driverName, setDriverName] = useState('')
    const [driverPhone, setDriverPhone] = useState('')
    
    const closeNewDriverModal = () => {
        const newDriverModal = document.getElementById("new-driver")
        newDriverModal.classList.remove("display-block")
    }

    const sendNewDriverRequest = (e) => {
        e.preventDefault()
        
        console.log(driverName, driverPhone)
    }

    return (
<>

        <div id="new-driver" className="new-driver-modal">
        <div className="new-driver-modal-content">
        <AiOutlineClose onClick={closeNewDriverModal} className="close-modal" />
            <h1>Enter new driver Here</h1>
            <input className="new-driver-input" type="text" placeholder="Driver Name" onChange={(e) => setDriverName(e.target.value)} />
            <input className="new-driver-input" type="text" placeholder="Driver Phone" onChange={(e) => setDriverPhone(e.target.value)} />
            <input className="create-driver-btn" type="submit" value="Create Driver" onClick={(e) => sendNewDriverRequest(e)} />
        </div>
    </div>
    </>
    )
}

export default NewDriverModal