/* eslint-disable @typescript-eslint/no-explicit-any */
import { MessageSquare, X } from "lucide-react";
import ChatBotModal from "./ChatBotModal";
const ChatBot = ({ isOpen, setIsOpen }: any) => {
    return (
        <div className="fixed bottom-5 right-5 z-50">
            {/* Chat Toggle Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="bg-gradient-to-r from-primary to-secondary font-bold cursor-pointer transition-all duration-300 ease-in-out hover:scale-105 p-3 text-white rounded-full shadow-lg flex items-center justify-center gap-2"
            >
                {isOpen ? (
                    <>
                        <span>Close</span>
                        <X size={24} />
                    </>
                ) : (
                    <>
                        <MessageSquare size={24} />
                        <span>Ask Me</span>
                    </>
                )}
            </button>
            {
                isOpen && <ChatBotModal isOpen={isOpen} setIsOpen={setIsOpen} />
            }
        </div>
    );
};

export default ChatBot;
