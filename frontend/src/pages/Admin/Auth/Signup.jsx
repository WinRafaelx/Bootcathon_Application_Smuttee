import React from "react";
import axios from "axios";

export default function Signup() {
  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const username = data.get("username");
    const password = data.get("password");
    const workshop_name = data.get("workshopName");
    const address = data.get("address");
    const jsonData = {
      username,
      password,
      workshop_name,
      address,
    };

    alert("Registration Successful");

    try {
      const response = await axios.post("http://localhost:8000/api/workshop_admin/register", jsonData);;
      if(response.status === 201){
        window.location.href = "/admin/login";
      }
    } catch (error) {
      console.error("Failed to register", error);
    }
  };
  return (
    <div className="flex h-screen flex-col justify-center content-center items-center px-6 py-12 ">
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <form className="card-body" onSubmit={handleSubmit}>
      <h2 className="text-3xl font-bold text-center">ลงทะเบียน</h2>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Username</span>
          </label>
          <input
          name="username"
            type="text"
            placeholder="username"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
          name="password"
            type="password"
            placeholder="password"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Workshop Name</span>
          </label>
          <input
          name="workshopName"
            type="text"
            placeholder="workshop name"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Address</span>
          </label>
          <input
          name="address"
            type="text"
            placeholder="address"
            className="input input-bordered"
            required
          />
           <label className="label">
            <a href="/admin/login" className="label-text-alt link link-hover underline">
              เข้าสู่ระบบ
            </a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary" type="submit" >ลงทะเบียน</button>
        </div>
      </form>
    </div>
</div>
  );
}
