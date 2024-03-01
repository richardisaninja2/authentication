import React, { Component, createRef, useRef, useState } from "react";
import * as registerActions from '../actions/RegisterAction'
import * as loginActions from '../actions/LoginAction'
import registerStore  from "../store/RegisterStore";
import loginStore from '../store/LoginStore'
import { useNavigate } from "react-router-dom";

export default function Login(props){
    const[users, setUsers] = useState(registerStore.getUsers())
    let usernameRef = useRef();
    let passwordRef= useRef();
    const navigate = useNavigate();

    // constructor(){
    //     super();
    //     this.state = {
    //         users: registerStore.getUsers(),
    //     }


    //     this.usernameRef = createRef();
    //     this.passwordRef = createRef();
    // }

    const login = () =>{
        loginActions.login(usernameRef.current.value, passwordRef.current.value)
        // console.log(loginStore.getLoginStatus)
        // console.log(loginStore.getLoginStatus ());
        props.setLoginStatus(loginStore.getLoginStatus())
        props.setUsername(loginStore.getUserName())
        console.log(props.loginStatus)
        console.log(users)
        navigate('/user')
    }

    
        return(
            <>
                <h1>Login</h1>
                <input type="text" placeholder="username" ref={usernameRef}></input>
                <input type="password" placeholder="username" ref={passwordRef}></input>
                <button onClick={() => login()}>Create User</button>
            </>
        )
    


}