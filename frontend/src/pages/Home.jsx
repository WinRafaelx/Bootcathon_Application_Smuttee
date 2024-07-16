import React from "react";
import NavBar from "../components/NavBar";

export default function Home() {
  const handleSubmit = (e) => {
    e.preventDefault();
  }
  return (
    <>
      <NavBar />
      <div className="flex flex-col w-full h-screen bg-[#f3f8ff] items-center">
        <div className="flex flex-col w-[500px] bg-white rounded-lg shadow-lg p-4 my-10 space-y-4 items-center">
          <h3 className="font-bold text-xl">วิเคราะห์ปัญหาของรถคุณด้วย AI</h3>
          <form onSubmit={handleSubmit} className="flex flex-col w-full space-y-4 items-center">
            <input
              type="text"
              placeholder="พิมพ์ปัญหาของคุณ"
              className="input input-bordered w-[80%]"
            />
            <button className="btn btn-primary">วิเคราะห์ปัญหา</button>
          </form>
        </div>
        <div
          className="hero h-[300px] bg-cover bg-center"
          style={{
            backgroundImage:
              "url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)",
          }}
        >
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-neutral-content text-center">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold">Mobil support</h1>
              <button className="btn btn-primary">ค้นหาจุดบริการใกล้ฉัน</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
