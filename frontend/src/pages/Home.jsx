import React from "react";
import NavBar from "../components/NavBar";
import { useChat } from "../context/ChatContext";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const { message, handleChange, setInitialChatMessage } = useChat();
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    setInitialChatMessage(message);
    navigate("/chat");
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
              value={message}
              onChange={handleChange}
            />
            <button className="btn btn-primary">วิเคราะห์ปัญหา</button>
          </form>
        </div>
        <div
          className="hero h-[300px] bg-cover bg-center"
          style={{
            backgroundImage:
              "url(https://avatars.mds.yandex.net/get-altay/1938975/2a00000171ec985aa76081aac0b7642e1d47/orig)",
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
