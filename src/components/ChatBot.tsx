import { useState, useEffect, useRef } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { MessageSquare, X } from "lucide-react";
import { FaUser } from "react-icons/fa6";
import { ImSpinner8 } from "react-icons/im"; // Import a spinner icon

interface Message {
    role: "user" | "bot";
    content: string;
    timestamp: string;
}

const ChatBot = () => {
    const [messages, setMessages] = useState<Message[]>([]);
    const [input, setInput] = useState<string>("");
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(false); // Loading state
    const chatContainerRef = useRef<HTMLDivElement>(null); // Reference for chat container
    // Automatically scroll to the bottom of the chat when a new message is added
    useEffect(() => {
        if (chatContainerRef.current) {
            chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
        }
    }, [messages]);

    const sendMessage = async () => {
        if (!input.trim() || isLoading) return; // Prevent sending if input is empty or loading

        const timestamp = new Date().toLocaleTimeString(); // Get current time as the timestamp
        const userMessage: Message = {
            role: "user",
            content: input,
            timestamp,
        };
        setMessages((prevMessages) => [...prevMessages, userMessage]);

        setIsLoading(true); // Set loading to true
        setInput(""); // Clear input after sending message

        try {
            const res = await axios.post("https://portfolio-bot-git-main-ahadul-islams-projects-77abde41.vercel.app/chat", { message: input });
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

    // Handle the 'Enter' key press to send message
    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === "Enter" && !isLoading) {
            e.preventDefault(); 
            sendMessage();
        }
    };

    return (
        <div className="fixed bottom-5 right-5 z-50 text-xs md:text-sm">
            {/* Chat Toggle Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="bg-gradient-to-r from-primary to-secondary font-bold cursor-pointer transition-all duration-1000 ease-in-out hover:bg-gradient-to-r hover:from-secondary hover:to-primary p-3 text-white rounded-full"
            >
                {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
            </button>

            {/* Chat Window (Animated) */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : 50 }}
                transition={{ duration: 0.3 }}
                className={`fixed z-50 bottom-20 right-5 w-80 md:w-96 bg-white border shadow-lg rounded-lg overflow-hidden ${isOpen ? "block" : "hidden"
                    }`}
            >
                {/* Chat Header */}
                <div className="bg-primary text-white px-4 py-2 flex justify-between items-center">
                    <span>Chat with Ahadul's Bot</span>
                    <button onClick={() => setIsOpen(false)} className="text-white cursor-pointer">
                        <X size={20} />
                    </button>
                </div>

                {/* Chat Messages */}
                <div ref={chatContainerRef} className="h-64 md:h-80 overflow-y-auto p-2 z-50">
                    {messages.map((msg, index) => (
                        <div
                            key={index}
                            className={`p-2 my-2 rounded-lg flex gap-3 space-x-2 text-sm ${msg.role === "user" ? "text-black flex-row-reverse text-start" : "bg-gray-200 text-black items-start"
                                }`}
                        >
                            <div className="size-6 p-1 rounded-full border border-primary flex flex-col justify-center items-center">
                                <FaUser size={15} />
                            </div>
                            <div>
                                <div className="text-start">{msg.content}</div>
                                <p className={`${msg.role === 'user' ? "block text-end" : ""} text-[10px] text-gray-500`}>{msg.timestamp}</p>
                            </div>
                        </div>
                    ))}

                    {/* Loading Spinner */}
                    {isLoading && (
                        <div className="p-2 my-2 rounded-lg flex gap-3 space-x-2 text-sm bg-gray-200 text-black items-start">
                            <div className="size-6 p-1 rounded-full border border-primary flex flex-col justify-center items-center">
                                <FaUser size={15} />
                            </div>
                            <div className="flex items-center gap-2">
                                <ImSpinner8 className="animate-spin" /> {/* Spinner icon */}
                                <span>Typing...</span>
                            </div>
                        </div>
                    )}
                </div>

                {/* Chat Input */}
                <div className="flex items-center border-t p-2">
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={handleKeyPress} // Listen for Enter key
                        placeholder="Ask me anything..."
                        className="flex-1 p-1 md:p-2 border rounded-lg"
                        disabled={isLoading} // Disable input while loading
                    />
                    <button
                        onClick={sendMessage}
                        className="ml-2 px-4 py-2 bg-primary text-white rounded-lg cursor-pointer disabled:opacity-50"
                        disabled={isLoading} // Disable button while loading
                    >
                        Send
                    </button>
                </div>
            </motion.div>
        </div>
    );
};

export default ChatBot;