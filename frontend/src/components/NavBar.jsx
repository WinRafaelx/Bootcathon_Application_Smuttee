import React from "react";

export default function NavBar() {
  return (
    <>
      <div className="navbar bg-base-100 border-b-4 border-[#6496df]">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl" href="/">Mobil Support</a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a href="/">หน้าแรก</a>
            </li>
            <li>
              <a href="chat">ถามปัญหา</a>
            </li>
            <li>
              <a href="service">จองบริการ</a>
            </li>
            <li>
              <a href="">จุดบริการใกล้ฉัน</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
