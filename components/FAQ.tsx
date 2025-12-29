
import React, { useState } from 'react';

const FAQ: React.FC = () => {
  const faqs = [
    { q: 'هل أحتاج لنسخة Canva Pro؟', a: 'لا، معظم قوالبنا مصممة لتعمل بسلاسة على النسخة المجانية، وبعضها يفضل Pro للخطوط الخاصة.' },
    { q: 'كيف أحصل على القوالب بعد الدفع؟', a: 'بمجرد إتمام الدفع، ستصلك رسالة بريد إلكتروني تحتوي على روابط الوصول المباشرة للقوالب.' },
    { q: 'هل يمكنني استرجاع أموالي؟', a: 'نظراً للطبيعة الرقمية للمنتج، لا نوفر استرجاع أموال، لكننا نضمن لك الدعم الفني الكامل حتى تعمل القوالب معك.' },
    { q: 'هل القوالب تدعم اللغة العربية؟', a: 'نعم، 100% من القوالب مخصصة لتدعم العربية بأسلوب رياضي احترافي.' },
  ];

  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black mb-4">أسئلة <span className="text-emerald-500">شائعة</span></h2>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden">
              <button 
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                className="w-full p-6 text-right flex justify-between items-center hover:bg-white/5 transition-colors"
              >
                <span className="font-bold">{faq.q}</span>
                <span className={`transform transition-transform ${openIdx === idx ? 'rotate-180' : ''}`}>▼</span>
              </button>
              {openIdx === idx && (
                <div className="p-6 pt-0 text-gray-400 text-sm border-t border-white/5 animate-in fade-in slide-in-from-top-2 duration-300">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
