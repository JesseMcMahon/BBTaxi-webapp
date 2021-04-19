import React from "react"
import "./AdminDashboard.css"
import NewTripModal from "./Modals/NewTripModal/NewTripModal.js"
import NewDriverModal from "./Modals/NewDriverModal/NewDriverModal.js"
import {FaBars} from "react-icons/fa"

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
                <a href="#home" class="active">Home</a>
                <a href="#newTrip" onClick={openNewTripModal}>New Trip</a>
                <a href="#contact" onClick={openNewDriverModal}>New Driver</a>
                <a href="#about">Logout</a>
                <FaBars className="min-menu" />
            </div>

            <NewTripModal />
            <NewDriverModal />
        </div>
    )
}

export default AdminDashboard