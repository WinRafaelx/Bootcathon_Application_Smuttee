import React from "react";
import { useFormContext } from "../../context/FormContext";
import { workshop } from "../../constants/workshopLocation";


export default function DateandLocation() {
  const { formData, handleChange, nextStep, prevStep } = useFormContext();

  const handleClick = (workshop) => {
    handleChange("workshop_id")({ target: { value: workshop.workshop_id } });
  };

  return (
    <div className="flex flex-col p-4">
      <div className="flex w-full bg-white rounded-lg shadow-lg">
        <div className="w-1/3 p-4 flex flex-row items-center space-x-4">
          <span>บริการ</span>
          <input
            type="text"
            placeholder={formData.service}
            className="input input-bordered w-full max-w-xs"
            disabled
          />
        </div>
        <div className="divider divider-horizontal"></div>
        <div className="w-1/3 p-4 flex flex-row items-center space-x-4">
          <span className="text-nowrap">วันที่เข้ารับบริการ</span>
          <input
            type="datetime-local"
            className="input input-bordered w-full"
            value={formData.reserved_datetime}
            onChange={handleChange("reserved_datetime")}
          />
        </div>
        <div className="divider divider-horizontal"></div>
        <div className="w-1/3 p-4 flex flex-row items-center space-x-4">
          <span className="text-nowrap">ตำแหน่งของคุณ</span>
          <input
            type="text"
            className="input input-bordered w-full"
            placeholder="Enter your location"
            value={formData.location}
            onChange={handleChange("location")}
          />
        </div>
      </div>
      <div className="mx-40 my-10">
        <h1 className="text-3xl font-bold ">เลือกศูนย์บริการใกล้คุณ</h1>
        <h3 className="text-xl">ศูนย์บริการบริเวณใกล้คุณ</h3>
      </div>
      <div className="mx-40">
        {workshop.map((workshop) => (
          <div
            key={workshop.workshop_id}
            className={`grid grid-cols-5 w-full rounded-lg shadow-lg mb-4 cursor-pointer  ${
              formData.workshop_id === workshop.workshop_id
                ? "bg-primary text-white"
                : "bg-white"
            } `}
            onClick={() => handleClick(workshop)}
          >
            <div className="col-span-2 m-4">
              <div className="text-xl font-bold underline">{workshop.company}</div>
              <div>{workshop.location}</div>
            </div>
            <div className="col-span-2 m-4">
              <div>เบอร์โทรศัพท์ {workshop.phone}</div>
              <div>{workshop.openTime}</div>
              <div>{workshop.openDays}</div>
            </div>
            <div className="col-span-1 m-4 text-center text-2xl text-green-500 content-center">
              {workshop.status}
            </div>
          </div>
        ))}
      </div>
      <div className="flex m-4 justify-center">
        <button onClick={prevStep} className="btn">
          Back
        </button>
        <button onClick={nextStep} className="btn btn-primary btn-wide">
          Next
        </button>
      </div>
    </div>
  );
}
