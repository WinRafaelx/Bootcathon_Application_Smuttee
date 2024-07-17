import React from "react";
import MultiStepForm from "../../components/service/MultiStepForm";
import NavBar from "../../components/NavBar";

export default function ServicePage() {
  return (
    <>
      <NavBar />
      <div className="bg-[#f3f8ff] min-h-screen p-4">
        <MultiStepForm />
      </div>
    </>
  );
}
