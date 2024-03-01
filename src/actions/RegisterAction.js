import Dispatcher from "../dispatcher/Dispatcher";

export function createUser(userName, password){
    Dispatcher.dispatch(
        {
            type: "create_user",
            userName, password
        }
    )
}