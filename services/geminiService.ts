
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const getAIAssistance = async (query: string) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: query,
      config: {
        systemInstruction: "أنت مساعد ذكي لخبير في تصميم قوالب كانفا لكرة القدم. ساعد العملاء في اختيار القوالب المناسبة (مثل بوستات المباراة، إحصائيات اللاعبين، أو التغطية الإخبارية). اجعل ردودك قصيرة، مشجعة، وباللغة العربية.",
      },
    });
    return response.text;
  } catch (error) {
    console.error("Gemini Error:", error);
    return "عذراً، واجهت مشكلة في الاتصال بالمساعد الذكي. كيف يمكنني مساعدتك؟";
  }
};
