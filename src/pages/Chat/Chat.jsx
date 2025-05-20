import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Chat = () => {
    const [messages, setMessages] = useState([
        { from: 'bot', text: '¡Hola! ¿En qué puedo ayudarte hoy?' }
    ]);
    const [input, setInput] = useState('');

    const sendMessage = async () => {
        if (!input.trim()) return;

        const userMessage = { from: 'user', text: input };
        setMessages(prev => [...prev, userMessage]);

        try {
            const res = await fetch('https://apipymeup-933872953103.us-central1.run.app/chat/financiero', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    conversation_id: 'financ1',
                    prompt: input
                })
            });

            const data = await res.json();
            const botMessage = { from: 'bot', text: data.response || 'Lo siento, no entendí tu mensaje.' };
            setMessages(prev => [...prev, botMessage]);
        } catch (error) {
            setMessages(prev => [...prev, { from: 'bot', text: 'Ocurrió un error. Intenta nuevamente.' }]);
        }

        setInput('');
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') sendMessage();
    };

    return (
        <div className="w-screen h-screen bg-[#f9f9f9] flex flex-col font-sans text-[#555555cc]">
            <header className="h-[70px] bg-white border-b px-6 flex items-center justify-between shadow-sm">
                <h2 className="text-xl font-semibold text-gray-800">Pyme<span className="font-bold text-blue-600">Up</span></h2>
            </header>
            <main className="flex-1 overflow-y-auto px-4 py-6 space-y-4">
                {messages.map((msg, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                        className={`rounded-2xl px-4 py-2 max-w-[80%] text-sm ${
                            msg.from === 'bot'
                                ? 'bg-gray-100 text-gray-900 self-start'
                                : 'bg-blue-600 text-white self-end ml-[120px]'
                        }`}
                    >
                        {msg.text}
                    </motion.div>
                ))}
            </main>
            <footer className="px-4 py-3 bg-white border-t flex items-center">
                <input
                    type="text"
                    placeholder="Escribe un mensaje..."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                    className="flex-grow px-4 py-2 border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                />
                <motion.button
                    whileTap={{ scale: 0.95 }}
                    onClick={sendMessage}
                    className="ml-3 text-blue-600 text-xl"
                >
                    ➤
                </motion.button>
            </footer>
        </div>
    );
};

export default Chat;
