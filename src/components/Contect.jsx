import React from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, MessageCircle } from 'lucide-react';

function Contact() {
  // ข้อมูลติดต่อ - สามารถเพิ่มหรือลดได้ตามต้องการ
  const contactItems = [
    {
      id: 1,
      title: 'อีเมล',
      value: 'your.email@example.com',
      icon: <Mail className="w-8 h-8 text-green-600" />,
      link: 'mailto:your.email@example.com',
      isLink: true
    },
    {
      id: 2,
      title: 'เบอร์โทรศัพท์',
      value: '(+66) 89-XXX-XXXX',
      icon: <Phone className="w-8 h-8 text-green-600" />,
      link: 'tel:+6689XXXXXXX',
      isLink: true
    },
    {
      id: 3,
      title: 'ที่อยู่',
      value: 'Bangkok, Thailand',
      icon: <MapPin className="w-8 h-8 text-green-600" />,
      isLink: false
    },
    {
      id: 4,
      title: 'GitHub',
      value: 'github.com/yourusername',
      icon: <Github className="w-8 h-8 text-green-600" />,
      link: 'https://github.com/KBS17',
      isLink: true
    },
    {
      id: 5,
      title: 'LinkedIn',
      value: 'LinkedIn Profile',
      icon: <Linkedin className="w-8 h-8 text-green-600" />,
      link: 'https://linkedin.com/in/yourusername',
      isLink: true
    },
    {
      id: 6,
      title: 'Line',
      value: '@yourline',
      icon: <MessageCircle className="w-8 h-8 text-green-600" />,
      isLink: false
    }
  ];

  // ฟังก์ชั่นสำหรับแสดงข้อมูลแบบ Link หรือ Text ธรรมดา
  const renderContactValue = (item) => {
    if (item.isLink) {
      return (
        <a 
          href={item.link}
          target={item.link.startsWith('http') ? "_blank" : ""}
          rel={item.link.startsWith('http') ? "noopener noreferrer" : ""}
          className="text-gray-600 hover:text-green-600 transition duration-300"
        >
          {item.value}
        </a>
      );
    }
    return <p className="text-gray-600">{item.value}</p>;
  };

  return (
    <section id="contact" className="bg-white py-16">
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        {/* หัวข้อส่วน Contact */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-green-600 mb-4">
            ติดต่อฉัน
          </h2>
          <p className="text-gray-600 text-lg">
            สามารถติดต่อฉันได้ผ่านช่องทางต่อไปนี้
          </p>
        </div>

        {/* รายการช่องทางติดต่อ - ใช้ .map() เพื่อวนลูปข้อมูล */}
        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {contactItems.map((item) => (
            <div 
              key={item.id}
              className="bg-green-50 rounded-lg p-6 text-center hover:shadow-lg transition-all duration-300 hover:bg-green-100"
            >
              <div className="flex justify-center mb-4">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold text-green-600 mb-2">
                {item.title}
              </h3>
              {renderContactValue(item)}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Contact;