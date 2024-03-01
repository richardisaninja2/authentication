import React from "react";
import { useNavigate } from "react-router-dom";

export default function Home(props){

    const logout = (e) => {
        e.preventDefault();
        props.setLoginStatus(false);
    }
    return(
        <>
            <h1>Welcome: {props.username}</h1>
            <button onClick={(e) => logout(e)}>Logout</button>
        </>
    )
}