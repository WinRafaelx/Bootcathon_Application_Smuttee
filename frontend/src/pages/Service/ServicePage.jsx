import React from 'react';
import ServiceCard from '../../components/service/ServiceCard.jsx';
import Header from '../../components/service/header.jsx';

const services = [
  {
    image: 'https://fastly.picsum.photos/id/915/200/300.jpg?hmac=dzVwmjYlIh3MdKz2l08oFpp1y3XxMyu_1vjGp5Dycd0',
    title: 'เปลี่ยนถ่ายน้ำมันเครื่อง',
  },
  {
    image: 'https://fastly.picsum.photos/id/915/200/300.jpg?hmac=dzVwmjYlIh3MdKz2l08oFpp1y3XxMyu_1vjGp5Dycd0',
    title: 'ตรวจเช็คสภาพรถยนต์',
  },
  {
    image: 'https://fastly.picsum.photos/id/915/200/300.jpg?hmac=dzVwmjYlIh3MdKz2l08oFpp1y3XxMyu_1vjGp5Dycd0',
    title: 'อื่นๆ',
  },
];


export default function ServicePage() {
  return (
    <div className="bg-gray-100 min-h-screen p-4">
      <Header />
      <header className="text-center mb-6">
        <h1 className="text-3xl font-bold">Mobil Support</h1>
      </header>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {services.map((service, index) => (
          <ServiceCard image={service.image} title={service.title} />
        ))}
      </div>
      <div className="text-center mt-6">
        <button className="bg-blue-500 text-white py-2 px-4 rounded">ถัดไป</button>
      </div>
    </div>
  );
}