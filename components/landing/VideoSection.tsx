export default function VideoSection() {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Video Player Side */}
          <div className="rounded-lg overflow-hidden shadow-xl bg-gray-800 aspect-video">
            <div className="w-full h-full bg-gray-700">
              <video 
                className="w-full h-full object-cover"
                controls
                autoPlay
                muted
                loop
              >
                <source src="/videos/sanj video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>

          {/* Avatar Side */}
          <div className="rounded-lg overflow-hidden shadow-xl bg-gray-100 dark:bg-gray-700 aspect-video">
            <div className="w-full h-full">
            <video 
                className="w-full h-full object-cover"
                controls
                autoPlay
                muted
                loop
              >
                <source src="/images/sanj video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="flex items-center justify-center h-full text-gray-700 dark:text-white">
                Sign Language Avatar Placeholder
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 