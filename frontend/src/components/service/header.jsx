function Header() {
    return (
        <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-2 flex justify-between items-center">
            <div className="text-blue-700 font-bold text-xl">
            <span className="text-red-600">o</span> Mobil Support
            </div>
            <nav className="flex space-x-4">
            <a href="/" className="text-blue-700 hover:underline">หน้าแรก</a>
            <a href="/faq" className="text-black hover:underline">ถามปัญหา</a>
            <a href="/services" className="text-black hover:underline">จองบริการ</a>
            <a href="/status" className="text-black hover:underline">เช็คสถานะ</a>
            <a href="/locations" className="text-black hover:underline">จุดบริการใกล้ฉัน</a>
            </nav>
        </div>
    </header>
    );
}

export default Header;
