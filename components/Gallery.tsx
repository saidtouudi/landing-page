
import React, { useState, useEffect } from 'react';

const categories = ['الكل', 'يوم المباراة', 'إحصائيات', 'نقل لاعبين', 'قصص (Stories)'];

const SkeletonCard = () => (
  <div className="animate-pulse">
    <div className="relative aspect-square rounded-2xl bg-white/5 border border-white/10 mb-4 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full animate-[shimmer_2s_infinite]"></div>
    </div>
    <div className="h-5 bg-white/10 rounded-md w-3/4 mb-2"></div>
    <div className="h-4 bg-white/5 rounded-md w-1/2"></div>
  </div>
);

const Gallery: React.FC = () => {
  const [activeTab, setActiveTab] = useState('الكل');
  const [isLoading, setIsLoading] = useState(true);

  const templates = [
    { id: 1, title: 'تشكيلة المباراة', category: 'يوم المباراة', img: 'https://picsum.photos/seed/foot-1/400/400' },
    { id: 2, title: 'تقييم اللاعبين', category: 'إحصائيات', img: 'https://picsum.photos/seed/foot-2/400/400' },
    { id: 3, title: 'أخبار الانتقالات', category: 'نقل لاعبين', img: 'https://picsum.photos/seed/foot-3/400/400' },
    { id: 4, title: 'النتيجة النهائية', category: 'يوم المباراة', img: 'https://picsum.photos/seed/foot-4/400/400' },
    { id: 5, title: 'مواعيد المباريات', category: 'قصص (Stories)', img: 'https://picsum.photos/seed/foot-5/400/400' },
    { id: 6, title: 'ملخص إحصائي', category: 'إحصائيات', img: 'https://picsum.photos/seed/foot-6/400/400' },
  ];

  useEffect(() => {
    // Simulate initial data fetching
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  const handleTabChange = (cat: string) => {
    setIsLoading(true);
    setActiveTab(cat);
    // Simulate re-fetching filtered data
    setTimeout(() => setIsLoading(false), 600);
  };

  const filtered = activeTab === 'الكل' ? templates : templates.filter(t => t.category === activeTab);

  return (
    <section id="templates" className="py-24">
      <style>{`
        @keyframes shimmer {
          100% { transform: translateX(100%); }
        }
      `}</style>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="text-right">
            <h2 className="text-4xl font-black mb-4">استكشف <span className="text-emerald-500">المكتبة</span></h2>
            <p className="text-gray-400">أكثر من 50 قالباً مخصصاً لكل احتياجاتك الرياضية.</p>
          </div>
          <div className="flex flex-wrap gap-2 justify-start">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => handleTabChange(cat)}
                className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${
                  activeTab === cat ? 'bg-emerald-600 text-white' : 'bg-white/5 text-gray-400 hover:bg-white/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {isLoading ? (
            // Render 6 skeleton cards while loading
            Array.from({ length: 6 }).map((_, i) => <SkeletonCard key={i} />)
          ) : (
            filtered.map(item => (
              <div key={item.id} className="group cursor-pointer animate-in fade-in duration-500">
                <div className="relative aspect-square rounded-2xl overflow-hidden border border-white/10 mb-4 bg-zinc-900">
                  <img 
                    src={item.img} 
                    alt={item.title} 
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-sm">
                    <button className="bg-white text-black px-6 py-2 rounded-full font-bold transform translate-y-4 group-hover:translate-y-0 transition-transform">
                      معاينة القالب
                    </button>
                  </div>
                </div>
                <h3 className="text-lg font-bold">{item.title}</h3>
                <p className="text-sm text-gray-500">{item.category}</p>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
