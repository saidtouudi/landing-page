
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <span className="text-2xl font-black gradient-text tracking-tighter">FOOTY<span className="text-white">CANVA</span></span>
          </div>
          <div className="hidden md:block">
            <div className="flex items-baseline space-x-8 space-x-reverse">
              <a href="#hero" className="text-gray-300 hover:text-emerald-400 px-3 py-2 text-sm font-medium transition-colors">الرئيسية</a>
              <a href="#templates" className="text-gray-300 hover:text-emerald-400 px-3 py-2 text-sm font-medium transition-colors">القوالب</a>
              <a href="#pricing" className="text-gray-300 hover:text-emerald-400 px-3 py-2 text-sm font-medium transition-colors">الأسعار</a>
              <a href="#faq" className="text-gray-300 hover:text-emerald-400 px-3 py-2 text-sm font-medium transition-colors">الأسئلة</a>
              <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2 rounded-full font-bold transition-all transform hover:scale-105">
                اشترِ الآن
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
