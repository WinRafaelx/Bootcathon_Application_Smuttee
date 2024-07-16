import React, { useState } from "react";
import NavBar from "../components/NavBar";
import axios from "axios";

export default function ChatPage() {
  const [inputValue, setInputValue] = useState("");
  const [chatLog, setChatLog] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    setChatLog((prevChatLog) => [
      ...prevChatLog,
      { type: "user", message: inputValue },
    ]);

    sendMessage(inputValue);

    setInputValue("");
  };

  const sendMessage = (message) => {
   // function here
  };
  return (
    <>
      <NavBar />
      <div className="flex flex-col w-full h-screen bg-[#f3f8ff] items-center">
        <h1 className="mt-10 font-bold text-3xl">
          วิเคราะห์ปัญหาของรถคุณด้วย AI
        </h1>
        <div className="container mx-auto ">
          <div className="flex flex-col h-[600px]">
            <div className="flex-grow p-6">
              <div className="flex flex-col space-y-4">
                {chatLog.map((message, index) => (
                  <div
                    key={index}
                    className={`flex ${
                      message.type === "user" ? "justify-end" : "justify-start"
                    }`}
                  >
                    <div
                      className={`${
                        message.type === "user"
                          ? "bg-[#ccdffa]"
                          : "bg-white border-4 border-gray-600"
                      } rounded-lg p-4 text-black max-w-sm`}
                    >
                      {message.message}
                    </div>
                  </div>
                ))}
                {isLoading && (
                  <div key={chatLog.length} className="flex justify-start">
                    <div className="bg-white border-4 border-gray-600 rounded-lg p-4 max-w-sm">
                      <span className="loading loading-dots loading-sm"></span>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <form onSubmit={handleSubmit} className="flex-none p-6">
              <div className="flex flex-row justify-between items-center space-x-5">
                <input
                  type="text"
                  className="input input-bordered input-primary w-full "
                  placeholder="สอบถามปัญหาเพิ่มเติม"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                />
                <button type="submit" className="btn btn-primary">
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
