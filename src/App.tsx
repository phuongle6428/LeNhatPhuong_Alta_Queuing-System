import React from 'react';
import { HashRouter, Routes, Route, Outlet } from "react-router-dom";
import Login from './module/Login/Login';
import Dashboard from './module/Dashboard/Dashboard'
import ResetPass from './module/ResetPass/ResetPass';
import MenuOutlet from './routeoutlets/MenuOutlet';
import Device from './module/Device/Device';
import UserProfile from './module/UserProfile/UserProfile';
import DeviceAdd from './module/Device/Pages/DeviceAdd/DeviceAdd';
import DeviceDetail from './module/Device/Pages/DeviceDetail/DeviceDetail';
import DeviceUpdate from './module/Device/Pages/DeviceUpdate/DeviceUpdate';
function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/Reset" element={<ResetPass />}></Route>
        <Route element={<MenuOutlet />}>
          <Route path="Dashboard" element={<Dashboard />}></Route>
          <Route path="Device" element={<Device />}>
            {/* <Route path="DeviceAdd" element={<DeviceAdd />}></Route>
            <Route path="DeviceDetail/:ProductID" element={<DeviceDetail />}></Route>
            <Route path="DeviceUpdate/:ProductID" element={<DeviceUpdate />}></Route> */}
          </Route>
          <Route path="Device/DeviceAdd" element={<DeviceAdd />}></Route>
          <Route path="Device/DeviceDetail/:ProductID" element={<DeviceDetail />}></Route>
          <Route path="Device/DeviceUpdate/:ProductID" element={<DeviceUpdate />}></Route>
          <Route path="UserProfile" element={<UserProfile />}></Route>
        </Route>
      </Routes>
    </HashRouter>

  );
}

export default App;
