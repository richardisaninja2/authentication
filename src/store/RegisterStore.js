import EventEmitter from "events";
import Dispatcher from "../dispatcher/Dispatcher";

export class RegisterStore extends EventEmitter {
    constructor(){
        super();
        this.user = [
            {username: 'user', password:'password'}
        ]
    }
    getUsers(){
        return this.user;
    }
    createUser(userName, password){
        let createdUser = {};
        createdUser['username'] = userName;
        createdUser['password'] = password;
        this.user.push(createdUser);
        this.emit("change")
    }
    handleActions(action){
        switch(action.type){
            case "create_user":{
                this.createUser(action.userName, action.password);
                break;
            }
        }
    }

}

const registerStore = new RegisterStore();
Dispatcher.register(registerStore.handleActions.bind(registerStore));
export default registerStore;
