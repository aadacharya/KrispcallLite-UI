"use client";
import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useRouter } from "next/router";

// Creating the types of message
type Message = {
  sender: string;
  text: string;
};

const initialMessages: Message[] = [
  { sender: "UserA", text: "Hello! How can I help you?" },
  { sender: "UserB", text: "I want to buy a number." },
];

export default function ListMessages() {
  //   const router = useRouter();
  const [messages, setMessages] = useState<Message[]>(initialMessages); // Initialize with initialMessages directly
  const [newMessage, setNewMessage] = useState("");
  //   const [number, setNumber] = useState<string | null>(null);

  const handleSend = () => {
    if (newMessage.trim() === "") return;
    const newMsg = { sender: "UserB", text: newMessage };
    setMessages((prev) => [...prev, newMsg]); // Append new message to the list
    setNewMessage(""); // Clear the input field
  };
  //   useEffect(() => {
  //     if (router.isReady) {
  //       const { number } = router.query;
  //       setNumber(number as string);
  //     }
  //   }, [router.isReady, router.query]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-gray-50">
      {/* <h2>{number ?? "..."}</h2> */}
      <Card className="w-full max-w-md shadow-lg">
        <CardContent className="p-4 space-y-2 h-96 overflow-y-auto bg-white rounded">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`p-2 rounded-md ${
                msg.sender === "UserB"
                  ? "bg-blue-100 text-right"
                  : "bg-gray-200 text-left"
              }`}
            >
              <span className="block text-sm font-semibold">{msg.sender}</span>
              <span className="block text-base">{msg.text}</span>
            </div>
          ))}
        </CardContent>
      </Card>

      <div className="mt-4 flex gap-2 w-full max-w-md">
        <Input
          placeholder="Type your message..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSend();
            }
          }}
        />
        <Button onClick={handleSend}>Send</Button>
      </div>
    </div>
  );
}
