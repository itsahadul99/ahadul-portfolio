/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { BsSendFill } from "react-icons/bs";
import { FaRobot, FaUser } from "react-icons/fa";
import { ImSpinner8 } from "react-icons/im";
interface Message {
    role: "user" | "bot";
    content: string;
    timestamp: string;
}

const ChatBotModal = ({ isOpen, setIsOpen }:any) => {
    const [messages, setMessages] = useState<Message[]>([]);
    const [input, setInput] = useState<string>("");
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const chatContainerRef = useRef<HTMLDivElement>(null);

    // Scroll to the bottom when messages update
    useEffect(() => {
        if (chatContainerRef.current) {
            chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
        }
    }, [messages]);
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, []);
    const sendMessage = async () => {
        if (!input.trim() || isLoading) return;

        const timestamp = new Date().toLocaleTimeString();
        const userMessage: Message = {
            role: "user",
            content: input,
            timestamp,
        };
        setMessages((prevMessages) => [...prevMessages, userMessage]);
        setIsLoading(true);
        setInput("");

        try {
            const res = await axios.post("https://portfolio-bot-lilac.vercel.app/chat", { message: input });
            const botMessage: Message = {
                role: "bot",
                content: res.data.reply,
                timestamp: new Date().toLocaleTimeString(),
            };
            setMessages((prevMessages) => [...prevMessages, botMessage]);
        } catch (error) {
            console.error("Error:", error);
            const errorMessage: Message = {
                role: "bot",
                content: "Sorry, I'm having trouble responding. Please try again later.",
                timestamp: new Date().toLocaleTimeString(),
            };
            setMessages((prevMessages) => [...prevMessages, errorMessage]);
        } finally {
            setIsLoading(false);
        }
    };

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === "Enter" && !isLoading) {
            e.preventDefault();
            sendMessage();
        }
    };
    return (
        <>
            {/* Chat Window */}
            <AnimatePresence >
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 50, scale: 0.8 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 50, scale: 0.8 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="fixed bottom-20 right-5 w-80 md:w-96 bg-white border border-gray-200 shadow-2xl rounded-lg overflow-hidden"
                    >
                        {/* Chat Header */}
                        <div className="bg-gradient-to-r from-primary to-secondary text-white px-4 py-3 flex justify-between items-center">
                            <span className="font-semibold">AhadulAssist 🤖</span>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="text-white hover:text-gray-200 transition-colors cursor-pointer"
                            >
                                <X size={20} />
                            </button>
                        </div>

                        {/* Chat Messages */}
                        <div
                            ref={chatContainerRef}
                            className="h-52 md:h-72 lg:h-[400px] overflow-y-auto p-4 bg-gray-50"
                        >
                            {messages.map((msg, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className={`flex gap-3 my-2 ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                                >
                                    <div
                                        className={`flex items-start gap-2 max-w-[80%] p-3 rounded-lg ${msg.role === "user"
                                            ? "bg-primary text-white"
                                            : "bg-gray-200 text-gray-800"
                                            }`}
                                    >
                                        <div className="flex-shrink-0">
                                            {msg.role === "user" ? (
                                                <FaUser className="text-white" size={16} />
                                            ) : (
                                                <FaRobot className="text-gray-800" size={16} />
                                            )}
                                        </div>
                                        <div>
                                            <p className="text-sm">{msg.content}</p>
                                            <p className="text-[10px] text-gray-400 mt-1">
                                                {msg.timestamp}
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                            {/* Loading Indicator */}
                            {isLoading && (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    className="flex justify-start"
                                >
                                    <div className="bg-gray-200 text-gray-800 p-3 rounded-lg flex items-center gap-2">
                                        <ImSpinner8 className="animate-spin" size={16} />
                                        <span className="text-sm">Typing...</span>
                                    </div>
                                </motion.div>
                            )}
                        </div>

                        {/* Chat Input */}
                        <div className="flex items-center border-t border-gray-200 p-3 bg-white">
                            <input
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                onKeyDown={handleKeyPress}
                                placeholder="Ask me anything..."
                                className="flex-1 p-2 border border-gray-200 rounded-lg focus:outline-none focus:border-primary transition-colors"
                                disabled={isLoading}
                            />
                            <button
                                onClick={sendMessage}
                                className="ml-2 p-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors disabled:opacity-50 cursor-pointer"
                                disabled={isLoading}
                            >
                                <BsSendFill size={18} />
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default ChatBotModal;