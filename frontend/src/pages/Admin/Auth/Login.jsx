import React, { useState, useContext } from "react";
import { AuthContext } from "../../../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const { login } = useContext(AuthContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(username, password);
      navigate('/admin');
    } catch (error) {
      console.error('Failed to login', error);
    }
  };

  return (
    <div className="flex h-screen flex-col justify-center content-center items-center px-6 py-12 ">
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form className="card-body" onSubmit={handleSubmit}>
            <h2 className="text-3xl font-bold text-center">เข้าสู่ระบบ</h2>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Username</span>
                </label>
                <input
                  type="text"
                  placeholder="username"
                  className="input input-bordered"
                  required
                  value={username} 
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                  value={password} 
                  onChange={(e) => setPassword(e.target.value)}
                />
                <label className="label">
                  <a href="/admin/signup" className="label-text-alt link link-hover underline">
                    ลงทะเบียนครั้งแรก
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary" type="submit">เข้าสู่ระบบ</button>
              </div>
            </form>
          </div>
    </div>
  );
}
