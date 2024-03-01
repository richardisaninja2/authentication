import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from './components/Register';
import Home from './components/Home';
import Login from './components/Login';
import loginStore from '../src/store/LoginStore'
import NotLoggedIn from './components/NotLoggedIn';
import { useEffect, useState } from 'react';
import Navigation from './components/navigation/Navigation';

function App() {
  // const loginStatus =  loginStore.getLoginStatus();
    //  console.log(loginStatus)
     const[loginStatus, setLoginStatus] = useState(loginStore.getLoginStatus())
     const[username, setUsername] = useState("");

    useEffect(() => {
      console.log(loginStatus)
    },[loginStatus]) 
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navigation/>}>
          <Route index element={<Register/>}/>
          <Route path="register"  element={<Register/>}/>
          <Route path="login" element={<Login setLoginStatus={setLoginStatus} loginStatus={loginStatus} setUsername={setUsername}/>} />
          <Route path="user" element={loginStatus == true ? <Home username={username} setLoginStatus={setLoginStatus}/> : <NotLoggedIn/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
