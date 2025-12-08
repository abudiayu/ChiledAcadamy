import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./component/login.jsx";
import Signup from "./component/signup.jsx";
import Dashboard from "./component/Dashboard.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}

export default App;
