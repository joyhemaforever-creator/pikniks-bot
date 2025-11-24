"use client";

import React, { useState, useEffect, useRef } from "react";
import { Send, MapPin, Info, RefreshCcw, MessageCircle } from "lucide-react";
import { categories, places, generalInfo, Category, Place } from "@/data/picnicData";

interface Message {
    id: string;
    text: string;
    sender: "bot" | "user";
    type?: "text" | "categories" | "places" | "place-details" | "general-info";
    data?: any;
}

export default function ChatInterface() {
    const [messages, setMessages] = useState<Message[]>([]);
    const [inputText, setInputText] = useState("");
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    useEffect(() => {
        // Initial greeting
        setMessages([
            {
                id: "1",
                text: "Hello! Welcome to Pikniks. I can help you find the perfect one-day picnic spot around Ahmedabad. What are you looking for?",
                sender: "bot",
                type: "categories",
            },
        ]);
    }, []);

    const handleSendMessage = (text: string) => {
        if (!text.trim()) return;

        const newUserMessage: Message = {
            id: Date.now().toString(),
            text: text,
            sender: "user",
        };

        setMessages((prev) => [...prev, newUserMessage]);
        setInputText("");

        // Smart keyword matching
        setTimeout(() => {
            processBotResponse(text);
        }, 500);
    };

    const processBotResponse = (text: string) => {
        const lowerText = text.toLowerCase().trim();

        // 1. Check for specific categories
        const matchedCategory = categories.find(cat => lowerText.includes(cat.toLowerCase()));
        if (matchedCategory) {
            handleCategorySelect(matchedCategory);
            return;
        }

        // 2. Check for specific places
        const matchedPlace = places.find(place =>
            place.name.toLowerCase().includes(lowerText) ||
            place.id.includes(lowerText.replace(/\s+/g, '-'))
        );

        if (matchedPlace) {
            // Check if user is asking for price specifically
            if (lowerText.includes("price") || lowerText.includes("cost") || lowerText.includes("package") || lowerText.includes("ticket")) {
                const botMsg: Message = {
                    id: (Date.now() + 1).toString(),
                    text: `Here are the pricing details for ${matchedPlace.name}:`,
                    sender: "bot",
                    type: "place-details",
                    data: matchedPlace,
                };
                setMessages((prev) => [...prev, botMsg]);
            } else {
                handlePlaceSelect(matchedPlace);
            }
            return;
        }

        // 3. Check for General Info (News, Clients)
        if (lowerText.includes("news") || lowerText.includes("update") || lowerText.includes("latest")) {
            const newsData = generalInfo.find(info => info.title === "Travel News");
            if (newsData) {
                setMessages(prev => [...prev, {
                    id: Date.now().toString(),
                    text: "Here is the latest Travel News:",
                    sender: "bot",
                    type: "general-info",
                    data: newsData
                }]);
                return;
            }
        }

        if (lowerText.includes("client") || lowerText.includes("corporate") || lowerText.includes("school")) {
            const clientData = generalInfo.find(info => info.title === "Corporate & School Clients");
            if (clientData) {
                setMessages(prev => [...prev, {
                    id: Date.now().toString(),
                    text: "Here are some of our esteemed clients:",
                    sender: "bot",
                    type: "general-info",
                    data: clientData
                }]);
                return;
            }
        }

        // 4. Fallback / Keyword Search
        // Search in descriptions
        const searchResults = places.filter(place =>
            place.description.toLowerCase().includes(lowerText) ||
            place.category.toLowerCase().includes(lowerText)
        );

        if (searchResults.length > 0) {
            setMessages(prev => [...prev, {
                id: Date.now().toString(),
                text: `I found ${searchResults.length} places matching "${text}":`,
                sender: "bot",
                type: "places",
                data: searchResults
            }]);
            return;
        }

        // Default response
        let botResponse: Message = {
            id: (Date.now() + 1).toString(),
            text: "I'm not sure I understand. Please choose a category below or ask about a specific place, price, or news.",
            sender: "bot",
            type: "categories",
        };

        setMessages((prev) => [...prev, botResponse]);
    };

    const handleCategorySelect = (category: Category) => {
        const filteredPlaces = places.filter((p) => p.category === category);

        const userMsg: Message = {
            id: Date.now().toString(),
            text: category,
            sender: "user"
        };

        const botMsg: Message = {
            id: (Date.now() + 1).toString(),
            text: `Here are some ${category} options for you:`,
            sender: "bot",
            type: "places",
            data: filteredPlaces,
        };

        setMessages((prev) => [...prev, userMsg, botMsg]);
    };

    const handlePlaceSelect = (place: Place) => {
        const userMsg: Message = {
            id: Date.now().toString(),
            text: place.name,
            sender: "user"
        };

        const botMsg: Message = {
            id: (Date.now() + 1).toString(),
            text: `Great choice! Here are the details for ${place.name}:`,
            sender: "bot",
            type: "place-details",
            data: place,
        };

        setMessages((prev) => [...prev, userMsg, botMsg]);
    };

    const handleReset = () => {
        setMessages([
            {
                id: Date.now().toString(),
                text: "Let's start over. What kind of trip are you planning?",
                sender: "bot",
                type: "categories",
            },
        ]);
    };

    return (
        <div className="flex flex-col h-[600px] w-full max-w-md bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200 relative">
            {/* Header */}
            <div className="bg-blue-600 p-4 text-white flex justify-between items-center z-10">
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                        <MapPin size={18} />
                    </div>
                    <h1 className="font-bold text-lg">Pikniks Bot</h1>
                </div>
                <div className="flex items-center gap-2">
                    <a
                        href="https://wa.me/918200924878"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-green-500 hover:bg-green-600 rounded-full transition-colors flex items-center justify-center"
                        title="Chat on WhatsApp"
                    >
                        <MessageCircle size={18} />
                    </a>
                    <button onClick={handleReset} className="p-2 hover:bg-white/10 rounded-full transition-colors" title="Reset Chat">
                        <RefreshCcw size={18} />
                    </button>
                </div>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
                {messages.map((msg) => (
                    <div
                        key={msg.id}
                        className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
                    >
                        <div
                            className={`max-w-[85%] rounded-2xl p-3 ${msg.sender === "user"
                                ? "bg-blue-600 text-white rounded-tr-none"
                                : "bg-white text-gray-800 shadow-sm border border-gray-100 rounded-tl-none"
                                }`}
                        >
                            <p className="text-sm whitespace-pre-wrap">{msg.text}</p>

                            {/* Categories View */}
                            {msg.type === "categories" && (
                                <div className="mt-3 flex flex-wrap gap-2">
                                    {categories.map((cat) => (
                                        <button
                                            key={cat}
                                            onClick={() => handleCategorySelect(cat)}
                                            className="text-xs bg-blue-50 text-blue-600 px-3 py-1.5 rounded-full border border-blue-100 hover:bg-blue-100 transition-colors font-medium"
                                        >
                                            {cat}
                                        </button>
                                    ))}
                                </div>
                            )}

                            {/* Places View */}
                            {msg.type === "places" && msg.data && (
                                <div className="mt-3 space-y-2">
                                    {msg.data.map((place: Place) => (
                                        <button
                                            key={place.id}
                                            onClick={() => handlePlaceSelect(place)}
                                            className="w-full text-left text-sm p-2 rounded-lg bg-gray-50 hover:bg-gray-100 border border-gray-200 transition-colors flex items-center justify-between group"
                                        >
                                            <span>{place.name}</span>
                                            <span className="text-gray-400 group-hover:text-blue-500">→</span>
                                        </button>
                                    ))}
                                </div>
                            )}

                            {/* Place Details View */}
                            {msg.type === "place-details" && msg.data && (
                                <div className="mt-3 bg-gray-50 rounded-lg p-3 border border-gray-200">
                                    <h3 className="font-bold text-gray-900 mb-1">{msg.data.name}</h3>
                                    <p className="text-xs text-gray-600 mb-2">{msg.data.description}</p>
                                    <div className="flex items-center gap-1 text-xs text-blue-600 mb-2">
                                        <MapPin size={12} />
                                        <span>{msg.data.distance}</span>
                                    </div>

                                    {/* Pricing Packages */}
                                    {msg.data.pricing && msg.data.pricing.length > 0 && (
                                        <div className="mt-3 mb-3">
                                            <h4 className="text-xs font-bold text-gray-800 mb-2">Packages & Pricing:</h4>
                                            <div className="space-y-2">
                                                {msg.data.pricing.map((pkg: any, idx: number) => (
                                                    <div key={idx} className="bg-white p-2 rounded border border-gray-100">
                                                        <div className="flex justify-between items-start">
                                                            <span className="text-xs font-medium text-gray-800">{pkg.name}</span>
                                                            <span className="text-xs font-bold text-green-600">{pkg.price}</span>
                                                        </div>
                                                        {pkg.details && (
                                                            <p className="text-[10px] text-gray-500 mt-1">{pkg.details}</p>
                                                        )}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}

                                    {msg.data.link && (
                                        <a
                                            href={msg.data.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-xs bg-blue-600 text-white px-3 py-1.5 rounded-md inline-block hover:bg-blue-700 transition-colors"
                                        >
                                            View More Details
                                        </a>
                                    )}
                                </div>
                            )}

                            {/* General Info View */}
                            {msg.type === "general-info" && msg.data && (
                                <div className="mt-3 bg-gray-50 rounded-lg p-3 border border-gray-200">
                                    <h3 className="font-bold text-gray-900 mb-2">{msg.data.title}</h3>
                                    <ul className="list-disc list-inside space-y-1">
                                        {msg.data.items.map((item: string, idx: number) => (
                                            <li key={idx} className="text-xs text-gray-700">{item}</li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                    </div>
                ))}
                <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-4 bg-white border-t border-gray-100">
                <div className="flex gap-2">
                    <input
                        type="text"
                        value={inputText}
                        onChange={(e) => setInputText(e.target.value)}
                        onKeyDown={(e) => e.key === "Enter" && handleSendMessage(inputText)}
                        placeholder="Type a message..."
                        className="flex-1 bg-gray-100 border-0 rounded-full px-4 py-2 text-sm focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                    />
                    <button
                        onClick={() => handleSendMessage(inputText)}
                        disabled={!inputText.trim()}
                        className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    >
                        <Send size={18} />
                    </button>
                </div>
            </div>
        </div>
    );
}
