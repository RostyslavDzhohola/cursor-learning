'use client'

import { useState } from "react";
import { Message, continueConversation } from "./actions";
import { readStreamableValue } from "ai/rsc";
import UserOnboarding from "@/components/UserOnboarding"; // Correct import path

export default function PromptFiles() {
  const [conversation, setConversation] = useState<Message[]>([]);
  const [input, setInput] = useState<string>("");
  const [onboardingComplete, setOnboardingComplete] = useState(false);
  const [username, setUsername] = useState<string>("");

  if (!onboardingComplete) {
    return <UserOnboarding onComplete={(name) => {
      setUsername(name);
      setOnboardingComplete(true);
    }} />;
  }

  return (
    <div className="p-4 bg-gray-900 min-h-screen text-gray-200">
      <h1 className="text-2xl font-bold mb-4 text-white">AI Chat</h1>
      <p className="mb-4 text-gray-300">Welcome, {username}!</p>
      <div className="mb-4 space-y-2">
        {conversation.map((message, index) => (
          <div key={index} className={`p-2 rounded ${message.role === 'user' ? 'bg-blue-800' : 'bg-green-800'}`}>
            <strong className="text-white">{message.role === 'user' ? username : 'AI'}:</strong> {message.content}
          </div>
        ))}
      </div>
      <div className="flex space-x-2">
        <input
          type="text"
          value={input}
          onChange={(event) => setInput(event.target.value)}
          className="flex-grow border rounded p-2 bg-gray-800 text-white border-gray-700"
          placeholder="Type your message..."
        />
        <button
          onClick={async () => {
            const userMessage: Message = { role: "user", content: input };
            setConversation([...conversation, userMessage]);
            setInput("");

            const { messages, newMessage } = await continueConversation([...conversation, userMessage]);

            let textContent = "";

            for await (const delta of readStreamableValue(newMessage)) {
              textContent = `${textContent}${delta}`;
              setConversation([...messages, { role: "assistant", content: textContent }]);
            }
          }}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
        >
          Send
        </button>
      </div>
    </div>
  );
}