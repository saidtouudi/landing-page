
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="hero-glow"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-right">
            <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
              اجعل محتوى <br />
              <span className="gradient-text">كرة القدم</span> مذهلاً
            </h1>
            <p className="text-xl text-gray-400 mb-8 max-w-lg ml-auto">
              أفضل قوالب كانفا (Canva) القابلة للتعديل بالكامل لأندية كرة القدم، المحللين، وصناع المحتوى الرياضي. احترافية في دقائق!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-end">
              <a href="#templates" className="bg-emerald-600 text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-emerald-700 transition-all text-center">
                استعرض القوالب
              </a>
              <a href="#preview" className="border border-white/20 bg-white/5 text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-all text-center backdrop-blur-sm">
                تجربة ديمو
              </a>
            </div>
            <div className="mt-12 flex items-center gap-6 justify-end">
              <div className="text-center">
                <p className="text-2xl font-bold">500+</p>
                <p className="text-sm text-gray-500">عميل سعيد</p>
              </div>
              <div className="h-10 w-px bg-white/10"></div>
              <div className="text-center">
                <p className="text-2xl font-bold">50+</p>
                <p className="text-sm text-gray-500">قالب حصري</p>
              </div>
              <div className="h-10 w-px bg-white/10"></div>
              <div className="text-center">
                <p className="text-2xl font-bold">4.9/5</p>
                <p className="text-sm text-gray-500">تقييم الخدمة</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-emerald-900/20 transform rotate-3 hover:rotate-0 transition-transform duration-500 border border-white/10">
              <img 
                src="https://picsum.photos/seed/football1/800/600" 
                alt="Football Template Preview" 
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-6">
                <div>
                  <span className="bg-emerald-500 text-black text-xs font-bold px-2 py-1 rounded uppercase tracking-wider">الأكثر مبيعاً</span>
                  <h3 className="text-xl font-bold mt-2">مجموعة يوم المباراة الاحترافية</h3>
                </div>
              </div>
            </div>
            {/* Floating Elements */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-emerald-500/20 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-10 -left-10 bg-black/40 border border-white/10 backdrop-blur-md p-4 rounded-xl hidden md:block">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-emerald-600 rounded-full flex items-center justify-center">🎨</div>
                <div>
                  <p className="text-sm font-bold">تعديل فوري</p>
                  <p className="text-xs text-gray-400">يدعم Canva المجاني</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
