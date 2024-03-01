import { Component } from "react";
import registerStore  from "../store/RegisterStore";
import EventEmitter from "events";
import Dispatcher from "../dispatcher/Dispatcher";



export class LoginStore extends EventEmitter{
    constructor(){
        super();
        this.state = {
            users: registerStore.getUsers(),
            loginState: false,
            name: ""
        }
        this.login = this.login.bind(this)
    }

    login = (username, password) =>{
        let login = false;
        let usersName = "";
        this.state.users.forEach(function(item){
            if(item.username == username && item.password == password){
                login = true;
                usersName = username
                // return true;
            }
        })
        // this.setState({loginState: login})
        this.state.loginState = login;
        this.state.name = usersName;
        this.getLoginStatus();
        // this.emit("stateChanged")
        // console.log(this.state.loginState)
    }

    getLoginStatus(){
        // console.log(this.state.loginState)
        return this.state.loginState;
    }
    getUserName(){
        return this.state.name
    }

    handleActions(action){
        switch(action.type){
            case "login":{
                this.login(action.userName, action.password);
                break;
            }
        }
    }
}

const loginStore = new LoginStore();
Dispatcher.register(loginStore.handleActions.bind(loginStore));
export default loginStore;