import React from "react";
import NavBar from "../../components/NavBar";
import { useNavigate } from "react-router-dom";

export default function CompleteService() {
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    navigate("/");
  }
  return (
    <>
      <NavBar />
      <div className="flex flex-col w-full h-screen bg-[#f3f8ff] items-center">
        <h2 className="text-3xl text-center font-bold my-4">จองบริการเสร็จสิ้น</h2>
        <div className="mx-40">
          <div className="flex flex-col w-full bg-white rounded-lg shadow-lg p-4">
            <div className="mb-4">
              <h3 className="font-bold">ขอบคุณที่ใช้บริการ</h3>
              <p>เราจะส่งรายละเอียดไปทางอีเมล หรือ sms</p>
            </div>
            <button className="btn btn-primary btn-wide" onClick={handleSubmit}>กลับสู่หน้าแรก</button>
          </div>
        </div>
      </div>
    </>
  );
}
