import React from 'react';
import { HashRouter, Routes, Route, Outlet } from "react-router-dom";
import Login from './module/Login/Login';
import Dashboard from './module/Dashboard/Dashboard'
import ResetPass from './module/ResetPass/ResetPass';
function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/Reset" element={<ResetPass/>}></Route>
        <Route path="/Home" element={<div><Outlet/></div>}>
          <Route path="Dashboard" element={<Dashboard />}></Route>
        </Route>
      </Routes>
    </HashRouter>

  );
}

export default App;
