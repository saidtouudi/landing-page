
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-white/10 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-2">
            <span className="text-2xl font-black gradient-text tracking-tighter mb-6 block">FOOTYCANVA</span>
            <p className="text-gray-500 max-w-sm">نحن نساعد الأندية وصناع المحتوى الرياضي على تقديم محتوى بصري احترافي ينافس كبرى القنوات الرياضية العالمية.</p>
          </div>
          <div>
            <h4 className="font-bold mb-4">روابط سريعة</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#hero" className="hover:text-emerald-500">الرئيسية</a></li>
              <li><a href="#templates" className="hover:text-emerald-500">القوالب</a></li>
              <li><a href="#pricing" className="hover:text-emerald-500">الأسعار</a></li>
              <li><a href="#faq" className="hover:text-emerald-500">الأسئلة</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">تواصل معنا</h4>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-emerald-600 transition-colors">𝕏</a>
              <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-emerald-600 transition-colors"></a>
              <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-emerald-600 transition-colors">📱</a>
            </div>
          </div>
        </div>
        <div className="pt-8 border-t border-white/5 text-center text-sm text-gray-600">
          <p>© 2024 FootyCanva. جميع الحقوق محفوظة.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
