import React, { useState } from "react";
import { loginUser } from "../services/authServices.jsx";
import { useNavigate } from "react-router-dom";
import "./login.css"; // <-- import here

const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await loginUser(form);
    setMessage(res.message);
    if (res.status) {
      localStorage.setItem("token", res.token);
      localStorage.setItem("user", JSON.stringify(res.user));
      navigate("/dashboard");
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      {message && <p>{message}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          required
        />
        <button type="submit">Login</button>
        <div>
          <p>
            Don't have an account? <a href="/signup">Sign up</a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
