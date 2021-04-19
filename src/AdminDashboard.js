import React from "react"
import "./AdminDashboard.css"
import NewTripModal from "./Modals/NewTripModal/NewTripModal.js"
import NewDriverModal from "./Modals/NewDriverModal/NewDriverModal.js"
import {FaBars} from "react-icons/fa"
import Map from "./Map/Map"

const AdminDashboard = () => {

    const openNewTripModal = () => {
        const newTripModal = document.getElementById("new-trip")
        newTripModal.classList.add("display-block")
    }

    const openNewDriverModal = () => {
        const newDriverModal = document.getElementById("new-driver")
        newDriverModal.classList.add("display-block")
    }

    return (
        <div>

            <div class="topnav" id="myTopnav">
                <h3 className="active">Home</h3>
                <h3 onClick={openNewTripModal}>New Trip</h3>
                <h3 onClick={openNewDriverModal}>New Driver</h3>
                <h3>Logout</h3>
                <FaBars className="min-menu" />
            </div>
            <Map />

            <NewTripModal />
            <NewDriverModal />
        </div>
    )
}

export default AdminDashboard