import React, { useState } from 'react';
import { 
  Code, 
  Home, 
  User, 
  FolderKanban, 
  Mail, 
  BookOpen, 
  Menu, 
  X 
} from 'lucide-react';

const Navbar = () => {
  // สร้าง state สำหรับเปิด/ปิดเมนูมือถือ
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // สร้างข้อมูลเมนูเพื่อใช้ .map พร้อมไอคอน
  const menuItems = [
    { id: 1, name: 'Home', href: '#home', icon: <Home size={18} /> },
    { id: 2, name: 'About', href: '#about', icon: <User size={18} /> },
    { id: 3, name: 'Projects', href: '#projects', icon: <FolderKanban size={18} /> },
    { id: 4, name: 'Contact', href: '#contact', icon: <Mail size={18} /> },
  ];

  // ฟังก์ชันสำหรับสลับสถานะเมนูมือถือ
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-green-700 text-white shadow-lg">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* โลโก้ */}
        <div className="text-2xl font-bold flex items-center space-x-2">
          <Code size={32} className="text-blue-300" />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-200 to-purple-200">
            My Portfolio
          </span>
        </div>

        {/* เมนูสำหรับหน้าจอขนาดกลางขึ้นไป ใช้ .map */}
        <ul className="hidden md:flex space-x-8">
          {menuItems.map((item) => (
            <li key={item.id}>
              <a 
                href={item.href} 
                className="hover:text-blue-300 transition duration-300 relative group flex items-center space-x-1"
              >
                {item.icon}
                <span>{item.name}</span>
                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-blue-300 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </a>
            </li>
          ))}
        </ul>

        {/* ปุ่มเมนูมือถือ */}
        <button 
          className="md:hidden text-gray-200 focus:outline-none p-2 rounded hover:bg-blue-800 transition"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* เมนูมือถือที่จะแสดงเมื่อกดปุ่ม */}
      {isMenuOpen && (
        <div className="md:hidden px-4 py-3 bg-gradient-to-r from-blue-800 to-purple-800 transition duration-300 ease-in-out">
          <ul className="flex flex-col space-y-3">
            {menuItems.map((item) => (
              <li key={item.id} className="border-b border-blue-700 pb-2">
                <a 
                  href={item.href} 
                  className="block hover:text-blue-300 transition duration-300 flex items-center space-x-3"
                  onClick={toggleMenu}
                >
                  {item.icon}
                  <span>{item.name}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;