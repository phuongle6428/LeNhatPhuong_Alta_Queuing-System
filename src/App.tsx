import React from 'react';
import { HashRouter, Routes, Route, Outlet } from "react-router-dom";
import Login from './module/Login/Login';
import Dashboard from './module/Dashboard/Dashboard'
import ResetPass from './module/ResetPass/ResetPass';
import MenuOutlet from './routeoutlets/MenuOutlet';
import Device from './module/Device/Device';
import UserProfile from './module/UserProfile/UserProfile';
function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/Reset" element={<ResetPass/>}></Route>
        <Route element={<MenuOutlet/>}>
          <Route path="Dashboard" element={<Dashboard />}></Route>
          <Route path="Device"element={<Device/>}></Route>
          <Route path="UserProfile"element={<UserProfile/>}></Route>
        </Route>
      </Routes>
    </HashRouter>

  );
}

export default App;
