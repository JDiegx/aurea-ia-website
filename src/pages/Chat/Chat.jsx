import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { sendChatMessage } from '../../services/chatService.js'; 

const Chat = () => {
    const [messages, setMessages] = useState([
        { from: 'bot', text: '¡Hola! ¿En qué puedo ayudarte hoy?' },
    ]);
    const [input, setInput] = useState('');
    const [loading, setLoading] = useState(false);
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, loading]);

    const handleSendMessage = async () => {
        if (!input.trim()) return;

        const userMessage = { from: 'user', text: input };
        setMessages((prev) => [...prev, userMessage]);
        setInput('');
        setLoading(true);

        const token = localStorage.getItem('token'); 

        try {
            const botText = await sendChatMessage(input, token);
            const botMessage = { from: 'bot', text: botText };
            setMessages((prev) => [...prev, botMessage]);
        } catch (error) {
            setMessages((prev) => [
                ...prev,
                { from: 'bot', text: error.message },
            ]);
        } finally {
            setLoading(false);
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') handleSendMessage();
    };

    return (
        <div className="w-screen h-screen bg-[#f9f9f9] flex flex-col font-sans text-[#555555cc]">
            <header className="h-[70px] bg-white border-b px-6 flex items-center justify-between shadow-sm">
                <h2 className="text-xl font-semibold text-gray-800">
                    Aurea<span className="font-bold text-blue-600">IA</span>
                </h2>
            </header>
            <main className="flex-1 overflow-y-auto px-4 py-6 space-y-4">
                {messages.map((msg, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                        className={`rounded-2xl px-4 py-2 max-w-[80%] text-sm ${msg.from === 'bot'
                                ? 'bg-gray-100 text-gray-900 self-start'
                                : 'bg-blue-600 text-white self-end ml-[120px]'
                            }`}
                    >
                        {msg.text}
                    </motion.div>
                ))}

                {loading && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ repeat: Infinity, duration: 1 }}
                        className="bg-gray-100 text-gray-500 text-sm px-4 py-2 rounded-2xl w-fit self-start"
                    >
                        <span className="animate-pulse">
                            Escribiendo<span className="animate-bounce">...</span>
                        </span>
                    </motion.div>
                )}

                <div ref={messagesEndRef} />
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
                    onClick={handleSendMessage}
                    className="ml-3 text-blue-600 text-xl"
                    disabled={loading}
                >
                    ➤
                </motion.button>
            </footer>
        </div>
    );
};

export default Chat;
