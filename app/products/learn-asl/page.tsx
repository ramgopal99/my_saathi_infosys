"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import MaxWidthWrapper from "@/components/shared/max-width-wrapper";

export default function LearnASLPage() {
  const [input, setInput] = useState<string>("");
  const [signs, setSigns] = useState<string[]>([]);

  const convertToSigns = async () => {
    // Clear previous images
    setSigns([]);
    
    const words = input.toLowerCase().trim().split(' ');
    const signArray: string[] = [];

    for (const word of words) {
      const wordPath = `/sign/${word}.png`;
      
      try {
        await new Promise((resolve) => {
          const img = new window.Image();
          img.onload = async () => {
            signArray.push(wordPath);
            setSigns([...signArray]);
            await new Promise(r => setTimeout(r, 1000)); // 1 second delay
            resolve(true);
          };
          img.onerror = async () => {
            const characters = word.split('');
            for (const char of characters) {
              if (char.match(/[a-z0-9]/)) {
                const signPath = `/sign/${char}.png`;
                signArray.push(signPath);
                setSigns([...signArray]);
                await new Promise(r => setTimeout(r, 1000)); // 1 second delay
              }
            }
            resolve(false);
          };
          img.src = wordPath;
        });
      } catch (error) {
        console.error('Error loading image:', error);
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-indigo-600 to-indigo-700">
      <MaxWidthWrapper className="py-20">
        <div className="flex flex-col-reverse lg:flex-row lg:gap-20">
          {/* Left Section - Enhanced Input and Controls */}
          <div className="lg:w-1/2 space-y-12 mt-10 lg:mt-0">
            <div className="space-y-8">
              <div>
                <h2 className="text-5xl font-bold text-white mb-4">
                  Learn Sign Language <span className="text-yellow-400">Instantly</span>
                </h2>
                <p className="text-gray-100 text-xl leading-relaxed">
                  Transform your words into sign language with our real-time translator. Perfect for beginners and ASL enthusiasts!
                </p>
              </div>
              
              <div className="space-y-8">
                {/* Search Bar with Icon */}
                <div className="relative">
                  <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                  <input
                    id="text"
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    className="w-full rounded-2xl border-2 border-gray-100 bg-white pl-12 p-6 text-lg shadow-xl transition-all duration-200 focus:border-yellow-400 focus:ring-4 focus:ring-yellow-400/20"
                    placeholder="Enter any word or phrase to translate..."
                  />
                </div>

                <Button 
                  onClick={convertToSigns}
                  className="w-full rounded-2xl bg-gradient-to-r from-yellow-400 to-yellow-500 py-7 text-lg font-semibold text-indigo-900 transition-all hover:opacity-90 hover:shadow-xl hover:scale-[1.02] duration-200"
                  variant="default"
                >
                  Translate Now →
                </Button>

                {/* Feature Highlights */}
                <div className="grid grid-cols-2 gap-4 mt-8">
                  {[
                    { icon: "🚀", title: "Instant Translation", desc: "Real-time word to sign conversion" },
                    { icon: "📚", title: "Learn Naturally", desc: "Letter by letter breakdown" },
                    { icon: "💡", title: "Smart Detection", desc: "Handles words and characters" },
                    { icon: "🎯", title: "Perfect Practice", desc: "Visual learning approach" },
                  ].map((feature, index) => (
                    <div key={index} className="rounded-xl bg-white/10 p-4 backdrop-blur-sm">
                      <div className="text-2xl mb-2">{feature.icon}</div>
                      <h3 className="text-white font-semibold">{feature.title}</h3>
                      <p className="text-gray-200 text-sm">{feature.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Section - Enhanced Display Area */}
          <div className="lg:w-1/2">
            <div className="rounded-3xl border border-white/20 bg-white/10 p-8 shadow-2xl backdrop-blur-md">
              <h1 className="text-white text-4xl font-bold mb-6">
                Watch Your Signs Come to Life
              </h1>
              
              <div className="h-[400px] rounded-2xl border border-white/20 bg-white/5 p-8 relative shadow-inner backdrop-blur-sm">
                {signs.length > 0 ? (
                  <div className="flex items-center justify-center h-full">
                    <div className="relative w-full h-full max-w-[300px] max-h-[300px] mx-auto">
                      <Image
                        src={signs[signs.length - 1]}
                        alt="Sign Language Symbol"
                        fill
                        className="object-contain drop-shadow-lg"
                      />
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center h-full space-y-4">
                    <div className="w-20 h-20 rounded-full bg-yellow-400/20 flex items-center justify-center">
                      <span className="text-4xl">👋</span>
                    </div>
                    <p className="text-white text-center text-xl">
                      Start typing to see the magic happen!
                    </p>
                  </div>
                )}
              </div>

              {/* History Section */}
              {signs.length > 0 && (
                <div className="mt-6">
                  <h3 className="text-white text-lg mb-3">Translation History</h3>
                  <div className="flex gap-3 overflow-x-auto py-3">
                    {signs.map((sign, index) => (
                      <div 
                        key={index}
                        className="relative w-20 h-20 flex-shrink-0 rounded-2xl border border-white/20 bg-white/10 p-3 shadow-lg transition-all duration-200 hover:scale-110 hover:shadow-xl backdrop-blur-sm"
                      >
                        <Image
                          src={sign}
                          alt={`Sign ${index + 1}`}
                          fill
                          className="object-contain"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
} 