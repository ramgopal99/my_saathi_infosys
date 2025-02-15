"use client"

import Image from 'next/image';
import { useState, useRef } from 'react';

export default function VideoSection() {
  const [showGif, setShowGif] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleVideoPlay = () => {
    setShowGif(true);
  };

  const handleVideoPause = () => {
    setShowGif(false);
  };

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            How Our LMS Works
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Watch how our Learning Management System transforms sign language education. 
            Our AI-powered avatar provides real-time demonstrations to enhance your learning experience.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Video Player Side */}
          <div className="rounded-lg overflow-hidden shadow-xl bg-gray-800 aspect-video">
            <div className="w-full h-full bg-gray-700">
              <video 
                ref={videoRef}
                className="w-full h-full object-cover"
                controls
                muted
                loop
                playsInline
                onPlay={handleVideoPlay}
                onPause={handleVideoPause}
              >
                <source src="/images/hello.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>

          {/* Avatar Side */}
          {showGif && (
            <div className="rounded-lg overflow-hidden shadow-xl bg-gray-100 dark:bg-gray-700 aspect-video">
              <div className="w-full h-full">
                <Image
                  src="/images/hello.gif"
                  alt="Sign Language Avatar"
                  className="w-full h-full object-contain"
                  width={640}
                  height={480}
                  unoptimized={true}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
} 