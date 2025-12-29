
import React, { useState, useRef, useEffect } from 'react';
import { getAIAssistance } from '../services/geminiService';

const AIAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'ai', text: string }[]>([
    { 
      role: 'ai', 
      text: 'مرحباً بك في عالم FootyCanva! ⚽️ هل تبحث عن قوالب ليوم المباراة، إحصائيات اللاعبين، أم تغطية انتقالات خاصة بناديك؟ أخبرني باحتياجاتك وسأقترح عليك الأفضل.' 
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const suggestions = [
    "أريد قوالب ليوم المباراة 🏟️",
    "قوالب إحصائيات اللاعبين 📊",
    "كيف أعدل القوالب في كانفا؟ 🎨",
    "ما هي الباقة المناسبة لي؟ 💰"
  ];

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSend = async (customText?: string) => {
    const textToSend = customText || input;
    if (!textToSend.trim()) return;
    
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: textToSend }]);
    setIsTyping(true);

    const response = await getAIAssistance(textToSend);
    setMessages(prev => [...prev, { role: 'ai', text: response || 'نعتذر، حدث خطأ في معالجة طلبك.' }]);
    setIsTyping(false);
  };

  return (
    <div className="fixed bottom-6 left-6 z-50">
      {isOpen ? (
        <div className="bg-zinc-900 border border-white/10 w-80 md:w-96 rounded-2xl shadow-2xl overflow-hidden flex flex-col animate-in fade-in slide-in-from-bottom-4 duration-300">
          {/* Header */}
          <div className="bg-emerald-600 p-4 flex justify-between items-center shadow-lg">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-black/20 rounded-full flex items-center justify-center">🤖</div>
              <h3 className="font-bold text-white">المساعد الذكي</h3>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-white/80 hover:text-white transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
            </button>
          </div>

          {/* Chat Body */}
          <div ref={scrollRef} className="h-96 overflow-y-auto p-4 space-y-4 bg-black/50">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-start' : 'justify-end'}`}>
                <div className={`max-w-[85%] p-3 rounded-2xl text-sm leading-relaxed ${
                  m.role === 'user' ? 'bg-emerald-600 text-white rounded-tr-none shadow-md' : 'bg-white/10 text-gray-200 rounded-tl-none border border-white/5'
                }`}>
                  {m.text}
                </div>
              </div>
            ))}
            
            {/* Suggestions - Only show if there's only one initial message and not typing */}
            {messages.length === 1 && !isTyping && (
              <div className="flex flex-wrap gap-2 pt-2 justify-end">
                {suggestions.map((suggestion, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSend(suggestion)}
                    className="text-xs bg-white/5 border border-white/10 hover:border-emerald-500/50 hover:bg-emerald-500/10 text-emerald-400 px-3 py-2 rounded-full transition-all text-right"
                  >
                    {suggestion}
                  </button>
                ))}
              </div>
            )}

            {isTyping && (
              <div className="flex justify-end">
                <div className="bg-white/10 p-3 rounded-2xl text-xs text-gray-400 animate-pulse flex items-center gap-2">
                  <div className="flex gap-1">
                    <span className="w-1 h-1 bg-gray-400 rounded-full animate-bounce"></span>
                    <span className="w-1 h-1 bg-gray-400 rounded-full animate-bounce delay-75"></span>
                    <span className="w-1 h-1 bg-gray-400 rounded-full animate-bounce delay-150"></span>
                  </div>
                  جاري التفكير...
                </div>
              </div>
            )}
          </div>

          {/* Input Area */}
          <div className="p-4 border-t border-white/10 bg-zinc-900/50 flex gap-2">
            <input 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="اكتب سؤالك هنا..."
              className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-sm focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all text-white placeholder-gray-500"
            />
            <button 
              onClick={() => handleSend()} 
              disabled={!input.trim()}
              className="bg-emerald-600 p-2.5 rounded-xl hover:bg-emerald-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-md active:scale-95"
            >
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path></svg>
            </button>
          </div>
        </div>
      ) : (
        <button 
          onClick={() => setIsOpen(true)}
          className="bg-emerald-600 text-white w-16 h-16 rounded-full shadow-[0_0_20px_rgba(16,185,129,0.3)] flex items-center justify-center hover:scale-110 hover:bg-emerald-500 transition-all group border-2 border-emerald-400/20"
        >
          <div className="relative">
            <span className="text-3xl group-hover:rotate-12 transition-transform block">⚽️</span>
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-emerald-600 animate-ping"></span>
          </div>
        </button>
      )}
    </div>
  );
};

export default AIAssistant;
