import React from 'react'
import Login from "../pages/Login";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { Toaster } from "react-hot-toast";
 import Home from "../pages/Home";

 import Register from "../pages/Register";

const App = () => {
  return (
    <>
      <Router>
        <Toaster />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Navigate to="/login" replace />} />
           <Route path="/register" element={<Register />} /> 
          <Route path="/home" element={<Home />} /> 
        </Routes>
      </Router>
    </>
  );
}

export default App