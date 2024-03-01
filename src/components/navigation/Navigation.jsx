import React from "react";
import { Link, Outlet } from "react-router-dom";
import './Navigation.css'


export default function Navigation(){


    return(
        <>
            <div>
                <ul>
                    <li><Link to="/">Register</Link></li>
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/user">Profile</Link></li>
                </ul>
            </div>
            <Outlet/>
        </>
    )
}