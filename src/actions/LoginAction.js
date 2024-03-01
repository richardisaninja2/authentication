import Dispatcher from "../dispatcher/Dispatcher";

export function login(userName, password){
    Dispatcher.dispatch(
        {
            type: "login",
            userName, password
        }
    )
}