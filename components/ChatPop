// ChatPop.js
import React, { useState } from 'react';

const ChatPop = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  return (
    <div>
      {/* Floating Chat Button */}
      <button
        onClick={toggleChat}
        className="fixed bottom-5 right-5 bg-blue-500 text-white rounded-full w-12 h-12 flex items-center justify-center text-2xl shadow-lg hover:bg-blue-600 transition duration-300"
      >
        💬
      </button>

      {/* Chat iframe */}
      {isChatOpen && (
        <div className="fixed bottom-20 right-5 w-80 h-96 bg-white rounded-lg shadow-lg overflow-hidden">
          <iframe
            src="https://www.chatbase.co/chatbot-iframe/wdz6FxNoGkbk_0dG9xb8R"
            width="100%"
            height="100%"
            frameBorder="0"
            title="ChatBot"
          />
          <button
            onClick={toggleChat}
            className="absolute top-6 right-12 text-gray-500 hover:text-gray-700 text-lg"
          >
            ✖️
          </button>
        </div>
      )}
    </div>
  );
};

export default ChatPop;
