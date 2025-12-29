
import React from 'react';

const Features: React.FC = () => {
  const features = [
    { title: 'سهولة التعديل', description: 'قم بتغيير الألوان، الخطوط، والصور بضغطة زر واحدة عبر كانفا.', icon: '⚡' },
    { title: 'دقة عالية (4K)', description: 'جميع القوالب مصممة بأعلى جودة لضمان ظهورها بشكل رائع على جميع الشاشات.', icon: '💎' },
    { title: 'دعم اللغة العربية', description: 'تم اختيار خطوط عربية احترافية تناسب هويتك البصرية الرياضية.', icon: '🇸🇦' },
    { title: 'تحديثات مجانية', description: 'نضيف قوالب جديدة باستمرار لمواكبة تريندات الموسم الرياضي.', icon: '🔄' },
  ];

  return (
    <section className="py-24 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black mb-4">لماذا تختار <span className="text-emerald-500">قوالبنا؟</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto">صممناها بعناية لتناسب احتياجات المحللين والأندية التي تبحث عن التميز.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => (
            <div key={idx} className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:border-emerald-500/50 transition-all hover:bg-emerald-500/5 group">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform inline-block">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
