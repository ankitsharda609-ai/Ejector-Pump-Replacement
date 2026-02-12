
import React, { useState, useRef, useEffect } from 'react';
import { getDiagnosticResponse } from '../services/geminiService';
import { PHONE_NUMBER } from '../constants';

const DiagnosticAssistant: React.FC = () => {
  const [messages, setMessages] = useState<{ role: 'user' | 'assistant', text: string }[]>([
    { role: 'assistant', text: "Hello! I'm your Towson Pump Pros assistant. Is your basement pump making strange noises or showing signs of failure? Tell me what's happening." }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || loading) return;

    const userMessage = { role: 'user' as const, text: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setLoading(true);

    const responseText = await getDiagnosticResponse([...messages, userMessage]);
    
    setMessages(prev => [...prev, { role: 'assistant' as const, text: responseText }]);
    setLoading(false);
  };

  return (
    <section id="diagnostic" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900">AI Diagnostic Assistant</h2>
          <p className="mt-4 text-gray-600">Quickly identify if your pump needs replacement before it leads to flooding.</p>
        </div>

        <div className="bg-gray-50 rounded-3xl overflow-hidden shadow-2xl border border-gray-100 flex flex-col h-[600px]">
          {/* Chat Header */}
          <div className="bg-blue-600 p-4 text-white flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <i className="fas fa-robot"></i>
              </div>
              <div>
                <p className="font-bold text-sm">Pump Expert Bot</p>
                <div className="flex items-center space-x-1">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-xs text-blue-100">Ready to help</span>
                </div>
              </div>
            </div>
            <a href={`tel:${PHONE_NUMBER}`} className="text-sm font-bold bg-white/10 px-3 py-1 rounded hover:bg-white/20 transition">
              Call Pro
            </a>
          </div>

          {/* Messages Area */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-4 bg-white">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] p-4 rounded-2xl shadow-sm ${
                  msg.role === 'user' 
                    ? 'bg-blue-600 text-white rounded-tr-none' 
                    : 'bg-gray-100 text-gray-800 rounded-tl-none'
                }`}>
                  <p className="text-sm leading-relaxed">{msg.text}</p>
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="bg-gray-100 p-4 rounded-2xl rounded-tl-none flex space-x-1">
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                </div>
              </div>
            )}
          </div>

          {/* Input Area */}
          <div className="p-4 bg-gray-50 border-t border-gray-200">
            <div className="flex space-x-2">
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Describe your pump noise or issue..."
                className="flex-1 bg-white border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              />
              <button 
                onClick={handleSend}
                disabled={loading || !input.trim()}
                className="bg-blue-600 text-white w-12 h-12 rounded-xl flex items-center justify-center hover:bg-blue-700 transition disabled:bg-blue-300 shadow-lg shadow-blue-600/20"
              >
                <i className="fas fa-paper-plane"></i>
              </button>
            </div>
            <p className="text-[10px] text-gray-400 mt-2 text-center uppercase tracking-widest font-semibold">
              Powered by Gemini 3 Flash AI
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiagnosticAssistant;
