
import React from 'react';

const Pricing: React.FC = () => {
  const plans = [
    {
      name: 'الباقة الأساسية',
      price: '$19',
      features: ['10 قوالب مختارة', 'دعم Canva المجاني', 'تعديلات غير محدودة', 'خطوط عربية مدمجة'],
      isPopular: false
    },
    {
      name: 'باقة المحترفين',
      price: '$49',
      features: ['+50 قالب احترافي', 'تحديثات شهرية مجانية', 'فيديو تعليمي للتعديل', 'دعم فني سريع', 'قوالب فيديو (Reels)'],
      isPopular: true
    },
    {
      name: 'باقة الأندية',
      price: '$199',
      features: ['تصميم هوية مخصصة', 'قوالب حصرية للنادي', 'دعم VIP 24/7', 'تعديل 5 قوالب شهرياً منا'],
      isPopular: false
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black mb-4">اختر <span className="text-emerald-500">باقتك</span></h2>
          <p className="text-gray-400">استثمر في هويتك البصرية اليوم ووفر ساعات من العمل.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, idx) => (
            <div 
              key={idx} 
              className={`relative p-8 rounded-3xl border transition-all ${
                plan.isPopular 
                ? 'bg-emerald-600/10 border-emerald-500 scale-105 z-10' 
                : 'bg-white/5 border-white/10 hover:border-white/30'
              }`}
            >
              {plan.isPopular && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-emerald-500 text-black px-4 py-1 rounded-full text-xs font-bold uppercase">الأكثر طلباً</span>
              )}
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <div className="flex items-baseline gap-1 mb-8">
                <span className="text-4xl font-black">{plan.price}</span>
                <span className="text-gray-500 text-sm">/ دفع مرة واحدة</span>
              </div>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-center gap-3 text-sm text-gray-300">
                    <span className="text-emerald-500">✓</span> {feature}
                  </li>
                ))}
              </ul>
              <button className={`w-full py-4 rounded-xl font-bold transition-all ${
                plan.isPopular ? 'bg-emerald-600 hover:bg-emerald-700 text-white' : 'bg-white/10 hover:bg-white/20 text-white'
              }`}>
                اطلبها الآن
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
