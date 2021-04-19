import React from "react"
import {FaBars} from "react-icons/fa"
import "./AdminDashboard.css"

const AdminDashboard = () => {

    return (
        <div>
           <div class="topnav" id="myTopnav">
                <a href="#home" class="active">Home</a>
                <a href="#news">New Trip</a>
                <a href="#contact">New Driver</a>
                <a href="#about">Logout</a>
                <FaBars className="min-menu" />
            </div>
        </div>
    )
}

export default AdminDashboard