
import { GoogleGenAI } from "@google/genai";

export const getDiagnosticResponse = async (history: { role: 'user' | 'assistant', text: string }[]) => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
  
  const formattedHistory = history.map(item => ({
    role: item.role === 'user' ? 'user' : 'model',
    parts: [{ text: item.text }]
  }));

  const systemInstruction = `
    You are a professional plumbing consultant for Towson Pump Pros in Maryland. 
    Your goal is to help customers diagnose potential ejector pump issues. 
    Be helpful, professional, and empathetic. 
    
    Context:
    - We specialize in Ejector Pumps, Grinder Pumps, and Basement Bathroom systems.
    - Signs of failure include: Odd noises (grinding/thumping), foul odors, frequent cycling, or backed-up fixtures.
    - If the issue sounds serious, always recommend a professional inspection by Towson Pump Pros at (844) 340-6413.
    - Keep responses concise (2-3 sentences max per turn).
    - If they ask for a price, explain that prices vary by pump model and installation complexity, so a free on-site estimate is best.
  `;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: history.length === 1 
        ? history[0].text 
        : { parts: [{ text: history[history.length - 1].text }] }, // Simplified for chat flow
      config: {
        systemInstruction,
        temperature: 0.7,
      },
    });

    return response.text || "I'm sorry, I'm having trouble processing that right now. Please call us directly at (844) 340-6413.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I apologize, but I am unable to respond at the moment. Please call our experts at (844) 340-6413 for immediate assistance.";
  }
};
