import React, { Component, createRef, useRef, useState } from "react";
import * as registerActions from '../actions/RegisterAction'
import registerStore  from "../store/RegisterStore";
import Login from "./Login";
import { Navigate, redirect, useNavigate, withRouter  } from "react-router-dom";

export default function Register(){
    const[users, setUsers] = useState(registerStore.getUsers())
        let usernameRef = useRef();
        let passwordRef= useRef();
    const navigate = useNavigate();
    // constructor(){
    //     super();
    //     this.state={
    //         users: registerStore.getUsers()
    //     }

        
    // }
    
    const getUsers = ()=>{
        setUsers(registerStore.getUsers())
    }

    const createUser = (e)=>{
        e.preventDefault();
        registerActions.createUser(usernameRef.current.value, passwordRef.current.value)
        console.log(users)
        // console.log(this.usernameRef.current.value)
        alert("thanks for registering... please sign in")
        navigate('/login')
    }

        
        return(
            <>
                <h1>Register a user</h1>
                <input type="text" placeholder="username" ref={usernameRef}></input>
                <input type="password" placeholder="password" ref={passwordRef}></input>
                <button onClick={(e) => createUser(e)}>Create User</button>

            </>
        )
    
}